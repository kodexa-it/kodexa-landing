import { track } from "@vercel/analytics"

type EventProps = Record<string, string | number | boolean | null>

/**
 * Único punto de medición de eventos de conversión.
 * - Vercel Analytics ya mide las visitas por ruta (/, /productos, /productos/nexo, /productos/nodo).
 * - Si más adelante se suma GTM / Google Ads, los eventos ya salen por window.dataLayer.
 */
export function trackEvent(name: string, props?: EventProps) {
  if (typeof window === "undefined") return
  // Idioma de la página (es / en) en todos los eventos; nunca datos personales.
  props = { language: document.documentElement.lang.slice(0, 2) || "es", ...props }
  try {
    track(name, props)
  } catch {}
  try {
    ;(window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({
      event: name,
      ...props,
    })
  } catch {}
}
