import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { ArticleShare } from "@/components/ui/article-share"
import { ButtonLink } from "@/components/ui/button"
import { EmailLink } from "@/components/ui/email-link"
import { RichText } from "@/components/ui/rich-text"
import { JsonLd } from "@/components/seo/json-ld"
import { CaseCover } from "@/components/case/cover"
import { CaseFigure } from "@/components/case/figure"
import { DiscoveryBoard } from "@/components/case/discovery-board"
import { ConceptMockups } from "@/components/case/concept-mockups"
import { RealGallery } from "@/components/case/real-gallery"
import { FeatureGrid } from "@/components/case/feature-grid"
import { StatusSteps } from "@/components/case/status-steps"
import { getContent } from "@/lib/content"
import { getArticle } from "@/lib/content/articles"
import { contactEmail, site, whatsappHref } from "@/lib/content/site"
import { localeMeta, absoluteUrl } from "@/lib/i18n/core"
import { pageMetadata } from "@/lib/seo"
import { getT } from "@/lib/i18n/server"

const SLUG = "de-los-requerimientos-a-una-solucion-digital-a-medida"
const PATH = `/recursos/${SLUG}`

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getT()
  const a = getArticle(getContent(locale).articles, SLUG)
  return pageMetadata({
    locale,
    path: PATH,
    title: a.title,
    description: a.description,
    keywords: t.raw<string[]>("caso.keywords"),
    type: "article",
    article: { publishedTime: a.date, authors: [site.founder.name] },
    image: { url: a.ogImage, alt: `${a.title} — Kodexa` },
  })
}

export default async function CaseArticle() {
  const { locale, t } = await getT()
  const a = getArticle(getContent(locale).articles, SLUG)
  const url = absoluteUrl(site.url, PATH, locale)
  const intro = t.raw<string[]>("caso.intro")
  const s2 = t.raw<string[]>("caso.s2.p")
  const s5 = t.raw<string[]>("caso.s5.p")
  const h2 = "t-h2 mt-0"

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
        crumbs={[{ name: "Kodexa", href: "/" }, { name: t("recursos.crumb"), href: "/recursos" }, { name: t("caso.crumb") }]}
        eyebrow={t("caso.eyebrow")}
        title={a.title}
        lead={t("caso.lead")}
        aside={
          <CaseFigure caption="" badge={t("caso.cover.badge")} className="[&>figcaption]:hidden">
            <CaseCover label={t("caso.cover.alt")} />
          </CaseFigure>
        }
      />

      {/* Introducción */}
      <div className="wrap-narrow prose-kx pt-6 text-lg">
        <p className="!mt-0 text-sm text-ink-faint">{t("caso.byline", { name: site.founder.name, time: a.readingTime })}</p>
        {intro.map((p, i) => (
          <p key={i} className={i === 0 ? "!text-xl !text-ink" : ""}><RichText text={p} /></p>
        ))}
      </div>

      {/* 1 · Entender antes de desarrollar */}
      <section className="py-14 md:py-20">
        <div className="wrap-narrow prose-kx text-lg">
          <h2 className={h2}>{t("caso.s1.h")}</h2>
          <p><RichText text={t("caso.s1.p")} /></p>
        </div>
        <div className="wrap mt-10 max-w-[60rem]">
          <CaseFigure caption={t("caso.s1.caption")} badge={t("caso.cover.badge")} badgeInline>
            <DiscoveryBoard alt={t("caso.s1.alt")} />
          </CaseFigure>
        </div>
      </section>

      {/* 2 · Diseñar la solución */}
      <section className="bg-mist/50 py-14 md:py-20">
        <div className="wrap-narrow prose-kx text-lg">
          <h2 className={h2}>{t("caso.s2.h")}</h2>
          {s2.map((p, i) => <p key={i}><RichText text={p} /></p>)}
        </div>
        <div className="wrap mt-10">
          <CaseFigure caption={t("caso.s2.caption")} badge={t("caso.s2.badge")} badgeInline>
            <ConceptMockups alt={t("caso.s2.alt")} />
          </CaseFigure>
        </div>
      </section>

      {/* 3 · De los mockups a la web desarrollada */}
      <section className="py-14 md:py-20">
        <div className="wrap-narrow prose-kx text-lg">
          <h2 className={h2}>{t("caso.s3.h")}</h2>
          <p><RichText text={t("caso.s3.p")} /></p>
        </div>
        <div className="wrap mt-10 max-w-[60rem]">
          <figure>
            <RealGallery />
            <figcaption className="mt-5 text-sm text-ink-faint">{t("caso.s3.caption")}</figcaption>
          </figure>
        </div>
      </section>

      {/* 4 · Una herramienta para comunicar mejor */}
      <section className="bg-mist/50 py-14 md:py-20">
        <div className="wrap-narrow prose-kx text-lg">
          <h2 className={h2}>{t("caso.s4.h")}</h2>
          <p><RichText text={t("caso.s4.p")} /></p>
        </div>
        <div className="wrap mt-10">
          <FeatureGrid />
        </div>
      </section>

      {/* 5 · Un proyecto en evolución */}
      <section className="py-14 md:py-20">
        <div className="wrap-narrow prose-kx text-lg">
          <h2 className={h2}>{t("caso.s5.h")}</h2>
          {s5.map((p, i) => <p key={i}><RichText text={p} /></p>)}
          <blockquote className="mt-8 border-l-2 border-brand pl-6 text-xl italic text-ink">{t("caso.s5.quote")}</blockquote>
        </div>
        <div className="wrap mt-10">
          <StatusSteps />
        </div>
        <div className="wrap-narrow prose-kx mt-14 text-lg">
          <h2 className={h2}>{t("caso.close.h")}</h2>
          <p><RichText text={t("caso.close.p")} /></p>
        </div>
      </section>

      {/* Cierre */}
      <section className="on-dark bg-ink py-16 text-white md:py-24">
        <div className="wrap-narrow text-center">
          <h2 className="t-h2">{t("caso.close.ctaTitle")}</h2>
          <p className="mt-5 text-lg text-white/70">{t("caso.close.ctaText")}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contacto" event="contact_cta_click" eventProps={{ location: "article_case_final" }}>{t("caso.close.cta")}</ButtonLink>
            <ButtonLink href={whatsappHref(t("common.whatsappDefault"))} variant="onDark" whatsapp={{ location: "article", label: "case_final" }}>WhatsApp</ButtonLink>
          </div>
          <p className="mt-6 text-sm text-white/60"><EmailLink location="article_case_final" className="underline underline-offset-4 hover:text-white">{contactEmail}</EmailLink></p>
        </div>
      </section>

      <div className="wrap-narrow pb-28 pt-14">
        <ArticleShare title={a.title} storyImage={a.storyImage} />
      </div>
    </>
  )
}
