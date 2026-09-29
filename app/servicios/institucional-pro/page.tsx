import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ServiceFaq, FaqSchema } from "@/components/service-faq";
import { RelatedLinks } from "@/components/related-links";

export const metadata: Metadata = {
  title: "Institucional Pro",
  description:
    "Sitio institucional con contenido administrable, blog y secciones dinámicas. Desde USD 900. Una web preparada para crecer con tu negocio.",
  keywords: [
    "sitio institucional con blog",
    "web con contenido administrable",
    "CMS para empresa",
    "desarrollo web para empresa",
  ],
  alternates: {
    canonical: "/servicios/institucional-pro",
  },
  openGraph: {
    title: "Institucional Pro | Kodexa",
    description:
      "Una web institucional más completa y dinámica, pensada para negocios que necesitan administrar y actualizar su contenido.",
    url: "https://kodexa.ar/servicios/institucional-pro",
    siteName: "Kodexa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Institucional Pro, desarrollado por Kodexa",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

const faqItems = [
  {
    question: "¿Qué diferencia hay entre Sitio Institucional e Institucional Pro?",
    answer:
      "El sitio institucional te da una presencia completa de tu empresa. Institucional Pro suma la posibilidad de administrar y actualizar el contenido vos mismo, un blog y secciones dinámicas, para negocios que publican novedades o contenido con frecuencia.",
  },
  {
    question: "¿Cuánto cuesta Institucional Pro?",
    answer:
      "Parte desde USD 900. El precio final depende de la cantidad de secciones dinámicas, el alcance del panel de administración y las integraciones que necesites.",
  },
  {
    question: "¿Cómo administro el contenido?",
    answer:
      "Con un panel de administración pensado para que puedas actualizar textos, imágenes y publicar en el blog sin depender de nosotros para cada cambio.",
  },
  {
    question: "¿La arquitectura está preparada para crecer?",
    answer:
      "Sí. Institucional Pro se construye con una base pensada para sumar secciones o funcionalidades más adelante, sin tener que rehacer el sitio.",
  },
];

export default function InstitucionalProPage() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Kodexa", url: "https://kodexa.ar" },
          { name: "Servicios", url: "https://kodexa.ar/servicios" },
          {
            name: "Institucional Pro",
            url: "https://kodexa.ar/servicios/institucional-pro",
          },
        ]}
      />
      <FaqSchema items={faqItems} />

      <BreadcrumbNav
        items={[
          { name: "Kodexa", href: "/" },
          { name: "Servicios", href: "/servicios" },
          { name: "Institucional Pro" },
        ]}
      />

      {/* HERO */}
      <div className="relative page-gutter pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-accent/20 blur-[140px] pointer-events-none" />

        <div className="absolute bottom-8 md:bottom-12 page-gutter-right z-10">
          <div className="border border-white/15 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-gray-500">
            Digital Product Studio
          </div>
        </div>

        <div className="max-w-4xl relative z-10">
          <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-accent border border-accent/40 px-3 py-1">
            Sitio Institucional Pro
          </span>

          <h1 className="mt-6 text-[48px] md:text-[90px] leading-[0.95] font-[family-name:var(--font-bebas)]">
            Institucional Pro
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
            Una web institucional más completa y dinámica, pensada para
            negocios que necesitan administrar y actualizar su contenido.
          </p>

          <div className="mt-10">
            <a
              href="https://wa.me/5491167470473?text=Hola%20Kodexa!%20Me%20interesa%20un%20sitio%20institucional%20Pro%2C%20con%20contenido%20administrable.%20%C2%BFPodemos%20hablar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-black px-6 py-3 text-xs uppercase tracking-widest hover:scale-105 transition"
            >
              Consultar por mi proyecto
            </a>
          </div>
        </div>
      </div>

      {/* QUÉ INCLUYE / PARA QUIÉN */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-[family-name:var(--font-bebas)]">
            ¿Qué incluye?
          </h2>
          <ul className="mt-8 space-y-3 text-sm text-gray-400">
            <li>✔ Todo lo incluido en el sitio institucional</li>
            <li>✔ Contenido administrable</li>
            <li>✔ Blog</li>
            <li>✔ Secciones dinámicas</li>
            <li>✔ Gestión de contenido</li>
            <li>✔ Arquitectura preparada para crecer</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-[family-name:var(--font-bebas)]">
            ¿Para quién es este servicio?
          </h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            Para negocios que ya necesitan más que una presencia estática:
            publicar novedades, actualizar contenido con frecuencia o sumar
            secciones sin depender de un desarrollador para cada cambio.
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Si tu proyecto necesita usuarios con cuenta propia, paneles o
            lógica de negocio más allá del contenido, te conviene mirar{" "}
            <a
              href="/servicios/plataformas-digitales"
              className="text-accent underline underline-offset-2"
            >
              aplicaciones web
            </a>
            .
          </p>
        </div>
      </div>

      {/* PRICING */}
      <div className="mt-32 max-w-3xl mx-auto px-6 text-center border border-accent/40 rounded-2xl p-10 md:p-14 bg-gradient-to-b from-accent/10 to-transparent">
        <p className="text-xs text-accent uppercase tracking-widest">Precio</p>
        <p className="mt-4 text-5xl font-[family-name:var(--font-bebas)]">
          Desde USD <span className="text-accent">900</span>
        </p>
        <p className="mt-3 text-gray-400">
          El precio final depende del alcance del proyecto.
        </p>
        <a
          href="https://wa.me/5491167470473?text=Hola%20Kodexa!%20Me%20interesa%20un%20sitio%20institucional%20Pro%2C%20con%20contenido%20administrable.%20%C2%BFPodemos%20hablar%3F"
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
            label: "Sitio Institucional",
            description: "Si no necesitás administrar el contenido vos mismo.",
            href: "/servicios/institucional",
          },
          {
            label: "Aplicaciones Web",
            description: "Si tu proyecto necesita usuarios, roles y lógica propia.",
            href: "/servicios/plataformas-digitales",
          },
          {
            label: "Software y Sistemas a Medida",
            description: "Si tu idea nace para resolver un proceso interno.",
            href: "/servicios/software-a-medida",
          },
        ]}
      />

      {/* CTA FINAL */}
      <div className="mt-40 pb-24 text-center px-6">
        <h2 className="text-4xl font-semibold">
          ¿Listo para tener el sitio que tu negocio necesita?
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
