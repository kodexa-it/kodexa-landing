import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ServiceFaq, FaqSchema } from "@/components/service-faq";
import { RelatedLinks } from "@/components/related-links";

export const metadata: Metadata = {
  title: "Desarrollo de Software y Sistemas a Medida",
  description:
    "Software a medida y sistemas de gestión adaptados a los procesos reales de tu empresa. Automatizá tareas, centralizá información y escalá tu operación.",
  keywords: [
    "software a medida",
    "desarrollo de software a medida",
    "desarrollo de sistemas",
    "sistemas web",
    "sistemas de gestión",
    "automatización de procesos",
  ],
  alternates: {
    canonical: "/servicios/software-a-medida",
  },
  openGraph: {
    title: "Desarrollo de Software y Sistemas a Medida | Kodexa",
    description:
      "Sistemas y software a medida adaptados a los procesos reales de tu empresa.",
    url: "https://kodexa.ar/servicios/software-a-medida",
    siteName: "Kodexa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Desarrollo de software y sistemas a medida por Kodexa",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

const faqItems = [
  {
    question: "¿Cuánto cuesta desarrollar un sistema a medida?",
    answer:
      "Los sistemas de gestión con panel de administración (ABM) parten desde USD 900. Proyectos con más módulos, integraciones o lógica propia requieren un presupuesto definido según el alcance.",
  },
  {
    question:
      "¿Qué diferencia hay entre software a medida y software estándar?",
    answer:
      "El software estándar (una planilla, un CRM genérico) sirve para procesos comunes, pero obliga a tu negocio a adaptarse a la herramienta. El software a medida se construye alrededor de cómo trabaja realmente tu empresa, sin las limitaciones de una herramienta genérica.",
  },
  {
    question: "¿Cuánto tiempo lleva desarrollar un sistema a medida?",
    answer:
      "Depende de la cantidad de módulos y de las integraciones necesarias. Un sistema de gestión simple toma menos tiempo que una plataforma con múltiples roles, permisos e integraciones externas.",
  },
  {
    question: "¿Kodexa trabaja con empresas de Argentina?",
    answer:
      "Sí. Trabajamos con empresas y emprendedores de Argentina, y también de forma remota con clientes de otros países.",
  },
];

export default function SoftwareAMedidaPage() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Kodexa", url: "https://kodexa.ar" },
          { name: "Servicios", url: "https://kodexa.ar/servicios" },
          {
            name: "Software a Medida",
            url: "https://kodexa.ar/servicios/software-a-medida",
          },
        ]}
      />
      <FaqSchema items={faqItems} />

      <BreadcrumbNav
        items={[
          { name: "Kodexa", href: "/" },
          { name: "Servicios", href: "/servicios" },
          { name: "Software a Medida" },
        ]}
      />

      {/* HERO */}
      <div className="relative px-6 md:px-28 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-accent/20 blur-[140px] pointer-events-none" />

        <div className="max-w-3xl relative z-10">
          <h1 className="text-[38px] md:text-[70px] leading-[0.95] font-[family-name:var(--font-bebas)]">
            Desarrollo de Software y Sistemas a Medida
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
            Sistemas adaptados a los procesos reales de tu empresa, para
            centralizar información, automatizar tareas repetitivas y ganar
            eficiencia real.
          </p>

          <div className="mt-10">
            <a
              href="https://wa.me/5491167470473?text=Hola%20Lautaro!%20Me%20interesa%20desarrollar%20un%20sistema%20a%20medida.%20%C2%BFPodemos%20hablar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-black px-6 py-3 text-xs uppercase tracking-widest hover:scale-105 transition"
            >
              Consultar por mi proyecto
            </a>
          </div>
        </div>
      </div>

      {/* PROBLEMA / PARA QUIÉN */}
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-[family-name:var(--font-bebas)]">
            ¿Qué problemas resuelve?
          </h2>
          <ul className="mt-6 space-y-3 text-gray-400">
            <li>→ Información dispersa en planillas o herramientas sueltas</li>
            <li>→ Tareas manuales que se repiten todas las semanas</li>
            <li>→ Herramientas genéricas que no se adaptan a tu operación</li>
            <li>→ Falta de visibilidad clara sobre el negocio</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-[family-name:var(--font-bebas)]">
            ¿Para quién es este servicio?
          </h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            Para empresas que gestionan clientes, pedidos, turnos o inventario
            de forma manual, y para negocios que crecieron y necesitan un
            sistema propio en lugar de herramientas genéricas.
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Si además necesitás que tus clientes o usuarios externos accedan
            con su propia cuenta, mirá{" "}
            <a href="/servicios/plataformas-digitales" className="text-accent underline underline-offset-2">
              plataformas y aplicaciones web
            </a>
            .
          </p>
        </div>
      </div>

      {/* QUÉ INCLUYE */}
      <div className="mt-32 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-[family-name:var(--font-bebas)] text-center">
          ¿Qué incluye?
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 gap-6 text-sm text-gray-400">
          <div className="border border-white/10 rounded-xl p-6">
            <p className="font-semibold text-white">Panel de gestión (ABM)</p>
            <p className="mt-2">Alta, baja y modificación de la información de tu negocio.</p>
          </div>
          <div className="border border-white/10 rounded-xl p-6">
            <p className="font-semibold text-white">Automatización de procesos</p>
            <p className="mt-2">Reducí tareas manuales repetitivas.</p>
          </div>
          <div className="border border-white/10 rounded-xl p-6">
            <p className="font-semibold text-white">Integración con APIs</p>
            <p className="mt-2">Conexión con las herramientas que ya usás.</p>
          </div>
          <div className="border border-white/10 rounded-xl p-6">
            <p className="font-semibold text-white">Arquitectura escalable</p>
            <p className="mt-2">Preparada para sumar módulos a futuro.</p>
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div className="mt-32 max-w-3xl mx-auto px-6 text-center border border-accent/40 rounded-2xl p-10 md:p-14 bg-gradient-to-b from-accent/10 to-transparent">
        <p className="text-xs text-accent uppercase tracking-widest">Precio</p>
        <p className="mt-4 text-5xl font-[family-name:var(--font-bebas)]">
          Desde USD <span className="text-accent">900</span>
        </p>
        <p className="mt-3 text-gray-400">
          El presupuesto final depende de la cantidad de módulos e integraciones.
        </p>
        <a
          href="https://wa.me/5491167470473?text=Hola%20Lautaro!%20Me%20interesa%20desarrollar%20un%20sistema%20a%20medida.%20%C2%BFPodemos%20hablar%3F"
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
            description:
              "Cuando tu sistema necesita usuarios externos con su propia cuenta.",
            href: "/servicios/plataformas-digitales",
          },
          {
            label: "Caso de estudio: Nexo",
            description:
              "Un producto SaaS propio de Kodexa construido con esta misma lógica.",
            href: "/proyectos/nexo",
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
          ¿Tu negocio necesita un sistema propio?
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
