"use client"

import type { ComponentProps } from "react"
import { whatsappHref } from "@/lib/content/site"
import { trackWhatsappClick, type WhatsappCta } from "@/lib/whatsapp"

/**
 * Enlace simple a WhatsApp con medición de clics (para enlaces que no son botones de marca).
 * Usa el número configurado en lib/content/site.ts; no hay números sueltos en el código.
 */
export function WhatsappLink({
  message,
  cta,
  children,
  ...rest
}: { message?: string; cta: WhatsappCta } & Omit<ComponentProps<"a">, "href" | "target" | "rel" | "onClick">) {
  return (
    <a {...rest} href={whatsappHref(message)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsappClick(cta)}>
      {children}
    </a>
  )
}
