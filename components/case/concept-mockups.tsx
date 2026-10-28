import type { ReactNode } from "react"
import { getT } from "@/lib/i18n/server"

/* Paleta conceptual "industrial" (no es la del cliente): grafito + verde. */
const G = "#1f2a30"
const A = "#2f7d5b"

function Frame({ url, children, className = "" }: { url: string; children: ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-ink/15 bg-white shadow-[0_18px_36px_-22px_rgb(32_33_36/0.5)] ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-ink/10 bg-mist px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-ink/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-ink/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-ink/25" />
        <span className="ml-2 truncate rounded bg-white px-2 py-0.5 text-[0.5rem] text-ink-faint">{url}</span>
      </div>
      {children}
    </div>
  )
}

const bar = (w: string, c = "bg-ink/15") => <span className={`block h-[5px] rounded-full ${c}`} style={{ width: w }} />

function Nav({ t }: { t: Awaited<ReturnType<typeof getT>>["t"] }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2" style={{ background: G }}>
      <span className="h-2.5 w-2.5 rounded-sm" style={{ background: A }} />
      <span className="ml-auto flex gap-2 text-[0.45rem] text-white/70">
        <span>{t("caso.s2.mock.services")}</span>
        <span>{t("caso.s2.mock.plants")}</span>
        <span>{t("caso.s2.mock.blog")}</span>
      </span>
    </div>
  )
}

function Label({ n, children }: { n: number; children: ReactNode }) {
  return (
    <p className="mt-3 flex items-center gap-2 text-sm font-medium text-ink">
      <span className="t-label grid h-6 w-6 place-items-center rounded-full bg-ink text-white">{n}</span>
      {children}
    </p>
  )
}

/** Etapa 2: cinco páginas conceptuales + versión móvil. Todo el contenido es de ejemplo. */
export async function ConceptMockups({ alt }: { alt: string }) {
  const { t } = await getT()
  const m = (k: string) => t(`caso.s2.mock.${k}`)
  const url = m("url")
  return (
    <div role="img" aria-label={alt} className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-6">
      {/* 1 · Inicio */}
      <div className="sm:col-span-2 lg:col-span-4">
        <Frame url={url}>
          <Nav t={t} />
          <div className="relative px-5 py-6 text-white" style={{ background: `linear-gradient(120deg, ${G}, #34464f)` }} aria-hidden="true">
            <span className="block text-[0.45rem] font-semibold tracking-[0.14em] text-white/60">{m("example").toUpperCase()}</span>
            <p className="mt-2 max-w-[60%] text-[0.95rem] font-semibold leading-tight sm:text-[1.3rem]">{m("headline")}</p>
            <div className="mt-3 flex gap-2">
              <span className="rounded px-2.5 py-1 text-[0.5rem] font-semibold" style={{ background: A }}>{m("cta")}</span>
              <span className="rounded border border-white/40 px-2.5 py-1 text-[0.5rem]">{m("services")}</span>
            </div>
            <span className="absolute bottom-0 right-6 h-[70%] w-[22%] rounded-t-lg bg-white/10" />
            <span className="absolute bottom-0 right-[30%] h-[45%] w-[10%] rounded-t-lg bg-white/10" />
          </div>
          <div className="grid grid-cols-3 gap-2 p-3" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-md border border-ink/10 p-2">
                <span className="block h-3 w-3 rounded-sm" style={{ background: A }} />
                <div className="mt-2 space-y-1">{bar("80%", "bg-ink/70")}{bar("100%")}{bar("70%")}</div>
              </div>
            ))}
          </div>
        </Frame>
        <Label n={1}>{m("home")}</Label>
      </div>

      {/* móvil */}
      <div className="sm:col-span-1 lg:col-span-2 lg:row-span-1">
        <div className="mx-auto w-[46%] min-w-[7rem] overflow-hidden rounded-[1.4rem] border-[5px] border-ink bg-white shadow-[0_18px_36px_-22px_rgb(32_33_36/0.5)] lg:w-[60%]" aria-hidden="true">
          <div className="flex items-center justify-between px-2.5 py-2" style={{ background: G }}>
            <span className="h-2 w-2 rounded-sm" style={{ background: A }} />
            <span className="space-y-[2px]"><span className="block h-[1.5px] w-3 bg-white/70" /><span className="block h-[1.5px] w-3 bg-white/70" /></span>
          </div>
          <div className="p-2.5 text-white" style={{ background: `linear-gradient(160deg, ${G}, #34464f)` }}>
            <p className="text-[0.62rem] font-semibold leading-tight">{m("headline")}</p>
            <span className="mt-2 inline-block rounded px-2 py-0.5 text-[0.42rem] font-semibold" style={{ background: A }}>{m("cta")}</span>
          </div>
          <div className="space-y-1.5 p-2.5">
            {[0, 1].map((i) => <div key={i} className="rounded border border-ink/10 p-1.5">{bar("70%", "bg-ink/70")}<div className="mt-1">{bar("100%")}</div></div>)}
          </div>
        </div>
        <Label n={6}>{m("mobile")}</Label>
      </div>

      {/* 2 · Servicios */}
      <div className="lg:col-span-2">
        <Frame url={`${url}/…`}>
          <Nav t={t} />
          <div className="space-y-2 p-3" aria-hidden="true">
            <p className="text-[0.65rem] font-semibold text-ink">{m("services")}</p>
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-2 rounded-md border border-ink/10 p-2">
                <span className="h-6 w-6 shrink-0 rounded" style={{ background: i === 0 ? A : "#dfe5e3" }} />
                <div className="flex-1 space-y-1"><p className="text-[0.5rem] font-medium text-ink">{m("service")} {i + 1}</p>{bar("90%")}</div>
              </div>
            ))}
          </div>
        </Frame>
        <Label n={2}>{m("services")}</Label>
      </div>

      {/* 3 · Plantas y operaciones */}
      <div className="lg:col-span-2">
        <Frame url={`${url}/…`}>
          <Nav t={t} />
          <div className="p-3" aria-hidden="true">
            <p className="text-[0.65rem] font-semibold text-ink">{m("plants")}</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {[0, 1].map((i) => (
                <div key={i}>
                  <div className="h-12 rounded-md" style={{ background: i ? "linear-gradient(135deg,#c9d6d1,#9db3aa)" : "linear-gradient(135deg,#9db3aa,#6f8f82)" }} />
                  <p className="mt-1 text-[0.5rem] font-medium text-ink">{m("plant")} {i + 1}</p>
                  <div className="mt-1">{bar("80%")}</div>
                </div>
              ))}
            </div>
          </div>
        </Frame>
        <Label n={3}>{m("plants")}</Label>
      </div>

      {/* 4 · Habilitaciones y documentación */}
      <div className="lg:col-span-2">
        <Frame url={`${url}/…`}>
          <Nav t={t} />
          <div className="space-y-1.5 p-3" aria-hidden="true">
            <p className="text-[0.65rem] font-semibold text-ink">{m("docs")}</p>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2 rounded border border-ink/10 px-2 py-1.5">
                <span className="grid h-5 w-4 place-items-center rounded-sm bg-ink/10 text-[0.3rem] font-bold text-ink-soft">PDF</span>
                <span className="flex-1 text-[0.5rem] text-ink">{m("doc")} {String(i + 1).padStart(2, "0")}</span>
                <span className="rounded-full border border-ink/15 px-1.5 text-[0.38rem] text-ink-faint">{m("example")}</span>
              </div>
            ))}
          </div>
        </Frame>
        <Label n={4}>{m("docs")}</Label>
      </div>

      {/* 5 · Blog */}
      <div className="sm:col-span-2 lg:col-span-6">
        <Frame url={`${url}/…`} className="lg:mx-auto lg:max-w-[66%]">
          <Nav t={t} />
          <div className="p-3" aria-hidden="true">
            <p className="text-[0.65rem] font-semibold text-ink">{m("blog")}</p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-md border border-ink/10 p-2">
                  <div className="h-10 rounded" style={{ background: ["#9db3aa", "#c9d6d1", "#6f8f82"][i] }} />
                  <p className="mt-1.5 text-[0.5rem] font-medium leading-tight text-ink">{m("post")}</p>
                  <div className="mt-1 space-y-1">{bar("100%")}{bar("60%")}</div>
                </div>
              ))}
            </div>
          </div>
        </Frame>
        <div className="lg:mx-auto lg:max-w-[66%]"><Label n={5}>{m("blog")}</Label></div>
      </div>
    </div>
  )
}
