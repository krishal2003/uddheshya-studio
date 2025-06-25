"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  LineChart,
  Palette,
  Globe,
  MessageSquare,
  Search,
  Mail,
  Video,
  Camera,
  PenTool,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ServicesGrid() {
  const services = [
    {
      icon: <Megaphone className="h-10 w-10 text-primary" />,
      title: "Social Media Management",
      description:
        "Manage your social media platforms, create engaging posts, and increase your brand's presence online.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Content Creation (Reels, Design, Campaigns)",
      description:
        "Create engaging content for social media including reels, design work, and full-scale campaigns to connect with your audience.",
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Influencer & Community Marketing",
      description:
        "Partner with influencers and engage with communities to promote your brand and create authentic connections.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Event Promotion & Coordination",
      description:
        "Coordinate and promote your events to ensure they reach the right audience and deliver successful outcomes.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Podcast and YouTube Channel Production",
      description:
        "Launch and manage your podcast or YouTube channel with professional production, editing, and marketing services.",
    },
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Hospitality and Entertainment Marketing",
      description:
        "Promote hospitality and entertainment businesses, helping you reach new customers through targeted campaigns.",
    },
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: "Paid Advertising & Media Buying",
      description:
        "Create and manage effective paid ad campaigns across various media platforms to increase brand visibility and drive conversions.",
    },
    {
      icon: <Video className="h-10 w-10 text-primary" />,
      title: "Branding & Identity Development",
      description:
        "Develop a strong brand identity that reflects your business values and connects with your target audience.",
    },
    {
      icon: <Camera className="h-10 w-10 text-primary" />,
      title: "Web Design & SEO",
      description:
        "Design user-friendly websites optimized for SEO to help improve your online presence and drive organic traffic.",
    },
    {
      icon: <PenTool className="h-10 w-10 text-primary" />,
      title: "Research and Analytics for Marketing Strategy",
      description:
        "Use data-driven insights to create effective marketing strategies that maximize your ROI and enhance brand performance.",
    },
    {
      icon: <Megaphone className="h-10 w-10 text-primary" />,
      title: "Educational Campaigns and Conference Management",
      description:
        "Organize and manage educational campaigns and conferences to deliver meaningful experiences and engage audiences effectively.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Music & Cultural Brand Promotion",
      description:
        "Promote cultural and music brands by leveraging targeted campaigns to reach the right audience and enhance brand recognition.",
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
              <CardDescription className="text-base">
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
