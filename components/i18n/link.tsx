"use client"

import NextLink from "next/link"
import type { ComponentProps } from "react"
import { toPublicPath } from "@/lib/i18n/core"
import { useLocale } from "@/lib/i18n/client"

/** ¿Es un destino interno del sitio (ruta canónica en español)? */
export function isInternalHref(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("//")
}

/**
 * `next/link` que conserva el idioma: los `href` internos se escriben con la ruta canónica (`/servicios/mvp`)
 * y acá se convierten a la URL pública del idioma actual (`/en/services/mvp`).
 */
export function Link({ href, ...rest }: Omit<ComponentProps<typeof NextLink>, "href"> & { href: string }) {
  const locale = useLocale()
  const target = isInternalHref(href) ? toPublicPath(href, locale) : href
  return <NextLink href={target} {...rest} />
}

export function useLocalizedHref() {
  const locale = useLocale()
  return (href: string) => (isInternalHref(href) ? toPublicPath(href, locale) : href)
}
