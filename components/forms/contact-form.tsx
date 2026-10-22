"use client"

import { useEffect, useId, useRef, useState } from "react"
import { Forminit } from "forminit"
import { trackEvent } from "@/lib/analytics"
import { site } from "@/lib/content/site"
import { HONEYPOT_FIELD, LIMITS, STARTED_FIELD, clean, digitsOnly, looksLikeBot, validateLead, type LeadErrors } from "@/lib/lead-validation"
import type { LeadType, ProductInterest } from "@/lib/content/products"
import { Button } from "@/components/ui/button"

// Mismo proxy y mismo formulario que usa kodexa.ar hoy (ver app/api/forminit/route.ts).
const forminit = new Forminit({ proxyUrl: "/api/forminit" })

const PRODUCT_TYPE = "Producto Kodexa (Nexo / Nodo)"
const QUICK_TYPE = "Consulta rápida (home)"

const projectTypes: { label: string; leadType: LeadType }[] = [
  { label: "Sitio web o Landing Page", leadType: "web" },
  { label: "Software o Sistema a Medida", leadType: "software" },
  { label: "Plataforma o Aplicación Web", leadType: "software" },
  { label: "MVP o Producto SaaS", leadType: "software" },
  { label: PRODUCT_TYPE, leadType: "product" },
  { label: "Soporte y Equipo IT", leadType: "other" },
]

const productInterests: { label: string; value: ProductInterest }[] = [
  { label: "Nexo — asistente digital", value: "nexo" },
  { label: "Nodo — CRM", value: "nodo" },
  { label: "Nexo + Nodo", value: "bundle" },
  { label: "Todavía no sé cuál", value: "unknown" },
]

const budgetRanges = ["Menos de USD 500", "USD 500 – 1.500", "USD 1.500 – 5.000", "Más de USD 5.000 / A definir"]

const field =
  "w-full rounded-2xl border border-ink/12 bg-white/80 px-4 py-3.5 text-base text-ink placeholder:text-ink-faint/70 outline-none transition-[border-color,box-shadow] duration-200 hover:border-ink/25 focus:border-ink focus:ring-4 focus:ring-brand/25 aria-[invalid=true]:border-red-600"
const labelCls = "mb-2 block text-sm font-medium text-ink"

type Props = {
  /** "general" = consulta de proyecto. "product" = interés en Nexo/Nodo. "quick" = consulta rápida (home). */
  variant?: "general" | "product" | "quick"
  /** Identifica desde qué página se envió (campo oculto para segmentar leads). */
  source?: string
  defaultProductInterest?: ProductInterest
  submitLabel?: string
}

export function ContactForm({ variant = "general", source = "contacto", defaultProductInterest = "unknown", submitLabel = "Hablemos de tu proyecto" }: Props) {
  const uid = useId()
  const isProduct = variant === "product"
  const isQuick = variant === "quick"
  const [projectType, setProjectType] = useState("")
  const [productInterest, setProductInterest] = useState<ProductInterest>(defaultProductInterest)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [errors, setErrors] = useState<LeadErrors>({})
  const formRef = useRef<HTMLFormElement>(null)
  const startedAt = useRef(0)
  useEffect(() => {
    startedAt.current = Date.now()
  }, [])

  const leadType: LeadType = isProduct ? "product" : isQuick ? "other" : (projectTypes.find((t) => t.label === projectType)?.leadType ?? "other")
  const id = (n: string) => `${uid}-${n}`

  const readValues = (form: HTMLFormElement) => {
    const d = new FormData(form)
    const get = (k: string) => (typeof d.get(k) === "string" ? (d.get(k) as string) : "")
    return {
      name: get("fi-sender-fullName"),
      email: get("fi-sender-email"),
      whatsapp: get("fi-text-whatsapp"),
      message: get("fi-text-message"),
      projectType: get("fi-select-projectType"),
    }
  }
  const check = (form: HTMLFormElement) => validateLead(readValues(form), { requireProjectType: variant === "general" })

  /** Después del primer intento, los errores se actualizan mientras la persona corrige. */
  function onFieldChange() {
    if (Object.keys(errors).length && formRef.current) setErrors(check(formRef.current))
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const form = e.currentTarget
    const raw = new FormData(form)

    // Bots: campo trampa completo o envío instantáneo → simulamos éxito sin enviar nada.
    if (looksLikeBot(raw.get(HONEYPOT_FIELD), startedAt.current)) {
      window.location.href = "/gracias"
      return
    }

    const found = check(form)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      const target: Record<string, string> = { name: "name", email: "email", whatsapp: "whatsapp", message: "message", projectType: "type" }
      document.getElementById(id(target[first]))?.focus()
      return
    }

    // Datos normalizados: sin espacios de más, email en minúsculas, teléfono solo con dígitos.
    const v = readValues(form)
    const data = new FormData(form)
    data.delete(HONEYPOT_FIELD)
    data.delete(STARTED_FIELD)
    data.set("fi-sender-fullName", clean(v.name))
    data.set("fi-sender-email", clean(v.email).toLowerCase())
    data.set("fi-text-message", v.message.trim())
    if (clean(v.whatsapp)) data.set("fi-text-whatsapp", digitsOnly(v.whatsapp))
    else data.delete("fi-text-whatsapp")
    try {
      setSubmitting(true)
      const { error } = await forminit.submit(site.forminitFormId, data)
      if (error) throw new Error()
      trackEvent("lead_form_submit", { source, leadType, productInterest: isProduct ? productInterest : null })
      // Copia a Google Sheets (no bloquea: si falla, el lead ya quedó en Forminit).
      try {
        const str = (k: string) => (typeof data.get(k) === "string" ? (data.get(k) as string) : "")
        await Promise.race([
          fetch("/api/lead", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            keepalive: true,
            body: JSON.stringify({
              name: str("fi-sender-fullName"),
              email: str("fi-sender-email"),
              whatsapp: str("fi-text-whatsapp"),
              projectType: str("fi-select-projectType"),
              budget: str("fi-select-budget"),
              message: str("fi-text-message"),
              source,
              productInterest: isProduct ? productInterest : "",
              page: window.location.pathname,
            }),
          }),
          new Promise((r) => setTimeout(r, 2500)),
        ])
      } catch {}
      window.location.href = "/gracias"
    } catch {
      setError("Ocurrió un error al enviar. Intentá nuevamente o escribinos por WhatsApp.")
      setSubmitting(false)
    }
  }

  const invalid = (k: keyof LeadErrors, idKey: string = k) =>
    errors[k] ? { "aria-invalid": true as const, "aria-describedby": id(`${idKey}-err`) } : {}

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} onChange={onFieldChange} aria-describedby={error ? id("error") : undefined} className={isQuick ? "relative rounded-[1.75rem] bg-paper p-6 text-ink shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] md:p-8" : "glass relative p-6 text-ink md:p-10"}>
      <div className="grid gap-6 md:grid-cols-2">
        <input type="hidden" name="fi-text-leadType" value={leadType} />
        <input type="hidden" name="fi-text-source" value={source} />
        {isProduct && (
          <>
            <input type="hidden" name="fi-text-productInterest" value={productInterest} />
            <input type="hidden" name="fi-select-projectType" value={PRODUCT_TYPE} />
          </>
        )}
        {isQuick && <input type="hidden" name="fi-select-projectType" value={QUICK_TYPE} />}

        {/* Anti-spam: campo invisible para personas (los bots suelen completarlo). */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor={id("hp")}>No completar</label>
          <input id={id("hp")} name={HONEYPOT_FIELD} type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
        </div>

        <div>
          <label htmlFor={id("name")} className={labelCls}>Nombre</label>
          <input id={id("name")} name="fi-sender-fullName" type="text" required minLength={LIMITS.nameMin} maxLength={LIMITS.nameMax} autoComplete="name" placeholder="Tu nombre" className={field} {...invalid("name")} />
          <FieldError id={id("name-err")} msg={errors.name} />
        </div>
        <div>
          <label htmlFor={id("email")} className={labelCls}>Email</label>
          <input id={id("email")} name="fi-sender-email" type="email" required maxLength={LIMITS.emailMax} autoComplete="email" inputMode="email" autoCapitalize="none" spellCheck={false} placeholder="tu@email.com" className={field} {...invalid("email")} />
          <FieldError id={id("email-err")} msg={errors.email} />
        </div>

        <div className="md:col-span-2">
          <label htmlFor={id("whatsapp")} className={labelCls}>
            WhatsApp <span className="font-normal text-ink-faint">(opcional)</span>
          </label>
          <input
            id={id("whatsapp")}
            name="fi-text-whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={24}
            placeholder="Ej: 11 2345 6789"
            className={field}
            {...invalid("whatsapp")}
          />
          <FieldError id={id("whatsapp-err")} msg={errors.whatsapp} />
        </div>

        {isQuick ? null : isProduct ? (
          <div className="md:col-span-2">
            <label htmlFor={id("interest")} className={labelCls}>Me interesa</label>
            <select id={id("interest")} value={productInterest} onChange={(e) => setProductInterest(e.target.value as ProductInterest)} className={field}>
              {productInterests.map((p) => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ))}
            </select>
          </div>
        ) : (
          <>
            <div>
              <label htmlFor={id("type")} className={labelCls}>Tipo de proyecto</label>
              <select id={id("type")} name="fi-select-projectType" required value={projectType} onChange={(e) => setProjectType(e.target.value)} className={field} {...invalid("projectType", "type")}>
                <option value="" disabled>Seleccionar</option>
                {projectTypes.map(({ label }) => (
                  <option key={label} value={label}>{label}</option>
                ))}
              </select>
              <FieldError id={id("type-err")} msg={errors.projectType} />
            </div>
            <div>
              <label htmlFor={id("budget")} className={labelCls}>
                Presupuesto aproximado <span className="font-normal text-ink-faint">(opcional)</span>
              </label>
              <select id={id("budget")} name="fi-select-budget" defaultValue="" className={field}>
                <option value="">Prefiero no indicarlo</option>
                {budgetRanges.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
          </>
        )}

        <div className="md:col-span-2">
          <label htmlFor={id("message")} className={labelCls}>Mensaje</label>
          <textarea
            id={id("message")}
            name="fi-text-message"
            required
            minLength={LIMITS.messageMin}
            maxLength={LIMITS.messageMax}
            rows={isQuick ? 4 : 5}
            placeholder={
              isProduct
                ? "Contanos qué te gustaría resolver en tu negocio…"
                : isQuick
                  ? "Contanos en pocas palabras qué necesitás…"
                  : "Contanos qué necesitás construir y cuál es tu idea…"
            }
            className={`${field} ${isQuick ? "min-h-28" : "min-h-36"} resize-y`}
            {...invalid("message")}
          />
          <FieldError id={id("message-err")} msg={errors.message} />
        </div>

        <div className="md:col-span-2">
          <Button type="submit" disabled={submitting} className="w-full">
            {submitting ? "Enviando…" : submitLabel}
          </Button>
          <div aria-live="polite">
            {error && (
              <p id={id("error")} role="alert" className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-800">
                {error}
              </p>
            )}
          </div>
          <p className="mt-4 text-center text-sm text-ink-faint">Te respondemos dentro de las 24 hs.</p>
        </div>
      </div>
    </form>
  )
}

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null
  return (
    <p id={id} className="mt-2 text-sm text-red-700">
      {msg}
    </p>
  )
}
