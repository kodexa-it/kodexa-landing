import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { ContactForm } from "@/components/forms/contact-form"
import { Section } from "@/components/ui/section"
import { ButtonLink } from "@/components/ui/button"
import { ArrowUpRight, Whatsapp } from "@/components/ui/icons"
import { site, whatsappHref } from "@/lib/content/site"

export const metadata: Metadata = {
  title: "Contacto: hablemos de tu proyecto",
  description: "Contanos qué tenés en mente. Te ayudamos a encontrar la mejor solución para tu negocio y te respondemos dentro de las 24 hs.",
  alternates: { canonical: "/contacto" },
  openGraph: { title: "Contacto | Kodexa", url: "https://kodexa.ar/contacto", images: ["/og-image.png"] },
}

const channels = [
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
        title="Hablemos de tu próximo proyecto."
        lead="Contanos qué tenés en mente. Te ayudamos a encontrar la mejor solución para tu negocio."
      />
      <Section className="!pt-4">
        <div className="wrap grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            {/* WhatsApp: la opción más directa, siempre visible antes del formulario. */}
            <div className="glass p-7 md:p-8">
              <p className="t-label text-ink-faint">La forma más directa</p>
              <h2 className="t-h3 mt-3">Escribinos por WhatsApp</h2>
              <p className="mt-3 text-[0.97rem] text-ink-soft">Contanos tu idea en un mensaje. Te respondemos dentro de las 24 hs.</p>
              <ButtonLink
                href={whatsappHref("Hola Kodexa! Quiero hablar sobre un proyecto.")}
                className="mt-6 w-full"
                whatsapp={{ location: "contact", label: "contact_page_whatsapp" }}
              >
                <Whatsapp width={18} height={18} /> Contactar por WhatsApp
              </ButtonLink>
            </div>

            <p className="mt-10 text-sm text-ink-soft">
              ¿Preferís dejarnos tus datos? Completá el formulario y elegí si te contactamos por WhatsApp o por email.
            </p>

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
