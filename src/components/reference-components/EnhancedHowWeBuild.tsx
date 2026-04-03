"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { X, ArrowRight, Users, BookOpen, Box, Zap, Heart } from "lucide-react";

/**
 * ENHANCED "HOW WE BUILD TOGETHER" SECTION - TWO CREATIVE DIRECTIONS
 * 
 * Narrative Bridge: Events → How We Build → Builders
 * "The connective tissue between collective gatherings and individual stories"
 * 
 * Direction 1: Connected Value Nodes (Structured)
 * Direction 2: Aurora Field / Interactive Layer (Creative Liberty)
 */

// Values/Principles data
const principlesData = [
  {
    title: "Collaboration",
    fullTitle: "Collaborate Together",
    description: "We bring together diverse thinkers, builders, and learners to share knowledge and ideas through dialogue, not monologue.",
    cta: "Join a Chapter",
    ctaStyle: "ghost",
    action: "chapters",
    color: "#7A6FF0",
    icon: "collaboration"
  },
  {
    title: "Learn Together",
    fullTitle: "Learn Together",
    description: "Our programs provide foundational AI literacy and practical skills for individuals and communities navigating intelligent systems.",
    cta: "Access AI Lunchbox",
    ctaStyle: "primary",
    action: "lunchbox",
    color: "#65D6C8",
    icon: "learn"
  },
  {
    title: "Build Systems",
    fullTitle: "Build Systems",
    description: "We support the development of AI-powered tools and systems that address real-world challenges with care and proportion.",
    cta: "Explore Projects",
    ctaStyle: "ghost",
    action: "projects",
    color: "#A8F0E4",
    icon: "build"
  },
  {
    title: "Innovate Boldly",
    fullTitle: "Innovate Boldly",
    description: "Through research and experimentation, we push the boundaries of what's possible with AI and collective intelligence.",
    cta: "See Fellow Projects",
    ctaStyle: "ghost",
    action: "builders",
    color: "#7A6FF0",
    icon: "innovate"
  },
  {
    title: "Impact Lives",
    fullTitle: "Impact Lives",
    description: "Our work aims to create a more just, intelligent future for all, ensuring that no one is left behind in the age of AI.",
    cta: "Read Impact Stories",
    ctaStyle: "primary",
    action: "impact",
    color: "#65D6C8",
    icon: "impact"
  },
];

// Custom Minimal Icons (Aurora-themed)
function CollaborationIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className={className}>
      {/* Two interlocking circles / orbit lines */}
      <motion.g
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* First circle */}
        <circle
          cx="22"
          cy="30"
          r="14"
          stroke="url(#collabGradient1)"
          strokeWidth="2"
          fill="none"
        />
        {/* Second circle (interlocking) */}
        <circle
          cx="38"
          cy="30"
          r="14"
          stroke="url(#collabGradient2)"
          strokeWidth="2"
          fill="none"
        />
        {/* Center connection point */}
        <circle cx="30" cy="30" r="3" fill="#65D6C8" opacity="0.8" />
      </motion.g>
      <defs>
        <linearGradient id="collabGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7A6FF0" />
          <stop offset="100%" stopColor="#65D6C8" />
        </linearGradient>
        <linearGradient id="collabGradient2" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#65D6C8" />
          <stop offset="100%" stopColor="#A8F0E4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function LearnTogetherIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className={className}>
      {/* Connected diamond motif (shared illumination) */}
      <motion.g
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Central diamond */}
        <path
          d="M30 10 L45 30 L30 50 L15 30 Z"
          stroke="url(#learnGradient)"
          strokeWidth="2"
          fill="none"
        />
        {/* Inner connecting lines */}
        <line x1="30" y1="10" x2="30" y2="50" stroke="#65D6C8" strokeWidth="1" opacity="0.4" />
        <line x1="15" y1="30" x2="45" y2="30" stroke="#65D6C8" strokeWidth="1" opacity="0.4" />
        {/* Light points at vertices */}
        <circle cx="30" cy="10" r="2" fill="#7A6FF0" />
        <circle cx="45" cy="30" r="2" fill="#65D6C8" />
        <circle cx="30" cy="50" r="2" fill="#A8F0E4" />
        <circle cx="15" cy="30" r="2" fill="#65D6C8" />
        {/* Center glow */}
        <circle cx="30" cy="30" r="4" fill="url(#learnGradientRadial)" opacity="0.6" />
      </motion.g>
      <defs>
        <linearGradient id="learnGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7A6FF0" />
          <stop offset="50%" stopColor="#65D6C8" />
          <stop offset="100%" stopColor="#A8F0E4" />
        </linearGradient>
        <radialGradient id="learnGradientRadial">
          <stop offset="0%" stopColor="#65D6C8" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function BuildSystemsIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className={className}>
      {/* Nested square and circle (Vitruvian symmetry) */}
      <motion.g
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Outer square */}
        <rect
          x="15"
          y="15"
          width="30"
          height="30"
          stroke="url(#buildGradient1)"
          strokeWidth="2"
          fill="none"
        />
        {/* Inner circle (Vitruvian) */}
        <circle
          cx="30"
          cy="30"
          r="12"
          stroke="url(#buildGradient2)"
          strokeWidth="2"
          fill="none"
        />
        {/* Center point */}
        <circle cx="30" cy="30" r="3" fill="#A8F0E4" opacity="0.8" />
        {/* Corner accent dots */}
        <circle cx="15" cy="15" r="1.5" fill="#7A6FF0" opacity="0.6" />
        <circle cx="45" cy="15" r="1.5" fill="#65D6C8" opacity="0.6" />
        <circle cx="45" cy="45" r="1.5" fill="#A8F0E4" opacity="0.6" />
        <circle cx="15" cy="45" r="1.5" fill="#65D6C8" opacity="0.6" />
      </motion.g>
      <defs>
        <linearGradient id="buildGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A8F0E4" />
          <stop offset="100%" stopColor="#7A6FF0" />
        </linearGradient>
        <linearGradient id="buildGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#65D6C8" />
          <stop offset="100%" stopColor="#A8F0E4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function InnovateBoldlyIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className={className}>
      {/* Spark / flare emerging from circle */}
      <motion.g
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Base circle */}
        <circle
          cx="30"
          cy="35"
          r="10"
          stroke="url(#innovateGradient)"
          strokeWidth="2"
          fill="none"
        />
        {/* Spark rays */}
        <motion.line
          x1="30"
          y1="25"
          x2="30"
          y2="12"
          stroke="#7A6FF0"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ y1: [25, 22, 25], y2: [12, 8, 12] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.line
          x1="35"
          y1="28"
          x2="42"
          y2="18"
          stroke="#65D6C8"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={{ x2: [42, 44, 42], y2: [18, 15, 18] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.line
          x1="25"
          y1="28"
          x2="18"
          y2="18"
          stroke="#A8F0E4"
          strokeWidth="1.5"
          strokeLinecap="round"
          animate={{ x2: [18, 16, 18], y2: [18, 15, 18] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
        {/* Inner glow */}
        <circle cx="30" cy="35" r="4" fill="url(#innovateGradientRadial)" opacity="0.7" />
      </motion.g>
      <defs>
        <linearGradient id="innovateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7A6FF0" />
          <stop offset="100%" stopColor="#65D6C8" />
        </linearGradient>
        <radialGradient id="innovateGradientRadial">
          <stop offset="0%" stopColor="#7A6FF0" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function ImpactLivesIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className={className}>
      {/* Expanding wave lines (ripple effect) */}
      <motion.g>
        {/* Wave 1 (innermost) */}
        <motion.circle
          cx="30"
          cy="30"
          r="8"
          stroke="#65D6C8"
          strokeWidth="2"
          fill="none"
          animate={{ r: [8, 12, 8], opacity: [0.8, 0.3, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        />
        {/* Wave 2 */}
        <motion.circle
          cx="30"
          cy="30"
          r="14"
          stroke="#7A6FF0"
          strokeWidth="1.5"
          fill="none"
          animate={{ r: [14, 18, 14], opacity: [0.6, 0.2, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
        />
        {/* Wave 3 (outermost) */}
        <motion.circle
          cx="30"
          cy="30"
          r="20"
          stroke="#A8F0E4"
          strokeWidth="1"
          fill="none"
          animate={{ r: [20, 24, 20], opacity: [0.4, 0.1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
        />
        {/* Center point (origin) */}
        <circle cx="30" cy="30" r="3" fill="url(#impactGradient)" />
      </motion.g>
      <defs>
        <radialGradient id="impactGradient">
          <stop offset="0%" stopColor="#65D6C8" />
          <stop offset="100%" stopColor="#7A6FF0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// Icon component selector
function PrincipleIcon({ type, className }: { type: string; className?: string }) {
  const icons: any = {
    collaboration: CollaborationIcon,
    learn: LearnTogetherIcon,
    build: BuildSystemsIcon,
    innovate: InnovateBoldlyIcon,
    impact: ImpactLivesIcon,
  };
  const Icon = icons[type];
  return Icon ? <Icon className={className} /> : null;
}

// Simple modal for CTA actions (placeholder)
function ActionModal({ principle, isOpen, onClose }: any) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#040619]/95 backdrop-blur-xl"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-xl w-full mx-6 p-8 rounded-2xl border border-[#65D6C8]/30 bg-gradient-to-br from-[#111931]/95 to-[#0a0a2e]/95"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#65D6C8]/10 transition-colors"
        >
          <X className="w-5 h-5 text-[#FDFDFB]/70" />
        </button>

        <div 
          className="absolute inset-0 rounded-2xl blur-2xl opacity-20 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${principle.color}, transparent)` }}
        />

        <div className="relative space-y-4">
          <div className="flex items-center gap-4 mb-4">
            <PrincipleIcon type={principle.icon} />
            <h3 className="text-3xl text-[#FDFDFB]">{principle.fullTitle}</h3>
          </div>
          
          <p className="text-[#FDFDFB]/70 leading-relaxed">
            {principle.description}
          </p>

          <div className="pt-4">
            <p className="text-sm text-[#65D6C8] mb-3">This action would navigate to:</p>
            <div className="p-3 bg-[#65D6C8]/10 rounded-lg border border-[#65D6C8]/20">
              <p className="text-sm text-[#FDFDFB]/80">
                {principle.action === "chapters" && "→ Chapters section (Join a local community)"}
                {principle.action === "lunchbox" && "→ AI Lunchbox program (Start learning)"}
                {principle.action === "projects" && "→ Projects showcase (Explore systems)"}
                {principle.action === "builders" && "→ Builders gallery (Meet innovators)"}
                {principle.action === "impact" && "→ Impact reports (Read success stories)"}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ========================================
// DIRECTION 1: CONNECTED VALUE NODES
// ========================================

export function ConnectedNodesHowWeBuild() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedPrinciple, setSelectedPrinciple] = useState<any>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <>
      <motion.section
        ref={sectionRef}
        style={{ opacity }}
        className="relative py-32 md:py-40 overflow-hidden"
      >
        {/* Background - Deep navy to indigo gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090F1E] via-[#0E1B4C] to-[#090F1E]" />

        {/* Animated aurora thread lines (horizontal) */}
        <motion.div
          animate={{
            x: ["-30%", "30%", "-30%"],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#65D6C8]/30 to-transparent"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl text-[#EAF0FF] font-semibold mb-6 leading-[120%]">
              How We Build Together
            </h2>
            <p className="text-lg text-[#BBD0FF] max-w-3xl mx-auto leading-[150%]">
              The Collective thrives on shared principles that guide our work, learning, and growth.
            </p>
          </motion.div>

          {/* Value nodes with connecting threads */}
          <div className="relative">
            {/* Horizontal connector base line */}
            <div className="hidden lg:block absolute top-[80px] left-0 right-0 h-px">
              <svg className="w-full h-full" preserveAspectRatio="none">
                <motion.line
                  x1="10%"
                  y1="0"
                  x2="90%"
                  y2="0"
                  stroke="url(#connectorGradient)"
                  strokeWidth="1"
                  opacity="0.2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
                <defs>
                  <linearGradient id="connectorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7A6FF0" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#65D6C8" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#A8F0E4" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Light flow animation (every 8s) */}
              <motion.div
                animate={{
                  x: ["-10%", "110%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 4,
                }}
                className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-transparent via-[#65D6C8]/60 to-transparent"
              />
            </div>

            {/* Grid of principle nodes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {principlesData.map((principle, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.15, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Node container */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="relative p-8 text-center space-y-6"
                  >
                    {/* Glow on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 rounded-2xl blur-2xl pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 30%, ${principle.color}30, transparent)`
                      }}
                    />

                    {/* Icon */}
                    <div className="relative z-10 flex justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <PrincipleIcon type={principle.icon} />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="relative z-10 text-lg text-[#EAF0FF] font-medium">
                      {principle.title}
                    </h3>

                    {/* Description */}
                    <p className="relative z-10 text-sm text-[#9BB2E1] leading-relaxed max-w-[260px] mx-auto min-h-[100px]">
                      {principle.description}
                    </p>

                    {/* CTA Button */}
                    <motion.button
                      onClick={() => setSelectedPrinciple(principle)}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                      className={`relative z-10 w-full py-2 px-4 rounded-lg text-sm font-medium transition-all duration-400 flex items-center justify-center gap-2 group/btn ${
                        principle.ctaStyle === "primary"
                          ? "bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] hover:shadow-[0_0_25px_rgba(101,214,200,0.4)]"
                          : "border border-[#FDFDFB]/20 text-[#FDFDFB] hover:bg-[#FDFDFB]/5 hover:border-[#65D6C8]/40"
                      }`}
                    >
                      {principle.cta}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Optional global CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium hover:shadow-[0_0_40px_rgba(101,214,200,0.5)] transition-all duration-400 flex items-center gap-3 mx-auto">
              Explore How We Build
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Modal */}
      <ActionModal 
        principle={selectedPrinciple} 
        isOpen={!!selectedPrinciple} 
        onClose={() => setSelectedPrinciple(null)} 
      />
    </>
  );
}

// ========================================
// DIRECTION 2: AURORA FIELD (CREATIVE LIBERTY)
// ========================================

export function AuroraFieldHowWeBuild() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredPrinciple, setHoveredPrinciple] = useState<string | null>(null);
  const [selectedPrinciple, setSelectedPrinciple] = useState<any>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <>
      <motion.section
        ref={sectionRef}
        style={{ opacity }}
        className="relative py-32 md:py-40 overflow-hidden"
      >
        {/* Deep aurora gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e] via-[#0E1B4C] to-[#090F1E]" />

        {/* Ambient aurora flux layers */}
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
            x: ["-20%", "20%", "-20%"],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-[#7A6FF0]/20 via-transparent to-[#65D6C8]/10 blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.03, 0.1, 0.03],
            x: ["20%", "-20%", "20%"],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-tl from-[#65D6C8]/20 via-transparent to-[#A8F0E4]/10 blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl text-[#EAF0FF] font-semibold mb-6">
              How We Build Together
            </h2>
            <p className="text-lg text-[#BBD0FF] max-w-3xl mx-auto">
              When light meets light, structure is born — the continuum builds itself.
            </p>
          </motion.div>

          {/* Interactive light web */}
          <div className="relative min-h-[500px] flex items-center justify-center">
            {/* Connecting web lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {principlesData.map((principle, i) => {
                const nextPrinciple = principlesData[(i + 1) % principlesData.length];
                const x1 = 20 + i * 15;
                const x2 = 20 + ((i + 1) % principlesData.length) * 15;
                
                return (
                  <motion.line
                    key={`line-${i}`}
                    x1={`${x1}%`}
                    y1="50%"
                    x2={`${x2}%`}
                    y2="50%"
                    stroke="url(#webGradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    animate={{
                      opacity: hoveredPrinciple === principle.title || hoveredPrinciple === nextPrinciple.title ? 0.6 : 0.3
                    }}
                  />
                );
              })}
              <defs>
                <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7A6FF0" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#65D6C8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#A8F0E4" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Floating principle nodes */}
            <div className="relative w-full flex justify-between items-center px-0 md:px-8">
              {principlesData.map((principle, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredPrinciple(principle.title)}
                  onMouseLeave={() => setHoveredPrinciple(null)}
                  onClick={() => setSelectedPrinciple(principle)}
                  className="relative cursor-pointer group"
                  style={{ flex: '0 0 auto' }}
                >
                  {/* Node glow */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 4 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full blur-2xl"
                    style={{
                      background: principle.color,
                      width: '120px',
                      height: '120px',
                      marginLeft: '-60px',
                      marginTop: '-60px'
                    }}
                  />

                  {/* Node core with icon */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-16 h-16 rounded-full border-2 border-[#FDFDFB]/60 bg-[#111931]/80 backdrop-blur-sm flex items-center justify-center"
                    style={{
                      boxShadow: `0 0 20px ${principle.color}60`
                    }}
                  >
                    <div className="scale-50">
                      <PrincipleIcon type={principle.icon} />
                    </div>
                  </motion.div>

                  {/* Hover tooltip/card */}
                  {hoveredPrinciple === principle.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-24 left-1/2 -translate-x-1/2 w-64 p-6 rounded-xl bg-[#111931]/95 border border-[#65D6C8]/30 backdrop-blur-xl shadow-[0_0_40px_rgba(101,214,200,0.3)] pointer-events-none z-20"
                    >
                      <h4 className="text-[#EAF0FF] font-medium mb-2">{principle.title}</h4>
                      <p className="text-xs text-[#9BB2E1] mb-4 leading-relaxed">
                        {principle.description}
                      </p>
                      <div className="text-xs text-[#65D6C8]">
                        Click to {principle.cta.toLowerCase()} →
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Optional global CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium hover:shadow-[0_0_40px_rgba(101,214,200,0.5)] transition-all duration-400 flex items-center gap-3 mx-auto">
              Explore How We Build
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Modal */}
      <ActionModal 
        principle={selectedPrinciple} 
        isOpen={!!selectedPrinciple} 
        onClose={() => setSelectedPrinciple(null)} 
      />
    </>
  );
}
