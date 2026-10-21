import Link from "next/link"
import { ProductBadge } from "@/components/ui/product-badge"
import { ButtonLink } from "@/components/ui/button"
import { ArrowRight, Whatsapp } from "@/components/ui/icons"
import { Eyebrow, Section, SectionHeader } from "@/components/ui/section"
import { ProjectCard } from "@/components/sections/project-card"
import { ContactForm } from "@/components/forms/contact-form"
import { featuredSlugs, getProject } from "@/lib/content/projects"
import { productList } from "@/lib/content/products"
import { EcosystemFlow } from "@/components/sections/ecosystem-flow"
import { method } from "@/lib/content/method"
import { whatsappHref } from "@/lib/content/site"

/* ── 3. Presentación del estudio ─────────────────────────────── */
const capabilities = [
  { title: "Sitios institucionales", text: "Presencia web completa, clara y bien estructurada.", href: "/servicios/institucional" },
  { title: "Landing pages", text: "Páginas con un objetivo comercial concreto.", href: "/servicios/landing-pages" },
  { title: "Aplicaciones y sistemas a medida", text: "Herramientas adaptadas a cómo opera tu negocio.", href: "/servicios/software-a-medida" },
  { title: "Productos digitales", text: "De la idea a un producto funcional.", href: "/servicios/mvp" },
]

export function StudioIntro() {
  return (
    <Section labelledBy="studio-title">
      <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="reveal">
          <Eyebrow>El estudio</Eyebrow>
          <h2 id="studio-title" className="t-h2 mt-5">
            Primero entendemos el negocio. Después diseñamos y construimos.
          </h2>
          <p className="t-lead mt-6">
            Kodexa trabaja con pymes y emprendimientos que buscan dar el siguiente paso: soluciones digitales bien construidas, pensadas para atraer clientes, ordenar la operación y sostener el crecimiento. Diseño y desarrollo en un mismo lugar, con trato directo durante todo el proyecto.
          </p>
          <ButtonLink href="/estudio" variant="ghost" className="mt-6 -ml-4">
            Conocer el estudio <ArrowRight width={18} height={18} />
          </ButtonLink>
        </div>

        <ul className="reveal grid gap-px overflow-hidden rounded-[1.5rem] border border-line bg-line sm:grid-cols-2">
          {capabilities.map((c, i) => (
            <li key={c.title} className="bg-paper">
              <Link href={c.href} className="group flex h-full flex-col gap-3 p-7 transition-colors hover:bg-white">
                <span className="t-label text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                <span className="t-h3">{c.title}</span>
                <span className="text-[0.97rem] text-ink-soft">{c.text}</span>
                <ArrowRight width={18} height={18} className="mt-auto text-brand-ink opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

/* ── 4. Proyectos destacados ─────────────────────────────────── */
export function FeaturedProjects() {
  const items = featuredSlugs.map((s) => getProject(s)!).filter(Boolean)
  return (
    <Section labelledBy="work-title" className="bg-mist/50">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Proyectos"
            title={<span id="work-title">Trabajo real, para negocios reales.</span>}
            lead="Una selección de sitios y plataformas en las que participamos."
          />
          <ButtonLink href="/proyectos" variant="secondary" className="self-start md:self-auto">
            Ver todos los proyectos <ArrowRight width={18} height={18} />
          </ButtonLink>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-12">
          <div className="reveal md:col-span-7"><ProjectCard project={items[0]} /></div>
          <div className="reveal md:col-span-5"><ProjectCard project={items[1]} /></div>
          <div className="reveal md:col-span-6"><ProjectCard project={items[2]} /></div>
          <div className="reveal md:col-span-6"><ProjectCard project={items[3]} /></div>
        </div>
      </div>
    </Section>
  )
}

/* ── 5. Servicios ────────────────────────────────────────────── */
const serviceFamilies = [
  { title: "Sitios web", text: "Landing pages, sitios institucionales y versiones con contenido administrable.", href: "/servicios/desarrollo-web", tag: "Presencia" },
  { title: "Software a medida", text: "Sistemas que centralizan información y automatizan tareas de tu operación.", href: "/servicios/software-a-medida", tag: "Operación" },
  { title: "Plataformas y aplicaciones", text: "Aplicaciones web con usuarios, roles y lógica propia.", href: "/servicios/plataformas-digitales", tag: "Producto" },
  { title: "MVP y productos SaaS", text: "Una idea llevada a un producto funcional que se puede validar.", href: "/servicios/mvp", tag: "Idea → producto" },
]

export function ServicesOverview() {
  return (
    <Section labelledBy="services-title" className="overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-1/4 -z-10 mx-auto h-96 max-w-4xl rounded-full bg-[radial-gradient(closest-side,rgb(251_110_26/0.16),transparent)] blur-2xl" />
      <div className="wrap">
        <SectionHeader
          eyebrow="Servicios"
          title={<span id="services-title">Capacidades para cada etapa del negocio.</span>}
          lead="Cada proyecto se define según su alcance. Empezamos por entender qué necesitás y recomendamos lo que corresponde."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {serviceFamilies.map((s, i) => (
            <Link key={s.title} href={s.href} className={`reveal glass glass-lift group flex min-h-56 flex-col justify-between p-8 ${i % 2 ? "md:translate-y-8" : ""}`}>
              <div className="flex items-center justify-between">
                <span className="t-label text-ink-faint">{s.tag}</span>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-all duration-300 group-hover:border-brand group-hover:bg-brand">
                  <ArrowRight width={17} height={17} />
                </span>
              </div>
              <div>
                <h3 className="t-h3 mt-10">{s.title}</h3>
                <p className="mt-3 max-w-sm text-[0.97rem] text-ink-soft">{s.text}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 md:mt-20">
          <ButtonLink href="/servicios" variant="secondary">
            Ver todos los servicios <ArrowRight width={18} height={18} />
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}

/* ── 6. Ecosistema Kodexa ──────────────────────────────────── */
const ecoBenefits = [
  { title: "Sin cargar datos dos veces", text: "Lo que entra por tu web o por WhatsApp llega solo a donde lo necesitás." },
  { title: "Atención a cualquier hora", text: "Nexo responde y agenda aunque vos estés atendiendo o fuera de horario." },
  { title: "Cada consulta con seguimiento", text: "Las oportunidades quedan registradas con su origen y su próxima tarea." },
  { title: "Empezá por una pieza", text: "Cada solución funciona sola. Sumás las demás cuando tu negocio lo pide." },
]

export function ProductsEcosystem() {
  return (
    <Section labelledBy="products-title" className="on-dark overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="absolute -right-24 top-0 h-[32rem] w-[32rem] rounded-full bg-brand/25 blur-[120px]" />
      <div aria-hidden="true" className="absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-[#7c5cff]/15 blur-[110px]" />
      <div className="wrap relative">
        <SectionHeader
          onDark
          eyebrow="Ecosistema Kodexa"
          title={<span id="products-title">Tu web, tu atención y tus clientes, conectados.</span>}
          lead="Una consulta que llega a tu sitio termina como turno confirmado y cliente en seguimiento, sin que tengas que pasar nada a mano. Así trabajan juntas las piezas de Kodexa."
        />

        <div className="mt-14">
          <EcosystemFlow />
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {ecoBenefits.map((b) => (
            <li key={b.title} className="reveal bg-ink/95 p-6">
              <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-brand" />
              <p className="mt-4 font-medium">{b.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">{b.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow onDark>Productos propios</Eyebrow>
            <p className="t-h3 mt-4 max-w-xl">Nexo y Nodo: listos para usar, con planes y configuración.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {productList.map((p) => (
            <Link key={p.slug} href={`/productos/${p.slug}`} className="reveal glass-dark group flex flex-col p-8 transition-colors duration-300 hover:bg-white/15 md:p-10">
              <div className="flex items-center justify-between">
                <ProductBadge product={p} tone="light" />
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-white/85">
                  <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${p.statusTone === "live" ? "bg-emerald-400" : "bg-brand"}`} />
                  {p.status}
                </span>
              </div>
              <h3 className="mt-10 text-4xl font-medium tracking-[-0.03em]">{p.name}</h3>
              <p className="mt-1 text-lg text-white/80">{p.tagline}</p>
              <p className="mt-5 max-w-md text-[0.97rem] text-white/65">{p.summary}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white">
                {p.cta} <ArrowRight width={17} height={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm text-white/60">
            Los productos propios son distintos del desarrollo a medida: se usan tal como están. Si necesitás algo construido desde cero para tu operación, ese es el trabajo del estudio.
          </p>
          <ButtonLink href="/contacto" className="shrink-0" event="cta_click" eventProps={{ location: "ecosistema", label: "quiero_ecosistema" }}>
            Quiero sumar el ecosistema
            <ArrowRight width={18} height={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}

/* ── 7. Metodología ──────────────────────────────────────────── */
export function MethodSection() {
  return (
    <Section labelledBy="method-title">
      <div className="wrap">
        <SectionHeader
          eyebrow="Metodología"
          title={<span id="method-title">Un proceso claro, de la idea al lanzamiento.</span>}
          lead="Cuatro etapas simples para que siempre sepas en qué punto está tu proyecto."
        />
        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div aria-hidden="true" className="absolute left-0 right-0 top-[0.45rem] hidden h-px bg-line md:block" />
          {method.map((s, i) => (
            <li key={s.title} className="reveal relative md:pr-4">
              <span aria-hidden="true" className="relative z-10 block h-3 w-3 rounded-full bg-brand ring-8 ring-paper" />
              <p className="t-label mt-6 text-ink-faint">Etapa {String(i + 1).padStart(2, "0")}</p>
              <h3 className="t-h3 mt-3">{s.title}</h3>
              <p className="mt-3 text-[0.97rem] text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

/* ── 8. CTA final ────────────────────────────────────────────── */
export function CtaBand({
  title = "Contanos qué querés construir.",
  lead = "Te escuchamos, entendemos el contexto y te proponemos un camino claro. Sin compromiso.",
}: {
  title?: string
  lead?: string
}) {
  return (
    <section id="contact" aria-labelledby="cta-title" className="on-dark relative overflow-hidden bg-ink py-24 text-white md:py-32">
      <div aria-hidden="true" className="drift absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(251_110_26/0.55),transparent_65%)] blur-2xl" />
      <div className="wrap relative">
        <div className="glass-dark mx-auto max-w-4xl px-6 py-14 text-center md:px-16 md:py-20">
          <Eyebrow onDark className="justify-center">Empecemos</Eyebrow>
          <h2 id="cta-title" className="t-h1 mt-6 text-white">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">{lead}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contacto" event="cta_click" eventProps={{ location: "cta_band" }}>
              Hablemos de tu proyecto <ArrowRight width={18} height={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink href={whatsappHref("Hola Kodexa! Quiero hablar sobre un proyecto.")} variant="onDark" event="cta_click" eventProps={{ location: "cta_band", label: "whatsapp" }}>
              <Whatsapp width={18} height={18} /> Escribir por WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── 9. Consulta rápida (home) ───────────────────────────────── */
export function HomeContact() {
  return (
    <section id="contact" aria-labelledby="home-contact-title" className="on-dark relative overflow-hidden bg-ink py-20 text-white md:py-28">
      <div aria-hidden="true" className="drift absolute -left-24 top-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgb(251_110_26/0.45),transparent_65%)] blur-2xl" />
      <div aria-hidden="true" className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#7c5cff]/15 blur-[110px]" />
      <div className="wrap relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Eyebrow onDark>Empecemos</Eyebrow>
          <h2 id="home-contact-title" className="t-h1 mt-6 text-white">Contanos qué querés construir.</h2>
          <p className="mt-6 max-w-md text-lg text-white/70">
            Dejanos tu consulta y te respondemos dentro de las 24 hs. Sin compromiso: primero entendemos tu negocio y después te proponemos un camino.
          </p>
          <ul className="mt-8 space-y-3 text-white/75">
            {["Trato directo con quien diseña y desarrolla", "Sin compromiso inicial", "Si preferís, hablamos por WhatsApp"].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappHref("Hola Kodexa! Quiero hablar sobre un proyecto.")} variant="onDark" event="cta_click" eventProps={{ location: "home_contact", label: "whatsapp" }}>
              <Whatsapp width={18} height={18} /> Escribir por WhatsApp
            </ButtonLink>
            <ButtonLink href="/contacto" variant="ghost" className="text-white hover:bg-white/10" event="cta_click" eventProps={{ location: "home_contact", label: "formulario_completo" }}>
              Formulario completo <ArrowRight width={18} height={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </ButtonLink>
          </div>
        </div>
        <ContactForm variant="quick" source="home" submitLabel="Enviar consulta" />
      </div>
    </section>
  )
}
