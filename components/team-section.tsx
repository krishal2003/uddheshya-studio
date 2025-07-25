"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

export default function TeamSection() {
  const team = [
    {
      name: "Aditya Sharma",
      position: "Creative Head",
      bio: "With over 15 years of experience in digital marketing, Aditya leads our team with vision and expertise.",
      image: "/placeholder.svg?height=400&width=400&text=Aditya+Sharma",
      linkedin: "https://www.linkedin.com/in/adityasharma",
    },
    {
      name: "Priya Patel",
      position: "Research Head",
      bio: "Priya brings creative excellence to every project, ensuring our clients' brands stand out in the market.",
      image: "/placeholder.svg?height=400&width=400&text=Priya+Patel",
      linkedin: "https://www.linkedin.com/in/priyapatel",
    },
    {
      name: "Rahul Verma",
      position: "Admin Head",
      bio: "Rahul combines analytical thinking with creative problem-solving to develop effective marketing strategies.",
      image: "/placeholder.svg?height=400&width=400&text=Rahul+Verma",
      linkedin: "https://www.linkedin.com/in/rahulverma",
    },
    {
      name: "Ananya Singh",
      position: "Technical Head",
      bio: "Ananya creates stunning, functional websites that deliver exceptional user experiences and drive conversions.",
      image: "/placeholder.svg?height=400&width=400&text=Ananya+Singh",
      linkedin: "https://www.linkedin.com/in/ananyasingh",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          Meet Our Team
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our talented team of marketing experts is passionate about helping
          businesses grow.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {team.map((member, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="hover-card overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary mb-3">{member.position}</p>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a
                    href={member.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn profile`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
