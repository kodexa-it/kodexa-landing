import type { FaqItem } from "./services"

export type ProductInterest = "nexo" | "nodo" | "bundle" | "unknown"
export type LeadType = "web" | "software" | "product" | "other"

type Block = { title: string; text: string }

export type Product = {
  slug: "nexo" | "nodo"
  name: string
  badge: string
  /** Isotipo propio (si existe). */
  logo?: string
  /** Sitio del producto, cuando ya existe. */
  site?: { url: string; label: string; image: string; imageAlt: string }
  tagline: string
  summary: string
  /** Estado real. Nexo: en producción (fuente: artículo publicado). Nodo: ver nota. */
  status: string
  statusTone: "live" | "building"
  eyebrow: string
  heroTitle: string
  heroLead: string
  cta: string
  problem: string
  solution: string
  benefits?: Block[]
  stepsTitle: string
  steps: Block[]
  featuresTitle: string
  features: Block[]
  ecosystemIntro: string
  technical?: string
  contact: { title: string; description: string; submitLabel: string; interest: ProductInterest }
  metaTitle: string
  metaDescription: string
  keywords: string[]
  faq?: FaqItem[]
}

export const products: Record<Product["slug"], Product> = {
  nexo: {
    slug: "nexo",
    name: "Nexo",
    badge: "NX",
    logo: "/brand/nexo-mark.png",
    site: {
      url: "https://nexo.kodexa.ar/",
      label: "nexo.kodexa.ar",
      image: "/images/nexo.png",
      imageAlt: "Inicio de nexo.kodexa.ar: el asistente inteligente para tu negocio",
    },
    tagline: "Tu asistente digital.",
    summary:
      "Atiende a tus clientes por WhatsApp, responde consultas y gestiona reservas por vos, usando la información real de tu negocio.",
    status: "En producción",
    statusTone: "live",
    eyebrow: "Producto Kodexa",
    heroTitle: "Nexo: tu asistente digital para atender y gestionar tu negocio",
    heroLead:
      "Una solución de Kodexa para mejorar y automatizar la atención de tu negocio. Nexo aprende cómo trabajás y ayuda a atender clientes, responder consultas y gestionar reservas.",
    cta: "Conocer Nexo",
    problem:
      "Muchos negocios pierden tiempo respondiendo las mismas preguntas, gestionando reservas manualmente y con su información repartida entre WhatsApp, planillas y la memoria de alguien del equipo.",
    solution:
      "Nexo centraliza esa operación en un asistente que conoce tu negocio: atiende a tus clientes por WhatsApp, responde consultas y gestiona las reservas, con un panel de administración para tenerlo todo bajo control.",
    benefits: [
      { title: "Menos tiempo respondiendo lo mismo", text: "Nexo responde las consultas frecuentes con la información de tu negocio, para que vos te dediques a atender." },
      { title: "Reservas sin coordinar a mano", text: "Los clientes reservan según tu disponibilidad real, por WhatsApp o desde tu sitio, sin idas y vueltas." },
      { title: "Todo en un solo lugar", text: "Servicios, horarios, reservas y conversaciones centralizados, no repartidos entre chats y planillas." },
      { title: "Vos tenés el control", text: "Podés pausar el asistente en cualquier conversación, tomar el control y revisar cada cambio que propone antes de aplicarlo." },
    ],
    stepsTitle: "Cómo funciona",
    steps: [
      { title: "Contale cómo funciona tu negocio", text: "Conversás con Nexo para cargar tus servicios, horarios y preguntas frecuentes. Vos confirmás lo que se guarda." },
      { title: "Conectá tu WhatsApp", text: "Vinculás tu número con un código QR y Nexo empieza a responder a tus clientes." },
      { title: "Nexo atiende y gestiona reservas", text: "Responde consultas, agenda turnos con tu disponibilidad y te avisa cuando hace falta que intervenga una persona." },
    ],
    featuresTitle: "Funcionalidades",
    features: [
      { title: "Asistente conversacional con IA", text: "Entrenado con la información propia de cada negocio, con tono y personalidad configurables." },
      { title: "Integración con WhatsApp", text: "El canal donde ya están tus clientes, con historial de conversaciones y respuesta manual cuando la necesites." },
      { title: "Gestión de reservas y turnos", text: "Horarios, servicios y recursos (canchas, salas, profesionales) con disponibilidad calculada automáticamente." },
      { title: "Señas y comprobantes", text: "Pedí una seña para confirmar el turno y revisá los comprobantes desde el mismo panel." },
      { title: "Sitio público con reserva online", text: "Una página de tu negocio, con widget de reservas, generada a partir de tus datos." },
      { title: "Carta digital con QR", text: "Subí tu carta en PDF y compartila con un código QR." },
      { title: "Panel de administración", text: "Turnos, estadísticas y notificaciones para gestionar el negocio desde un solo lugar." },
      { title: "Planes y suscripción", text: "Planes de pago con Mercado Pago para empezar de forma simple." },
    ],
    ecosystemIntro:
      "Nexo funciona por sí solo. Si además tenés Nodo, las reservas que entran por Nexo se convierten en leads dentro de tu CRM, y tu web puede ser el punto de partida.",
    technical:
      "Construido sobre Next.js y PostgreSQL, con modelos de lenguaje para el asistente conversacional y una integración directa con WhatsApp. La arquitectura está pensada para sostener suscripciones, múltiples negocios y crecimiento a largo plazo.",
    contact: {
      title: "Quiero conocer Nexo",
      description: "Contanos cómo es tu negocio y cómo atendés hoy a tus clientes. Te mostramos cómo podría ayudarte Nexo.",
      submitLabel: "Quiero conocer Nexo",
      interest: "nexo",
    },
    metaTitle: "Nexo | Asistente digital para negocios",
    metaDescription:
      "Nexo es el asistente digital de Kodexa: atiende a tus clientes por WhatsApp, responde consultas y gestiona reservas con la información real de tu negocio.",
    keywords: ["asistente digital para negocios", "asistente con inteligencia artificial", "atención por WhatsApp", "reservas online", "Nexo"],
  },
  nodo: {
    slug: "nodo",
    name: "Nodo",
    badge: "ND",
    tagline: "Tu CRM.",
    summary:
      "Organizá tus clientes, leads y oportunidades en un solo lugar, con seguimiento y tareas para que ninguna consulta quede sin respuesta.",
    // PENDIENTE DE CONFIRMAR: el repositorio ../crm figura en fase de bootstrap técnico (README); el sitio actual
    // lo presenta sin aclarar estado. Hasta que se confirme, se muestra como "En desarrollo".
    status: "En desarrollo",
    statusTone: "building",
    eyebrow: "Producto Kodexa",
    heroTitle: "Nodo: el CRM para organizar y gestionar tus clientes",
    heroLead:
      "Centralizá clientes, leads y oportunidades en un solo lugar y hacé seguimiento de cada conversación comercial sin que nada se pierda.",
    cta: "Conocer Nodo",
    problem:
      "Las consultas llegan por WhatsApp, mail y redes, y el seguimiento vive en planillas, notas sueltas o en la memoria de alguien del equipo. Cuando crece el volumen, se pierden oportunidades.",
    solution:
      "Nodo reúne toda la información comercial de tu negocio y te ayuda a saber con quién hablar, qué sigue y qué quedó pendiente.",
    stepsTitle: "Cómo funciona",
    steps: [
      { title: "Reuní tus contactos", text: "Cargá tus clientes y leads o importalos, en lugar de tenerlos repartidos en planillas y chats." },
      { title: "Organizá tu proceso comercial", text: "Ordená las oportunidades por etapas y sabé en qué punto está cada una." },
      { title: "Hacé seguimiento", text: "Usá tareas y recordatorios para que ninguna consulta quede sin respuesta." },
    ],
    featuresTitle: "Qué podés organizar con Nodo",
    features: [
      { title: "Clientes", text: "Contactos y empresas con su información y su historial en un solo lugar." },
      { title: "Leads", text: "Registrá cada consulta o prospecto y sabé de dónde llegó." },
      { title: "Oportunidades", text: "Seguí cada posible venta a lo largo de las etapas de tu proceso comercial." },
      { title: "Seguimiento", text: "Actividad y recordatorios para retomar cada conversación a tiempo." },
      { title: "Tareas", text: "Organizá lo que hay que hacer con cada cliente y no dejes nada librado a la memoria." },
      { title: "Información comercial", text: "Etiquetas, estados y campos personalizados para adaptar el CRM a cómo trabaja tu negocio." },
    ],
    ecosystemIntro:
      "Nodo funciona por sí solo. Si además usás Nexo, las reservas que entran por el asistente se convierten en leads dentro de tu CRM, con su origen identificado.",
    contact: {
      title: "Quiero conocer Nodo",
      description: "Contanos cómo hacés hoy el seguimiento de tus clientes. Te mostramos cómo podría ayudarte Nodo.",
      submitLabel: "Quiero conocer Nodo",
      interest: "nodo",
    },
    metaTitle: "Nodo | CRM para negocios",
    metaDescription:
      "Nodo es el CRM de Kodexa: organizá clientes, leads y oportunidades, y hacé seguimiento comercial con tareas y toda la información en un solo lugar.",
    keywords: ["CRM para negocios", "CRM para pymes", "gestión de clientes", "seguimiento de leads", "Nodo"],
  },
}

export const productList = [products.nexo, products.nodo]

export const ecosystem = [
  { key: "web", name: "Web", title: "Tu presencia digital.", hook: "Hacé que te encuentren.", href: "/servicios/desarrollo-web" },
  { key: "nexo", name: "Nexo", title: "Atención y automatización.", hook: "Hacé que puedan atenderte.", href: "/productos/nexo" },
  { key: "nodo", name: "Nodo", title: "Gestión comercial.", hook: "Hacé que puedas organizar lo que pasa con tus clientes.", href: "/productos/nodo" },
] as const
