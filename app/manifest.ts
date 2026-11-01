import type { MetadataRoute } from "next"
import { site } from "@/lib/content/site"

/** Manifest mínimo: nombre, color y favicon. No convierte el sitio en una app instalable con funciones propias. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} | Estudio digital`,
    short_name: site.name,
    description: "Estudio digital de diseño y desarrollo.",
    start_url: "/",
    display: "browser",
    background_color: "#fafaf8",
    theme_color: "#fafaf8",
    icons: [{ src: "/favicon.png", sizes: "512x512", type: "image/png" }],
  }
}
