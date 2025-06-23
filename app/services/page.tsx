import type { Metadata } from "next"
import ServicesHero from "@/components/services-hero"
import ServicesGrid from "@/components/services-grid"
import ServiceProcess from "@/components/service-process"

export const metadata: Metadata = {
  title: "Services | UDDHESHYA STUDIO",
  description: "Discover our comprehensive range of marketing services designed to elevate your brand.",
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <ServicesHero />
      <ServicesGrid />
      <ServiceProcess />
    </div>
  )
}
