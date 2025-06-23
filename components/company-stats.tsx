"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Briefcase, Globe } from "lucide-react"

export default function CompanyStats() {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "50+",
      label: "Team Members",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: "25+",
      label: "Awards Won",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      value: "500+",
      label: "Projects Completed",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      value: "30+",
      label: "Countries Served",
    },
  ]

  return (
    <div className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover-card h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
