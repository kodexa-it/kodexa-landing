import { trackEvent } from "@/lib/analytics"
import { getAttribution } from "@/lib/attribution"
import type { T } from "@/lib/i18n/messages"

/**
 * Identifica un botón de WhatsApp. Los valores son identificadores estables (no texto visible):
 * - location: dónde está (hero, services, projects, products, contact, navbar, footer, floating, cta_final…)
 * - label:    qué botón es dentro de esa ubicación
 * - service:  servicio o producto asociado, si corresponde
 */
export type WhatsappCta = { location: string; label: string; service?: string }

let last = { key: "", at: 0 }

/**
 * Registra un clic en WhatsApp. Se llama desde el onClick del enlace y nunca bloquea la navegación:
 *  1. Evento `whatsapp_click` en dataLayer (GTM → GA4) y en Vercel Analytics. Sin datos personales.
 *  2. Aviso al servidor (/api/interaction), que lo guarda en la pestaña "Interacciones" de la planilla.
 *     Usa fetch con keepalive para que el pedido termine aunque el navegador cambie de pestaña.
 * Cualquier falla se ignora: el visitante siempre llega a WhatsApp.
 */
export function trackWhatsappClick(cta: WhatsappCta) {
  if (typeof window === "undefined") return
  try {
    // Evita registrar dos veces el mismo botón por un doble clic.
    const now = Date.now()
    const key = `${cta.location}|${cta.label}`
    if (key === last.key && now - last.at < 800) return
    last = { key, at: now }

    const pagePath = window.location.pathname
    trackEvent("whatsapp_click", {
      cta_location: cta.location,
      page_path: pagePath,
      cta_label: cta.label,
      contact_method: "whatsapp",
      ...(cta.service ? { service_type: cta.service } : {}),
    })

    void fetch("/api/interaction", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        event_type: "whatsapp_click",
        page_path: pagePath,
        cta_location: cta.location,
        cta_label: cta.label,
        service_type: cta.service ?? "",
        ...getAttribution(),
      }),
    }).catch(() => {})
  } catch {}
}

/** Mensaje precargado a partir de lo que la persona completó en el formulario (en el idioma de la página). */
export function buildLeadWhatsappMessage(
  v: {
    name: string
    business?: string
    projectType?: string
    contactMethod: "whatsapp" | "email"
    email?: string
    message?: string
  },
  t: T,
  /** Nombre del servicio tal como lo ve la persona (traducido). */
  projectLabel?: string,
) {
  const business = v.business?.trim()
  const name = v.name.trim()
  const lines = [business ? t("form.whatsappLead.introBusiness", { name, business }) : t("form.whatsappLead.intro", { name })]
  const type = projectLabel ?? v.projectType
  if (type) lines.push(t("form.whatsappLead.interested", { type }))
  const msg = v.message?.trim()
  if (msg) lines.push(msg.length > 500 ? `${msg.slice(0, 497)}…` : msg)
  if (v.contactMethod === "email" && v.email) lines.push(t("form.whatsappLead.email", { email: v.email }))
  return lines.join("\n")
}
