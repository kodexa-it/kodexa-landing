/**
 * Fecha real de la última modificación de contenido por ruta canónica (la usa app/sitemap.ts como `lastmod`).
 * Google solo confía en `lastmod` si refleja cambios reales: actualizá la fecha de una ruta SOLO cuando cambie su
 * contenido. ES y EN de una misma página comparten fecha. Una ruta que no figura usa FALLBACK_LASTMOD.
 */
export const FALLBACK_LASTMOD = "2026-10-28"

export const lastmod: Record<string, string> = {
  "/": "2026-10-31",
  "/servicios": "2026-10-31",
  "/servicios/landing-pages": "2026-10-31",
  "/servicios/institucional": "2026-10-31",
  "/servicios/institucional-pro": "2026-10-31",
  "/servicios/desarrollo-web": "2026-10-31",
  "/servicios/software-a-medida": "2026-10-31",
  "/servicios/plataformas-digitales": "2026-10-31",
  "/servicios/mvp": "2026-10-31",
  "/proyectos": "2026-10-31",
  "/productos": "2026-10-31",
  "/productos/nodo": "2026-10-31",
  "/contacto": "2026-10-31",
  "/equipo-it": "2026-10-31",
  "/recursos": "2026-10-31",
  "/recursos/de-los-requerimientos-a-una-solucion-digital-a-medida": "2026-10-31",
  "/recursos/que-aprendimos-construyendo-un-saas-desde-cero": "2026-10-31",
  "/recursos/cuanto-cuesta-una-pagina-web-en-argentina": "2026-10-31",
  "/recursos/sitio-web-vs-aplicacion-web": "2026-10-31",
  "/recursos/landing-page-vs-sitio-institucional": "2026-10-31",
  "/privacidad": "2026-10-28",
  "/cookies": "2026-10-28",
}
