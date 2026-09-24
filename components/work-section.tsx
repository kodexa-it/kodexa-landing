"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ScrambleTextOnHover } from "@/components/scramble-text";
import { BitmapChevron } from "@/components/bitmap-chevron";
import { works } from "@/lib/works";
import { trackEvent } from "@/lib/analytics";

gsap.registerPlugin(ScrollTrigger);

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = Array.from(
      gridRef.current?.querySelectorAll<HTMLElement>("[data-project-card]") ||
        [],
    );
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12"
      id="proyectos"
    >
      {/* HEADER */}
      <div className="mb-12 max-w-3xl">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          03 / Trabajos
        </span>

        <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-5xl md:text-7xl">
          PROYECTOS QUE GENERAN RESULTADOS
        </h2>

        <p className="mt-6 font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
          Esto es lo que ya hicimos: sitios, plataformas y sistemas para
          negocios reales.
        </p>
      </div>

      {/* GRID */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {works.map((work) => (
          <div
            key={work.title}
            data-project-card
            className="group border border-border/40 overflow-hidden flex flex-col"
          >
            <div className="relative aspect-[16/10] bg-card overflow-hidden">
              {work.image ? (
                <Image
                  src={work.image}
                  alt={`${work.title} — ${work.category}`}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-bebas)] text-7xl text-muted-foreground/30 group-hover:text-accent/60 transition-colors">
                    {work.badge}
                  </span>
                </div>
              )}

              {work.via && (
                <span className="absolute top-3 right-3 text-[10px] font-mono text-muted-foreground">
                  {work.via}
                </span>
              )}
              {work.status && (
                <span className="absolute top-3 right-3 text-[10px] bg-accent text-black px-2 py-1 font-mono">
                  {work.status}
                </span>
              )}
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <span className="text-[10px] text-accent font-mono uppercase">
                {work.category}
              </span>

              <h3 className="text-xl mt-2 group-hover:text-accent">
                {work.title}
              </h3>

              <p className="text-sm text-muted-foreground mt-2">
                {work.description}
              </p>

              {work.bullets && (
                <div className="mt-4 space-y-1 text-xs text-muted-foreground font-mono">
                  {work.bullets.map((b) => (
                    <p key={b}>• {b}</p>
                  ))}
                </div>
              )}

              {work.url && (
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 self-start inline-flex items-center gap-3 border border-foreground/20 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
                >
                  <ScrambleTextOnHover
                    text="Ver proyecto"
                    as="span"
                    duration={0.5}
                  />
                  <BitmapChevron className="transition-transform duration-300 group-hover:rotate-45" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-xl text-xs text-muted-foreground font-mono">
        Los proyectos de Uno Collective fueron desarrollados como parte de su
        equipo, participando en desarrollo y arquitectura.
      </p>

      {/* CTA */}
      <div className="mt-20 border border-border/40 p-10 text-center">
        <h3 className="text-3xl">
          ¿Querés un proyecto que realmente genere resultados?
        </h3>

        <p className="text-sm text-muted-foreground mt-3">
          Diseñamos y desarrollamos soluciones enfocadas en conversión,
          performance y escalabilidad.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={() =>
              trackEvent("cta_click", {
                location: "works",
                label: "contanos_tu_proyecto",
              })
            }
            className="inline-flex items-center gap-3 border border-accent px-6 py-3 text-sm uppercase text-accent hover:bg-accent hover:text-black transition"
          >
            Contanos tu proyecto
            <BitmapChevron />
          </a>

          <a
            href="/proyectos"
            className="inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 text-sm uppercase text-foreground hover:border-accent hover:text-accent transition"
          >
            Ver todos los proyectos
            <BitmapChevron />
          </a>
        </div>
      </div>
    </section>
  );
}
