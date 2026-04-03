"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { X, ArrowRight, ExternalLink, BookOpen } from "lucide-react";

/**
 * ENHANCED THREE PILLARS SECTION
 * 
 * "Light Becomes Architecture" — The Hero's aurora field crystallizes into three illuminated nodes
 * 
 * Design Philosophy:
 * - AI Lunchbox = Primary pillar (brightest, largest, breathing glow)
 * - Custom geometric icons echo Hero's crystal motif
 * - Each pillar has contextual CTA with modal interaction
 * - Visual hierarchy: Lunchbox → Micro-Entrepreneurship → Think Tank
 */

// Custom Geometric Icons (SVG components)
function LunchboxIcon({ className = "" }: { className?: string }) {
  return (
    <svg 
      width="80" 
      height="80" 
      viewBox="0 0 80 80" 
      fill="none" 
      className={className}
    >
      {/* Central diamond (from Hero) divided into bento compartments */}
      <motion.g
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Outer diamond frame */}
        <path
          d="M40 5 L70 40 L40 75 L10 40 Z"
          stroke="url(#lunchboxGradient1)"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Bento grid divisions - representing compartments of knowledge */}
        <line x1="40" y1="5" x2="40" y2="75" stroke="url(#lunchboxGradient2)" strokeWidth="1" opacity="0.6" />
        <line x1="10" y1="40" x2="70" y2="40" stroke="url(#lunchboxGradient2)" strokeWidth="1" opacity="0.6" />
        
        {/* Light particles radiating upward */}
        <motion.circle
          cx="40"
          cy="20"
          r="2"
          fill="#65D6C8"
          animate={{
            cy: [20, 10, 5],
            opacity: [1, 0.5, 0],
            scale: [1, 0.8, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
        <motion.circle
          cx="30"
          cy="25"
          r="1.5"
          fill="#7A6FF0"
          animate={{
            cy: [25, 15, 8],
            opacity: [1, 0.5, 0],
            scale: [1, 0.8, 0]
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.3
          }}
        />
        <motion.circle
          cx="50"
          cy="25"
          r="1.5"
          fill="#A8F0E4"
          animate={{
            cy: [25, 15, 8],
            opacity: [1, 0.5, 0],
            scale: [1, 0.8, 0]
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.6
          }}
        />
        
        {/* Center glow */}
        <circle cx="40" cy="40" r="8" fill="url(#lunchboxGradient3)" opacity="0.3" />
      </motion.g>
      
      <defs>
        <linearGradient id="lunchboxGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#65D6C8" />
          <stop offset="50%" stopColor="#7A6FF0" />
          <stop offset="100%" stopColor="#A8F0E4" />
        </linearGradient>
        <linearGradient id="lunchboxGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7A6FF0" />
          <stop offset="100%" stopColor="#65D6C8" />
        </linearGradient>
        <radialGradient id="lunchboxGradient3">
          <stop offset="0%" stopColor="#65D6C8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#7A6FF0" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function EntrepreneurshipIcon({ className = "" }: { className?: string }) {
  return (
    <svg 
      width="80" 
      height="80" 
      viewBox="0 0 80 80" 
      fill="none" 
      className={className}
    >
      {/* Interlocking loops - spiral of growth and reciprocity */}
      <motion.g
        animate={{
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* First loop */}
        <motion.circle
          cx="30"
          cy="35"
          r="18"
          stroke="url(#entrepreneurGradient1)"
          strokeWidth="2"
          fill="none"
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Second loop (interlocking) */}
        <motion.circle
          cx="50"
          cy="45"
          r="18"
          stroke="url(#entrepreneurGradient2)"
          strokeWidth="2"
          fill="none"
          animate={{
            rotate: [360, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Spiral path (growth trajectory) */}
        <motion.path
          d="M40 40 Q30 30, 40 20 T60 20 T70 40 T60 60"
          stroke="url(#entrepreneurGradient3)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 4"
          animate={{
            strokeDashoffset: [0, -20]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Center connection point */}
        <circle cx="40" cy="40" r="4" fill="#A8F0E4" opacity="0.6" />
      </motion.g>
      
      <defs>
        <linearGradient id="entrepreneurGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#65D6C8" />
          <stop offset="100%" stopColor="#A8F0E4" />
        </linearGradient>
        <linearGradient id="entrepreneurGradient2" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#A8F0E4" />
          <stop offset="100%" stopColor="#65D6C8" />
        </linearGradient>
        <linearGradient id="entrepreneurGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7A6FF0" />
          <stop offset="100%" stopColor="#65D6C8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ThinkTankIcon({ className = "" }: { className?: string }) {
  return (
    <svg 
      width="80" 
      height="80" 
      viewBox="0 0 80 80" 
      fill="none" 
      className={className}
    >
      {/* Grid-sphere / Vitruvian circle - equilibrium between systems & ethics */}
      <motion.g
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Outer Vitruvian circle */}
        <circle
          cx="40"
          cy="40"
          r="30"
          stroke="url(#thinkTankGradient1)"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Grid lines (latitude/longitude) */}
        <line x1="10" y1="40" x2="70" y2="40" stroke="url(#thinkTankGradient2)" strokeWidth="1" opacity="0.4" />
        <line x1="40" y1="10" x2="40" y2="70" stroke="url(#thinkTankGradient2)" strokeWidth="1" opacity="0.4" />
        
        {/* Diagonal light bands (intersecting wisdom) */}
        <motion.line
          x1="20"
          y1="20"
          x2="60"
          y2="60"
          stroke="url(#thinkTankGradient3)"
          strokeWidth="1"
          opacity="0.6"
          animate={{
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.line
          x1="60"
          y1="20"
          x2="20"
          y2="60"
          stroke="url(#thinkTankGradient3)"
          strokeWidth="1"
          opacity="0.6"
          animate={{
            opacity: [0.8, 0.3, 0.8]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Inner circles (concentric knowledge) */}
        <circle cx="40" cy="40" r="15" stroke="url(#thinkTankGradient2)" strokeWidth="1" fill="none" opacity="0.3" />
        <circle cx="40" cy="40" r="22" stroke="url(#thinkTankGradient2)" strokeWidth="1" fill="none" opacity="0.2" />
        
        {/* Center focal point */}
        <circle cx="40" cy="40" r="3" fill="#7A6FF0" opacity="0.8" />
      </motion.g>
      
      <defs>
        <linearGradient id="thinkTankGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A8F0E4" />
          <stop offset="50%" stopColor="#7A6FF0" />
          <stop offset="100%" stopColor="#A8F0E4" />
        </linearGradient>
        <linearGradient id="thinkTankGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7A6FF0" />
          <stop offset="100%" stopColor="#A8F0E4" />
        </linearGradient>
        <linearGradient id="thinkTankGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7A6FF0" />
          <stop offset="100%" stopColor="#65D6C8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Modal Overlays
function LunchboxModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
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
        className="relative max-w-2xl w-full mx-6 p-8 rounded-2xl border border-[#65D6C8]/30 bg-gradient-to-br from-[#111931]/95 to-[#0a0a2e]/95 shadow-[0_0_60px_rgba(101,214,200,0.3)]"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#65D6C8]/10 transition-colors"
        >
          <X className="w-5 h-5 text-[#FDFDFB]/70" />
        </button>

        {/* Teal-dominant aurora glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#65D6C8]/10 to-transparent rounded-2xl blur-2xl pointer-events-none" />

        {/* Content */}
        <div className="relative space-y-6">
          <div className="flex items-center gap-4">
            <LunchboxIcon className="w-16 h-16" />
            <div>
              <h3 className="text-3xl text-[#FDFDFB] mb-1">AI Lunchbox Program</h3>
              <p className="text-sm text-[#7CE7E4] uppercase tracking-wider">Learning Portal</p>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-[#65D6C8]/30 via-[#7A6FF0]/30 to-transparent" />

          <div className="space-y-4 text-[#FDFDFB]/80 leading-relaxed">
            <p>
              <strong className="text-[#65D6C8]">The Heart of Collective Learning</strong> — 
              AI Lunchbox demystifies intelligent systems through hands-on workshops, 
              accessible resources, and community dialogue.
            </p>
            
            <p>
              From understanding transformer models to building your first AI tool, 
              we guide individuals and organizations through the continuum of AI literacy.
            </p>

            <div className="p-4 bg-[#65D6C8]/5 border border-[#65D6C8]/20 rounded-lg">
              <p className="text-sm text-[#FDFDFB]/70">
                <strong className="text-[#FDFDFB]">What you'll gain:</strong>
              </p>
              <ul className="mt-2 space-y-1 text-sm text-[#FDFDFB]/60">
                <li>• Foundational AI literacy workshops</li>
                <li>• Access to learning resources and tools</li>
                <li>• Community support and mentorship</li>
                <li>• Certificate of completion</li>
              </ul>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex gap-3 pt-4">
            <button className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium hover:shadow-[0_0_30px_rgba(101,214,200,0.4)] transition-all duration-400">
              Apply Now
            </button>
            <button className="px-6 py-3 rounded-lg border border-[#65D6C8]/40 text-[#FDFDFB] hover:bg-[#65D6C8]/10 transition-all duration-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Learn More
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function InitiativesModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const initiatives = [
    { title: "Community Grants", description: "Micro-funding for local AI ventures" },
    { title: "Tool Library", description: "Open-source AI tools for entrepreneurs" },
    { title: "Mentorship Network", description: "Connect with experienced builders" },
  ];

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
        className="relative max-w-2xl w-full mx-6 p-8 rounded-2xl border border-[#A8F0E4]/30 bg-gradient-to-br from-[#111931]/95 to-[#0a0a2e]/95 shadow-[0_0_60px_rgba(168,240,228,0.3)]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#A8F0E4]/10 transition-colors"
        >
          <X className="w-5 h-5 text-[#FDFDFB]/70" />
        </button>

        <div className="relative space-y-6">
          <div className="flex items-center gap-4">
            <EntrepreneurshipIcon className="w-16 h-16" />
            <div>
              <h3 className="text-3xl text-[#FDFDFB] mb-1">Community Initiatives</h3>
              <p className="text-sm text-[#A8F0E4] uppercase tracking-wider">Economic Dignity</p>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-[#A8F0E4]/30 via-[#65D6C8]/30 to-transparent" />

          <div className="grid grid-cols-1 gap-4">
            {initiatives.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-lg border border-[#A8F0E4]/20 bg-[#A8F0E4]/5 hover:bg-[#A8F0E4]/10 transition-colors cursor-pointer group"
              >
                <h4 className="text-[#FDFDFB] font-medium mb-1 group-hover:text-[#A8F0E4] transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-[#FDFDFB]/60">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <button className="w-full px-6 py-3 rounded-lg border-2 border-[#A8F0E4]/40 text-[#FDFDFB] hover:bg-[#A8F0E4]/10 hover:border-[#A8F0E4]/60 transition-all duration-400 flex items-center justify-center gap-2">
            View All Initiatives
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function InsightsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-end md:items-center md:justify-end bg-[#040619]/95 backdrop-blur-xl"
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full md:w-[480px] h-[80vh] md:h-full p-8 bg-gradient-to-br from-[#0E1B4C]/98 to-[#040619]/98 border-l border-[#7A6FF0]/30 overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#7A6FF0]/10 transition-colors"
        >
          <X className="w-5 h-5 text-[#FDFDFB]/70" />
        </button>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <ThinkTankIcon className="w-16 h-16" />
            <div>
              <h3 className="text-2xl text-[#FDFDFB] mb-1">Research & Insights</h3>
              <p className="text-xs text-[#7A6FF0] uppercase tracking-wider">Think Tank</p>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-[#7A6FF0]/30 to-transparent" />

          <div className="space-y-4">
            {["AI Governance Frameworks", "Ethical AI Design Principles", "Collective Intelligence Research"].map((title, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-lg border border-[#7A6FF0]/20 bg-[#7A6FF0]/5 hover:bg-[#7A6FF0]/10 transition-colors cursor-pointer"
              >
                <h4 className="text-[#FDFDFB] font-medium mb-2">{title}</h4>
                <p className="text-sm text-[#FDFDFB]/60 mb-3">
                  Exploring the intersection of human wisdom and artificial intelligence...
                </p>
                <span className="text-xs text-[#7A6FF0]">Read article →</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Individual Pillar Card
function PillarCard({ pillar, index, isPrimary }: any) {
  const [showModal, setShowModal] = useState(false);
  
  const icons = [
    <LunchboxIcon key="lunchbox" />,
    <EntrepreneurshipIcon key="entrepreneur" />,
    <ThinkTankIcon key="thinktank" />
  ];

  const modals = [
    <LunchboxModal key="lunchbox-modal" isOpen={showModal} onClose={() => setShowModal(false)} />,
    <InitiativesModal key="initiatives-modal" isOpen={showModal} onClose={() => setShowModal(false)} />,
    <InsightsModal key="insights-modal" isOpen={showModal} onClose={() => setShowModal(false)} />
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="relative group"
      >
        {/* AI Lunchbox ambient halo */}
        {isPrimary && (
          <motion.div
            animate={{
              opacity: [0.1, 0.15, 0.1],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -inset-8 bg-gradient-to-br from-[#00EAD2]/10 to-transparent rounded-full blur-3xl pointer-events-none"
          />
        )}

        {/* Main card */}
        <motion.div
          whileHover={{ y: -4, scale: isPrimary ? 1.01 : 1.02 }}
          transition={{ duration: 0.3 }}
          className={`relative ${isPrimary ? 'scale-105' : ''}`}
          style={{
            transform: isPrimary ? 'scale(1.03)' : 'scale(1)'
          }}
        >
          {/* Glass panel with gradient border */}
          <div className="relative h-[560px] rounded-[20px] p-10 bg-[#111931]/80 backdrop-blur-sm border border-transparent hover:border-[#65D6C8]/40 transition-all duration-400 overflow-hidden">
            {/* Gradient border layer */}
            <div className="absolute inset-0 rounded-[20px] p-[2px] bg-gradient-to-br from-[#65D6C8]/25 via-[#7A6FF0]/25 to-[#65D6C8]/25 -z-10">
              <div className="w-full h-full rounded-[19px] bg-[#111931]/80 backdrop-blur-sm" />
            </div>

            {/* Aurora reflection */}
            <motion.div
              animate={{
                opacity: [0.03, 0.08, 0.03],
                x: [-20, 20, -20]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-br from-[#7A6FF0]/10 to-transparent blur-2xl"
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              {/* Icon */}
              <div className="mb-6">
                {icons[index]}
              </div>

              {/* Subtitle */}
              <p className="text-sm text-[#7CE7E4] uppercase tracking-wider mb-2">
                {pillar.subtitle}
              </p>

              {/* Title */}
              <h3 className="text-2xl text-[#EAF0FF] font-medium mb-4">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#BBD0FF] leading-relaxed mb-6 flex-grow">
                {pillar.description}
              </p>

              {/* CTA Button */}
              <button
                onClick={() => setShowModal(true)}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-400 flex items-center justify-center gap-2 group/btn ${
                  index === 0
                    ? "bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] hover:shadow-[0_0_30px_rgba(101,214,200,0.4)]"
                    : "border-2 border-[#FDFDFB]/20 text-[#FDFDFB] hover:bg-[#FDFDFB]/5 hover:border-[#65D6C8]/40"
                }`}
              >
                {pillar.cta}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Hover glow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-br from-[#FDFDFB]/5 via-transparent to-transparent pointer-events-none"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Modal */}
      {modals[index]}
    </>
  );
}

// Main Enhanced Pillars Section
export function EnhancedThreePillarsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const pillars = [
    {
      title: "AI Lunchbox",
      subtitle: "Foundational AI Literacy",
      description:
        "A collaborative learning program designed to demystify AI systems and provide practical, accessible knowledge for individuals, communities, and organizations navigating the age of intelligent systems.",
      cta: "Join the Lunchbox Program",
      isPrimary: true
    },
    {
      title: "Micro-Entrepreneurship",
      subtitle: "Economic Access & Dignity",
      description:
        "Supporting community-led ventures and local economies through AI-powered tools and training — ensuring the benefits of intelligent systems are distributed equitably across the continuum.",
      cta: "Explore Initiatives",
      isPrimary: false
    },
    {
      title: "Think Tank",
      subtitle: "Research & Policy Frameworks",
      description:
        "A research collective focused on human-centered AI governance, ethical frameworks, and the long-term implications of collective intelligence — shaping systems that reflect care, proportion, and shared wisdom.",
      cta: "Read Insights",
      isPrimary: false
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background - Continue aurora gradient from Metrics */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1B4C] via-[#0B1022] to-[#040619]" />

      {/* Deepened contrast behind Lunchbox (center) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#040619]/40 rounded-full blur-3xl" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl text-[#FDFDFB] font-semibold mb-6 leading-[120%]"
          >
            The Three Pillars of
            <br />
            <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              the Collective
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg text-[#FDFDFB]/70 max-w-3xl mx-auto leading-[150%]"
          >
            From the first light of learning to systems of dignity and wisdom — 
            each pillar sustains the continuum.
          </motion.p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, i) => (
            <PillarCard
              key={i}
              pillar={pillar}
              index={i}
              isPrimary={pillar.isPrimary}
            />
          ))}
        </div>
      </div>

      {/* Ambient background aurora */}
      <motion.div
        animate={{
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-t from-[#7A6FF0]/10 via-[#65D6C8]/5 to-transparent rounded-full blur-3xl pointer-events-none"
      />
    </motion.section>
  );
}
