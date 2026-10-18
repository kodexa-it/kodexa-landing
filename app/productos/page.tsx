import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { ContactForm } from "@/components/forms/contact-form"
import { Eyebrow, Section } from "@/components/ui/section"
import { ArrowRight } from "@/components/ui/icons"
import { ProductBadge } from "@/components/ui/product-badge"
import { ButtonLink } from "@/components/ui/button"
import { ecosystem, productList } from "@/lib/content/products"

export const metadata: Metadata = {
  title: "Productos: Nexo y Nodo",
  description:
    "Nexo, tu asistente digital, y Nodo, tu CRM: soluciones de Kodexa para atender a tus clientes y organizar tu negocio desde un mismo ecosistema.",
  alternates: { canonical: "/productos" },
  openGraph: { title: "Productos | Kodexa", url: "https://kodexa.ar/productos", images: ["/og-image.png"] },
}

export default function ProductosPage() {
  return (
    <>
      <PageHero
        path="/productos"
        crumbs={[{ name: "Kodexa", href: "/" }, { name: "Productos" }]}
        eyebrow="Productos Kodexa"
        title="Soluciones propias para tu negocio."
        lead="Más que una web: herramientas para ayudarte a estar online, atender a tus clientes y organizar tu negocio desde un mismo ecosistema."
        actions={
          <>
            <ButtonLink href="#consulta">Quiero saber más</ButtonLink>
            <ButtonLink href="/servicios" variant="secondary">¿Necesitás algo a medida? Ver servicios</ButtonLink>
          </>
        }
      />

      <Section className="!pt-4">
        <div className="wrap grid gap-6 md:grid-cols-2">
          {productList.map((p) => (
            <Link key={p.slug} href={`/productos/${p.slug}`} className="reveal glass glass-lift group flex flex-col p-8 md:p-10">
              <div className="flex items-center justify-between">
                <ProductBadge product={p} />
                <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs font-medium">
                  <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${p.statusTone === "live" ? "bg-emerald-500" : "bg-brand"}`} />
                  {p.status}
                </span>
              </div>
              <h2 className="mt-12 text-4xl font-medium tracking-[-0.03em]">{p.name}</h2>
              <p className="mt-1 text-lg text-ink-soft">{p.tagline}</p>
              <p className="mt-5 flex-1 text-[0.97rem] text-ink-soft">{p.summary}</p>
              <span className="mt-8 inline-flex items-center gap-2 font-medium text-brand-ink">
                {p.cta} <ArrowRight width={17} height={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-mist/50 !py-20">
        <div className="wrap">
          <Eyebrow>Ecosistema</Eyebrow>
          <h2 className="t-h2 mt-5 max-w-3xl">Un solo proveedor. Un ecosistema para tu negocio.</h2>
          <p className="t-lead mt-5 max-w-2xl">
            Tu web hace que te encuentren, Nexo hace que puedan atenderte y Nodo te ayuda a organizar lo que pasa con tus clientes.
          </p>
          <ol className="mt-12 grid gap-4 md:grid-cols-3">
            {ecosystem.map((e, i) => (
              <li key={e.key}>
                <Link href={e.href} className="glass glass-lift flex h-full flex-col p-7">
                  <span className="t-label text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                  <span className="mt-4 text-3xl font-medium tracking-[-0.03em]">{e.name}</span>
                  <span className="mt-2 text-ink">{e.title}</span>
                  <span className="mt-1 text-sm text-ink-soft">{e.hook}</span>
                </Link>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-2xl text-sm text-ink-soft">
            Cada solución funciona de forma independiente. Podés empezar por una y sumar las otras cuando las necesites.
          </p>
        </div>
      </Section>

      <Section id="consulta" className="!py-20">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Contacto</Eyebrow>
            <h2 className="t-h2 mt-5">Contanos qué necesitás.</h2>
            <p className="t-lead mt-5">Te ayudamos a elegir por dónde empezar: Nexo, Nodo o una web a medida.</p>
          </div>
          <ContactForm variant="product" source="productos" defaultProductInterest="unknown" submitLabel="Enviar consulta" />
        </div>
      </Section>
    </>
  )
}
