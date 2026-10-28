import type { MetadataRoute } from "next"
import { knownSlugs } from "@/lib/content"
import { site } from "@/lib/content/site"
import { absoluteUrl, localeMeta, locales } from "@/lib/i18n/core"
import { services } from "@/lib/content/services"

/**
 * Una entrada por idioma y página, cada una con `alternates.languages` (es, en y x-default):
 * las relaciones hreflang son recíprocas. /gracias queda fuera (noindex).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = []
  const add = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => {
    const languages: Record<string, string> = Object.fromEntries(locales.map((l) => [localeMeta[l].hreflang, absoluteUrl(site.url, path, l)]))
    languages["x-default"] = absoluteUrl(site.url, path, "es")
    for (const l of locales) {
      entries.push({ url: absoluteUrl(site.url, path, l), lastModified: now, changeFrequency, priority, alternates: { languages } })
    }
  }

  add("/", 1, "weekly")
  add("/servicios", 0.9)
  for (const s of services) add(`/servicios/${s.slug}`, s.group === "web" || s.slug === "software-a-medida" ? 0.9 : 0.8)
  add("/proyectos", 0.8)
  add("/productos", 0.8)
  for (const slug of knownSlugs.products) add(`/productos/${slug}`, 0.7)
  add("/estudio", 0.7)
  add("/contacto", 0.7)
  add("/equipo-it", 0.6)
  add("/recursos", 0.6)
  add("/privacidad", 0.2, "yearly")
  add("/cookies", 0.2, "yearly")
  for (const slug of knownSlugs.articles) add(`/recursos/${slug}`, 0.6, "yearly")
  return entries
}
