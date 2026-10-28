import es from "@/messages/es"
import en from "@/messages/en"
import type { Locale } from "./core"

export type Messages = typeof es
export const allMessages: Record<Locale, Messages> = { es, en: en as unknown as Messages }

/** Namespaces que se envían al navegador (componentes cliente). El resto se queda en el servidor. */
export const clientNamespaces = ["common", "header", "footer", "float", "share", "form", "faq", "project", "visuals", "ecoflow", "consent"] as const

function lookup(messages: unknown, key: string): unknown {
  let cur: unknown = messages
  for (const part of key.split(".")) {
    if (cur && typeof cur === "object" && part in (cur as Record<string, unknown>)) cur = (cur as Record<string, unknown>)[part]
    else throw new Error(`[i18n] Falta la clave "${key}"`)
  }
  return cur
}

function interpolate(s: string, vars?: Record<string, string | number>): string {
  if (!vars) return s
  return s.replace(/\{(\w+)\}/g, (_, k) => {
    if (!(k in vars)) throw new Error(`[i18n] Falta la variable "${k}" en "${s}"`)
    return String(vars[k])
  })
}

export type T = {
  /** Texto con variables `{nombre}`. Lanza si la clave no existe (no hay fallback silencioso a otro idioma). */
  (key: string, vars?: Record<string, string | number>): string
  /** Valor crudo (listas / objetos) de un namespace. */
  raw: <V = unknown>(key: string) => V
}

export function createT(messages: unknown): T {
  const t = ((key: string, vars?: Record<string, string | number>) => {
    const v = lookup(messages, key)
    if (typeof v !== "string") throw new Error(`[i18n] "${key}" no es un texto`)
    return interpolate(v, vars)
  }) as T
  t.raw = <V,>(key: string) => lookup(messages, key) as V
  return t
}

export function clientMessages(locale: Locale): Partial<Messages> {
  const m = allMessages[locale] as Record<string, unknown>
  return Object.fromEntries(clientNamespaces.filter((n) => n in m).map((n) => [n, m[n]])) as Partial<Messages>
}
