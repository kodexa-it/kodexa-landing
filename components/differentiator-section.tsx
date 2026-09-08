"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    number: "01",
    title: "Producto primero",
    description:
      "No entregamos código suelto. Pensamos cada proyecto como un producto que tiene que funcionar y generar resultados.",
  },
  {
    number: "02",
    title: "Diseño y desarrollo integrados",
    description:
      "La misma mirada define cómo se ve y cómo funciona tu producto, sin fricciones entre diseño y desarrollo.",
  },
  {
    number: "03",
    title: "Arquitectura preparada para escalar",
    description:
      "Construimos con una base técnica que soporta el crecimiento, no soluciones que hay que rehacer en seis meses.",
  },
  {
    number: "04",
    title: "Soluciones a medida",
    description:
      "Nada de plantillas genéricas. Cada solución se adapta a cómo funciona realmente tu negocio.",
  },
  {
    number: "05",
    title: "Comunicación directa",
    description:
      "Hablás directamente con quien desarrolla tu proyecto, sin intermediarios ni capas de gestión.",
  },
  {
    number: "06",
    title: "Pensamiento de negocio",
    description:
      "Desarrollar software no es solo programar: es entender el problema real que hay detrás antes de construir.",
  },
];

export function DifferentiatorSection() {
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
        const cards = gridRef.current.querySelectorAll("[data-reason-card]");
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
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
      id="por-que-kodexa"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      <div ref={headerRef} className="mb-16 max-w-3xl">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          05 / ¿Por qué Kodexa?
        </span>
        <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
          NO SOLO ESCRIBIMOS CÓDIGO
        </h2>
        <p className="mt-6 font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
          Desarrollar software es resolver un problema de negocio. La
          diferencia está en cómo se piensa el producto antes de construirlo.
        </p>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30"
      >
        {reasons.map((reason) => (
          <div
            key={reason.number}
            data-reason-card
            className="bg-background p-6 md:p-8 hover:bg-white/[0.02] transition-colors duration-300"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              {reason.number}
            </span>
            <h3 className="mt-4 font-[family-name:var(--font-bebas)] text-2xl tracking-tight">
              {reason.title}
            </h3>
            <p className="mt-3 font-mono text-sm text-muted-foreground leading-relaxed">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
