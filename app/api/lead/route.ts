/**
 * Copia cada consulta del sitio a una planilla de Google, vía un Apps Script publicado
 * como aplicación web (ver docs/google-sheets-leads.md).
 * Si las variables no están configuradas, no hace nada: Forminit sigue siendo el canal principal.
 *   SHEETS_WEBHOOK_URL    URL de la aplicación web de Apps Script (…/exec)
 *   SHEETS_WEBHOOK_SECRET clave compartida con el script
 */
const FIELDS = ["name", "email", "whatsapp", "projectType", "budget", "message", "source", "productInterest", "page"] as const

export async function POST(req: Request) {
  const url = process.env.SHEETS_WEBHOOK_URL
  const secret = process.env.SHEETS_WEBHOOK_SECRET
  if (!url || !secret) return new Response(null, { status: 204 })

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return new Response("bad request", { status: 400 })
  }

  // Solo campos conocidos, como texto y con largo acotado.
  const lead: Record<string, string> = {}
  for (const k of FIELDS) {
    const v = body[k]
    lead[k] = typeof v === "string" ? v.slice(0, 3000) : ""
  }
  if (!lead.name && !lead.email && !lead.message) return new Response("empty", { status: 400 })

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, secret }),
      redirect: "follow",
    })
    return new Response(null, { status: res.ok ? 204 : 502 })
  } catch {
    return new Response(null, { status: 502 })
  }
}
