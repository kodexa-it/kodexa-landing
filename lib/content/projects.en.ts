import { site } from "./site"
import type { Project, ProjectKind } from "./projects"

// English version of lib/content/projects.ts: faithful translation of the existing descriptions.
// No metrics, results or testimonials are added. Client names and URLs are unchanged.
export const kindLabelEn: Record<ProjectKind, string> = {
  cliente: "Client work",
  colaboracion: "Partial involvement",
  propio: "Own product",
}

export const projectsEn: Project[] = [
  {
    slug: "peabody-argentina",
    title: "Peabody Argentina",
    category: "Multi-country platform",
    kind: "colaboracion",
    summary: "Scalable architecture with centralized management and multi-region deployment.",
    image: "/images/peabody.webp",
    imageAlt: "Peabody Argentina website inside a browser window",
    url: "https://peabody.com.ar/",
    via: site.partner.name,
  },
  {
    slug: "waste-treatment",
    title: "Waste Treatment",
    category: "Dynamic corporate website",
    kind: "cliente",
    summary:
      "Corporate website with an API-based architecture and a management system (CRUD), designed to streamline content management, improve scalability and make day-to-day operations easier.",
    caseStudy: "/recursos/de-los-requerimientos-a-una-solucion-digital-a-medida",
    image: "/images/waste-treatment.png",
    imageAlt: "Home page of the Waste Treatment website, an industrial waste management company (the live site is in Spanish)",
    status: "In development",
    bullets: ["Management system (CRUD)", "API integration", "Scalable architecture", "Dynamic content"],
  },
  {
    slug: "mega-promociones",
    title: "Mega Promociones",
    category: "Landing page system",
    kind: "colaboracion",
    summary: "Dynamic campaign management with fast deployment.",
    image: "/images/mega.webp",
    imageAlt: "Mega Promociones campaign landing page inside a browser window",
    url: "https://mega-promociones.com.mx/",
    via: site.partner.name,
  },
  {
    slug: "freschi",
    title: "Freschi",
    category: "Multi-language website",
    kind: "colaboracion",
    summary: "Website adaptable to multiple markets with i18n.",
    image: "/images/freschi.webp",
    imageAlt: "Andrés Freschi website inside a browser window",
    url: "https://andresfreschi.com/",
    via: site.partner.name,
  },
  {
    slug: "bigsur-energy",
    title: "Bigsur Energy",
    category: "Conversion landing page",
    kind: "colaboracion",
    summary: "Landing page optimized for lead generation.",
    image: "/images/bigsur.webp",
    imageAlt: "Bigsur Energy landing page inside a browser window",
    url: "https://bigsur.energy/",
    via: site.partner.name,
  },
]
