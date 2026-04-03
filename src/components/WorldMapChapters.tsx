"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { MapPin, ArrowRight, Users, Calendar } from "lucide-react";
import worldMapDotted from "figma:asset/514cec5676994f45b25d815805e7de935cde0ee1.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

/**
 * WORLD MAP CHAPTERS SECTION
 * 
 * Geographic visualization using real dotted world map.
 * Clean, precise placement with aurora aesthetic.
 * No constellation lines - just glowing nodes at real locations.
 */

interface Chapter {
  id: string;
  name: string;
  region: string;
  description: string;
  coordinates: { x: number; y: number }; // Percentage-based positioning on the map image
  members?: number;
  upcomingEvents?: number;
}

const chapters: Chapter[] = [
  {
    id: "nyc",
    name: "New York",
    region: "North America",
    description: "Building bridges between AI research and community practice in the heart of innovation.",
    coordinates: { x: 24, y: 38.5 }, // Adjusted to match actual NYC location
    members: 156,
    upcomingEvents: 3
  },
  {
    id: "toronto",
    name: "Toronto",
    region: "North America",
    description: "Fostering cross-border collaboration in AI ethics and responsible innovation.",
    coordinates: { x: 22.5, y: 36.5 }, // North and slightly west of NYC
    members: 134,
    upcomingEvents: 4
  },
  {
    id: "london",
    name: "London",
    region: "Europe",
    description: "Exploring ethical AI frameworks through cross-sector dialogue and collaborative learning.",
    coordinates: { x: 49.2, y: 32.5 }, // Adjusted for UK position
    members: 203,
    upcomingEvents: 5
  },
  {
    id: "berlin",
    name: "Berlin",
    region: "Europe",
    description: "Cultivating open-source AI tools and fostering inclusive digital literacy programs.",
    coordinates: { x: 51.5, y: 31 }, // Adjusted for Germany position
    members: 178,
    upcomingEvents: 4
  },
  {
    id: "singapore",
    name: "Singapore",
    region: "Southeast Asia",
    description: "Advancing human-centered AI design in education, healthcare, and urban systems.",
    coordinates: { x: 76, y: 57.5 }, // Fine-tuned for Singapore
    members: 142,
    upcomingEvents: 2
  },
  {
    id: "sydney",
    name: "Sydney",
    region: "Australia",
    description: "Fostering responsible AI innovation through inclusive community networks.",
    coordinates: { x: 84.5, y: 82 }, // User confirmed this is good
    members: 128,
    upcomingEvents: 4
  }
];

export function WorldMapChapters() {
  const [hoveredChapter, setHoveredChapter] = useState<string | null>(null);
  const [focusedChapter, setFocusedChapter] = useState<string | null>(null);
  const [isMapHovered, setIsMapHovered] = useState(false);

  const activeChapter = hoveredChapter || focusedChapter;
  const activeChapterData = chapters.find(c => c.id === activeChapter);

  return (
    <section id="chapters" className="relative py-32 overflow-hidden">
      {/* Aurora gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040619] via-[#0a0a2e] to-[#040619]" />
      
      {/* Atmospheric glow - breathing effect */}
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-radial from-[#7A6FF0]/20 via-[#65D6C8]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
            Global Network
          </h2>
          <p className="text-xl text-[#FDFDFB]/70 max-w-3xl mx-auto">
            Chapters across the world, connected by a shared continuum.
          </p>
          <p className="text-base text-[#FDFDFB]/50 max-w-2xl mx-auto">
            Each node represents a chapter — a local gathering place in the global Collective.
          </p>
        </motion.div>

        {/* World Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full max-w-6xl mx-auto mb-16"
        >
          {/* Dotted World Map Base Layer */}
          <div className="relative w-full">
            {/* Aurora glow behind map */}
            <motion.div
              animate={{
                opacity: [0.2, 0.35, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 -m-8 bg-gradient-to-br from-[#65D6C8]/30 to-[#7A6FF0]/30 rounded-3xl blur-3xl"
            />

            {/* World Map Image - Enhanced Visibility */}
            <div className="relative w-full">
              {/* Map glow layer for depth */}
              <motion.div
                animate={{
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 blur-sm"
                style={{
                  filter: "brightness(1.2) sepia(1) hue-rotate(170deg) saturate(3)",
                  opacity: 0.3
                }}
              >
                <ImageWithFallback
                  src={worldMapDotted}
                  alt=""
                  className="w-full h-auto"
                  aria-hidden="true"
                />
              </motion.div>

              {/* Main map layer - more visible */}
              <div 
                className="relative w-full"
                style={{
                  filter: "brightness(1) sepia(1) hue-rotate(175deg) saturate(2.5) contrast(1.1)",
                  opacity: 0.65,
                  mixBlendMode: "screen"
                }}
              >
                <ImageWithFallback
                  src={worldMapDotted}
                  alt="World map showing global chapter locations"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Chapter Nodes - Positioned absolutely over the map */}
            <div 
              className="absolute inset-0"
              onMouseEnter={() => setIsMapHovered(true)}
              onMouseLeave={() => setIsMapHovered(false)}
            >
              {chapters.map((chapter, index) => (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + index * 0.15,
                    ease: "easeOut"
                  }}
                  style={{
                    position: "absolute",
                    left: `${chapter.coordinates.x}%`,
                    top: `${chapter.coordinates.y}%`,
                    transform: "translate(-50%, -50%)"
                  }}
                  className="relative group"
                  onMouseEnter={() => setHoveredChapter(chapter.id)}
                  onMouseLeave={() => setHoveredChapter(null)}
                  onFocus={() => setFocusedChapter(chapter.id)}
                  onBlur={() => setFocusedChapter(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${chapter.name} chapter in ${chapter.region}`}
                >
                  {/* Ripple effect on hover */}
                  <AnimatePresence>
                    {activeChapter === chapter.id && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0.8 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute inset-0 -m-2 rounded-full border-2 border-[#65D6C8]"
                      />
                    )}
                  </AnimatePresence>

                  {/* Pulsing glow halo */}
                  <motion.div
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.8
                    }}
                    className="absolute inset-0 -m-4 bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] rounded-full blur-xl pointer-events-none"
                  />

                  {/* Node dot */}
                  <motion.button
                    whileHover={{ scale: 1.4 }}
                    whileTap={{ scale: 0.9 }}
                    animate={
                      activeChapter === chapter.id
                        ? { scale: 1.4 }
                        : { scale: 1 }
                    }
                    className={`
                      relative w-5 h-5 rounded-full 
                      bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0]
                      cursor-pointer
                      transition-all duration-300
                      ${activeChapter === chapter.id ? 'ring-2 ring-[#65D6C8] ring-offset-2 ring-offset-[#040619]' : ''}
                    `}
                    style={{
                      boxShadow: activeChapter === chapter.id
                        ? "0 0 40px rgba(101, 214, 200, 0.9), 0 0 80px rgba(122, 111, 240, 0.5)"
                        : "0 0 25px rgba(101, 214, 200, 0.7), 0 0 50px rgba(122, 111, 240, 0.3)"
                    }}
                  >
                    {/* Inner glow */}
                    <motion.div
                      animate={{
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0.5 rounded-full bg-gradient-to-br from-[#A8F0E4] to-[#7A6FF0]"
                    />
                  </motion.button>

                  {/* Chapter name label - appears on map hover or node hover */}
                  <AnimatePresence>
                    {(isMapHovered || activeChapter === chapter.id) && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full mt-3 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap"
                      >
                        <div className="px-3 py-1.5 rounded-lg bg-[#040619]/95 backdrop-blur-sm border border-[#65D6C8]/30 shadow-lg">
                          <p className="text-xs font-semibold text-[#FDFDFB]">
                            {chapter.name}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Connection line to tooltip (only when active) */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={
                      activeChapter === chapter.id
                        ? { height: "60px", opacity: 0.4 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[#65D6C8] to-transparent"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Chapter Tooltip - Floating above map */}
          <AnimatePresence>
            {activeChapter && activeChapterData && (
              <motion.div
                key={activeChapter}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-50"
                style={{
                  top: `calc(${activeChapterData.coordinates.y}% - 12rem)`,
                }}
              >
                <div className="relative">
                  {/* Aurora glow behind card */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 -m-6 bg-gradient-to-br from-[#7A6FF0]/60 to-[#65D6C8]/60 rounded-2xl blur-2xl"
                  />

                  {/* Tooltip Card */}
                  <div className="relative bg-[#040619]/98 backdrop-blur-xl border border-[#65D6C8]/40 rounded-2xl p-6 shadow-2xl min-w-[340px] max-w-[380px]">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-[#FDFDFB] mb-1.5">
                          {activeChapterData.name}
                        </h3>
                        <p className="text-sm text-[#65D6C8] font-medium">
                          {activeChapterData.region}
                        </p>
                      </div>
                      <div className="p-2 rounded-lg bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20">
                        <MapPin className="w-5 h-5 text-[#65D6C8]" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#FDFDFB]/70 leading-relaxed mb-4">
                      {activeChapterData.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-5 mb-5 pb-4 border-b border-[#65D6C8]/10">
                      <div className="flex items-center gap-2 text-xs text-[#FDFDFB]/60">
                        <div className="p-1.5 rounded-md bg-[#65D6C8]/10">
                          <Users className="w-3.5 h-3.5 text-[#65D6C8]" />
                        </div>
                        <span className="font-medium">{activeChapterData.members} members</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#FDFDFB]/60">
                        <div className="p-1.5 rounded-md bg-[#7A6FF0]/10">
                          <Calendar className="w-3.5 h-3.5 text-[#7A6FF0]" />
                        </div>
                        <span className="font-medium">{activeChapterData.upcomingEvents} events</span>
                      </div>
                    </div>

                    {/* CTA button - matching Events modal style */}
                    <motion.button
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-semibold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                      style={{
                        boxShadow: "0 4px 20px rgba(101, 214, 200, 0.3)"
                      }}
                    >
                      <span>Visit Chapter</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>

                    {/* Tooltip arrow */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#040619]/98 border-r border-b border-[#65D6C8]/40 rotate-45" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Global CTA - Aurora gradient matching Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-10 py-5 rounded-full bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-semibold text-lg inline-flex items-center gap-3 overflow-hidden"
            style={{
              boxShadow: "0 0 40px rgba(101, 214, 200, 0.4), 0 10px 30px rgba(0, 0, 0, 0.3)"
            }}
          >
            {/* Breathing glow effect */}
            <motion.div
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.15, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 -m-1 bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] rounded-full blur-xl opacity-50"
            />
            
            {/* Button content */}
            <span className="relative z-10">Explore All Chapters</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Atmospheric aurora particles - subtle floating dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 10 + i * 0.7,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut"
            }}
            style={{
              position: "absolute",
              left: `${8 + i * 6}%`,
              top: `${15 + (i % 4) * 20}%`
            }}
            className="w-1 h-1 rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] blur-sm"
          />
        ))}
      </div>
    </section>
  );
}