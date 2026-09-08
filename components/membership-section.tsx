"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextOnHover } from "@/components/scramble-text";
import { BitmapChevron } from "@/components/bitmap-chevron";

gsap.registerPlugin(ScrollTrigger);

export function MembershipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // HEADER
      gsap.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        },
      );

      // LEFT TEXT
      gsap.fromTo(
        contentRef.current?.children || [],
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
          },
        },
      );

      // CARD
      gsap.fromTo(
        cardRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6 md:px-28 border-t border-border/30 overflow-hidden"
      id="equipo-it"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-accent/10 blur-[120px] pointer-events-none" />

      {/* HEADER */}
      <div ref={headerRef} className="max-w-4xl">
        <span className="font-mono text-xs text-accent uppercase tracking-widest">
          06 / IT TEAM
        </span>

        <h2 className="mt-6 font-[family-name:var(--font-bebas)] text-5xl md:text-7xl leading-[0.95] tracking-tight">
          TU PRODUCTO <span className="text-accent">NO CRECE SOLO.</span> SE
          ESTANCA.
        </h2>

        <p className="mt-6 text-muted-foreground max-w-2xl">
          Si nadie lo mejora constantemente, pierde rendimiento, oportunidades y
          termina quedando atrás.
        </p>

        <p className="mt-3 text-sm text-muted-foreground/70 max-w-2xl font-mono">
          Este plan es para productos que ya están en marcha. Si estás por
          construir tu web, sistema o plataforma desde cero, mirá nuestros{" "}
          <a href="#servicios" className="text-accent underline underline-offset-2">
            servicios de desarrollo
          </a>
          .
        </p>
      </div>

      {/* MAIN CARD */}
      <div
        ref={cardRef}
        className="mt-16 md:mt-20 max-w-7xl border border-border/40 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-sm relative group transition-all overflow-hidden hover:border-white/20"
      >
        {/* Hover glow sutil */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/[0.02] pointer-events-none" />

        <div className="grid md:grid-cols-[1fr_auto_1fr] items-stretch">
          {/* IZQUIERDA */}
          <div
            ref={contentRef}
            className="p-8 md:p-12 flex flex-col justify-center"
          >
            <p className="text-muted-foreground text-xs uppercase tracking-widest mb-6">
              Problemas comunes
            </p>

            <div className="space-y-5 font-mono text-sm text-foreground/70">
              <p className="hover:text-foreground transition">
                → Estás resolviendo todo vos
              </p>
              <p className="hover:text-foreground transition">
                → Dependés de freelancers que no siempre están
              </p>
              <p className="hover:text-foreground transition">
                → Las mejoras tardan más de lo que deberían
              </p>
              <p className="hover:text-foreground transition">
                → Tu producto no evoluciona al ritmo del negocio
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="hidden md:block w-px bg-border/40" />

          {/* DERECHA */}
          <div className="p-8 md:p-12 flex flex-col justify-between bg-white/[0.02]">
            {/* TOP */}
            <div>
              <span className="inline-block text-[10px] uppercase tracking-widest text-accent border border-accent/40 px-3 py-1 mb-6">
                Plan base
              </span>

              <p className="text-xs text-muted-foreground">Planes desde</p>

              <h3 className="mt-3 font-[family-name:var(--font-bebas)] text-6xl md:text-7xl leading-none">
                USD <span className="text-accent">300</span>
              </h3>

              <p className="text-muted-foreground text-sm mt-2">por mes</p>
            </div>

            {/* FEATURES */}
            <div className="mt-8 space-y-4 text-sm bg-white/[0.02] border border-border/30 p-5 rounded-xl">
              <p>✔ Equipo técnico que trabaja todas las semanas</p>
              <p>✔ Mejoras constantes sin que las tengas que pedir</p>
              <p>✔ Bugs resueltos rápido, sin frenar tu negocio</p>
              <p>✔ Decisiones técnicas para escalar</p>
            </div>

            {/* CTA INTEGRADO */}
            <div className="mt-8 pt-6 border-t border-border/30">
              <p className="text-sm text-muted-foreground mb-6">
                No pagás tareas. Pagás porque tu producto avance.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/equipo-it"
                  className="group inline-flex items-center justify-center gap-2 border border-accent px-5 py-3 text-[11px] uppercase tracking-widest text-accent hover:bg-accent hover:text-black transition"
                >
                  <ScrambleTextOnHover
                    text="Ver cómo funciona"
                    as="span"
                  />
                  <BitmapChevron className="group-hover:rotate-45 transition" />
                </a>

                <a
                  href="https://wa.me/5491167470473"
                  target="_blank"
                  className="inline-flex items-center justify-center border border-foreground/30 px-5 py-3 text-[11px] uppercase tracking-widest hover:border-accent hover:text-accent transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}