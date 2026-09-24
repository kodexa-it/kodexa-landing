import type { ReactNode } from "react"
import { TrackedLink } from "@/components/tracked-link"

/** Bloques compartidos por /productos, /productos/nexo y /productos/nodo. */

export function ProductHero({
  eyebrow,
  title,
  description,
  product,
  ctaLabel,
  secondary,
}: {
  eyebrow: string
  title: ReactNode
  description: string
  product: string
  ctaLabel: string
  secondary?: { label: string; href: string }
}) {
  return (
    <div className="relative page-gutter pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-accent/20 blur-[140px] pointer-events-none" />

      <div className="absolute bottom-8 md:bottom-12 page-gutter-right z-10">
        <div className="border border-white/15 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-gray-500">
          Digital Product Studio
        </div>
      </div>

      <div className="max-w-4xl relative z-10">
        <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-accent border border-accent/40 px-3 py-1">
          {eyebrow}
        </span>

        <h1 className="mt-6 text-[40px] md:text-[72px] leading-[0.95] font-[family-name:var(--font-bebas)]">
          {title}
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
          {description}
        </p>

        <div className="mt-10 flex items-center gap-6 flex-wrap">
          <TrackedLink
            href="#contact"
            event="product_cta_click"
            eventProps={{ location: "hero", product }}
            className="inline-block bg-accent text-black px-8 py-4 uppercase text-sm"
          >
            {ctaLabel}
          </TrackedLink>
          {secondary && (
            <TrackedLink
              href={secondary.href}
              event="product_cta_click"
              eventProps={{ location: "hero_secondary", product }}
              className="font-mono text-[11px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
            >
              {secondary.label}
            </TrackedLink>
          )}
        </div>
      </div>
    </div>
  )
}

export function ProductSection({
  title,
  intro,
  children,
  className = "mt-32",
}: {
  title: string
  intro?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`${className} max-w-6xl mx-auto px-6`}>
      <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-bebas)]">
        {title}
      </h2>
      {intro && <p className="mt-5 max-w-2xl text-gray-400 leading-relaxed">{intro}</p>}
      <div className="mt-10">{children}</div>
    </div>
  )
}

export function InfoCards({
  items,
  columns = 2,
}: {
  items: { title: string; text: string }[]
  columns?: 2 | 3
}) {
  return (
    <div
      className={`grid gap-6 text-sm text-gray-400 sm:grid-cols-2 ${
        columns === 3 ? "lg:grid-cols-3" : ""
      }`}
    >
      {items.map((item) => (
        <div
          key={item.title}
          className="border border-white/10 rounded-xl p-6 bg-white/[0.02] hover:border-accent/40 transition-colors duration-300"
        >
          <p className="font-semibold text-white">{item.title}</p>
          <p className="mt-2">{item.text}</p>
        </div>
      ))}
    </div>
  )
}

export function Steps({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className="grid gap-6 md:grid-cols-3">
      {items.map((item, i) => (
        <li key={item.title} className="border border-white/10 rounded-xl p-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            Paso {String(i + 1).padStart(2, "0")}
          </span>
          <p className="mt-3 font-semibold text-white">{item.title}</p>
          <p className="mt-2 text-sm text-gray-400 leading-relaxed">{item.text}</p>
        </li>
      ))}
    </ol>
  )
}
