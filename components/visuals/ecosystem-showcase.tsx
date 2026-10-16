"use client"

import { cn } from "@/lib/utils"
import { LiquidOrb } from "@/components/visuals/liquid-orb"
import { BrowserBar, Cursor, d, DeviceStage, Laptop, Phone, Toast, type Px, type Scene } from "@/components/visuals/device-stage"

/**
 * El ecosistema Kodexa en acción: 1) la web del negocio recibe la consulta →
 * 2) Nexo la atiende por WhatsApp y agenda el turno → 3) Nodo registra el lead.
 * Negocio y datos son ficticios (ilustración): no muestra métricas ni clientes reales.
 */
export const ECO_SCENES: readonly Scene[] = [
  { id: "web", label: "Tu web", hint: "recibe la consulta", ms: 5600 },
  { id: "nexo", label: "Nexo", hint: "responde y agenda", ms: 5600 },
  { id: "nodo", label: "Nodo", hint: "organiza el lead", ms: 5000 },
]

export function EcosystemShowcase({
  step,
  onStepChange,
  nav = true,
  orb = false,
}: {
  step?: number
  onStepChange?: (i: number) => void
  nav?: boolean
  orb?: boolean
}) {
  return (
    <DeviceStage scenes={ECO_SCENES} step={step} onStepChange={onStepChange} nav={nav} navLabel="Recorrido: cómo trabajan juntos tu web, Nexo y Nodo">
      {(s, k) => (
        <>
          {orb && (
            <div className="absolute left-[250px] top-[-150px] h-[460px] w-[460px]">
              <LiquidOrb className="h-full w-full" />
            </div>
          )}
          <div className="absolute left-[420px] top-[200px] h-[320px] w-[360px] rounded-full bg-[radial-gradient(closest-side,rgb(124_92_255/0.18),transparent)] blur-2xl" />

          <Laptop>
            <div key={k} className="absolute inset-0">
              {s === 0 && <SiteScreen />}
              {s === 1 && <NexoPanel />}
              {s === 2 && <NodoBoard />}
            </div>
          </Laptop>

          <Phone>
            <Chat key={k} step={s} />
          </Phone>

          <div key={`n-${k}`} className="pointer-events-none absolute left-[330px] top-[0px] z-20 w-[226px]">
            {s === 1 && <Toast delay={3900} dot="bg-white ring-1 ring-ink/10" title="Nueva reserva" text="Cancha 2 · mañana 19:00" app="Nexo" logo="/brand/nexo-mark.png" />}
            {s === 2 && <Toast delay={1500} dot="bg-ink" title="Nuevo lead" text="Martín G. · llegó desde Nexo" app="Nodo" badge="ND" />}
          </div>
        </>
      )}
    </DeviceStage>
  )
}

/* ─────────────────── Pantalla 1: sitio del negocio ─────────────────── */

function SiteScreen() {
  return (
    <div className="absolute inset-0 bg-[#0d2238] text-white">
      <BrowserBar url="clubnorte.com" dark />
      {/* nav */}
      <div className="absolute left-[26px] right-[70px] top-[46px] flex items-center">
        <span className="grid h-[22px] w-[22px] place-items-center rounded-full bg-[#c6f432] text-[0.5rem] font-bold text-[#0d2238]">CN</span>
        <span className="ml-2 text-[0.72rem] font-semibold tracking-[-0.01em]">Club Norte</span>
        <span className="ml-auto flex gap-4 text-[0.6rem] text-white/60">
          <span>Canchas</span>
          <span>Clases</span>
          <span>Torneos</span>
        </span>
      </div>

      {/* texto */}
      <div className="eco-in absolute left-[26px] top-[96px] w-[262px]" style={d(150)}>
        <p className="font-mono text-[0.5rem] tracking-[0.18em] text-[#c6f432]">PÁDEL · CLASES · TORNEOS</p>
        <p className="mt-2 text-[1.55rem] font-medium leading-[1.05] tracking-[-0.03em]">Reservá tu cancha en segundos.</p>
        <p className="mt-2.5 text-[0.62rem] leading-[1.5] text-white/60">Elegí día y horario, y confirmá tu turno por WhatsApp. Sin llamadas, a cualquier hora.</p>
      </div>
      <div className="eco-in absolute left-[26px] top-[228px]" style={d(300)}>
        <span className="eco-press relative flex h-[30px] w-[164px] items-center justify-center gap-1.5 rounded-full bg-[#c6f432] text-[0.62rem] font-semibold text-[#0d2238]">
          <WaIcon className="h-3 w-3" /> Reservar por WhatsApp
          <span className="eco-ripple absolute inset-0 rounded-full" />
        </span>
      </div>

      {/* cancha */}
      <div className="eco-in absolute right-[70px] top-[92px] h-[176px] w-[220px] [perspective:600px]" style={d(220)}>
        <div className="absolute inset-0 rounded-[18px] bg-[radial-gradient(circle_at_70%_20%,#4f8cff,#1f4fd1_60%,#163a9b)] [transform:rotateX(38deg)_rotateZ(-8deg)] shadow-[0_30px_40px_-20px_rgb(0_0_0/0.6)]">
          <div className="absolute inset-[14px] rounded-[6px] border-2 border-white/80" />
          <div className="absolute inset-y-[14px] left-1/2 w-[2px] -translate-x-1/2 bg-white/80" />
          <div className="absolute left-[14px] right-[14px] top-1/2 h-[2px] -translate-y-1/2 bg-white/50" />
          <div className="absolute inset-y-[14px] left-[30%] w-[2px] bg-white/60" />
          <div className="absolute inset-y-[14px] right-[30%] w-[2px] bg-white/60" />
        </div>
        <span className="eco-ball absolute left-[62%] top-[34%] h-[13px] w-[13px] rounded-full bg-[radial-gradient(circle_at_35%_30%,#f4ff9a,#c6f432_60%,#8db515)] shadow-[0_8px_8px_-2px_rgb(0_0_0/0.35)]" />
      </div>

      {/* tarjetas */}
      <div className="absolute bottom-[22px] left-[26px] right-[70px] grid grid-cols-3 gap-2.5">
        {[
          ["Canchas", "4 techadas"],
          ["Clases", "Todos los niveles"],
          ["Torneos", "Cada mes"],
        ].map(([t, s], i) => (
          <div key={t} className="eco-in rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2.5" style={d(380 + i * 80)}>
            <p className="text-[0.62rem] font-medium">{t}</p>
            <p className="text-[0.55rem] text-white/50">{s}</p>
          </div>
        ))}
      </div>

      <Cursor className="eco-cursor-site" />
    </div>
  )
}

/* ─────────────────── Pantalla 2: panel de Nexo ─────────────────── */

export function NexoPanel() {
  const hours = ["17:00", "18:00", "19:00", "20:00", "21:00"]
  // turnos ya tomados [cancha, fila]
  const taken: [number, number][] = [[0, 0], [2, 0], [0, 1], [1, 1], [0, 2], [2, 3], [1, 4]]
  return (
    <div className="absolute inset-0 flex bg-[#f6f7fb] text-ink">
      <BrowserBar url="nexo.kodexa.ar/panel" />
      {/* sidebar */}
      <div className="eco-in mt-[30px] flex w-[128px] shrink-0 flex-col gap-1 border-r border-ink/[0.06] bg-white px-3 py-3" style={d(0)}>
        <div className="mb-2 flex items-center gap-1.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/nexo-mark.png" alt="" className="h-4 w-4" />
          <span className="text-[0.68rem] font-semibold">Nexo</span>
        </div>
        {["Inicio", "Turnos", "Conversaciones", "Servicios", "Ajustes"].map((t, i) => (
          <span key={t} className={cn("rounded-lg px-2 py-1.5 text-[0.58rem]", i === 1 ? "bg-[#2f5be0]/10 font-medium text-[#2f5be0]" : "text-ink-soft")}>
            {t}
          </span>
        ))}
        <div className="mt-auto rounded-lg bg-[#22b394]/10 px-2 py-1.5 text-[0.52rem] text-[#137a63]">
          <span className="eco-live mr-1 inline-block h-1.5 w-1.5 rounded-full bg-[#22b394]" />
          WhatsApp conectado
        </div>
      </div>

      {/* agenda */}
      <div className="mt-[30px] flex-1 py-4 pl-4 pr-[64px]">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[0.55rem] text-ink-faint">Turnos</p>
            <p className="text-[0.85rem] font-semibold tracking-[-0.01em]">Mañana · jueves</p>
          </div>
          <span className="rounded-full border border-ink/10 bg-white px-2.5 py-1 text-[0.52rem] text-ink-soft">Disponibilidad automática</span>
        </div>
        <div className="mt-3 grid grid-cols-[44px_1fr_1fr_1fr] gap-1.5">
          <span />
          {["Cancha 1", "Cancha 2", "Cancha 3"].map((c) => (
            <span key={c} className="text-center text-[0.55rem] font-medium text-ink-soft">{c}</span>
          ))}
          {hours.map((h, r) => (
            <Row key={h} h={h} r={r} taken={taken} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Row({ h, r, taken }: { h: string; r: number; taken: [number, number][] }) {
  return (
    <>
      <span className="self-center text-[0.52rem] text-ink-faint">{h}</span>
      {[0, 1, 2].map((c) => {
        const isTaken = taken.some(([tc, tr]) => tc === c && tr === r)
        const isNew = c === 1 && r === 2
        return (
          <div key={c} className="relative h-[40px] rounded-lg border border-dashed border-ink/10 bg-white">
            {isTaken && (
              <div className="eco-in absolute inset-[3px] rounded-md bg-[#2f5be0]/[0.08] px-1.5 py-1" style={d(60 + (r * 3 + c) * 30)}>
                <span className="block h-1 w-[60%] rounded-full bg-[#2f5be0]/40" />
                <span className="mt-1 block h-1 w-[40%] rounded-full bg-[#2f5be0]/20" />
              </div>
            )}
            {isNew && (
              <div className="eco-pop absolute inset-[3px] flex flex-col justify-center rounded-md bg-[linear-gradient(135deg,#2f5be0,#22b394)] px-1.5 text-white shadow-[0_10px_18px_-8px_rgb(47_91_224/0.8)]" style={d(3700)}>
                <span className="text-[0.52rem] font-semibold leading-tight">Martín G.</span>
                <span className="text-[0.46rem] leading-tight text-white/80">vía WhatsApp</span>
                <span className="eco-ring absolute -inset-[3px] rounded-[9px] border-2 border-[#22b394]" style={d(3700)} />
              </div>
            )}
          </div>
        )
      })}
    </>
  )
}

/* ─────────────────── Pantalla 3: Nodo (CRM) ─────────────────── */

function NodoBoard() {
  const cols: { t: string; n: number; cards: [string, string][] }[] = [
    { t: "Nuevos", n: 2, cards: [["Lucía P.", "Consulta clases"], ["Grupo Sur", "Torneo empresa"]] },
    { t: "En contacto", n: 3, cards: [["Diego R.", "Abono mensual"], ["Ana M.", "Clases niños"]] },
    { t: "Propuesta", n: 2, cards: [["Club Este", "Alquiler fijo"]] },
    { t: "Ganados", n: 4, cards: [["Sofía L.", "Abono x4"], ["Pablo T.", "Clases"]] },
  ]
  return (
    <div className="absolute inset-0 bg-[#faf9f7] text-ink">
      <BrowserBar url="nodo.kodexa.ar/oportunidades" />
      <div className="absolute inset-x-0 top-[30px] flex items-center gap-2 border-b border-ink/[0.06] bg-white py-2.5 pl-4 pr-[64px]">
        <span className="grid h-5 w-5 place-items-center rounded-md bg-ink text-[0.48rem] font-semibold text-white">ND</span>
        <span className="text-[0.7rem] font-semibold">Nodo</span>
        <span className="ml-3 text-[0.58rem] text-ink-faint">Oportunidades</span>
        <span className="ml-auto flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-[0.52rem] font-medium text-brand-ink">
          <span className="eco-live h-1.5 w-1.5 rounded-full bg-brand" /> Sincronizado con Nexo
        </span>
      </div>

      <div className="absolute bottom-4 left-4 right-[64px] top-[76px] grid grid-cols-4 gap-2">
        {cols.map((c, ci) => (
          <div key={c.t} className="eco-in flex flex-col gap-1.5 rounded-xl bg-ink/[0.035] p-2" style={d(ci * 70)}>
            <div className="flex items-center justify-between px-0.5">
              <span className="text-[0.58rem] font-medium text-ink-soft">{c.t}</span>
              {ci === 0 ? (
                <span className="relative h-[14px] w-[16px] text-center text-[0.55rem] text-ink-faint">
                  <span className="eco-count-out absolute inset-0" style={d(1100)}>{c.n}</span>
                  <span className="eco-count-in absolute inset-0 font-semibold text-brand-ink" style={d(1100)}>{c.n + 1}</span>
                </span>
              ) : (
                <span className="text-[0.55rem] text-ink-faint">{c.n}</span>
              )}
            </div>
            {ci === 0 && (
              <div className="eco-drop relative rounded-lg border border-brand/40 bg-white p-2 shadow-[0_14px_24px_-12px_rgb(251_110_26/0.6)]" style={d(700)}>
                <p className="text-[0.6rem] font-semibold">Martín G.</p>
                <p className="text-[0.52rem] text-ink-soft">Cancha 2 · jue 19:00</p>
                <span className="mt-1.5 inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-[#22b394]/12 px-1.5 py-0.5 text-[0.46rem] font-medium text-[#137a63]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/brand/nexo-mark.png" alt="" className="h-2 w-2" /> vía Nexo
                </span>
                <div className="eco-in mt-1.5 flex items-center gap-1 border-t border-ink/[0.06] pt-1.5 text-[0.48rem] text-ink-soft" style={d(2600)}>
                  <span className="grid h-2.5 w-2.5 place-items-center rounded-full bg-brand text-[0.4rem] text-white">✓</span>
                  Tarea: ofrecer abono mensual
                </div>
              </div>
            )}
            {c.cards.map(([n, s]) => (
              <div key={n} className="rounded-lg border border-ink/[0.06] bg-white p-2">
                <p className="text-[0.58rem] font-medium">{n}</p>
                <p className="text-[0.5rem] text-ink-faint">{s}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────── Celular: chat con Nexo ─────────────────── */

export function Chat({ step }: { step: number }) {
  // tiempos (ms) de cada mensaje según la escena; null = ya visible sin animar
  const at = (s0: number | null, s1: number | null): Px | undefined => {
    if (step === 2) return undefined
    const v = step === 0 ? s0 : s1
    return v === null ? undefined : d(v)
  }
  const show = (fromStep: number) => step >= fromStep

  return (
    <div className="absolute inset-0 flex flex-col">
      {/* header */}
      <div className="flex items-center gap-2 bg-white/90 px-3 pb-2 pt-[38px] shadow-[0_1px_0_rgb(32_33_36/0.06)]">
        <span className="text-[0.8rem] text-[#2f5be0]">‹</span>
        <span className="grid h-7 w-7 place-items-center rounded-full bg-[#0d2238] text-[0.5rem] font-bold text-[#c6f432]">CN</span>
        <span className="leading-tight">
          <span className="block text-[0.64rem] font-semibold text-ink">Club Norte</span>
          <span className="flex items-center gap-1 text-[0.5rem] text-[#137a63]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/nexo-mark.png" alt="" className="h-2.5 w-2.5" />
            Asistente Nexo · en línea
          </span>
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 px-2.5 pt-3">
        <span className="mx-auto rounded-full bg-white/70 px-2 py-0.5 text-[0.46rem] text-ink-faint">Hoy</span>

        <Bubble me className={step === 0 ? "eco-in" : ""} style={at(3300, null)}>
          Hola! ¿Tienen cancha mañana a las 19?
        </Bubble>

        {step === 0 && <Typing style={d(3900)} />}

        {show(1) && (
          <>
            {step === 1 && <Typing style={d(0)} out={1100} />}
            <Bubble className={step === 1 ? "eco-in" : ""} style={at(null, 1100)}>
              ¡Hola! Sí, mañana a las 19:00 está libre la <b>Cancha 2</b>. ¿Te la reservo?
            </Bubble>
            <Bubble me className={step === 1 ? "eco-in" : ""} style={at(null, 2300)}>
              Dale, gracias 🙌
            </Bubble>
            {step === 1 && <Typing style={d(2700)} out={3500} />}
            <Bubble className={step === 1 ? "eco-in" : ""} style={at(null, 3500)}>
              Listo ✅ Reserva confirmada: <b>jueves 19:00, Cancha 2</b>. ¡Te esperamos!
            </Bubble>
          </>
        )}
      </div>

      {/* input */}
      <div className="m-2 flex items-center gap-1.5 rounded-full bg-white px-3 py-2">
        <span className="flex-1 text-[0.52rem] text-ink-faint">Mensaje</span>
        <span className="grid h-5 w-5 place-items-center rounded-full bg-[#22b394]">
          <span className="h-0 w-0 border-y-[3px] border-l-[5px] border-y-transparent border-l-white" />
        </span>
      </div>
    </div>
  )
}

function Bubble({ me, children, className, style }: { me?: boolean; children: React.ReactNode; className?: string; style?: Px }) {
  return (
    <div
      className={cn(
        "max-w-[84%] rounded-2xl px-2.5 py-1.5 text-[0.56rem] leading-[1.4] shadow-[0_1px_1px_rgb(32_33_36/0.08)]",
        me ? "self-end rounded-br-md bg-[#d9fdd3] text-ink" : "self-start rounded-bl-md bg-white text-ink",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  )
}

function Typing({ style, out }: { style?: Px; out?: number }) {
  const delay = style?.animationDelay ?? "0ms"
  return (
    <div
      className="eco-typing flex w-fit items-center gap-1 self-start overflow-hidden rounded-2xl rounded-bl-md bg-white px-2.5 py-2"
      style={{ animationDelay: out !== undefined ? `${delay}, ${out}ms` : delay }}
      data-out={out !== undefined ? "" : undefined}
    >
      {[0, 150, 300].map((t) => (
        <span key={t} className="typing h-1 w-1 rounded-full bg-ink/40" style={{ animationDelay: `${t}ms` }} />
      ))}
    </div>
  )
}

/* ─────────────────── piezas ─────────────────── */

function WaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-3.3-.8-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.5c-.1.1-.3.3-.1.6.7 1.1 1.5 2 2.6 2.6.3.2.5.1.6 0l.9-1c.2-.2.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.8-.1 1.4Z" />
    </svg>
  )
}
