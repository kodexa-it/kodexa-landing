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

        <div className="max-w-3xl relative z-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            Recursos
          </span>

          <h1 className="mt-4 text-[38px] md:text-[64px] leading-[0.95] font-[family-name:var(--font-bebas)]">
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
        <div className="border-t border-white/10">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group block border-b border-white/10 py-10 hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3">
                <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-bebas)] tracking-tight group-hover:text-accent transition-colors">
                  {article.title}
                </h2>
                <span className="shrink-0 font-mono text-xs text-gray-500 uppercase tracking-widest">
                  {article.readingTime} de lectura
                </span>
              </div>
              <p className="mt-4 text-gray-400 leading-relaxed max-w-2xl">
                {article.description}
              </p>
              <span className="mt-5 inline-block text-accent text-sm underline underline-offset-2">
                Leer artículo completo
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
