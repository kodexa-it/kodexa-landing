"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Escenario de equipos (notebook + celular) que se escala al ancho disponible.
 * Se dibuja a tamaño fijo (STAGE_W × STAGE_H) para que las pantallas internas
 * mantengan proporciones exactas. Maneja la reproducción de escenas: avance
 * automático, pausa fuera de pantalla y modo de movimiento reducido.
 */
export const STAGE_W = 760
export const STAGE_H = 560

export type Scene = { id: string; label: string; hint?: string; ms: number }
export type Px = React.CSSProperties & Record<`--${string}`, string | number>
export const d = (ms: number): Px => ({ animationDelay: `${ms}ms` })

export function DeviceStage({
  scenes,
  step: stepProp,
  onStepChange,
  nav = true,
  navLabel,
  className,
  maxHeight,
  children,
}: {
  scenes: readonly Scene[]
  /** Escena controlada desde afuera (opcional). */
  step?: number
  onStepChange?: (i: number) => void
  nav?: boolean
  navLabel: string
  className?: string
  /** Alto máximo del conjunto (escenario + navegación), p. ej. "calc(100svh - 200px)". */
  maxHeight?: string
  children: (step: number, key: string) => ReactNode
}) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState<number | null>(null)
  const [inner, setInner] = useState(0)
  const [cycle, setCycle] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [reduced, setReduced] = useState(false)
  const step = stepProp ?? inner

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / STAGE_W))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const apply = () => setReduced(mq.matches)
    apply()
    mq.addEventListener("change", apply)
    return () => mq.removeEventListener("change", apply)
  }, [])

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    let onScreen = true
    const sync = () => setPlaying(onScreen && !document.hidden)
    const io = new IntersectionObserver(([e]) => {
      onScreen = e.isIntersecting
      sync()
    }, { threshold: 0.25 })
    io.observe(el)
    document.addEventListener("visibilitychange", sync)
    return () => {
      io.disconnect()
      document.removeEventListener("visibilitychange", sync)
    }
  }, [])

  const go = (i: number) => {
    setInner(i)
    setCycle((c) => c + 1)
    onStepChange?.(i)
  }

  useEffect(() => {
    if (!playing || reduced) return
    const t = window.setTimeout(() => go((step + 1) % scenes.length), scenes[step].ms)
    return () => window.clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, cycle, playing, reduced])

  const k = `${step}-${cycle}`
  // ancho máximo para que escenario + navegación entren en maxHeight
  const maxW = maxHeight ? `calc((${maxHeight} - ${nav ? 56 : 0}px) * ${STAGE_W / STAGE_H})` : undefined

  return (
    <div className={cn("eco relative mx-auto w-full min-w-0", !playing && "eco-paused", reduced && "eco-static", className)} style={{ maxWidth: maxW }}>
      <div ref={wrapRef} className="relative w-full" style={{ aspectRatio: `${STAGE_W} / ${STAGE_H}` }}>
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 origin-top-left select-none transition-opacity duration-500"
          style={{ width: STAGE_W, height: STAGE_H, transform: `scale(${scale ?? 0.75})`, opacity: scale ? 1 : 0 }}
        >
          {children(step, k)}
        </div>
      </div>

      {nav && (
        // El ancho del conjunto depende del alto disponible (maxHeight), así que el selector se reparte
        // el ancho del contenedor en columnas iguales en vez de medir su contenido: nunca lo excede ni
        // necesita scroll horizontal. Los textos auxiliares aparecen solo si el contenedor tiene lugar.
        <div className="@container relative z-10 mx-auto -mt-1 w-full">
          <div
            className="grid w-full grid-flow-col auto-cols-fr gap-0.5 rounded-[1.4rem] border border-white/80 bg-white/70 p-1 shadow-[var(--shadow-glass)] backdrop-blur-xl @[34rem]:rounded-full"
            role="group"
            aria-label={navLabel}
          >
            {scenes.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => go(i)}
                aria-pressed={step === i}
                className={cn(
                  "relative min-w-0 overflow-hidden rounded-[1.1rem] px-2 py-2 text-center transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand @[34rem]:rounded-full @[34rem]:px-4",
                  step === i ? "bg-ink text-white" : "text-ink-soft hover:bg-ink/5 hover:text-ink",
                )}
              >
                <span className="flex flex-col items-center justify-center @[34rem]:flex-row @[34rem]:flex-wrap @[34rem]:items-baseline @[34rem]:gap-x-1.5">
                  <span className={cn("hidden font-mono text-[0.65rem] @[34rem]:inline", step === i ? "text-brand-soft" : "text-ink-faint")}>0{i + 1}</span>
                  <span className="text-balance text-[0.78rem] font-medium leading-tight @[34rem]:text-[0.8rem]">{s.label}</span>
                  {s.hint && <span className={cn("hidden text-[0.72rem] leading-tight @[46rem]:inline", step === i ? "text-white/60" : "text-ink-faint")}>{s.hint}</span>}
                </span>
                {step === i && !reduced && (
                  <span key={k} className="eco-progress absolute bottom-0 left-0 h-[2px] bg-brand" style={{ animationDuration: `${s.ms}ms` }} />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/* ───────────────────────── Equipos ───────────────────────── */

export function Laptop({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute left-[14px] top-[40px] w-[600px]">
      <div className="rounded-[22px] bg-[linear-gradient(160deg,#3a3c42,#16171a)] p-[10px] shadow-[0_50px_80px_-40px_rgb(32_33_36/0.65),0_0_0_1px_rgb(255_255_255/0.08)_inset]">
        <div className="relative h-[362px] overflow-hidden rounded-[13px] bg-white">
          {children}
          {/* reflejo del vidrio */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgb(255_255_255/0.16)_0%,transparent_32%)]" />
        </div>
      </div>
      {/* base */}
      <div className="relative -mt-[2px] -ml-[14px] h-[16px] w-[628px] rounded-b-[18px] rounded-t-[4px] bg-[linear-gradient(180deg,#e6e7ea,#b9bbc0)] shadow-[0_24px_40px_-18px_rgb(32_33_36/0.55)]">
        <div className="mx-auto h-[6px] w-[110px] rounded-b-[8px] bg-[#a9abb0]" />
      </div>
    </div>
  )
}

export function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className="eco-float absolute left-[552px] top-[128px] w-[204px]">
      <div className="rounded-[40px] bg-[linear-gradient(160deg,#45474d,#121316)] p-[7px] shadow-[0_50px_70px_-30px_rgb(32_33_36/0.7),0_0_0_1px_rgb(255_255_255/0.1)_inset]">
        <div className="relative h-[400px] overflow-hidden rounded-[33px] bg-[#f4efe8]">
          {/* isla */}
          <div className="absolute left-1/2 top-[8px] z-20 h-[20px] w-[66px] -translate-x-1/2 rounded-full bg-black" />
          {children}
        </div>
      </div>
    </div>
  )
}

export function Toast({ delay, dot, title, text, app, logo, badge }: { delay: number; dot: string; title: string; text: string; app: string; logo?: string; badge?: string }) {
  return (
    <div className="eco-toast flex items-center gap-3 rounded-2xl border border-white/80 bg-white/85 p-3 shadow-[0_24px_40px_-20px_rgb(32_33_36/0.45)] backdrop-blur-xl" style={d(delay)}>
      <span className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-xl text-[0.6rem] font-semibold text-white", dot)}>{logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={logo} alt="" className="h-4 w-4" />
        ) : (
          (badge ?? app.slice(0, 2).toUpperCase())
        )}
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-2 text-[0.72rem] font-semibold text-ink">
          {title} <span className="font-normal text-ink-faint">· {app}</span>
        </span>
        <span className="block truncate text-[0.7rem] text-ink-soft">{text}</span>
      </span>
    </div>
  )
}

export function Cursor({ className, style }: { className?: string; style?: Px }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("absolute z-30 h-[22px] w-[22px] drop-shadow-[0_2px_3px_rgb(0_0_0/0.35)]", className)} style={style}>
      <path d="M4 2.5 19 13l-6.6 1.2L16 21l-2.6 1.2-3.5-6.9L5 19.8Z" fill="#202124" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}

export function BrowserBar({ url, dark }: { url: string; dark?: boolean }) {
  return (
    <div className={cn("absolute inset-x-0 top-0 z-10 flex h-[30px] items-center gap-1.5 px-3", dark ? "bg-[#0a1a2c]" : "border-b border-ink/[0.06] bg-white")}>
      <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
      <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
      <span className="h-2 w-2 rounded-full bg-[#28c840]" />
      <span className={cn("mx-auto rounded-md px-10 py-[3px] text-[0.52rem]", dark ? "bg-white/10 text-white/60" : "bg-ink/[0.05] text-ink-faint")}>{url}</span>
    </div>
  )
}

