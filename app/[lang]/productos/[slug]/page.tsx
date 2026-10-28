import type { Metadata } from "next"
import { Link } from "@/components/i18n/link"
import { notFound } from "next/navigation"
import Image from "next/image"
import { PageHero } from "@/components/sections/page-hero"
import { ContactForm } from "@/components/forms/contact-form"
import { ButtonLink } from "@/components/ui/button"
import { Eyebrow, Section } from "@/components/ui/section"
import { ArrowRight, ArrowUpRight } from "@/components/ui/icons"
import { getContent, knownSlugs } from "@/lib/content"
import { pageMetadata } from "@/lib/seo"
import { getT } from "@/lib/i18n/server"

export const dynamicParams = false

export function generateStaticParams() {
  return knownSlugs.products.map((slug) => ({ slug }))
}

type Params = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const { locale, t } = await getT()
  const p = getContent(locale).products[slug as "nexo" | "nodo"]
  if (!p) return {}
  return pageMetadata({
    locale,
    path: `/productos/${p.slug}`,
    title: p.metaTitle,
    ogTitle: `${p.metaTitle} | Kodexa`,
    description: p.metaDescription,
    keywords: p.keywords,
    image: { url: "/og-image.png", alt: t("producto.ogAlt", { name: p.name }) },
  })
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params
  const { locale, t } = await getT()
  const { products, ecosystem } = getContent(locale)
  const p = products[slug as "nexo" | "nodo"]
  if (!p) notFound()

  return (
    <>
      <PageHero
        path={`/productos/${p.slug}`}
        crumbs={[{ name: "Kodexa", href: "/" }, { name: t("productos.crumb"), href: "/productos" }, { name: p.name }]}
        eyebrow={`${p.eyebrow} · ${p.status}`}
        title={p.heroTitle}
        lead={p.heroLead}
        actions={
          <>
            <ButtonLink href="#consulta" event="product_cta_click" eventProps={{ location: "hero", product: p.slug }}>
            {p.cta} <ArrowRight width={18} height={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </ButtonLink>
            {p.site && (
              <ButtonLink href={p.site.url} variant="secondary" event="product_cta_click" eventProps={{ location: "hero_site", product: p.slug }}>
                {t("producto.visit", { label: p.site.label })} <ArrowUpRight width={17} height={17} />
              </ButtonLink>
            )}
          </>
        }
        aside={
          p.site && (
            <a href={p.site.url} target="_blank" rel="noopener noreferrer" className="glass glass-lift enter block overflow-hidden p-2.5 md:p-3" style={{ "--d": "200ms" } as React.CSSProperties}>
              <Image src={p.site.image} alt={p.site.imageAlt} width={1440} height={900} sizes="(min-width: 1024px) 40vw, 100vw" priority className="h-auto w-full rounded-[1.1rem]" />
              <span className="sr-only">{t("producto.open", { label: p.site.label })}</span>
            </a>
          )
        }
      />

      {p.statusTone === "building" && (
        <div className="wrap">
          <p role="note" className="glass -mt-6 mb-4 max-w-3xl p-5 text-sm text-ink-soft">
            <strong className="font-medium text-ink">{t("producto.building", { name: p.name })}</strong> {t("producto.buildingText")}
          </p>
        </div>
      )}

      <Section className="!py-16 md:!py-24">
        <div className="wrap grid gap-12 md:grid-cols-2 md:gap-20">
          <div className="reveal">
            <Eyebrow>{t("producto.problem")}</Eyebrow>
            <p className="mt-5 text-xl text-ink-soft md:text-2xl md:leading-snug">{p.problem}</p>
          </div>
          <div className="reveal">
            <Eyebrow>{t("producto.solution")}</Eyebrow>
            <p className="mt-5 text-xl text-ink md:text-2xl md:leading-snug">{p.solution}</p>
          </div>
        </div>
      </Section>

      {p.benefits && (
        <Section className="bg-mist/50 !py-16 md:!py-24">
          <div className="wrap">
            <h2 className="t-h2">{t("producto.benefits")}</h2>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2">
              {p.benefits.map((b) => (
                <li key={b.title} className="reveal glass p-7">
                  <h3 className="t-h3 !text-[1.15rem]">{b.title}</h3>
                  <p className="mt-3 text-ink-soft">{b.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      <Section className="!py-16 md:!py-24">
        <div className="wrap">
          <h2 className="t-h2">{p.stepsTitle}</h2>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] border border-line bg-line md:grid-cols-3">
            {p.steps.map((s, i) => (
              <li key={s.title} className="bg-paper p-8">
                <span className="t-label text-brand-ink">{t("producto.step", { n: String(i + 1).padStart(2, "0") })}</span>
                <h3 className="t-h3 mt-4">{s.title}</h3>
                <p className="mt-3 text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="bg-mist/50 !py-16 md:!py-24">
        <div className="wrap">
          <h2 className="t-h2">{p.featuresTitle}</h2>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {p.features.map((f) => (
              <li key={f.title} className="reveal glass p-7">
                <h3 className="t-h3 !text-[1.15rem]">{f.title}</h3>
                <p className="mt-3 text-[0.97rem] text-ink-soft">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="!py-16 md:!py-24">
        <div className="wrap">
          <Eyebrow>{t("producto.ecoEyebrow")}</Eyebrow>
          <h2 className="t-h2 mt-5 max-w-3xl">{t("producto.ecoTitle", { name: p.name })}</h2>
          <p className="t-lead mt-5 max-w-2xl">{p.ecosystemIntro}</p>
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {ecosystem.map((e, i) => (
              <li key={e.key}>
                <Link href={e.href} aria-current={e.key === p.slug ? "true" : undefined} className={`glass glass-lift flex h-full flex-col p-6 ${e.key === p.slug ? "ring-2 ring-brand" : ""}`}>
                  <span className="t-label text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                  <span className="mt-3 text-2xl font-medium tracking-[-0.03em]">{e.name}</span>
                  <span className="mt-1 text-sm text-ink-soft">{e.title}</span>
                </Link>
              </li>
            ))}
          </ol>
          {p.technical && <p className="mt-10 max-w-3xl text-sm text-ink-faint">{p.technical}</p>}
          <p className="mt-8 text-ink-soft">
            {t("producto.custom")}{" "}
            <Link href="/servicios" className="font-medium text-brand-ink underline underline-offset-4">{t("producto.customLink")}</Link>.
          </p>
        </div>
      </Section>

      <Section id="consulta" className="on-dark bg-ink text-white">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow onDark>{t("producto.contactEyebrow")}</Eyebrow>
            <h2 className="t-h2 mt-5 text-white">{p.contact.title}</h2>
            <p className="mt-5 text-lg text-white/70">{p.contact.description}</p>
          </div>
          <ContactForm
            variant="product"
            source={`productos-${p.slug}`}
            defaultProductInterest={p.contact.interest}
          />
        </div>
      </Section>
    </>
  )
}
