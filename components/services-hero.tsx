"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ServicesHero() {
  return (
    <div className="relative mb-16">
      {/* Background image */}
      <div className="absolute inset-0 -z-10 rounded-xl overflow-hidden">
        <Image
          src="/placeholder.svg?height=600&width=1200&text=Services"
          alt="Services background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20"></div>
      </div>

      <div className="relative z-10 py-16 px-8 rounded-xl">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground">
            We offer a comprehensive range of marketing services designed to help your business thrive in the digital
            landscape.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
