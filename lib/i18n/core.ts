/**
 * Núcleo de i18n: sin dependencias de Next ni de React, para poder probarlo con `node --test`.
 *
 * Modelo de rutas
 * - Las rutas "canónicas internas" son las de siempre, en español: `/servicios/desarrollo-web`.
 *   El árbol de `app/[lang]/…` usa esos nombres de carpeta.
 * - Español (`es`): URL pública sin prefijo → idéntica a la actual (no se rompe ningún enlace indexado).
 * - Inglés (`en`): URL pública con prefijo `/en` y segmentos en inglés: `/en/services/web-development`.
 * - `proxy.ts` traduce de URL pública a ruta interna (rewrite) y canonicaliza lo demás (redirect).
 */

export const locales = ["es", "en"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "es"
export const LANG_COOKIE = "kx_lang"
/** 1 año. La cookie solo se escribe cuando la persona elige idioma manualmente. */
export const LANG_COOKIE_MAX_AGE = 60 * 60 * 24 * 365

export const localeMeta: Record<Locale, { label: string; short: string; hreflang: string; ogLocale: string; htmlLang: string }> = {
  es: { label: "Español", short: "ES", hreflang: "es", ogLocale: "es_AR", htmlLang: "es-AR" },
  en: { label: "English", short: "EN", hreflang: "en", ogLocale: "en_US", htmlLang: "en" },
}

export function isLocale(v: unknown): v is Locale {
  return typeof v === "string" && (locales as readonly string[]).includes(v)
}

/* ───────────────────────── Detección ───────────────────────── */

/**
 * Elige idioma a partir de `Accept-Language`.
 * Recorre los idiomas por prioridad (q) y devuelve el primero soportado (`en`, `en-US`, `en-GB`, `es`, `es-AR`, `es-ES`…).
 * Si ninguno es soportado (o el header falta/está mal formado) → español.
 */
export function pickLocale(acceptLanguage: string | null | undefined): Locale {
  if (!acceptLanguage) return defaultLocale
  const parsed = acceptLanguage
    .split(",")
    .slice(0, 20)
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(";")
      const qParam = params.map((p) => p.trim()).find((p) => p.startsWith("q="))
      const q = qParam ? Number(qParam.slice(2)) : 1
      return { tag: tag.trim().toLowerCase(), q: Number.isFinite(q) ? q : 0, index }
    })
    .filter((x) => x.tag && x.tag !== "*" && x.q > 0)
    .sort((a, b) => b.q - a.q || a.index - b.index)

  for (const { tag } of parsed) {
    const primary = tag.split("-")[0]
    if (isLocale(primary)) return primary
  }
  return defaultLocale
}

/** Rastreadores y previsualizadores: nunca se les redirige por idioma; ven la URL que pidieron. */
const BOT_RE = /bot|crawl|spider|slurp|bing|google|yandex|baidu|duckduck|facebookexternalhit|facebot|twitter|linkedin|whatsapp|telegram|slack|discord|pinterest|embedly|preview|lighthouse|headless|curl|wget|python-requests|node-fetch/i
export function isBot(userAgent: string | null | undefined): boolean {
  // Sin user-agent: se trata como bot (no hay persona detrás a quien redirigir).
  return !userAgent || BOT_RE.test(userAgent)
}

/* ───────────────────────── Rutas ───────────────────────── */

/** Segmento interno (español) → segmento público en inglés. */
const sectionEn: Record<string, string> = {
  servicios: "services",
  proyectos: "projects",
  productos: "products",
  estudio: "studio",
  contacto: "contact",
  "equipo-it": "it-team",
  recursos: "resources",
  gracias: "thank-you",
}

/** Slugs de contenido (segundo segmento) que cambian de idioma, por sección interna. */
const slugEn: Record<string, Record<string, string>> = {
  servicios: {
    "landing-pages": "landing-pages",
    institucional: "corporate-websites",
    "institucional-pro": "corporate-websites-pro",
    "desarrollo-web": "web-development",
    "software-a-medida": "custom-software",
    "plataformas-digitales": "digital-platforms",
    mvp: "mvp",
  },
  recursos: {
    "que-aprendimos-construyendo-un-saas-desde-cero": "what-we-learned-building-a-saas-from-scratch",
    "de-los-requerimientos-a-una-solucion-digital-a-medida": "from-requirements-to-a-custom-digital-solution",
  },
}

const invert = (o: Record<string, string>) => Object.fromEntries(Object.entries(o).map(([k, v]) => [v, k]))
const sectionFromEn = invert(sectionEn)
const slugFromEn: Record<string, Record<string, string>> = Object.fromEntries(
  Object.entries(slugEn).map(([section, map]) => [section, invert(map)]),
)

export const serviceSlugEn = slugEn.servicios
export const articleSlugEn = slugEn.recursos

function split(path: string): string[] {
  return path.split("/").filter(Boolean)
}

/** Ruta interna (español) → ruta pública del idioma. `internal` puede traer `?query` y `#hash`: se conservan. */
export function toPublicPath(internal: string, locale: Locale): string {
  const m = internal.match(/^([^?#]*)(.*)$/)!
  const segs = split(m[1])
  const tail = m[2]
  if (locale === "es") return `/${segs.join("/")}${tail}`

  const out = [...segs]
  if (out[0]) {
    const section = out[0]
    out[0] = sectionEn[section] ?? section
    if (out[1] && slugEn[section]?.[out[1]]) out[1] = slugEn[section][out[1]]
  }
  return `/en${out.length ? `/${out.join("/")}` : ""}${tail}`
}

const legacyInternal: Record<string, string> = { "/proyectos/nexo": "/productos/nexo" }

export type ParsedPath = {
  locale: Locale
  /** Ruta interna canónica (español, sin prefijo). */
  internal: string
  /** URL pública canónica para esa ruta (sin query). */
  canonical: string
}

/**
 * Interpreta una URL pública. Acepta variantes no canónicas (`/es/…`, `/en/servicios/…`, barra final)
 * y devuelve siempre la forma canónica para que el proxy redirija.
 */
export function parsePublicPath(pathname: string): ParsedPath {
  let segs = split(pathname)
  let locale: Locale = "es"
  if (segs[0] === "en" || segs[0] === "es") {
    locale = segs[0]
    segs = segs.slice(1)
  }
  if (locale === "en" && segs[0]) {
    const section = sectionFromEn[segs[0]] ?? segs[0]
    segs[0] = section
    if (segs[1]) segs[1] = slugFromEn[section]?.[segs[1]] ?? segs[1]
  }
  let internal = `/${segs.join("/")}`
  // URLs antiguas que ya redirigían en español (next.config) y deben hacerlo también en inglés.
  internal = legacyInternal[internal] ?? internal
  return { locale, internal, canonical: toPublicPath(internal, locale) }
}

/** ¿Existe una ruta interna con este formato? (para decidir equivalentes al cambiar de idioma) */
const staticInternal = new Set(["/", "/servicios", "/proyectos", "/productos", "/estudio", "/contacto", "/equipo-it", "/recursos", "/gracias"])
export function isKnownInternalPath(internal: string, known: { services: string[]; products: string[]; projects: string[]; articles: string[] }): boolean {
  if (staticInternal.has(internal)) return true
  const [section, slug, ...rest] = split(internal)
  if (rest.length || !slug) return false
  if (section === "servicios") return known.services.includes(slug)
  if (section === "productos") return known.products.includes(slug)
  if (section === "recursos") return known.articles.includes(slug)
  return false
}

/**
 * Página equivalente en otro idioma. Todas las páginas existen en ambos idiomas, así que normalmente es
 * el mapeo directo; si la ruta actual no es una página conocida (p. ej. un 404), cae en el inicio del idioma.
 */
export function equivalentPath(
  currentPublicPath: string,
  target: Locale,
  known: Parameters<typeof isKnownInternalPath>[1],
): string {
  const { internal } = parsePublicPath(currentPublicPath)
  return toPublicPath(isKnownInternalPath(internal, known) ? internal : "/", target)
}

/** Prefijo de búsqueda/hash que debe sobrevivir al cambio de idioma. */
export function withQuery(path: string, search: string, hash: string): string {
  return `${path}${search || ""}${hash || ""}`
}

/** Absolute URL helper (el dominio vive en site.url; se pasa para mantener este módulo puro). */
export function absoluteUrl(origin: string, internal: string, locale: Locale): string {
  const p = toPublicPath(internal, locale)
  return `${origin}${p === "/" ? "" : p}`
}
