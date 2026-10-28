"use client"

import { cn } from "@/lib/utils"
import { useT } from "@/lib/i18n/client"
import { LiquidOrb } from "@/components/visuals/liquid-orb"
import { BrowserBar, d, DeviceStage, Laptop, Phone, Toast, type Scene } from "@/components/visuals/device-stage"
import { Chat, NexoPanel } from "@/components/visuals/ecosystem-showcase"

/**
 * Hero: lo que hace el estudio, en una notebook y un celular.
 * 1) Sitios web: proyecto real (Waste Treatment, capturas del sitio).
 * 2) Sistemas a medida: panel de gestión ilustrativo (datos ficticios).
 * 3) Productos: Nexo atendiendo una reserva (negocio ficticio).
 */
const SCENES: readonly Scene[] = [
  { id: "web", label: "", hint: "", ms: 5400 },
  { id: "sistemas", label: "", hint: "", ms: 5400 },
  { id: "productos", label: "", hint: "", ms: 5800 },
]

export function StudioShowcase({ maxHeight }: { maxHeight?: string }) {
  const { t } = useT()
  const scenes = SCENES.map((sc, i) => ({ ...sc, label: t(`visuals.studio.scenes.${i}.label`), hint: t(`visuals.studio.scenes.${i}.hint`) }))
  const toast = (k: string) => ({ title: t(`visuals.studio.toasts.${k}.title`), text: t(`visuals.studio.toasts.${k}.text`), app: t(`visuals.studio.toasts.${k}.app`) })
  return (
    <DeviceStage scenes={scenes} navLabel={t("visuals.studio.navLabel")} maxHeight={maxHeight}>
      {(s, k) => (
        <>
          <div className="absolute left-[250px] top-[-150px] h-[460px] w-[460px]">
            <LiquidOrb className="h-full w-full" />
          </div>
          <div className="absolute left-[420px] top-[200px] h-[320px] w-[360px] rounded-full bg-[radial-gradient(closest-side,rgb(124_92_255/0.14),transparent)] blur-2xl" />

          <Laptop>
            <div key={k} className="absolute inset-0">
              {s === 0 && <WtDesktop />}
              {s === 1 && <OpsDashboard />}
              {s === 2 && <NexoPanel />}
            </div>
          </Laptop>

          <Phone>
            <div key={k} className="absolute inset-0">
              {s === 0 && <WtMobile />}
              {s === 1 && <OpsMobile />}
              {s === 2 && <Chat step={1} />}
            </div>
          </Phone>

          <div key={`n-${k}`} className="pointer-events-none absolute left-[330px] top-[0px] z-20 w-[226px]">
            {s === 0 && <Toast delay={1200} dot="bg-[#13245a]" {...toast("wt")} badge="WT" />}
            {s === 1 && <Toast delay={3000} dot="bg-ink" {...toast("ops")} badge="OP" />}
            {s === 2 && <Toast delay={3900} dot="bg-white ring-1 ring-ink/10" {...toast("nexo")} logo="/brand/nexo-mark.png" />}
          </div>
        </>
      )}
    </DeviceStage>
  )
}

/* ─────────────── 1. Sitio web real: Waste Treatment ─────────────── */

function WtDesktop() {
  const { t } = useT()
  return (
    <div className="absolute inset-0 bg-[#1b1f22]">
      <BrowserBar url={t("visuals.studio.wtUrl")} />
      <div className="absolute inset-x-0 bottom-0 top-[30px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero/wt-desktop.webp" alt="" className="eco-kenburns h-full w-full object-cover object-top" />
      </div>
    </div>
  )
}

/**
 * Réplica de la web real del cliente (Waste Treatment), cuyo contenido está en español: se muestra tal cual es el
 * sitio publicado, no se traduce ni se inventa una versión en inglés.
 */
function WtMobile() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
      {/* barra del sitio */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-end justify-between bg-white px-3.5 pb-2 pt-[36px] shadow-[0_1px_0_rgb(32_33_36/0.08)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero/wt-logo.png" alt="" className="h-[18px] w-auto" />
        <span className="flex flex-col gap-[3px]">
          <span className="h-[2px] w-3.5 rounded bg-[#13245a]" />
          <span className="h-[2px] w-3.5 rounded bg-[#13245a]" />
          <span className="h-[2px] w-2.5 self-end rounded bg-[#13245a]" />
        </span>
      </div>

      <div className="eco-scroll absolute inset-x-0 top-[62px]">
        <div className="relative h-[300px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero/wt-mobile.webp" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(10_14_18/0.55),rgb(10_14_18/0.82))]" />
          <div className="relative px-4 pt-5 text-white">
            <p className="text-[0.42rem] font-semibold tracking-[0.12em] text-white/70">— GESTIÓN DE RESIDUOS INDUSTRIALES</p>
            <p className="mt-2 text-[1.02rem] font-bold leading-[1.12] tracking-[-0.02em]">Gestión y transporte de residuos en los que podés confiar, de principio a fin</p>
            <p className="mt-2 text-[0.5rem] leading-[1.5] text-white/75">
              Brindamos soluciones seguras y habilitadas para la gestión de residuos industriales y especiales.
            </p>
            <div className="mt-3 flex gap-1.5">
              <span className="rounded-md bg-white px-2.5 py-1.5 text-[0.5rem] font-semibold text-[#13245a]">Contactanos</span>
              <span className="rounded-md border border-white/40 px-2.5 py-1.5 text-[0.5rem] font-medium">Conocer servicios →</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-px bg-ink/10">
          {[
            ["+20 años", "de experiencia"],
            ["15 unidades", "propias"],
            ["+30.000 km", "anuales"],
            ["+300 clientes", "activos"],
          ].map(([a, b]) => (
            <div key={a} className="bg-white px-3.5 py-3">
              <p className="text-[0.7rem] font-semibold text-[#13245a]">{a}</p>
              <p className="text-[0.48rem] text-ink-faint">{b}</p>
            </div>
          ))}
        </div>
      </div>

      <span className="absolute bottom-3 right-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-[#25d366] shadow-lg">
        <span className="h-3 w-3 rounded-full border-2 border-white" />
      </span>
    </div>
  )
}

/* ─────────────── 2. Sistema a medida (ilustrativo) ─────────────── */

const statusTone: Record<"inProgress" | "done", string> = {
  inProgress: "bg-[#2f5be0]/10 text-[#2f5be0]",
  done: "bg-[#22b394]/12 text-[#137a63]",
}

function OpsDashboard() {
  const { t } = useT()
  const o = (k: string) => t(`visuals.ops.${k}`)
  return (
    <div className="absolute inset-0 flex bg-[#f6f6f4] text-ink">
      <BrowserBar url="gestion.tuempresa.com" />
      <div className="eco-in mt-[30px] flex w-[118px] shrink-0 flex-col gap-1 bg-ink px-3 py-3 text-white" style={d(0)}>
        <div className="mb-2 flex items-center gap-1.5">
          <span className="grid h-4 w-4 place-items-center rounded bg-brand text-[0.4rem] font-bold text-ink">TE</span>
          <span className="text-[0.62rem] font-semibold">{o("brand")}</span>
        </div>
        {t.raw<string[]>("visuals.ops.menu").map((m, i) => (
          <span key={m} className={cn("rounded-lg px-2 py-1.5 text-[0.56rem]", i === 0 ? "bg-white/12 font-medium" : "text-white/55")}>
            {m}
          </span>
        ))}
      </div>

      <div className="mt-[30px] flex-1 py-3.5 pl-4 pr-[66px]">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[0.52rem] text-ink-faint">{o("summary")}</p>
            <p className="text-[0.82rem] font-semibold tracking-[-0.01em]">{o("today")}</p>
          </div>
          <span className="flex items-center gap-1 rounded-full border border-ink/10 bg-white px-2 py-1 text-[0.5rem] text-ink-soft">
            <span className="eco-live h-1.5 w-1.5 rounded-full bg-[#22b394]" /> {o("live")}
          </span>
        </div>

        <div className="mt-2.5 grid grid-cols-3 gap-2">
          {(
            [
              [t.raw<string[]>("visuals.ops.kpis")[0], "48", [5, 8, 6, 9, 7, 11]],
              [t.raw<string[]>("visuals.ops.kpis")[1], "17", [3, 4, 6, 5, 7, 6]],
              [t.raw<string[]>("visuals.ops.kpis")[2], "29", [4, 6, 5, 8, 9, 10]],
            ] as const
          ).map(([label, v, bars], i) => (
            <div key={label} className="eco-in rounded-xl border border-ink/[0.06] bg-white p-2" style={d(100 + i * 90)}>
              <p className="text-[0.5rem] text-ink-faint">{label}</p>
              <div className="flex items-end justify-between">
                <p className="text-[0.95rem] font-semibold tracking-[-0.02em]">{v}</p>
                <span className="flex h-5 items-end gap-[2px]">
                  {bars.map((b, j) => (
                    <span key={j} className={cn("eco-bar w-[3px] rounded-sm", j === 5 ? "bg-brand" : "bg-ink/15")} style={{ height: `${b * 9}%`, animationDelay: `${300 + i * 90 + j * 50}ms` }} />
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="eco-in mt-2 rounded-xl border border-ink/[0.06] bg-white p-2.5" style={d(350)}>
          <div className="flex items-center justify-between">
            <p className="text-[0.55rem] font-medium">{o("weekTitle")}</p>
            <span className="text-[0.48rem] text-ink-faint">{o("weekRange")}</span>
          </div>
          <svg viewBox="0 0 300 70" className="mt-1 h-[58px] w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="opsfill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#fb6e1a" stopOpacity="0.28" />
                <stop offset="1" stopColor="#fb6e1a" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path className="eco-in" style={d(1200)} d="M0 52 C30 48 45 30 75 34 S120 50 150 38 S200 12 225 20 S270 30 300 10 L300 70 L0 70Z" fill="url(#opsfill)" />
            <path className="eco-draw" pathLength={1} d="M0 52 C30 48 45 30 75 34 S120 50 150 38 S200 12 225 20 S270 30 300 10" fill="none" stroke="#fb6e1a" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </div>

        <div className="eco-in mt-2 rounded-xl border border-ink/[0.06] bg-white px-2.5 py-1.5" style={d(500)}>
          {t.raw<{ id: string; what: string; st: "inProgress" | "done" }[]>("visuals.ops.orders").map((ord) => (
            <OrderRow key={ord.id} id={ord.id} what={ord.what} st={o(ord.st)} tone={statusTone[ord.st]} />
          ))}
          <div className="flex items-center gap-2 py-1 text-[0.52rem]">
            <span className="w-8 font-mono text-ink-faint">#1048</span>
            <span className="flex-1 text-ink-soft">{o("pickupSouth")}</span>
            <span className="relative h-[15px] w-[58px]">
              <span className="eco-count-out absolute inset-0 grid place-items-center rounded-full bg-[#febc2e]/20 text-[0.46rem] font-medium text-[#8a5a00]" style={d(2900)}>{o("pending")}</span>
              <span className="eco-count-in absolute inset-0 grid place-items-center rounded-full bg-[#22b394]/15 text-[0.46rem] font-medium text-[#137a63]" style={d(2900)}>{o("approved")}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function OrderRow({ id, what, st, tone }: { id: string; what: string; st: string; tone: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-ink/[0.05] py-1 text-[0.52rem]">
      <span className="w-8 font-mono text-ink-faint">{id}</span>
      <span className="flex-1 text-ink-soft">{what}</span>
      <span className={cn("grid h-[15px] w-[58px] place-items-center rounded-full text-[0.46rem] font-medium", tone)}>{st}</span>
    </div>
  )
}

function OpsMobile() {
  const { t } = useT()
  const o = (k: string) => t(`visuals.ops.${k}`)
  const m = (k: string) => t(`visuals.ops.mobile.${k}`)
  return (
    <div className="absolute inset-0 flex flex-col bg-[#f6f6f4] text-ink">
      {/* push */}
      <div className="eco-push absolute inset-x-2 top-[34px] z-20 flex items-center gap-2 rounded-2xl bg-white/90 p-2 shadow-[0_14px_24px_-12px_rgb(32_33_36/0.45)] backdrop-blur" style={d(2950)}>
        <span className="grid h-6 w-6 place-items-center rounded-lg bg-ink text-[0.42rem] font-bold text-brand">OP</span>
        <span className="leading-tight">
          <span className="block text-[0.52rem] font-semibold">{m("pushTitle")}</span>
          <span className="block text-[0.46rem] text-ink-faint">{m("pushText")}</span>
        </span>
      </div>

      <div className="px-3.5 pb-2 pt-[40px]">
        <p className="text-[0.48rem] text-ink-faint">{o("brand")}</p>
        <p className="text-[0.9rem] font-semibold tracking-[-0.02em]">{m("title")}</p>
        <div className="mt-2 flex rounded-lg bg-ink/[0.05] p-0.5 text-[0.48rem]">
          {t.raw<string[]>("visuals.ops.mobile.tabs").map((tab, i) => (
            <span key={tab} className={i === 0 ? "flex-1 rounded-md bg-white py-1 text-center font-medium shadow-sm" : "flex-1 py-1 text-center text-ink-faint"}>
              {tab}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 px-3">
        <div className="eco-in relative rounded-xl border border-brand/40 bg-white p-2.5 shadow-[0_10px_18px_-12px_rgb(251_110_26/0.6)]" style={d(200)}>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[0.5rem] text-ink-faint">#1048</span>
            <span className="relative h-[14px] w-[56px]">
              <span className="eco-count-out absolute inset-0 grid place-items-center rounded-full bg-[#febc2e]/20 text-[0.44rem] font-medium text-[#8a5a00]" style={d(2900)}>{o("pending")}</span>
              <span className="eco-count-in absolute inset-0 grid place-items-center rounded-full bg-[#22b394]/15 text-[0.44rem] font-medium text-[#137a63]" style={d(2900)}>{o("approved")}</span>
            </span>
          </div>
          <p className="mt-1 text-[0.6rem] font-medium">{o("pickupSouth")}</p>
          <p className="text-[0.48rem] text-ink-faint">{m("detail")}</p>
        </div>
        {t.raw<{ id: string; what: string; st: "inProgress" | "done" }[]>("visuals.ops.mobile.list").map((row, i) => (
          <div key={row.id} className="eco-in rounded-xl border border-ink/[0.06] bg-white p-2.5" style={d(300 + i * 90)}>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.5rem] text-ink-faint">{row.id}</span>
              <span className={cn("rounded-full px-1.5 py-0.5 text-[0.44rem] font-medium", statusTone[row.st])}>{o(row.st)}</span>
            </div>
            <p className="mt-1 text-[0.58rem] font-medium">{row.what}</p>
          </div>
        ))}
      </div>

      <div className="mx-3 mb-3 mt-2 flex justify-around rounded-2xl bg-white py-2 text-[0.46rem] text-ink-faint shadow-[0_1px_2px_rgb(32_33_36/0.08)]">
        {t.raw<string[]>("visuals.ops.mobile.bottom").map((b, i) => (
          <span key={b} className={i === 0 ? "font-semibold text-ink" : undefined}>
            {b}
          </span>
        ))}
      </div>
    </div>
  )
}
