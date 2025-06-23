"use client"

import { motion } from "framer-motion"
import { Megaphone, LineChart, Palette, Globe, MessageSquare, Search, Mail, Video, Camera, PenTool } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesGrid() {
  const services = [
    {
      icon: <Megaphone className="h-10 w-10 text-primary" />,
      title: "Digital Advertising",
      description:
        "Strategic ad campaigns across multiple platforms to maximize your ROI and reach your target audience effectively. We specialize in PPC, display advertising, and retargeting campaigns.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Analytics & Insights",
      description:
        "Data-driven decision making with comprehensive analytics and actionable insights to optimize your marketing strategy. We help you understand your audience and measure campaign performance.",
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Brand Development",
      description:
        "Create a compelling brand identity that resonates with your audience and sets you apart from competitors. Our branding services include logo design, visual identity, and brand guidelines.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Web Development",
      description:
        "Custom website solutions that combine stunning design with seamless functionality to enhance user experience. We build responsive, SEO-friendly websites that convert visitors into customers.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Social Media Management",
      description:
        "Engage your audience with strategic content and community management across all social platforms. We help you build a strong social presence and meaningful connections with your audience.",
    },
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "SEO Optimization",
      description:
        "Improve your online visibility and drive organic traffic with our comprehensive SEO strategies. We optimize your website structure, content, and backlink profile to boost your search rankings.",
    },
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: "Email Marketing",
      description:
        "Create targeted email campaigns that nurture leads and drive conversions. We design, implement, and optimize email marketing strategies that deliver measurable results.",
    },
    {
      icon: <Video className="h-10 w-10 text-primary" />,
      title: "Video Production",
      description:
        "Engage your audience with high-quality video content that tells your brand story. From concept to production, we create videos that captivate and convert.",
    },
    {
      icon: <Camera className="h-10 w-10 text-primary" />,
      title: "Photography",
      description:
        "Professional photography services to showcase your products, services, and team. We create visual assets that enhance your marketing materials and strengthen your brand image.",
    },
    {
      icon: <PenTool className="h-10 w-10 text-primary" />,
      title: "Content Creation",
      description:
        "Compelling content that engages your audience and drives action. Our content creation services include blog posts, articles, whitepapers, case studies, and more.",
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
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {services.map((service, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Card className="hover-card h-full">
            <CardHeader>
              <div className="mb-4">{service.icon}</div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
