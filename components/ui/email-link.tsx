"use client"

import type { ComponentProps } from "react"
import { contactEmail } from "@/lib/content/site"
import { trackEvent } from "@/lib/analytics"

/**
 * Enlace `mailto:` al correo configurado (NEXT_PUBLIC_CONTACT_EMAIL) con medición de clics.
 * No se renderiza si no hay correo configurado: no se inventan direcciones.
 * El evento `email_click` no incluye la dirección ni datos personales.
 */
export function EmailLink({
  location,
  children,
  subject,
  ...rest
}: { location: string; subject?: string } & Omit<ComponentProps<"a">, "href" | "onClick">) {
  if (!contactEmail) return null
  const href = `mailto:${contactEmail}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`
  return (
    <a {...rest} href={href} onClick={() => trackEvent("email_click", { cta_location: location, contact_method: "email", page_path: window.location.pathname })}>
      {children}
    </a>
  )
}
