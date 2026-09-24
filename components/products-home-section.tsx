"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { BitmapChevron } from "@/components/bitmap-chevron"
import { products } from "@/lib/products"
import { trackEvent } from "@/lib/analytics"

gsap.registerPlugin(ScrollTrigger)

const cards = [products.nexo, products.nodo]

/** Segunda ruta de la Home: no compite con el CTA de proyectos, solo deriva a /productos. */
export function ProductsHomeSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll("[data-fade]"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        },
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="productos-kodexa"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12"
    >
      <div data-fade className="mb-14 max-w-3xl">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          06 / Productos
        </span>
        <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-4xl md:text-6xl tracking-tight">
          TAMBIÉN DESARROLLAMOS NUESTRAS PROPIAS SOLUCIONES
        </h2>
        <p className="mt-6 font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
          Además de desarrollar soluciones a medida, creamos productos que los
          negocios pueden incorporar para mejorar su atención y gestión.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {cards.map((p) => (
          <article
            key={p.name}
            data-fade
            className="group relative flex flex-col border border-border/50 bg-card p-8 hover:border-accent/60 transition-colors duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-md flex items-center justify-center text-xs font-mono">
                {p.badge}
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                Producto Kodexa
              </span>
            </div>

            <h3 className="mt-6 font-[family-name:var(--font-bebas)] text-4xl tracking-tight group-hover:text-accent transition-colors">
              {p.name.toUpperCase()}
            </h3>
            <p className="mt-1 font-mono text-sm text-foreground/80">{p.tagline}</p>
            <div className="mt-4 w-12 h-px bg-accent/60 group-hover:w-full transition-all duration-500" />
            <p className="mt-4 flex-1 font-mono text-sm text-muted-foreground leading-relaxed">
              {p.description}
            </p>

            <Link
              href={p.href}
              onClick={() =>
                trackEvent("product_cta_click", { location: "home", product: p.name.toLowerCase() })
              }
              className="group/btn mt-8 self-start inline-flex items-center gap-3 border border-accent/40 px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-accent hover:bg-accent hover:text-black transition-all duration-200"
            >
              <ScrambleTextOnHover text={p.cta} as="span" duration={0.5} />
              <BitmapChevron className="transition-transform duration-300 group-hover/btn:rotate-45" />
            </Link>
          </article>
        ))}
      </div>

      <div data-fade className="mt-10">
        <Link
          href="/productos"
          onClick={() => trackEvent("product_cta_click", { location: "home", product: "ecosistema" })}
          className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors underline underline-offset-4"
        >
          Descubrí el ecosistema Kodexa →
        </Link>
      </div>
    </section>
  )
}
