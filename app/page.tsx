import { Hero } from "@/components/sections/hero"
import { CtaBand, FeaturedProjects, MethodSection, ProductsEcosystem, ServicesOverview, StudioIntro } from "@/components/sections/home-sections"

export default function HomePage() {
  return (
    <>
      <Hero />
      <StudioIntro />
      <FeaturedProjects />
      <ServicesOverview />
      <ProductsEcosystem />
      <MethodSection />
      <CtaBand />
    </>
  )
}
