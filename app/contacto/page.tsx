import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { ContactForm } from "@/components/forms/contact-form"
import { Section } from "@/components/ui/section"
import { ArrowUpRight } from "@/components/ui/icons"
import { site, whatsappHref } from "@/lib/content/site"

export const metadata: Metadata = {
  title: "Contacto: hablemos de tu proyecto",
  description: "Contanos qué necesitás construir. Te respondemos dentro de las 24 hs con una propuesta clara.",
  alternates: { canonical: "/contacto" },
  openGraph: { title: "Contacto | Kodexa", url: "https://kodexa.ar/contacto", images: ["/og-image.png"] },
}

const channels = [
  { label: "WhatsApp", value: "Escribinos directamente", href: whatsappHref("Hola Kodexa! Quiero hablar sobre un proyecto.") },
  { label: "Instagram", value: "@kodexa.it", href: site.instagram },
  { label: "LinkedIn", value: "Kodexa", href: site.linkedin },
]

export default function ContactoPage() {
  return (
    <>
      <PageHero
        path="/contacto"
        crumbs={[{ name: "Kodexa", href: "/" }, { name: "Contacto" }]}
        eyebrow="Contacto"
        title="¿Tenés un proyecto en mente?"
        lead="Contanos qué necesitás y vemos cómo convertirlo en una solución digital. Te respondemos dentro de las 24 hs."
      />
      <Section className="!pt-4">
        <div className="wrap grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <h2 className="t-h3">También podés escribirnos por</h2>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {channels.map((c) => (
                <li key={c.label}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-5">
                    <span>
                      <span className="t-label block text-ink-faint">{c.label}</span>
                      <span className="mt-1 block text-lg">{c.value}</span>
                    </span>
                    <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-ink-soft">
              Qué pasa después: leemos tu mensaje, te hacemos las preguntas necesarias y te enviamos una propuesta con alcance y presupuesto.
            </p>
          </div>
          <ContactForm source="contacto" />
        </div>
      </Section>
    </>
  )
}
