import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AudienceSection } from "@/components/audience-section"
import { WorkSection } from "@/components/work-section"
import { ProcessSection } from "@/components/process-section"
import { DifferentiatorSection } from "@/components/differentiator-section"
import { MembershipSection } from "@/components/membership-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { SideNav } from "@/components/side-nav"
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <SideNav />
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <AudienceSection />
        <WorkSection />
        <ProcessSection />
        <DifferentiatorSection />
        <MembershipSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
