"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesSection from "@/components/equipo/services/services";

gsap.registerPlugin(ScrollTrigger);

export default function TeamPage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // reveal
      gsap.utils.toArray(".reveal").forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 80, opacity: 0 },
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

      // stagger
      gsap.utils.toArray(".stagger").forEach((el: any) => {
        gsap.fromTo(
          el.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          },
        );
      });

      // horizontal scroll section
      const horizontal = document.querySelector(".horizontal");
      if (horizontal) {
        gsap.to(horizontal, {
          x: "-50%",
          ease: "none",
          scrollTrigger: {
            trigger: ".horizontal-section",
            start: "top top",
            end: "+=2000",
            scrub: true,
            pin: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white text-black overflow-hidden">
      {/* HERO */}
      <div className="relative bg-black text-white px-6 md:px-28 min-h-screen flex items-center">
        <div className="absolute right-0 w-[600px] h-[600px] bg-orange-500/20 blur-[140px]" />

        <div className="max-w-[1100px]">
          <p className="text-xs text-gray-400 mb-6">
            ✔ Respuesta en 24h · Trabajo continuo · Sin contratos
          </p>

          <h1 className="text-[52px] md:text-[110px] leading-[0.9] font-[family-name:var(--font-bebas)]">
            Tu web o sistema
            <br />
            no crece solo.
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-[600px]">
            Si no hay alguien mejorándolo constantemente, se estanca, pierde
            oportunidades y termina quedando atrás.
          </p>

          <div className="mt-10 flex gap-4">
            <a className="bg-orange-500 text-black px-6 py-3 text-xs uppercase hover:scale-105 transition">
              Empezar ahora
            </a>

            <a className="border border-white/30 px-6 py-3 text-xs uppercase hover:bg-white hover:text-black transition">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* PROBLEMA */}
      <div className="mt-32 max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-semibold reveal">
          Si hoy tu producto depende de vos, hay un problema
        </h2>

        <div className="mt-12 space-y-6 text-lg text-gray-600 stagger">
          <p>→ Tenés que resolver todo vos</p>
          <p>→ Dependés de freelancers que desaparecen</p>
          <p>→ Todo tarda más de lo que debería</p>
          <p>→ Tu producto no evoluciona</p>
        </div>
      </div>

      {/* CAMBIO */}
      <div className="mt-40 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-6xl font-[family-name:var(--font-bebas)] reveal">
          No necesitás otro freelancer
        </h2>

        <p className="mt-6 text-xl text-gray-500 reveal">
          Necesitás un equipo que piense en tu producto todos los días.
        </p>
      </div>

      {/* CARDS HORIZONTALES */}
      <ServicesSection />

      {/* EXPERIENCIA */}
      <div className="mt-40 bg-black text-white py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-semibold reveal">
              No aprendemos con tu producto
            </h2>

            <p className="mt-6 text-gray-400 text-lg reveal">
              Ya vimos qué pasa cuando un sistema crece sin estructura, cuando
              aparecen bugs en producción o cuando las decisiones técnicas
              frenan el negocio.
            </p>
          </div>

          {/* GRID DE EXPERIENCIA */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 stagger">
            {[
              {
                title: "Problemas reales",
                desc: "Errores en producción, caídas, código difícil de mantener. Sabemos cómo se ven y cómo resolverlos.",
              },
              {
                title: "Decisiones críticas",
                desc: "Elegir mal una arquitectura o stack puede frenar todo. Nosotros evitamos eso desde el inicio.",
              },
              {
                title: "Escalabilidad",
                desc: "Cuando un producto crece, lo técnico deja de ser secundario. Ahí es donde entramos fuerte.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-xl p-6 hover:bg-white hover:text-black transition"
              >
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="mt-3 text-sm text-gray-400 group-hover:text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* FRASE FINAL */}
          <div className="mt-16 text-center max-w-xl mx-auto reveal">
            <p className="text-gray-400">
              Nuestro trabajo no es solo que funcione. Es que crezca sin
              romperse.
            </p>
          </div>
        </div>
      </div>

      {/* PRECIO */}
      <div className="mt-40 max-w-6xl mx-auto px-6">
        {/* CONTEXTO */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold">
            No es un gasto, es crecimiento
          </h2>

          <p className="mt-6 text-gray-500">
            Mientras otros pagan freelancers por tareas, vos tenés un equipo que
            mejora tu producto todos los días.
          </p>
        </div>

        {/* PRICING CARD */}
        <div className="mt-16 border rounded-2xl p-10 md:p-14 bg-gradient-to-b from-white to-gray-50 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            {/* PRECIO */}
            <div>
              <p className="text-sm text-gray-400">Planes desde</p>

              <h3 className="text-6xl font-[family-name:var(--font-bebas)]">
                USD <span className="text-orange-500">300</span>
              </h3>

              <p className="text-gray-500 mt-2">por mes</p>
            </div>

            {/* QUE INCLUYE */}
            <div className="space-y-3 text-sm text-gray-600">
              <p>✔ Equipo técnico dedicado</p>
              <p>✔ Desarrollo y mejoras continuas</p>
              <p>✔ Soporte y resolución de bugs</p>
              <p>✔ Decisiones técnicas incluidas</p>
            </div>
          </div>

          {/* FRASE CLAVE */}
          <div className="mt-10 border-t pt-6 text-center text-gray-600">
            No pagás tareas. Pagás porque tu producto avance.
          </div>
        </div>
      </div>

      {/* PASOS */}
      <div className="mt-40 max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold reveal">
            Cómo empezamos
          </h2>

          <p className="mt-6 text-gray-500 reveal">
            Un proceso simple, pero pensado para generar impacto desde el primer
            mes.
          </p>
        </div>

        {/* STEPS */}
        <div className="mt-16 space-y-6 stagger">
          {[
            {
              step: "01",
              title: "Entendemos tu producto",
              desc: "Analizamos cómo funciona hoy, dónde están los problemas y qué está frenando el crecimiento.",
            },
            {
              step: "02",
              title: "Detectamos oportunidades",
              desc: "Identificamos mejoras concretas que pueden impactar en performance, UX o negocio.",
            },
            {
              step: "03",
              title: "Definimos prioridades",
              desc: "Armamos un enfoque claro para no perder tiempo en cosas que no mueven la aguja.",
            },
            {
              step: "04",
              title: "Ejecutamos y mejoramos",
              desc: "Nos convertimos en tu equipo técnico y empezamos a trabajar de forma continua.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-6 hover:bg-black hover:text-white transition group"
            >
              {/* NUMERO */}
              <span className="text-3xl font-bold text-orange-500">
                {item.step}
              </span>

              {/* CONTENIDO */}
              <div>
                <h4 className="text-lg font-semibold">{item.title}</h4>

                <p className="mt-2 text-sm text-gray-500 group-hover:text-gray-300 max-w-xl">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CIERRE */}
        <div className="mt-16 text-center max-w-xl mx-auto reveal">
          <p className="text-gray-500">
            En pocos días ya tenés claridad. En semanas, empezás a ver mejoras
            reales.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-40 px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* TITULO */}
          <h3 className="text-4xl md:text-5xl font-semibold reveal">
            Dejá de ser el cuello de botella
          </h3>

          {/* SUBTEXTO */}
          <p className="mt-6 text-gray-500 text-lg max-w-xl mx-auto reveal">
            Sumá un equipo técnico que se encargue de tu producto y empiece a
            hacerlo crecer en serio.
          </p>

          {/* BOTONES */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 reveal">
            {/* WHATSAPP */}
            <a
              href="https://wa.me/5491167470473"
              target="_blank"
              className="bg-orange-500 text-black px-8 py-4 text-sm uppercase hover:scale-105 transition font-medium"
            >
              Hablar por WhatsApp
            </a>

            {/* CONTACTO */}
            <a
              href="/#contact"
              className="border border-black px-8 py-4 text-sm uppercase hover:bg-black hover:text-white transition"
            >
              Ver contacto
            </a>
          </div>

          {/* MICRO COPY */}
          <p className="mt-6 text-xs text-gray-400 reveal">
            Respuesta en menos de 24h · Sin compromiso inicial
          </p>
        </div>
      </div>
    </section>
  );
}
