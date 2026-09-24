import Image from "next/image";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { TrackedLink } from "@/components/tracked-link";
import { works } from "@/lib/works";

export default function ProyectosPage() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Kodexa", url: "https://kodexa.ar" },
          { name: "Trabajos", url: "https://kodexa.ar/proyectos" },
        ]}
      />

      <BreadcrumbNav items={[{ name: "Kodexa", href: "/" }, { name: "Trabajos" }]} />

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
            Portfolio de proyectos
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
            Esto es lo que ya hicimos: sitios web, plataformas y sistemas a
            medida desarrollados para negocios reales.
          </p>
        </div>
      </div>

      {/* TRABAJOS */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <div
              key={work.title}
              className="group border border-white/10 rounded-xl overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] bg-white/[0.03] overflow-hidden">
                {work.image ? (
                  <Image
                    src={work.image}
                    alt={`${work.title} — ${work.category}`}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-bebas)] text-7xl text-white/20 group-hover:text-accent/60 transition-colors">
                      {work.badge}
                    </span>
                  </div>
                )}
                {work.status && (
                  <span className="absolute top-3 right-3 text-[10px] bg-accent text-black px-2 py-1 font-mono rounded">
                    {work.status}
                  </span>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <span className="text-[10px] text-accent font-mono uppercase">
                  {work.category}
                </span>
                <h3 className="text-xl mt-2 group-hover:text-accent transition">
                  {work.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">{work.description}</p>

                {work.bullets && (
                  <div className="mt-4 space-y-1 text-xs text-gray-500 font-mono">
                    {work.bullets.map((b) => (
                      <p key={b}>• {b}</p>
                    ))}
                  </div>
                )}

                {work.via && (
                  <p className="mt-4 text-[10px] font-mono uppercase tracking-widest text-gray-600">
                    Con {work.via}
                  </p>
                )}

                {work.url && (
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 self-start inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-[10px] uppercase tracking-widest hover:border-accent hover:text-accent transition"
                  >
                    Ver sitio en vivo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-xl text-sm text-gray-500">
          Los proyectos de Uno Collective fueron desarrollados como parte del
          equipo de{" "}
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
      </div>

      {/* CTA */}
      <div className="mt-40 pb-24 text-center px-6">
        <h2 className="text-4xl font-semibold">
          ¿Querés que construyamos algo así para tu negocio?
        </h2>
        <TrackedLink
          href="/#contact"
          eventProps={{ location: "proyectos", label: "contanos_tu_proyecto" }}
          className="mt-10 inline-block bg-accent text-black px-8 py-4 uppercase text-sm"
        >
          Contanos tu proyecto
        </TrackedLink>
      </div>
    </section>
  );
}
