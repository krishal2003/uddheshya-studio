"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function PortfolioGrid() {
  const categories = ["All", "Branding", "Digital Marketing", "Web Design", "Social Media", "Content Creation"]
  const [activeCategory, setActiveCategory] = useState("All")

  const projects = [
    {
      id: 1,
      title: "TechVision Rebrand",
      category: "Branding",
      image: "/placeholder.svg?height=600&width=800&text=TechVision+Rebrand",
      tags: ["Brand Identity", "Logo Design", "Brand Guidelines"],
      description:
        "A complete brand overhaul for TechVision, a leading technology company. We created a modern, forward-thinking visual identity that reflects their innovative approach to technology solutions.",
      results:
        "The rebrand resulted in a 40% increase in brand recognition and a 25% boost in customer engagement within the first quarter.",
    },
    {
      id: 2,
      title: "EcoLife E-commerce",
      category: "Web Design",
      image: "/placeholder.svg?height=600&width=800&text=EcoLife+E-commerce",
      tags: ["UI/UX Design", "E-commerce", "Responsive Design"],
      description:
        "Designed and developed a fully responsive e-commerce website for EcoLife, a sustainable products retailer. The site features an intuitive user interface, seamless checkout process, and robust product filtering.",
      results: "The new website increased online sales by 75% and reduced cart abandonment rates by 30%.",
    },
    {
      id: 3,
      title: "FreshBite Social Campaign",
      category: "Social Media",
      image: "/placeholder.svg?height=600&width=800&text=FreshBite+Campaign",
      tags: ["Social Media Strategy", "Content Creation", "Influencer Marketing"],
      description:
        "Developed and executed a comprehensive social media campaign for FreshBite, a meal delivery service. The campaign included content creation, influencer partnerships, and targeted advertising.",
      results:
        "The campaign generated over 2 million impressions, increased follower count by 45%, and drove a 60% increase in website traffic.",
    },
    {
      id: 4,
      title: "GlobalTech SEO Optimization",
      category: "Digital Marketing",
      image: "/placeholder.svg?height=600&width=800&text=GlobalTech+SEO",
      tags: ["SEO", "Content Strategy", "Analytics"],
      description:
        "Implemented a comprehensive SEO strategy for GlobalTech, including technical SEO improvements, content optimization, and backlink building.",
      results:
        "Organic traffic increased by 120% within six months, with a 200% increase in lead generation from organic search.",
    },
    {
      id: 5,
      title: "Wellness Hub Content Strategy",
      category: "Content Creation",
      image: "/placeholder.svg?height=600&width=800&text=Wellness+Hub",
      tags: ["Content Strategy", "Blog Management", "Email Marketing"],
      description:
        "Developed and implemented a comprehensive content strategy for Wellness Hub, including blog content, email newsletters, and downloadable resources.",
      results:
        "The content strategy increased website engagement by 85%, with email open rates improving from 15% to 32%.",
    },
    {
      id: 6,
      title: "Urban Styles Digital Campaign",
      category: "Digital Marketing",
      image: "/placeholder.svg?height=600&width=800&text=Urban+Styles",
      tags: ["PPC", "Display Advertising", "Conversion Optimization"],
      description:
        "Created and managed a multi-channel digital advertising campaign for Urban Styles, a fashion retailer targeting young urban professionals.",
      results:
        "The campaign achieved a 320% ROI, with a 45% decrease in cost per acquisition compared to previous campaigns.",
    },
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

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
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            className="mb-2"
          >
            {category}
          </Button>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Dialog>
              <DialogTrigger asChild>
                <Card className="overflow-hidden hover-card cursor-pointer">
                  <div className="relative h-64">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <Badge variant="secondary" className="mb-4">
                      {project.category}
                    </Badge>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="bg-primary/10">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-primary/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </DialogHeader>
                <div className="relative h-80 my-4">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="text-base space-y-4">
                  <div>{project.description}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Results</h4>
                    <div>{project.results}</div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
