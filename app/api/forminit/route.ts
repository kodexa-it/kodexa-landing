import type { NextRequest } from "next/server"
import { createForminitProxy } from "forminit/next"
import { site } from "@/lib/content/site"
import { validateLead } from "@/lib/lead-validation"

const proxy = createForminitProxy({
  apiKey: process.env.FORMINIT_API_KEY!,
})

const bad = (status: number, message: string) =>
  Response.json({ error: "VALIDATION_ERROR", message }, { status })

/**
 * Proxy a Forminit con validación del lado del servidor: aunque alguien llame a esta API
 * directamente (sin pasar por el formulario), los datos tienen que cumplir las mismas reglas.
 * Además solo permite enviar al formulario de Kodexa, para que nadie use nuestra API key con otro.
 */
export async function POST(req: NextRequest) {
  const type = req.headers.get("content-type") ?? ""
  if (!type.includes("multipart/form-data") && !type.includes("application/x-www-form-urlencoded")) {
    return bad(415, "Formato no soportado.")
  }

  let form: FormData
  try {
    form = await req.clone().formData()
  } catch {
    return bad(400, "No se pudieron leer los datos.")
  }

  if (form.get("forminitFormId") !== site.forminitFormId) return bad(400, "Formulario inválido.")

  const str = (k: string) => (typeof form.get(k) === "string" ? (form.get(k) as string) : "")
  const errors = validateLead(
    {
      name: str("fi-sender-fullName"),
      business: str("fi-text-business"),
      contactMethod: str("fi-text-contactMethod"),
      email: str("fi-sender-email"),
      whatsapp: str("fi-text-whatsapp"),
      message: str("fi-text-message"),
      projectType: str("fi-select-projectType"),
    },
    { requireProjectType: true },
  )
  const first = Object.values(errors)[0]
  if (first) return bad(400, first)

  return proxy.POST(req)
}
