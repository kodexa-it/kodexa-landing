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
    slug: "que-aprendimos-construyendo-un-saas-desde-cero",
    title: "Qué aprendimos construyendo un SaaS desde cero",
    description:
      "Un vistazo detrás de escena de cómo construimos Nexo, qué decisiones tomamos y qué aprendimos desarrollando un producto SaaS real.",
    date: "2026-09-08",
    readingTime: "9 min",
    ogImage: "/recursos/que-aprendimos-construyendo-un-saas-og.png",
    storyImage: "/recursos/que-aprendimos-construyendo-un-saas-story.png",
  },
]
