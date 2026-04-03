"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import auroraCrystal from "figma:asset/aaf705a4da4e268e88fcd37c884f07d61d072e97.png";

export function ColorShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedColor, setSelectedColor] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const auroraVariants = [
    {
      name: "Aurora Borealis",
      gradient: "from-[#7A6FF0] to-[#65D6C8]",
      accent: "bg-[#7A6FF0]",
      description: "The cosmic dance of intelligence — violet meets aqua in infinite harmony",
      filter: "hue-rotate(0deg)"
    },
    {
      name: "Deep Cosmic",
      gradient: "from-[#040619] to-[#7A6FF0]",
      accent: "bg-[#040619]",
      description: "The void from which all thought emerges — night indigo awakens to consciousness",
      filter: "brightness(0.7) saturate(1.3)"
    },
    {
      name: "Radiant Aqua",
      gradient: "from-[#65D6C8] to-[#A8F0E4]",
      accent: "bg-[#65D6C8]",
      description: "Flowing clarity and reflected light — the aqua that bridges worlds",
      filter: "hue-rotate(20deg) saturate(1.2)"
    },
    {
      name: "Aurora Mist",
      gradient: "from-[#A8F0E4] to-[#FDFDFB]",
      accent: "bg-[#A8F0E4]",
      description: "Ethereal luminescence in morning light — where insight becomes tangible",
      filter: "brightness(1.2) saturate(0.9)"
    },
    {
      name: "Violet Spectrum",
      gradient: "from-[#7A6FF0] via-[#9B8FF9] to-[#7A6FF0]",
      accent: "bg-[#9B8FF9]",
      description: "The frequency of collective thought — purple waves of unified intelligence",
      filter: "hue-rotate(-20deg) saturate(1.4)"
    },
    {
      name: "Full Aurora",
      gradient: "from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4]",
      accent: "bg-[#65D6C8]",
      description: "Complete spectrum of possibility — all colors of intelligence unified",
      filter: "saturate(1.1) brightness(1.1)"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#040619] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl text-[#FDFDFB] mb-6">
            <span className="text-[#FDFDFB]">Illuminated by</span>
            <br />
            <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              Aurora Light
            </span>
          </h2>
          <p className="text-[#FDFDFB]/70 text-xl max-w-3xl mx-auto">
            Each aurora gradient represents a dimension of collective intelligence — flowing, breathing, evolving
          </p>
        </motion.div>

        <div className="relative">
          {/* Main artifact display with aurora variations */}
          <motion.div
            style={{ y }}
            className="flex justify-center mb-16"
          >
            <div className="relative">
              {/* Background aurora gradient that changes with selected variant */}
              <motion.div
                key={selectedColor}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className={`absolute inset-0 bg-gradient-to-br ${auroraVariants[selectedColor].gradient} rounded-full blur-3xl opacity-30 scale-150`}
              />
              
              <motion.div
                key={selectedColor}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <motion.div
                  animate={{ 
                    rotateY: [0, 360],
                    rotateX: [0, 3, -3, 0],
                    y: [0, -12, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                    rotateX: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={auroraCrystal}
                    alt={`${auroraVariants[selectedColor].name} - Collective Intelligence`}
                    className="w-[28rem] h-[28rem] object-contain transition-all duration-500"
                    style={{
                      filter: `contrast(1.3) brightness(1.3) saturate(1.2) drop-shadow(0 25px 50px rgba(122,111,240,0.5)) drop-shadow(0 10px 25px rgba(101,214,200,0.4)) ${auroraVariants[selectedColor].filter}`,
                    }}
                  />
                  
                  {/* Dynamic aurora-based lighting */}
                  <motion.div 
                    key={selectedColor}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className={`absolute inset-0 bg-gradient-to-br ${auroraVariants[selectedColor].gradient} rounded-full blur-3xl opacity-40`}
                    style={{ transform: "translateZ(-10px)" }}
                  />
                  
                  {/* Animated aurora rim lighting */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 360] 
                    }}
                    transition={{ 
                      duration: 15, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="absolute inset-0 rounded-full opacity-50"
                    style={{
                      background: `conic-gradient(from 0deg, transparent, #7A6FF0, #65D6C8, #A8F0E4, transparent)`,
                      filter: "blur(3px)",
                      transform: "translateZ(-5px)"
                    }}
                  />
                </motion.div>
              </motion.div>
              
              {/* Floating aurora indicator */}
              <motion.div
                key={selectedColor}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -top-8 left-1/2 transform -translate-x-1/2"
              >
                <div className={`w-6 h-6 ${auroraVariants[selectedColor].accent} rounded-full border-4 border-[#FDFDFB] shadow-lg`} />
              </motion.div>
            </div>
          </motion.div>

          {/* Aurora variant selector */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {auroraVariants.map((variant, index) => (
              <motion.button
                key={variant.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedColor(index)}
                className={`relative group ${
                  selectedColor === index ? 'ring-4 ring-[#FDFDFB]/50' : ''
                } rounded-full overflow-hidden transition-all duration-300`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${variant.gradient} rounded-full`} />
                <div className="absolute inset-0 bg-[#FDFDFB]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Aurora name tooltip */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-[#040619]/80 backdrop-blur-sm rounded-lg px-3 py-1 text-[#FDFDFB] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {variant.name}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Selected aurora details */}
          <motion.div
            key={selectedColor}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className={`text-3xl md:text-4xl mb-4 bg-gradient-to-r ${auroraVariants[selectedColor].gradient} bg-clip-text text-transparent`}>
              {auroraVariants[selectedColor].name}
            </h3>
            <p className="text-[#FDFDFB]/70 text-lg max-w-2xl mx-auto">
              {auroraVariants[selectedColor].description}
            </p>
          </motion.div>

          {/* Enhanced aurora particles */}
          <div className="absolute inset-0 pointer-events-none">
            {auroraVariants.map((variant, index) => (
              <motion.div
                key={`aurora-variant-${index}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                  x: [0, Math.sin(index * 2) * 60, 0],
                  y: [0, Math.cos(index * 2) * 60, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: index * 0.4,
                  ease: "easeInOut"
                }}
                className={`absolute w-3 h-3 bg-gradient-to-br ${variant.gradient} rounded-full blur-sm`}
                style={{
                  top: `${15 + (index % 4) * 20}%`,
                  left: `${5 + (index % 5) * 18}%`,
                }}
              />
            ))}
            
            {/* Additional flowing particles for current aurora */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`aurora-current-particle-${i}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0],
                  x: [0, Math.sin(i * 0.5) * 100, 0],
                  y: [0, Math.cos(i * 0.5) * 100, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
                className={`absolute w-1 h-1 bg-gradient-to-br ${auroraVariants[selectedColor].gradient} rounded-full blur-sm`}
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}