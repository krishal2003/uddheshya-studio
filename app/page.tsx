

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Video section hidden on mobile, visible on medium and larger screens */}
      <div className="hidden md:block">
        <VideoSection />
      </div>

      <HeroSection />
      <FeaturedServices />
      {/* <ClientsSection /> */}
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
