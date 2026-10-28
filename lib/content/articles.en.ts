import type { Article } from "./articles"

// English version of the article metadata. The Spanish article is translated in full
// (app/[lang]/recursos/…/page.tsx reads both bodies from messages/<lang>/article.json).
export const articlesEn: Article[] = [
  {
    slug: "de-los-requerimientos-a-una-solucion-digital-a-medida",
    title: "From requirements to a custom digital solution",
    description:
      "From the initial discovery to the design and development of a custom corporate website for a waste management company. A project in progress, told transparently.",
    date: "2026-10-28",
    readingTime: "5 min",
    ogImage: "/recursos/de-los-requerimientos-a-una-solucion-og.png",
    storyImage: "/recursos/de-los-requerimientos-a-una-solucion-story.png",
  },
  {
    slug: "que-aprendimos-construyendo-un-saas-desde-cero",
    title: "What we learned building a SaaS from scratch",
    description:
      "A behind-the-scenes look at how we built Nexo, the decisions we made and what we learned developing a real SaaS product.",
    date: "2026-09-08",
    readingTime: "9 min",
    ogImage: "/recursos/que-aprendimos-construyendo-un-saas-og.png",
    storyImage: "/recursos/que-aprendimos-construyendo-un-saas-story.png",
  },
]
