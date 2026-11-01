export type Article = {
  slug: string
  title: string
  description: string
  date: string
  readingTime: string
  ogImage: string
  storyImage: string
}

// URL y archivos heredados de kodexa.ar: no cambian para conservar el SEO del artículo.
export const articles: Article[] = [
  {
    slug: "de-los-requerimientos-a-una-solucion-digital-a-medida",
    title: "De los requerimientos a una solución digital a medida",
    description: "Del relevamiento al diseño y desarrollo de una web institucional a medida para una empresa de residuos: un proyecto en curso, contado con transparencia.",
    date: "2026-10-28",
    readingTime: "5 min",
    ogImage: "/recursos/de-los-requerimientos-a-una-solucion-og.png",
    storyImage: "/recursos/de-los-requerimientos-a-una-solucion-story.png",
  },
  {
    slug: "que-aprendimos-construyendo-un-saas-desde-cero",
    title: "Qué aprendimos construyendo un SaaS desde cero",
    description: "Cómo construimos Nexo, nuestro SaaS con IA: decisiones de producto, arquitectura y pagos, y lo que aprendimos en el camino. Un vistazo detrás de escena.",
    date: "2026-09-08",
    readingTime: "9 min",
    ogImage: "/recursos/que-aprendimos-construyendo-un-saas-og.png",
    storyImage: "/recursos/que-aprendimos-construyendo-un-saas-story.png",
  },
  {
    slug: "cuanto-cuesta-una-pagina-web-en-argentina",
    title: "¿Cuánto cuesta una página web en Argentina?",
    description: "Qué define el precio de una página web en Argentina, cuánto parte una landing o un sitio institucional y cómo evitar sorpresas al pedir un presupuesto.",
    date: "2026-10-31",
    readingTime: "5 min",
    ogImage: "/recursos/cuanto-cuesta-una-pagina-web-en-argentina-og.png",
    storyImage: "/recursos/cuanto-cuesta-una-pagina-web-en-argentina-story.png",
  },
  {
    slug: "sitio-web-vs-aplicacion-web",
    title: "Sitio web vs. aplicación web: cuál necesita tu negocio",
    description: "La diferencia entre un sitio web y una aplicación web, cómo saber cuál necesitás y cómo cambian el alcance, el presupuesto y el mantenimiento de tu proyecto.",
    date: "2026-10-31",
    readingTime: "4 min",
    ogImage: "/recursos/sitio-web-vs-aplicacion-web-og.png",
    storyImage: "/recursos/sitio-web-vs-aplicacion-web-story.png",
  },
  {
    slug: "landing-page-vs-sitio-institucional",
    title: "Landing page vs. sitio institucional: cuándo conviene cada uno",
    description: "Qué diferencia a una landing page de un sitio institucional, qué debe tener cada uno, cuánto parten y cómo elegir según tu objetivo de negocio.",
    date: "2026-10-31",
    readingTime: "4 min",
    ogImage: "/recursos/landing-page-vs-sitio-institucional-og.png",
    storyImage: "/recursos/landing-page-vs-sitio-institucional-story.png",
  },
]

export const getArticle = (list: Article[], slug: string) => {
  const a = list.find((x) => x.slug === slug)
  if (!a) throw new Error(`Artículo desconocido: ${slug}`)
  return a
}
