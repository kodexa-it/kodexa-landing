import { Link } from "@/components/i18n/link"
import { contactEmail, nav, site, whatsappHref } from "@/lib/content/site"
import { getContent } from "@/lib/content"
import { getT } from "@/lib/i18n/server"
import { Logo } from "@/components/ui/logo"
import { ButtonLink } from "@/components/ui/button"
import { Instagram, Linkedin } from "@/components/ui/icons"
import { CookiePrefsButton } from "@/components/consent/cookie-banner"
import { loadTracking } from "@/lib/content/site"
import { EmailLink } from "@/components/ui/email-link"

const linkCls = "text-ink-soft transition-colors hover:text-ink"
const socialCls =
  "grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-ink hover:text-white"

export async function SiteFooter() {
  const { locale, t } = await getT()
  const { services } = getContent(locale)
  return (
    <footer className="relative border-t border-line bg-mist/60">
      <div className="wrap py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[0.95rem] text-ink-soft">
              {t("footer.tagline")}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label={t("footer.instagramAria")} className={socialCls}>
                <Instagram width={18} height={18} />
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label={t("footer.linkedinAria")} className={socialCls}>
                <Linkedin width={18} height={18} />
              </a>
            </div>
          </div>

          <nav aria-label={t("footer.navAria")}>
            <p className="t-label text-ink-faint">{t("footer.navTitle")}</p>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              <li><Link className={linkCls} href="/">{t("common.home")}</Link></li>
              {nav.map((i) => (
                <li key={i.href}><Link className={linkCls} href={i.href}>{t(`common.nav.${i.key}`)}</Link></li>
              ))}
              <li><Link className={linkCls} href="/contacto">{t("common.contact")}</Link></li>
            </ul>
          </nav>

          <nav aria-label={t("footer.servicesTitle")}>
            <p className="t-label text-ink-faint">{t("footer.servicesTitle")}</p>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              {services.map((s) => (
                <li key={s.slug}><Link className={linkCls} href={`/servicios/${s.slug}`}>{s.title}</Link></li>
              ))}
              <li><Link className={linkCls} href="/equipo-it">{t("footer.itTeam")}</Link></li>
            </ul>
          </nav>

          <div>
            <p className="t-label text-ink-faint">{t("footer.contactTitle")}</p>
            <p className="mt-5 text-[0.95rem] text-ink-soft">{t("footer.contactText")}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonLink href="/contacto" variant="secondary" event="contact_cta_click" eventProps={{ location: "footer" }}>
                {t("header.sendInquiry")}
              </ButtonLink>
              <ButtonLink href={whatsappHref(t("common.whatsappDefault"))} variant="secondary" whatsapp={{ location: "footer", label: "footer_whatsapp" }}>
                {t("footer.whatsapp")}
              </ButtonLink>
              {contactEmail && (
                <EmailLink location="footer" className="inline-flex items-center rounded-full px-2 py-3.5 text-[0.95rem] font-medium text-ink underline underline-offset-4">
                  {t("footer.email")}
                </EmailLink>
              )}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-sm text-ink-faint md:flex-row md:justify-between">
          <p>{t("footer.rights", { year: new Date().getFullYear() })}</p>
          <nav aria-label={t("footer.legalAria")} className="flex flex-wrap gap-x-5 gap-y-2">
            <Link className={linkCls} href="/privacidad">{t("footer.privacy")}</Link>
            <Link className={linkCls} href="/cookies">{t("footer.cookies")}</Link>
            {loadTracking && <CookiePrefsButton className={linkCls} />}
          </nav>
        </div>
      </div>
    </footer>
  )
}
