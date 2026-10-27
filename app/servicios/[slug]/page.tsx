import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/sections/page-hero"
import { CtaBand } from "@/components/sections/home-sections"
import { ButtonLink } from "@/components/ui/button"
import { Faq } from "@/components/ui/faq"
import { ArrowRight, Check } from "@/components/ui/icons"
import { Eyebrow, Section } from "@/components/ui/section"
import { JsonLd, faqLd } from "@/components/seo/json-ld"
import { getService, services } from "@/lib/content/services"
import { method } from "@/lib/content/method"
import { showPrices, site, whatsappHref } from "@/lib/content/site"

export const dynamicParams = false

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const s = getService(slug)
  if (!s) return {}
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: `/servicios/${s.slug}` },
    openGraph: {
      title: `${s.metaTitle} | Kodexa`,
      description: s.metaDescription,
      url: `${site.url}/servicios/${s.slug}`,
      siteName: site.name,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${s.title} — Kodexa` }],
      locale: site.locale,
      type: "website",
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
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
        crumbs={[{ name: "Kodexa", href: "/" }, { name: "Servicios", href: "/servicios" }, { name: s.title }]}
        eyebrow={s.goal}
        title={s.heroTitle}
        lead={s.heroLead}
        actions={
          <>
            <ButtonLink href="/contacto" event="cta_click" eventProps={{ location: "service_hero", service: s.slug }}>
              {s.ctaLabel} <ArrowRight width={18} height={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink href={wa} variant="secondary" whatsapp={{ location: "services", label: "service_hero", service: s.slug }}>
              Consultar por WhatsApp
            </ButtonLink>
          </>
        }
      />

      {/* Problema + cliente */}
      <Section className="!py-16 md:!py-24">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <Eyebrow>El problema</Eyebrow>
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
            <Eyebrow>Para quién es</Eyebrow>
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
          <Eyebrow>Alcance</Eyebrow>
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
          <Eyebrow>Proceso de trabajo</Eyebrow>
          <h2 className="t-h2 mt-5">Cómo lo hacemos.</h2>
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
            <Eyebrow onDark className="justify-center">{s.priceFrom && showPrices ? "Inversión" : "Presupuesto"}</Eyebrow>
            {s.priceFrom && showPrices ? (
              <p className="mt-6 text-5xl font-medium tracking-[-0.035em] md:text-6xl">
                Desde USD <span className="text-brand">{s.priceFrom.toLocaleString("es-AR")}</span>
              </p>
            ) : (
              <p className="mt-6 text-4xl font-medium tracking-[-0.03em] md:text-5xl">Presupuesto a medida</p>
            )}
            <p className="mx-auto mt-5 max-w-lg text-white/70">{s.pricingNote}</p>
            <ButtonLink href={wa} className="mt-9" event="cta_click" eventProps={{ location: "service_price", service: s.slug }}>
              Consultar presupuesto
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="!py-16 md:!py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="t-h2 mt-5">Preguntas frecuentes</h2>
          </div>
          <Faq items={s.faq} />
        </div>
      </Section>

      {/* Relacionados */}
      <Section className="bg-mist/50 !py-16 md:!py-20">
        <div className="wrap">
          <p className="t-label text-ink-faint">También te puede interesar</p>
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
