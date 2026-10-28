import { Hero } from "@/components/sections/hero"
import { FeaturedProjects, HomeContact, MethodSection, ProductsEcosystem, ResourcesTeaser, ServicesOverview, StudioIntro } from "@/components/sections/home-sections"

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
