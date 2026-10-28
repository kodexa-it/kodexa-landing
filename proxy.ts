import { NextResponse, type NextRequest } from "next/server"
import { LANG_COOKIE, isBot, isLocale, parsePublicPath, pickLocale, toPublicPath } from "@/lib/i18n/core"

/**
 * Enrutado de idioma (Next 16: `proxy.ts` reemplaza a `middleware.ts`).
 *
 * 1. URLs no canónicas (`/es/…`, `/en/servicios/…`, barra final) → redirect 308 a la forma canónica.
 * 2. Solo en la home sin prefijo (`/`): primera visita sin cookie → idioma del navegador (Accept-Language);
 *    con cookie `kx_lang` (elección manual) → ese idioma. Nunca en otras URLs, nunca para bots,
 *    nunca si la persona viene de otra página del propio sitio. Sin geolocalización ni IP.
 * 3. Rewrite interno: `/` → `/es`, `/en/services/x` → `/en/servicios/x`. La URL del navegador no cambia.
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const parsed = parsePublicPath(pathname)

  if (parsed.canonical !== pathname) {
    return NextResponse.redirect(new URL(`${parsed.canonical}${search}`, request.url), 308)
  }

  if (pathname === "/" && request.method === "GET") {
    const cookie = request.cookies.get(LANG_COOKIE)?.value
    let target = null as null | "en"
    if (isLocale(cookie)) {
      if (cookie === "en") target = "en"
    } else if (!isBot(request.headers.get("user-agent")) && !isInternalReferrer(request)) {
      if (pickLocale(request.headers.get("accept-language")) === "en") target = "en"
    }
    if (target) {
      const res = NextResponse.redirect(new URL(`${toPublicPath("/", target)}${search}`, request.url), 307)
      res.headers.set("Vary", "Accept-Language, Cookie")
      res.headers.set("Cache-Control", "private, no-store")
      return res
    }
    // `/` sirve español: la respuesta depende del header/cookie que se evaluó arriba.
    const res = NextResponse.rewrite(new URL(`/es${search}`, request.url))
    res.headers.set("Vary", "Accept-Language, Cookie")
    return res
  }

  const url = request.nextUrl.clone()
  url.pathname = `/${parsed.locale}${parsed.internal === "/" ? "" : parsed.internal}`
  return NextResponse.rewrite(url)
}

function isInternalReferrer(request: NextRequest): boolean {
  const ref = request.headers.get("referer")
  if (!ref) return false
  try {
    return new URL(ref).host === request.nextUrl.host
  } catch {
    return false
  }
}

export const config = {
  // Todo menos API, recursos de Next, sitemap/robots y archivos estáticos (con extensión).
  matcher: ["/((?!api|_next|sitemap\\.xml|robots\\.txt|.*\\..*).*)"],
}
