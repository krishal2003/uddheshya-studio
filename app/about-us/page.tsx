import type { Metadata } from "next"
import AboutHero from "@/components/about-hero"
import TeamSection from "@/components/team-section"
import ValuesSection from "@/components/values-section"
import TimelineSection from "@/components/timeline-section"

export const metadata: Metadata = {
  title: "About Us | UDDHESHYA STUDIO",
  description: "Learn about UDDHESHYA STUDIO's journey, mission, values, and the team behind our success.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AboutHero />
      <ValuesSection />
      <TeamSection />
      <TimelineSection />
    </div>
  )
}
