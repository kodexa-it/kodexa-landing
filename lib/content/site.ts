/** Datos globales del sitio. Única fuente para URLs, contacto y flags de comportamiento. */

export const site = {
  name: "Kodexa",
  url: "https://kodexa.ar",
  locale: "es_AR",
  tagline: "Estudio digital de diseño y desarrollo",
  description:
    "Diseñamos y desarrollamos sitios web, aplicaciones y sistemas a medida para negocios. Además, Nexo (asistente digital) y Nodo (CRM), nuestras propias soluciones.",
  whatsappNumber: "5491178148150",
  instagram: "https://www.instagram.com/kodexa.it/",
  founder: {
    name: "Lautaro Aquino",
    role: "Founder & Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/lautaro-aquino-007a1625b/",
    portfolio: "https://lautaroaquino.com/",
  },
  partner: { name: "Uno Collective", url: "https://www.unocollective.com/" },
  /** Valor del formulario de Forminit actualmente en producción. */
  forminitFormId: "920afmph8yf",
} as const

/**
 * Las previews no se indexan; el sitio publicado sí.
 * - NEXT_PUBLIC_SITE_PREVIEW ("true"/"false"), si está definida, manda.
 * - Si no, se usa el contexto de build de Netlify: solo "production" indexa
 *   (deploy-preview y branch-deploy quedan bloqueados).
 * - Fuera de Netlify y sin la variable, se indexa.
 */
const previewEnv = process.env.NEXT_PUBLIC_SITE_PREVIEW
const netlifyContext = process.env.CONTEXT
export const isPreview =
  previewEnv !== undefined && previewEnv !== ""
    ? previewEnv !== "false"
    : netlifyContext !== undefined && netlifyContext !== "production"

/** Analítica de terceros (GTM): solo en el build de producción del sitio publicado. */
export const loadTracking = process.env.NODE_ENV === "production" && !isPreview

/**
 * Precios iniciales publicados hoy en kodexa.ar. Su vigencia está pendiente de confirmación:
 * poniendo esto en false se ocultan de todas las páginas de detalle sin tocar nada más.
 */
export const showPrices = true

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const nav = [
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Productos", href: "/productos" },
  { label: "Estudio", href: "/estudio" },
] as const
