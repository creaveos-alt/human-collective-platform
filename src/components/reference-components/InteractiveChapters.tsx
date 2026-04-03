"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { 
  X, MapPin, Users, Calendar, ArrowRight, Globe, Filter, 
  ChevronLeft, Sparkles, BookOpen, Coffee, Lightbulb
} from "lucide-react";

/**
 * INTERACTIVE GLOBAL NETWORK / CHAPTERS SECTION
 * - Constellation map with interactive nodes
 * - Chapter cards on click
 * - Full directory with filters
 * - Complete navigation flows
 */

// Chapter data with extended information
const chaptersData = [
  {
    id: "nyc",
    name: "New York",
    city: "New York City",
    region: "North America",
    location: "NYC, USA",
    coordinates: { x: 25, y: 45 },
    description: "A vibrant hub of innovation and collaboration, fostering a community of thinkers and builders exploring AI ethics, education, and community impact.",
    purpose: "Workshops & community gatherings",
    members: "450+",
    nextEvent: "AI Ethics Workshop",
    upcomingEvents: 3,
    tags: ["AI Lunchbox", "Community", "Workshops", "Ethics"],
    focus: ["Community", "AI Lunchbox"],
    color: "#7A6FF0"
  },
  {
    id: "london",
    name: "London",
    city: "London",
    region: "Europe",
    location: "UK",
    coordinates: { x: 50, y: 35 },
    description: "A global center for AI research and policy development, driving forward responsible innovation and cross-sector collaboration.",
    purpose: "Research & policy discussions",
    members: "380+",
    nextEvent: "Research Symposium",
    upcomingEvents: 2,
    tags: ["Research", "Policy", "Innovation"],
    focus: ["Research", "Policy"],
    color: "#65D6C8"
  },
  {
    id: "tokyo",
    name: "Tokyo",
    city: "Tokyo",
    region: "Asia-Pacific",
    location: "Japan",
    coordinates: { x: 85, y: 40 },
    description: "A leading edge in AI technology and education, shaping the future of collective intelligence through hands-on building and learning.",
    purpose: "Tech meetups & hackathons",
    members: "520+",
    nextEvent: "Tech Meetup",
    upcomingEvents: 4,
    tags: ["AI Lunchbox", "Tech", "Hackathons"],
    focus: ["AI Lunchbox", "Community"],
    color: "#A8F0E4"
  },
  {
    id: "berlin",
    name: "Berlin",
    city: "Berlin",
    region: "Europe",
    location: "Germany",
    coordinates: { x: 55, y: 38 },
    description: "A hub for ethical AI and social innovation, promoting responsible and inclusive development through critical dialogue.",
    purpose: "Ethics forums & advocacy",
    members: "310+",
    nextEvent: "Ethics Forum",
    upcomingEvents: 2,
    tags: ["Ethics", "Policy", "Social Impact"],
    focus: ["Policy", "Community"],
    color: "#7A6FF0"
  },
  {
    id: "sydney",
    name: "Sydney",
    city: "Sydney",
    region: "Asia-Pacific",
    location: "Australia",
    coordinates: { x: 82, y: 75 },
    description: "A diverse and dynamic community, exploring the intersection of AI and human values through inclusive gatherings.",
    purpose: "Community gatherings",
    members: "280+",
    nextEvent: "Community Gathering",
    upcomingEvents: 2,
    tags: ["Community", "Workshops"],
    focus: ["Community"],
    color: "#65D6C8"
  },
  {
    id: "sf",
    name: "San Francisco",
    city: "San Francisco",
    region: "North America",
    location: "CA, USA",
    coordinates: { x: 18, y: 48 },
    description: "The original chapter, pioneering AI Lunchbox programs and building tools for collective intelligence.",
    purpose: "AI Lunchbox & tool building",
    members: "600+",
    nextEvent: "AI Lunchbox Workshop",
    upcomingEvents: 5,
    tags: ["AI Lunchbox", "Research", "Community"],
    focus: ["AI Lunchbox", "Research"],
    color: "#7A6FF0"
  },
  {
    id: "paris",
    name: "Paris",
    city: "Paris",
    region: "Europe",
    location: "France",
    coordinates: { x: 52, y: 36 },
    description: "Bridging art, philosophy, and technology to explore the cultural implications of AI.",
    purpose: "Interdisciplinary dialogues",
    members: "220+",
    nextEvent: "Art & AI Forum",
    upcomingEvents: 1,
    tags: ["Community", "Art", "Philosophy"],
    focus: ["Community"],
    color: "#A8F0E4"
  },
  {
    id: "singapore",
    name: "Singapore",
    city: "Singapore",
    region: "Asia-Pacific",
    location: "Singapore",
    coordinates: { x: 75, y: 58 },
    description: "Regional hub for AI governance and Southeast Asian collaboration on responsible AI.",
    purpose: "Governance & regional collaboration",
    members: "340+",
    nextEvent: "Governance Summit",
    upcomingEvents: 3,
    tags: ["Policy", "Governance", "Regional"],
    focus: ["Policy"],
    color: "#65D6C8"
  },
];

// ========================================
// CHAPTER NODE TOOLTIP
// ========================================

function ChapterTooltip({ chapter, position }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute z-30 pointer-events-none"
      style={{
        left: `${position.x}%`,
        top: `${position.y - 12}%`,
        transform: 'translateX(-50%)',
      }}
    >
      <div className="relative bg-[#111931]/98 backdrop-blur-xl border border-[#65D6C8]/40 rounded-xl p-4 shadow-[0_0_30px_rgba(101,214,200,0.3)] min-w-[200px]">
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#111931] border-r border-b border-[#65D6C8]/40" />
        
        <div className="relative space-y-2">
          <div className="text-sm text-[#FDFDFB] font-medium">{chapter.city}</div>
          <div className="text-xs text-[#65D6C8]">{chapter.region}</div>
          <div className="text-xs text-[#FDFDFB]/60 italic">{chapter.purpose}</div>
        </div>
      </div>
    </motion.div>
  );
}

// ========================================
// CHAPTER CARD (On-Page)
// ========================================

function ChapterCard({ chapter, onClose, onViewDetails, onViewEvents }: any) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl mx-6 z-40"
      >
        <div className="relative bg-gradient-to-br from-[#111931]/98 to-[#0a0a2e]/98 backdrop-blur-xl border border-[#65D6C8]/30 rounded-2xl p-6 shadow-[0_0_60px_rgba(101,214,200,0.3)]">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#65D6C8]/10 transition-colors"
          >
            <X className="w-5 h-5 text-[#FDFDFB]/70" />
          </button>

          {/* Aurora glow */}
          <div 
            className="absolute inset-0 rounded-2xl blur-3xl opacity-15 pointer-events-none"
            style={{ background: `radial-gradient(circle, ${chapter.color}, transparent)` }}
          />

          {/* Content */}
          <div className="relative space-y-4">
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ 
                  background: `radial-gradient(circle, ${chapter.color}40, ${chapter.color}10)`,
                  boxShadow: `0 0 20px ${chapter.color}40`
                }}
              >
                <Globe className="w-6 h-6" style={{ color: chapter.color }} />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 text-xs text-[#65D6C8] mb-1">
                  <MapPin className="w-3 h-3" />
                  {chapter.region}
                </div>
                <h3 className="text-2xl text-[#FDFDFB] font-medium">{chapter.name} Chapter</h3>
              </div>
            </div>

            <p className="text-sm text-[#FDFDFB]/70 leading-relaxed">
              {chapter.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {chapter.tags.map((tag: string, i: number) => (
                <span 
                  key={i} 
                  className="px-2 py-1 rounded text-xs bg-[#65D6C8]/10 border border-[#65D6C8]/30 text-[#65D6C8]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="text-center p-3 rounded-lg bg-[#FDFDFB]/5">
                <div className="text-lg text-[#FDFDFB] font-medium">{chapter.members}</div>
                <div className="text-xs text-[#FDFDFB]/60">Members</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-[#FDFDFB]/5">
                <div className="text-lg text-[#FDFDFB] font-medium">{chapter.upcomingEvents}</div>
                <div className="text-xs text-[#FDFDFB]/60">Upcoming</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-[#FDFDFB]/5">
                <div className="text-xs text-[#FDFDFB] truncate">{chapter.nextEvent}</div>
                <div className="text-xs text-[#FDFDFB]/60">Next Event</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-2 pt-2">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(101,214,200,0.4)" }}
                whileTap={{ scale: 0.98 }}
                onClick={onViewDetails}
                className="flex-1 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium transition-all flex items-center justify-center gap-2 text-sm"
              >
                View Chapter Details
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, borderColor: "rgba(101,214,200,0.6)" }}
                whileTap={{ scale: 0.98 }}
                onClick={onViewEvents}
                className="px-5 py-2.5 rounded-lg border border-[#FDFDFB]/20 text-[#FDFDFB] hover:bg-[#FDFDFB]/5 transition-all flex items-center gap-2 text-sm"
              >
                <Calendar className="w-4 h-4" />
                Upcoming Events
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ========================================
// CHAPTERS DIRECTORY OVERLAY
// ========================================

function ChaptersDirectory({ isOpen, onClose, onSelectChapter }: any) {
  const [selectedRegion, setSelectedRegion] = useState<string>("All Regions");
  const [selectedFocus, setSelectedFocus] = useState<string>("All Focus Areas");

  const regions = ["All Regions", "North America", "Europe", "Asia-Pacific", "Africa", "Virtual"];
  const focusAreas = ["All Focus Areas", "AI Lunchbox", "Community", "Research", "Policy"];

  const filteredChapters = chaptersData.filter(chapter => {
    const regionMatch = selectedRegion === "All Regions" || chapter.region === selectedRegion;
    const focusMatch = selectedFocus === "All Focus Areas" || chapter.focus.includes(selectedFocus);
    return regionMatch && focusMatch;
  });

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] bg-[#040619]/95 backdrop-blur-md overflow-y-auto"
      >
        <div className="min-h-screen py-12 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="flex items-center gap-2 text-[#65D6C8] hover:text-[#A8F0E4] transition-colors mb-6"
              >
                <ChevronLeft className="w-5 h-5" />
                Back to Global Network
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-4">Chapters Directory</h2>
                <p className="text-lg text-[#FDFDFB]/70">
                  Explore our global network of local communities
                </p>
              </motion.div>
            </div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 space-y-4"
            >
              {/* Region Filters */}
              <div>
                <div className="flex items-center gap-2 text-sm text-[#FDFDFB]/60 mb-3">
                  <Filter className="w-4 h-4" />
                  Filter by Region
                </div>
                <div className="flex flex-wrap gap-2">
                  {regions.map((region) => (
                    <motion.button
                      key={region}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedRegion(region)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedRegion === region
                          ? "bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619]"
                          : "border border-[#FDFDFB]/20 text-[#FDFDFB]/70 hover:bg-[#FDFDFB]/5"
                      }`}
                    >
                      {region}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Focus Filters */}
              <div>
                <div className="flex items-center gap-2 text-sm text-[#FDFDFB]/60 mb-3">
                  <Sparkles className="w-4 h-4" />
                  Filter by Focus Area
                </div>
                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((focus) => (
                    <motion.button
                      key={focus}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedFocus(focus)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedFocus === focus
                          ? "bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619]"
                          : "border border-[#FDFDFB]/20 text-[#FDFDFB]/70 hover:bg-[#FDFDFB]/5"
                      }`}
                    >
                      {focus}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Chapters Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredChapters.map((chapter, i) => (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#111931]/80 to-[#0a0a2e]/80 border border-[#65D6C8]/20 hover:border-[#65D6C8]/40 transition-all duration-400"
                >
                  {/* Hover glow */}
                  <div 
                    className="absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${chapter.color}20, transparent)` }}
                  />

                  <div className="relative space-y-4">
                    {/* Icon */}
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ 
                        background: `radial-gradient(circle, ${chapter.color}40, ${chapter.color}10)`,
                      }}
                    >
                      <Globe className="w-5 h-5" style={{ color: chapter.color }} />
                    </div>

                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-2 text-xs text-[#65D6C8] mb-1">
                        <MapPin className="w-3 h-3" />
                        {chapter.region}
                      </div>
                      <h3 className="text-xl text-[#FDFDFB] font-medium">{chapter.name}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#FDFDFB]/60 leading-relaxed line-clamp-2">
                      {chapter.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-xs text-[#FDFDFB]/50">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {chapter.members}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {chapter.upcomingEvents} events
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        onClose();
                        onSelectChapter(chapter);
                      }}
                      className="w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#65D6C8]/10 to-[#7A6FF0]/10 border border-[#65D6C8]/30 text-[#FDFDFB] hover:from-[#65D6C8]/20 hover:to-[#7A6FF0]/20 transition-all flex items-center justify-center gap-2 text-sm"
                    >
                      View Chapter
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Empty State */}
            {filteredChapters.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-[#FDFDFB]/60">No chapters found with these filters.</p>
                <button
                  onClick={() => {
                    setSelectedRegion("All Regions");
                    setSelectedFocus("All Focus Areas");
                  }}
                  className="mt-4 px-6 py-2 rounded-lg border border-[#65D6C8]/30 text-[#65D6C8] hover:bg-[#65D6C8]/10 transition-all"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ========================================
// MAIN CONSTELLATION SECTION
// ========================================

export function InteractiveGlobalNetwork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredChapter, setHoveredChapter] = useState<any>(null);
  const [selectedChapter, setSelectedChapter] = useState<any>(null);
  const [showDirectory, setShowDirectory] = useState(false);
  
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#040619] via-[#0a0a2e] to-[#040619]" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(101,214,200,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(101,214,200,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Aurora ambient */}
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#7A6FF0]/30 to-[#65D6C8]/30 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <h2 className="text-5xl md:text-6xl text-[#FDFDFB] mb-6">
              Global Network
            </h2>
            <p className="text-xl text-[#65D6C8] mb-3">
              Chapters across the world, connected by a shared continuum.
            </p>
            <p className="text-sm text-[#FDFDFB]/60 max-w-2xl mx-auto">
              Each node represents a chapter — a local gathering place in the global Collective.
            </p>
          </motion.div>

          {/* Constellation Map */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="relative w-full h-[600px] my-16 rounded-2xl border border-[#65D6C8]/10 bg-[#040619]/30 backdrop-blur-sm overflow-hidden"
          >
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {chaptersData.map((chapter, i) => {
                const nextChapter = chaptersData[i + 1];
                if (!nextChapter) return null;
                
                return (
                  <motion.line
                    key={`line-${chapter.id}`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.2 }}
                    transition={{ duration: 2, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    x1={`${chapter.coordinates.x}%`}
                    y1={`${chapter.coordinates.y}%`}
                    x2={`${nextChapter.coordinates.x}%`}
                    y2={`${nextChapter.coordinates.y}%`}
                    stroke="url(#line-gradient)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                );
              })}
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7A6FF0" />
                  <stop offset="50%" stopColor="#65D6C8" />
                  <stop offset="100%" stopColor="#A8F0E4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Chapter Nodes */}
            {chaptersData.map((chapter, i) => (
              <motion.div
                key={chapter.id}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring",
                  delay: 0.5 + i * 0.1,
                  duration: 0.6
                }}
                viewport={{ once: true }}
                className="absolute"
                style={{
                  left: `${chapter.coordinates.x}%`,
                  top: `${chapter.coordinates.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <motion.button
                  onMouseEnter={() => setHoveredChapter(chapter)}
                  onMouseLeave={() => setHoveredChapter(null)}
                  onClick={() => setSelectedChapter(chapter)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  {/* Breathing glow */}
                  <motion.div
                    animate={{
                      scale: hoveredChapter?.id === chapter.id ? [1, 1.5, 1] : [1, 1.3, 1],
                      opacity: hoveredChapter?.id === chapter.id ? [0.4, 0.7, 0.4] : [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3
                    }}
                    className="absolute inset-0 -m-4 rounded-full blur-xl"
                    style={{ background: chapter.color }}
                  />

                  {/* Node */}
                  <div 
                    className="relative w-4 h-4 rounded-full border-2 transition-all duration-400"
                    style={{ 
                      backgroundColor: hoveredChapter?.id === chapter.id ? chapter.color : `${chapter.color}80`,
                      borderColor: chapter.color,
                      boxShadow: `0 0 20px ${chapter.color}${hoveredChapter?.id === chapter.id ? 'AA' : '60'}`
                    }}
                  />

                  {/* Pulse ring on hover */}
                  {hoveredChapter?.id === chapter.id && (
                    <motion.div
                      initial={{ scale: 1, opacity: 0.6 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute inset-0 rounded-full border-2"
                      style={{ borderColor: chapter.color }}
                    />
                  )}
                </motion.button>
              </motion.div>
            ))}

            {/* Connection line to selected card */}
            {selectedChapter && (
              <motion.line
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                x1={`${selectedChapter.coordinates.x}%`}
                y1={`${selectedChapter.coordinates.y}%`}
                x2="50%"
                y2="95%"
                stroke={selectedChapter.color}
                strokeWidth="2"
                strokeDasharray="4 4"
                className="absolute inset-0"
              />
            )}

            {/* Tooltips */}
            <AnimatePresence>
              {hoveredChapter && !selectedChapter && (
                <ChapterTooltip 
                  chapter={hoveredChapter} 
                  position={hoveredChapter.coordinates}
                />
              )}
            </AnimatePresence>

            {/* Dim overlay when card is open */}
            <AnimatePresence>
              {selectedChapter && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-[#040619]/60 backdrop-blur-sm"
                />
              )}
            </AnimatePresence>

            {/* Chapter Card */}
            <AnimatePresence>
              {selectedChapter && (
                <ChapterCard
                  chapter={selectedChapter}
                  onClose={() => setSelectedChapter(null)}
                  onViewDetails={() => {
                    // In real implementation, would navigate to chapter detail page
                    console.log("View details for", selectedChapter.name);
                  }}
                  onViewEvents={() => {
                    // In real implementation, would filter events by chapter
                    console.log("View events for", selectedChapter.name);
                  }}
                />
              )}
            </AnimatePresence>
          </motion.div>

          {/* Explore All Chapters CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(101,214,200,0.5)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowDirectory(true)}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium transition-all flex items-center gap-3 mx-auto"
            >
              <Globe className="w-5 h-5" />
              Explore All Chapters
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Chapters Directory Overlay */}
      <ChaptersDirectory
        isOpen={showDirectory}
        onClose={() => setShowDirectory(false)}
        onSelectChapter={(chapter: any) => setSelectedChapter(chapter)}
      />
    </>
  );
}
