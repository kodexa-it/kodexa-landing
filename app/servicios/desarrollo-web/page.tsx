import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ServiceFaq, FaqSchema } from "@/components/service-faq";
import { RelatedLinks } from "@/components/related-links";

export const metadata: Metadata = {
  title: "Desarrollo Web a Medida",
  description:
    "Desarrollo web a medida para empresas y emprendedores: sitios institucionales y aplicaciones web diseñados para convertir visitas en clientes. Conocé el proceso y los precios.",
  keywords: [
    "desarrollo web",
    "desarrollo web a medida",
    "sitios web",
    "desarrollo web para empresas",
    "diseño y desarrollo web",
  ],
  alternates: {
    canonical: "/servicios/desarrollo-web",
  },
  openGraph: {
    title: "Desarrollo Web a Medida | Kodexa",
    description:
      "Sitios y aplicaciones web a medida, diseñados para convertir visitas en clientes.",
    url: "https://kodexa.ar/servicios/desarrollo-web",
    siteName: "Kodexa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Desarrollo web a medida por Kodexa",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

const faqItems = [
  {
    question: "¿Cuánto cuesta desarrollar una página web?",
    answer:
      "Depende del alcance. Una landing page parte desde USD 250. Un sitio institucional con más secciones, contenido e integraciones parte desde USD 500. El precio final se define según la cantidad de páginas, el diseño y las integraciones que necesites.",
  },
  {
    question: "¿Cuánto tarda el desarrollo de un sitio web?",
    answer:
      "Una landing page suele estar lista en pocas semanas. Un sitio institucional con más contenido puede tomar algo más de tiempo, sobre todo si depende de que nos envíes textos e imágenes definitivas.",
  },
  {
    question: "¿Qué diferencia hay entre un sitio web y una aplicación web?",
    answer:
      "Un sitio web comunica tu propuesta y busca convertir visitas en clientes o consultas. Una aplicación web va un paso más allá: usuarios que inician sesión, paneles propios y lógica de negocio. Si tu proyecto necesita eso, mirá nuestro servicio de plataformas y aplicaciones web.",
  },
  {
    question: "¿Kodexa trabaja con empresas de Argentina?",
    answer:
      "Sí. Trabajamos con empresas y emprendedores de Argentina, y también de forma remota con clientes de otros países.",
  },
];

export default function DesarrolloWebPage() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Kodexa", url: "https://kodexa.ar" },
          { name: "Servicios", url: "https://kodexa.ar/servicios" },
          {
            name: "Desarrollo Web",
            url: "https://kodexa.ar/servicios/desarrollo-web",
          },
        ]}
      />
      <FaqSchema items={faqItems} />

      <BreadcrumbNav
        items={[
          { name: "Kodexa", href: "/" },
          { name: "Servicios", href: "/servicios" },
          { name: "Desarrollo Web" },
        ]}
      />

      {/* HERO */}
      <div className="relative px-6 md:px-28 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-accent/20 blur-[140px] pointer-events-none" />

        <div className="max-w-3xl relative z-10">
          <h1 className="text-[42px] md:text-[80px] leading-[0.95] font-[family-name:var(--font-bebas)]">
            Desarrollo Web a Medida
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
            Diseñamos y desarrollamos sitios web pensados para tu negocio, no
            plantillas genéricas. Cada proyecto se construye con foco en
            conversión, velocidad y una base sólida para crecer.
          </p>

          <div className="mt-10">
            <a
              href="https://wa.me/5491167470473?text=Hola%20Lautaro!%20Me%20interesa%20desarrollar%20un%20sitio%20web.%20%C2%BFPodemos%20hablar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-black px-6 py-3 text-xs uppercase tracking-widest hover:scale-105 transition"
            >
              Consultar por mi proyecto
            </a>
          </div>
        </div>
      </div>

      {/* QUÉ ES / PARA QUIÉN */}
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-[family-name:var(--font-bebas)]">
            ¿Qué incluye este servicio?
          </h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            Desarrollamos sitios institucionales, landing pages y aplicaciones
            web para empresas que necesitan una presencia digital profesional,
            rápida y bien estructurada.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-gray-400">
            <li>✔ Diseño a medida, no plantillas genéricas</li>
            <li>✔ Desarrollo responsive para todos los dispositivos</li>
            <li>✔ SEO técnico y buenas prácticas desde el inicio</li>
            <li>✔ Integración con formularios, analytics y campañas</li>
            <li>✔ Deploy y puesta en producción incluidos</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-[family-name:var(--font-bebas)]">
            ¿Para quién es este servicio?
          </h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            Para emprendedores que necesitan una primera presencia digital,
            empresas que quieren renovar un sitio desactualizado y negocios
            que quieren vender online o generar más consultas desde internet.
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Si tu proyecto necesita algo más que un sitio informativo —
            usuarios con cuenta propia, paneles o lógica de negocio — te
            conviene mirar{" "}
            <a href="/servicios/plataformas-digitales" className="text-accent underline underline-offset-2">
              plataformas y aplicaciones web
            </a>
            .
          </p>
        </div>
      </div>

      {/* CÓMO TRABAJAMOS */}
      <div className="mt-32 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-[family-name:var(--font-bebas)] text-center">
          Cómo trabajamos
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-gray-400">
          <div className="border border-white/10 rounded-xl p-5">
            <span className="text-accent font-mono text-xs">01</span>
            <p className="mt-2 font-semibold text-white">Entendemos</p>
            <p className="mt-1">Definimos objetivos, alcance y contenido.</p>
          </div>
          <div className="border border-white/10 rounded-xl p-5">
            <span className="text-accent font-mono text-xs">02</span>
            <p className="mt-2 font-semibold text-white">Diseñamos</p>
            <p className="mt-1">Estructura y diseño orientados a conversión.</p>
          </div>
          <div className="border border-white/10 rounded-xl p-5">
            <span className="text-accent font-mono text-xs">03</span>
            <p className="mt-2 font-semibold text-white">Construimos</p>
            <p className="mt-1">Desarrollo con buenas prácticas y SEO técnico.</p>
          </div>
          <div className="border border-white/10 rounded-xl p-5">
            <span className="text-accent font-mono text-xs">04</span>
            <p className="mt-2 font-semibold text-white">Lanzamos</p>
            <p className="mt-1">Deploy, pruebas y puesta en producción.</p>
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div className="mt-32 max-w-3xl mx-auto px-6 text-center border border-accent/40 rounded-2xl p-10 md:p-14 bg-gradient-to-b from-accent/10 to-transparent">
        <p className="text-xs text-accent uppercase tracking-widest">Precio</p>
        <p className="mt-4 text-5xl font-[family-name:var(--font-bebas)]">
          Desde USD <span className="text-accent">250</span>
        </p>
        <p className="mt-3 text-gray-400">
          El precio final depende del alcance del proyecto.
        </p>
        <a
          href="https://wa.me/5491167470473?text=Hola%20Lautaro!%20Me%20interesa%20desarrollar%20un%20sitio%20web.%20%C2%BFPodemos%20hablar%3F"
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
            label: "Software y Sistemas a Medida",
            description:
              "Cuando necesitás automatizar procesos o gestionar información propia del negocio.",
            href: "/servicios/software-a-medida",
          },
          {
            label: "Landing Pages",
            description: "Páginas enfocadas en un único objetivo: convertir.",
            href: "/servicios/landing-pages",
          },
          {
            label: "Proyectos de Kodexa",
            description: "Conocé los productos que construimos.",
            href: "/proyectos",
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
