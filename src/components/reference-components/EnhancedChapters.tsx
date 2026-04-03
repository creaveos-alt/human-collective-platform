"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { X, MapPin, Users, Calendar, ArrowRight, Globe } from "lucide-react";

/**
 * ENHANCED CHAPTERS SECTION - TWO CREATIVE DIRECTIONS
 * 
 * Direction 1: Structured Enhancement (Grid with CTAs)
 * Direction 2: Constellation Interpretation (Interactive nodes)
 */

// Chapter data
const chaptersData = [
  {
    name: "New York",
    location: "NYC, USA",
    coordinates: { x: 25, y: 45 }, // For constellation view
    description: "A vibrant hub of innovation and collaboration, fostering a community of thinkers and builders.",
    members: "450+",
    nextEvent: "AI Ethics Workshop",
    color: "#7A6FF0"
  },
  {
    name: "London",
    location: "UK",
    coordinates: { x: 50, y: 35 },
    description: "A global center for AI research and development, driving forward the future of intelligent systems.",
    members: "380+",
    nextEvent: "Research Symposium",
    color: "#65D6C8"
  },
  {
    name: "Tokyo",
    location: "Japan",
    coordinates: { x: 85, y: 40 },
    description: "A leading edge in AI technology and education, shaping the future of collective intelligence.",
    members: "520+",
    nextEvent: "Tech Meetup",
    color: "#A8F0E4"
  },
  {
    name: "Berlin",
    location: "Germany",
    coordinates: { x: 55, y: 38 },
    description: "A hub for ethical AI and social innovation, promoting responsible and inclusive development.",
    members: "310+",
    nextEvent: "Ethics Forum",
    color: "#7A6FF0"
  },
  {
    name: "Sydney",
    location: "Australia",
    coordinates: { x: 82, y: 75 },
    description: "A diverse and dynamic community, exploring the intersection of AI and human values.",
    members: "280+",
    nextEvent: "Community Gathering",
    color: "#65D6C8"
  },
];

// Chapter Detail Modal (shared between both versions)
function ChapterModal({ chapter, isOpen, onClose }: any) {
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

        {/* Aurora glow */}
        <div 
          className="absolute inset-0 rounded-2xl blur-2xl opacity-20 pointer-events-none"
          style={{ background: `radial-gradient(circle at 50% 50%, ${chapter.color}, transparent)` }}
        />

        {/* Content */}
        <div className="relative space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-[#65D6C8]">
              <MapPin className="w-4 h-4" />
              {chapter.location}
            </div>
            <h3 className="text-4xl text-[#FDFDFB] font-semibold">{chapter.name}</h3>
          </div>

          <div className="h-px bg-gradient-to-r from-[#65D6C8]/30 via-[#7A6FF0]/30 to-transparent" />

          {/* Description */}
          <p className="text-[#FDFDFB]/80 leading-relaxed">
            {chapter.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[#65D6C8]/5 border border-[#65D6C8]/20">
              <div className="flex items-center gap-2 text-[#65D6C8] mb-1">
                <Users className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider">Members</span>
              </div>
              <p className="text-2xl text-[#FDFDFB] font-semibold">{chapter.members}</p>
            </div>
            
            <div className="p-4 rounded-lg bg-[#7A6FF0]/5 border border-[#7A6FF0]/20">
              <div className="flex items-center gap-2 text-[#7A6FF0] mb-1">
                <Calendar className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider">Next Event</span>
              </div>
              <p className="text-sm text-[#FDFDFB]">{chapter.nextEvent}</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex gap-3 pt-4">
            <button className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium hover:shadow-[0_0_30px_rgba(101,214,200,0.4)] transition-all duration-400 flex items-center justify-center gap-2">
              Join Chapter
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-3 rounded-lg border border-[#65D6C8]/40 text-[#FDFDFB] hover:bg-[#65D6C8]/10 transition-all duration-400 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Events
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ========================================
// DIRECTION 1: STRUCTURED ENHANCEMENT
// ========================================

export function StructuredChaptersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedChapter, setSelectedChapter] = useState<any>(null);
  
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
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040619] via-[#0a0a2e]/50 to-[#040619]" />

        {/* Horizontal aurora band */}
        <motion.div
          animate={{
            x: ["-30%", "30%", "-30%"],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-0 right-0 h-1/3 bg-gradient-to-r from-transparent via-[#65D6C8]/10 to-transparent blur-3xl"
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
            {/* Aurora divider above title */}
            <motion.div 
              className="relative w-32 h-px mx-auto mb-8 overflow-hidden"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-[#65D6C8]/30" />
              <motion.div
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 1,
                }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-[#65D6C8]/80 to-transparent"
              />
            </motion.div>

            <h2 className="text-5xl md:text-6xl text-[#FDFDFB] font-semibold mb-6">
              Global Chapters
            </h2>
            <p className="text-lg text-[#FDFDFB]/70 max-w-3xl mx-auto">
              Each light is a chapter in the continuum — distinct yet connected.
            </p>
          </motion.div>

          {/* Chapters grid */}
          <div className="relative">
            {/* Connecting aurora shimmer (every 10s) */}
            <motion.div
              animate={{
                x: ["-10%", "110%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 7,
              }}
              className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#65D6C8]/60 to-transparent pointer-events-none"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {chaptersData.map((chapter, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="relative h-full p-8 rounded-2xl bg-[#111931]/70 backdrop-blur-sm border border-transparent hover:border-[#65D6C8]/40 transition-all duration-400"
                    style={{
                      borderImage: `linear-gradient(135deg, ${chapter.color}40, #7A6FF040) 1`
                    }}
                  >
                    {/* Glow on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 rounded-2xl blur-xl pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${chapter.color}20, transparent)`
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10 space-y-4">
                      {/* Chapter name */}
                      <h3 
                        className="text-3xl font-semibold bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent"
                      >
                        {chapter.name}
                      </h3>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-sm text-[#65D6C8]">
                        <MapPin className="w-3 h-3" />
                        {chapter.location}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-[#FDFDFB]/60 leading-relaxed min-h-[80px]">
                        {chapter.description}
                      </p>

                      {/* CTA Button */}
                      <motion.button
                        onClick={() => setSelectedChapter(chapter)}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: i * 0.15 + 0.2 }}
                        viewport={{ once: true }}
                        className="w-full py-2 px-4 rounded-lg border border-[#FDFDFB]/20 text-[#FDFDFB] text-sm hover:bg-[#FDFDFB]/5 hover:border-[#65D6C8]/40 transition-all duration-400 flex items-center justify-center gap-2 group/btn"
                      >
                        View Chapter
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Global CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium text-lg hover:shadow-[0_0_40px_rgba(101,214,200,0.5)] transition-all duration-400 flex items-center gap-3 mx-auto">
              <Globe className="w-5 h-5" />
              Explore All Chapters
            </button>
          </motion.div>

          {/* Bottom alignment line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-px mt-20 bg-gradient-to-r from-transparent via-[#65D6C8]/20 to-transparent"
          />
        </div>
      </motion.section>

      {/* Modal */}
      <ChapterModal 
        chapter={selectedChapter} 
        isOpen={!!selectedChapter} 
        onClose={() => setSelectedChapter(null)} 
      />
    </>
  );
}

// ========================================
// DIRECTION 2: CONSTELLATION INTERPRETATION
// ========================================

export function ConstellationChaptersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedChapter, setSelectedChapter] = useState<any>(null);
  const [hoveredChapter, setHoveredChapter] = useState<string | null>(null);
  
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e] via-[#0B1022] to-[#040619]" />

        {/* Ambient aurora flux */}
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#65D6C8]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.02, 0.06, 0.02],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#7A6FF0]/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-[#FDFDFB] font-semibold mb-6">
              Global Network
            </h2>
            <p className="text-lg text-[#FDFDFB]/70 max-w-3xl mx-auto">
              From node to node, the light travels — each chapter reflecting a fragment of the whole.
            </p>
          </motion.div>

          {/* Constellation Map */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative w-full h-[500px] md:h-[600px] rounded-2xl border border-[#65D6C8]/10 bg-[#040619]/30 backdrop-blur-sm overflow-hidden"
          >
            {/* World mesh lines (subtle) */}
            <svg className="absolute inset-0 w-full h-full opacity-10">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#65D6C8" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Connection lines between nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {chaptersData.map((chapter, i) => {
                const nextChapter = chaptersData[(i + 1) % chaptersData.length];
                return (
                  <motion.line
                    key={`line-${i}`}
                    x1={`${chapter.coordinates.x}%`}
                    y1={`${chapter.coordinates.y}%`}
                    x2={`${nextChapter.coordinates.x}%`}
                    y2={`${nextChapter.coordinates.y}%`}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    animate={{
                      opacity: hoveredChapter === chapter.name || hoveredChapter === nextChapter.name ? 0.6 : 0.3
                    }}
                  />
                );
              })}
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7A6FF0" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#65D6C8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#A8F0E4" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>

            {/* Chapter nodes */}
            {chaptersData.map((chapter, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredChapter(chapter.name)}
                onMouseLeave={() => setHoveredChapter(null)}
                onClick={() => setSelectedChapter(chapter)}
                className="absolute cursor-pointer group"
                style={{
                  left: `${chapter.coordinates.x}%`,
                  top: `${chapter.coordinates.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {/* Node glow */}
                <motion.div
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-full blur-xl"
                  style={{
                    background: chapter.color,
                    width: '60px',
                    height: '60px',
                    marginLeft: '-30px',
                    marginTop: '-30px'
                  }}
                />

                {/* Node core */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-4 h-4 rounded-full border-2 border-[#FDFDFB]/80"
                  style={{
                    background: `radial-gradient(circle, ${chapter.color}, ${chapter.color}80)`
                  }}
                />

                {/* Hover tooltip */}
                {hoveredChapter === chapter.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-8 left-1/2 -translate-x-1/2 w-48 p-4 rounded-lg bg-[#111931]/95 border border-[#65D6C8]/30 backdrop-blur-xl shadow-[0_0_30px_rgba(101,214,200,0.3)] pointer-events-none"
                  >
                    <h4 className="text-[#FDFDFB] font-medium mb-1">{chapter.name}</h4>
                    <p className="text-xs text-[#FDFDFB]/60 mb-3">{chapter.location}</p>
                    <div className="text-xs text-[#65D6C8]">Click to explore →</div>
                  </motion.div>
                )}
              </motion.div>
            ))}

            {/* Cursor interaction - aurora movement */}
            <motion.div
              animate={{
                x: ["-20%", "20%", "-20%"],
                y: ["-10%", "10%", "-10%"],
                opacity: [0.05, 0.15, 0.05]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/10 via-transparent to-[#65D6C8]/10 pointer-events-none"
            />
          </motion.div>

          {/* Global CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium text-lg hover:shadow-[0_0_40px_rgba(101,214,200,0.5)] transition-all duration-400 flex items-center gap-3 mx-auto">
              <Globe className="w-5 h-5" />
              Explore All Chapters
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Modal */}
      <ChapterModal 
        chapter={selectedChapter} 
        isOpen={!!selectedChapter} 
        onClose={() => setSelectedChapter(null)} 
      />
    </>
  );
}
