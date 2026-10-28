import type { ReactNode } from "react"
import { Breadcrumbs, Eyebrow } from "@/components/ui/section"
import { JsonLd, breadcrumbLd } from "@/components/seo/json-ld"
import { getLocale } from "@/lib/i18n/server"

type Crumb = { name: string; href?: string }

/** Encabezado de páginas interiores: migas, título (h1), bajada y acciones. También emite BreadcrumbList. */
export async function PageHero({
  crumbs,
  path,
  eyebrow,
  title,
  lead,
  actions,
  aside,
}: {
  crumbs: Crumb[]
  /** Ruta de la página actual (para el BreadcrumbList). */
  path: string
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  actions?: ReactNode
  aside?: ReactNode
}) {
  const locale = await getLocale()
  const ld = crumbs.map((c, i) => ({ name: c.name, path: i === crumbs.length - 1 ? path : (c.href ?? "/") }))
  return (
    <section className="atmosphere grain relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <JsonLd data={breadcrumbLd(ld, locale)} />
      <div className={aside ? "wrap grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]" : "wrap"}>
        <div className="enter">
          <Breadcrumbs items={crumbs} />
          {eyebrow && <Eyebrow className="mt-10">{eyebrow}</Eyebrow>}
          <h1 className={`t-h1 max-w-4xl ${eyebrow ? "mt-5" : "mt-10"}`}>{title}</h1>
          {lead && <p className="t-lead mt-6 max-w-2xl">{lead}</p>}
          {actions && <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">{actions}</div>}
        </div>
        {aside}
      </div>
    </section>
  )
}
