import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { ArticleShare } from "@/components/ui/article-share"
import { ButtonLink } from "@/components/ui/button"
import { JsonLd } from "@/components/seo/json-ld"
import { articles } from "@/lib/content/articles"
import { site } from "@/lib/content/site"

const a = articles[0]
const URL = `${site.url}/recursos/${a.slug}`

export const metadata: Metadata = {
  title: a.title,
  description: a.description,
  keywords: ["construir un SaaS", "cómo desarrollar un SaaS", "desarrollo SaaS", "crear un SaaS desde cero", "MVP SaaS", "desarrollo de productos digitales"],
  alternates: { canonical: `/recursos/${a.slug}` },
  openGraph: {
    title: a.title,
    description: a.description,
    url: URL,
    siteName: site.name,
    images: [{ url: `${site.url}${a.ogImage}`, width: 1200, height: 630, alt: `${a.title} — Kodexa` }],
    locale: site.locale,
    type: "article",
    publishedTime: a.date,
    authors: [site.founder.name],
  },
  twitter: { card: "summary_large_image", title: a.title, description: a.description, images: [`${site.url}${a.ogImage}`] },
}

const link = "font-medium"

export default function SaasLearningsArticle() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: a.title,
          description: a.description,
          image: `${site.url}${a.ogImage}`,
          url: URL,
          datePublished: a.date,
          dateModified: a.date,
          inLanguage: "es-AR",
          mainEntityOfPage: { "@type": "WebPage", "@id": URL },
          author: { "@type": "Person", name: site.founder.name, url: site.url, jobTitle: "Founder" },
          publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: `${site.url}/favicon.png` } },
        }}
      />
      <PageHero
        path={`/recursos/${a.slug}`}
        crumbs={[{ name: "Kodexa", href: "/" }, { name: "Recursos", href: "/recursos" }, { name: "Qué aprendimos construyendo un SaaS" }]}
        eyebrow="Detrás de escena · Nexo"
        title={a.title}
        lead="Construir Nexo nos obligó a tomar decisiones sobre producto, arquitectura, experiencia de usuario, inteligencia artificial y pagos. Esto es parte de lo que fuimos aprendiendo en el camino — y todavía estamos aprendiendo."
      />

      <article className="wrap-narrow prose-kx pb-16 pt-6 text-lg md:pb-24">
        <p className="!mt-0 text-sm text-ink-faint">Por {site.founder.name} — Founder, Kodexa · {a.readingTime} de lectura</p>

        <p>
          En Kodexa venimos construyendo sitios y sistemas para otros negocios. Nexo nació de una pregunta distinta: ¿qué pasa si construimos nuestro propio producto, de punta a punta, en vez de solo lo que un cliente nos pide?
        </p>
        <p>
          Nexo es un asistente con inteligencia artificial que aprende cómo funciona un negocio y ayuda a atender clientes, responder consultas, gestionar reservas y centralizar su información en un solo lugar. Podés conocer <Link href="/productos/nexo" className={link}>la página de Nexo</Link> en nuestros productos.
        </p>
        <p className="italic">
          Una aclaración honesta antes de seguir: Nexo ya está en producción con negocios reales, pero sigue evolucionando, y este texto no es la historia de un éxito ya resuelto. Es un registro de las decisiones que fuimos tomando mientras lo construíamos, y de lo que aprendimos en el camino.
        </p>

        <h2>1. La idea no es el producto</h2>
        <p>
          &quot;Un asistente con IA para negocios&quot; es una idea. No es un producto. Las herramientas de agenda tradicionales resuelven una parte muy chica del problema: guardan turnos. No entienden de qué trata el negocio, no pueden responder una consulta y dejan la información repartida entre WhatsApp, planillas y la memoria de alguien del equipo. Ahí vimos un espacio real: un asistente que además de agendar, entienda el negocio y actúe sobre esa información.
        </p>
        <p>
          Convertir esa idea en decisiones concretas —qué construir primero, qué dejar afuera, cómo se configura, quién lo va a usar todos los días— fue la parte que realmente nos llevó tiempo.
        </p>

        <h2>2. Validar antes de construir todo</h2>
        <p>
          No tuvimos una validación de mercado clásica con métricas de adquisición. Pero sí decidimos, desde el principio, no asumir qué necesitaba cada negocio. Por eso construimos una herramienta simple de autoevaluación: quien está interesado cuenta cómo funciona su negocio y qué quiere mejorar, y a partir de esa respuesta entendemos si Nexo tiene sentido para su caso y qué plan se ajusta mejor.
        </p>
        <p>Es una validación chica, pero real: en vez de suponer, preguntamos.</p>

        <h2>3. Diseñar la experiencia antes que el código</h2>
        <p>
          La decisión de producto más importante que tomamos con Nexo no fue técnica: fue de experiencia. La mayoría de los productos con IA agregan un chat en una esquina y le piden al usuario que configure todo por formularios aparte. Nosotros dimos vuelta esa lógica: <strong>hablar con Nexo es configurar Nexo</strong>. El dueño del negocio le cuenta a Nexo qué hace, qué servicios ofrece, sus precios, horarios y políticas — y esa conversación se convierte directamente en la configuración real del negocio.
        </p>
        <p>Esa decisión cambió todo lo que vino después: la arquitectura, el onboarding, incluso qué le pedíamos al modelo de IA que hiciera.</p>

        <h2>4. Elegir una arquitectura que pueda crecer</h2>
        <p>
          Un SaaS no es una sola aplicación. Es, como mínimo, dos: el producto que usa el cliente final, y el sistema interno que el propio negocio necesita para operarlo. Nexo está construido sobre Next.js y PostgreSQL, con autenticación propia y una arquitectura pensada para sostener múltiples negocios, cada uno con su propia configuración y sus propios planes.
        </p>
        <p>
          Además del producto en sí, tuvimos que construir un panel de administración interno para gestionar planes, leads y códigos promocionales. Ese tipo de paneles son, en el fondo, <Link href="/servicios/software-a-medida" className={link}>software a medida</Link> — nadie los ve desde afuera, pero sin ellos el producto no se puede operar como negocio.
        </p>

        <h2>5. Construir el MVP sin sobreingeniería</h2>
        <p>
          Fue tentador diseñar un sistema de permisos genérico y flexible &quot;para cualquier caso futuro&quot;. No lo hicimos. Definimos planes concretos —con funcionalidades específicas activadas o no según el plan— en vez de construir una capa abstracta de configuración que todavía no necesitábamos. El sitio, las reservas y el asistente de IA están disponibles desde el plan más simple; funcionalidades como WhatsApp con IA, galería de fotos o carta digital se suman en planes superiores.
        </p>
        <p>Construir menos, pero que ese &quot;menos&quot; funcione de punta a punta, es la diferencia entre un MVP real y una demo.</p>

        <h2>6. Integrar IA cuando realmente aporta valor</h2>
        <p>
          Meter inteligencia artificial en un producto no es agregar un chat. Es decidir en qué parte del producto la IA reemplaza una fricción real. En Nexo, la IA no es una funcionalidad más: es la forma en que el negocio se configura y la forma en que sus clientes reciben respuestas. Eso significa entrenarla con información real del negocio —servicios, precios, horarios, preguntas frecuentes, políticas— y no con respuestas genéricas.
        </p>
        <p>
          Aprendimos que la parte difícil de la IA no es &quot;que responda&quot;, sino que responda con la información correcta del negocio correcto, sin inventar nada.
        </p>

        <h2>7. Los pagos son parte del producto, no un detalle al final</h2>
        <p>
          Suscripciones, planes y pagos recurrentes no son un extra que se agrega al final: definen la estructura del producto desde el principio. Tuvimos que integrar un sistema de pagos que soportara suscripciones recurrentes, códigos promocionales y cambios de plan, y pensar el producto en función de qué funcionalidad corresponde a qué plan — no al revés.
        </p>
        <p>
          Si estás pensando en un <Link href="/servicios/mvp" className={link}>producto SaaS propio</Link>, esta es una de las primeras cosas que conviene definir, no una de las últimas.
        </p>

        <h2>8. Lo que cambia cuando te acercás a producción</h2>
        <p>
          Con Nexo en producción y negocios reales operando, sentimos la diferencia entre &quot;que funcione&quot; y &quot;que esté listo para operar un negocio real&quot;. Pagos que no pueden fallar, un panel de soporte para resolver problemas de un cliente sin tocar la base de datos a mano, códigos promocionales, seguimiento de leads. Ninguna de esas cosas es la funcionalidad principal del producto, pero todas son necesarias para que exista como negocio y no solo como demo.
        </p>

        <h2>9. Lo que ajustamos sobre la marcha</h2>
        <p>
          Si hay algo que revisamos en el camino fue la forma de comunicar el producto. La primera versión de la landing de Nexo no explicaba bien cuál era el verdadero diferencial, y tuvimos que rediseñarla para que quedara claro desde los primeros segundos que hablar con Nexo es configurar Nexo. A veces lo que hay que iterar no es el código: es cómo explicás lo que construiste.
        </p>

        <h2>10. Qué significa construir un SaaS, en la práctica</h2>
        <p>
          Construir un SaaS no es programar una funcionalidad y ponerla online. Es tomar decisiones de producto, diseñar una experiencia antes de escribir código, elegir una <Link href="/servicios/plataformas-digitales" className={link}>arquitectura preparada para varios usuarios y roles</Link>, usar IA donde realmente resuelve algo, y tratar los pagos y la operación como parte del producto desde el día uno. Es, en el fondo, la misma lógica que aplicamos cuando construimos productos para otros negocios: entender el problema antes que escribir código.
        </p>

        <p className="!text-xl !text-ink">
          Construir Nexo nos enseñó algo simple: una buena idea necesita mucho más que código para convertirse en producto. Si tenés una idea, un proceso que querés digitalizar o un producto que querés llevar a producción, podemos ayudarte a construirlo.
        </p>

        <div className="mt-10">
          <ButtonLink href="/contacto">Iniciar proyecto</ButtonLink>
        </div>
      </article>

      <div className="wrap-narrow pb-28">
        <ArticleShare title={a.title} storyImage={a.storyImage} />
      </div>
    </>
  )
}
