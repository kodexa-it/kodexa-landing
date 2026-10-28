import type { Metadata } from "next"
import { Link } from "@/components/i18n/link"
import { PageHero } from "@/components/sections/page-hero"
import { CtaBand } from "@/components/sections/home-sections"
import { ProjectCard } from "@/components/sections/project-card"
import { Section } from "@/components/ui/section"
import { JsonLd } from "@/components/seo/json-ld"
import { getContent } from "@/lib/content"
import { site } from "@/lib/content/site"
import { pageMetadata } from "@/lib/seo"
import { getT } from "@/lib/i18n/server"

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getT()
  return pageMetadata({ locale, path: "/proyectos", title: t("proyectos.meta.title"), description: t("proyectos.meta.description"), ogTitle: t("proyectos.meta.ogTitle") })
}

export default async function ProyectosPage() {
  const { locale, t } = await getT()
  const { projects } = getContent(locale)
  const portfolioLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.founder.name,
    url: site.url,
    hasPart: projects
      .filter((p) => p.url)
      .map((p) => ({
        "@type": "CreativeWork",
        name: p.title,
        description: p.summary,
        url: p.url,
        creator: { "@type": "Person", name: site.founder.name },
      })),
  }

  return (
    <>
      <JsonLd data={portfolioLd} />
      <PageHero
        path="/proyectos"
        crumbs={[{ name: "Kodexa", href: "/" }, { name: t("proyectos.crumb") }]}
        eyebrow={t("proyectos.eyebrow")}
        title={t("proyectos.title")}
        lead={t("proyectos.lead")}
      />

      <Section className="!pt-4">
        <div className="wrap">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <div key={p.slug} className={`reveal ${i === 0 ? "md:col-span-2" : ""}`}>
                <ProjectCard project={p} priority={i < 2} className={i === 0 ? "md:grid md:grid-cols-[1.35fr_1fr] md:gap-4" : ""} />
              </div>
            ))}
          </div>

          <div className="glass mt-12 grid gap-4 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <p className="max-w-2xl text-ink-soft">
              <strong className="font-medium text-ink">{t("proyectos.partialLabel")}</strong> {t("proyectos.partial1")}{" "}
              <a href={site.partner.url} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-ink underline underline-offset-4">
                {site.partner.name}
              </a>{" "}
              {t("proyectos.partial2")}
            </p>
            <Link href="/productos" className="font-medium text-brand-ink underline underline-offset-4">
              {t("proyectos.products")}
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand title={t("proyectos.cta")} />
    </>
  )
}
