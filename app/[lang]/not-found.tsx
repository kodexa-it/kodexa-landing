import { ButtonLink } from "@/components/ui/button"
import { Eyebrow } from "@/components/ui/section"
import { getT } from "@/lib/i18n/server"

export default async function NotFound() {
  const { t } = await getT()
  return (
    <section className="atmosphere grid min-h-[80vh] place-items-center px-5 pb-20 pt-36 text-center">
      <div>
        <Eyebrow className="justify-center">{t("notfound.eyebrow")}</Eyebrow>
        <h1 className="t-h1 mt-6">{t("notfound.title")}</h1>
        <p className="t-lead mx-auto mt-5 max-w-md">{t("notfound.text")}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">{t("notfound.home")}</ButtonLink>
          <ButtonLink href="/servicios" variant="secondary">{t("notfound.services")}</ButtonLink>
        </div>
      </div>
    </section>
  )
}
