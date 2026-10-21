import { Hero } from "@/components/sections/hero"
import { FeaturedProjects, HomeContact, MethodSection, ProductsEcosystem, ServicesOverview, StudioIntro } from "@/components/sections/home-sections"

export default function HomePage() {
  return (
    <>
      <Hero />
      <StudioIntro />
      <FeaturedProjects />
      <ServicesOverview />
      <ProductsEcosystem />
      <MethodSection />
      <HomeContact />
    </>
  )
}
