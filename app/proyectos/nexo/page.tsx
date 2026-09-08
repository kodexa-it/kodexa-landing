import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { RelatedLinks } from "@/components/related-links";

export const metadata: Metadata = {
  title: "Nexo — Caso de Estudio",
  description:
    "Nexo es un producto SaaS propio de Kodexa: un asistente con inteligencia artificial que ayuda a negocios a atender clientes, gestionar reservas y centralizar su información.",
  keywords: [
    "Nexo",
    "desarrollo SaaS",
    "asistente con inteligencia artificial",
    "plataforma web",
  ],
  alternates: {
    canonical: "/proyectos/nexo",
  },
  openGraph: {
    title: "Nexo — Caso de Estudio | Kodexa",
    description:
      "Un producto SaaS propio de Kodexa: asistente con inteligencia artificial para negocios.",
    url: "https://kodexa.ar/proyectos/nexo",
    siteName: "Kodexa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexo, producto SaaS de Kodexa",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function NexoCaseStudyPage() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Kodexa", url: "https://kodexa.ar" },
          { name: "Proyectos", url: "https://kodexa.ar/proyectos" },
          { name: "Nexo", url: "https://kodexa.ar/proyectos/nexo" },
        ]}
      />

      <BreadcrumbNav
        items={[
          { name: "Kodexa", href: "/" },
          { name: "Proyectos", href: "/proyectos" },
          { name: "Nexo" },
        ]}
      />

      {/* HERO */}
      <div className="relative px-6 md:px-28 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-accent/20 blur-[140px] pointer-events-none" />

        <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-10">
          <div className="border border-white/15 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-gray-500">
            Digital Product Studio
          </div>
        </div>

        <div className="max-w-4xl relative z-10">
          <span className="inline-block text-[10px] uppercase tracking-widest text-accent border border-accent/40 px-3 py-1">
            Producto propio de Kodexa · En desarrollo
          </span>

          <h1 className="mt-6 text-[40px] md:text-[72px] leading-[0.95] font-[family-name:var(--font-bebas)]">
            Nexo: el asistente con IA que estamos construyendo para negocios
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
            Nexo aprende cómo funciona un negocio y ayuda a atender clientes,
            responder consultas, gestionar reservas y centralizar su
            información en un solo lugar.
          </p>
        </div>
      </div>

      {/* QUÉ PROBLEMA RESUELVE */}
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-[family-name:var(--font-bebas)]">
            ¿Qué problema resuelve?
          </h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            Muchos negocios pierden tiempo respondiendo las mismas preguntas,
            gestionando reservas manualmente y con su información repartida
            entre WhatsApp, planillas y la memoria de alguien del equipo.
            Nexo centraliza esa operación en un solo asistente.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-[family-name:var(--font-bebas)]">
            ¿Qué construyó Kodexa?
          </h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            Un producto completo, de punta a punta: el asistente conversacional,
            la integración con WhatsApp, el sistema de reservas, el panel de
            administración, el onboarding y el sistema de suscripciones y pagos.
          </p>
        </div>
      </div>

      {/* FUNCIONALIDADES */}
      <div className="mt-32 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-[family-name:var(--font-bebas)] text-center">
          Funcionalidades
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 gap-6 text-sm text-gray-400">
          <div className="border border-white/10 rounded-xl p-6">
            <p className="font-semibold text-white">Asistente conversacional con IA</p>
            <p className="mt-2">Entrenado con la información propia de cada negocio.</p>
          </div>
          <div className="border border-white/10 rounded-xl p-6">
            <p className="font-semibold text-white">Integración con WhatsApp</p>
            <p className="mt-2">El canal donde ya están los clientes de cada negocio.</p>
          </div>
          <div className="border border-white/10 rounded-xl p-6">
            <p className="font-semibold text-white">Gestión de reservas y turnos</p>
            <p className="mt-2">Sin coordinar manualmente cada consulta.</p>
          </div>
          <div className="border border-white/10 rounded-xl p-6">
            <p className="font-semibold text-white">Suscripciones y panel de administración</p>
            <p className="mt-2">Planes de pago y un panel para gestionar el negocio.</p>
          </div>
        </div>
      </div>

      {/* TECNOLOGÍA */}
      <div className="mt-32 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-[family-name:var(--font-bebas)]">
          Arquitectura y tecnología
        </h2>
        <p className="mt-5 text-gray-400 leading-relaxed">
          Construido sobre Next.js y PostgreSQL, con modelos de lenguaje para
          el asistente conversacional y una integración directa con WhatsApp.
          La arquitectura está pensada para sostener suscripciones, múltiples
          negocios y crecimiento a largo plazo.
        </p>
      </div>

      {/* ESTADO ACTUAL */}
      <div className="mt-24 max-w-3xl mx-auto px-6 text-center border border-accent/40 rounded-2xl p-10 bg-gradient-to-b from-accent/10 to-transparent">
        <p className="text-xs text-accent uppercase tracking-widest">
          Estado actual
        </p>
        <p className="mt-4 text-gray-300">
          Nexo está en desarrollo activo y todavía no tiene un lanzamiento
          público. Lo mostramos acá como evidencia real del tipo de producto
          que Kodexa puede construir: no solo sitios web, sino plataformas
          completas con inteligencia artificial, suscripciones y arquitectura
          propia.
        </p>
      </div>

      <RelatedLinks
        title="Si tenés un proyecto similar"
        items={[
          {
            label: "MVP y Productos SaaS",
            description: "El servicio con el que construimos productos como Nexo.",
            href: "/servicios/mvp",
          },
          {
            label: "Plataformas y Aplicaciones Web",
            description: "La base técnica de un producto con usuarios y roles.",
            href: "/servicios/plataformas-digitales",
          },
          {
            label: "Software y Sistemas a Medida",
            description: "Si tu idea nace para resolver un proceso interno.",
            href: "/servicios/software-a-medida",
          },
        ]}
      />

      {/* CTA */}
      <div className="mt-40 pb-24 text-center px-6">
        <h2 className="text-4xl font-semibold">
          ¿Tenés una idea que se parece a esto?
        </h2>
        <a
          href="/#contact"
          className="mt-10 inline-block bg-accent text-black px-8 py-4 uppercase text-sm"
        >
          Iniciar proyecto
        </a>
      </div>
    </section>
  );
}
