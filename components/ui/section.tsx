import Link from "next/link"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Eyebrow({ children, className, onDark }: { children: ReactNode; className?: string; onDark?: boolean }) {
  return (
    <p className={cn("t-label inline-flex items-center gap-2.5", onDark ? "text-white/70" : "text-ink-faint", className)}>
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
      {children}
    </p>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  onDark,
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  align?: "left" | "center"
  onDark?: boolean
  className?: string
  as?: "h1" | "h2"
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
      <Tag className={cn("t-h2", eyebrow && "mt-5", onDark ? "text-white" : "text-ink")}>{title}</Tag>
      {lead && <p className={cn("t-lead mt-5", onDark && "!text-white/70")}>{lead}</p>}
    </div>
  )
}

export function Section({
  children,
  className,
  id,
  labelledBy,
}: {
  children: ReactNode
  className?: string
  id?: string
  labelledBy?: string
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("relative py-20 md:py-28", className)}>
      {children}
    </section>
  )
}

/** Migas de pan (también emite BreadcrumbList vía <JsonLd /> en cada página). */
export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Ruta" className="t-label flex flex-wrap items-center gap-2 text-ink-faint">
      {items.map((item, i) => (
        <span key={item.name} className="inline-flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="transition-colors hover:text-ink">
              {item.name}
            </Link>
          ) : (
            <span aria-current="page" className="text-ink">
              {item.name}
            </span>
          )}
          {i < items.length - 1 && <span aria-hidden="true">/</span>}
        </span>
      ))}
    </nav>
  )
}
