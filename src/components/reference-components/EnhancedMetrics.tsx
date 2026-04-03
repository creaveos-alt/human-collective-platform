"use client";

import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

/**
 * ENHANCED IMPACT METRICS WALL
 * 
 * Creative Enhancements:
 * 1. "Resonance Field" - Aurora threads connecting metrics (like constellation)
 * 2. Living Count-Up Animation - Numbers breathe to life from 0
 * 3. Parallax Aurora Background - Depth through multi-layer motion
 * 4. Hover Particle Bloom - Light particles emanate on interaction
 * 5. Rhythmic Pulse - Each metric pulses at its own frequency (musical chord)
 * 6. Mobile: Vertical "Staff Lines" connecting metrics
 */

// Count-up animation hook
function useCountUp(end: number, duration: number = 1800, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease-out expo
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(end * easeOutExpo));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
}

// Individual metric tile component
function MetricTile({ metric, index, isInView }: any) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Extract numeric value for count-up
  const numericValue = parseInt(metric.number.replace(/[^0-9]/g, ''));
  const suffix = metric.number.replace(/[0-9]/g, '');
  const count = useCountUp(numericValue, 1800, isInView);

  // Unique pulse frequency for each metric (musical chord concept)
  const pulseDuration = 4 + (index * 0.5); // 4s, 4.5s, 5s, 5.5s, 6s

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Background glow - intensifies on hover */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.15 : 0.05,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/20 to-[#65D6C8]/20 rounded-xl blur-2xl"
      />

      {/* Particle bloom effect on hover */}
      {isHovered && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0, 
                scale: 0,
                x: 0,
                y: 0
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: Math.cos((i / 8) * Math.PI * 2) * 60,
                y: Math.sin((i / 8) * Math.PI * 2) * 60,
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeOut"
              }}
              className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#65D6C8] rounded-full blur-sm pointer-events-none"
            />
          ))}
        </>
      )}

      {/* Main content card */}
      <div className="relative p-8 rounded-xl border border-[#65D6C8]/10 bg-gradient-to-br from-[#040619]/80 to-[#0a0a2e]/40 backdrop-blur-sm">
        {/* Number - Count-up + Breathing pulse */}
        <div className="mb-4">
          <motion.div
            animate={{
              opacity: [0.85, 1, 0.85],
            }}
            transition={{
              duration: pulseDuration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-6xl md:text-7xl font-semibold bg-gradient-to-r from-[#65D6C8] via-[#7A6FF0] to-[#A8F0E4] bg-clip-text text-transparent relative"
          >
            {isInView ? count.toLocaleString() : 0}{suffix}
            
            {/* Aurora line travels across on hover */}
            {isHovered && (
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "200%", opacity: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-[#FDFDFB]/30 to-transparent"
              />
            )}
          </motion.div>
        </div>

        {/* Label */}
        <h3 className="text-[#FDFDFB] text-lg uppercase tracking-wide mb-3">
          {metric.label}
        </h3>

        {/* Description */}
        <p className="text-[#FDFDFB]/60 text-sm leading-relaxed">
          {metric.description}
        </p>

        {/* Corner accent - subtle detail */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#65D6C8]/5 to-transparent rounded-tr-xl" />
      </div>
    </motion.div>
  );
}

// Main Enhanced Metrics Section
export function EnhancedImpactMetricsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(metricsRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Parallax aurora layers
  const auroraY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const auroraY2 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const metrics = [
    {
      number: "20K+",
      label: "Hours with AI Models",
      description:
        "Fellows and Members in dialogue with intelligent systems — learning and shaping the future together.",
    },
    {
      number: "5K+",
      label: "Community Members",
      description:
        "A collective spanning continents — united by curiosity and care.",
    },
    {
      number: "28",
      label: "Global Chapters",
      description:
        "Local roots, global reach — adaptive philosophy in action.",
    },
    {
      number: "300",
      label: "Workshops Hosted",
      description:
        "Grassroots AI literacy and systems design in circles, not hierarchies.",
    },
    {
      number: "1M",
      label: "Lives Touched",
      description:
        "Every story told adds to the continuum.",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1022] via-[#0E1B4C] to-[#0B1022]" />

      {/* Parallax Aurora Layers - Multi-depth */}
      <motion.div
        style={{ y: auroraY1 }}
        animate={{
          x: ["-20%", "20%", "-20%"],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-r from-transparent via-[#7A6FF0]/10 to-transparent blur-3xl"
      />
      
      <motion.div
        style={{ y: auroraY2 }}
        animate={{
          x: ["20%", "-20%", "20%"],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-r from-transparent via-[#65D6C8]/10 to-transparent blur-3xl"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#7CE7E4] text-sm uppercase tracking-[0.08em] mb-4"
          >
            Every act of learning is a vote of dignity, a moment of
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl text-[#EAF0FF] leading-tight"
          >
            light — reverence for the human continuum.
          </motion.h2>
        </motion.div>

        {/* Top Divider with Glow */}
        <div className="relative w-full h-px mb-16">
          <div className="absolute inset-0 bg-[#00FFC2]/10" />
          <div className="absolute inset-0 h-1 bg-[#00FFC2]/10 blur-sm" />
          
          {/* Traveling shimmer */}
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 2,
            }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-[#65D6C8]/40 to-transparent"
          />
        </div>

        {/* Metrics Grid with Resonance Field */}
        <div ref={metricsRef} className="relative">
          {/* Resonance Field - Aurora Threads (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 h-px">
            <motion.div
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scaleX: [0.98, 1, 0.98],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="h-full bg-gradient-to-r from-transparent via-[#7A6FF0]/30 to-transparent"
            />
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {metrics.map((metric, i) => (
              <MetricTile 
                key={`metric-${i}`} 
                metric={metric} 
                index={i}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Mobile: Vertical Staff Lines */}
          <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#65D6C8]/20 to-transparent" />
        </div>

        {/* Bottom Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 space-y-3"
        >
          <p className="text-[#7F8FB2] text-sm max-w-4xl mx-auto leading-relaxed">
            These numbers represent real people — researchers, students, organizers,
            makers — each contributing their part to building a more just, intelligent
            future. The collective continues to grow, both in depth and scale.
          </p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#65D6C8]/50 text-xs italic"
          >
            "Each gesture, a spark in the continuum."
          </motion.p>
        </motion.div>
      </div>

      {/* Ambient background glow - Larger breathing sphere */}
      <motion.div
        animate={{
          opacity: [0.03, 0.08, 0.03],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-[#7A6FF0]/20 via-[#65D6C8]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />
    </motion.section>
  );
}
