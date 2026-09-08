"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ScrambleTextOnHover } from "@/components/scramble-text";
import { BitmapChevron } from "@/components/bitmap-chevron";

gsap.registerPlugin(ScrollTrigger);

// ================= DATA =================
const projects = [
  {
    title: "Nexo",
    type: "kodexa",
    status: "dev",
    badge: "NX",
    description:
      "Asistente con inteligencia artificial que aprende cómo funciona un negocio para atender clientes, responder consultas, gestionar reservas y centralizar su información en un solo lugar.",
    bullets: [
      "Asistente conversacional con IA",
      "Integración con WhatsApp",
      "Gestión de reservas y turnos",
      "Suscripciones y panel de administración",
    ],
  },
  {
    title: "Waste Treatment",
    type: "kodexa",
    status: "dev",
    badge: "WT",
    description:
      "Sitio institucional dinámico con arquitectura basada en API y sistema de gestión (ABM), diseñado para optimizar la gestión de contenido, mejorar la escalabilidad y facilitar la operación del negocio.",
    bullets: [
      "Sistema de gestión (ABM)",
      "Integración mediante API",
      "Arquitectura escalable",
      "Contenido dinámico",
    ],
  },
  {
    title: "Peabody Argentina",
    category: "Plataforma Multi-país",
    description:
      "Arquitectura escalable con gestión centralizada y despliegue multi-región.",
    image: "/images/peabody.webp",
    url: "https://peabody.com.ar/",
    type: "previous",
  },
  {
    title: "Mega Promociones",
    category: "Sistema de Landings",
    description: "Gestión dinámica de campañas con despliegue rápido.",
    image: "/images/mega.webp",
    url: "https://mega-promociones.com.mx/",
    type: "previous",
  },
  {
    title: "Freschi",
    category: "Sitio Multi-idioma",
    description: "Web adaptable a múltiples mercados con i18n.",
    image: "/images/freschi.webp",
    url: "https://andresfreschi.com/",
    type: "previous",
  },
  {
    title: "Bigsur Energy",
    category: "Landing de Conversión",
    description: "Optimizada para captación de leads.",
    image: "/images/bigsur.webp",
    url: "https://bigsur.energy/",
    type: "previous",
  },
];

// ================= COMPONENT =================
export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<"kodexa" | "previous">("kodexa");

  const kodexaProjects = projects.filter((p) => p.type === "kodexa");
  const previousProjects = projects.filter((p) => p.type === "previous");

  // ================= ANIMATIONS =================
  useEffect(() => {
    const cards = Array.from(
      gridRef.current?.querySelectorAll<HTMLElement>("[data-project-card]") ||
        [],
    );

    if (!cards.length) return;

    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
      },
    );
  }, [activeTab]);

  useEffect(() => {
    if (!tabsRef.current || !underlineRef.current) return;

    const activeBtn = tabsRef.current.querySelector(
      `[data-tab="${activeTab}"]`,
    ) as HTMLElement;

    if (!activeBtn) return;

    gsap.to(underlineRef.current, {
      x: activeBtn.offsetLeft,
      width: activeBtn.offsetWidth,
      duration: 0.3,
      ease: "power3.out",
    });
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12"
      id="proyectos"
    >
      {/* HEADER */}
      <div className="mb-10 max-w-3xl">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          03 / Portfolio
        </span>

        <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-5xl md:text-7xl">
          PROYECTOS QUE GENERAN RESULTADOS
        </h2>

        <p className="mt-6 font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
          No solo diseñamos páginas: también construimos productos digitales
          propios, de punta a punta.
        </p>
      </div>

      {/* TABS */}
      <div ref={tabsRef} className="relative mb-6 flex gap-6">
        {[
          { label: "Kodexa", value: "kodexa" },
          { label: "Experiencia", value: "previous" },
        ].map((tab) => (
          <button
            key={tab.value}
            data-tab={tab.value}
            onClick={() => setActiveTab(tab.value as any)}
            className={cn(
              "text-xs font-mono uppercase tracking-widest pb-2",
              activeTab === tab.value ? "text-accent" : "text-muted-foreground",
            )}
          >
            {tab.label}
          </button>
        ))}

        <div
          ref={underlineRef}
          className="absolute bottom-0 h-[2px] bg-accent"
        />
      </div>

      {/* GRID */}
      <div ref={gridRef}>
        {/* 💥 CARDS KODEXA (productos propios) */}
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            activeTab !== "kodexa" && "hidden",
          )}
        >
          {kodexaProjects.map((project) => (
            <div
              key={project.title}
              className="col-span-1 md:col-span-2 lg:col-span-3 group relative border border-accent/40 hover:border-accent transition-all duration-500 p-6 md:p-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-md flex items-center justify-center text-xs font-mono">
                  {project.badge ?? ""}
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
                    Producto Kodexa
                  </span>
                  <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-bebas)]">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="mt-5 max-w-xl text-sm text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 space-y-2 text-sm text-muted-foreground font-mono">
                {project.bullets?.map((bullet) => (
                  <p key={bullet}>• {bullet}</p>
                ))}
              </div>

              <span className="absolute top-4 right-4 text-[10px] bg-accent px-2 py-1 font-mono">
                En desarrollo
              </span>

              <div className="mt-6">
                <span className="inline-flex items-center gap-2 text-xs uppercase text-accent">
                  <ScrambleTextOnHover text="Conocer proyecto" />
                  <BitmapChevron />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 🟡 EXPERIENCIA */}
        <div className={cn(activeTab !== "previous" && "hidden")}>
          <p className="mb-8 max-w-xl text-sm text-muted-foreground font-mono">
            Proyectos desarrollados como parte del equipo de{" "}
            <a
              href="https://www.unocollective.com/"
              target="_blank"
              className="text-accent underline"
            >
              Uno Collective
            </a>
            , participando en desarrollo y arquitectura.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previousProjects.map((project, i) => (
              <div
                key={i}
                data-project-card
                className="group border border-border/40 overflow-hidden"
              >
                <div className="relative aspect-[16/10]">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={`${project.title} — ${project.category}`}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                    />
                  )}

                  <span className="absolute top-3 right-3 text-[10px] font-mono text-muted-foreground">
                    Uno Collective
                  </span>
                </div>

                <div className="p-5">
                  <span className="text-[10px] text-accent font-mono uppercase">
                    {project.category}
                  </span>

                  <h3 className="text-xl mt-2 group-hover:text-accent">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mt-2">
                    {project.description}
                  </p>

                  {/* 👇 SOLO si tiene link */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-3 border border-foreground/20 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
                  >
                    <ScrambleTextOnHover
                      text="View Project"
                      as="span"
                      duration={0.5}
                    />
                    <BitmapChevron className="transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
            className="inline-flex items-center gap-3 border border-accent px-6 py-3 text-sm uppercase text-accent hover:bg-accent hover:text-black transition"
          >
            Hablemos
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
