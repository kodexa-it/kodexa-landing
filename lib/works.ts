export type Work = {
  title: string
  category: string
  description: string
  image?: string
  url?: string
  badge?: string
  bullets?: string[]
  status?: string
  via?: string
}

const UNO = "Uno Collective"

// Trabajos realizados para clientes. Única fuente de datos para el Home y /proyectos.
export const works: Work[] = [
  {
    title: "Peabody Argentina",
    category: "Plataforma Multi-país",
    description:
      "Arquitectura escalable con gestión centralizada y despliegue multi-región.",
    image: "/images/peabody.webp",
    url: "https://peabody.com.ar/",
    via: UNO,
  },
  {
    title: "Mega Promociones",
    category: "Sistema de Landings",
    description: "Gestión dinámica de campañas con despliegue rápido.",
    image: "/images/mega.webp",
    url: "https://mega-promociones.com.mx/",
    via: UNO,
  },
  {
    title: "Freschi",
    category: "Sitio Multi-idioma",
    description: "Web adaptable a múltiples mercados con i18n.",
    image: "/images/freschi.webp",
    url: "https://andresfreschi.com/",
    via: UNO,
  },
  {
    title: "Bigsur Energy",
    category: "Landing de Conversión",
    description: "Optimizada para captación de leads.",
    image: "/images/bigsur.webp",
    url: "https://bigsur.energy/",
    via: UNO,
  },
  {
    title: "Waste Treatment",
    category: "Sitio institucional dinámico",
    description:
      "Sitio institucional con arquitectura basada en API y sistema de gestión (ABM), diseñado para optimizar la gestión de contenido, mejorar la escalabilidad y facilitar la operación del negocio.",
    badge: "WT",
    bullets: [
      "Sistema de gestión (ABM)",
      "Integración mediante API",
      "Arquitectura escalable",
      "Contenido dinámico",
    ],
    status: "En desarrollo",
  },
]
