import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { ArticleShare } from "@/components/ui/article-share"
import { ButtonLink } from "@/components/ui/button"
import { RichText } from "@/components/ui/rich-text"
import { JsonLd } from "@/components/seo/json-ld"
import { getContent } from "@/lib/content"
import { getArticle } from "@/lib/content/articles"
import { site } from "@/lib/content/site"
import { localeMeta, absoluteUrl } from "@/lib/i18n/core"
import { pageMetadata } from "@/lib/seo"
import { getT } from "@/lib/i18n/server"

const PATH = "/recursos/que-aprendimos-construyendo-un-saas-desde-cero"

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getT()
  const a = getArticle(getContent(locale).articles, "que-aprendimos-construyendo-un-saas-desde-cero")
  return pageMetadata({
    locale,
    path: PATH,
    title: a.title,
    description: a.description,
    keywords: t.raw<string[]>("article.keywords"),
    type: "article",
    article: { publishedTime: a.date, authors: [site.founder.name] },
    image: { url: a.ogImage, alt: `${a.title} — Kodexa` },
  })
}

export default async function SaasLearningsArticle() {
  const { locale, t } = await getT()
  const a = getArticle(getContent(locale).articles, "que-aprendimos-construyendo-un-saas-desde-cero")
  const url = absoluteUrl(site.url, PATH, locale)
  const blocks = t.raw<{ t: "p" | "pi" | "h2" | "closing"; x: string }[]>("article.blocks")
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: a.title,
          description: a.description,
          image: `${site.url}${a.ogImage}`,
          url,
          datePublished: a.date,
          dateModified: a.date,
          inLanguage: localeMeta[locale].htmlLang,
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          author: { "@type": "Person", name: site.founder.name, url: site.url, jobTitle: "Founder" },
          publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: `${site.url}/favicon.png` } },
        }}
      />
      <PageHero
        path={PATH}
        crumbs={[{ name: "Kodexa", href: "/" }, { name: t("recursos.crumb"), href: "/recursos" }, { name: t("article.crumb") }]}
        eyebrow={t("article.eyebrow")}
        title={a.title}
        lead={t("article.lead")}
      />

      <article className="wrap-narrow prose-kx pb-16 pt-6 text-lg md:pb-24">
        <p className="!mt-0 text-sm text-ink-faint">{t("article.byline", { name: site.founder.name, time: a.readingTime })}</p>

        {blocks.map((b, i) => {
          if (b.t === "h2") return <h2 key={i}>{b.x}</h2>
          if (b.t === "pi") return <p key={i} className="italic"><RichText text={b.x} /></p>
          if (b.t === "closing") return <p key={i} className="!text-xl !text-ink"><RichText text={b.x} /></p>
          return <p key={i}><RichText text={b.x} /></p>
        })}

        <div className="mt-10">
          <ButtonLink href="/contacto">{t("article.cta")}</ButtonLink>
        </div>
      </article>

      <div className="wrap-narrow pb-28">
        <ArticleShare title={a.title} storyImage={a.storyImage} />
      </div>
    </>
  )
}
