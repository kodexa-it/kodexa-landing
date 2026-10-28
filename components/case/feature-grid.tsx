import Image from "next/image"
import type { ReactNode } from "react"
import { getT } from "@/lib/i18n/server"

const icon = (d: ReactNode) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
)
const icons = [
  icon(<><rect x="3" y="4" width="18" height="6" rx="1.5" /><rect x="3" y="14" width="18" height="6" rx="1.5" /></>),
  icon(<><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></>),
  icon(<><path d="M4 5h16v14H4Z" /><path d="M8 9h8M8 13h8M8 16h5" /></>),
  icon(<><path d="M3 20h18M5 20V9l5 3V9l5 3V5h4v15" /></>),
]

/** Etapa 4: detalle real de la navegación + las cuatro funcionalidades contempladas. */
export async function FeatureGrid() {
  const { t } = await getT()
  const features = t.raw<{ t: string; x: string }[]>("caso.s4.features")
  return (
    <div>
      <figure>
        <div className="overflow-hidden rounded-xl border border-ink/15 bg-white shadow-[0_24px_48px_-28px_rgb(32_33_36/0.5)]">
          <div className="relative aspect-[1440/150] w-full">
            <Image src="/images/hero/wt-desktop.webp" alt={t("caso.s4.imageAlt")} width={1440} height={900} sizes="(min-width: 1024px) 1100px, 100vw" loading="lazy" className="absolute left-0 top-0 h-auto w-full" />
          </div>
        </div>
        <figcaption className="mt-3 text-sm text-ink-faint">{t("caso.s4.imageCaption")}</figcaption>
      </figure>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2">
        {features.map((f, i) => (
          <li key={f.t} className="glass flex gap-4 p-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand/15 text-brand-ink">{icons[i]}</span>
            <div>
              <h3 className="t-h3 !text-[1.1rem]">{f.t}</h3>
              <p className="mt-2 text-[0.97rem] text-ink-soft">{f.x}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
