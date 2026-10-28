import { site } from "@/lib/content/site"
import { localeMeta, toPublicPath, type Locale } from "@/lib/i18n/core"
import type { T } from "@/lib/i18n/messages"

type Faq = { question: string; answer: string }

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}

/** `path` es la ruta canónica interna (/servicios/mvp); se publica con la URL del idioma. */
export const breadcrumbLd = (items: { name: string; path: string }[], locale: Locale) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => {
    const p = toPublicPath(item.path, locale)
    return { "@type": "ListItem", position: i + 1, name: item.name, item: `${site.url}${p === "/" ? "" : p}` }
  }),
})

export const faqLd = (items: Faq[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: { "@type": "Answer", text: q.answer },
  })),
})

/** Organización + sitio + servicio profesional, en el idioma de la página. */
export const organizationLd = (locale: Locale, t: T) => {
  const home = `${site.url}${toPublicPath("/", locale) === "/" ? "" : toPublicPath("/", locale)}`
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: `${site.url}/favicon.png`,
      description: t("meta.orgDescription"),
      founder: { "@type": "Person", name: site.founder.name, sameAs: [site.founder.linkedin] },
      sameAs: [site.linkedin, site.instagram],
    },
    { "@context": "https://schema.org", "@type": "WebSite", name: site.name, url: home, inLanguage: localeMeta[locale].htmlLang },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: site.name,
      url: home,
      image: `${site.url}/og-image.png`,
      founder: { "@type": "Person", name: site.founder.name },
      areaServed: [{ "@type": "Country", name: "Argentina" }, "Worldwide"],
      serviceType: t.raw<string[]>("meta.serviceTypes"),
    },
  ]
}
