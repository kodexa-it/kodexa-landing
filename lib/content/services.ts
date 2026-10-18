import type { Step } from "./method"

export type FaqItem = { question: string; answer: string }
type Block = { title: string; text: string }

export type ServiceGroup = "web" | "sistemas" | "productos"

export type Service = {
  slug: string
  group: ServiceGroup
  title: string
  /** Texto corto para tarjetas y listados. */
  summary: string
  /** Para qué se usa / qué objetivo cumple. */
  goal: string
  heroTitle: string
  heroLead: string
  problemTitle: string
  problems: string[]
  audienceTitle?: string
  audience: string[]
  /** Aclaración que deriva a otro servicio cuando no corresponde. */
  audienceNote?: { text: string; linkLabel: string; href: string }
  includesTitle: string
  includes: Block[]
  /** Si falta, se usa la metodología general del estudio. */
  process?: Step[]
  /** Precio inicial publicado hoy en kodexa.ar (vigencia por confirmar). */
  priceFrom?: number
  pricingNote: string
  evidence?: { eyebrow: string; title: string; text: string; href: string; linkLabel: string }
  faq: FaqItem[]
  related: string[]
  ctaTitle: string
  ctaLabel: string
  whatsappMessage: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
}

const faqArgentina: FaqItem = {
  question: "¿Kodexa trabaja con empresas de Argentina?",
  answer: "Sí. Trabajamos con empresas y emprendedores de Argentina, y también de forma remota con clientes de otros países.",
}

export const services: Service[] = [
  {
    slug: "landing-pages",
    group: "web",
    title: "Landing pages",
    summary: "Una página enfocada en presentar un producto, servicio o campaña y convertir visitas en consultas.",
    goal: "Convertir tráfico en consultas",
    heroTitle: "Landing pages que convierten",
    heroLead: "Diseñadas para transformar tráfico en clientes. No son solo páginas: son herramientas de adquisición.",
    problemTitle: "Tener tráfico no alcanza",
    problems: [
      "La web recibe visitas pero casi nadie consulta.",
      "Hay campañas activas que llevan a una página que no está pensada para ellas.",
      "Falta una estructura clara que lleve a la persona hasta el contacto.",
    ],
    audience: ["Negocios que quieren generar consultas", "Quienes están corriendo campañas", "Quienes quieren validar un producto o servicio"],
    includesTitle: "Qué incluye",
    includes: [
      { title: "Estructura orientada a conversión", text: "Un recorrido pensado para llevar la visita hasta la consulta." },
      { title: "Velocidad optimizada", text: "Performance alta para mejorar la experiencia y el SEO." },
      { title: "Formulario y CTA", text: "Puntos de contacto claros y medibles." },
      { title: "Integraciones", text: "Formularios, analytics y campañas listos para usar." },
      { title: "SEO básico", text: "Metadatos y estructura semántica desde el inicio." },
    ],
    priceFrom: 250,
    pricingNote: "El precio final depende del alcance del proyecto.",
    faq: [
      {
        question: "¿Cuánto cuesta una landing page?",
        answer: "Parte desde USD 250. El precio final depende del diseño, las secciones y las integraciones que necesites.",
      },
      {
        question: "¿Qué diferencia hay entre una landing page y un sitio institucional?",
        answer:
          "Una landing page tiene un único objetivo y una sola página, pensada para convertir. Un sitio institucional presenta tu empresa completa en varias páginas.",
      },
      faqArgentina,
    ],
    related: ["desarrollo-web", "institucional", "software-a-medida"],
    ctaTitle: "Tu página puede convertir más",
    ctaLabel: "Hablemos de tu landing",
    whatsappMessage: "Hola Kodexa! Me interesa una landing page. ¿Podemos hablar?",
    metaTitle: "Landing Pages que Convierten",
    metaDescription:
      "Diseño y desarrollo de landing pages enfocadas en conversión para negocios en Argentina. Estructura, velocidad e integraciones pensadas para generar clientes.",
    keywords: ["landing page", "diseño de landing pages", "página de conversión"],
  },
  {
    slug: "institucional",
    group: "web",
    title: "Sitio institucional",
    summary: "Un sitio completo para presentar tu empresa, servicios, información y medios de contacto.",
    goal: "Presentar la empresa completa",
    heroTitle: "Sitio institucional",
    heroLead: "Un sitio completo para presentar tu empresa, tus servicios, tu información y tus medios de contacto.",
    problemTitle: "Una presencia que esté a la altura del negocio",
    problems: [
      "El negocio no tiene web, o la que tiene quedó desactualizada.",
      "La información de servicios y contacto está dispersa.",
      "Quien te busca necesita entender rápido quién sos y cómo contactarte.",
    ],
    audience: ["Empresas que necesitan una presencia digital completa", "Negocios con varios servicios que merecen su propia sección", "Quienes quieren renovar un sitio desactualizado"],
    audienceNote: {
      text: "Si necesitás actualizar el contenido vos mismo o sumar un blog, mirá",
      linkLabel: "Institucional Pro",
      href: "/servicios/institucional-pro",
    },
    includesTitle: "Qué incluye",
    includes: [
      { title: "Múltiples páginas", text: "Secciones propias para cada servicio y para la información de la empresa." },
      { title: "Diseño responsive", text: "Pensado para escritorio, tablet y móvil." },
      { title: "SEO y buenas prácticas", text: "Estructura semántica, velocidad de carga y metadatos por página." },
      { title: "Integración con herramientas externas", text: "Formularios, analytics y las herramientas que ya usás." },
      { title: "Puesta en producción", text: "Deploy y lanzamiento incluidos." },
    ],
    priceFrom: 500,
    pricingNote: "El precio final depende de la cantidad de páginas, el diseño y las integraciones.",
    faq: [
      {
        question: "¿Cuánto cuesta un sitio institucional?",
        answer: "Parte desde USD 500. El precio final depende de la cantidad de páginas, el diseño y las integraciones que necesites.",
      },
      {
        question: "¿Puedo actualizar el contenido yo mismo?",
        answer:
          "El sitio institucional se entrega con el contenido que definimos juntos al construirlo. Si necesitás editar textos, sumar un blog o actualizar contenido con frecuencia, te conviene Institucional Pro.",
      },
      {
        question: "¿Incluye SEO?",
        answer: "Sí, se desarrolla con buenas prácticas de SEO técnico desde el inicio: estructura semántica, velocidad de carga y metadatos por página.",
      },
    ],
    related: ["landing-pages", "institucional-pro", "plataformas-digitales"],
    ctaTitle: "¿Listo para tener el sitio que tu negocio necesita?",
    ctaLabel: "Hablemos de tu sitio",
    whatsappMessage: "Hola Kodexa! Me interesa un sitio institucional para mi empresa. ¿Podemos hablar?",
    metaTitle: "Sitio Institucional",
    metaDescription: "Sitio institucional a medida para tu empresa: múltiples páginas, diseño responsive y SEO. Conocé el alcance y los precios.",
    keywords: ["sitio institucional", "página institucional", "desarrollo web para empresa"],
  },
  {
    slug: "institucional-pro",
    group: "web",
    title: "Institucional Pro",
    summary: "Una web institucional más completa y dinámica, con contenido administrable y blog.",
    goal: "Administrar y hacer crecer el contenido",
    heroTitle: "Institucional Pro",
    heroLead: "Una web institucional más completa y dinámica, pensada para negocios que necesitan administrar y actualizar su contenido.",
    problemTitle: "Una web que se pueda mantener sin depender de un desarrollador",
    problems: [
      "Hay novedades o contenido para publicar con frecuencia.",
      "Cada cambio de texto o imagen obliga a pedirle ayuda a alguien.",
      "El sitio necesita sumar secciones a medida que el negocio crece.",
    ],
    audience: ["Negocios que publican novedades o contenido", "Quienes quieren sumar secciones sin rehacer el sitio", "Equipos que necesitan autonomía sobre su contenido"],
    audienceNote: {
      text: "Si tu proyecto necesita usuarios con cuenta propia o lógica de negocio más allá del contenido, mirá",
      linkLabel: "aplicaciones web",
      href: "/servicios/plataformas-digitales",
    },
    includesTitle: "Qué incluye",
    includes: [
      { title: "Todo lo del sitio institucional", text: "Múltiples páginas, SEO, diseño responsive y puesta en producción." },
      { title: "Contenido administrable", text: "Un panel para actualizar textos e imágenes sin depender de nosotros." },
      { title: "Blog", text: "Para publicar novedades y contenido propio." },
      { title: "Secciones dinámicas", text: "Contenido que se gestiona y se muestra de forma estructurada." },
      { title: "Arquitectura preparada para crecer", text: "Una base para sumar secciones o funcionalidades más adelante." },
    ],
    priceFrom: 900,
    pricingNote: "El precio final depende de las secciones dinámicas, el alcance del panel y las integraciones.",
    faq: [
      {
        question: "¿Qué diferencia hay entre Sitio Institucional e Institucional Pro?",
        answer:
          "El sitio institucional te da una presencia completa de tu empresa. Institucional Pro suma la posibilidad de administrar y actualizar el contenido vos mismo, un blog y secciones dinámicas.",
      },
      {
        question: "¿Cuánto cuesta Institucional Pro?",
        answer: "Parte desde USD 900. El precio final depende de la cantidad de secciones dinámicas, el alcance del panel de administración y las integraciones.",
      },
      {
        question: "¿Cómo administro el contenido?",
        answer: "Con un panel de administración pensado para que puedas actualizar textos, imágenes y publicar en el blog sin depender de nosotros para cada cambio.",
      },
      {
        question: "¿La arquitectura está preparada para crecer?",
        answer: "Sí. Se construye con una base pensada para sumar secciones o funcionalidades más adelante, sin tener que rehacer el sitio.",
      },
    ],
    related: ["institucional", "plataformas-digitales", "software-a-medida"],
    ctaTitle: "¿Listo para tener el sitio que tu negocio necesita?",
    ctaLabel: "Hablemos de tu sitio",
    whatsappMessage: "Hola Kodexa! Me interesa un sitio institucional Pro, con contenido administrable. ¿Podemos hablar?",
    metaTitle: "Institucional Pro",
    metaDescription: "Sitio institucional con contenido administrable, blog y secciones dinámicas. Una web preparada para crecer con tu negocio.",
    keywords: ["sitio institucional con blog", "web con contenido administrable", "CMS para empresa"],
  },
  {
    slug: "desarrollo-web",
    group: "web",
    title: "Desarrollo web a medida",
    summary: "Sitios y aplicaciones web diseñados para tu negocio, no plantillas genéricas.",
    goal: "Visión general de nuestro trabajo web",
    heroTitle: "Desarrollo web a medida",
    heroLead:
      "Diseñamos y desarrollamos sitios web pensados para tu negocio, no plantillas genéricas. Cada proyecto se construye con foco en conversión, velocidad y una base sólida para crecer.",
    problemTitle: "Qué resolvemos",
    problems: [
      "Emprendedores que necesitan una primera presencia digital.",
      "Empresas con un sitio desactualizado que quieren renovarlo.",
      "Negocios que quieren vender online o generar más consultas desde internet.",
    ],
    audience: ["Emprendedores que arrancan", "Empresas que renuevan su web", "Negocios que quieren generar consultas online"],
    audienceNote: {
      text: "Si tu proyecto necesita usuarios con cuenta propia, paneles o lógica de negocio, mirá",
      linkLabel: "plataformas y aplicaciones web",
      href: "/servicios/plataformas-digitales",
    },
    includesTitle: "Qué incluye",
    includes: [
      { title: "Diseño a medida", text: "No usamos plantillas genéricas." },
      { title: "Desarrollo responsive", text: "Funciona en todos los dispositivos." },
      { title: "SEO técnico", text: "Buenas prácticas desde el inicio." },
      { title: "Formularios, analytics y campañas", text: "Integración con las herramientas del negocio." },
      { title: "Deploy y puesta en producción", text: "Incluidos en el proyecto." },
    ],
    process: [
      { title: "Entendemos", text: "Definimos objetivos, alcance y contenido.", points: [] },
      { title: "Diseñamos", text: "Estructura y diseño orientados a conversión.", points: [] },
      { title: "Construimos", text: "Desarrollo con buenas prácticas y SEO técnico.", points: [] },
      { title: "Lanzamos", text: "Deploy, pruebas y puesta en producción.", points: [] },
    ],
    priceFrom: 250,
    pricingNote: "El precio final depende del alcance del proyecto.",
    faq: [
      {
        question: "¿Cuánto cuesta desarrollar una página web?",
        answer:
          "Depende del alcance. Una landing page parte desde USD 250. Un sitio institucional con más secciones, contenido e integraciones parte desde USD 500. El precio final se define según la cantidad de páginas, el diseño y las integraciones.",
      },
      {
        question: "¿Cuánto tarda el desarrollo de un sitio web?",
        answer:
          "Una landing page suele estar lista en pocas semanas. Un sitio institucional con más contenido puede tomar algo más de tiempo, sobre todo si depende de que nos envíes textos e imágenes definitivas.",
      },
      {
        question: "¿Qué diferencia hay entre un sitio web y una aplicación web?",
        answer:
          "Un sitio web comunica tu propuesta y busca convertir visitas en clientes o consultas. Una aplicación web va un paso más allá: usuarios que inician sesión, paneles propios y lógica de negocio.",
      },
      faqArgentina,
    ],
    related: ["landing-pages", "institucional", "institucional-pro"],
    ctaTitle: "¿Listo para tener el sitio que tu negocio necesita?",
    ctaLabel: "Hablemos de tu proyecto",
    whatsappMessage: "Hola Kodexa! Me interesa desarrollar un sitio web. ¿Podemos hablar?",
    metaTitle: "Desarrollo Web a Medida",
    metaDescription:
      "Desarrollo web a medida para empresas y emprendedores: sitios institucionales y aplicaciones web diseñados para convertir visitas en clientes.",
    keywords: ["desarrollo web", "desarrollo web a medida", "sitios web", "diseño y desarrollo web"],
  },
  {
    slug: "software-a-medida",
    group: "sistemas",
    title: "Software y sistemas a medida",
    summary: "Sistemas adaptados a tus procesos para centralizar información y automatizar tareas.",
    goal: "Ordenar y automatizar la operación",
    heroTitle: "Software y sistemas a medida",
    heroLead:
      "Sistemas adaptados a los procesos reales de tu empresa, para centralizar información, automatizar tareas repetitivas y ganar eficiencia.",
    problemTitle: "Qué problemas resuelve",
    problems: [
      "Información dispersa en planillas o herramientas sueltas.",
      "Tareas manuales que se repiten todas las semanas.",
      "Herramientas genéricas que no se adaptan a tu operación.",
      "Falta de visibilidad clara sobre el negocio.",
    ],
    audience: [
      "Empresas que gestionan clientes, pedidos, turnos o inventario de forma manual",
      "Negocios que crecieron y necesitan un sistema propio en lugar de herramientas genéricas",
    ],
    audienceNote: {
      text: "Si además necesitás que clientes o usuarios externos accedan con su propia cuenta, mirá",
      linkLabel: "plataformas y aplicaciones web",
      href: "/servicios/plataformas-digitales",
    },
    includesTitle: "Qué incluye",
    includes: [
      { title: "Panel de gestión (ABM)", text: "Alta, baja y modificación de la información de tu negocio." },
      { title: "Automatización de procesos", text: "Menos tareas manuales repetitivas." },
      { title: "Integración con APIs", text: "Conexión con las herramientas que ya usás." },
      { title: "Arquitectura escalable", text: "Preparada para sumar módulos a futuro." },
    ],
    priceFrom: 900,
    pricingNote: "El presupuesto final depende de la cantidad de módulos e integraciones.",
    evidence: {
      eyebrow: "Con la misma lógica",
      title: "Nexo se construyó así",
      text: "El panel interno de Nexo —planes, leads, códigos promocionales— es software a medida: nadie lo ve desde afuera, pero sin él el producto no se puede operar.",
      href: "/recursos/que-aprendimos-construyendo-un-saas-desde-cero",
      linkLabel: "Leer qué aprendimos",
    },
    faq: [
      {
        question: "¿Cuánto cuesta desarrollar un sistema a medida?",
        answer:
          "Los sistemas de gestión con panel de administración (ABM) parten desde USD 900. Proyectos con más módulos, integraciones o lógica propia requieren un presupuesto definido según el alcance.",
      },
      {
        question: "¿Qué diferencia hay entre software a medida y software estándar?",
        answer:
          "El software estándar (una planilla, un CRM genérico) sirve para procesos comunes, pero obliga a tu negocio a adaptarse a la herramienta. El software a medida se construye alrededor de cómo trabaja tu empresa.",
      },
      {
        question: "¿Cuánto tiempo lleva desarrollar un sistema a medida?",
        answer:
          "Depende de la cantidad de módulos y de las integraciones necesarias. Un sistema de gestión simple toma menos tiempo que una plataforma con múltiples roles, permisos e integraciones externas.",
      },
      faqArgentina,
    ],
    related: ["plataformas-digitales", "mvp", "institucional-pro"],
    ctaTitle: "¿Tu negocio necesita un sistema propio?",
    ctaLabel: "Hablemos de tu sistema",
    whatsappMessage: "Hola Kodexa! Me interesa desarrollar un sistema a medida. ¿Podemos hablar?",
    metaTitle: "Desarrollo de Software y Sistemas a Medida",
    metaDescription:
      "Software y sistemas a medida adaptados a los procesos de tu empresa: paneles de gestión, automatización e integraciones por API.",
    keywords: ["software a medida", "sistemas a medida", "desarrollo de software a medida"],
  },
  {
    slug: "plataformas-digitales",
    group: "sistemas",
    title: "Plataformas y aplicaciones web",
    summary: "Aplicaciones web con usuarios, roles y lógica propia para negocios que necesitan más que un sitio.",
    goal: "Ofrecer un servicio digital con usuarios",
    heroTitle: "Plataformas y aplicaciones web",
    heroLead:
      "Aplicaciones web con lógica propia para negocios que necesitan más que un sitio: usuarios, contenido dinámico y funcionalidades específicas.",
    problemTitle: "Cuando un sitio informativo no alcanza",
    problems: [
      "Tus clientes necesitan iniciar sesión para usar el servicio.",
      "Hay roles de usuario con permisos diferenciados.",
      "Un sistema interno puede convertirse en un producto para terceros.",
    ],
    audience: [
      "Negocios que necesitan que sus clientes inicien sesión",
      "Empresas que quieren ofrecer un servicio digital propio",
      "Equipos con un sistema interno que quieren convertir en producto",
      "Proyectos con roles de usuario diferenciados",
    ],
    includesTitle: "Qué incluye",
    includes: [
      { title: "Autenticación y roles", text: "Usuarios con permisos según lo que corresponda a cada uno." },
      { title: "Paneles administrables", text: "Para gestionar el contenido y la operación." },
      { title: "Suscripciones y pagos", text: "Cuando el proyecto lo requiere." },
      { title: "Arquitectura multiusuario", text: "Preparada para escalar." },
    ],
    pricingNote: "Definimos el alcance y el presupuesto después de entender tu proyecto.",
    evidence: {
      eyebrow: "Producto propio",
      title: "Nexo, una plataforma de Kodexa",
      text: "Nexo es una plataforma con autenticación, panel de administración y suscripciones que desarrollamos internamente. Es la mejor evidencia de lo que podemos construir.",
      href: "/productos/nexo",
      linkLabel: "Conocer Nexo",
    },
    faq: [
      {
        question: "¿Qué es una plataforma digital?",
        answer:
          "Es una aplicación web con lógica propia: usuarios que inician sesión, roles y permisos, contenido dinámico y funcionalidades específicas para tu negocio. Va más allá de un sitio informativo.",
      },
      {
        question: "¿Cuánto cuesta desarrollar una aplicación web?",
        answer:
          "No hay un precio único: depende de la cantidad de funcionalidades, roles de usuario e integraciones. Definimos el presupuesto según el alcance real, después de entender qué necesitás construir.",
      },
      {
        question: "¿En qué se diferencia de un sistema a medida?",
        answer:
          "Un sistema a medida suele ser una herramienta interna para tu equipo. Una plataforma generalmente involucra usuarios externos —clientes, proveedores o el público— con su propia cuenta.",
      },
      faqArgentina,
    ],
    related: ["software-a-medida", "mvp", "institucional-pro"],
    ctaTitle: "¿Tenés en mente una plataforma o aplicación propia?",
    ctaLabel: "Hablemos de tu plataforma",
    whatsappMessage: "Hola Kodexa! Estoy evaluando desarrollar una plataforma o aplicación web. ¿Podemos hablar?",
    metaTitle: "Desarrollo de Plataformas y Aplicaciones Web",
    metaDescription:
      "Plataformas y aplicaciones web a medida con usuarios, roles, paneles de gestión y arquitectura preparada para escalar.",
    keywords: ["plataformas digitales", "aplicaciones web a medida", "desarrollo de aplicaciones web"],
  },
  {
    slug: "mvp",
    group: "productos",
    title: "MVP y productos SaaS",
    summary: "Desarrollo de tu producto digital desde cero, para validar una idea y lanzarla al mercado.",
    goal: "Pasar de la idea a un producto funcional",
    heroTitle: "MVP y productos SaaS",
    heroLead: "Convertimos una idea de negocio en un producto digital real, validable y con una base técnica sólida para seguir creciendo.",
    problemTitle: "De la idea a algo que se pueda probar",
    problems: [
      "Hay una idea de negocio digital sin un producto que validar.",
      "Se quiere probar con usuarios reales antes de invertir en construir todo.",
      "Un proceso interno podría convertirse en un producto.",
    ],
    audience: [
      "Emprendedores con una idea de negocio digital",
      "Equipos que quieren validar un producto antes de escalarlo",
      "Negocios que quieren convertir un proceso interno en un producto SaaS",
    ],
    includesTitle: "Qué incluye",
    includes: [
      { title: "De la idea a un producto funcional", text: "Definimos qué entra en la primera versión y la construimos de punta a punta." },
      { title: "Arquitectura para iterar", text: "Una base preparada para cambiar y crecer." },
      { title: "Suscripciones, pagos y paneles", text: "Parte de la estructura del producto desde el inicio." },
      { title: "Alcance y presupuesto a medida", text: "Se definen según lo que necesite la primera versión." },
    ],
    pricingNote: "Definimos el alcance de la primera versión y el presupuesto según lo que necesite tu producto.",
    evidence: {
      eyebrow: "Producto propio",
      title: "Nexo: un SaaS que construimos nosotros",
      text: "Nexo es un asistente con inteligencia artificial para negocios, ya en producción. Es la prueba de que sabemos construir un producto SaaS de punta a punta, no solo sitios web.",
      href: "/productos/nexo",
      linkLabel: "Conocer Nexo",
    },
    faq: [
      {
        question: "¿Qué es un MVP y cuándo conviene desarrollar uno?",
        answer:
          "Un MVP (producto mínimo viable) es la primera versión funcional de un producto, con lo justo y necesario para validar una idea de negocio con usuarios reales antes de invertir en construir todo.",
      },
      {
        question: "¿Cuánto cuesta desarrollar un SaaS?",
        answer:
          "No hay un precio fijo: un SaaS involucra suscripciones, paneles de usuario y una arquitectura que tiene que sostenerse en el tiempo. Definimos el presupuesto según las funcionalidades de la primera versión.",
      },
      {
        question: "¿Kodexa tiene experiencia desarrollando productos propios?",
        answer: "Sí. Nexo es un producto SaaS propio de Kodexa, en producción, con inteligencia artificial, integración con WhatsApp y sistema de suscripciones.",
      },
      faqArgentina,
    ],
    related: ["plataformas-digitales", "software-a-medida"],
    ctaTitle: "¿Tenés una idea que querés convertir en producto?",
    ctaLabel: "Hablemos de tu idea",
    whatsappMessage: "Hola Kodexa! Quiero desarrollar un MVP o producto SaaS. ¿Podemos hablar?",
    metaTitle: "Desarrollo de MVP y Productos SaaS",
    metaDescription: "Desarrollo de MVP y productos SaaS: de una idea de negocio a un producto digital funcional y preparado para crecer.",
    keywords: ["desarrollo de MVP", "desarrollo SaaS", "producto digital desde cero"],
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)

export const groupMeta: Record<ServiceGroup, { title: string; text: string }> = {
  web: {
    title: "Presencia web",
    text: "Landing pages y sitios institucionales para presentar tu negocio y generar consultas.",
  },
  sistemas: {
    title: "Sistemas y aplicaciones",
    text: "Herramientas que ordenan la operación o que ofrecen un servicio digital con usuarios propios.",
  },
  productos: {
    title: "Productos digitales",
    text: "De una idea a un producto funcional, preparado para validarse y evolucionar.",
  },
}
