import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ContactSection } from "@/components/contact-section";
import { EcosystemFlow } from "@/components/ecosystem-flow";
import { ProductHero, ProductSection } from "@/components/product-blocks";
import { TrackedLink } from "@/components/tracked-link";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Soluciones digitales para negocios",
  description:
    "Nexo, tu asistente digital, y Nodo, tu CRM: soluciones de Kodexa para estar online, atender a tus clientes y organizar tu negocio desde un mismo ecosistema.",
  alternates: { canonical: "/productos" },
  openGraph: {
    title: "Soluciones digitales para negocios | Kodexa",
    description:
      "Nexo (asistente digital) y Nodo (CRM): herramientas para atender a tus clientes y organizar tu negocio.",
    url: "https://kodexa.ar/productos",
    siteName: "Kodexa",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Productos de Kodexa" },
    ],
    locale: "es_AR",
    type: "website",
  },
};

const cards = [products.nexo, products.nodo];

export default function ProductosPage() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Kodexa", url: "https://kodexa.ar" },
          { name: "Productos", url: "https://kodexa.ar/productos" },
        ]}
      />
      <BreadcrumbNav items={[{ name: "Kodexa", href: "/" }, { name: "Productos" }]} />

      <ProductHero
        eyebrow="Productos Kodexa"
        title="Soluciones digitales para tu negocio"
        description="Más que una web. Desarrollamos herramientas para ayudarte a estar online, atender a tus clientes y organizar tu negocio desde un mismo ecosistema."
        product="ecosistema"
        ctaLabel="Quiero saber más"
        secondary={{ label: "¿Necesitás algo a medida? Ver servicios", href: "/#servicios" }}
      />

      {/* PRODUCTOS */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col border border-white/10 rounded-xl p-8 bg-white/[0.02] hover:border-accent/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-md flex items-center justify-center text-xs font-mono">
                  {p.badge}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
                  Producto Kodexa
                </span>
              </div>
              <h2 className="mt-6 text-4xl font-[family-name:var(--font-bebas)] group-hover:text-accent transition-colors">
                {p.name.toUpperCase()}
              </h2>
              <p className="mt-1 text-gray-200">{p.tagline}</p>
              <p className="mt-4 flex-1 text-sm text-gray-400 leading-relaxed">
                {p.description}
              </p>
              <TrackedLink
                href={p.href}
                event="product_cta_click"
                eventProps={{ location: "productos", product: p.name.toLowerCase() }}
                className="mt-8 self-start inline-block border border-accent/50 text-accent px-6 py-3 text-[11px] font-mono uppercase tracking-widest hover:bg-accent hover:text-black transition"
              >
                {p.cta}
              </TrackedLink>
            </article>
          ))}
        </div>
      </div>

      {/* ECOSISTEMA */}
      <ProductSection
        title="Un solo proveedor. Un ecosistema para tu negocio."
        intro="Tu web hace que te encuentren, Nexo hace que puedan atenderte y Nodo te ayuda a organizar lo que pasa con tus clientes."
      >
        <EcosystemFlow />
      </ProductSection>

      <div className="mt-32 bg-background">
        <ContactSection
          variant="product"
          source="productos"
          defaultProductInterest="unknown"
          eyebrow="Contacto"
          title={
            <>
              CONTANOS QUÉ <span className="text-accent">NECESITÁS</span>
            </>
          }
          description="Te ayudamos a elegir por dónde empezar: Nexo, Nodo o una web a medida."
          submitLabel="Enviar consulta"
        />
      </div>
    </section>
  );
}
