import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { RelatedLinks } from "@/components/related-links";

export const metadata: Metadata = {
  title: "Landing Pages que Convierten | Kodexa",
  description:
    "Diseño y desarrollo de landing pages enfocadas en conversión para negocios en Argentina. Estructura, velocidad e integraciones pensadas para generar clientes.",
  alternates: {
    canonical: "/servicios/landing-pages",
  },
  openGraph: {
    title: "Landing Pages que Convierten | Kodexa",
    description:
      "Diseño y desarrollo de landing pages enfocadas en conversión, estructura y velocidad.",
    url: "https://kodexa.ar/servicios/landing-pages",
    siteName: "Kodexa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Landing pages que convierten, desarrolladas por Kodexa",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function LandingPages() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Kodexa", url: "https://kodexa.ar" },
          { name: "Servicios", url: "https://kodexa.ar/servicios" },
          {
            name: "Landing Pages",
            url: "https://kodexa.ar/servicios/landing-pages",
          },
        ]}
      />

      <BreadcrumbNav
        items={[
          { name: "Kodexa", href: "/" },
          { name: "Servicios", href: "/servicios" },
          { name: "Landing Pages" },
        ]}
      />

      {/* HERO */}
      <div className="relative px-6 md:px-28 pt-4 pb-24 md:pt-12 md:pb-32 flex items-center min-h-[80vh]">
        <div className="absolute right-0 w-[500px] h-[500px] bg-accent/20 blur-[120px]" />

        <div className="max-w-4xl">
          <h1 className="text-[48px] md:text-[90px] leading-[0.9] font-[family-name:var(--font-bebas)]">
            Landing pages que convierten
          </h1>

          <p className="mt-6 text-xl text-gray-400 max-w-[600px]">
            Diseñadas para transformar tráfico en clientes. No son solo páginas,
            son herramientas de adquisición.
          </p>

          <div className="mt-10">
            <a
              href="https://wa.me/5491167470473?text=Hola%20Lautaro!%20Me%20interesa%20una%20landing%20page.%20%C2%BFPodemos%20hablar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-black px-6 py-3 uppercase text-sm hover:scale-105 transition"
            >
              Quiero mi landing
            </a>
          </div>
        </div>
      </div>

      {/* BENEFICIOS (cards como en servicios) */}
      <div className="mt-20 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Más conversiones",
            desc: "Estructura optimizada para transformar visitas en clientes.",
          },
          {
            title: "Velocidad optimizada",
            desc: "Performance alta para mejorar resultados y SEO.",
          },
          {
            title: "Integraciones",
            desc: "Formularios, analytics y campañas listos para usar.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="border border-white/10 rounded-xl p-6 bg-white/[0.02] backdrop-blur-sm hover:border-accent/40 transition"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-500 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* SECCIÓN PROBLEMA */}
      <div className="mt-32 max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-semibold">
          Tener tráfico no alcanza
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl">
          Muchas webs reciben visitas pero no convierten. El problema no es el
          tráfico, es cómo está diseñada la experiencia.
        </p>
      </div>

      {/* IDEAL */}
      <div className="mt-24 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-semibold">Ideal si...</h2>

          <ul className="mt-6 space-y-3 text-gray-400">
            <li>✔ Querés generar leads</li>
            <li>✔ Estás corriendo campañas</li>
            <li>✔ Querés validar un producto</li>
          </ul>
        </div>

        <div className="border border-white/10 rounded-xl p-8 bg-white/[0.02] backdrop-blur-sm">
          <p className="text-sm text-gray-400">Resultado esperado</p>
          <p className="mt-3 text-xl">
            Más consultas, mejor tasa de conversión y una base sólida para
            escalar tu adquisición de clientes.
          </p>
        </div>
      </div>

      <RelatedLinks
        items={[
          {
            label: "Desarrollo Web",
            description: "Si además necesitás un sitio institucional más completo.",
            href: "/servicios/desarrollo-web",
          },
          {
            label: "Software y Sistemas a Medida",
            description: "Cuando tu negocio necesita algo más que captar leads.",
            href: "/servicios/software-a-medida",
          },
          {
            label: "Proyectos de Kodexa",
            description: "Conocé los productos que construimos.",
            href: "/proyectos",
          },
        ]}
      />

      {/* CTA */}
      <div className="mt-40 pb-24 text-center px-6">
        <h3 className="text-4xl font-semibold">
          Tu producto puede convertir más
        </h3>

        <p className="mt-6 text-gray-500">
          La diferencia está en cómo está construida tu landing.
        </p>

        <a
          href="https://wa.me/5491167470473?text=Hola%20Lautaro!%20Me%20interesa%20una%20landing%20page.%20%C2%BFPodemos%20hablar%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block bg-accent text-black px-8 py-4 uppercase text-sm"
        >
          Empezar proyecto
        </a>
      </div>
    </section>
  );
}