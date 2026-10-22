import Link from "next/link"
import { nav, site, whatsappHref } from "@/lib/content/site"
import { services } from "@/lib/content/services"
import { Logo } from "@/components/ui/logo"
import { ButtonLink } from "@/components/ui/button"
import { Instagram, Linkedin } from "@/components/ui/icons"

const linkCls = "text-ink-soft transition-colors hover:text-ink"
const socialCls =
  "grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-ink hover:text-white"

export function SiteFooter() {
  return (
    <footer className="relative border-t border-line bg-mist/60">
      <div className="wrap py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[0.95rem] text-ink-soft">
              {site.tagline}. Diseñamos y desarrollamos soluciones para negocios.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Kodexa" className={socialCls}>
                <Instagram width={18} height={18} />
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Kodexa" className={socialCls}>
                <Linkedin width={18} height={18} />
              </a>
            </div>
          </div>

          <nav aria-label="Navegación del pie">
            <p className="t-label text-ink-faint">Navegación</p>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              <li><Link className={linkCls} href="/">Inicio</Link></li>
              {nav.map((i) => (
                <li key={i.href}><Link className={linkCls} href={i.href}>{i.label}</Link></li>
              ))}
              <li><Link className={linkCls} href="/recursos">Recursos</Link></li>
              <li><Link className={linkCls} href="/contacto">Contacto</Link></li>
            </ul>
          </nav>

          <nav aria-label="Servicios">
            <p className="t-label text-ink-faint">Servicios</p>
            <ul className="mt-5 space-y-3 text-[0.95rem]">
              {services.map((s) => (
                <li key={s.slug}><Link className={linkCls} href={`/servicios/${s.slug}`}>{s.title}</Link></li>
              ))}
              <li><Link className={linkCls} href="/equipo-it">Equipo IT continuo</Link></li>
            </ul>
          </nav>

          <div>
            <p className="t-label text-ink-faint">Contacto</p>
            <p className="mt-5 text-[0.95rem] text-ink-soft">¿Tenés un proyecto en mente? Te respondemos dentro de las 24 hs.</p>
            <ButtonLink href={whatsappHref()} variant="secondary" className="mt-5">
              Escribir por WhatsApp
            </ButtonLink>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-sm text-ink-faint md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Kodexa. Todos los derechos reservados.</p>
          <p>Diseño y desarrollo de soluciones digitales.</p>
        </div>
      </div>
    </footer>
  )
}
