import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { CtaBand } from "@/components/sections/home-sections"
import { ButtonLink } from "@/components/ui/button"
import { Check } from "@/components/ui/icons"
import { Eyebrow, Section } from "@/components/ui/section"
import { showPrices, whatsappHref } from "@/lib/content/site"
import { pageMetadata } from "@/lib/seo"
import { getT } from "@/lib/i18n/server"

type Block = { title: string; text: string }

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getT()
  return pageMetadata({
    locale,
    path: "/equipo-it",
    title: t("equipo.meta.title"),
    ogTitle: t("equipo.meta.ogTitle"),
    description: t("equipo.meta.description"),
    keywords: t.raw<string[]>("equipo.meta.keywords"),
  })
}

export default async function EquipoItPage() {
  const { t } = await getT()
  const wa = whatsappHref(t("equipo.whatsappMessage"))
  const problems = t.raw<string[]>("equipo.problems")
  const services = t.raw<Block[]>("equipo.services")
  const steps = t.raw<Block[]>("equipo.steps")
  return (
    <>
      <PageHero
        path="/equipo-it"
        crumbs={[{ name: "Kodexa", href: "/" }, { name: t("servicios.crumb"), href: "/servicios" }, { name: t("equipo.crumb") }]}
        eyebrow={t("equipo.eyebrow")}
        title={t("equipo.title")}
        lead={t("equipo.lead")}
        actions={
          <>
            <ButtonLink href="/contacto">{t("equipo.start")}</ButtonLink>
            <ButtonLink href={wa} variant="secondary" whatsapp={{ location: "services", label: "equipo_it_hero", service: "equipo-it" }}>WhatsApp</ButtonLink>
          </>
        }
      />

      <Section className="!pt-8 !pb-16">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>{t("equipo.problemEyebrow")}</Eyebrow>
            <h2 className="t-h2 mt-5">{t("equipo.problemTitle")}</h2>
          </div>
          <ul className="space-y-4">
            {problems.map((p) => (
              <li key={p} className="reveal glass flex items-center gap-4 p-5 text-lg">
                <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-brand" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="bg-mist/50">
        <div className="wrap">
          <h2 className="t-h2 max-w-3xl">{t("equipo.servicesTitle")}</h2>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.title} className="reveal glass p-8">
                <h3 className="t-h3">{s.title}</h3>
                <p className="mt-3 text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-lg text-ink-soft">{t("equipo.servicesNote")}</p>
        </div>
      </Section>

      {showPrices && (
        <Section className="on-dark bg-ink text-white !py-16 md:!py-24">
          <div className="wrap">
            <div className="glass-dark mx-auto grid max-w-4xl gap-10 p-8 md:grid-cols-2 md:p-14">
              <div>
                <Eyebrow onDark>{t("equipo.priceEyebrow")}</Eyebrow>
                <p className="mt-5 text-6xl font-medium tracking-[-0.035em]">
                  {t("equipo.priceCurrency")} <span className="text-brand">{t("equipo.priceAmount")}</span>
                </p>
                <p className="mt-2 text-white/65">{t("equipo.priceUnit")}</p>
                <p className="mt-4 text-sm text-white/55">{t("equipo.priceNote")}</p>
              </div>
              <ul className="space-y-3 self-center">
                {t.raw<string[]>("equipo.priceItems").map((i) => (
                  <li key={i} className="flex gap-3"><Check width={20} height={20} className="mt-1 shrink-0 text-brand" />{i}</li>
                ))}
              </ul>
              <p className="border-t border-white/15 pt-6 text-white/70 md:col-span-2">{t("equipo.priceTag")}</p>
            </div>
          </div>
        </Section>
      )}

      <Section>
        <div className="wrap">
          <Eyebrow>{t("equipo.howEyebrow")}</Eyebrow>
          <h2 className="t-h2 mt-5">{t("equipo.howTitle")}</h2>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-paper p-7">
                <span className="t-label text-brand-ink">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-h3 mt-4 !text-[1.15rem]">{s.title}</h3>
                <p className="mt-3 text-[0.97rem] text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <CtaBand
        title={t("equipo.ctaTitle")}
        lead={t("equipo.ctaLead")}
        whatsappMessage={t("equipo.whatsappMessage")}
        service="equipo-it"
        location="services"
      />
    </>
  )
}
