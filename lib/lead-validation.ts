/**
 * Reglas de validación de los formularios de contacto.
 * Se usan en el navegador (mensajes por campo) y en el servidor (/api/forminit y /api/lead),
 * así nadie puede saltearlas enviando datos directo a la API.
 */

export type LeadInput = {
  name: string
  email: string
  whatsapp?: string
  message: string
  projectType?: string
}

export type LeadErrors = Partial<Record<keyof LeadInput, string>>

export const LIMITS = { nameMin: 2, nameMax: 80, emailMax: 254, messageMin: 10, messageMax: 2000, phoneMin: 8, phoneMax: 15 } as const

// usuario@dominio.tld — sin espacios, un solo @, dominio con al menos un punto y TLD de 2+ letras.
const EMAIL_RE = /^[a-z0-9._%+\-]+@[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,24}$/i

// Errores de tipeo frecuentes en dominios de email.
const DOMAIN_TYPOS: Record<string, string> = {
  "gmial.com": "gmail.com",
  "gmal.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gamil.com": "gmail.com",
  "gmail.co": "gmail.com",
  "gmail.con": "gmail.com",
  "gmail.om": "gmail.com",
  "hotmal.com": "hotmail.com",
  "hotmial.com": "hotmail.com",
  "hotmail.co": "hotmail.com",
  "hotmail.con": "hotmail.com",
  "hotmail.com.ar.com": "hotmail.com.ar",
  "outlok.com": "outlook.com",
  "outloo.com": "outlook.com",
  "yahooo.com": "yahoo.com",
  "yaho.com": "yahoo.com",
}

const URL_RE = /(https?:\/\/|www\.)/gi

export const clean = (v: unknown) => (typeof v === "string" ? v.replace(/\s+/g, " ").trim() : "")
export const digitsOnly = (v: string) => v.replace(/\D/g, "")

/** Sugerencia si el dominio parece mal escrito (ej. gmial.com → gmail.com). */
export function emailSuggestion(email: string): string | null {
  const [user, domain] = email.toLowerCase().split("@")
  if (!user || !domain) return null
  const fix = DOMAIN_TYPOS[domain]
  return fix ? `${user}@${fix}` : null
}

export function validateLead(input: LeadInput, opts: { requireProjectType?: boolean } = {}): LeadErrors {
  const e: LeadErrors = {}
  const name = clean(input.name)
  const email = clean(input.email).toLowerCase()
  const message = clean(input.message)
  const phone = digitsOnly(input.whatsapp ?? "")

  if (!name) e.name = "Ingresá tu nombre."
  else if (name.length < LIMITS.nameMin || name.length > LIMITS.nameMax) e.name = `El nombre debe tener entre ${LIMITS.nameMin} y ${LIMITS.nameMax} caracteres.`
  else if (!/\p{L}.*\p{L}/u.test(name) || /[<>{}@]|https?:|www\./i.test(name)) e.name = "Ingresá un nombre válido."

  if (!email) e.email = "Ingresá tu email."
  else if (email.length > LIMITS.emailMax || !EMAIL_RE.test(email) || email.includes("..")) e.email = "Revisá el email: debería ser del estilo nombre@dominio.com."
  else {
    const s = emailSuggestion(email)
    if (s) e.email = `¿Quisiste decir ${s}?`
  }

  if (input.whatsapp && clean(input.whatsapp)) {
    if (/[^\d\s()+\-.]/.test(input.whatsapp)) e.whatsapp = "Usá solo números (podés incluir +, espacios o guiones)."
    else if (phone.length < LIMITS.phoneMin || phone.length > LIMITS.phoneMax) e.whatsapp = "Revisá el número: incluí el código de área (ej. 11 2345 6789)."
  }

  if (!message) e.message = "Contanos brevemente qué necesitás."
  else if (message.length < LIMITS.messageMin) e.message = `Contanos un poco más (mínimo ${LIMITS.messageMin} caracteres).`
  else if (message.length > LIMITS.messageMax) e.message = `El mensaje es demasiado largo (máximo ${LIMITS.messageMax} caracteres).`
  else if ((message.match(URL_RE) ?? []).length > 2) e.message = "El mensaje tiene demasiados enlaces."

  if (opts.requireProjectType && !clean(input.projectType)) e.projectType = "Elegí un tipo de proyecto."

  return e
}

/** Campos anti-spam: un campo trampa invisible y el tiempo mínimo para completar el formulario. */
export const HONEYPOT_FIELD = "company_website"
export const STARTED_FIELD = "form_started_at"
export const MIN_FILL_MS = 3000

export function looksLikeBot(honeypot: unknown, startedAt: unknown, now = Date.now()): boolean {
  if (typeof honeypot === "string" && honeypot.trim() !== "") return true
  const t = Number(startedAt)
  if (!Number.isFinite(t) || t <= 0) return false // si falta, no bloqueamos (por ejemplo, JS viejo)
  return now - t < MIN_FILL_MS
}
