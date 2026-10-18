import type { MetadataRoute } from "next"
import { services } from "@/lib/content/services"
import { productList } from "@/lib/content/products"
import { articles } from "@/lib/content/articles"
import { site } from "@/lib/content/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  })

  return [
    entry("", 1, "weekly"),
    entry("/servicios", 0.9),
    ...services.map((s) => entry(`/servicios/${s.slug}`, s.group === "web" || s.slug === "software-a-medida" ? 0.9 : 0.8)),
    entry("/proyectos", 0.8),
    entry("/productos", 0.8),
    ...productList.map((p) => entry(`/productos/${p.slug}`, 0.7)),
    entry("/estudio", 0.7),
    entry("/contacto", 0.7),
    entry("/equipo-it", 0.6),
    entry("/recursos", 0.6),
    ...articles.map((a) => entry(`/recursos/${a.slug}`, 0.6, "yearly")),
  ]
}
