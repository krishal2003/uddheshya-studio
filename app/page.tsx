import HeroSection from "@/components/hero-section"
import FeaturedServices from "@/components/featured-services"
import ClientsSection from "@/components/clients-section"
import TestimonialsSection from "@/components/testimonials-section"
import CtaSection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturedServices />
      <ClientsSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  )
}
