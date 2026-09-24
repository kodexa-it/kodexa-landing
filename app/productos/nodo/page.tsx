import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ContactSection } from "@/components/contact-section";
import { EcosystemFlow } from "@/components/ecosystem-flow";
import {
  InfoCards,
  ProductHero,
  ProductSection,
  Steps,
} from "@/components/product-blocks";

export const metadata: Metadata = {
  title: "Nodo | CRM para negocios",
  description:
    "Nodo es el CRM de Kodexa: organizá clientes, leads y oportunidades, y hacé seguimiento comercial con tareas y toda la información en un solo lugar.",
  keywords: [
    "CRM para negocios",
    "CRM para pymes",
    "gestión de clientes",
    "seguimiento de leads",
    "Nodo",
  ],
  alternates: { canonical: "/productos/nodo" },
  openGraph: {
    title: "Nodo | CRM para negocios | Kodexa",
    description:
      "El CRM para organizar y gestionar tus clientes, leads y oportunidades.",
    url: "https://kodexa.ar/productos/nodo",
    siteName: "Kodexa",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Nodo, CRM de Kodexa" },
    ],
    locale: "es_AR",
    type: "website",
  },
};

const capabilities = [
  {
    title: "Clientes",
    text: "Contactos y empresas con su información y su historial en un solo lugar.",
  },
  {
    title: "Leads",
    text: "Registrá cada consulta o prospecto y sabé de dónde llegó.",
  },
  {
    title: "Oportunidades",
    text: "Seguí cada posible venta a lo largo de las etapas de tu proceso comercial.",
  },
  {
    title: "Seguimiento",
    text: "Actividad y recordatorios para retomar cada conversación a tiempo.",
  },
  {
    title: "Tareas",
    text: "Organizá lo que hay que hacer con cada cliente y no dejes nada librado a la memoria.",
  },
  {
    title: "Información comercial",
    text: "Etiquetas, estados y campos personalizados para adaptar el CRM a cómo trabaja tu negocio.",
  },
];

const steps = [
  {
    title: "Reuní tus contactos",
    text: "Cargá tus clientes y leads o importalos, en lugar de tenerlos repartidos en planillas y chats.",
  },
  {
    title: "Organizá tu proceso comercial",
    text: "Ordená las oportunidades por etapas y sabé en qué punto está cada una.",
  },
  {
    title: "Hacé seguimiento",
    text: "Usá tareas y recordatorios para que ninguna consulta quede sin respuesta.",
  },
];

export default function NodoPage() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Kodexa", url: "https://kodexa.ar" },
          { name: "Productos", url: "https://kodexa.ar/productos" },
          { name: "Nodo", url: "https://kodexa.ar/productos/nodo" },
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Kodexa", href: "/" },
          { name: "Productos", href: "/productos" },
          { name: "Nodo" },
        ]}
      />

      <ProductHero
        eyebrow="Producto Kodexa"
        title={
          <>
            Nodo: el CRM para organizar y{" "}
            <span className="text-accent">gestionar tus clientes</span>
          </>
        }
        description="Centralizá clientes, leads y oportunidades en un solo lugar y hacé seguimiento de cada conversación comercial sin que nada se pierda."
        product="nodo"
        ctaLabel="Quiero conocer Nodo"
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-[family-name:var(--font-bebas)]">
            El problema
          </h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            Las consultas llegan por WhatsApp, mail y redes, y el seguimiento
            vive en planillas, notas sueltas o en la memoria de alguien del
            equipo. Cuando crece el volumen, se pierden oportunidades.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-[family-name:var(--font-bebas)]">
            La solución
          </h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            Nodo reúne toda la información comercial de tu negocio y te ayuda a
            saber con quién hablar, qué sigue y qué quedó pendiente.
          </p>
        </div>
      </div>

      <ProductSection title="Qué podés organizar con Nodo">
        <InfoCards items={capabilities} columns={3} />
      </ProductSection>

      <ProductSection title="Cómo funciona">
        <Steps items={steps} />
      </ProductSection>

      <ProductSection
        title="Parte de un ecosistema"
        intro="Nodo funciona por sí solo. Si además usás Nexo, las reservas que entran por el asistente se convierten en leads dentro de tu CRM, con su origen identificado."
      >
        <EcosystemFlow compact />
      </ProductSection>

      <div className="mt-32 bg-background">
        <ContactSection
          variant="product"
          source="productos-nodo"
          defaultProductInterest="nodo"
          eyebrow="Contacto"
          title={
            <>
              QUIERO CONOCER <span className="text-accent">NODO</span>
            </>
          }
          description="Contanos cómo hacés hoy el seguimiento de tus clientes. Te mostramos cómo podría ayudarte Nodo."
          submitLabel="Quiero conocer Nodo"
        />
      </div>
    </section>
  );
}
