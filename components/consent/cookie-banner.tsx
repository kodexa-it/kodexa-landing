"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Link } from "@/components/i18n/link"
import { useT } from "@/lib/i18n/client"
import { consentDenied, consentGranted, parseConsent, serializeConsent, type ConsentChoice } from "@/lib/consent"

declare global {
  interface Window {
    dataLayer?: unknown[]
    kxLoadClarity?: () => void
    clarity?: (...args: unknown[]) => void
  }
}

export const OPEN_CONSENT_EVENT = "kx:open-consent"

/** Igual que el gtag() oficial: empuja el objeto `arguments`, no un array. */
function gtag(..._args: unknown[]) {
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer!.push(arguments)
}

function applyConsent(choice: ConsentChoice) {
  try {
    document.cookie = serializeConsent(choice, window.location.protocol === "https:")
  } catch {}
  try {
    window.dataLayer = window.dataLayer || []
    // Consent Mode exige empujar el objeto `arguments` de gtag(), no un array.
    gtag("consent", "update", choice === "granted" ? consentGranted : consentDenied)
  } catch {}
  try {
    if (choice === "granted") window.kxLoadClarity?.()
    else window.clarity?.("consent", false)
  } catch {}
}

/**
 * Aviso de cookies. Aparece si no hay elección guardada y se puede reabrir desde el pie ("Preferencias de cookies").
 * "Aceptar" y "Rechazar" tienen el mismo peso visual. No bloquea la navegación ni roba el foco.
 */
export function CookieBanner() {
  const { t } = useT()
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState<ConsentChoice | null>(null)
  const firstBtn = useRef<HTMLButtonElement>(null)
  const reopened = useRef(false)

  useEffect(() => {
    const stored = parseConsent(document.cookie)
    setCurrent(stored)
    if (!stored) setOpen(true)
    const onOpen = () => {
      reopened.current = true
      setCurrent(parseConsent(document.cookie))
      setOpen(true)
    }
    window.addEventListener(OPEN_CONSENT_EVENT, onOpen)
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, onOpen)
  }, [])

  // Si lo abrió la persona desde el pie, se lleva el foco al aviso (el primer botón).
  useEffect(() => {
    if (open && reopened.current) firstBtn.current?.focus()
  }, [open])

  const choose = useCallback((choice: ConsentChoice) => {
    applyConsent(choice)
    setCurrent(choice)
    setOpen(false)
    reopened.current = false
  }, [])

  if (!open) return null
  const btn =
    "inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-ink px-4 py-2.5 text-[0.95rem] font-medium text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
  return (
    <div
      role="region"
      aria-label={t("consent.aria")}
      data-cookie-banner
      className="fixed inset-x-3 bottom-3 z-[65] rounded-3xl border border-line bg-white p-4 sm:p-5 shadow-[0_20px_60px_-20px_rgba(20,20,20,0.35)] sm:inset-x-auto sm:bottom-5 sm:left-5 sm:max-w-md"
    >
      <p className="text-[1rem] font-medium text-ink">{t("consent.title")}</p>
      <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-soft">
        {t("consent.text")}{" "}
        <Link href="/cookies" className="font-medium text-brand-ink underline underline-offset-4">
          {t("consent.more")}
        </Link>
      </p>
      {current && <p className="mt-2 text-sm text-ink-faint">{t(current === "granted" ? "consent.currentGranted" : "consent.currentDenied")}</p>}
      <div className="mt-4 flex gap-2">
        <button ref={firstBtn} type="button" className={btn} onClick={() => choose("denied")}>
          {t("consent.reject")}
        </button>
        <button type="button" className={btn} onClick={() => choose("granted")}>
          {t("consent.accept")}
        </button>
      </div>
    </div>
  )
}

/** Botón del pie para volver a abrir el aviso. */
export function CookiePrefsButton({ className }: { className?: string }) {
  const { t } = useT()
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}>
      {t("consent.prefs")}
    </button>
  )
}
