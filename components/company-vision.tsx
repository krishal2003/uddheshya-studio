"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Target, BarChart } from "lucide-react"
import Image from "next/image"

export default function CompanyVision() {
  const visionItems = [
    {
      icon: <Eye className="h-10 w-10 text-primary" />,
      title: "Vision",
      description:
        "To be the leading marketing agency that transforms brands through innovative digital strategies and creative excellence.",
    },
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Mission",
      description:
        "To empower businesses with cutting-edge marketing solutions that drive growth, engagement, and lasting success in the digital landscape.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Goals",
      description:
        "To continuously innovate, deliver exceptional results for our clients, and foster a culture of creativity and excellence within our team.",
    },
  ]

  return (
    <div className="py-16">
      <div className="relative h-64 mb-16 rounded-xl overflow-hidden">
        <Image
          src="/placeholder.svg?height=600&width=1200&text=Our+Vision"
          alt="Company Vision"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-purple-600/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Our Vision & Mission</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visionItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover-card h-full">
              <CardContent className="p-6">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
