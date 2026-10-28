import type { Metadata } from "next"
import { Link } from "@/components/i18n/link"
import { PageHero } from "@/components/sections/page-hero"
import { Section } from "@/components/ui/section"
import { ArrowRight } from "@/components/ui/icons"
import { getContent } from "@/lib/content"
import { pageMetadata } from "@/lib/seo"
import { getT } from "@/lib/i18n/server"

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getT()
  return pageMetadata({ locale, path: "/recursos", title: t("recursos.meta.title"), description: t("recursos.meta.description"), ogTitle: t("recursos.meta.ogTitle") })
}

export default async function RecursosPage() {
  const { locale, t } = await getT()
  const { articles } = getContent(locale)
  return (
    <>
      <PageHero
        path="/recursos"
        crumbs={[{ name: "Kodexa", href: "/" }, { name: t("recursos.crumb") }]}
        eyebrow={t("recursos.eyebrow")}
        title={t("recursos.title")}
        lead={t("recursos.lead")}
      />
      <Section className="!pt-4">
        <div className="wrap-narrow !max-w-4xl space-y-6">
          {articles.map((a) => (
            <Link key={a.slug} href={`/recursos/${a.slug}`} className="glass glass-lift group block p-8 md:p-10">
              <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
                <h2 className="t-h3 md:!text-[1.75rem]">{a.title}</h2>
                <span className="t-label shrink-0 text-ink-faint">{t("recursos.readingTime", { time: a.readingTime })}</span>
              </div>
              <p className="mt-4 max-w-2xl text-ink-soft">{a.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-medium text-brand-ink">
                {t("recursos.read")} <ArrowRight width={17} height={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}
