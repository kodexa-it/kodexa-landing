import type { Metadata } from "next"
import { Link } from "@/components/i18n/link"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/sections/page-hero"
import { CtaBand } from "@/components/sections/home-sections"
import { ButtonLink } from "@/components/ui/button"
import { Faq } from "@/components/ui/faq"
import { ArrowRight, Check } from "@/components/ui/icons"
import { Eyebrow, Section } from "@/components/ui/section"
import { JsonLd, faqLd } from "@/components/seo/json-ld"
import { getContent, knownSlugs } from "@/lib/content"
import { showPrices, whatsappHref } from "@/lib/content/site"
import { pageMetadata } from "@/lib/seo"
import { getT } from "@/lib/i18n/server"

export const dynamicParams = false

export function generateStaticParams() {
  return knownSlugs.services.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const { locale } = await getT()
  const s = getContent(locale).getService(slug)
  if (!s) return {}
  return pageMetadata({
    locale,
    path: `/servicios/${s.slug}`,
    title: s.metaTitle,
    ogTitle: `${s.metaTitle} | Kodexa`,
    description: s.metaDescription,
    keywords: s.keywords,
    image: { url: "/og-image.png", alt: `${s.title} — Kodexa` },
  })
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { locale, t } = await getT()
  const { getService, method } = getContent(locale)
  const s = getService(slug)
  if (!s) notFound()

  const wa = whatsappHref(s.whatsappMessage)
  const steps = s.process ?? method
  const related = s.related.map((r) => getService(r)).filter((r) => !!r)

  return (
    <>
      <JsonLd data={faqLd(s.faq)} />
      <PageHero
        path={`/servicios/${s.slug}`}
        crumbs={[{ name: "Kodexa", href: "/" }, { name: t("servicios.crumb"), href: "/servicios" }, { name: s.title }]}
        eyebrow={s.goal}
        title={s.heroTitle}
        lead={s.heroLead}
        actions={
          <>
            <ButtonLink href="/contacto" event="cta_click" eventProps={{ location: "service_hero", service: s.slug }}>
              {s.ctaLabel} <ArrowRight width={18} height={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink href={wa} variant="secondary" whatsapp={{ location: "services", label: "service_hero", service: s.slug }}>
              {t("servicio.viewWhatsapp")}
            </ButtonLink>
          </>
        }
      />

      {/* Problema + cliente */}
      <Section className="!py-16 md:!py-24">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <Eyebrow>{t("servicio.problemEyebrow")}</Eyebrow>
            <h2 className="t-h2 mt-5">{s.problemTitle}</h2>
            <ul className="mt-8 space-y-4">
              {s.problems.map((p) => (
                <li key={p} className="flex gap-4 text-lg text-ink-soft">
                  <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal glass p-8 md:p-10">
            <Eyebrow>{t("servicio.audienceEyebrow")}</Eyebrow>
            <ul className="mt-6 space-y-4">
              {s.audience.map((a) => (
                <li key={a} className="flex gap-3 text-ink">
                  <Check width={20} height={20} className="mt-1 shrink-0 text-brand-ink" />
                  {a}
                </li>
              ))}
            </ul>
            {s.audienceNote && (
              <p className="mt-8 border-t border-line pt-6 text-sm text-ink-soft">
                {s.audienceNote.text}{" "}
                <Link href={s.audienceNote.href} className="font-medium text-brand-ink underline underline-offset-4">
                  {s.audienceNote.linkLabel}
                </Link>
                .
              </p>
            )}
          </div>
        </div>
      </Section>

      {/* Alcance */}
      <Section className="bg-mist/50 !py-16 md:!py-24">
        <div className="wrap">
          <Eyebrow>{t("servicio.scopeEyebrow")}</Eyebrow>
          <h2 className="t-h2 mt-5">{s.includesTitle}</h2>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.includes.map((item) => (
              <li key={item.title} className="reveal glass glass-lift p-7">
                <h3 className="t-h3 !text-[1.15rem]">{item.title}</h3>
                <p className="mt-3 text-[0.97rem] text-ink-soft">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Evidencia propia (solo servicios donde corresponde) */}
      {s.evidence && (
        <Section className="!py-16 md:!py-24">
          <div className="wrap">
            <div className="glass reveal grid gap-6 p-8 md:grid-cols-[1.2fr_auto] md:items-center md:p-12">
              <div>
                <Eyebrow>{s.evidence.eyebrow}</Eyebrow>
                <h2 className="t-h2 mt-4">{s.evidence.title}</h2>
                <p className="mt-4 max-w-2xl text-ink-soft">{s.evidence.text}</p>
              </div>
              <ButtonLink href={s.evidence.href} variant="secondary">
                {s.evidence.linkLabel} <ArrowRight width={18} height={18} />
              </ButtonLink>
            </div>
          </div>
        </Section>
      )}

      {/* Proceso */}
      <Section className="!py-16 md:!py-24">
        <div className="wrap">
          <Eyebrow>{t("servicio.processEyebrow")}</Eyebrow>
          <h2 className="t-h2 mt-5">{t("servicio.processTitle")}</h2>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((st, i) => (
              <li key={st.title} className="bg-paper p-7">
                <span className="t-label text-brand-ink">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-h3 mt-4 !text-[1.15rem]">{st.title}</h3>
                <p className="mt-3 text-[0.97rem] text-ink-soft">{st.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Precio / presupuesto */}
      <Section className="on-dark bg-ink !py-16 text-white md:!py-24">
        <div className="wrap">
          <div className="glass-dark mx-auto max-w-3xl p-8 text-center md:p-14">
            <Eyebrow onDark className="justify-center">{s.priceFrom && showPrices ? t("servicio.investment") : t("servicio.budget")}</Eyebrow>
            {s.priceFrom && showPrices ? (
              <p className="mt-6 text-5xl font-medium tracking-[-0.035em] md:text-6xl">
                {t("servicio.from")} <span className="text-brand">{s.priceFrom.toLocaleString(locale === "en" ? "en-US" : "es-AR")}</span>
              </p>
            ) : (
              <p className="mt-6 text-4xl font-medium tracking-[-0.03em] md:text-5xl">{t("servicio.custom")}</p>
            )}
            <p className="mx-auto mt-5 max-w-lg text-white/70">{s.pricingNote}</p>
            <ButtonLink href={wa} className="mt-9" event="cta_click" eventProps={{ location: "service_price", service: s.slug }}>
              {t("servicio.quote")}
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="!py-16 md:!py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <Eyebrow>{t("servicio.faq")}</Eyebrow>
            <h2 className="t-h2 mt-5">{t("servicio.faqTitle")}</h2>
          </div>
          <Faq items={s.faq} />
        </div>
      </Section>

      {/* Relacionados */}
      <Section className="bg-mist/50 !py-16 md:!py-20">
        <div className="wrap">
          <p className="t-label text-ink-faint">{t("servicio.related")}</p>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/servicios/${r.slug}`} className="glass glass-lift group flex h-full flex-col p-7">
                  <h3 className="t-h3 !text-[1.15rem]">{r.title}</h3>
                  <p className="mt-3 text-[0.97rem] text-ink-soft">{r.summary}</p>
                  <ArrowRight width={18} height={18} className="mt-6 text-brand-ink transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand title={s.ctaTitle} whatsappMessage={s.whatsappMessage} service={s.slug} location="services" />
    </>
  )
}
