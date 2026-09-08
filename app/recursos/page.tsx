import Link from "next/link";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";

const articles = [
  {
    title: "Qué aprendimos construyendo un SaaS desde cero",
    description:
      "Un vistazo detrás de escena de cómo construimos Nexo, qué decisiones tomamos y qué aprendimos desarrollando un producto SaaS real.",
    href: "/recursos/que-aprendimos-construyendo-un-saas-desde-cero",
    date: "2026-09-08",
    readingTime: "9 min",
  },
];

export default function RecursosPage() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Kodexa", url: "https://kodexa.ar" },
          { name: "Recursos", url: "https://kodexa.ar/recursos" },
        ]}
      />

      <BreadcrumbNav items={[{ name: "Kodexa", href: "/" }, { name: "Recursos" }]} />

      {/* HERO */}
      <div className="relative px-6 md:px-28 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-accent/20 blur-[140px] pointer-events-none" />

        <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-10">
          <div className="border border-white/15 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-gray-500">
            Digital Product Studio
          </div>
        </div>

        <div className="max-w-4xl relative z-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            Recursos
          </span>

          <h1 className="mt-4 text-[44px] md:text-[84px] leading-[0.95] font-[family-name:var(--font-bebas)]">
            Notas desde adentro de Kodexa
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            No es un blog de marketing. Es un registro de decisiones reales
            de producto, arquitectura y desarrollo que tomamos mientras
            construimos software, propio y para otros.
          </p>
        </div>
      </div>

      {/* LISTADO */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        <div className="flex flex-col gap-6">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group block border border-white/10 rounded-xl p-8 md:p-10 hover:border-accent/40 hover:bg-white/[0.03] transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3">
                <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-bebas)] tracking-tight text-white group-hover:text-accent transition-colors duration-300">
                  {article.title}
                </h2>
                <span className="shrink-0 font-mono text-xs text-gray-500 uppercase tracking-widest">
                  {article.readingTime} de lectura
                </span>
              </div>
              <p className="mt-4 text-gray-400 leading-relaxed max-w-2xl">
                {article.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-gray-400 text-sm group-hover:text-accent transition-colors duration-300">
                Leer artículo completo
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
