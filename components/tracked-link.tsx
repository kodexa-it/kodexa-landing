"use client"

import Link from "next/link"
import type { ComponentProps } from "react"
import { trackEvent } from "@/lib/analytics"

type Props = ComponentProps<typeof Link> & {
  event?: string
  eventProps?: Record<string, string | number | boolean | null>
}

/** Link con medición de clics. Usa <a> para anclas (#contact) y Link para rutas. */
export function TrackedLink({
  event = "cta_click",
  eventProps,
  onClick,
  href,
  ...rest
}: Props) {
  return (
    <Link
      href={href}
      {...rest}
      onClick={(e) => {
        trackEvent(event, eventProps)
        onClick?.(e)
      }}
    />
  )
}
