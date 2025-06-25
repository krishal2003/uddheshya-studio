"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Megaphone,
  LineChart,
  Palette,
  Globe,
  MessageSquare,
  Search,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FeaturedServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: <Megaphone className="h-10 w-10 text-primary" />,
      title: "Event Promotion and Management",
      description:
        "Organizing and promoting successful events with a strategic marketing plan to drive engagement and attendance.",
      gradient: "from-primary/10 to-secondary/5",
      delay: 0,
    },
    {
      icon: <LineChart className="h-10 w-10 text-secondary" />,
      title: "Educational Campaign",
      description:
        "Targeted campaigns designed to educate and inform your audience about important topics and services.",
      gradient: "from-secondary/10 to-tertiary/5",
      delay: 0.1,
    },
    {
      icon: <Palette className="h-10 w-10 text-tertiary" />,
      title: "Social Media Handling",
      description:
        "Comprehensive management of social media platforms to increase visibility, engagement, and brand loyalty.",
      gradient: "from-tertiary/10 to-primary/5",
      delay: 0.2,
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Hospitality and Entertainment Marketing",
      description:
        "Promoting hospitality and entertainment businesses through targeted strategies to attract and retain customers.",
      gradient: "from-primary/10 to-tertiary/5",
      delay: 0.3,
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-secondary" />,
      title: "Branding and Identity Development",
      description:
        "Building a unique and strong brand identity that resonates with your target market.",
      gradient: "from-secondary/10 to-primary/5",
      delay: 0.4,
    },
    {
      icon: <Search className="h-10 w-10 text-tertiary" />,
      title: "Web Development",
      description:
        "Developing custom websites that are visually appealing, user-friendly, and optimized for performance.",
      gradient: "from-tertiary/10 to-secondary/5",
      delay: 0.5,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-primary/3 via-secondary/3 to-tertiary/3 relative overflow-hidden"
    >
      {/* Premium background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-tertiary/5 to-primary/5 rounded-full filter blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gradient-hover"
            whileHover={{ scale: 1.02 }}
          >
            Our Premium Services
          </motion.h2>
          <motion.p
            className="text-xl text-tertiary max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We offer a comprehensive range of marketing services designed to
            help your business thrive in the digital landscape.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 50, scale: 0.9 }
              }
              transition={{
                duration: 0.6,
                delay: service.delay,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="hover-card h-full border-primary/10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden group">
                {/* Premium gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <CardHeader className="relative z-10">
                  <motion.div
                    className="mb-4 p-3 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-lg w-fit"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl text-secondary group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base text-tertiary group-hover:text-secondary transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardContent>

                {/* Premium shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 3,
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
