export type Step = { title: string; text: string; points: string[] }

/** Metodología general del estudio (Home, Estudio y fallback de las páginas de servicio). */
export const method: Step[] = [
  {
    title: "Entendemos",
    text: "Definimos el problema, los objetivos y el alcance antes de diseñar o desarrollar nada.",
    points: ["Objetivos claros", "Análisis del negocio y la competencia", "Alcance y estructura"],
  },
  {
    title: "Diseñamos",
    text: "Convertimos la idea en una experiencia concreta, pensada alrededor de quien la va a usar.",
    points: ["UX/UI centrado en el usuario", "Sistema visual consistente", "Estructura orientada al objetivo"],
  },
  {
    title: "Construimos",
    text: "Desarrollamos con una arquitectura preparada para crecer, no para rehacerse.",
    points: ["Código mantenible", "APIs e integraciones", "Arquitectura escalable"],
  },
  {
    title: "Lanzamos y evolucionamos",
    text: "Probamos, optimizamos y ponemos en producción. Después seguimos mejorando.",
    points: ["Performance y SEO técnico", "Puesta en producción", "Mejora continua"],
  },
]

export const principles = [
  {
    title: "Estructura antes que improvisación",
    text: "Entender el problema, el negocio y a quien lo usa antes de escribir código. Lo que se decide al principio define cuánto cuesta cambiar después.",
  },
  {
    title: "Rendimiento por sobre todo",
    text: "Una solución lenta o frágil no resuelve nada. Velocidad, estabilidad y SEO técnico se trabajan desde el primer día, no al final.",
  },
  {
    title: "Pensado para escalar",
    text: "Construimos con una base que permite sumar secciones, módulos o usuarios sin tener que empezar de nuevo.",
  },
]

/** Stack que Kodexa declara públicamente (ver artículo sobre Nexo y fichas de producto). */
export const stack = ["Next.js", "React", "TypeScript", "PostgreSQL", "APIs e integraciones", "Modelos de lenguaje (IA)"]
