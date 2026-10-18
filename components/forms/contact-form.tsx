"use client"

import { useId, useState } from "react"
import { Forminit } from "forminit"
import { trackEvent } from "@/lib/analytics"
import { site } from "@/lib/content/site"
import type { LeadType, ProductInterest } from "@/lib/content/products"
import { Button } from "@/components/ui/button"

// Mismo proxy y mismo formulario que usa kodexa.ar hoy (ver app/api/forminit/route.ts).
const forminit = new Forminit({ proxyUrl: "/api/forminit" })

const PRODUCT_TYPE = "Producto Kodexa (Nexo / Nodo)"

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
  /** "general" = consulta de proyecto. "product" = interés en Nexo/Nodo. */
  variant?: "general" | "product"
  /** Identifica desde qué página se envió (campo oculto para segmentar leads). */
  source?: string
  defaultProductInterest?: ProductInterest
  submitLabel?: string
}

export function ContactForm({ variant = "general", source = "contacto", defaultProductInterest = "unknown", submitLabel = "Hablemos de tu proyecto" }: Props) {
  const uid = useId()
  const isProduct = variant === "product"
  const [projectType, setProjectType] = useState("")
  const [productInterest, setProductInterest] = useState<ProductInterest>(defaultProductInterest)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const leadType: LeadType = isProduct ? "product" : (projectTypes.find((t) => t.label === projectType)?.leadType ?? "other")
  const id = (n: string) => `${uid}-${n}`

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const data = new FormData(e.currentTarget)
    try {
      setSubmitting(true)
      const { error } = await forminit.submit(site.forminitFormId, data)
      if (error) throw new Error()
      trackEvent("lead_form_submit", { source, leadType, productInterest: isProduct ? productInterest : null })
      window.location.href = "/gracias"
    } catch {
      setError("Ocurrió un error al enviar. Intentá nuevamente o escribinos por WhatsApp.")
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit} aria-describedby={error ? id("error") : undefined} className="glass p-6 text-ink md:p-10">
      <div className="grid gap-6 md:grid-cols-2">
        <input type="hidden" name="fi-text-leadType" value={leadType} />
        <input type="hidden" name="fi-text-source" value={source} />
        {isProduct && (
          <>
            <input type="hidden" name="fi-text-productInterest" value={productInterest} />
            <input type="hidden" name="fi-select-projectType" value={PRODUCT_TYPE} />
          </>
        )}

        <div>
          <label htmlFor={id("name")} className={labelCls}>Nombre</label>
          <input id={id("name")} name="fi-sender-fullName" type="text" required autoComplete="name" placeholder="Tu nombre" className={field} />
        </div>
        <div>
          <label htmlFor={id("email")} className={labelCls}>Email</label>
          <input id={id("email")} name="fi-sender-email" type="email" required autoComplete="email" placeholder="tu@email.com" className={field} />
        </div>

        {isProduct ? (
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
              <select id={id("type")} name="fi-select-projectType" required value={projectType} onChange={(e) => setProjectType(e.target.value)} className={field}>
                <option value="" disabled>Seleccionar</option>
                {projectTypes.map(({ label }) => (
                  <option key={label} value={label}>{label}</option>
                ))}
              </select>
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
            rows={5}
            placeholder={isProduct ? "Contanos qué te gustaría resolver en tu negocio…" : "Contanos qué necesitás construir y cuál es tu idea…"}
            className={`${field} min-h-36 resize-y`}
          />
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
