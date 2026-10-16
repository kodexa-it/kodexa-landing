import { site } from "@/lib/content/site"
import type { FaqItem } from "@/lib/content/services"

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${site.url}${item.path}`,
  })),
})

export const faqLd = (items: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: { "@type": "Answer", text: q.answer },
  })),
})

/** Organización + sitio + servicio profesional. Mismos datos que kodexa.ar, con la descripción actualizada. */
export const organizationLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/favicon.png`,
    description:
      "Estudio digital especializado en diseño y desarrollo de sitios web, aplicaciones, sistemas a medida y productos digitales.",
    founder: { "@type": "Person", name: site.founder.name },
    sameAs: [site.founder.linkedin, site.instagram],
  },
  { "@context": "https://schema.org", "@type": "WebSite", name: site.name, url: site.url, inLanguage: "es-AR" },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    image: `${site.url}/og-image.png`,
    founder: { "@type": "Person", name: site.founder.name },
    areaServed: [{ "@type": "Country", name: "Argentina" }, "Worldwide"],
    serviceType: [
      "Desarrollo web",
      "Desarrollo de software a medida",
      "Plataformas y aplicaciones web",
      "Desarrollo de MVP",
      "Desarrollo de productos SaaS",
    ],
  },
]
