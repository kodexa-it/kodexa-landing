import { site } from "./site"

/**
 * Diferenciamos la participación de Kodexa:
 *  - cliente: trabajo desarrollado para un cliente directo
 *  - colaboracion: participación parcial (desarrollo y arquitectura) dentro de otro equipo
 *  - propio: producto de Kodexa
 */
export type ProjectKind = "cliente" | "colaboracion" | "propio"

export type Project = {
  slug: string
  title: string
  category: string
  kind: ProjectKind
  summary: string
  image?: string
  imageAlt?: string
  url?: string
  status?: string
  via?: string
  bullets?: string[]
  /** Iniciales para la presentación tipográfica cuando no hay imagen. */
  mark?: string
}

export const kindLabel: Record<ProjectKind, string> = {
  cliente: "Trabajo para cliente",
  colaboracion: "Participación parcial",
  propio: "Producto propio",
}

// Contenido heredado de kodexa.ar (lib/works.ts). No se agregaron métricas ni resultados.
export const projects: Project[] = [
  {
    slug: "peabody-argentina",
    title: "Peabody Argentina",
    category: "Plataforma multi-país",
    kind: "colaboracion",
    summary: "Arquitectura escalable con gestión centralizada y despliegue multi-región.",
    image: "/images/peabody.webp",
    imageAlt: "Sitio de Peabody Argentina dentro de una ventana de navegador",
    url: "https://peabody.com.ar/",
    via: site.partner.name,
  },
  {
    slug: "waste-treatment",
    title: "Waste Treatment",
    category: "Sitio institucional dinámico",
    kind: "cliente",
    summary:
      "Sitio institucional con arquitectura basada en API y sistema de gestión (ABM), diseñado para optimizar la gestión de contenido, mejorar la escalabilidad y facilitar la operación del negocio.",
    image: "/images/waste-treatment.png",
    imageAlt: "Inicio del sitio de Waste Treatment, gestión de residuos industriales",
    status: "En desarrollo",
    bullets: ["Sistema de gestión (ABM)", "Integración mediante API", "Arquitectura escalable", "Contenido dinámico"],
  },
  {
    slug: "mega-promociones",
    title: "Mega Promociones",
    category: "Sistema de landings",
    kind: "colaboracion",
    summary: "Gestión dinámica de campañas con despliegue rápido.",
    image: "/images/mega.webp",
    imageAlt: "Landing de campaña de Mega Promociones dentro de una ventana de navegador",
    url: "https://mega-promociones.com.mx/",
    via: site.partner.name,
  },
  {
    slug: "freschi",
    title: "Freschi",
    category: "Sitio multi-idioma",
    kind: "colaboracion",
    summary: "Web adaptable a múltiples mercados con i18n.",
    image: "/images/freschi.webp",
    imageAlt: "Sitio de Andrés Freschi dentro de una ventana de navegador",
    url: "https://andresfreschi.com/",
    via: site.partner.name,
  },
  {
    slug: "bigsur-energy",
    title: "Bigsur Energy",
    category: "Landing de conversión",
    kind: "colaboracion",
    summary: "Landing optimizada para captación de leads.",
    image: "/images/bigsur.webp",
    imageAlt: "Landing de Bigsur Energy dentro de una ventana de navegador",
    url: "https://bigsur.energy/",
    via: site.partner.name,
  },
]

export const featuredSlugs = ["peabody-argentina", "waste-treatment", "mega-promociones", "bigsur-energy"]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
