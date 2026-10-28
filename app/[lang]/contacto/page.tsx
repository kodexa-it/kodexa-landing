import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { ContactForm } from "@/components/forms/contact-form"
import { Section } from "@/components/ui/section"
import { ButtonLink } from "@/components/ui/button"
import { EmailLink } from "@/components/ui/email-link"
import { ArrowUpRight, Whatsapp } from "@/components/ui/icons"
import { contactEmail, site, whatsappHref } from "@/lib/content/site"
import { pageMetadata } from "@/lib/seo"
import { getT } from "@/lib/i18n/server"

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getT()
  return pageMetadata({ locale, path: "/contacto", title: t("contacto.meta.title"), description: t("contacto.meta.description"), ogTitle: t("contacto.meta.ogTitle") })
}

const channels = [
  { label: "Instagram", value: "@kodexa.it", href: site.instagram },
  { label: "LinkedIn", value: "Kodexa", href: site.linkedin },
]

export default async function ContactoPage() {
  const { locale, t } = await getT()
  // Prioridad de canales: en español, WhatsApp primero; en inglés, correo (si está configurado) y formulario primero.
  const whatsappCard = (
    <div className="glass p-7 md:p-8">
      <p className="t-label text-ink-faint">{t("contacto.directLabel")}</p>
      <h2 className="t-h3 mt-3">{t("contacto.whatsappTitle")}</h2>
      <p className="mt-3 text-[0.97rem] text-ink-soft">{t("contacto.whatsappText")}</p>
      <ButtonLink
        href={whatsappHref(t("common.whatsappDefault"))}
        className="mt-6 w-full"
        whatsapp={{ location: "contact", label: "contact_page_whatsapp" }}
      >
        <Whatsapp width={18} height={18} /> {t("contacto.whatsappButton")}
      </ButtonLink>
    </div>
  )
  const emailCard = contactEmail ? (
    <div className="glass p-7 md:p-8">
      <p className="t-label text-ink-faint">{t("contacto.emailLabel")}</p>
      <h2 className="t-h3 mt-3">{t("contacto.emailTitle")}</h2>
      <p className="mt-3 text-[0.97rem] text-ink-soft">{t("contacto.emailText")}</p>
      <EmailLink
        location="contact_page"
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/12 bg-white/60 px-6 py-3.5 text-[0.95rem] font-medium text-ink backdrop-blur-md transition-colors hover:bg-white"
      >
        {t("contacto.emailButton")}
      </EmailLink>
    </div>
  ) : null

  return (
    <>
      <PageHero
        path="/contacto"
        crumbs={[{ name: "Kodexa", href: "/" }, { name: t("contacto.crumb") }]}
        eyebrow={t("contacto.eyebrow")}
        title={t("contacto.title")}
        lead={t("contacto.lead")}
      />
      <Section className="!pt-4">
        <div className="wrap grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div className="space-y-4">
            {locale === "en" ? (
              <>
                {emailCard}
                {whatsappCard}
              </>
            ) : (
              <>
                {whatsappCard}
                {emailCard}
              </>
            )}

            <p className="pt-6 text-sm text-ink-soft">{t("contacto.formHint")}</p>

            <ul className="divide-y divide-line border-y border-line">
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
            <p className="pt-4 text-sm text-ink-soft">{t("contacto.next")}</p>
          </div>
          <div id="formulario" className="scroll-mt-28"><ContactForm source="contacto" /></div>
        </div>
      </Section>
    </>
  )
}
