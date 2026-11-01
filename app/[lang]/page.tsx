import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { FeaturedProjects, HomeContact, MethodSection, ProductsEcosystem, ResourcesTeaser, ServicesOverview, StudioIntro } from "@/components/sections/home-sections"

import { pageMetadata } from "@/lib/seo"
import { getT } from "@/lib/i18n/server"

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getT()
  return pageMetadata({
    locale,
    path: "/",
    title: t("meta.siteTitle"),
    absoluteTitle: true,
    description: t("meta.siteDescription"),
    image: { url: "/og-image.png", alt: t("meta.ogAlt"), width: 1200, height: 630 },
  })
}

/**
 * Recorrido comercial: propuesta → servicios → trabajos → proceso y diferenciales → productos → recursos → contacto.
 * El contacto final es un solo bloque (formulario + WhatsApp); no se repite con otra banda de CTA.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedProjects />
      <MethodSection />
      <StudioIntro />
      <ProductsEcosystem />
      <ResourcesTeaser />
      <HomeContact />
    </>
  )
}
