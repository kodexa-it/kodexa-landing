"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const audiences = [
  {
    title: "Tenés una idea",
    description:
      "Querés convertir una idea de negocio en un producto digital real, validable y funcional.",
  },
  {
    title: "Necesitás vender online",
    description:
      "Tu negocio necesita una presencia digital que atraiga clientes y genere ventas.",
  },
  {
    title: "Querés digitalizar procesos",
    description:
      "Hoy gestionás todo de forma manual y necesitás un sistema que centralice y automatice tu operación.",
  },
  {
    title: "Necesitás un sistema propio",
    description:
      "Las herramientas genéricas ya no alcanzan y necesitás una plataforma adaptada a tu forma de trabajar.",
  },
  {
    title: "Querés lanzar un MVP",
    description:
      "Tenés un producto en mente y necesitás una primera versión sólida para salir al mercado.",
  },
];

export function AudienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            },
          },
        );
      }

      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll("[data-audience-card]");
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 88%",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="para-quien"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      <div ref={headerRef} className="mb-16 max-w-3xl">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          02 / ¿Para quién?
        </span>
        <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
          ¿ES ESTO PARA VOS?
        </h2>
        <p className="mt-6 font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
          Trabajamos con emprendedores, pymes y equipos que necesitan un
          producto digital sólido, sin importar en qué etapa estén.
        </p>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {audiences.map((item, i) => (
          <div
            key={i}
            data-audience-card
            className="border border-border/40 p-6 md:p-8 hover:border-accent/60 transition-colors duration-300"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-[family-name:var(--font-bebas)] text-2xl tracking-tight">
              {item.title}
            </h3>
            <p className="mt-3 font-mono text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
