import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ServiceFaq, FaqSchema } from "@/components/service-faq";
import { RelatedLinks } from "@/components/related-links";

export const metadata: Metadata = {
  title: "Sitio Institucional",
  description:
    "Sitio institucional a medida para tu empresa: múltiples páginas, diseño responsive y SEO. Desde USD 500. Conocé el alcance y los precios.",
  keywords: [
    "sitio institucional",
    "página institucional",
    "desarrollo web para empresa",
    "sitio web empresarial",
  ],
  alternates: {
    canonical: "/servicios/institucional",
  },
  openGraph: {
    title: "Sitio Institucional | Kodexa",
    description:
      "Un sitio completo para presentar tu empresa, servicios, información y medios de contacto.",
    url: "https://kodexa.ar/servicios/institucional",
    siteName: "Kodexa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sitio institucional desarrollado por Kodexa",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

const faqItems = [
  {
    question: "¿Qué diferencia hay entre una landing page y un sitio institucional?",
    answer:
      "Una landing page tiene un único objetivo y una sola página, pensada para convertir. Un sitio institucional presenta tu empresa completa: quiénes son, qué servicios ofrecen, información de contacto y todo lo que un cliente necesita para conocerte, en varias páginas.",
  },
  {
    question: "¿Cuánto cuesta un sitio institucional?",
    answer:
      "Parte desde USD 500. El precio final depende de la cantidad de páginas, el diseño y las integraciones que necesites.",
  },
  {
    question: "¿Puedo actualizar el contenido yo mismo?",
    answer:
      "El sitio institucional se entrega con el contenido que definimos juntos al construirlo. Si necesitás poder editar textos, sumar un blog o actualizar contenido vos mismo con frecuencia, te conviene Institucional Pro.",
  },
  {
    question: "¿Incluye SEO?",
    answer:
      "Sí, se desarrolla con buenas prácticas de SEO técnico desde el inicio: estructura semántica, velocidad de carga y metadatos por página.",
  },
];

export default function SitioInstitucionalPage() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Kodexa", url: "https://kodexa.ar" },
          { name: "Servicios", url: "https://kodexa.ar/servicios" },
          {
            name: "Sitio Institucional",
            url: "https://kodexa.ar/servicios/institucional",
          },
        ]}
      />
      <FaqSchema items={faqItems} />

      <BreadcrumbNav
        items={[
          { name: "Kodexa", href: "/" },
          { name: "Servicios", href: "/servicios" },
          { name: "Sitio Institucional" },
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
          <h1 className="text-[48px] md:text-[90px] leading-[0.95] font-[family-name:var(--font-bebas)]">
            Sitio Institucional
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
            Un sitio completo para presentar tu empresa, servicios,
            información y medios de contacto.
          </p>

          <div className="mt-10">
            <a
              href="https://wa.me/5491167470473?text=Hola%20Kodexa!%20Me%20interesa%20un%20sitio%20institucional%20para%20mi%20empresa.%20%C2%BFPodemos%20hablar%3F"
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
            <li>✔ Múltiples páginas</li>
            <li>✔ Diseño responsive</li>
            <li>✔ Secciones personalizadas</li>
            <li>✔ SEO y buenas prácticas</li>
            <li>✔ Integración con herramientas externas</li>
            <li>✔ Deploy y puesta en producción</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-[family-name:var(--font-bebas)]">
            ¿Para quién es este servicio?
          </h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            Para empresas y negocios que necesitan una presencia digital
            completa: más de una página, secciones propias para cada
            servicio, y toda la información de contacto bien organizada.
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Si necesitás poder actualizar el contenido vos mismo o sumar un
            blog, te conviene{" "}
            <a
              href="/servicios/institucional-pro"
              className="text-accent underline underline-offset-2"
            >
              Institucional Pro
            </a>
            .
          </p>
        </div>
      </div>

      {/* PRICING */}
      <div className="mt-32 max-w-3xl mx-auto px-6 text-center border border-accent/40 rounded-2xl p-10 md:p-14 bg-gradient-to-b from-accent/10 to-transparent">
        <p className="text-xs text-accent uppercase tracking-widest">Precio</p>
        <p className="mt-4 text-5xl font-[family-name:var(--font-bebas)]">
          Desde USD <span className="text-accent">500</span>
        </p>
        <p className="mt-3 text-gray-400">
          El precio final depende del alcance del proyecto.
        </p>
        <a
          href="https://wa.me/5491167470473?text=Hola%20Kodexa!%20Me%20interesa%20un%20sitio%20institucional%20para%20mi%20empresa.%20%C2%BFPodemos%20hablar%3F"
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
            label: "Landing Page",
            description: "Si buscás una página enfocada en un único objetivo.",
            href: "/servicios/landing-pages",
          },
          {
            label: "Institucional Pro",
            description: "Si necesitás contenido administrable y blog.",
            href: "/servicios/institucional-pro",
          },
          {
            label: "Aplicaciones Web",
            description: "Si tu proyecto necesita usuarios, roles y lógica propia.",
            href: "/servicios/plataformas-digitales",
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
