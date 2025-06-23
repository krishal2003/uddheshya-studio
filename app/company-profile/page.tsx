import type { Metadata } from "next"
import CompanyStats from "@/components/company-stats"
import CompanyVision from "@/components/company-vision"
import ClientLogos from "@/components/client-logos"

export const metadata: Metadata = {
  title: "Company Profile | UDDHESHYA STUDIO",
  description: "Explore UDDHESHYA STUDIO's company profile, achievements, and vision for the future of marketing.",
}

export default function CompanyProfilePage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
        Company Profile
      </h1>
      <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
        <p className="text-xl text-center max-w-3xl mx-auto">
          UDDHESHYA STUDIO is a forward-thinking marketing agency that combines creativity, data-driven strategies, and
          cutting-edge technology to deliver exceptional results for our clients.
        </p>
      </div>
      <CompanyStats />
      <CompanyVision />
      <ClientLogos />
    </div>
  )
}
