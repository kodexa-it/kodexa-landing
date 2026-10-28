import type { Metadata } from "next"
import { Link } from "@/components/i18n/link"
import { PageHero } from "@/components/sections/page-hero"
import { CtaBand, MethodSection } from "@/components/sections/home-sections"
import { Eyebrow, Section } from "@/components/ui/section"
import { ArrowUpRight } from "@/components/ui/icons"
import { getContent } from "@/lib/content"
import { site, whatsappHref } from "@/lib/content/site"
import { ButtonLink } from "@/components/ui/button"
import { pageMetadata } from "@/lib/seo"
import { getT } from "@/lib/i18n/server"

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getT()
  return pageMetadata({ locale, path: "/estudio", title: t("estudio.meta.title"), description: t("estudio.meta.description"), ogTitle: t("estudio.meta.ogTitle") })
}

export default async function EstudioPage() {
  const { locale, t } = await getT()
  const { principles, stack } = getContent(locale)
  return (
    <>
      <PageHero
        path="/estudio"
        crumbs={[{ name: "Kodexa", href: "/" }, { name: t("estudio.crumb") }]}
        eyebrow={t("estudio.eyebrow")}
        title={t("estudio.title")}
        lead={t("estudio.lead")}
      />

      <Section className="!pt-8">
        <div className="wrap">
          <Eyebrow>{t("estudio.philosophyEyebrow")}</Eyebrow>
          <h2 className="t-h2 mt-5 max-w-3xl">{t("estudio.philosophyTitle")}</h2>
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {principles.map((p, i) => (
              <li key={p.title} className="reveal glass glass-lift p-8">
                <span className="t-label text-brand-ink">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-h3 mt-5">{p.title}</h3>
                <p className="mt-4 text-ink-soft">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="bg-mist/50">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>{t("estudio.techEyebrow")}</Eyebrow>
            <h2 className="t-h2 mt-5">{t("estudio.techTitle")}</h2>
            <p className="t-lead mt-6">{t("estudio.techLead")}</p>
          </div>
          <div>
            <p className="t-label text-ink-faint">{t("estudio.stackLabel")}</p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {stack.map((s) => (
                <li key={s} className="glass rounded-full px-5 py-3 text-[0.95rem] !rounded-full">{s}</li>
              ))}
            </ul>
            <p className="mt-8 text-ink-soft">
              {t("estudio.own1")}{" "}
              <Link href="/productos/nexo" className="font-medium text-brand-ink underline underline-offset-4">Nexo</Link> {t("estudio.own2")}{" "}
              <Link href="/recursos" className="font-medium text-brand-ink underline underline-offset-4">{t("estudio.resources")}</Link>.
            </p>
          </div>
        </div>
      </Section>

      <MethodSection />

      <Section className="bg-mist/50">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow>{t("estudio.whoEyebrow")}</Eyebrow>
            <h2 className="t-h2 mt-5">{t("estudio.whoTitle")}</h2>
            <p className="t-lead mt-6">{t("estudio.whoLead")}</p>
          </div>
          <div className="glass p-8 md:p-10">
            <h3 className="text-3xl font-medium tracking-[-0.03em]">{site.founder.name}</h3>
            <p className="t-label mt-2 text-ink-faint">{site.founder.role}</p>
            <p className="mt-6 text-ink-soft">{t("estudio.bio")}</p>
            <p className="mt-4 text-ink-soft">
              {t("estudio.partner1")}{" "}
              <a href={site.partner.url} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-ink underline underline-offset-4">{site.partner.name}</a>.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.founder.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium transition-colors hover:bg-ink hover:text-white">
                LinkedIn <ArrowUpRight width={15} height={15} />
              </a>
              <a href={site.founder.portfolio} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium transition-colors hover:bg-ink hover:text-white">
                Portfolio <ArrowUpRight width={15} height={15} />
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="wrap grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <Eyebrow>{t("estudio.agencyEyebrow")}</Eyebrow>
            <h2 className="t-h2 mt-5">{t("estudio.agencyTitle")}</h2>
            <p className="t-lead mt-5 max-w-2xl">{t("estudio.agencyText")}</p>
          </div>
          <ButtonLink href={whatsappHref(t("estudio.agencyMessage"))} variant="secondary" whatsapp={{ location: "studio_agencies", label: "agency_collaboration", service: "agencias" }}>
            {t("estudio.agencyCta")}
          </ButtonLink>
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
