"use client"

import { useEffect, useId, useRef, useState } from "react"
import { Forminit } from "forminit"
import { trackEvent } from "@/lib/analytics"
import { site, whatsappHref } from "@/lib/content/site"
import { HONEYPOT_FIELD, LIMITS, clean, digitsOnly, looksLikeBot, validateLead, type ContactMethod, type LeadErrors } from "@/lib/lead-validation"
import { buildLeadWhatsappMessage, trackWhatsappClick } from "@/lib/whatsapp"
import type { LeadType, ProductInterest } from "@/lib/content/products"
import { Button, ButtonLink } from "@/components/ui/button"
import { WhatsappLink } from "@/components/ui/whatsapp-link"
import { Whatsapp } from "@/components/ui/icons"

// Mismo proxy y mismo formulario que usa kodexa.ar hoy (ver app/api/forminit/route.ts).
const forminit = new Forminit({ proxyUrl: "/api/forminit" })

/** Lo que el visitante elige como tipo de proyecto, con el tipo de lead y el identificador para analítica. */
const projectTypes: { label: string; leadType: LeadType; service: string }[] = [
  { label: "Sitio web", leadType: "web", service: "sitio-web" },
  { label: "Tienda online", leadType: "web", service: "tienda-online" },
  { label: "Sistema a medida", leadType: "software", service: "sistema-a-medida" },
  { label: "Automatización", leadType: "software", service: "automatizacion" },
  { label: "Nexo", leadType: "product", service: "nexo" },
  { label: "Nodo", leadType: "product", service: "nodo" },
  { label: "Otro", leadType: "other", service: "otro" },
]

const productInterests: { label: string; value: ProductInterest; projectType: string; service: string }[] = [
  { label: "Nexo — asistente digital", value: "nexo", projectType: "Nexo", service: "nexo" },
  { label: "Nodo — CRM", value: "nodo", projectType: "Nodo", service: "nodo" },
  { label: "Nexo + Nodo", value: "bundle", projectType: "Nexo + Nodo", service: "nexo-nodo" },
  { label: "Todavía no sé cuál", value: "unknown", projectType: "Producto Kodexa (Nexo / Nodo)", service: "productos" },
]

const field =
  "w-full rounded-2xl border border-ink/12 bg-white/80 px-4 py-3.5 text-base text-ink placeholder:text-ink-faint/70 outline-none transition-[border-color,box-shadow] duration-200 hover:border-ink/25 focus:border-ink focus:ring-4 focus:ring-brand/25 aria-[invalid=true]:border-red-600"
const labelCls = "mb-2 block text-sm font-medium text-ink"

type Action = "contact_me" | "whatsapp"

type Props = {
  /** "general" = consulta de proyecto. "product" = interés en Nexo/Nodo. "quick" = igual que general, con estilo para fondo oscuro (home). */
  variant?: "general" | "product" | "quick"
  /** Identifica desde qué página se envió (campo oculto para segmentar leads). */
  source?: string
  defaultProductInterest?: ProductInterest
}

export function ContactForm({ variant = "general", source = "contacto", defaultProductInterest = "unknown" }: Props) {
  const uid = useId()
  const isProduct = variant === "product"
  const isQuick = variant === "quick"
  const id = (n: string) => `${uid}-${n}`

  const [values, setValues] = useState({ name: "", business: "", projectType: "", method: "whatsapp" as ContactMethod, whatsapp: "", email: "", message: "" })
  const [productInterest, setProductInterest] = useState<ProductInterest>(defaultProductInterest)
  const [busy, setBusy] = useState<Action | null>(null)
  const [attempted, setAttempted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showSkip, setShowSkip] = useState(false)
  const [saved, setSaved] = useState<{ url: string; opened: boolean; service: string } | null>(null)

  const formRef = useRef<HTMLFormElement>(null)
  const startedAt = useRef(0)
  const startedTracked = useRef(false)
  const lock = useRef(false) // evita envíos dobles por doble clic
  const savedKey = useRef("") // datos ya guardados: un reintento no crea otro registro
  const lastAction = useRef<Action>("contact_me")
  useEffect(() => {
    startedAt.current = Date.now()
  }, [])

  const set = <K extends keyof typeof values>(k: K, v: (typeof values)[K]) => setValues((p) => ({ ...p, [k]: v }))

  const productChoice = productInterests.find((p) => p.value === productInterest)!
  const typeChoice = projectTypes.find((t) => t.label === values.projectType)
  const projectType = isProduct ? productChoice.projectType : values.projectType
  const service = isProduct ? productChoice.service : (typeChoice?.service ?? "")
  const leadType: LeadType = isProduct ? "product" : (typeChoice?.leadType ?? "other")

  /** Solo se valida el dato del medio elegido: el otro campo no existe en pantalla. */
  const check = (): LeadErrors =>
    validateLead(
      {
        name: values.name,
        business: values.business,
        contactMethod: values.method,
        email: values.method === "email" ? values.email : "",
        whatsapp: values.method === "whatsapp" ? values.whatsapp : "",
        message: values.message,
        projectType,
      },
      { requireProjectType: !isProduct },
    )
  // Después del primer intento, los errores se actualizan mientras la persona corrige.
  const errors: LeadErrors = attempted ? check() : {}

  const pristine = !clean(values.name) && !clean(values.business) && !clean(values.whatsapp) && !clean(values.email) && !clean(values.message)

  const normalized = () => ({
    name: clean(values.name),
    business: clean(values.business),
    projectType,
    contactMethod: values.method,
    email: values.method === "email" ? clean(values.email).toLowerCase() : "",
    whatsapp: values.method === "whatsapp" ? digitsOnly(values.whatsapp) : "",
    message: values.message.trim(),
  })

  async function saveLead(n: ReturnType<typeof normalized>, action: Action) {
    const data = new FormData()
    data.set("fi-sender-fullName", n.name)
    if (n.email) data.set("fi-sender-email", n.email)
    if (n.whatsapp) data.set("fi-text-whatsapp", n.whatsapp)
    if (n.business) data.set("fi-text-business", n.business)
    data.set("fi-select-projectType", n.projectType)
    if (n.message) data.set("fi-text-message", n.message)
    data.set("fi-text-leadType", leadType)
    data.set("fi-text-source", source)
    data.set("fi-text-contactMethod", n.contactMethod)
    data.set("fi-text-action", action)
    data.set("fi-text-status", "nuevo")
    if (isProduct) data.set("fi-text-productInterest", productInterest)

    const { error } = await forminit.submit(site.forminitFormId, data)
    if (error) throw new Error("forminit")

    // El lead ya está a salvo en Forminit: a partir de acá solo se mide y se copia a la planilla.
    const params = { form_source: source, contact_method: n.contactMethod, project_type: n.projectType, lead_type: leadType, action }
    trackEvent("form_submit", params)
    trackEvent("generate_lead", params)

    return fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        ...n,
        source,
        productInterest: isProduct ? productInterest : "",
        page: window.location.pathname,
        action,
      }),
    }).catch(() => {})
  }

  const focusFirst = (found: LeadErrors) => {
    const order: [keyof LeadErrors, string][] = [
      ["name", "name"],
      ["business", "business"],
      ["projectType", "type"],
      ["contactMethod", "m-whatsapp"],
      ["whatsapp", "contact"],
      ["email", "contact"],
      ["message", "message"],
    ]
    const hit = order.find(([k]) => found[k])
    if (hit) document.getElementById(id(hit[1]))?.focus()
  }

  /** WhatsApp sin completar el formulario: se abre directo y se registra como interacción aparte (no es un lead). */
  function openWhatsappDirect() {
    trackWhatsappClick({ location: "contact", label: "form_whatsapp_direct", service: service || undefined })
    const text = projectType ? `Hola Kodexa! Quiero hablar sobre un proyecto: ${projectType}.` : "Hola Kodexa! Quiero hablar sobre un proyecto."
    window.open(whatsappHref(text), "_blank", "noopener,noreferrer")
  }

  async function submit(action: Action) {
    if (lock.current) return
    lastAction.current = action
    setError(null)
    setShowSkip(false)

    // Bots: campo trampa completo o envío instantáneo → simulamos éxito sin enviar nada.
    const honeypot = formRef.current ? new FormData(formRef.current).get(HONEYPOT_FIELD) : ""
    if (looksLikeBot(honeypot, startedAt.current)) {
      if (action === "contact_me") window.location.href = "/gracias"
      return
    }

    if (action === "whatsapp" && pristine) {
      openWhatsappDirect()
      return
    }

    setAttempted(true)
    const found = check()
    const keys = Object.keys(found)
    if (keys.length) {
      focusFirst(found)
      trackEvent("form_error", { form_source: source, error_type: "validation", error_fields: keys.join(",") })
      if (action === "whatsapp") setShowSkip(true)
      return
    }

    // La ventana se abre ahora, dentro del clic, para que el navegador no la bloquee; se completa al guardar.
    let win: Window | null = null
    if (action === "whatsapp") {
      try {
        win = window.open("", "_blank")
        if (win) win.opener = null
      } catch {}
    }

    lock.current = true
    setBusy(action)
    let redirecting = false
    try {
      const n = normalized()
      const key = JSON.stringify(n)
      if (savedKey.current !== key) {
        const sheetsCopy = await saveLead(n, action)
        savedKey.current = key
        // En "Que me contacten" se espera un momento a la copia en la planilla antes de cambiar de página.
        if (action === "contact_me") await Promise.race([sheetsCopy, new Promise((r) => setTimeout(r, 2500))])
      }

      if (action === "contact_me") {
        redirecting = true
        window.location.href = "/gracias"
        return
      }

      const url = whatsappHref(buildLeadWhatsappMessage({ ...n, contactMethod: n.contactMethod }))
      const opened = !!win && !win.closed
      if (opened) {
        trackWhatsappClick({ location: "contact", label: "form_continue_whatsapp", service: service || undefined })
        win!.location.href = url
      }
      setSaved({ url, opened, service })
    } catch {
      win?.close()
      trackEvent("form_error", { form_source: source, error_type: "server" })
      setError("No pudimos guardar tu consulta. Reintentá o escribinos directo por WhatsApp.")
    } finally {
      lock.current = false
      if (!redirecting) setBusy(null)
    }
  }

  function reset() {
    setSaved(null)
    setAttempted(false)
    setValues({ name: "", business: "", projectType: "", method: "whatsapp", whatsapp: "", email: "", message: "" })
    savedKey.current = ""
    startedAt.current = Date.now()
  }

  const invalid = (k: keyof LeadErrors, idKey: string = k) =>
    errors[k] ? { "aria-invalid": true as const, "aria-describedby": id(`${idKey}-err`) } : {}

  const container = isQuick
    ? "relative rounded-[1.75rem] bg-paper p-6 text-ink shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] md:p-8"
    : "glass relative p-6 text-ink md:p-10"

  if (saved) {
    return (
      <div className={container} role="status">
        <p className="t-label text-ink-faint">Consulta guardada</p>
        <h3 className="t-h3 mt-3">Recibimos tu consulta.</h3>
        <p className="mt-3 text-ink-soft">
          {saved.opened
            ? "Se abrió WhatsApp con tu mensaje listo. Si lo enviás desde ahí, lo vemos más rápido. Si no se abrió, tocá el botón."
            : "Para que la veamos más rápido, enviá el mensaje desde WhatsApp. Tu navegador no abrió la ventana: tocá el botón."}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={saved.url} whatsapp={{ location: "contact", label: "form_open_whatsapp", service: saved.service || undefined }}>
            <Whatsapp width={18} height={18} /> Abrir WhatsApp
          </ButtonLink>
          <Button type="button" variant="ghost" onClick={reset}>
            Enviar otra consulta
          </Button>
        </div>
        <p className="mt-5 text-sm text-ink-faint">Abrir WhatsApp no significa que el mensaje se haya enviado: confirmalo en la conversación.</p>
      </div>
    )
  }

  const skipMessage = projectType ? `Hola Kodexa! Quiero hablar sobre un proyecto: ${projectType}.` : "Hola Kodexa! Quiero hablar sobre un proyecto."

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={(e) => {
        e.preventDefault()
        void submit("contact_me")
      }}
      onFocus={(e) => {
        if (startedTracked.current || (e.target as HTMLElement).getAttribute("name") === HONEYPOT_FIELD) return
        startedTracked.current = true
        trackEvent("form_start", { form_source: source })
      }}
      aria-describedby={error ? id("error") : undefined}
      className={container}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {/* Anti-spam: campo invisible para personas (los bots suelen completarlo). */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor={id("hp")}>No completar</label>
          <input id={id("hp")} name={HONEYPOT_FIELD} type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
        </div>

        <div>
          <label htmlFor={id("name")} className={labelCls}>Nombre</label>
          <input
            id={id("name")}
            type="text"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            required
            maxLength={LIMITS.nameMax}
            autoComplete="name"
            placeholder="Tu nombre"
            className={field}
            {...invalid("name")}
          />
          <FieldError id={id("name-err")} msg={errors.name} />
        </div>
        <div>
          <label htmlFor={id("business")} className={labelCls}>
            Nombre del negocio <span className="font-normal text-ink-faint">(opcional)</span>
          </label>
          <input
            id={id("business")}
            type="text"
            value={values.business}
            onChange={(e) => set("business", e.target.value)}
            maxLength={LIMITS.businessMax}
            autoComplete="organization"
            placeholder="Cómo se llama tu negocio"
            className={field}
            {...invalid("business")}
          />
          <FieldError id={id("business-err")} msg={errors.business} />
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
          <div className="md:col-span-2">
            <label htmlFor={id("type")} className={labelCls}>Tipo de proyecto</label>
            <select id={id("type")} required value={values.projectType} onChange={(e) => set("projectType", e.target.value)} className={field} {...invalid("projectType", "type")}>
              <option value="" disabled>Seleccionar</option>
              {projectTypes.map(({ label }) => (
                <option key={label} value={label}>{label}</option>
              ))}
            </select>
            <FieldError id={id("type-err")} msg={errors.projectType} />
          </div>
        )}

        <fieldset className="md:col-span-2">
          <legend className={labelCls}>¿Cómo preferís que te contactemos?</legend>
          <div className="grid grid-cols-2 gap-3">
            {(["whatsapp", "email"] as const).map((m) => (
              <label
                key={m}
                className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-ink/12 bg-white/80 px-4 py-3.5 text-[0.95rem] font-medium text-ink transition-colors hover:border-ink/25 has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-white has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-brand/25"
              >
                <input
                  id={id(`m-${m}`)}
                  type="radio"
                  name={`${uid}-method`}
                  value={m}
                  checked={values.method === m}
                  onChange={() => set("method", m)}
                  className="sr-only"
                />
                {m === "whatsapp" ? (
                  <>
                    <Whatsapp width={18} height={18} /> WhatsApp
                  </>
                ) : (
                  "Email"
                )}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="md:col-span-2">
          <label htmlFor={id("contact")} className={labelCls}>
            {values.method === "whatsapp" ? "Tu número de WhatsApp" : "Tu email"}
          </label>
          {values.method === "whatsapp" ? (
            <input
              key="whatsapp"
              id={id("contact")}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              maxLength={24}
              value={values.whatsapp}
              onChange={(e) => set("whatsapp", e.target.value)}
              placeholder="Ej: 11 2345 6789"
              className={field}
              {...invalid("whatsapp", "contact")}
            />
          ) : (
            <input
              key="email"
              id={id("contact")}
              type="email"
              inputMode="email"
              autoComplete="email"
              autoCapitalize="none"
              spellCheck={false}
              maxLength={LIMITS.emailMax}
              value={values.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder="tu@email.com"
              className={field}
              {...invalid("email", "contact")}
            />
          )}
          <FieldError id={id("contact-err")} msg={values.method === "whatsapp" ? errors.whatsapp : errors.email} />
        </div>

        <div className="md:col-span-2">
          <label htmlFor={id("message")} className={labelCls}>
            Mensaje <span className="font-normal text-ink-faint">(opcional)</span>
          </label>
          <textarea
            id={id("message")}
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            maxLength={LIMITS.messageMax}
            rows={3}
            placeholder={isProduct ? "Contanos qué te gustaría resolver en tu negocio…" : "Si querés, contanos brevemente qué tenés en mente…"}
            className={`${field} min-h-24 resize-y`}
            {...invalid("message")}
          />
          <FieldError id={id("message-err")} msg={errors.message} />
        </div>

        <div className="md:col-span-2">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button type="submit" disabled={busy !== null} className="sm:flex-1">
              {busy === "contact_me" ? "Enviando…" : "Que me contacten"}
            </Button>
            <Button type="button" variant="secondary" disabled={busy !== null} onClick={() => void submit("whatsapp")} className="sm:flex-1">
              <Whatsapp width={18} height={18} />
              {busy === "whatsapp" ? "Guardando…" : "Continuar por WhatsApp"}
            </Button>
          </div>

          <div aria-live="polite">
            {error && (
              <div id={id("error")} role="alert" className="mt-4 flex flex-col gap-3 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-800 sm:flex-row sm:items-center sm:justify-between">
                <p>{error}</p>
                <button type="button" onClick={() => void submit(lastAction.current)} disabled={busy !== null} className="shrink-0 rounded-full border border-red-800/30 px-4 py-2 font-medium hover:bg-red-100 disabled:opacity-60">
                  Reintentar
                </button>
              </div>
            )}
            {showSkip && (
              <p className="mt-4 rounded-2xl bg-mist px-4 py-3 text-sm text-ink-soft">
                ¿Preferís no completar el formulario?{" "}
                <WhatsappLink message={skipMessage} cta={{ location: "contact", label: "form_whatsapp_skip", service: service || undefined }} className="font-medium text-brand-ink underline underline-offset-4">
                  Abrir WhatsApp igual
                </WhatsappLink>
                .
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
