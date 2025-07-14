"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary">
        Our Services
      </h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        We offer a comprehensive range of marketing services designed to help
        your business thrive in the digital landscape.
      </p>
    </motion.div>
  );
}
