import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { CtaBand, MethodSection } from "@/components/sections/home-sections"
import { Eyebrow, Section } from "@/components/ui/section"
import { ArrowUpRight } from "@/components/ui/icons"
import { principles, stack } from "@/lib/content/method"
import { site } from "@/lib/content/site"

export const metadata: Metadata = {
  title: "El estudio: enfoque, método y equipo",
  description:
    "Kodexa es un estudio digital que diseña y desarrolla soluciones para negocios. Conocé nuestra filosofía de trabajo, el enfoque técnico y cómo trabajamos.",
  alternates: { canonical: "/estudio" },
  openGraph: { title: "El estudio | Kodexa", url: "https://kodexa.ar/estudio", images: ["/og-image.png"] },
}

export default function EstudioPage() {
  return (
    <>
      <PageHero
        path="/estudio"
        crumbs={[{ name: "Kodexa", href: "/" }, { name: "Estudio" }]}
        eyebrow="El estudio"
        title="Desarrollar no es solo escribir código."
        lead="Primero hay que entender el problema, el negocio y a quien lo va a usar. Kodexa nace para resolver algo claro: negocios que necesitan crecer, pero están limitados por soluciones digitales mal construidas o que no escalan."
      />

      <Section className="!pt-8">
        <div className="wrap">
          <Eyebrow>Filosofía</Eyebrow>
          <h2 className="t-h2 mt-5 max-w-3xl">Tres ideas que ordenan cada proyecto.</h2>
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
            <Eyebrow>Enfoque técnico</Eyebrow>
            <h2 className="t-h2 mt-5">Tecnología al servicio del negocio.</h2>
            <p className="t-lead mt-6">
              Elegimos las herramientas según lo que el proyecto necesita, no al revés. Trabajamos con tecnología moderna y mantenible, con foco en rendimiento, estructura y evolución.
            </p>
          </div>
          <div>
            <p className="t-label text-ink-faint">Con lo que trabajamos</p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {stack.map((s) => (
                <li key={s} className="glass rounded-full px-5 py-3 text-[0.95rem] !rounded-full">{s}</li>
              ))}
            </ul>
            <p className="mt-8 text-ink-soft">
              Construimos también productos propios —como{" "}
              <Link href="/productos/nexo" className="font-medium text-brand-ink underline underline-offset-4">Nexo</Link>— y compartimos lo que vamos aprendiendo en{" "}
              <Link href="/recursos" className="font-medium text-brand-ink underline underline-offset-4">Recursos</Link>.
            </p>
          </div>
        </div>
      </Section>

      <MethodSection />

      <Section className="bg-mist/50">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow>Quién está detrás</Eyebrow>
            <h2 className="t-h2 mt-5">Trato directo, de principio a fin.</h2>
            <p className="t-lead mt-6">
              Trabajás con quien diseña y desarrolla, sin intermediarios. Así las decisiones se toman rápido y con contexto.
            </p>
          </div>
          <div className="glass p-8 md:p-10">
            <h3 className="text-3xl font-medium tracking-[-0.03em]">{site.founder.name}</h3>
            <p className="t-label mt-2 text-ink-faint">{site.founder.role}</p>
            <p className="mt-6 text-ink-soft">
              Desarrollador full stack especializado en sitios, landings y sistemas web escalables, con enfoque en estructura, rendimiento y claridad técnica.
            </p>
            <p className="mt-4 text-ink-soft">
              Además de los proyectos propios, participó en el desarrollo y la arquitectura de proyectos junto a{" "}
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

      <CtaBand />
    </>
  )
}
