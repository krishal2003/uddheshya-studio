"use client"

import { motion } from "framer-motion"
import { ClipboardCheck, Lightbulb, Rocket, BarChart } from "lucide-react"

export default function ServiceProcess() {
  const steps = [
    {
      icon: <ClipboardCheck className="h-12 w-12 text-primary" />,
      title: "Discovery & Strategy",
      description:
        "We begin by understanding your business goals, target audience, and competitive landscape to develop a tailored marketing strategy.",
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-primary" />,
      title: "Creative Development",
      description:
        "Our creative team designs compelling visuals and messaging that align with your brand identity and resonate with your audience.",
    },
    {
      icon: <Rocket className="h-12 w-12 text-primary" />,
      title: "Implementation",
      description:
        "We execute the strategy across all relevant channels, ensuring consistent messaging and optimal performance.",
    },
    {
      icon: <BarChart className="h-12 w-12 text-primary" />,
      title: "Analysis & Optimization",
      description:
        "We continuously monitor campaign performance, analyze results, and make data-driven optimizations to maximize ROI.",
    },
  ]

  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          Our Process
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We follow a structured approach to ensure your marketing initiatives deliver exceptional results.
        </p>
      </div>

      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center z-10 relative">
                  {step.icon}
                </div>
                <div className="absolute inset-0 rounded-full animate-glow"></div>
              </div>

              <div className="w-full md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
