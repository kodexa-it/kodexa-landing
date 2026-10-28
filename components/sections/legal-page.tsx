import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Link } from "@/components/i18n/link"
import { contactEmail } from "@/lib/content/site"
import { pageMetadata } from "@/lib/seo"
import { getT } from "@/lib/i18n/server"

type Doc = "privacy" | "cookies"
type LegalSection = { title: string; body: string[]; list?: string[] }

const PATH: Record<Doc, string> = { privacy: "/privacidad", cookies: "/cookies" }
const OTHER: Record<Doc, Doc> = { privacy: "cookies", cookies: "privacy" }

export async function legalMetadata(doc: Doc): Promise<Metadata> {
  const { locale, t } = await getT()
  return pageMetadata({ locale, path: PATH[doc], title: t(`legal.${doc}.meta.title`), description: t(`legal.${doc}.meta.description`) })
}

/** Reemplaza `{email}` por un enlace mailto. Si no hay email configurado, deja el texto sin la dirección. */
function withEmail(text: string) {
  const parts = text.split("{email}")
  if (parts.length === 1) return text
  return parts.flatMap((p, i) =>
    i === 0
      ? [p]
      : [
          contactEmail ? (
            <a key={i} href={`mailto:${contactEmail}`} className="font-medium text-brand-ink underline underline-offset-4">
              {contactEmail}
            </a>
          ) : null,
          p,
        ],
  )
}

/** Página legal (privacidad / cookies): texto desde messages/<lang>/legal.json. */
export async function LegalPage({ doc }: { doc: Doc }) {
  const { t } = await getT()
  const sections = t.raw<LegalSection[]>(`legal.${doc}.sections`)
  return (
    <>
      <PageHero
        path={PATH[doc]}
        crumbs={[{ name: "Kodexa", href: "/" }, { name: t(`legal.${doc}.crumb`) }]}
        eyebrow={t(`legal.${doc}.eyebrow`)}
        title={t(`legal.${doc}.title`)}
        lead={t(`legal.${doc}.lead`)}
      />
      <section className="py-16 md:py-24">
        <div className="wrap">
          <article className="mx-auto max-w-3xl">
            <p className="text-sm text-ink-faint">{t(`legal.${doc}.updated`)}</p>
            {sections.map((s, i) => (
              <section key={s.title} className="mt-10" aria-labelledby={`legal-${i}`}>
                <h2 id={`legal-${i}`} className="t-h3">{s.title}</h2>
                {s.body.map((p) => (
                  <p key={p} className="mt-4 leading-relaxed text-ink-soft">{withEmail(p)}</p>
                ))}
                {s.list && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-ink-soft marker:text-brand">
                    {s.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            <p className="mt-12 border-t border-line pt-6 text-ink-soft">
              <Link href={PATH[OTHER[doc]]} className="font-medium text-brand-ink underline underline-offset-4">
                {t(`legal.${OTHER[doc]}.title`)}
              </Link>
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
