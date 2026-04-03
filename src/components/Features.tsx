"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import auroraCrystal from "figma:asset/aaf705a4da4e268e88fcd37c884f07d61d072e97.png";

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 100]);
  const x2 = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const philosophies = [
    {
      title: "Lineage",
      description: "From the first stone tool to neural networks — intelligence has always been about extending human capability",
      icon: "⚡",
      color: "from-[#7A6FF0] to-[#9B8FF9]"
    },
    {
      title: "Craft",
      description: "Like the Acheulean handaxe, refined over a million years — we build AI with intention, care, and purpose",
      icon: "✨",
      color: "from-[#65D6C8] to-[#A8F0E4]"
    },
    {
      title: "Light",
      description: "The aurora illuminates what was hidden — collective intelligence reveals new dimensions of understanding",
      icon: "🌌",
      color: "from-[#A8F0E4] to-[#7A6FF0]"
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
            <span className="bg-gradient-to-r from-[#7A6FF0] to-[#65D6C8] bg-clip-text text-transparent">
              The Three Pillars
            </span>
            <br />
            <span className="text-[#FDFDFB]">of Our Philosophy</span>
          </h2>
          <p className="text-[#FDFDFB]/70 text-xl max-w-3xl mx-auto">
            Every act of learning is a model of dignity. A testament of continuum between human and artificial intelligence.
          </p>
        </motion.div>

        {/* Main artifact showcase */}
        <div className="relative mb-32">
          <motion.div
            style={{ scale }}
            className="flex justify-center mb-16"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={auroraCrystal}
                  alt="Acheulean Artifact"
                  className="w-[28rem] h-[28rem] object-contain"
                  style={{
                    filter: "contrast(1.3) brightness(1.2) saturate(1.1) drop-shadow(0 20px 40px rgba(122,111,240,0.5)) drop-shadow(0 8px 20px rgba(101,214,200,0.4))",
                  }}
                />
                
                {/* Aurora lighting effect flowing across surface */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/30 via-transparent to-[#65D6C8]/30 rounded-full blur-2xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" }
                  }}
                  style={{ transform: "translateZ(-5px)" }}
                />
              </motion.div>
              
              {/* Animated contour lines that emerge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-1/4 -left-20 w-4 h-4 bg-[#7A6FF0] rounded-full"
              >
                <div className="absolute inset-0 bg-[#7A6FF0] rounded-full animate-ping" />
                <div className="absolute -left-32 -top-8 bg-[#040619]/80 backdrop-blur-sm rounded-lg p-3 border border-[#7A6FF0]/30 text-[#FDFDFB] text-sm whitespace-nowrap">
                  Stone → Symbol
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-1/2 -right-20 w-4 h-4 bg-[#65D6C8] rounded-full"
              >
                <div className="absolute inset-0 bg-[#65D6C8] rounded-full animate-ping" />
                <div className="absolute -right-32 -top-8 bg-[#040619]/80 backdrop-blur-sm rounded-lg p-3 border border-[#65D6C8]/30 text-[#FDFDFB] text-sm whitespace-nowrap">
                  Tool → System
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#A8F0E4] rounded-full"
              >
                <div className="absolute inset-0 bg-[#A8F0E4] rounded-full animate-ping" />
                <div className="absolute -left-16 -bottom-12 bg-[#040619]/80 backdrop-blur-sm rounded-lg p-3 border border-[#A8F0E4]/30 text-[#FDFDFB] text-sm whitespace-nowrap">
                  Hand → Mind
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Philosophy cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {philosophies.map((philosophy, index) => (
              <motion.div
                key={philosophy.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                style={{ x: index === 1 ? 0 : index === 0 ? x1 : x2 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${philosophy.color} rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300`} />
                <div className="relative bg-[#0a0a2e]/50 backdrop-blur-sm border border-[#7A6FF0]/10 rounded-2xl p-8 hover:border-[#65D6C8]/30 transition-colors duration-300">
                  <div className="text-4xl mb-4">{philosophy.icon}</div>
                  <h3 className="text-2xl text-[#FDFDFB] mb-4">{philosophy.title}</h3>
                  <p className="text-[#FDFDFB]/70 leading-relaxed">{philosophy.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}