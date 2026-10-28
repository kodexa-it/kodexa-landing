import type { Metadata } from "next"
import { site } from "@/lib/content/site"
import { absoluteUrl, localeMeta, locales, type Locale } from "@/lib/i18n/core"

type Opts = {
  locale: Locale
  /** Ruta canónica interna (español) de la página, sin query. */
  path: string
  title: string
  description: string
  keywords?: string[]
  /** Imagen OG absoluta o relativa a site.url. */
  image?: { url: string; alt: string; width?: number; height?: number }
  type?: "website" | "article"
  article?: { publishedTime: string; authors: string[] }
  /** Título para Open Graph si difiere del <title> (por defecto, el mismo). */
  ogTitle?: string
  /** Si es true, el título se usa tal cual (sin sufijo "| Kodexa"). */
  absoluteTitle?: boolean
}

/**
 * Metadatos por idioma: título/descripcion, canonical propio, hreflang recíproco es/en + x-default,
 * Open Graph y Twitter en el idioma de la página.
 */
export function pageMetadata(o: Opts): Metadata {
  const url = absoluteUrl(site.url, o.path, o.locale)
  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [localeMeta[l].hreflang, absoluteUrl(site.url, o.path, l)]),
  )
  // x-default: la URL de entrada del sitio (español, sin prefijo), que es la versión por defecto.
  languages["x-default"] = absoluteUrl(site.url, o.path, "es")
  const img = o.image ?? { url: "/og-image.png", alt: site.name, width: 1200, height: 630 }
  const imgUrl = img.url.startsWith("http") ? img.url : `${site.url}${img.url}`
  return {
    title: o.absoluteTitle ? { absolute: o.title } : o.title,
    description: o.description,
    ...(o.keywords ? { keywords: o.keywords } : {}),
    alternates: { canonical: url, languages },
    openGraph: {
      title: o.ogTitle ?? o.title,
      description: o.description,
      url,
      siteName: site.name,
      images: [{ url: imgUrl, width: img.width ?? 1200, height: img.height ?? 630, alt: img.alt }],
      locale: localeMeta[o.locale].ogLocale,
      alternateLocale: locales.filter((l) => l !== o.locale).map((l) => localeMeta[l].ogLocale),
      type: o.type ?? "website",
      ...(o.article ?? {}),
    },
    twitter: { card: "summary_large_image", title: o.title, description: o.description, images: [imgUrl] },
  }
}
