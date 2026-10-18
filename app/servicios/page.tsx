import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { CtaBand, MethodSection } from "@/components/sections/home-sections"
import { Section } from "@/components/ui/section"
import { ArrowRight } from "@/components/ui/icons"
import { groupMeta, services, type ServiceGroup } from "@/lib/content/services"

export const metadata: Metadata = {
  title: "Servicios de diseño y desarrollo digital",
  description:
    "Landing pages, sitios institucionales, software a medida, plataformas y productos SaaS. Conocé las capacidades de Kodexa y cómo trabajamos.",
  alternates: { canonical: "/servicios" },
  openGraph: { title: "Servicios | Kodexa", url: "https://kodexa.ar/servicios", images: ["/og-image.png"] },
}

const order: ServiceGroup[] = ["web", "sistemas", "productos"]

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        path="/servicios"
        crumbs={[{ name: "Kodexa", href: "/" }, { name: "Servicios" }]}
        eyebrow="Servicios"
        title="Tu negocio necesita algo más que una web."
        lead="Creamos soluciones digitales pensadas para atraer clientes, mejorar procesos y crecer sobre una base sólida: desde una landing page hasta una plataforma a medida."
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
                          <p className="t-label mt-4 text-ink-faint">Objetivo · {s.goal}</p>
                        </div>
                        <span className="grid h-11 w-11 place-items-center rounded-full border border-line transition-all duration-300 group-hover:border-brand group-hover:bg-brand">
                          <ArrowRight width={18} height={18} />
                          <span className="sr-only">Ver {s.title}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}

          <div className="glass reveal grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div>
              <h2 className="t-h3">Equipo IT y mejora continua</h2>
              <p className="mt-3 max-w-2xl text-ink-soft">
                Para productos que ya existen: un equipo técnico que mantiene, mejora y hace evolucionar tu sitio, sistema o plataforma de forma continua.
              </p>
            </div>
            <Link href="/equipo-it" className="inline-flex items-center gap-2 font-medium text-brand-ink underline underline-offset-4">
              Ver cómo trabajamos <ArrowRight width={18} height={18} />
            </Link>
          </div>

          <p className="max-w-2xl text-ink-soft">
            Los desarrollos a medida se presupuestan según el alcance. Contanos tu caso y te respondemos con una propuesta concreta.
          </p>
        </div>
      </Section>

      <MethodSection />
      <CtaBand />
    </>
  )
}
