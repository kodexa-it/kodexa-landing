import Link from "next/link"
import { ecosystem } from "@/lib/products"

/** WEB → NEXO → NODO. Cada pieza funciona sola; el flujo no implica contratar las tres. */
export function EcosystemFlow({ compact = false }: { compact?: boolean }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-stretch gap-3 md:gap-0">
        {ecosystem.map((item, i) => (
          <div key={item.key} className="flex flex-col md:flex-row md:flex-1 md:items-stretch">
            <Link
              href={item.href}
              className="group relative flex-1 border border-border/50 bg-card p-6 hover:border-accent/60 transition-colors duration-300"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-[family-name:var(--font-bebas)] text-4xl tracking-tight group-hover:text-accent transition-colors">
                {item.name}
              </h3>
              <div className="mt-3 w-8 h-px bg-accent/60 group-hover:w-full transition-all duration-500" />
              <p className="mt-4 font-mono text-sm text-foreground/80">{item.title}</p>
              {!compact && (
                <p className="mt-1 font-mono text-sm text-muted-foreground">{item.hook}</p>
              )}
            </Link>

            {i < ecosystem.length - 1 && (
              <div
                aria-hidden="true"
                className="flex items-center justify-center py-1 md:py-0 md:px-3 font-mono text-accent"
              >
                <span className="md:hidden">↓</span>
                <span className="hidden md:inline">→</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 font-mono text-xs text-muted-foreground max-w-2xl">
        Cada solución funciona de forma independiente. Podés empezar por una y
        sumar las otras cuando las necesites.
      </p>
    </div>
  )
}
