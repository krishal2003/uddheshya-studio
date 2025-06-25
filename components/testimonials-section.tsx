"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "As we closed our 30-year legacy with Rock Yatra 2, we needed a partner who understood the emotional weight of Nepal’s 'Antim Yatra' (final journey). Uddheshya Studio transformed our vision into a historic reality: securing the Hyatt Grounds in Bouddha, managing 10,000+ fans, and creating a seamless fusion of nostalgia and rock energy. Their team handled everything from safety protocols to multimedia tributes for icons like Narayan Gopal and Bhakta Raj Acharya. The event trended nationally, with live clips of 'Mutu Bhari' and 'Nepali Ho' hitting 2M+ views. They didn’t just organize a concert—they cemented our legacy.",
      author: "Adrian Pradhan",
      position: "Lead Vocalist & Drummer, 1974 AD",
      avatar: "/adrian.jpg?height=80&width=80&text=SJ",
    },
    {
      quote:
        "Launching Nepal’s first Bachelor in Aviation Management (BAM) demanded strategic positioning. This agency crafted a nationwide campaign highlighting our KU affiliation and Annapurna Ventures’ industry network. They orchestrated open-house events at Banepa campus, driving 500+ qualified inquiries via targeted digital ads and aviation career webinars. Their guerrilla marketing included airport pop-ups showcasing VR simulations of air traffic control roles. Enrollment hit 100% capacity (33 seats) within 3 weeks, with 40% of students securing internships at Himalayan Airlines—proof they turn academic visions into tangible careers.",
      author: "Rameshwor Thapa",
      position: "Chairman, Annapurna Ventures",
      avatar: "/thapa.jpg?height=80&width=80&text=MC",
    },
    {
      quote:
        "HCOP’s jazz manouche revival—blending Django Reinhardt with Narayan Gopal classics—needed niche audience growth. The agency engineered a 3-phase plan: First, they produced our debut EP launch at Patan Museum, fusing jazz improvisation with Nepali sarangi. Then, they leveraged digital storytelling, creating mini-docs about 'translating 70s pop into swing.' Finally, they secured NPR 1.2M in grants from cultural foundations by framing HCOP as 'custodians of heritage innovation.' Our Spotify streams grew 300%, and we’re now headlining international jazz fests in Bhutan and India, showcasing the global appeal of our unique sound.",
      author: "Ben Errington",
      position: "Artistic Facilitator, Hot Club of Patan",
      avatar: "/benn.png?height=80&width=80&text=PS",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg bg-background/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <Quote className="h-12 w-12 text-primary mb-6 opacity-50" />
                <p className="text-xl md:text-2xl mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex items-center flex-col">
                  <div className="relative w-16 h-16 mb-4 rounded-full overflow-hidden">
                    <Image
                      src={
                        testimonials[currentIndex].avatar || "/placeholder.svg"
                      }
                      alt={testimonials[currentIndex].author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      {testimonials[currentIndex].author}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
