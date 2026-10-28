import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/content/projects"
import { getContent } from "@/lib/content"
import { getT } from "@/lib/i18n/server"
import { ArrowUpRight } from "@/components/ui/icons"

/** Tarjeta editorial de proyecto. Sin imagen real → presentación tipográfica (nunca imágenes genéricas). */
export async function ProjectCard({ project, priority, className }: { project: Project; priority?: boolean; className?: string }) {
  const { locale, t } = await getT()
  const { kindLabel } = getContent(locale)
  const { title, category, summary, image, imageAlt, url, status, via, bullets, mark, kind } = project

  return (
    <article className={cn("group glass glass-lift flex h-full flex-col overflow-hidden p-3 md:p-4", className)}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.1rem] bg-mist">
        {image ? (
          <Image
            src={image}
            alt={imageAlt ?? `${title} — ${category}`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_80%_10%,rgb(251_110_26/0.22),transparent_55%),linear-gradient(160deg,#f6f1ec,#e9e1da)]">
            <span aria-hidden="true" className="text-[clamp(4rem,10vw,7rem)] font-medium leading-none tracking-[-0.05em] text-ink/85">
              {mark}
            </span>
          </div>
        )}
        {status && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 text-xs font-medium text-ink backdrop-blur">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
            {status}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-2 pb-2 pt-5 md:px-3">
        <p className="t-label text-ink-faint">{category}</p>
        <h3 className="t-h3 mt-3">{title}</h3>
        <p className="mt-3 text-[0.97rem] text-ink-soft">{summary}</p>

        {bullets && (
          <ul className="mt-4 grid gap-1.5 text-sm text-ink-soft sm:grid-cols-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                {b}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-6">
          <p className="text-sm text-ink-faint">
            {kindLabel[kind]}
            {via && <> · {t("project.with", { via })}</>}
          </p>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white"
            >
              {t("project.viewSite")}<span className="sr-only">{t("project.viewSiteOf", { title })}</span>
              <ArrowUpRight width={15} height={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
