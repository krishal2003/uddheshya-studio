"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ClientLogos() {
  const clients = [
    { name: "Client 1", logo: "/placeholder.svg?height=80&width=160&text=Client+1" },
    { name: "Client 2", logo: "/placeholder.svg?height=80&width=160&text=Client+2" },
    { name: "Client 3", logo: "/placeholder.svg?height=80&width=160&text=Client+3" },
    { name: "Client 4", logo: "/placeholder.svg?height=80&width=160&text=Client+4" },
    { name: "Client 5", logo: "/placeholder.svg?height=80&width=160&text=Client+5" },
    { name: "Client 6", logo: "/placeholder.svg?height=80&width=160&text=Client+6" },
    { name: "Client 7", logo: "/placeholder.svg?height=80&width=160&text=Client+7" },
    { name: "Client 8", logo: "/placeholder.svg?height=80&width=160&text=Client+8" },
    { name: "Client 9", logo: "/placeholder.svg?height=80&width=160&text=Client+9" },
    { name: "Client 10", logo: "/placeholder.svg?height=80&width=160&text=Client+10" },
  ]

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We've had the privilege of working with a diverse range of clients across various industries.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center"
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
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
