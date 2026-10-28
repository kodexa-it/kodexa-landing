import Image from "next/image"
import { getT } from "@/lib/i18n/server"

/**
 * Captura móvil real de la versión en desarrollo. Todavía no hay una captura verificada del navegador
 * (el archivo `wt-mobile.webp` del repositorio es solo la foto de fondo, no una pantalla), así que no se muestra.
 * Para incorporarla: guardar la captura en /public/images/caso/ y completar este objeto.
 */
const MOBILE_CAPTURE: { src: string; width: number; height: number } | null = null

/** Etapa 3: captura real de la versión en desarrollo (escritorio; móvil cuando exista una captura real). */
export async function RealGallery() {
  const { t } = await getT()
  return (
    <div className={MOBILE_CAPTURE ? "grid items-end gap-6 md:grid-cols-[1fr_auto] md:gap-8" : ""}>
      <div>
        <div className="overflow-hidden rounded-xl border border-ink/15 bg-[#1b1f22] shadow-[0_30px_60px_-30px_rgb(32_33_36/0.55)]">
          <div className="flex items-center gap-1.5 bg-[#2a2f33] px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
          </div>
          <Image src="/images/hero/wt-desktop.webp" alt={t("caso.s3.desktopAlt")} width={1440} height={900} sizes="(min-width: 1024px) 960px, 100vw" loading="lazy" className="h-auto w-full" />
        </div>
        <p className="t-label mt-3 text-ink-faint">{t("caso.s3.desktop")}</p>
      </div>
      {MOBILE_CAPTURE && (
        <div className="mx-auto w-[11rem] md:w-[12rem]">
          <div className="overflow-hidden rounded-[1.6rem] border-[6px] border-ink bg-ink shadow-[0_30px_60px_-30px_rgb(32_33_36/0.55)]">
            <Image src={MOBILE_CAPTURE.src} alt={t("caso.s3.mobileAlt")} width={MOBILE_CAPTURE.width} height={MOBILE_CAPTURE.height} sizes="192px" loading="lazy" className="h-auto w-full" />
          </div>
          <p className="t-label mt-3 text-center text-ink-faint">{t("caso.s3.mobile")}</p>
        </div>
      )}
    </div>
  )
}
