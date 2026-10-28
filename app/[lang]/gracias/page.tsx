import type { Metadata } from "next"
import { ButtonLink } from "@/components/ui/button"
import { Eyebrow } from "@/components/ui/section"
import { pageMetadata } from "@/lib/seo"
import { getT } from "@/lib/i18n/server"

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getT()
  return { ...pageMetadata({ locale, path: "/gracias", title: t("gracias.meta.title"), description: t("gracias.meta.description") }), robots: { index: false, follow: true } }
}

export default async function GraciasPage() {
  const { t } = await getT()
  return (
    <section className="atmosphere grain relative grid min-h-[80vh] place-items-center overflow-hidden px-5 pb-20 pt-36 text-center">
      <div className="glass max-w-2xl p-10 md:p-16">
        <Eyebrow className="justify-center">{t("gracias.eyebrow")}</Eyebrow>
        <h1 className="t-h1 mt-6">{t("gracias.title")}</h1>
        <p className="t-lead mx-auto mt-6 max-w-lg">{t("gracias.lead")}</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">{t("gracias.home")}</ButtonLink>
          <ButtonLink href="/proyectos" variant="secondary">{t("gracias.projects")}</ButtonLink>
        </div>
      </div>
    </section>
  )
}
