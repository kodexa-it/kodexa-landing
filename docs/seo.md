# SEO: reglas del sitio

- **Metadatos por página**: `title`, `description`, `canonical`, hreflang, `robots` y Open Graph/Twitter salen de `pageMetadata()` (`lib/seo.ts`). El layout raíz **no** define description, canonical ni robots: si lo hiciera, la 404 los heredaría (canonical de la home e `index`). Verificá una URL inexistente: debe tener un solo `<meta name="robots" content="noindex">` y ningún canonical.
- **Descripciones**: 140-160 caracteres, con la keyword y un llamado a la acción. Viven en `messages/<idioma>/*.json` (`meta.description`) y en `lib/content/{services,products,articles}*.ts`.
- **Sitemap**: `app/sitemap.ts` toma `lastmod` de `lib/content/lastmod.ts`. Actualizá la fecha de una ruta **solo cuando cambie su contenido**; no usa la hora del build. Después de publicar, reenviá el sitemap en Search Console.
- **Schema**: `components/seo/json-ld.tsx` incluye email y teléfono públicos (de `lib/content/site.ts`) en `Organization` y `ProfessionalService`, más `contactPoint`. No hay `address` a propósito: solo agregala si querés mostrar una dirección o ciudad pública.
- **Imágenes**: usá `next/image` o `<img>` con `width` y `height` reales. `alt=""` solo para imágenes decorativas.
- **Archivos extra**: `public/llms.txt` (resumen para asistentes de IA) y `app/manifest.ts` (manifest mínimo). Ninguno afecta el ranking.
- **Artículos**: el cuerpo de los artículos nuevos vive en `messages/<idioma>/articulos.json` (clave = slug) y se renderiza con `components/sections/article-view.tsx`. Para sumar uno: agregar la entrada en `lib/content/articles*.ts`, el slug en inglés en `lib/i18n/core.ts`, una fecha en `lib/content/lastmod.ts`, el cuerpo en `articulos.json` (es y en), las imágenes en `public/recursos/` y una `page.tsx` de 6 líneas como las existentes.
- **Pendiente de medición**: correr PageSpeed Insights sobre la home (Core Web Vitals) con el sitio publicado.
