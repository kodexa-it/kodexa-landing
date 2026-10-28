import { Link } from "@/components/i18n/link"
import { ProductBadge } from "@/components/ui/product-badge"
import { ButtonLink } from "@/components/ui/button"
import { ArrowRight, Whatsapp } from "@/components/ui/icons"
import { Eyebrow, Section, SectionHeader } from "@/components/ui/section"
import { ProjectCard } from "@/components/sections/project-card"
import { ContactForm } from "@/components/forms/contact-form"
import { getContent } from "@/lib/content"
import { EcosystemFlow } from "@/components/sections/ecosystem-flow"
import { whatsappHref } from "@/lib/content/site"
import { getT } from "@/lib/i18n/server"

/* ── 3. Presentación del estudio ─────────────────────────────── */
type Card = { title: string; text: string; href: string; tag?: string }

export async function StudioIntro() {
  const { t } = await getT()
  const capabilities = t.raw<Card[]>("home.studio.capabilities")
  return (
    <Section labelledBy="studio-title">
      <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="reveal">
          <Eyebrow>{t("home.studio.eyebrow")}</Eyebrow>
          <h2 id="studio-title" className="t-h2 mt-5">
            {t("home.studio.title")}
          </h2>
          <p className="t-lead mt-6">
            {t("home.studio.lead")}
          </p>
          <ButtonLink href="/estudio" variant="ghost" className="mt-6 -ml-4">
            {t("home.studio.link")} <ArrowRight width={18} height={18} />
          </ButtonLink>
        </div>

        <ul className="reveal grid gap-px overflow-hidden rounded-[1.5rem] border border-line bg-line sm:grid-cols-2">
          {capabilities.map((c, i) => (
            <li key={c.title} className="bg-paper">
              <Link href={c.href} className="group flex h-full flex-col gap-3 p-7 transition-colors hover:bg-white">
                <span className="t-label text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                <span className="t-h3">{c.title}</span>
                <span className="text-[0.97rem] text-ink-soft">{c.text}</span>
                <ArrowRight width={18} height={18} className="mt-auto text-brand-ink opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

/* ── 4. Proyectos destacados ─────────────────────────────────── */
export async function FeaturedProjects() {
  const { locale, t } = await getT()
  const items = getContent(locale).featuredProjects
  return (
    <Section labelledBy="work-title" className="bg-mist/50">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow={t("home.work.eyebrow")}
            title={<span id="work-title">{t("home.work.title")}</span>}
            lead={t("home.work.lead")}
          />
          <ButtonLink href="/proyectos" variant="secondary" className="self-start md:self-auto">
            {t("home.work.all")} <ArrowRight width={18} height={18} />
          </ButtonLink>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-12">
          <div className="reveal md:col-span-7"><ProjectCard project={items[0]} /></div>
          <div className="reveal md:col-span-5"><ProjectCard project={items[1]} /></div>
          <div className="reveal md:col-span-6"><ProjectCard project={items[2]} /></div>
          <div className="reveal md:col-span-6"><ProjectCard project={items[3]} /></div>
        </div>

        <div className="reveal glass mt-12 flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <p className="max-w-xl text-lg text-ink-soft">
            {t("home.work.ctaText")}
          </p>
          <ButtonLink
            href={whatsappHref(t("home.work.whatsappMessage"))}
            className="shrink-0"
            whatsapp={{ location: "projects", label: "projects_develop" }}
          >
            {t("home.work.ctaButton")} <ArrowRight width={18} height={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}

/* ── 5. Servicios ────────────────────────────────────────────── */
export async function ServicesOverview() {
  const { t } = await getT()
  const serviceFamilies = t.raw<Card[]>("home.services.families")
  return (
    <Section id="servicios" labelledBy="services-title" className="scroll-mt-24 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-1/4 -z-10 mx-auto h-96 max-w-4xl rounded-full bg-[radial-gradient(closest-side,rgb(251_110_26/0.16),transparent)] blur-2xl" />
      <div className="wrap">
        <SectionHeader
          eyebrow={t("home.services.eyebrow")}
          title={<span id="services-title">{t("home.services.title")}</span>}
          lead={t("home.services.lead")}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {serviceFamilies.map((s, i) => (
            <Link key={s.title} href={s.href} className={`reveal glass glass-lift group flex min-h-56 flex-col justify-between p-8 ${i % 2 ? "md:translate-y-8" : ""}`}>
              <div className="flex items-center justify-between">
                <span className="t-label text-ink-faint">{s.tag}</span>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-all duration-300 group-hover:border-brand group-hover:bg-brand">
                  <ArrowRight width={17} height={17} />
                </span>
              </div>
              <div>
                <h3 className="t-h3 mt-10">{s.title}</h3>
                <p className="mt-3 max-w-sm text-[0.97rem] text-ink-soft">{s.text}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-8 md:mt-20 md:flex-row md:items-center md:justify-between">
          <ButtonLink href="/servicios" variant="secondary" className="self-start">
            {t("home.services.all")} <ArrowRight width={18} height={18} />
          </ButtonLink>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <p className="text-lg font-medium tracking-[-0.01em] text-ink">{t("home.services.ask")}</p>
            <ButtonLink
              href={whatsappHref(t("home.services.whatsappMessage"))}
              whatsapp={{ location: "services", label: "services_consult" }}
            >
              {t("home.services.consult")}
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ── 6. Ecosistema Kodexa ──────────────────────────────────── */
export async function ProductsEcosystem() {
  const { locale, t } = await getT()
  const { productList } = getContent(locale)
  const ecoBenefits = t.raw<{ title: string; text: string }[]>("home.eco.benefits")
  return (
    <Section labelledBy="products-title" className="on-dark overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="absolute -right-24 top-0 h-[32rem] w-[32rem] rounded-full bg-brand/25 blur-[120px]" />
      <div aria-hidden="true" className="absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-[#7c5cff]/15 blur-[110px]" />
      <div className="wrap relative">
        <SectionHeader
          onDark
          eyebrow={t("home.eco.eyebrow")}
          title={<span id="products-title">{t("home.eco.title")}</span>}
          lead={t("home.eco.lead")}
        />

        <div className="mt-14">
          <EcosystemFlow />
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {ecoBenefits.map((b) => (
            <li key={b.title} className="reveal bg-ink/95 p-6">
              <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-brand" />
              <p className="mt-4 font-medium">{b.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">{b.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow onDark>{t("home.eco.ownEyebrow")}</Eyebrow>
            <p className="t-h3 mt-4 max-w-xl">{t("home.eco.ownTitle")}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {productList.map((p) => (
            <Link key={p.slug} href={`/productos/${p.slug}`} className="reveal glass-dark group flex flex-col p-8 transition-colors duration-300 hover:bg-white/15 md:p-10">
              <div className="flex items-center justify-between">
                <ProductBadge product={p} tone="light" />
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-white/85">
                  <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${p.statusTone === "live" ? "bg-emerald-400" : "bg-brand"}`} />
                  {p.status}
                </span>
              </div>
              <h3 className="mt-10 text-4xl font-medium tracking-[-0.03em]">{p.name}</h3>
              <p className="mt-1 text-lg text-white/80">{p.tagline}</p>
              <p className="mt-5 max-w-md text-[0.97rem] text-white/65">{p.summary}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white">
                {p.cta} <ArrowRight width={17} height={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-sm text-white/60">
            {t("home.eco.note")}
          </p>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={whatsappHref(t("home.eco.ecoMessage"))}
              whatsapp={{ location: "products", label: "products_ecosystem", service: "nexo-nodo" }}
            >
              {t("home.eco.ecoButton")}
              <ArrowRight width={18} height={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink
              href={whatsappHref(t("home.eco.customMessage"))}
              variant="onDark"
              whatsapp={{ location: "products", label: "products_custom_dev", service: "desarrollo-a-medida" }}
            >
              {t("home.eco.customButton")}
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ── 7. Metodología ──────────────────────────────────────────── */
export async function MethodSection() {
  const { locale, t } = await getT()
  const { method } = getContent(locale)
  return (
    <Section labelledBy="method-title">
      <div className="wrap">
        <SectionHeader
          eyebrow={t("home.method.eyebrow")}
          title={<span id="method-title">{t("home.method.title")}</span>}
          lead={t("home.method.lead")}
        />
        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div aria-hidden="true" className="absolute left-0 right-0 top-[0.45rem] hidden h-px bg-line md:block" />
          {method.map((s, i) => (
            <li key={s.title} className="reveal relative md:pr-4">
              <span aria-hidden="true" className="relative z-10 block h-3 w-3 rounded-full bg-brand ring-8 ring-paper" />
              <p className="t-label mt-6 text-ink-faint">{t("home.method.stage", { n: String(i + 1).padStart(2, "0") })}</p>
              <h3 className="t-h3 mt-3">{s.title}</h3>
              <p className="mt-3 text-[0.97rem] text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

/* ── 8. CTA final ────────────────────────────────────────────── */
export async function CtaBand({
  title,
  lead,
  whatsappMessage,
  service,
  location = "cta_final",
  id = "contact",
  tone = "dark",
}: {
  title?: string
  lead?: string
  /** Mensaje precargado de WhatsApp (puede ser específico del servicio). */
  whatsappMessage?: string
  /** Servicio asociado, para el mensaje y la analítica. */
  service?: string
  /** Ubicación del botón en la analítica (cta_location). */
  location?: string
  id?: string
  tone?: "dark" | "light"
}) {
  const { t } = await getT()
  title ??= t("home.cta.title")
  lead ??= t("home.cta.lead")
  whatsappMessage ??= t("common.whatsappDefault")
  const dark = tone === "dark"
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`${dark ? "on-dark bg-ink text-white" : "bg-paper text-ink"} relative overflow-hidden py-24 md:py-32`}
    >
      <div aria-hidden="true" className={`drift absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(251_110_26/0.55),transparent_65%)] blur-2xl ${dark ? "" : "opacity-40"}`} />
      <div className="wrap relative">
        <div className={`${dark ? "glass-dark" : "glass"} mx-auto max-w-4xl px-6 py-14 text-center md:px-16 md:py-20`}>
          <Eyebrow onDark={dark} className="justify-center">{t("home.cta.eyebrow")}</Eyebrow>
          <h2 id={`${id}-title`} className={`t-h1 mt-6 ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
          <p className={`mx-auto mt-6 max-w-xl text-lg ${dark ? "text-white/70" : "text-ink-soft"}`}>{lead}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={whatsappHref(whatsappMessage)} whatsapp={{ location, label: `${location}_whatsapp`, service }}>
              <Whatsapp width={18} height={18} /> {t("home.cta.whatsapp")}
            </ButtonLink>
            <ButtonLink href="/contacto" variant={dark ? "onDark" : "secondary"} event="cta_click" eventProps={{ location, label: "formulario" }}>
              {t("home.cta.form")} <ArrowRight width={18} height={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── 9. Contacto (home) ──────────────────────────────────────── */
export async function HomeContact() {
  const { t } = await getT()
  return (
    <section id="contact" aria-labelledby="home-contact-title" className="on-dark relative overflow-hidden bg-ink py-20 text-white md:py-28">
      <div aria-hidden="true" className="drift absolute -left-24 top-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgb(251_110_26/0.45),transparent_65%)] blur-2xl" />
      <div aria-hidden="true" className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#7c5cff]/15 blur-[110px]" />
      <div className="wrap relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Eyebrow onDark>{t("home.contact.eyebrow")}</Eyebrow>
          <h2 id="home-contact-title" className="t-h1 mt-6 text-white">{t("home.contact.title")}</h2>
          <p className="mt-6 max-w-md text-lg text-white/70">
            {t("home.contact.lead")}
          </p>
          <div className="mt-8">
            <ButtonLink
              href={whatsappHref(t("common.whatsappDefault"))}
              className="w-full sm:w-auto"
              whatsapp={{ location: "contact", label: "home_contact_whatsapp" }}
            >
              <Whatsapp width={18} height={18} /> {t("home.contact.whatsapp")}
            </ButtonLink>
            <p className="mt-3 text-sm text-white/55">{t("home.contact.note")}</p>
          </div>
          <ul className="mt-8 space-y-3 text-white/75">
            {t.raw<string[]>("home.contact.bullets").map((b) => (
              <li key={b} className="flex items-center gap-3">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <ContactForm variant="quick" source="home" />
      </div>
    </section>
  )
}
