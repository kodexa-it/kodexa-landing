import { ButtonLink } from "@/components/ui/button"
import { whatsappHref } from "@/lib/content/site"
import { ArrowRight } from "@/components/ui/icons"
import { Eyebrow } from "@/components/ui/section"
import { StudioShowcase } from "@/components/visuals/studio-showcase"

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="hero-atmos grain relative flex items-center overflow-hidden pt-28 pb-14 lg:min-h-[100svh] lg:pt-24 lg:pb-8"
    >
      <div className="wrap grid w-full items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <div className="relative z-10 min-w-0">
          <div className="enter">
            <Eyebrow>Estudio digital de diseño y desarrollo</Eyebrow>
          </div>

          <h1 id="hero-title" className="t-hero enter mt-5" style={{ "--d": "80ms" } as React.CSSProperties}>
            Soluciones digitales para{" "}
            <span className="relative whitespace-nowrap">
              <span className="text-shine">hacer crecer</span>
              <svg aria-hidden="true" viewBox="0 0 300 12" preserveAspectRatio="none" className="absolute -bottom-1 left-0 h-2.5 w-full text-brand md:-bottom-2">
                <path d="M2 8c60-6 150-8 296-2" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>{" "}
            tu negocio.
          </h1>

          <p className="t-lead enter mt-6 max-w-lg" style={{ "--d": "180ms" } as React.CSSProperties}>
            Diseñamos y desarrollamos sitios web, sistemas a medida y productos digitales. De la idea a algo que funciona.
          </p>

          <div className="enter mt-8 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ "--d": "280ms" } as React.CSSProperties}>
            <ButtonLink
              href={whatsappHref("Hola Kodexa! Quiero conversar sobre mi proyecto.")}
              whatsapp={{ location: "hero", label: "hero_primary" }}
            >
              Conversemos sobre tu proyecto
              <ArrowRight width={18} height={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink href="#servicios" variant="secondary" event="cta_click" eventProps={{ location: "hero", label: "explorar_servicios" }}>
              Explorar servicios
            </ButtonLink>
          </div>

          <p className="enter mt-6 flex items-center gap-2 text-sm text-ink-faint" style={{ "--d": "380ms" } as React.CSSProperties}>
            <span aria-hidden="true" className="pulse-dot h-1.5 w-1.5 rounded-full bg-brand" />
            Trato directo con quien diseña y desarrolla · Respuesta en 24 hs
          </p>
        </div>

        <div className="enter min-w-0 lg:-mr-8 xl:-mr-16" style={{ "--d": "220ms" } as React.CSSProperties}>
          <StudioShowcase maxHeight="calc(100svh - 150px)" />
        </div>
      </div>
    </section>
  )
}
