export type ProductInterest = "nexo" | "nodo" | "bundle" | "unknown"
export type LeadType = "web" | "software" | "product" | "other"

export const products = {
  nexo: {
    name: "Nexo",
    badge: "NX",
    tagline: "Tu asistente digital.",
    description:
      "Atiende a tus clientes por WhatsApp, responde consultas y gestiona reservas por vos, usando la información real de tu negocio.",
    cta: "Conocer Nexo",
    href: "/productos/nexo",
  },
  nodo: {
    name: "Nodo",
    badge: "ND",
    tagline: "Tu CRM.",
    description:
      "Organizá tus clientes, leads y oportunidades en un solo lugar, con seguimiento y tareas para que ninguna consulta quede sin respuesta.",
    cta: "Conocer Nodo",
    href: "/productos/nodo",
  },
} as const

export const ecosystem = [
  {
    key: "web",
    name: "WEB",
    title: "Tu presencia digital.",
    hook: "Hacé que te encuentren.",
    href: "/servicios/desarrollo-web",
  },
  {
    key: "nexo",
    name: "NEXO",
    title: "Atención y automatización.",
    hook: "Hacé que puedan atenderte.",
    href: "/productos/nexo",
  },
  {
    key: "nodo",
    name: "NODO",
    title: "Gestión comercial.",
    hook: "Hacé que puedas organizar lo que pasa con tus clientes.",
    href: "/productos/nodo",
  },
] as const
