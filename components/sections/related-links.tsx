import { Link } from "@/components/i18n/link"
import { getContent } from "@/lib/content"
import { getT } from "@/lib/i18n/server"

/**
 * Enlaces internos al final de un artículo: el otro artículo y servicios relacionados, con el nombre real de cada
 * página como texto del enlace (nada de "hacé clic acá"). Títulos y rutas salen del contenido, no se repiten a mano.
 */
export async function RelatedLinks({ articleSlug, serviceSlugs }: { articleSlug: string; serviceSlugs: string[] }) {
  const { locale, t } = await getT()
  const { articles, getService } = getContent(locale)
  const other = articles.find((a) => a.slug !== articleSlug)
  const services = serviceSlugs.map((s) => getService(s)).filter((s): s is NonNullable<typeof s> => Boolean(s))
  const linkCls = "font-medium text-brand-ink underline underline-offset-4"
  return (
    <aside aria-label={t("article.related.aria")} className="wrap-narrow pb-6 pt-14">
      <div className="rounded-3xl border border-line bg-mist/50 p-6 md:p-8">
        {other && (
          <>
            <h2 className="t-label text-ink-faint">{t("article.related.keepReading")}</h2>
            <p className="mt-3 text-lg">
              <Link href={`/recursos/${other.slug}`} className={linkCls}>{other.title}</Link>
            </p>
          </>
        )}
        {services.length > 0 && (
          <>
            <h2 className="t-label mt-7 text-ink-faint">{t("article.related.services")}</h2>
            <ul className="mt-3 space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicios/${s.slug}`} className={linkCls}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </aside>
  )
}
