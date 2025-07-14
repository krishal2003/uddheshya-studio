"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export default function PortfolioGrid() {
  const categories = [
    "All",
    "Events",
    "Education",
    "Hospitality",
    "Artist Management",
    "Business Development",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Prateek Kuhad Silhouettes Tour",
      category: "Events",
      image: "/prateek.jpeg?height=600&width=800&text=TechVision+Rebrand",
      tags: ["Concert", "Event Management"],
      description:
        "Prateek Kuhad's Silhouettes Tour in Nepal took place on October 26, 2024, at The Everest Hotel in Kathmandu. The concert featured his soulful indie-folk and acoustic music, including hits like Cold Mess, Kasoor, and Tum Jab Paas, alongside new tracks such as Mulaqat and I'm Someone New. Organized by Eleven11 and Khalti Events, the event offered fans an intimate musical experience.",
      results:
        "Prateek Kuhad's Silhouettes Tour in Kathmandu delivered an intimate evening of soulful music, captivating fans with heartfelt performances.",
    },
    {
      id: 2,
      title: "SVI- Undergrad Program",
      category: "Education",
      image: "/BAM.jpeg?height=600&width=800&text=EcoLife+E-commerce",
      tags: ["Aviation", "Kathmandu University"],
      description:
        "Nepal offers a Bachelor of Aviation Management (BAM) program, primarily through Kathmandu University in collaboration with Simrik Ventures and Siddhartha Vanasthali Institute. This four-year undergraduate program, affiliated with Kathmandu University, is designed to equip students with the skills and knowledge necessary to effectively manage aviation operations.",
      results:
        "Graduates of BAM in Nepal can pursue careers in airline and airport management, aviation safety, and aviation-related businesses globally.",
    },
    // {
    //   id: 3,
    //   title: "Rohit John Chettri",
    //   category: "Artist Management",
    //   image: "/RJC.jpg?height=600&width=800&text=FreshBite+Campaign",
    //   tags: ["Collaboration", "Representation", "Celebrities"],
    //   description:
    //     "Rohit John Chettri, a prominent Nepali singer-songwriter, is actively working on his upcoming project, Reborn. The project is currently ongoing, with updates shared on his official social media platforms.",
    //   results:
    //     "We are currently working on Reborn, an ongoing project by Rohit John Chettri, with updates available on his social media.",
    // },
    {
      id: 4,
      title: "1974 AD Rock Yatra 2",
      category: "Events",
      image: "/1974.webp?height=600&width=800&text=GlobalTech+SEO",
      tags: ["Concert", "Event Management"],
      description:
        "On April 5, 2025, Nepali rock band 1974 AD celebrated their 30th anniversary with Rock Yatra 2 at Hyatt Ground, Bouddha, Kathmandu. The concert featured classic hits and tributes to Nepali music legends. ",
      results:
        "Rock Yatra 2 reunited 1974 AD with 10,000 fans, marking a historic farewell and showcasing their musical legacy.",
    },
    {
      id: 5,
      title: "Gypsy Swing Patan",
      category: "Hospitality",
      image: "/gypsy.jpg?height=600&width=800&text=Wellness+Hub",
      tags: ["Patan", "Heritage", "Gypsy"],
      description:
        "Gypsy Swing Patan is a cozy café and live music venue located in Saugal, Patan, Nepal. It offers a unique blend of traditional Nepali dishes and beverages in a relaxed, artistic setting. The venue is renowned for its live Gypsy jazz performances, featuring local musicians like the Hot Club Patan Ensemble. These performances typically occur on Wednesdays and Fridays at 6:30 PM, providing an intimate atmosphere for music enthusiasts.",
      results:
        "Gypsy Swing Patan offers an intimate setting for enjoying live Gypsy jazz performances, delicious food, and a cozy atmosphere.",
    },
    {
      id: 6,
      title: "NAAV",
      category: "Education",
      image: "/NAAV.jpg?height=600&width=800&text=Urban+Styles",
      tags: ["Management", "Computer Science"],
      description:
        "Nepal Adarsha Awasiya Vidyalaya (NAAV) is a co-educational, English-medium private boarding school located in Bhandardhik, Pokhara-29. Established in 1996, it offers education from Montessori through Grade 12. The school is affiliated with the National Examinations Board (NEB) and provides +2 programs in Management, Science, and Humanities. Spanning 7.36 acres.",
      results:
        "NAAV offers quality education in a serene environment, emphasizing holistic development with modern amenities and diverse academic programs.",
    },
    {
      id: 7,
      title: "Ritvitz LIVE IN NEPAL",
      category: "Events",
      image: "/ritvitz.jpg?height=600&width=800&text=Urban+Styles",
      tags: ["Concert", "Event Management"],
      description:
        "Ritviz, the Indian electronic music sensation, is set to perform in Kathmandu on June 14, 2025, at Club Omnia. The event is scheduled to begin at 9 PM. Organized by Khalti Events, this performance is part of the Holi celebrations, promising an electrifying night filled with Ritviz's signature blend of classical Hindustani music and modern electronic beats.",
      results:
        "The campaign achieved a 20% ROI, with a 45% decrease in cost per acquisition compared to previous campaigns.",
    },
    {
      id: 8,
      title: "Hot Club of Patan",
      category: "Artist Management",
      image: "/HCOP.jpg?height=600&width=800&text=Urban+Styles",
      tags: ["Collaboration", "Representation", "Celebrities"],
      description:
        "Created and managed a multi-channel digital advertising campaign for Urban Styles, a fashion retailer targeting young urban professionals.",
      results:
        "The campaign achieved a 320% ROI, with a 45% decrease in cost per acquisition compared to previous campaigns.",
    },
    {
      id: 9,
      title: "Mid Valley International College",
      category: "Education",
      image: "/valley.webp?height=600&width=800&text=Urban+Styles",
      tags: ["BBA", "BHM", "BIT"],
      description:
        "Mid-Valley International College (MVIC) is a private institution in Kathmandu, Nepal, established in 2011. Affiliated with HELP University, Malaysia, MVIC offers internationally recognized undergraduate programs approved by Nepal’s Ministry of Education.",
      results:
        "MVIC equips students with global career opportunities, blending academic excellence with industry exposure and international pathways.",
    },
    {
      id: 10,
      title: "Manu Chao Ultra Acoustico",
      category: "Events",
      image: "/manu.jpg?height=600&width=800&text=Urban+Styles",
      tags: ["Concert", "Event Management"],
      description:
        "Manu Chao's Ultra Acústico tour made a memorable stop in Kathmandu on March 16, 2025, at Calm Restaurant & Bar. The intimate performance featured Chao's signature acoustic renditions, captivating the audience with his soulful music. The opening act, Joint Family Internationale, set the stage for an unforgettable evening.",
      results:
        "The Kathmandu concert was a sold-out success, showcasing Manu Chao's acoustic brilliance and the vibrant energy of Joint Family Internationale.",
    },
    {
      id: 11,
      title: "Privé",
      category: "Business Development",
      image: "/prive.webp?height=600&width=800&text=Urban+Styles",
      tags: ["Club", "Soaltee Hotel", "Lounge"],
      description:
        "Privé Nepal, located within The Soaltee Kathmandu, is a premier nightclub offering an electrifying atmosphere with international DJs, themed events, and signature cocktails. Operating daily from 5 PM to 4 AM.",
      results:
        "Privé Nepal continues to be a vibrant nightlife destination in Kathmandu, hosting dynamic events and attracting both locals and tourists.",
    },
    {
      id: 12,
      title: "Bipul Chettri",
      category: "Events",
      image: "/bipul.jpg?height=600&width=800&text=Urban+Styles",
      tags: ["Concert", "Event Management"],
      description:
        "Bipul Chettri is an Indian singer-songwriter from Kalimpong, India, known for blending Nepali folk with contemporary elements. His debut album Sketches of Darjeeling (2014) gained widespread acclaim. Subsequent works include Maya (2016), Samaya (2021), and singles like Salala and Bahra Mahina (2024). He was nominated as a voting member of the Grammy Awards.",
      results:
        "Bipul Chettri's music resonates globally, blending Himalayan folk with modern sounds, earning him international recognition and Grammy membership.",
    },
    {
      id: 13,
      title: "Yalamul Garden ",
      category: "Hospitality",
      image: "/yalamul.jpg?height=600&width=800&text=Urban+Styles",
      tags: ["Patan", "Hotel"],
      description:
        "Yalamul Garden is a boutique hotel in Patan, Nepal, located just 2 minutes from Patan Durbar Square. It offers 11 rooms with garden views, a rooftop terrace, and a cozy garden restaurant/bar. Guests can enjoy live Gypsy jazz every Friday, yoga classes, and a variety of cuisines including Indian, Nepalese, and Asian dishes.",
      results:
        "Yalamul Garden offers a serene stay near Patan Durbar Square, combining comfort, culture, and cuisine in a tranquil setting.",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
                        <Badge
                          key={index}
                          variant="outline"
                          className="bg-primary/10"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                {/* Hiding default close button using inline style */}
                <div className="absolute top-4 right-4">
                  <button aria-label="Close" className="hidden" />
                </div>
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    {project.title}
                  </DialogTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    {project.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-primary/10"
                      >
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
  );
}
