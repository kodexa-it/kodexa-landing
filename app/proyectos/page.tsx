import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { CtaBand } from "@/components/sections/home-sections"
import { ProjectCard } from "@/components/sections/project-card"
import { Section } from "@/components/ui/section"
import { JsonLd } from "@/components/seo/json-ld"
import { projects } from "@/lib/content/projects"
import { site } from "@/lib/content/site"

export const metadata: Metadata = {
  title: "Proyectos y trabajos",
  description:
    "Sitios, plataformas y sistemas desarrollados para negocios reales: Peabody Argentina, Mega Promociones, Freschi, Bigsur Energy y más.",
  alternates: { canonical: "/proyectos" },
  openGraph: { title: "Proyectos | Kodexa", url: "https://kodexa.ar/proyectos", images: ["/og-image.png"] },
}

export default function ProyectosPage() {
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
        crumbs={[{ name: "Kodexa", href: "/" }, { name: "Proyectos" }]}
        eyebrow="Proyectos"
        title="Lo que ya construimos."
        lead="Sitios, plataformas y sistemas desarrollados para negocios reales. Indicamos en cada caso cuál fue la participación de Kodexa."
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
              <strong className="font-medium text-ink">Participación parcial.</strong> Los proyectos realizados con{" "}
              <a href={site.partner.url} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-ink underline underline-offset-4">
                {site.partner.name}
              </a>{" "}
              se desarrollaron como parte de ese equipo, participando en desarrollo y arquitectura.
            </p>
            <Link href="/productos" className="font-medium text-brand-ink underline underline-offset-4">
              Ver productos propios: Nexo y Nodo
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand title="¿Querés que construyamos algo así para tu negocio?" />
    </>
  )
}
