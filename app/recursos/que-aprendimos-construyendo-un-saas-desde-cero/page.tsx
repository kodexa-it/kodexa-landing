import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbNav } from "@/components/breadcrumb-nav";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ArticleSchema } from "@/components/article-schema";
import { ArticleShare } from "@/components/article-share";

const URL = "https://kodexa.ar/recursos/que-aprendimos-construyendo-un-saas-desde-cero";
const TITLE = "Qué aprendimos construyendo un SaaS desde cero";
const DESCRIPTION =
  "Un vistazo detrás de escena de cómo construimos Nexo, qué decisiones tomamos y qué aprendimos desarrollando un producto SaaS real.";
const OG_IMAGE = "https://kodexa.ar/recursos/que-aprendimos-construyendo-un-saas-og.png";
const STORY_IMAGE = "/recursos/que-aprendimos-construyendo-un-saas-story.png";
const PUBLISHED = "2026-09-08";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "construir un SaaS",
    "cómo desarrollar un SaaS",
    "desarrollo SaaS",
    "crear un SaaS desde cero",
    "MVP SaaS",
    "desarrollo de productos digitales",
  ],
  alternates: {
    canonical: "/recursos/que-aprendimos-construyendo-un-saas-desde-cero",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Kodexa",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Qué aprendimos construyendo un SaaS desde cero — Kodexa",
      },
    ],
    locale: "es_AR",
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Lautaro Aquino"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function SaasLearningsArticle() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Kodexa", url: "https://kodexa.ar" },
          { name: "Recursos", url: "https://kodexa.ar/recursos" },
          { name: TITLE, url: URL },
        ]}
      />
      <ArticleSchema
        headline={TITLE}
        description={DESCRIPTION}
        url={URL}
        image={OG_IMAGE}
        datePublished={PUBLISHED}
      />

      <BreadcrumbNav
        items={[
          { name: "Kodexa", href: "/" },
          { name: "Recursos", href: "/recursos" },
          { name: TITLE },
        ]}
      />

      {/* HERO */}
      <header className="relative px-6 md:px-28 pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-accent/20 blur-[140px] pointer-events-none" />

        <div className="max-w-3xl relative z-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            Recursos / Detrás de escena / Nexo
          </span>

          <h1 className="mt-5 text-[34px] md:text-[58px] leading-[1.02] font-[family-name:var(--font-bebas)]">
            {TITLE}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
            Construir Nexo nos obligó a tomar decisiones sobre producto,
            arquitectura, experiencia de usuario, inteligencia artificial y
            pagos. Esto es parte de lo que fuimos aprendiendo en el camino —
            y todavía estamos aprendiendo.
          </p>

          <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 font-mono">
            <span>Por Lautaro Aquino — Founder, Kodexa</span>
            <span aria-hidden="true">·</span>
            <span>9 min de lectura</span>
          </div>
        </div>
      </header>

      {/* BODY */}
      <article className="max-w-2xl mx-auto px-6 pb-24 text-gray-300 text-lg leading-relaxed">
        <p>
          En Kodexa venimos construyendo sitios y sistemas para otros
          negocios. Nexo nació de una pregunta distinta: ¿qué pasa si
          construimos nuestro propio producto, de punta a punta, en vez de
          solo lo que un cliente nos pide?
        </p>

        <p className="mt-6">
          Nexo es un asistente con inteligencia artificial que aprende cómo
          funciona un negocio y ayuda a atender clientes, responder
          consultas, gestionar reservas y centralizar su información en un
          solo lugar. Podés conocer{" "}
          <Link
            href="/proyectos/nexo"
            className="text-accent underline underline-offset-2"
          >
            el caso de estudio completo de Nexo
          </Link>{" "}
          en nuestro portfolio.
        </p>

        <p className="mt-6 text-gray-400 italic">
          Una aclaración honesta antes de seguir: Nexo todavía está en
          desarrollo. No tiene lanzamiento público todavía, y este texto no
          es la historia de un éxito ya resuelto. Es un registro de las
          decisiones que fuimos tomando mientras lo construíamos, y de lo que
          aprendimos en el camino.
        </p>

        {/* 1 */}
        <h2 className="mt-16 mb-4 text-3xl md:text-4xl font-[family-name:var(--font-bebas)] tracking-tight">
          1. La idea no es el producto
        </h2>
        <p>
          "Un asistente con IA para negocios" es una idea. No es un producto.
          Las herramientas de agenda tradicionales resuelven una parte muy
          chica del problema: guardan turnos. No entienden de qué trata el
          negocio, no pueden responder una consulta y dejan la información
          repartida entre WhatsApp, planillas y la memoria de alguien del
          equipo. Ahí vimos un espacio real: un asistente que además de
          agendar, entienda el negocio y actúe sobre esa información.
        </p>
        <p className="mt-6">
          Convertir esa idea en decisiones concretas —qué construir primero,
          qué dejar afuera, cómo se configura, quién lo va a usar todos los
          días— fue la parte que realmente nos llevó tiempo.
        </p>

        {/* 2 */}
        <h2 className="mt-16 mb-4 text-3xl md:text-4xl font-[family-name:var(--font-bebas)] tracking-tight">
          2. Validar antes de construir todo
        </h2>
        <p>
          No tuvimos una validación de mercado clásica con métricas de
          adquisición — todavía no lanzamos públicamente. Pero sí decidimos,
          desde el principio, no asumir qué necesitaba cada negocio. Por eso
          construimos una herramienta simple de autoevaluación: quien está
          interesado cuenta cómo funciona su negocio y qué quiere mejorar, y
          a partir de esa respuesta entendemos si Nexo tiene sentido para su
          caso y qué plan se ajusta mejor.
        </p>
        <p className="mt-6">
          Es una validación chica, pero real: en vez de suponer, preguntamos.
        </p>

        {/* 3 */}
        <h2 className="mt-16 mb-4 text-3xl md:text-4xl font-[family-name:var(--font-bebas)] tracking-tight">
          3. Diseñar la experiencia antes que el código
        </h2>
        <p>
          La decisión de producto más importante que tomamos con Nexo no fue
          técnica: fue de experiencia. La mayoría de los productos con IA
          agregan un chat en una esquina y le piden al usuario que configure
          todo por formularios aparte. Nosotros dimos vuelta esa lógica:{" "}
          <strong className="text-white">
            hablar con Nexo es configurar Nexo
          </strong>
          . El dueño del negocio le cuenta a Nexo qué hace, qué servicios
          ofrece, sus precios, horarios y políticas — y esa conversación se
          convierte directamente en la configuración real del negocio.
        </p>
        <p className="mt-6">
          Esa decisión cambió todo lo que vino después: la arquitectura, el
          onboarding, incluso qué le pedíamos al modelo de IA que hiciera.
        </p>

        {/* 4 */}
        <h2 className="mt-16 mb-4 text-3xl md:text-4xl font-[family-name:var(--font-bebas)] tracking-tight">
          4. Elegir una arquitectura que pueda crecer
        </h2>
        <p>
          Un SaaS no es una sola aplicación. Es, como mínimo, dos: el
          producto que usa el cliente final, y el sistema interno que el
          propio negocio necesita para operarlo. Nexo está construido sobre
          Next.js y PostgreSQL, con autenticación propia y una arquitectura
          pensada para sostener múltiples negocios, cada uno con su propia
          configuración y sus propios planes.
        </p>
        <p className="mt-6">
          Además del producto en sí, tuvimos que construir un panel de
          administración interno para gestionar planes, leads y códigos
          promocionales. Ese tipo de paneles son, en el fondo,{" "}
          <Link
            href="/servicios/software-a-medida"
            className="text-accent underline underline-offset-2"
          >
            software a medida
          </Link>{" "}
          — nadie los ve desde afuera, pero sin ellos el producto no se puede
          operar como negocio.
        </p>

        {/* 5 */}
        <h2 className="mt-16 mb-4 text-3xl md:text-4xl font-[family-name:var(--font-bebas)] tracking-tight">
          5. Construir el MVP sin sobreingeniería
        </h2>
        <p>
          Fue tentador diseñar un sistema de permisos genérico y flexible
          "para cualquier caso futuro". No lo hicimos. Definimos planes
          concretos —con funcionalidades específicas activadas o no según el
          plan— en vez de construir una capa abstracta de configuración que
          todavía no necesitábamos. El sitio, las reservas y el asistente de
          IA están disponibles desde el plan más simple; funcionalidades como
          WhatsApp con IA, galería de fotos o carta digital se suman en
          planes superiores.
        </p>
        <p className="mt-6">
          Construir menos, pero que ese "menos" funcione de punta a punta, es
          la diferencia entre un MVP real y una demo.
        </p>

        {/* 6 */}
        <h2 className="mt-16 mb-4 text-3xl md:text-4xl font-[family-name:var(--font-bebas)] tracking-tight">
          6. Integrar IA cuando realmente aporta valor
        </h2>
        <p>
          Meter inteligencia artificial en un producto no es agregar un chat.
          Es decidir en qué parte del producto la IA reemplaza una fricción
          real. En Nexo, la IA no es una funcionalidad más: es la forma en
          que el negocio se configura y la forma en que sus clientes reciben
          respuestas. Eso significa entrenarla con información real del
          negocio —servicios, precios, horarios, preguntas frecuentes,
          políticas— y no con respuestas genéricas.
        </p>
        <p className="mt-6">
          Aprendimos que la parte difícil de la IA no es "que responda", sino
          que responda con la información correcta del negocio correcto, sin
          inventar nada.
        </p>

        {/* 7 */}
        <h2 className="mt-16 mb-4 text-3xl md:text-4xl font-[family-name:var(--font-bebas)] tracking-tight">
          7. Los pagos son parte del producto, no un detalle al final
        </h2>
        <p>
          Suscripciones, planes y pagos recurrentes no son un extra que se
          agrega al final: definen la estructura del producto desde el
          principio. Tuvimos que integrar un sistema de pagos que soportara
          suscripciones recurrentes, códigos promocionales y cambios de
          plan, y pensar el producto en función de qué funcionalidad
          corresponde a qué plan — no al revés.
        </p>
        <p className="mt-6">
          Si estás pensando en un{" "}
          <Link
            href="/servicios/mvp"
            className="text-accent underline underline-offset-2"
          >
            producto SaaS propio
          </Link>
          , esta es una de las primeras cosas que conviene definir, no una de
          las últimas.
        </p>

        {/* 8 */}
        <h2 className="mt-16 mb-4 text-3xl md:text-4xl font-[family-name:var(--font-bebas)] tracking-tight">
          8. Lo que cambia cuando te acercás a producción
        </h2>
        <p>
          Aunque Nexo todavía no tiene lanzamiento público, ya sentimos la
          diferencia entre "que funcione" y "que esté listo para operar un
          negocio real". Pagos que no pueden fallar, un panel de soporte para
          resolver problemas de un cliente sin tocar la base de datos a
          mano, códigos promocionales, seguimiento de leads. Ninguna de esas
          cosas es la funcionalidad principal del producto, pero todas son
          necesarias para que exista como negocio y no solo como demo.
        </p>

        {/* 9 */}
        <h2 className="mt-16 mb-4 text-3xl md:text-4xl font-[family-name:var(--font-bebas)] tracking-tight">
          9. Lo que ajustamos sobre la marcha
        </h2>
        <p>
          Si hay algo que revisamos en el camino fue la forma de comunicar el
          producto. La primera versión de la landing de Nexo no explicaba
          bien cuál era el verdadero diferencial, y tuvimos que rediseñarla
          para que quedara claro desde los primeros segundos que hablar con
          Nexo es configurar Nexo. A veces lo que hay que iterar no es el
          código: es cómo explicás lo que construiste.
        </p>

        {/* 10 */}
        <h2 className="mt-16 mb-4 text-3xl md:text-4xl font-[family-name:var(--font-bebas)] tracking-tight">
          10. Qué significa construir un SaaS, en la práctica
        </h2>
        <p>
          Construir un SaaS no es programar una funcionalidad y ponerla
          online. Es tomar decisiones de producto, diseñar una experiencia
          antes de escribir código, elegir una{" "}
          <Link
            href="/servicios/plataformas-digitales"
            className="text-accent underline underline-offset-2"
          >
            arquitectura preparada para varios usuarios y roles
          </Link>
          , usar IA donde realmente resuelve algo, y tratar los pagos y la
          operación como parte del producto desde el día uno. Es, en el
          fondo, la misma lógica que aplicamos cuando construimos productos
          para otros negocios: entender el problema antes que escribir
          código.
        </p>

        <p className="mt-10 text-xl text-white leading-relaxed">
          Construir Nexo nos enseñó algo simple: una buena idea necesita
          mucho más que código para convertirse en producto. Si tenés una
          idea, un proceso que querés digitalizar o un producto que querés
          llevar a producción, podemos ayudarte a construirlo.
        </p>

        <div className="mt-10">
          <a
            href="/#contact"
            className="inline-block bg-accent text-black px-8 py-4 uppercase text-sm tracking-widest hover:scale-[1.02] transition"
          >
            Iniciar Proyecto
          </a>
        </div>
      </article>

      {/* SHARE */}
      <div className="max-w-2xl mx-auto px-6 pb-32">
        <ArticleShare title={TITLE} storyImage={STORY_IMAGE} />
      </div>
    </section>
  );
}
