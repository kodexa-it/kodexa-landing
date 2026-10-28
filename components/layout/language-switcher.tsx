"use client"

import { usePathname } from "next/navigation"
import type { MouseEvent } from "react"
import { cn } from "@/lib/utils"
import { trackEvent } from "@/lib/analytics"
import { LANG_COOKIE, LANG_COOKIE_MAX_AGE, equivalentPath, localeMeta, locales, type Locale } from "@/lib/i18n/core"
import { useT } from "@/lib/i18n/client"

export type KnownSlugs = { services: string[]; products: string[]; projects: string[]; articles: string[] }

/**
 * Selector de idioma. Son enlaces reales a la página equivalente (funcionan sin JS y los rastrea Google);
 * al hacer clic se guarda la elección manual en la cookie `kx_lang` y se mide `language_select`.
 * Se conservan ?query y #hash de la URL actual.
 */
export function LanguageSwitcher({
  known,
  location,
  variant = "compact",
  className,
}: {
  known: KnownSlugs
  /** Dónde está el selector (para la analítica). */
  location: "navbar" | "mobile_menu"
  variant?: "compact" | "full"
  className?: string
}) {
  const pathname = usePathname()
  const { locale, t } = useT()

  function choose(e: MouseEvent<HTMLAnchorElement>, target: Locale) {
    try {
      const secure = window.location.protocol === "https:" ? "; Secure" : ""
      document.cookie = `${LANG_COOKIE}=${target}; Path=/; Max-Age=${LANG_COOKIE_MAX_AGE}; SameSite=Lax${secure}`
    } catch {}
    trackEvent("language_select", { language_from: locale, language_to: target, cta_location: location, page_path: pathname })
    // Conserva query y hash en la página equivalente.
    const a = e.currentTarget
    a.href = `${a.pathname}${window.location.search}${window.location.hash}`
  }

  return (
    <nav aria-label={t("common.language.label")} className={cn("inline-flex items-center rounded-full border border-line bg-white/50 p-0.5 text-[0.8rem] font-medium", className)}>
      {locales.map((l) => {
        const active = l === locale
        const name = localeMeta[l].label
        const text = variant === "full" ? name : localeMeta[l].short
        const base = "rounded-full px-2.5 py-1.5 leading-none tracking-[0.02em] transition-colors"
        if (active) {
          return (
            <span key={l} lang={l} aria-current="true" className={cn(base, "bg-ink text-white")}>
              <span aria-hidden="true">{text}</span>
              <span className="sr-only">{t("common.language.current", { language: name })}</span>
            </span>
          )
        }
        return (
          <a
            key={l}
            href={equivalentPath(pathname, l, known)}
            lang={l}
            hrefLang={localeMeta[l].hreflang}
            aria-label={t("common.language.switchTo", { language: name })}
            onClick={(e) => choose(e, l)}
            className={cn(base, "text-ink-soft hover:bg-ink/5 hover:text-ink")}
          >
            <span aria-hidden="true">{text}</span>
          </a>
        )
      })}
    </nav>
  )
}
