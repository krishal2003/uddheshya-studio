"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ClientsSection() {
  const clients = [
    { name: "Company 1", logo: "/vanasthali.png?height=80&width=160" },
    { name: "Company 2", logo: "/valley.png?height=80&width=160" },
    { name: "Company 3", logo: "/11.png?height=80&width=160" },
    { name: "Company 4", logo: "/annapurna.png?height=80&width=160" },

    { name: "Company 6", logo: "/1974AD.svg?height=80&width=160" },
    { name: "Company 5", logo: "/KU.png?height=80&width=160" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've partnered with forward-thinking companies across various
            industries to drive exceptional results.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={160}
                height={80}
                className="opacity-100 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
