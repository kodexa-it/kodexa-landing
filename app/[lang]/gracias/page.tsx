import type { Metadata } from "next"
import { cookies } from "next/headers"
import { ButtonLink } from "@/components/ui/button"
import { Eyebrow } from "@/components/ui/section"
import { pageMetadata } from "@/lib/seo"
import { getT } from "@/lib/i18n/server"
import { PROOF_COOKIE, verifyProof } from "@/lib/lead-proof"
import { whatsappHref } from "@/lib/content/site"

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getT()
  return { ...pageMetadata({ locale, path: "/gracias", title: t("gracias.meta.title"), description: t("gracias.meta.description") }), robots: { index: false, follow: true } }
}

/**
 * Confirmación de envío. Se muestra solo si el servidor emitió la prueba firmada tras la confirmación de Forminit
 * (lib/lead-proof.ts). Una visita directa ve un aviso neutro con enlaces al formulario: no afirma que se recibió nada.
 * Esta página no mide conversiones: `generate_lead` se emite al confirmarse el envío, no al abrirla.
 */
export default async function GraciasPage() {
  const { t } = await getT()
  const sent = verifyProof((await cookies()).get(PROOF_COOKIE)?.value)

  return (
    <section className="atmosphere grain relative grid min-h-[80vh] place-items-center overflow-hidden px-5 pb-20 pt-36 text-center">
      <div className="glass max-w-2xl p-10 md:p-16" data-lead-confirmed={sent ? "true" : "false"}>
        {sent ? (
          <>
            <Eyebrow className="justify-center">{t("gracias.eyebrow")}</Eyebrow>
            <h1 className="t-h1 mt-6">{t("gracias.title")}</h1>
            <p className="t-lead mx-auto mt-6 max-w-lg">{t("gracias.lead")}</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/">{t("gracias.home")}</ButtonLink>
              <ButtonLink href="/proyectos" variant="secondary">{t("gracias.projects")}</ButtonLink>
            </div>
          </>
        ) : (
          <>
            <Eyebrow className="justify-center">{t("gracias.direct.eyebrow")}</Eyebrow>
            <h1 className="t-h1 mt-6">{t("gracias.direct.title")}</h1>
            <p className="t-lead mx-auto mt-6 max-w-lg">{t("gracias.direct.lead")}</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/contacto#formulario">{t("gracias.direct.form")}</ButtonLink>
              <ButtonLink href={whatsappHref(t("common.whatsappDefault"))} variant="secondary" whatsapp={{ location: "thanks_direct", label: "thanks_direct_whatsapp" }}>
                {t("gracias.direct.whatsapp")}
              </ButtonLink>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
