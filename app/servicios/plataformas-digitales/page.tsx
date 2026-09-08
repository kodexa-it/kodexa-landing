import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ServiceFaq, FaqSchema } from "@/components/service-faq";
import { RelatedLinks } from "@/components/related-links";

export const metadata: Metadata = {
  title: "Desarrollo de Plataformas y Aplicaciones Web",
  description:
    "Desarrollo de plataformas digitales y aplicaciones web con usuarios, roles y lógica propia. Arquitectura pensada para escalar a largo plazo.",
  keywords: [
    "plataformas digitales",
    "desarrollo de plataformas",
    "desarrollo de aplicaciones web",
    "aplicaciones web",
    "plataformas web",
  ],
  alternates: {
    canonical: "/servicios/plataformas-digitales",
  },
  openGraph: {
    title: "Desarrollo de Plataformas y Aplicaciones Web | Kodexa",
    description:
      "Plataformas y aplicaciones web con usuarios, roles y arquitectura preparada para escalar.",
    url: "https://kodexa.ar/servicios/plataformas-digitales",
    siteName: "Kodexa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Desarrollo de plataformas y aplicaciones web por Kodexa",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

const faqItems = [
  {
    question: "¿Qué es una plataforma digital?",
    answer:
      "Es una aplicación web con lógica propia: usuarios que inician sesión, roles y permisos, contenido dinámico y funcionalidades específicas para tu negocio. Va más allá de un sitio informativo.",
  },
  {
    question: "¿Cuánto cuesta desarrollar una aplicación web?",
    answer:
      "No hay un precio único: depende de la cantidad de funcionalidades, roles de usuario e integraciones que necesite. Definimos el presupuesto según el alcance real del proyecto, después de entender qué necesitás construir.",
  },
  {
    question:
      "¿En qué se diferencia de un sistema a medida?",
    answer:
      "Un sistema a medida suele ser una herramienta interna para tu equipo. Una plataforma o aplicación web generalmente involucra usuarios externos —clientes, proveedores o el público— con su propia cuenta dentro del producto.",
  },
  {
    question: "¿Kodexa trabaja con empresas de Argentina?",
    answer:
      "Sí. Trabajamos con empresas y emprendedores de Argentina, y también de forma remota con clientes de otros países.",
  },
];

export default function PlataformasDigitalesPage() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Kodexa", url: "https://kodexa.ar" },
          { name: "Servicios", url: "https://kodexa.ar/servicios" },
          {
            name: "Plataformas Digitales",
            url: "https://kodexa.ar/servicios/plataformas-digitales",
          },
        ]}
      />
      <FaqSchema items={faqItems} />

      <BreadcrumbNav
        items={[
          { name: "Kodexa", href: "/" },
          { name: "Servicios", href: "/servicios" },
          { name: "Plataformas Digitales" },
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
            Desarrollo de Plataformas y Aplicaciones Web
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
            Aplicaciones web con lógica propia para negocios que necesitan más
            que un sitio: usuarios, contenido dinámico y funcionalidades
            específicas.
          </p>

          <div className="mt-10">
            <a
              href="https://wa.me/5491167470473?text=Hola%20Lautaro!%20Estoy%20evaluando%20desarrollar%20una%20plataforma%20o%20aplicaci%C3%B3n%20web.%20%C2%BFPodemos%20hablar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-black px-6 py-3 text-xs uppercase tracking-widest hover:scale-105 transition"
            >
              Consultar por mi proyecto
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
            <li>→ Negocios que necesitan que sus clientes inicien sesión</li>
            <li>→ Empresas que quieren ofrecer un servicio digital propio</li>
            <li>→ Equipos que ya tienen un sistema interno y quieren convertirlo en producto</li>
            <li>→ Proyectos con roles de usuario diferenciados</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-[family-name:var(--font-bebas)]">
            ¿Qué incluye?
          </h2>
          <ul className="mt-6 space-y-3 text-gray-400">
            <li>✔ Autenticación y roles de usuario</li>
            <li>✔ Paneles administrables</li>
            <li>✔ Suscripciones y pagos, cuando el proyecto lo requiere</li>
            <li>✔ Arquitectura multiusuario preparada para escalar</li>
          </ul>
        </div>
      </div>

      {/* EVIDENCIA REAL */}
      <div className="mt-32 max-w-4xl mx-auto px-6 text-center border border-white/10 rounded-2xl p-10 bg-white/[0.02]">
        <p className="text-xs text-accent uppercase tracking-widest">Caso real</p>
        <p className="mt-4 text-2xl md:text-3xl font-[family-name:var(--font-bebas)]">
          Nexo, un producto propio de Kodexa
        </p>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Nexo es una plataforma con autenticación, panel de administración y
          suscripciones que desarrollamos internamente. Es la mejor evidencia
          de lo que podemos construir.
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
          Definimos el alcance y el presupuesto después de entender tu proyecto.
        </p>
        <a
          href="https://wa.me/5491167470473?text=Hola%20Lautaro!%20Estoy%20evaluando%20desarrollar%20una%20plataforma%20o%20aplicaci%C3%B3n%20web.%20%C2%BFPodemos%20hablar%3F"
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
            description: "Herramientas internas para tu equipo, sin usuarios externos.",
            href: "/servicios/software-a-medida",
          },
          {
            label: "MVP y Productos SaaS",
            description: "Si tu plataforma es un producto que querés lanzar al mercado.",
            href: "/servicios/mvp",
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
          ¿Tenés en mente una plataforma o aplicación propia?
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
