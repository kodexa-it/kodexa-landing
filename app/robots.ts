import type { MetadataRoute } from "next"
import { isPreview, site } from "@/lib/content/site"

export default function robots(): MetadataRoute.Robots {
  // Versión en revisión: no indexar. Ver NEXT_PUBLIC_SITE_PREVIEW en lib/content/site.ts.
  if (isPreview) return { rules: { userAgent: "*", disallow: "/" } }
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` }
}
