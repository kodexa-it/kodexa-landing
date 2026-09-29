"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ScrambleTextOnHover } from "@/components/scramble-text";
import { BitmapChevron } from "@/components/bitmap-chevron";
import { trackEvent } from "@/lib/analytics";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "LANDING PAGE",
    description:
      "Una página enfocada en presentar un producto, servicio o campaña y convertir visitas en consultas.",
    features: [
      "Diseño responsive",
      "Estructura orientada a conversión",
      "CTA y formulario",
      "SEO básico",
      "Deploy y puesta en producción",
    ],
    price: "Desde USD 250",
    whatsappMessage:
      "Hola Kodexa! Me interesa una landing page para mi negocio. ¿Podemos hablar?",
    href: "/servicios/landing-pages",
  },
  {
    title: "SITIO INSTITUCIONAL",
    description:
      "Un sitio completo para presentar tu empresa, servicios, información y medios de contacto.",
    features: [
      "Múltiples páginas",
      "Diseño responsive",
      "Secciones personalizadas",
      "SEO y buenas prácticas",
      "Integración con herramientas externas",
      "Deploy y puesta en producción",
    ],
    price: "Desde USD 500",
    whatsappMessage:
      "Hola Kodexa! Me interesa un sitio institucional para mi empresa. ¿Podemos hablar?",
    href: "/servicios/institucional",
  },
  {
    title: "INSTITUCIONAL PRO",
    description:
      "Una web institucional más completa y dinámica, pensada para negocios que necesitan administrar y actualizar su contenido.",
    features: [
      "Todo lo incluido en el sitio institucional",
      "Contenido administrable",
      "Blog",
      "Secciones dinámicas",
      "Gestión de contenido",
      "Arquitectura preparada para crecer",
    ],
    price: "Desde USD 900",
    whatsappMessage:
      "Hola Kodexa! Me interesa un sitio institucional Pro, con contenido administrable. ¿Podemos hablar?",
    href: "/servicios/institucional-pro",
  },
  {
    title: "APLICACIONES WEB",
    description:
      "Para negocios que necesitan algo más que un sitio web: desarrollamos aplicaciones y plataformas web a medida.",
    features: [
      "Funcionalidades personalizadas",
      "Usuarios y roles",
      "Paneles de administración",
      "Integraciones con APIs",
      "Arquitectura escalable",
      "Alcance definido según necesidad",
    ],
    price: "Presupuesto a medida",
    whatsappMessage:
      "Hola Kodexa! Estoy evaluando desarrollar una aplicación o plataforma web. ¿Podemos hablar?",
    href: "/servicios/plataformas-digitales",
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current) return;

    const ctx = gsap.context(() => {
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
            toggleActions: "play none none reverse",
          },
        },
      );

      const cards = cardsRef.current?.querySelectorAll("article");
      if (cards) {
        gsap.fromTo(
          cards,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const whatsappGeneralLink =
    "https://wa.me/5491167470473?text=" +
    encodeURIComponent(
      "Hola Kodexa! Estuve viendo su web y me gustaría hablar sobre un proyecto.",
    );

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12"
    >
      {/* Section header */}
      <div ref={headerRef} className="mb-16 max-w-3xl">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          01 / Servicios
        </span>
        <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
          DESARROLLO WEB PARA TU NEGOCIO
        </h2>
        <p className="mt-6 font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
          Desde una landing page hasta una aplicación web a medida:
          desarrollamos el sitio que tu negocio necesita, con precios claros
          desde USD 250.
        </p>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={cardsRef}
        className="flex gap-8 overflow-x-auto pb-8 pr-12 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      {/* CTA Block */}
      <div
        ref={ctaRef}
        className="mt-16 border border-border/40 p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
      >
        <div>
          <h3 className="font-[family-name:var(--font-bebas)] text-2xl md:text-3xl tracking-tight">
            {"¿Necesitás algo específico para "}
            <span className="text-accent">tu negocio</span>
            {"?"}
          </h3>

          <p className="mt-2 font-mono text-sm text-muted-foreground leading-relaxed">
            Cada proyecto puede adaptarse a tus necesidades.
          </p>
          <p className="font-mono text-[10px] text-muted-foreground">
            Respondemos generalmente dentro de las próximas 24 horas.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          {/* Ver servicios */}
          <a
            href="/servicios"
            className="group inline-flex items-center justify-center gap-3 border border-border/40 px-6 py-3 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-accent hover:border-accent transition-all duration-200"
          >
            <ScrambleTextOnHover
              text="Ver todos los servicios"
              as="span"
              duration={0.6}
            />
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </a>

          {/* Form CTA */}
          <a
            href="#contact"
            onClick={() => trackEvent("cta_click", { location: "services", label: "solicitar_propuesta" })}
            className="group inline-flex items-center justify-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
          >
            <ScrambleTextOnHover
              text="Solicitar propuesta"
              as="span"
              duration={0.6}
            />
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </a>

          {/* WhatsApp CTA */}
          <a
            href={whatsappGeneralLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 border border-accent/40 px-6 py-3 font-mono text-xs uppercase tracking-widest text-accent hover:bg-accent hover:text-black transition-all duration-200"
          >
            Hablar por WhatsApp
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: {
    title: string;
    description: string;
    features: string[];
    price: string;
    whatsappMessage: string;
    href: string;
  };
  index: number;
}) {
  const whatsappLink = `https://wa.me/5491167470473?text=${encodeURIComponent(
    service.whatsappMessage,
  )}`;

  return (
    <article
      className={cn(
        "group relative flex-shrink-0 w-80 md:w-96",
        "transition-transform duration-500 ease-out",
        "hover:-translate-y-2",
      )}
    >
      <div className="relative bg-card border border-border/50 md:border-t md:border-l md:border-r-0 md:border-b-0 p-8 h-full flex flex-col">
        {/* Top edge effect */}
        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

        {/* Issue number */}
        <div className="flex items-baseline justify-between mb-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            No. {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-[family-name:var(--font-bebas)] text-3xl md:text-4xl tracking-tight mb-4 group-hover:text-accent transition-colors duration-300">
          {service.title}
        </h3>

        {/* Divider line */}
        <div className="w-12 h-px bg-accent/60 mb-6 group-hover:w-full transition-all duration-500" />

        {/* Description */}
        <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features list */}
        <ul className="flex-1 space-y-2 mb-8">
          {service.features.map((feature, i) => (
            <li
              key={i}
              className="font-mono text-sm text-foreground/70 flex items-start gap-2"
            >
              <span className="text-accent mt-0.5 shrink-0">{"/"}</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Price + WhatsApp CTA */}
        <div className="mt-auto pt-6 border-t border-border/30 flex flex-col gap-4">
          <span className="font-[family-name:var(--font-bebas)] text-2xl text-accent tracking-tight">
            {service.price}
          </span>

          <Link
            href={service.href}
            className="text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-200 underline underline-offset-2"
          >
            Ver {service.title.toLowerCase()} en detalle
          </Link>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center justify-center gap-2 border border-accent/40 px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-accent hover:bg-accent hover:text-black transition-all duration-200"
          >
            Consultar por WhatsApp
            <BitmapChevron className="transition-transform duration-300 group-hover/btn:rotate-45" />
          </a>
        </div>

        {/* Bottom right corner fold effect */}
        <div className="absolute bottom-0 right-0 w-6 h-6 overflow-hidden">
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-background rotate-45 translate-x-4 translate-y-4 border-t border-l border-border/30" />
        </div>
      </div>

      {/* Shadow/depth layer */}
      <div className="absolute inset-0 -z-10 translate-x-1 translate-y-1 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </article>
  );
}
