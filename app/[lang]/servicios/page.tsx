import type { Metadata } from "next"
import { Link } from "@/components/i18n/link"
import { PageHero } from "@/components/sections/page-hero"
import { CtaBand, MethodSection } from "@/components/sections/home-sections"
import { Section } from "@/components/ui/section"
import { ArrowRight } from "@/components/ui/icons"
import { ButtonLink } from "@/components/ui/button"
import { getContent } from "@/lib/content"
import type { ServiceGroup } from "@/lib/content/services"
import { whatsappHref } from "@/lib/content/site"
import { pageMetadata } from "@/lib/seo"
import { getT } from "@/lib/i18n/server"

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getT()
  return pageMetadata({ locale, path: "/servicios", title: t("servicios.meta.title"), description: t("servicios.meta.description"), ogTitle: t("servicios.meta.ogTitle") })
}

const order: ServiceGroup[] = ["web", "sistemas", "productos"]

export default async function ServiciosPage() {
  const { locale, t } = await getT()
  const { services, groupMeta } = getContent(locale)
  return (
    <>
      <PageHero
        path="/servicios"
        crumbs={[{ name: "Kodexa", href: "/" }, { name: t("servicios.crumb") }]}
        eyebrow={t("servicios.eyebrow")}
        title={t("servicios.title")}
        lead={t("servicios.lead")}
      />

      <Section className="!pt-8">
        <div className="wrap space-y-20 md:space-y-28">
          {order.map((g) => (
            <div key={g} className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <h2 className="t-h2">{groupMeta[g].title}</h2>
                <p className="t-lead mt-4">{groupMeta[g].text}</p>
              </div>
              <ul className="divide-y divide-line border-y border-line">
                {services
                  .filter((s) => s.group === g)
                  .map((s) => (
                    <li key={s.slug} className="reveal">
                      <Link href={`/servicios/${s.slug}`} className="group grid gap-3 py-8 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
                        <div>
                          <h3 className="t-h3 transition-colors group-hover:text-brand-ink">{s.title}</h3>
                          <p className="mt-2 max-w-xl text-[0.97rem] text-ink-soft">{s.summary}</p>
                          <p className="t-label mt-4 text-ink-faint">{t("servicios.goal", { goal: s.goal })}</p>
                        </div>
                        <span className="grid h-11 w-11 place-items-center rounded-full border border-line transition-all duration-300 group-hover:border-brand group-hover:bg-brand">
                          <ArrowRight width={18} height={18} />
                          <span className="sr-only">{t("servicios.view", { title: s.title })}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}

          <div className="glass reveal grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div>
              <h2 className="t-h3">{t("servicios.itTitle")}</h2>
              <p className="mt-3 max-w-2xl text-ink-soft">{t("servicios.itText")}</p>
            </div>
            <Link href="/equipo-it" className="inline-flex items-center gap-2 font-medium text-brand-ink underline underline-offset-4">
              {t("servicios.itLink")} <ArrowRight width={18} height={18} />
            </Link>
          </div>

          <div className="glass reveal grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div>
              <h2 className="t-h3">{t("servicios.agencyTitle")}</h2>
              <p className="mt-3 max-w-2xl text-ink-soft">{t("servicios.agencyText")}</p>
            </div>
            <ButtonLink href={whatsappHref(t("estudio.agencyMessage"))} variant="secondary" whatsapp={{ location: "services_agencies", label: "agency_collaboration", service: "agencias" }}>
              {t("servicios.agencyLink")}
            </ButtonLink>
          </div>

          <div className="max-w-2xl space-y-2 text-ink-soft">
            <p>{t("servicios.note")}</p>
            <p className="text-sm text-ink-faint">{t("servicios.pricesNote")}</p>
          </div>
        </div>
      </Section>

      <MethodSection />
      <CtaBand />
    </>
  )
}
