import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ServiceFaq, FaqSchema } from "@/components/service-faq";
import { RelatedLinks } from "@/components/related-links";

export const metadata: Metadata = {
  title: "Desarrollo de MVP y Productos SaaS",
  description:
    "Desarrollo de MVP y productos SaaS desde cero: de la idea a un producto digital funcional, con arquitectura pensada para iterar y crecer.",
  keywords: [
    "desarrollo de MVP",
    "desarrollo SaaS",
    "productos digitales",
    "validar una idea de negocio",
  ],
  alternates: {
    canonical: "/servicios/mvp",
  },
  openGraph: {
    title: "Desarrollo de MVP y Productos SaaS | Kodexa",
    description:
      "De la idea a un producto digital funcional, con arquitectura pensada para iterar y crecer.",
    url: "https://kodexa.ar/servicios/mvp",
    siteName: "Kodexa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Desarrollo de MVP y productos SaaS por Kodexa",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

const faqItems = [
  {
    question: "¿Qué es un MVP y cuándo conviene desarrollar uno?",
    answer:
      "Un MVP (producto mínimo viable) es la primera versión funcional de un producto, con lo justo y necesario para validar una idea de negocio con usuarios reales antes de invertir en construir todo el producto.",
  },
  {
    question: "¿Cuánto cuesta desarrollar un SaaS?",
    answer:
      "No hay un precio fijo: un SaaS involucra suscripciones, paneles de usuario y una arquitectura que tiene que sostenerse en el tiempo. Definimos el presupuesto según las funcionalidades que necesite la primera versión.",
  },
  {
    question: "¿Kodexa tiene experiencia desarrollando productos propios?",
    answer:
      "Sí. Nexo es un producto SaaS propio que estamos desarrollando internamente, con inteligencia artificial, integración con WhatsApp y sistema de suscripciones.",
  },
  {
    question: "¿Kodexa trabaja con empresas de Argentina?",
    answer:
      "Sí. Trabajamos con emprendedores y empresas de Argentina, y también de forma remota con clientes de otros países.",
  },
];

export default function MvpPage() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Kodexa", url: "https://kodexa.ar" },
          { name: "Servicios", url: "https://kodexa.ar/servicios" },
          { name: "MVP y SaaS", url: "https://kodexa.ar/servicios/mvp" },
        ]}
      />
      <FaqSchema items={faqItems} />

      <BreadcrumbNav
        items={[
          { name: "Kodexa", href: "/" },
          { name: "Servicios", href: "/servicios" },
          { name: "MVP y SaaS" },
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
          <h1 className="text-[40px] md:text-[78px] leading-[0.95] font-[family-name:var(--font-bebas)]">
            Desarrollo de MVP y Productos SaaS
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
            Convertimos una idea de negocio en un producto digital real,
            validable y con una base técnica sólida para seguir creciendo.
          </p>

          <div className="mt-10">
            <a
              href="https://wa.me/5491167470473?text=Hola%20Lautaro!%20Quiero%20desarrollar%20un%20MVP%20o%20producto%20SaaS.%20%C2%BFPodemos%20hablar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-black px-6 py-3 text-xs uppercase tracking-widest hover:scale-105 transition"
            >
              Consultar por mi idea
            </a>
          </div>
        </div>
      </div>

      {/* PARA QUIÉN */}
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-[family-name:var(--font-bebas)]">
            ¿Para quién es este servicio?
          </h2>
          <ul className="mt-6 space-y-3 text-gray-400">
            <li>→ Emprendedores con una idea de negocio digital</li>
            <li>→ Equipos que quieren validar un producto antes de escalarlo</li>
            <li>→ Negocios que quieren convertir un proceso interno en un producto SaaS</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-[family-name:var(--font-bebas)]">
            ¿Qué incluye?
          </h2>
          <ul className="mt-6 space-y-3 text-gray-400">
            <li>✔ De la idea a un producto funcional</li>
            <li>✔ Arquitectura preparada para iterar y crecer</li>
            <li>✔ Suscripciones, pagos y paneles de usuario</li>
            <li>✔ Alcance y presupuesto definidos a medida</li>
          </ul>
        </div>
      </div>

      {/* EVIDENCIA REAL */}
      <div className="mt-32 max-w-4xl mx-auto px-6 text-center border border-white/10 rounded-2xl p-10 bg-white/[0.02]">
        <p className="text-xs text-accent uppercase tracking-widest">Producto propio</p>
        <p className="mt-4 text-2xl md:text-3xl font-[family-name:var(--font-bebas)]">
          Nexo: un SaaS que estamos construyendo nosotros mismos
        </p>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Nexo es un asistente con inteligencia artificial para negocios, hoy
          en desarrollo. Es la prueba de que sabemos construir un producto
          SaaS de punta a punta, no solo sitios web.
        </p>
        <a
          href="/proyectos/nexo"
          className="mt-6 inline-block text-accent underline underline-offset-2 text-sm"
        >
          Ver el caso de estudio de Nexo
        </a>
      </div>

      {/* PRICING */}
      <div className="mt-32 max-w-3xl mx-auto px-6 text-center border border-accent/40 rounded-2xl p-10 md:p-14 bg-gradient-to-b from-accent/10 to-transparent">
        <p className="text-xs text-accent uppercase tracking-widest">Precio</p>
        <p className="mt-4 text-4xl font-[family-name:var(--font-bebas)]">
          Presupuesto a medida
        </p>
        <p className="mt-3 text-gray-400">
          Definimos el alcance de la primera versión y el presupuesto según lo que necesite tu producto.
        </p>
        <a
          href="https://wa.me/5491167470473?text=Hola%20Lautaro!%20Quiero%20desarrollar%20un%20MVP%20o%20producto%20SaaS.%20%C2%BFPodemos%20hablar%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-accent text-black px-6 py-3 text-xs uppercase tracking-widest hover:scale-105 transition"
        >
          Consultar presupuesto
        </a>
      </div>

      <ServiceFaq items={faqItems} />

      <RelatedLinks
        items={[
          {
            label: "Plataformas y Aplicaciones Web",
            description: "La base técnica que sostiene a la mayoría de los MVPs.",
            href: "/servicios/plataformas-digitales",
          },
          {
            label: "Software y Sistemas a Medida",
            description: "Si tu idea nace para resolver un proceso interno.",
            href: "/servicios/software-a-medida",
          },
          {
            label: "Caso de estudio: Nexo",
            description: "Nuestro propio producto SaaS, en desarrollo.",
            href: "/proyectos/nexo",
          },
        ]}
      />

      {/* CTA FINAL */}
      <div className="mt-40 pb-24 text-center px-6">
        <h2 className="text-4xl font-semibold">
          ¿Tenés una idea que querés convertir en producto?
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
