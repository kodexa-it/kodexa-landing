"use client"

import { useEffect, useRef } from "react"
import { LiquidOrb } from "@/components/visuals/liquid-orb"

type Px = React.CSSProperties & Record<`--${string}`, string | number>

/**
 * Composición del hero: un orbe de luz líquida (WebGL) con órbitas finas y
 * chips de cristal que flotan con parallax. Es una ilustración (aria-hidden):
 * no muestra métricas ni resultados reales.
 */
export function HeroVisual() {
  const rootRef = useRef<HTMLDivElement>(null)
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    if (!window.matchMedia("(pointer: fine)").matches) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let raf = 0
    const cur = { x: 0, y: 0 }
    const tick = () => {
      cur.x += (pointer.current.x - cur.x) * 0.08
      cur.y += (pointer.current.y - cur.y) * 0.08
      root.style.setProperty("--px", cur.x.toFixed(4))
      root.style.setProperty("--py", cur.y.toFixed(4))
      if (Math.abs(pointer.current.x - cur.x) + Math.abs(pointer.current.y - cur.y) > 0.001) raf = requestAnimationFrame(tick)
      else raf = 0
    }
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1
      if (!raf) raf = requestAnimationFrame(tick)
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      window.removeEventListener("pointermove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  const par = (depth: number): Px => ({
    transform: `translate3d(calc(var(--px, 0) * ${depth}px), calc(var(--py, 0) * ${depth}px), 0)`,
  })

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[36rem] select-none"
    >
      {/* aurora detrás del orbe */}
      <div className="aurora absolute left-[6%] top-[10%] h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle,rgb(226_69_107/0.30),transparent_65%)] blur-2xl" />
      <div className="aurora absolute right-[0%] bottom-[8%] h-[58%] w-[58%] rounded-full bg-[radial-gradient(circle,rgb(124_92_255/0.18),transparent_65%)] blur-2xl" style={{ animationDelay: "-7s" }} />

      {/* órbitas */}
      <div className="absolute inset-[4%]" style={par(-6)}>
        <div className="orbit absolute inset-0 rounded-full border border-ink/[0.07]">
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand shadow-[0_0_14px_3px_rgb(251_110_26/0.55)]" />
        </div>
        <div className="orbit-rev absolute inset-[9%] rounded-full border border-dashed border-ink/[0.08]">
          <span className="absolute bottom-[14%] left-[6%] h-1.5 w-1.5 rounded-full bg-[#7c5cff] shadow-[0_0_12px_3px_rgb(124_92_255/0.5)]" />
        </div>
      </div>

      {/* sombra de apoyo */}
      <div className="absolute bottom-[9%] left-1/2 h-[7%] w-[46%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgb(120_40_60/0.28),transparent)] blur-md" />

      {/* orbe */}
      <div className="absolute inset-0" style={par(10)}>
        <LiquidOrb className="h-full w-full" pointer={pointer} />
      </div>

      {/* Asistente */}
      <div className="absolute right-[-2%] top-[9%] w-[44%] md:right-[-6%]" style={par(22)}>
        <div className="glass float-b !rounded-[1.25rem] p-3.5 md:p-4">
          <div className="flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-[0.55rem] font-semibold text-white">NX</span>
            <span className="text-[0.7rem] font-medium text-ink">Asistente</span>
            <span className="ml-auto flex gap-1">
              <span className="typing h-1 w-1 rounded-full bg-ink/40" />
              <span className="typing h-1 w-1 rounded-full bg-ink/40" style={{ animationDelay: "0.15s" }} />
              <span className="typing h-1 w-1 rounded-full bg-ink/40" style={{ animationDelay: "0.3s" }} />
            </span>
          </div>
          <div className="mt-2.5 space-y-1.5">
            <div className="h-4 w-[84%] rounded-full rounded-bl-md bg-white/80" />
            <div className="ml-auto h-4 w-[62%] rounded-full rounded-br-md bg-brand/90" />
          </div>
        </div>
      </div>

      {/* En línea */}
      <div className="absolute bottom-[14%] left-[-2%] md:left-[-6%]" style={par(18)}>
        <div className="glass float-a flex items-center gap-2.5 !rounded-full px-4 py-2.5" style={{ animationDelay: "-2s" }}>
          <span className="pulse-dot h-2 w-2 rounded-full bg-brand" />
          <span className="text-[0.72rem] font-medium text-ink">En línea</span>
          <span className="text-[0.72rem] text-ink-soft">tunegocio.com</span>
        </div>
      </div>

      {/* Stack */}
      <div className="absolute bottom-[4%] right-[4%]" style={par(28)}>
        <div className="glass float-b flex items-center gap-2 !rounded-full px-4 py-2.5" style={{ animationDelay: "-4s" }}>
          <span className="font-mono text-[0.7rem] font-medium text-ink">{"</>"}</span>
          <span className="text-[0.7rem] text-ink-soft">Next.js · PostgreSQL</span>
        </div>
      </div>
    </div>
  )
}
