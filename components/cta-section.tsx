"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function CtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-tertiary opacity-95 z-0"></div>

      {/* Premium animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        />

        {/* Floating sparkles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles className="w-4 h-4 text-white/40" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-white/80" />
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Ready to Transform Your Marketing Strategy?
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let's collaborate to create innovative marketing solutions that drive real results for your business.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link href="/contact-us">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="text-lg px-8 bg-white text-primary hover:bg-white/90 btn-premium shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>

            <Link href="/services">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-white text-white hover:bg-white/20 btn-premium backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Premium trust indicators */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/70"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              <span className="text-sm">Trusted by 500+ Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              <span className="text-sm">8+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              <span className="text-sm">Award-Winning Agency</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
