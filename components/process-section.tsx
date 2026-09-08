"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BitmapChevron } from "@/components/bitmap-chevron";

gsap.registerPlugin(ScrollTrigger);

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: "01",
      title: "Entendemos",
      description:
        "Definimos el problema, los objetivos y el alcance antes de diseñar o desarrollar nada.",
      bullets: [
        "Objetivos claros",
        "Análisis del negocio y la competencia",
        "Definición de alcance y estructura",
      ],
    },
    {
      number: "02",
      title: "Diseñamos",
      description:
        "Convertimos la idea en una experiencia y una solución concreta, enfocada en el usuario.",
      bullets: [
        "UX/UI centrado en usuario",
        "Diseño moderno y consistente",
        "Estructura orientada a conversión",
      ],
    },
    {
      number: "03",
      title: "Construimos",
      description:
        "Desarrollamos el producto con una arquitectura preparada para crecer, no para rehacerse.",
      bullets: [
        "Código optimizado",
        "APIs e integraciones",
        "Arquitectura escalable",
      ],
    },
    {
      number: "04",
      title: "Lanzamos",
      description:
        "Probamos, optimizamos y preparamos el producto para usuarios y tráfico reales.",
      bullets: ["Performance", "SEO técnico", "Mejora continua"],
    },
  ];

  useEffect(() => {
    const items = Array.from(
      itemsRef.current?.querySelectorAll(".process-item") || [],
    );

    // entrada mobile (timeline)
    gsap.fromTo(
      items,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: itemsRef.current,
          start: "top 85%",
        },
      },
    );

    // línea progresiva mobile
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: true,
          },
        },
      );
    }

    // highlight activo mobile
    items.forEach((item) => {
      const title = item.querySelector("h3");

      ScrollTrigger.create({
        trigger: item,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to(title, { color: "#ff6a00", duration: 0.3 });
        },
        onLeaveBack: () => {
          gsap.to(title, { color: "#ffffff", duration: 0.3 });
        },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="proceso"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12"
    >
      {/* HEADER */}
      <div className="mb-20 max-w-3xl">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">
          04 / Proceso
        </span>

        <h2 className="mt-4 text-5xl md:text-7xl font-[family-name:var(--font-bebas)]">
          CÓMO TRABAJAMOS
        </h2>

        <p className="mt-6 text-base text-muted-foreground font-mono">
          Un proceso claro y enfocado en resultados reales: más clientes, mejor
          rendimiento y crecimiento sostenido.
        </p>
      </div>

      {/* ================= MOBILE TIMELINE ================= */}
      <div className="relative max-w-4xl lg:hidden">
        <div className="absolute left-2 top-0 bottom-0 w-[1px] bg-border/40" />

        <div
          ref={lineRef}
          className="absolute left-2 top-0 w-[2px] bg-accent"
        />

        <div ref={itemsRef} className="space-y-20">
          {steps.map((step, index) => (
            <div key={index} className="process-item relative pl-12 group">
              <div className="absolute left-0 top-1 w-8 h-8 flex items-center justify-center border border-accent text-[10px] font-mono text-accent bg-background">
                {step.number}
              </div>

              <h3 className="text-3xl font-semibold">{step.title}</h3>

              <p className="mt-3 text-base text-muted-foreground max-w-lg">
                {step.description}
              </p>

              <div className="mt-4 text-sm text-muted-foreground font-mono space-y-1">
                {step.bullets.map((b, i) => (
                  <p key={i}>• {b}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DESKTOP GRID ================= */}
      <div className="hidden lg:block mt-10">
        <div className="h-[1px] bg-border/40 mb-10" />

        <div className="grid grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group border border-border/40 p-6 hover:border-accent transition"
            >
              <div className="w-8 h-8 mb-4 flex items-center justify-center border border-accent text-[10px] font-mono text-accent">
                {step.number}
              </div>

              <h3 className="text-2xl font-semibold group-hover:text-accent transition-colors">
                {step.title}
              </h3>

              <p className="mt-3 text-sm text-muted-foreground">
                {step.description}
              </p>

              <div className="mt-4 text-sm text-muted-foreground font-mono space-y-1">
                {step.bullets.map((b, i) => (
                  <p key={i}>• {b}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="mt-24 border border-border/40 p-10 md:p-16 text-center w-full">
        <h3 className="text-3xl md:text-5xl font-[family-name:var(--font-bebas)] max-w-3xl mx-auto">
          Contanos tu idea y la convertimos en un producto real.
        </h3>

        <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
          Desde la estrategia hasta el desarrollo, te acompañamos en todo el
          proceso.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-3 border border-accent px-6 py-3 text-sm uppercase text-accent hover:bg-accent hover:text-black transition"
        >
          Iniciar proyecto
          <BitmapChevron />
        </a>
      </div>
    </section>
  );
}
