"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function TimelineSection() {
  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description:
        "UDDHESHYA STUDIO was founded with a vision to transform digital marketing through creativity and innovation.",
    },
    {
      year: "2017",
      title: "Expanded Services",
      description:
        "We expanded our service offerings to include web development, social media management, and content creation.",
    },
    {
      year: "2019",
      title: "National Recognition",
      description:
        "UDDHESHYA STUDIO received national recognition for our innovative marketing campaigns and exceptional results.",
    },
    {
      year: "2021",
      title: "International Expansion",
      description:
        "We expanded our operations internationally, serving clients across multiple countries and industries.",
    },
    {
      year: "2023",
      title: "Technology Integration",
      description:
        "We integrated advanced AI and data analytics capabilities to enhance our marketing strategies and deliver better results.",
    },
  ]

  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          Our Journey
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the key milestones that have shaped UDDHESHYA STUDIO into the company we are today.
        </p>
      </div>

      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-16">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
            >
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <Card className="hover-card">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg z-10 relative">
                  {milestone.year}
                </div>
                <div className="absolute inset-0 rounded-full animate-glow"></div>
              </div>

              <div className="w-full md:w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
