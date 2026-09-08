"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const serviceTeasers = [
  {
    title: "Desarrollo Web",
    description:
      "Sitios institucionales y landing pages diseñados para convertir visitas en clientes.",
    bullets: ["Estructura orientada a conversión", "SEO técnico incluido"],
    href: "/servicios/desarrollo-web",
    anchorId: "landing-pages",
  },
  {
    title: "Software y Sistemas a Medida",
    description:
      "Sistemas adaptados a tus procesos para centralizar información y automatizar tareas.",
    bullets: ["Panel de gestión (ABM)", "Automatización de procesos"],
    href: "/servicios/software-a-medida",
    anchorId: "sistemas",
  },
  {
    title: "Plataformas y Aplicaciones Web",
    description:
      "Aplicaciones web con usuarios, roles y lógica propia para negocios que necesitan más que un sitio.",
    bullets: ["Autenticación y roles", "Arquitectura multiusuario"],
    href: "/servicios/plataformas-digitales",
    anchorId: "plataformas",
  },
  {
    title: "MVP y Productos SaaS",
    description:
      "Desarrollo de tu producto digital desde cero, para validar una idea y lanzarla al mercado.",
    bullets: ["De la idea a un producto funcional", "Suscripciones y pagos"],
    href: "/servicios/mvp",
    anchorId: "mvp",
  },
];

export default function ServicesPage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <div className="relative px-6 md:px-28 min-h-screen flex items-center">
        <div className="absolute right-0 w-[600px] h-[600px] bg-accent/20 blur-[140px]" />

        <div className="max-w-[1100px]">
          <p className="text-xs text-gray-400 mb-6">01 / Servicios</p>

          <h1 className="text-[52px] md:text-[110px] leading-[0.9] font-[family-name:var(--font-bebas)]">
            Tu negocio necesita
            <br />
            algo más que una web.
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-[600px]">
            Creamos soluciones digitales pensadas para generar resultados
            reales: atraer clientes, mejorar procesos y escalar tu negocio con
            una base sólida.
          </p>

          <p className="mt-4 text-sm text-gray-500 max-w-[500px]">
            Desde landings que convierten hasta plataformas que crecen con vos.
          </p>
        </div>
      </div>

      {/* SERVICIOS DETALLE */}
      <div className="mt-32 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-bebas)] reveal">
          Nuestros servicios
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {serviceTeasers.map((service) => (
            <div
              key={service.href}
              id={service.anchorId}
              className="reveal scroll-mt-24 border border-white/10 rounded-xl p-8 bg-white/[0.02] backdrop-blur-sm hover:border-accent/40 transition"
            >
              <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-bebas)]">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-400">{service.description}</p>

              <ul className="mt-6 space-y-2 text-sm text-gray-500">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>✔ {bullet}</li>
                ))}
              </ul>

              <Link
                href={service.href}
                className="mt-8 inline-flex items-center gap-2 text-accent underline underline-offset-2 text-sm"
              >
                Ver {service.title.toLowerCase()} en detalle
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* PRICING */}
      <div id="pricing" className="mt-40 max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold reveal">
            Soluciones pensadas para crecer
          </h2>

          <p className="mt-6 text-gray-500 reveal">
            Cada servicio está diseñado para resolver una etapa distinta del
            negocio. Podés empezar simple y escalar a medida que creces.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              number: "01",
              title: "Desarrollo Web",
              desc: "Sitios y landing pages que convierten visitas en clientes.",
              features: [
                "Estructura enfocada en conversión",
                "SEO técnico incluido",
                "Deploy listo",
              ],
              price: "Desde USD 250",
              msg: "Hola! Me interesa desarrollar un sitio web",
              href: "/servicios/desarrollo-web",
            },
            {
              number: "02",
              title: "Software a Medida",
              desc: "Sistemas y automatización adaptados a tu operación.",
              features: [
                "Panel de gestión (ABM)",
                "Automatización de procesos",
                "Integraciones vía API",
              ],
              price: "Desde USD 900",
              msg: "Hola! Me interesa un sistema a medida",
              href: "/servicios/software-a-medida",
            },
            {
              number: "03",
              title: "Plataformas Digitales",
              desc: "Aplicaciones web con usuarios, roles y lógica propia.",
              features: [
                "Autenticación y roles",
                "Arquitectura multiusuario",
                "Preparado para escalar",
              ],
              price: "Presupuesto a medida",
              msg: "Hola! Estoy evaluando desarrollar una plataforma o aplicación web",
              href: "/servicios/plataformas-digitales",
            },
            {
              number: "04",
              title: "MVP y SaaS",
              desc: "De la idea a un producto digital funcional.",
              features: [
                "Producto validable",
                "Suscripciones y pagos",
                "Arquitectura para iterar",
              ],
              price: "Presupuesto a medida",
              msg: "Hola! Quiero desarrollar un MVP o producto SaaS",
              href: "/servicios/mvp",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative border border-white/10 rounded-xl p-8
        bg-gradient-to-b from-white/[0.04] to-white/[0.01]
        backdrop-blur-sm
        hover:border-accent/40
        hover:shadow-[0_0_40px_rgba(255,115,0,0.15)]
        transition-all duration-300"
            >
              {/* NUM */}
              <span className="text-[10px] font-mono tracking-[0.3em] text-muted-foreground">
                NO. {item.number}
              </span>

              {/* TITLE */}
              <h3 className="mt-6 font-[family-name:var(--font-bebas)] text-2xl tracking-tight group-hover:text-accent transition">
                {item.title}
              </h3>

              {/* LINE */}
              <div className="w-12 h-px bg-accent/60 mt-4 mb-6 group-hover:w-full transition-all duration-500" />

              {/* DESC */}
              <p className="text-sm text-gray-400 mb-6">{item.desc}</p>

              {/* FEATURES */}
              <ul className="space-y-2 text-sm text-gray-500 mb-8">
                {item.features.map((f, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-accent">/</span> {f}
                  </li>
                ))}
              </ul>

              {/* PRICE */}
              <p className="font-[family-name:var(--font-bebas)] text-xl text-accent mb-6">
                {item.price}
              </p>

              {/* CTA */}
              <div className="space-y-3">
                <Link
                  href={item.href}
                  className="block text-center border border-white/20 px-4 py-3 text-xs uppercase tracking-widest text-white hover:border-accent hover:text-accent transition w-full"
                >
                  Ver detalle
                </Link>
                <a
                  href={`https://wa.me/5491167470473?text=${encodeURIComponent(item.msg)}`}
                  target="_blank"
                  className="inline-flex justify-center items-center border border-accent/40 px-4 py-3 text-xs uppercase tracking-widest text-accent hover:bg-accent hover:text-black transition w-full"
                >
                  Consultar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESARROLLO A MEDIDA */}
      <div id="a-medida" className="mt-40 py-32 px-6 relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-[family-name:var(--font-bebas)] tracking-tight">
            ¿Necesitás algo más grande?
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Cuando tu negocio necesita más que una web, desarrollamos sistemas
            y plataformas digitales adaptadas a tu operación.
          </p>

          {/* BLOQUES */}
          <div className="mt-16 grid md:grid-cols-3 gap-6 text-left">
            <Link
              href="/servicios/software-a-medida"
              className="block border border-white/10 rounded-xl p-6 bg-white/[0.02] backdrop-blur-sm hover:border-accent/40 transition"
            >
              <h4 className="font-semibold text-lg text-white">Software a Medida</h4>
              <p className="mt-2 text-sm text-gray-500">
                Sistemas para gestionar clientes, turnos, ventas o procesos internos.
              </p>
            </Link>
            <Link
              href="/servicios/plataformas-digitales"
              className="block border border-white/10 rounded-xl p-6 bg-white/[0.02] backdrop-blur-sm hover:border-accent/40 transition"
            >
              <h4 className="font-semibold text-lg text-white">Plataformas Digitales</h4>
              <p className="mt-2 text-sm text-gray-500">
                Aplicaciones web con usuarios, roles y arquitectura propia.
              </p>
            </Link>
            <Link
              href="/servicios/mvp"
              className="block border border-white/10 rounded-xl p-6 bg-white/[0.02] backdrop-blur-sm hover:border-accent/40 transition"
            >
              <h4 className="font-semibold text-lg text-white">MVP y Productos SaaS</h4>
              <p className="mt-2 text-sm text-gray-500">
                De una idea de negocio a un producto digital funcional.
              </p>
            </Link>
          </div>

          {/* CARD PREMIUM */}
          <div className="mt-16 max-w-xl mx-auto border border-accent/40 rounded-xl p-8 bg-gradient-to-b from-accent/10 to-transparent">
            <p className="text-xs text-accent tracking-widest uppercase">
              Solución avanzada
            </p>

            <h3 className="mt-4 font-[family-name:var(--font-bebas)] text-3xl">
              Sistemas web a medida
            </h3>

            <p className="mt-4 text-gray-400 text-sm">
              Desarrollo completo de plataformas adaptadas a tu negocio:
              dashboards, CRM, sistemas de gestión o herramientas internas.
            </p>

            <p className="mt-6 text-2xl font-[family-name:var(--font-bebas)] text-accent">
              Desde USD 1800+
            </p>

            <a
              href="https://wa.me/5491167470473"
              target="_blank"
              className="mt-6 inline-block w-full text-center bg-accent text-black px-6 py-3 text-xs uppercase tracking-widest hover:scale-[1.02] transition"
            >
              Consultar proyecto
            </a>
          </div>

          <p className="mt-12 text-gray-300 max-w-2xl mx-auto">
            No se trata solo de tener presencia digital. Se trata de construir
            herramientas que acompañen el crecimiento real de tu empresa.
          </p>
        </div>
      </div>

      {/* PROCESO */}
      <div className="mt-40 max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold reveal">
            Cómo trabajamos
          </h2>

          <p className="mt-6 text-gray-500 reveal">
            Un proceso claro, enfocado en generar impacto real desde el inicio.
          </p>
        </div>

        {/* STEPS */}
        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {[
            {
              step: "01",
              title: "Entendemos tu negocio",
              desc: "Analizamos tu situación actual, cómo funciona tu producto y qué está frenando tu crecimiento.",
            },
            {
              step: "02",
              title: "Detectamos oportunidades",
              desc: "Identificamos mejoras concretas en conversión, performance o procesos internos.",
            },
            {
              step: "03",
              title: "Diseñamos la solución",
              desc: "Definimos una estructura clara y escalable alineada a tus objetivos.",
            },
            {
              step: "04",
              title: "Desarrollamos y optimizamos",
              desc: "Ejecutamos, iteramos y mejoramos constantemente para generar resultados reales.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative border border-white/10 rounded-xl p-6 md:p-8 
        bg-white/[0.02] backdrop-blur-sm
        hover:border-accent/40
        hover:bg-white/[0.04]
        transition-all duration-300"
            >
              {/* NUMERO */}
              <span className="text-3xl font-[family-name:var(--font-bebas)] text-accent">
                {item.step}
              </span>

              {/* CONTENIDO */}
              <h4 className="mt-4 text-lg font-semibold">{item.title}</h4>

              <p className="mt-2 text-sm text-gray-500 group-hover:text-gray-300 transition">
                {item.desc}
              </p>

              {/* LINEA HOVER */}
              <div className="mt-6 h-[1px] w-8 bg-accent/40 group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* FRASE FINAL */}
        <div className="mt-16 text-center max-w-xl mx-auto reveal">
          <p className="text-gray-400">
            No es solo desarrollo. Es un proceso pensado para que tu producto
            avance sin fricciones.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-40 pb-24 text-center px-6">
        <h3 className="text-4xl font-semibold reveal">
          Tu producto puede crecer más
        </h3>

        <p className="mt-6 text-gray-500">
          La diferencia está en cómo está construido.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5491167470473"
            target="_blank"
            className="inline-block bg-accent text-black px-8 py-4 uppercase text-sm"
          >
            Empezar proyecto
          </a>

          <Link
            href="/proyectos"
            className="inline-block border border-white/20 px-8 py-4 uppercase text-sm hover:border-accent hover:text-accent transition"
          >
            Ver proyectos de Kodexa
          </Link>
        </div>
      </div>
    </section>
  );
}
