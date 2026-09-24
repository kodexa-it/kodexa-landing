import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ContactSection } from "@/components/contact-section";
import { EcosystemFlow } from "@/components/ecosystem-flow";
import { RelatedLinks } from "@/components/related-links";
import {
  InfoCards,
  ProductHero,
  ProductSection,
  Steps,
} from "@/components/product-blocks";

export const metadata: Metadata = {
  title: "Nexo | Asistente digital para negocios",
  description:
    "Nexo es el asistente digital de Kodexa: atiende a tus clientes por WhatsApp, responde consultas y gestiona reservas con la información real de tu negocio.",
  keywords: [
    "asistente digital para negocios",
    "asistente con inteligencia artificial",
    "atención por WhatsApp",
    "reservas online",
    "Nexo",
  ],
  alternates: { canonical: "/productos/nexo" },
  openGraph: {
    title: "Nexo | Asistente digital para negocios | Kodexa",
    description:
      "Atendé a tus clientes y gestioná reservas por WhatsApp con un asistente que conoce tu negocio.",
    url: "https://kodexa.ar/productos/nexo",
    siteName: "Kodexa",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Nexo, asistente digital de Kodexa" },
    ],
    locale: "es_AR",
    type: "website",
  },
};

const benefits = [
  {
    title: "Menos tiempo respondiendo lo mismo",
    text: "Nexo responde las consultas frecuentes con la información de tu negocio, para que vos te dediques a atender.",
  },
  {
    title: "Reservas sin coordinar a mano",
    text: "Los clientes reservan según tu disponibilidad real, por WhatsApp o desde tu sitio, sin idas y vueltas.",
  },
  {
    title: "Todo en un solo lugar",
    text: "Servicios, horarios, reservas y conversaciones centralizados, no repartidos entre chats y planillas.",
  },
  {
    title: "Vos tenés el control",
    text: "Podés pausar el asistente en cualquier conversación, tomar el control y revisar cada cambio que propone antes de aplicarlo.",
  },
];

const steps = [
  {
    title: "Contale cómo funciona tu negocio",
    text: "Conversás con Nexo para cargar tus servicios, horarios y preguntas frecuentes. Vos confirmás lo que se guarda.",
  },
  {
    title: "Conectá tu WhatsApp",
    text: "Vinculás tu número con un código QR y Nexo empieza a responder a tus clientes.",
  },
  {
    title: "Nexo atiende y gestiona reservas",
    text: "Responde consultas, agenda turnos con tu disponibilidad y te avisa cuando hace falta que intervenga una persona.",
  },
];

const features = [
  {
    title: "Asistente conversacional con IA",
    text: "Entrenado con la información propia de cada negocio, con tono y personalidad configurables.",
  },
  {
    title: "Integración con WhatsApp",
    text: "El canal donde ya están tus clientes, con historial de conversaciones y respuesta manual cuando la necesites.",
  },
  {
    title: "Gestión de reservas y turnos",
    text: "Horarios, servicios y recursos (canchas, salas, profesionales) con disponibilidad calculada automáticamente.",
  },
  {
    title: "Señas y comprobantes",
    text: "Pedí una seña para confirmar el turno y revisá los comprobantes desde el mismo panel.",
  },
  {
    title: "Sitio público con reserva online",
    text: "Una página de tu negocio, con widget de reservas, generada a partir de tus datos.",
  },
  {
    title: "Carta digital con QR",
    text: "Subí tu carta en PDF y compartila con un código QR.",
  },
  {
    title: "Panel de administración",
    text: "Turnos, estadísticas y notificaciones para gestionar el negocio desde un solo lugar.",
  },
  {
    title: "Planes y suscripción",
    text: "Planes de pago con Mercado Pago para empezar de forma simple.",
  },
];

export default function NexoPage() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Kodexa", url: "https://kodexa.ar" },
          { name: "Productos", url: "https://kodexa.ar/productos" },
          { name: "Nexo", url: "https://kodexa.ar/productos/nexo" },
        ]}
      />
      <BreadcrumbNav
        items={[
          { name: "Kodexa", href: "/" },
          { name: "Productos", href: "/productos" },
          { name: "Nexo" },
        ]}
      />

      <ProductHero
        eyebrow="Producto Kodexa"
        title={
          <>
            Nexo: tu asistente digital para atender y{" "}
            <span className="text-accent">gestionar tu negocio</span>
          </>
        }
        description="Una solución de Kodexa para mejorar y automatizar la atención de tu negocio. Nexo aprende cómo trabajás y ayuda a atender clientes, responder consultas y gestionar reservas."
        product="nexo"
        ctaLabel="Quiero conocer Nexo"
      />

      {/* PROBLEMA / SOLUCIÓN */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-[family-name:var(--font-bebas)]">
            El problema
          </h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            Muchos negocios pierden tiempo respondiendo las mismas preguntas,
            gestionando reservas manualmente y con su información repartida
            entre WhatsApp, planillas y la memoria de alguien del equipo.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-[family-name:var(--font-bebas)]">
            La solución
          </h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            Nexo centraliza esa operación en un asistente que conoce tu negocio:
            atiende a tus clientes por WhatsApp, responde consultas y gestiona
            las reservas, con un panel de administración para tenerlo todo
            bajo control.
          </p>
        </div>
      </div>

      <ProductSection title="Beneficios para tu negocio">
        <InfoCards items={benefits} />
      </ProductSection>

      <ProductSection title="Cómo funciona">
        <Steps items={steps} />
      </ProductSection>

      <ProductSection title="Funcionalidades">
        <InfoCards items={features} />
      </ProductSection>

      <ProductSection
        title="Parte de un ecosistema"
        intro="Nexo funciona por sí solo. Si además tenés Nodo, las reservas que entran por Nexo se convierten en leads dentro de tu CRM, y tu web puede ser el punto de partida."
      >
        <EcosystemFlow compact />
      </ProductSection>

      <div className="mt-24 max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs text-gray-500 leading-relaxed">
          Construido sobre Next.js y PostgreSQL, con modelos de lenguaje para
          el asistente conversacional y una integración directa con WhatsApp.
          La arquitectura está pensada para sostener suscripciones, múltiples
          negocios y crecimiento a largo plazo.
        </p>
      </div>

      <RelatedLinks
        title="¿Necesitás algo a medida?"
        items={[
          {
            label: "MVP y Productos SaaS",
            description: "El servicio con el que construimos productos como Nexo.",
            href: "/servicios/mvp",
          },
          {
            label: "Plataformas y Aplicaciones Web",
            description: "La base técnica de un producto con usuarios y roles.",
            href: "/servicios/plataformas-digitales",
          },
          {
            label: "Software y Sistemas a Medida",
            description: "Si tu idea nace para resolver un proceso interno.",
            href: "/servicios/software-a-medida",
          },
        ]}
      />

      <div className="mt-32 bg-background">
        <ContactSection
          variant="product"
          source="productos-nexo"
          defaultProductInterest="nexo"
          eyebrow="Contacto"
          title={
            <>
              QUIERO CONOCER <span className="text-accent">NEXO</span>
            </>
          }
          description="Contanos cómo es tu negocio y cómo atendés hoy a tus clientes. Te mostramos cómo podría ayudarte Nexo."
          submitLabel="Quiero conocer Nexo"
        />
      </div>
    </section>
  );
}
