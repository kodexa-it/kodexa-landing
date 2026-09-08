import Image from "next/image";
import Link from "next/link";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

const ownProjects = [
  {
    title: "Nexo",
    badge: "NX",
    description:
      "Asistente con inteligencia artificial que aprende cómo funciona un negocio para atender clientes, responder consultas, gestionar reservas y centralizar su información en un solo lugar.",
    bullets: [
      "Asistente conversacional con IA",
      "Integración con WhatsApp",
      "Gestión de reservas y turnos",
      "Suscripciones y panel de administración",
    ],
    href: "/proyectos/nexo",
  },
  {
    title: "Waste Treatment",
    badge: "WT",
    description:
      "Sitio institucional dinámico con arquitectura basada en API y sistema de gestión (ABM), diseñado para optimizar la gestión de contenido, mejorar la escalabilidad y facilitar la operación del negocio.",
    bullets: [
      "Sistema de gestión (ABM)",
      "Integración mediante API",
      "Arquitectura escalable",
      "Contenido dinámico",
    ],
    href: null,
  },
];

const previousProjects = [
  {
    title: "Peabody Argentina",
    category: "Plataforma Multi-país",
    description:
      "Arquitectura escalable con gestión centralizada y despliegue multi-región.",
    image: "/images/peabody.webp",
    url: "https://peabody.com.ar/",
  },
  {
    title: "Mega Promociones",
    category: "Sistema de Landings",
    description: "Gestión dinámica de campañas con despliegue rápido.",
    image: "/images/mega.webp",
    url: "https://mega-promociones.com.mx/",
  },
  {
    title: "Freschi",
    category: "Sitio Multi-idioma",
    description: "Web adaptable a múltiples mercados con i18n.",
    image: "/images/freschi.webp",
    url: "https://andresfreschi.com/",
  },
  {
    title: "Bigsur Energy",
    category: "Landing de Conversión",
    description: "Optimizada para captación de leads.",
    image: "/images/bigsur.webp",
    url: "https://bigsur.energy/",
  },
];

export default function ProyectosPage() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Kodexa", url: "https://kodexa.ar" },
          { name: "Proyectos", url: "https://kodexa.ar/proyectos" },
        ]}
      />

      <BreadcrumbNav items={[{ name: "Kodexa", href: "/" }, { name: "Proyectos" }]} />

      {/* HERO */}
      <div className="relative px-6 md:px-28 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-accent/20 blur-[140px] pointer-events-none" />

        <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-10">
          <div className="border border-white/15 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-gray-500">
            Digital Product Studio
          </div>
        </div>

        <div className="max-w-4xl relative z-10">
          <h1 className="text-[48px] md:text-[90px] leading-[0.95] font-[family-name:var(--font-bebas)]">
            Portfolio y Casos de Estudio
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
            Kodexa no solo diseña páginas: también construye productos
            digitales propios, de punta a punta. Acá mostramos ambas cosas.
          </p>
        </div>
      </div>

      {/* PRODUCTOS PROPIOS */}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-bebas)]">
          Productos propios de Kodexa
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {ownProjects.map((project) => (
            <div
              key={project.title}
              className="relative border border-accent/40 rounded-xl p-6 md:p-8 hover:border-accent transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-md flex items-center justify-center text-xs font-mono">
                  {project.badge}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
                    Producto Kodexa
                  </span>
                  <h3 className="text-2xl font-[family-name:var(--font-bebas)]">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-sm text-gray-400 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-5 space-y-1 text-xs text-gray-500 font-mono">
                {project.bullets.map((bullet) => (
                  <p key={bullet}>• {bullet}</p>
                ))}
              </div>

              <span className="absolute top-4 right-4 text-[10px] bg-accent text-black px-2 py-1 font-mono rounded">
                En desarrollo
              </span>

              {project.href && (
                <Link
                  href={project.href}
                  className="mt-6 inline-block text-accent underline underline-offset-2 text-sm"
                >
                  Ver caso de estudio completo
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* EXPERIENCIA PREVIA */}
      <div className="mt-32 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-bebas)]">
          Proyectos en los que participamos
        </h2>

        <p className="mt-4 max-w-xl text-sm text-gray-500">
          Desarrollados como parte del equipo de{" "}
          <a
            href="https://www.unocollective.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline"
          >
            Uno Collective
          </a>
          , participando en desarrollo y arquitectura.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previousProjects.map((project) => (
            <div
              key={project.title}
              className="group border border-white/10 rounded-xl overflow-hidden"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.category}`}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-5">
                <span className="text-[10px] text-accent font-mono uppercase">
                  {project.category}
                </span>
                <h3 className="text-xl mt-2 group-hover:text-accent transition">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-[10px] uppercase tracking-widest hover:border-accent hover:text-accent transition"
                >
                  Ver sitio en vivo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-40 pb-24 text-center px-6">
        <h2 className="text-4xl font-semibold">
          ¿Querés que construyamos algo así para tu negocio?
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
