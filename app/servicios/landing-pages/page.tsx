export const metadata = {
  title: "Landing Pages en Argentina | Kodexa",
  description:
    "Creamos landing pages enfocadas en conversión para negocios en Argentina. Generá más clientes con una página optimizada.",
};

export default function LandingPages() {
  return (
    <section className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <div className="relative px-6 md:px-28 min-h-screen flex items-center">
        <div className="absolute right-0 w-[500px] h-[500px] bg-accent/20 blur-[120px]" />

        <div className="max-w-4xl">
          <h1 className="text-[48px] md:text-[90px] leading-[0.9] font-[var(--font-bebas)]">
            Landing pages que convierten
          </h1>

          <p className="mt-6 text-xl text-gray-400 max-w-[600px]">
            Diseñadas para transformar tráfico en clientes. No son solo páginas,
            son herramientas de adquisición.
          </p>

          <div className="mt-10">
            <a
              href="https://wa.me/5491167470473"
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

      {/* CTA */}
      <div className="mt-32 text-center px-6">
        <h3 className="text-4xl font-semibold">
          Tu producto puede convertir más
        </h3>

        <p className="mt-6 text-gray-500">
          La diferencia está en cómo está construida tu landing.
        </p>

        <a
          href="https://wa.me/5491167470473"
          className="mt-10 inline-block bg-accent text-black px-8 py-4 uppercase text-sm"
        >
          Empezar proyecto
        </a>
      </div>
    </section>
  );
}