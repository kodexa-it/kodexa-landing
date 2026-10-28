import { lang } from "next/root-params"
import { defaultLocale, isLocale, type Locale } from "./core"
import { allMessages, createT } from "./messages"

/** Idioma de la petición actual (parámetro raíz `[lang]`). Solo en Server Components. */
export async function getLocale(): Promise<Locale> {
  const l = await lang()
  return isLocale(l) ? l : defaultLocale
}

export async function getT() {
  const locale = await getLocale()
  return { locale, t: createT(allMessages[locale]) }
}
