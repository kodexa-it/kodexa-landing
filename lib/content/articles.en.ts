import type { Article } from "./articles"

// English version of the article metadata. The Spanish article is translated in full
// (app/[lang]/recursos/…/page.tsx reads both bodies from messages/<lang>/article.json).
export const articlesEn: Article[] = [
  {
    slug: "de-los-requerimientos-a-una-solucion-digital-a-medida",
    title: "From requirements to a custom digital solution",
    description: "From discovery to design and development of a custom corporate website for a waste management company: a project in progress, told transparently.",
    date: "2026-10-28",
    readingTime: "5 min",
    ogImage: "/recursos/de-los-requerimientos-a-una-solucion-og.png",
    storyImage: "/recursos/de-los-requerimientos-a-una-solucion-story.png",
  },
  {
    slug: "que-aprendimos-construyendo-un-saas-desde-cero",
    title: "What we learned building a SaaS from scratch",
    description: "How we built Nexo, our AI-powered SaaS: product, architecture and payment decisions, and what we learned along the way. A behind-the-scenes look.",
    date: "2026-09-08",
    readingTime: "9 min",
    ogImage: "/recursos/que-aprendimos-construyendo-un-saas-og.png",
    storyImage: "/recursos/que-aprendimos-construyendo-un-saas-story.png",
  },
  {
    slug: "cuanto-cuesta-una-pagina-web-en-argentina",
    title: "How much does a website cost in Argentina?",
    description: "What sets the price of a website in Argentina, where a landing page or corporate site starts, and how to avoid surprises when asking for a quote.",
    date: "2026-10-31",
    readingTime: "5 min",
    ogImage: "/recursos/cuanto-cuesta-una-pagina-web-en-argentina-og-en.png",
    storyImage: "/recursos/cuanto-cuesta-una-pagina-web-en-argentina-story-en.png",
  },
  {
    slug: "sitio-web-vs-aplicacion-web",
    title: "Website vs. web application: which one does your business need?",
    description: "The difference between a website and a web application, how to tell which one you need, and how scope, budget and maintenance change for your project.",
    date: "2026-10-31",
    readingTime: "4 min",
    ogImage: "/recursos/sitio-web-vs-aplicacion-web-og-en.png",
    storyImage: "/recursos/sitio-web-vs-aplicacion-web-story-en.png",
  },
  {
    slug: "landing-page-vs-sitio-institucional",
    title: "Landing page vs. corporate website: when each one makes sense",
    description: "What sets a landing page apart from a corporate website, what each should include, where each one starts and how to choose based on your goal.",
    date: "2026-10-31",
    readingTime: "4 min",
    ogImage: "/recursos/landing-page-vs-sitio-institucional-og-en.png",
    storyImage: "/recursos/landing-page-vs-sitio-institucional-story-en.png",
  },
]
