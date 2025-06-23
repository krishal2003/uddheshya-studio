"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

export default function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToNextSection = () => {
    if (scrollRef.current) {
      window.scrollTo({
        top: scrollRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.section
      ref={containerRef}
      style={{ y, opacity }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-tertiary/5"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 animate-pulse-slow"></div>
          <div
            className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-tertiary/10 via-transparent to-primary/10 animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Interactive mouse follower */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full filter blur-3xl"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
      </div>

      {/* Enhanced geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="geometric-shape shape-1 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/10 top-1/4 left-1/4"
          whileHover={{ scale: 1.2, rotate: 45 }}
        />
        <motion.div
          className="geometric-shape shape-2 w-24 h-24 bg-gradient-to-br from-secondary/20 to-tertiary/10 top-1/3 right-1/4"
          whileHover={{ scale: 1.3, rotate: -45 }}
        />
        <motion.div
          className="geometric-shape shape-3 w-40 h-40 bg-gradient-to-br from-tertiary/15 to-primary/10 bottom-1/4 left-1/3"
          whileHover={{ scale: 1.1, rotate: 90 }}
        />
        <motion.div
          className="geometric-shape shape-4 w-28 h-28 bg-gradient-to-br from-primary/25 to-tertiary/15 bottom-1/3 right-1/3"
          whileHover={{ scale: 1.4, rotate: -90 }}
        />
      </div>

      {/* Premium floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-3 h-3 text-primary/40" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <motion.span
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-medium mb-4 border border-primary/20"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(39, 41, 92, 0.15)",
                }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Welcome to UDDHESHYA STUDIO
              </motion.span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span
                className="text-gradient-hover block"
                whileHover={{ scale: 1.02 }}
              >
                Redefining
              </motion.span>
              <motion.span
                className="text-secondary block"
                whileHover={{ scale: 1.02 }}
              >
                Marketing
              </motion.span>
              <motion.span
                className="text-tertiary block"
                whileHover={{ scale: 1.02 }}
              >
                for the
              </motion.span>
              <motion.span
                className="text-primary block"
                whileHover={{ scale: 1.02 }}
              >
                Digital Age
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-4 mb-8"
            >
              <motion.div
                className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 1, delay: 1 }}
              />
              <span className="text-tertiary font-medium">
                Innovation • Creativity • Results
              </span>
            </motion.div>

            {/* Premium stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 mb-8"
            >
              {[
                { number: "500+", label: "Projects" },
                { number: "50+", label: "Clients" },
                { number: "8+", label: "Years" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm text-tertiary">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Right side - Premium animated graphic */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] lg:h-[600px]">
              {/* Premium central animation */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Enhanced gradient rings */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-tertiary rounded-full opacity-20"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="absolute inset-4 bg-gradient-to-tr from-secondary via-tertiary to-primary rounded-full opacity-30"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 25,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                  <motion.div
                    className="absolute inset-8 bg-gradient-to-bl from-tertiary via-primary to-secondary rounded-full opacity-40"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />

                  {/* Premium center logo */}
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <img src="image.png" alt="" />
                  </div> */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden"
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 25px 50px rgba(39, 41, 92, 0.3)",
                      }}
                      animate={{
                        boxShadow: [
                          "0 10px 30px rgba(39, 41, 92, 0.2)",
                          "0 20px 40px rgba(39, 41, 92, 0.3)",
                          "0 10px 30px rgba(39, 41, 92, 0.2)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">
                          US
                        </span>
                      </div>
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 3,
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced orbiting elements */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-lg shadow-lg"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.5, rotate: 180 }}
              />

              <motion.div
                className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-secondary/30 to-tertiary/20 rounded-full shadow-lg"
                animate={{
                  rotate: [360, 0],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                whileHover={{ scale: 1.6, rotate: -180 }}
              />

              <motion.div
                className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-tertiary/25 to-primary/15 rounded-xl shadow-lg"
                animate={{
                  rotate: [0, -360],
                  x: [0, 20, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                }}
                whileHover={{ scale: 1.4, rotate: 90 }}
              />

              {/* Premium connecting lines with animation */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 400"
              >
                <motion.path
                  d="M100,100 Q200,50 300,100 T500,100"
                  stroke="url(#gradient1)"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <motion.path
                  d="M100,300 Q200,250 300,300 T500,300"
                  stroke="url(#gradient2)"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 2, delay: 1.5 }}
                />
                <defs>
                  <linearGradient
                    id="gradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#27295C" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#45454C" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#818291" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient
                    id="gradient2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#45454C" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#818291" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#27295C" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Premium scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      ></motion.div>

      <div ref={scrollRef}></div>
    </motion.section>
  );
}
