"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Users, Zap } from "lucide-react";

// Custom hook for animated counter
function useAnimatedCounter(end: number, duration = 5000, delay = 0) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const startAnimation = () => {
    if (hasStarted) return;
    setHasStarted(true);

    setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    }, delay);
  };

  return { count, startAnimation };
}

export default function AnimatedStats() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Check if stats section is in view
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  // Animated counters
  const projectsCounter = useAnimatedCounter(40, 2500, 0);
  const clientsCounter = useAnimatedCounter(20, 2000, 300);
  const servicesCounter = useAnimatedCounter(10, 1500, 600);

  useEffect(() => {
    if (isStatsInView) {
      projectsCounter.startAnimation();
      clientsCounter.startAnimation();
      servicesCounter.startAnimation();
    }
  }, [isStatsInView]);

  const stats = [
    {
      number: projectsCounter.count,
      target: 40,
      label: "Projects",
      icon: Target,
      color: "from-blue-500 to-purple-600",
    },
    {
      number: clientsCounter.count,
      target: 20,
      label: "Clients",
      icon: Users,
      color: "from-purple-500 to-pink-600",
    },
    {
      number: servicesCounter.count,
      target: 10,
      label: "Services",
      icon: Zap,
      color: "from-pink-500 to-red-600",
    },
  ];

  return (
    <div
      className="w-full max-w-4xl mx-auto p-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Premium animated stats */}
      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center relative group"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div>
              {" "}
              {/* Animated Number */}
              <motion.div
                className="text-xl font-bold text-gray-800 mb-2"
                animate={{
                  scale: isStatsInView ? [1, 1.1, 1] : 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  repeat: isStatsInView ? 1 : 0,
                }}
              >
                {stat.number}
                {stat.number === stat.target ? "+" : ""}
              </motion.div>
              {/* Label */}
              <div className="text-lg text-gray-600 font-medium mb-4">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
