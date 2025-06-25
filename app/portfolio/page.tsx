// PortfolioPage.tsx

import type { Metadata } from "next";
import PortfolioGrid from "@/components/portfolio-grid";
import PortfolioHero from "@/components/portfolio-hero";

export const metadata: Metadata = {
  title: "Portfolio | UDDHESHYA STUDIO",
  description:
    "Explore our portfolio of successful marketing campaigns and projects.",
};

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <PortfolioHero />
      <PortfolioGrid />
    </div>
  );
}
