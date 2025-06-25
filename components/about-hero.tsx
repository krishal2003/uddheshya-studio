"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
      <motion.div
        className="text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          About Us
        </h1>
        <p className="text-xl text-muted-foreground">
          UDDHESHYA STUDIO is a forward-thinking marketing agency that combines
          creativity, data-driven strategies, and cutting-edge technology to
          deliver exceptional results for our clients.
        </p>
        <p className="text-xl text-muted-foreground mt-4">
          Founded in 2025, we've grown from a small team of passionate marketers
          to a full-service agency with expertise across all digital channels.
        </p>
      </motion.div>

      <motion.div
        className="relative h-[400px] rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src="/placeholder.svg?height=800&width=1200&text=Our+Team"
          alt="UDDHESHYA STUDIO team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
      </motion.div>
    </div>
  );
}
