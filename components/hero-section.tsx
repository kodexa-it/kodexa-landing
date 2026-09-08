"use client"

import { useEffect, useRef } from "react"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { SplitFlapText, SplitFlapMuteToggle, SplitFlapAudioProvider } from "@/components/split-flap-text"
import { AnimatedNoise } from "@/components/animated-noise"
import { BitmapChevron } from "@/components/bitmap-chevron"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -80,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center pl-6 md:pl-28 pr-6 md:pr-12"
    >
      <AnimatedNoise opacity={0.03} />

      {/* Label lateral */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground -rotate-90 origin-left block whitespace-nowrap">
          KODEXA
        </span>
      </div>

      {/* CONTENT */}
      <div ref={contentRef} className="flex-1 w-full max-w-5xl">
        <SplitFlapAudioProvider>
          <div className="relative">
            <SplitFlapText text="KODEXA" speed={80} />
            <div className="mt-4">
              <SplitFlapMuteToggle />
            </div>
          </div>
        </SplitFlapAudioProvider>

        {/* TAGLINE DE MARCA */}
        <p className="font-[family-name:var(--font-bebas)] text-muted-foreground/70 text-[clamp(1.4rem,3.2vw,2.4rem)] mt-6 tracking-wide leading-tight">
          DISEÑADO PARA CRECER. <span className="text-accent">PREPARADO PARA ESCALAR.</span>
        </p>

        {/* H1 — PROPUESTA DE VALOR */}
        <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-bebas)] text-[clamp(1.6rem,3vw,2.6rem)] leading-snug tracking-tight text-foreground">
          Desarrollamos <span className="text-accent">productos digitales</span> que hacen crecer tu negocio
        </h1>

        {/* SUBTEXTO */}
        <p className="mt-8 max-w-xl font-mono text-sm text-muted-foreground leading-relaxed">
          Desde sitios web y sistemas a medida hasta plataformas digitales, MVPs
          y productos SaaS: diseñamos y desarrollamos soluciones pensadas para
          escalar junto a tu negocio.
        </p>

        {/* 🚀 CTAs */}
        <div className="mt-14 flex items-center gap-6 flex-wrap">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 border border-accent px-6 py-3 font-mono text-[11px] uppercase tracking-widest text-accent hover:bg-accent hover:text-black transition-all duration-200"
          >
            <ScrambleTextOnHover text="Iniciar proyecto" as="span" duration={0.6} />
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </a>

          <a
            href="#servicios"
            className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Ver servicios
          </a>

          <a
            href="#proyectos"
            className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Ver proyectos
          </a>
        </div>
      </div>

      {/* TAG */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
        <div className="border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Digital Product Studio
        </div>
      </div>
    </section>
  )
}