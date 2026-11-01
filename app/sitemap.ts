import type { MetadataRoute } from "next"
import { knownSlugs } from "@/lib/content"
import { site } from "@/lib/content/site"
import { absoluteUrl, localeMeta, locales } from "@/lib/i18n/core"
import { FALLBACK_LASTMOD, lastmod } from "@/lib/content/lastmod"
import { services } from "@/lib/content/services"

/**
 * Una entrada por idioma y página, cada una con `alternates.languages` (es, en y x-default):
 * las relaciones hreflang son recíprocas. /gracias queda fuera (noindex).
 * `lastModified` sale de lib/content/lastmod.ts (fecha real por página; no la hora del build).
 * No se publican `changeFrequency` ni `priority`: Google los ignora.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []
  const add = (path: string) => {
    const languages: Record<string, string> = Object.fromEntries(locales.map((l) => [localeMeta[l].hreflang, absoluteUrl(site.url, path, l)]))
    languages["x-default"] = absoluteUrl(site.url, path, "es")
    const lastModified = new Date(`${lastmod[path] ?? FALLBACK_LASTMOD}T00:00:00Z`)
    for (const l of locales) {
      entries.push({ url: absoluteUrl(site.url, path, l), lastModified, alternates: { languages } })
    }
  }

  add("/")
  add("/servicios")
  for (const s of services) add(`/servicios/${s.slug}`)
  add("/proyectos")
  add("/productos")
  for (const slug of knownSlugs.products) add(`/productos/${slug}`)
  add("/estudio")
  add("/contacto")
  add("/equipo-it")
  add("/recursos")
  add("/privacidad")
  add("/cookies")
  for (const slug of knownSlugs.articles) add(`/recursos/${slug}`)
  return entries
}
