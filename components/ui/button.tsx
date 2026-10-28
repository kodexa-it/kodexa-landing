"use client"

import { Link } from "@/components/i18n/link"
import type { ComponentProps, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { trackEvent } from "@/lib/analytics"
import { trackWhatsappClick, type WhatsappCta } from "@/lib/whatsapp"

type Variant = "primary" | "secondary" | "ghost" | "onDark"

const variants: Record<Variant, string> = {
  // Naranja de marca con texto grafito: contraste ≥ 6:1 (el blanco sobre naranja no alcanza).
  primary:
    "bg-brand text-ink shadow-[0_1px_0_rgb(255_255_255/0.45)_inset,0_12px_28px_-10px_rgb(251_110_26/0.7)] hover:bg-[#ff7f33] hover:shadow-[0_1px_0_rgb(255_255_255/0.45)_inset,0_18px_34px_-10px_rgb(251_110_26/0.8)]",
  secondary:
    "bg-white/60 text-ink border border-ink/12 backdrop-blur-md hover:bg-white hover:border-ink/25",
  ghost: "text-ink hover:bg-ink/5",
  onDark: "bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/18",
}

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-medium leading-none tracking-[-0.01em] transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 disabled:opacity-60 disabled:pointer-events-none"

type Common = {
  variant?: Variant
  className?: string
  children: ReactNode
  event?: string
  eventProps?: Record<string, string | number | boolean | null>
  /** Si el enlace va a WhatsApp: registra `whatsapp_click` (GA4 + planilla) en lugar de un evento genérico. */
  whatsapp?: WhatsappCta
}

/** Enlace con apariencia de botón. Interno → next/link, externo → <a rel=noopener>. */
export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  event,
  eventProps,
  whatsapp,
  ...rest
}: Common & Omit<ComponentProps<"a">, "href" | "className" | "children"> & { href: string }) {
  const cls = cn(base, variants[variant], className)
  const onClick = whatsapp ? () => trackWhatsappClick(whatsapp) : event ? () => trackEvent(event, eventProps) : undefined
  const external = /^https?:\/\//.test(href)

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={cls} onClick={onClick} {...(rest as object)}>
      {children}
    </Link>
  )
}

export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: Omit<Common, "event" | "eventProps" | "whatsapp"> & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  )
}
