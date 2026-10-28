import { ButtonLink } from "@/components/ui/button"
import { whatsappHref } from "@/lib/content/site"
import { ArrowRight } from "@/components/ui/icons"
import { Eyebrow } from "@/components/ui/section"
import { StudioShowcase } from "@/components/visuals/studio-showcase"
import { getT } from "@/lib/i18n/server"

export async function Hero() {
  const { locale, t } = await getT()
  const after = t("home.hero.titleAfter")
  return (
    <section
      aria-labelledby="hero-title"
      className="hero-atmos grain relative flex items-center overflow-hidden pt-28 pb-14 lg:min-h-[100svh] lg:pt-24 lg:pb-8"
    >
      <div className="wrap grid w-full items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <div className="relative z-10 min-w-0">
          <div className="enter">
            <Eyebrow>{t("home.hero.eyebrow")}</Eyebrow>
          </div>

          <h1 id="hero-title" className="t-hero enter mt-5" style={{ "--d": "80ms" } as React.CSSProperties}>
            {t("home.hero.titleBefore")}{" "}
            <span className="relative whitespace-nowrap">
              <span className="text-shine">{t("home.hero.titleHighlight")}</span>
              <svg aria-hidden="true" viewBox="0 0 300 12" preserveAspectRatio="none" className="absolute -bottom-1 left-0 h-2.5 w-full text-brand md:-bottom-2">
                <path d="M2 8c60-6 150-8 296-2" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
            {after && <> {after}</>}
          </h1>

          <p className="t-lead enter mt-6 max-w-lg" style={{ "--d": "180ms" } as React.CSSProperties}>
            {t("home.hero.lead")}
          </p>

          <div className="enter mt-8 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ "--d": "280ms" } as React.CSSProperties}>
            {locale === "es" ? (
              // Mercado hispanohablante: WhatsApp es el canal más directo.
              <ButtonLink href={whatsappHref(t("home.hero.primaryMessage"))} whatsapp={{ location: "hero", label: "hero_primary" }}>
                {t("home.hero.primary")}
                <ArrowRight width={18} height={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </ButtonLink>
            ) : (
              // Mercado internacional: el formulario (y el correo, si está configurado) es la vía principal; WhatsApp sigue disponible más abajo.
              <ButtonLink href="/contacto" event="cta_click" eventProps={{ location: "hero", label: "hero_primary" }}>
                {t("home.hero.primary")}
                <ArrowRight width={18} height={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </ButtonLink>
            )}
            {locale === "es" ? (
              <ButtonLink href="#servicios" variant="secondary" event="cta_click" eventProps={{ location: "hero", label: "explorar_servicios" }}>
                {t("home.hero.secondary")}
              </ButtonLink>
            ) : (
              <ButtonLink href="/proyectos" variant="secondary" event="cta_click" eventProps={{ location: "hero", label: "explore_work" }}>
                {t("home.hero.secondary")}
              </ButtonLink>
            )}
          </div>

          <p className="enter mt-6 flex items-center gap-2 text-sm text-ink-faint" style={{ "--d": "380ms" } as React.CSSProperties}>
            <span aria-hidden="true" className="pulse-dot h-1.5 w-1.5 rounded-full bg-brand" />
            {t("home.hero.trust")}
          </p>
        </div>

        <div className="enter min-w-0 lg:-mr-8 xl:-mr-16" style={{ "--d": "220ms" } as React.CSSProperties}>
          <StudioShowcase maxHeight="calc(100svh - 150px)" />
        </div>
      </div>
    </section>
  )
}
