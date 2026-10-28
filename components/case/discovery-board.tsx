import { getT } from "@/lib/i18n/server"

/** Etapa 1: composición conceptual de relevamiento (notebook con wireframe, boceto de mapa del sitio y notas). */
export async function DiscoveryBoard({ alt }: { alt: string }) {
  const { t } = await getT()
  const nodes = ["services", "plants", "docs", "news", "contact"] as const
  return (
    <div role="img" aria-label={alt} className="relative flex w-full flex-col gap-5 overflow-hidden rounded-[1.5rem] border border-line bg-[linear-gradient(135deg,#e9e1da,#f0f1f3)] p-5 sm:block sm:aspect-[16/10] sm:gap-0 sm:p-0">
      {/* trama de escritorio */}
      <div aria-hidden="true" className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgb(32_33_36/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(32_33_36/0.05)_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* notebook con wireframe */}
      <div aria-hidden="true" className="relative w-full sm:absolute sm:left-[4%] sm:top-[9%] sm:w-[52%]">
        <div className="rounded-t-xl border border-ink/20 bg-ink p-[2.2%] shadow-[0_20px_40px_-20px_rgb(32_33_36/0.5)]">
          <div className="aspect-[16/10] rounded-md bg-paper p-[4%]">
            <div className="flex items-center gap-[3%]">
              <span className="h-[5%] w-[12%] min-h-1 rounded-sm bg-ink/70" />
              <span className="ml-auto h-[4%] w-[8%] min-h-1 rounded-sm bg-ink/20" />
              <span className="h-[4%] w-[8%] min-h-1 rounded-sm bg-ink/20" />
              <span className="h-[4%] w-[8%] min-h-1 rounded-sm bg-ink/20" />
            </div>
            <div className="mt-[5%] grid h-[34%] place-items-center rounded-sm border border-dashed border-ink/30 bg-mist">
              <svg viewBox="0 0 40 24" className="h-1/2 text-ink/25" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M0 0 40 24M40 0 0 24" /></svg>
            </div>
            <div className="mt-[5%] grid grid-cols-3 gap-[3%]">
              {[0, 1, 2].map((i) => (
                <div key={i} className="aspect-[4/3] rounded-sm border border-ink/20 p-[8%]">
                  <span className="block h-[18%] w-1/2 rounded-sm bg-brand/80" />
                  <span className="mt-[14%] block h-[10%] w-full rounded-sm bg-ink/15" />
                  <span className="mt-[8%] block h-[10%] w-4/5 rounded-sm bg-ink/15" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-2.5 rounded-b-xl bg-gradient-to-b from-[#c9ccd1] to-[#a9adb3]" />
      </div>

      {/* boceto del mapa del sitio */}
      <div aria-hidden="true" className="relative w-full -rotate-1 rounded-sm bg-white p-4 shadow sm:absolute sm:right-[4%] sm:top-[6%] sm:w-[34%] sm:-rotate-2 sm:p-[2.2%] shadow-[0_16px_30px_-16px_rgb(32_33_36/0.45)]">
        <p className="t-label !text-[0.65rem] text-ink-faint">{t("caso.s1.board.sitemap")}</p>
        <div className="mx-auto mt-3 w-2/5 rounded border border-ink/60 py-1.5 text-center text-[0.7rem] font-medium sm:mt-[5%] sm:w-[46%] sm:py-[3%]">{t("caso.s1.board.home")}</div>
        <div className="mx-auto h-3 w-px bg-ink/50 sm:h-[6%]" />
        <div className="grid grid-cols-5 gap-1 border-t border-ink/50 pt-2 sm:gap-[2%] sm:pt-[2.5%]">
          {nodes.map((n) => (
            <div key={n} className="rounded border border-ink/40 px-0.5 py-1.5 text-center text-[0.5rem] leading-tight sm:text-[0.42rem] md:text-[0.5rem]">{t(`caso.s1.board.${n}`)}</div>
          ))}
        </div>
      </div>

      {/* notas adhesivas */}
      <div aria-hidden="true" className="grid grid-cols-3 gap-3 sm:contents">
        <p className="relative rotate-2 bg-[#ffd9bd] p-2.5 text-[0.7rem] font-medium leading-snug shadow-md sm:absolute sm:bottom-[8%] sm:right-[30%] sm:w-[22%] sm:p-[1.8%] sm:text-[0.62rem] md:text-[0.75rem]">{t("caso.s1.board.note1")}</p>
        <p className="relative -rotate-2 bg-[#fff1a8] p-2.5 text-[0.7rem] font-medium leading-snug shadow-md sm:absolute sm:bottom-[10%] sm:right-[4%] sm:w-[22%] sm:p-[1.8%] sm:text-[0.62rem] md:text-[0.75rem]">{t("caso.s1.board.note2")}</p>
        <p className="relative rotate-1 bg-white p-2.5 text-[0.7rem] font-medium leading-snug shadow-md sm:absolute sm:bottom-[36%] sm:right-[10%] sm:w-[22%] sm:p-[1.8%] sm:text-[0.62rem] md:text-[0.75rem]">{t("caso.s1.board.note3")}</p>
      </div>
    </div>
  )
}
