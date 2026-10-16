import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { Section } from "@/components/ui/section"
import { ArrowRight } from "@/components/ui/icons"
import { articles } from "@/lib/content/articles"

export const metadata: Metadata = {
  title: "Recursos: notas desde adentro de Kodexa",
  description:
    "Un registro de decisiones reales de producto, arquitectura y desarrollo que tomamos mientras construimos software, propio y para otros.",
  alternates: { canonical: "/recursos" },
  openGraph: { title: "Recursos | Kodexa", url: "https://kodexa.ar/recursos", images: ["/og-image.png"] },
}

export default function RecursosPage() {
  return (
    <>
      <PageHero
        path="/recursos"
        crumbs={[{ name: "Kodexa", href: "/" }, { name: "Recursos" }]}
        eyebrow="Recursos"
        title="Notas desde adentro de Kodexa."
        lead="No es un blog de marketing. Es un registro de decisiones reales de producto, arquitectura y desarrollo que tomamos mientras construimos software, propio y para otros."
      />
      <Section className="!pt-4">
        <div className="wrap-narrow !max-w-4xl space-y-6">
          {articles.map((a) => (
            <Link key={a.slug} href={`/recursos/${a.slug}`} className="glass glass-lift group block p-8 md:p-10">
              <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
                <h2 className="t-h3 md:!text-[1.75rem]">{a.title}</h2>
                <span className="t-label shrink-0 text-ink-faint">{a.readingTime} de lectura</span>
              </div>
              <p className="mt-4 max-w-2xl text-ink-soft">{a.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-medium text-brand-ink">
                Leer artículo completo <ArrowRight width={17} height={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}
