import type { ReactNode } from "react"

/** Figura editorial: contenido visual + epígrafe; opcionalmente una etiqueta que aclara que es conceptual. */
export function CaseFigure({
  children,
  caption,
  badge,
  badgeInline = false,
  className = "",
}: {
  children: ReactNode
  caption: string
  badge?: string
  /** La etiqueta va sobre el contenido en lugar de flotar sobre la imagen (para no tapar elementos). */
  badgeInline?: boolean
  className?: string
}) {
  return (
    <figure className={`relative ${className}`}>
      {badge && badgeInline && (
        <span className="t-label mb-5 inline-block rounded-full border border-line bg-white/85 px-3 py-1.5 text-ink-soft">{badge}</span>
      )}
      {children}
      {badge && !badgeInline && (
        <span className="t-label pointer-events-none absolute left-4 top-4 rounded-full border border-line bg-white/85 px-3 py-1.5 text-ink-soft backdrop-blur-sm">
          {badge}
        </span>
      )}
      <figcaption className="mt-4 text-sm text-ink-faint">{caption}</figcaption>
    </figure>
  )
}
