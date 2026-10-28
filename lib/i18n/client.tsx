"use client"

import { createContext, useContext, useMemo, type ReactNode } from "react"
import type { Locale } from "./core"
import { createT, type T } from "./messages"

type Ctx = { locale: Locale; messages: Record<string, unknown> }
const LocaleContext = createContext<Ctx | null>(null)

export function LocaleProvider({ locale, messages, children }: { locale: Locale; messages: Record<string, unknown>; children: ReactNode }) {
  const value = useMemo(() => ({ locale, messages }), [locale, messages])
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

function useCtx(): Ctx {
  const c = useContext(LocaleContext)
  if (!c) throw new Error("[i18n] LocaleProvider ausente")
  return c
}

export function useLocale(): Locale {
  return useCtx().locale
}

export function useT(): { locale: Locale; t: T } {
  const { locale, messages } = useCtx()
  const t = useMemo(() => createT(messages), [messages])
  return { locale, t }
}
