import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { CtaBand } from "@/components/sections/home-sections"
import { ButtonLink } from "@/components/ui/button"
import { Check } from "@/components/ui/icons"
import { Eyebrow, Section } from "@/components/ui/section"
import { whatsappHref } from "@/lib/content/site"
import { showPrices } from "@/lib/content/site"

export const metadata: Metadata = {
  title: "Equipo IT para mantenimiento y evolución de tu producto",
  description:
    "Sumá un equipo técnico dedicado a mejorar, mantener y hacer crecer tu sitio, sistema o plataforma de forma continua, sin depender de freelancers sueltos.",
  keywords: ["equipo desarrollo web", "mantenimiento de software", "soporte técnico web", "equipo técnico dedicado"],
  alternates: { canonical: "/equipo-it" },
  openGraph: {
    title: "Equipo IT para mantenimiento y evolución de tu producto | Kodexa",
    url: "https://kodexa.ar/equipo-it",
    images: ["/og-image.png"],
  },
}

const problems = [
  "Tenés que resolver todo vos.",
  "Dependés de freelancers que desaparecen.",
  "Todo tarda más de lo que debería.",
  "Tu producto no evoluciona.",
]

const services = [
  { title: "Desarrollo continuo", text: "No hacemos tareas sueltas: evolucionamos tu producto constantemente. Cada funcionalidad tiene un objetivo claro: mejorar conversión, retención o escalabilidad." },
  { title: "Performance y escalabilidad", text: "Optimizamos velocidad, estructura y crecimiento técnico: tiempos de carga, arquitectura y SEO técnico para soportar crecimiento real." },
  { title: "Resolución de problemas", text: "Detectamos y solucionamos antes de que impacten: monitoreamos errores y comportamiento para actuar antes de afectar usuarios." },
  { title: "Decisiones técnicas", text: "Nos hacemos cargo del rumbo técnico de tu producto: definimos stack, arquitectura y prioridades alineadas al negocio." },
]

const steps = [
  { title: "Entendemos tu producto", text: "Analizamos cómo funciona hoy, dónde están los problemas y qué está frenando el crecimiento." },
  { title: "Detectamos oportunidades", text: "Identificamos mejoras concretas que pueden impactar en performance, UX o negocio." },
  { title: "Definimos prioridades", text: "Armamos un enfoque claro para no perder tiempo en cosas que no mueven la aguja." },
  { title: "Ejecutamos y mejoramos", text: "Nos convertimos en tu equipo técnico y trabajamos de forma continua." },
]

export default function EquipoItPage() {
  const wa = whatsappHref("Hola Kodexa! Me interesa sumar un equipo técnico para mi producto. ¿Podemos hablar?")
  return (
    <>
      <PageHero
        path="/equipo-it"
        crumbs={[{ name: "Kodexa", href: "/" }, { name: "Servicios", href: "/servicios" }, { name: "Equipo IT" }]}
        eyebrow="Respuesta en 24 h · Trabajo continuo · Sin contratos"
        title="Tu web o sistema no crece solo."
        lead="Si no hay alguien mejorándolo constantemente, se estanca, pierde oportunidades y termina quedando atrás. Sumá un equipo técnico que piense en tu producto todos los días."
        actions={
          <>
            <ButtonLink href="/contacto">Empezar ahora</ButtonLink>
            <ButtonLink href={wa} variant="secondary" whatsapp={{ location: "services", label: "equipo_it_hero", service: "equipo-it" }}>WhatsApp</ButtonLink>
          </>
        }
      />

      <Section className="!pt-8 !pb-16">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>El problema</Eyebrow>
            <h2 className="t-h2 mt-5">Si hoy tu producto depende de vos, hay un problema.</h2>
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
          <h2 className="t-h2 max-w-3xl">No necesitás otro freelancer. Necesitás un equipo que piense en tu producto.</h2>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.title} className="reveal glass p-8">
                <h3 className="t-h3">{s.title}</h3>
                <p className="mt-3 text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl text-lg text-ink-soft">
            Ya vimos qué pasa cuando un sistema crece sin estructura, cuando aparecen bugs en producción o cuando las decisiones técnicas frenan el negocio. Nuestro trabajo no es solo que funcione: es que crezca sin romperse.
          </p>
        </div>
      </Section>

      {showPrices && (
        <Section className="on-dark bg-ink text-white !py-16 md:!py-24">
          <div className="wrap">
            <div className="glass-dark mx-auto grid max-w-4xl gap-10 p-8 md:grid-cols-2 md:p-14">
              <div>
                <Eyebrow onDark>Planes desde</Eyebrow>
                <p className="mt-5 text-6xl font-medium tracking-[-0.035em]">
                  USD <span className="text-brand">300</span>
                </p>
                <p className="mt-2 text-white/65">por mes</p>
              </div>
              <ul className="space-y-3 self-center">
                {["Equipo técnico dedicado", "Desarrollo y mejoras continuas", "Soporte y resolución de bugs", "Decisiones técnicas incluidas"].map((i) => (
                  <li key={i} className="flex gap-3"><Check width={20} height={20} className="mt-1 shrink-0 text-brand" />{i}</li>
                ))}
              </ul>
              <p className="border-t border-white/15 pt-6 text-white/70 md:col-span-2">No pagás tareas. Pagás porque tu producto avance.</p>
            </div>
          </div>
        </Section>
      )}

      <Section>
        <div className="wrap">
          <Eyebrow>Cómo empezamos</Eyebrow>
          <h2 className="t-h2 mt-5">Un proceso simple, pensado para generar impacto desde el primer mes.</h2>
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
        title="Dejá de ser el cuello de botella."
        lead="Sumá un equipo técnico que se encargue de tu producto. Respuesta en menos de 24 h, sin compromiso inicial."
        whatsappMessage="Hola Kodexa! Me interesa sumar un equipo técnico para mi producto. ¿Podemos hablar?"
        service="equipo-it"
        location="services"
      />
    </>
  )
}
