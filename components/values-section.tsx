"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Target, Users, Zap } from "lucide-react"

export default function ValuesSection() {
  const values = [
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Innovation",
      description:
        "We constantly explore new ideas and technologies to keep our clients at the forefront of digital marketing.",
    },
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Results-Driven",
      description:
        "We focus on delivering measurable results that contribute directly to our clients' business objectives.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Collaboration",
      description: "We work closely with our clients, forming partnerships that foster creativity and drive success.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from strategy development to campaign execution.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          Our Values
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          These core principles guide our approach and define who we are as a company.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {values.map((value, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="hover-card h-full">
              <CardHeader>
                <div className="mb-4">{value.icon}</div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
