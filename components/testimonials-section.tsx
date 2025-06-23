"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "UDDHESHYA STUDIO transformed our digital presence completely. Their strategic approach to marketing helped us increase our online engagement by 200% within just three months.",
      author: "Sarah Johnson",
      position: "Marketing Director, TechCorp",
      avatar: "/placeholder.svg?height=80&width=80&text=SJ",
    },
    {
      quote:
        "Working with the team at UDDHESHYA STUDIO has been a game-changer for our brand. Their creative campaigns and data-driven strategies have delivered exceptional ROI.",
      author: "Michael Chen",
      position: "CEO, Innovate Solutions",
      avatar: "/placeholder.svg?height=80&width=80&text=MC",
    },
    {
      quote:
        "The level of creativity and technical expertise at UDDHESHYA STUDIO is unmatched. They don't just execute marketing campaigns; they become true partners in your business growth.",
      author: "Priya Sharma",
      position: "Brand Manager, Global Retail",
      avatar: "/placeholder.svg?height=80&width=80&text=PS",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
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
                <p className="text-xl md:text-2xl mb-8 italic">"{testimonials[currentIndex].quote}"</p>
                <div className="flex items-center flex-col">
                  <div className="relative w-16 h-16 mb-4 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[currentIndex].author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonials[currentIndex].author}</h4>
                    <p className="text-muted-foreground">{testimonials[currentIndex].position}</p>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} aria-label="Previous testimonial">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextTestimonial} aria-label="Next testimonial">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
