"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import auroraCrystal from "figma:asset/aaf705a4da4e268e88fcd37c884f07d61d072e97.png";

export function Protection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 180, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const artifactOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [1, 1, 0.5, 0, 0]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0, 0, 0.5, 1, 1]);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-[#0a0a2e] via-[#040619] to-[#1a1a4d] py-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl text-[#FDFDFB] mb-8">
              <span className="text-[#FDFDFB]">The</span>
              <br />
              <span className="bg-gradient-to-r from-[#7A6FF0] to-[#65D6C8] bg-clip-text text-transparent">
                Evolution
              </span>
            </h2>
            <p className="text-[#FDFDFB]/70 text-xl mb-8 leading-relaxed">
              From ancient stone to digital light — intelligence transforms but never abandons 
              its origin. The handaxe becomes the network. The tool becomes the system. 
              The individual becomes the collective.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#7A6FF0] to-[#65D6C8] rounded-full flex items-center justify-center">
                  <span className="text-[#FDFDFB] text-xl">→</span>
                </div>
                <div>
                  <h3 className="text-[#FDFDFB] text-xl mb-2">Continuum</h3>
                  <p className="text-[#FDFDFB]/60">A million years of refinement encoded in silicon</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#65D6C8] to-[#A8F0E4] rounded-full flex items-center justify-center">
                  <span className="text-[#040619] text-xl">+</span>
                </div>
                <div>
                  <h3 className="text-[#FDFDFB] text-xl mb-2">Synthesis</h3>
                  <p className="text-[#FDFDFB]/60">Human + AI: Not replacement, but augmentation</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#A8F0E4] to-[#7A6FF0] rounded-full flex items-center justify-center">
                  <span className="text-[#FDFDFB] text-xl">∞</span>
                </div>
                <div>
                  <h3 className="text-[#FDFDFB] text-xl mb-2">Collective</h3>
                  <p className="text-[#FDFDFB]/60">Intelligence that scales across minds, both human and artificial</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3D Transition showcase: Artifact → Grid */}
          <div className="relative flex justify-center min-h-[600px]">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Acheulean Artifact */}
              <motion.div
                style={{ rotateY, scale, opacity: artifactOpacity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    rotateX: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={auroraCrystal}
                    alt="Acheulean Origin"
                    className="w-[22rem] h-[22rem] object-contain"
                    style={{
                      filter: "contrast(1.2) brightness(1.3) saturate(1.1) drop-shadow(0 20px 40px rgba(122,111,240,0.6)) drop-shadow(0 8px 20px rgba(101,214,200,0.4))",
                    }}
                  />
                  
                  {/* Aurora glow for transformation */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-[#7A6FF0]/30 via-[#65D6C8]/30 to-[#A8F0E4]/30 rounded-full blur-2xl"
                    style={{ transform: "translateZ(-8px)" }}
                  />
                </motion.div>
              </motion.div>
              
              {/* "+" Grid Geometry (The Collective symbol) */}
              <motion.div
                style={{ scale, opacity: gridOpacity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="relative w-80 h-80"
                >
                  {/* Central + symbol made of aurora gradients */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Vertical bar */}
                    <motion.div
                      className="absolute w-4 h-64 bg-gradient-to-b from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] rounded-full"
                      animate={{
                        opacity: [0.6, 1, 0.6],
                        boxShadow: [
                          "0 0 20px rgba(122,111,240,0.4)",
                          "0 0 40px rgba(101,214,200,0.6)",
                          "0 0 20px rgba(122,111,240,0.4)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {/* Horizontal bar */}
                    <motion.div
                      className="absolute w-64 h-4 bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] rounded-full"
                      animate={{
                        opacity: [0.6, 1, 0.6],
                        boxShadow: [
                          "0 0 20px rgba(122,111,240,0.4)",
                          "0 0 40px rgba(101,214,200,0.6)",
                          "0 0 20px rgba(122,111,240,0.4)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                  </div>
                  
                  {/* Orbiting grid points */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 rounded-full"
                      style={{
                        background: i % 2 === 0 ? "#7A6FF0" : "#65D6C8",
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-150px)`
                      }}
                      animate={{
                        opacity: [0.4, 1, 0.4],
                        scale: [1, 1.5, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>

              {/* Floating concept indicators */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-16 -left-16"
              >
                <div className="bg-[#7A6FF0]/20 backdrop-blur-sm rounded-full p-4 border border-[#7A6FF0]/30">
                  <span className="text-2xl">⚡</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-16 -right-16"
              >
                <div className="bg-[#65D6C8]/20 backdrop-blur-sm rounded-full p-4 border border-[#65D6C8]/30">
                  <span className="text-2xl">✨</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
              >
                <div className="bg-[#A8F0E4]/20 backdrop-blur-sm rounded-full p-4 border border-[#A8F0E4]/30">
                  <span className="text-2xl">🌌</span>
                </div>
              </motion.div>
            </div>
            
            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center"
            >
              <p className="text-[#FDFDFB]/60 text-sm mb-2">Scroll to witness the transformation</p>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-[#65D6C8]/60 text-2xl"
              >
                ↓
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}