"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Users } from "lucide-react";
import worldMap from "../assets/world-map.png";

interface Chapter {
  city: string;
  country: string;
  members: number;
  coordinates: { x: string; y: string };
}

const chapters: Chapter[] = [
  { city: "San Francisco", country: "USA", members: 450, coordinates: { x: "15%", y: "35%" } },
  { city: "New York", country: "USA", members: 380, coordinates: { x: "25%", y: "37%" } },
  { city: "London", country: "UK", members: 320, coordinates: { x: "48%", y: "32%" } },
  { city: "Berlin", country: "Germany", members: 280, coordinates: { x: "51%", y: "33%" } },
  { city: "Paris", country: "France", members: 265, coordinates: { x: "49%", y: "34%" } },
  { city: "Tokyo", country: "Japan", members: 410, coordinates: { x: "82%", y: "38%" } },
  { city: "Sydney", country: "Australia", members: 240, coordinates: { x: "84%", y: "75%" } },
  { city: "São Paulo", country: "Brazil", members: 290, coordinates: { x: "30%", y: "70%" } },
  { city: "Mumbai", country: "India", members: 360, coordinates: { x: "68%", y: "50%" } },
  { city: "Toronto", country: "Canada", members: 310, coordinates: { x: "22%", y: "34%" } },
  { city: "Singapore", country: "Singapore", members: 270, coordinates: { x: "76%", y: "55%" } },
  { city: "Dubai", country: "UAE", members: 195, coordinates: { x: "58%", y: "45%" } },
  { city: "Mexico City", country: "Mexico", members: 225, coordinates: { x: "18%", y: "47%" } },
  { city: "Nairobi", country: "Kenya", members: 180, coordinates: { x: "54%", y: "58%" } },
  { city: "Seoul", country: "South Korea", members: 340, coordinates: { x: "81%", y: "37%" } },
  { city: "Amsterdam", country: "Netherlands", members: 210, coordinates: { x: "50%", y: "31%" } },
  { city: "Barcelona", country: "Spain", members: 190, coordinates: { x: "49%", y: "36%" } },
  { city: "Tel Aviv", country: "Israel", members: 165, coordinates: { x: "54%", y: "42%" } },
  { city: "Bangkok", country: "Thailand", members: 205, coordinates: { x: "74%", y: "51%" } },
  { city: "Lagos", country: "Nigeria", members: 155, coordinates: { x: "50%", y: "54%" } },
];

export function GlobalNetworkMap({ preview = false }: { preview?: boolean }) {
  const [hoveredChapter, setHoveredChapter] = useState<Chapter | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  const displayedChapters = preview ? chapters.slice(0, 14) : chapters;

  return (
    <div className="relative">
      {/* Map Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative aspect-[2/1] rounded-2xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#040619] to-[#0D1226] overflow-hidden"
      >
        {/* Real world map background */}
        <div className="absolute inset-0 flex items-center justify-center px-8 md:px-12">
          <img
            src={worldMap}
            alt="World map"
            className="w-full max-w-[1200px] h-auto object-contain opacity-28 select-none pointer-events-none"
          />
        </div>

        {/* Connection lines between chapters */}
        <svg className="absolute inset-0 pointer-events-none opacity-8">
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#65D6C8" />
              <stop offset="100%" stopColor="#7A6FF0" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7A6FF0" />
              <stop offset="100%" stopColor="#A8F0E4" />
            </linearGradient>
          </defs>
          
          {/* Draw connection lines */}
          <motion.path
            d="M 150 180 Q 400 100 820 190"
            stroke="url(#lineGradient1)"
            strokeWidth="0.8"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M 250 185 Q 500 250 810 185"
            stroke="url(#lineGradient2)"
            strokeWidth="0.8"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
          />
          <motion.path
            d="M 300 350 Q 600 400 840 375"
            stroke="url(#lineGradient1)"
            strokeWidth="0.8"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>

        {/* Ambient glow pulses */}
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-[#65D6C8]/10 to-[#7A6FF0]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-[#7A6FF0]/10 to-[#A8F0E4]/10 rounded-full blur-3xl"
        />

        {/* Chapter nodes */}
        {displayedChapters.map((chapter, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onHoverStart={() => setHoveredChapter(chapter)}
            onHoverEnd={() => setHoveredChapter(null)}
            onClick={() => setSelectedChapter(selectedChapter?.city === chapter.city ? null : chapter)}
            className="absolute cursor-pointer group"
            style={{ left: chapter.coordinates.x, top: chapter.coordinates.y }}
          >
            <div className="relative">
              {/* Pulsing glow */}
              <motion.div
                animate={{
                  scale: [1, 1.22, 1],
                  opacity: [0.14, 0.26, 0.14]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
                className="absolute inset-0 -m-1 bg-[#65D6C8]/55 rounded-full blur-[4px]"
              />
              
              {/* Node dot */}
              <motion.div
                whileHover={{ scale: 1.5 }}
                className="relative w-3 h-3 rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] shadow-[0_0_4px_rgba(101,214,200,0.22)] ring-1 ring-[#A8F0E4]/12"
              />

              {/* Hover tooltip */}
              {(hoveredChapter?.city === chapter.city || selectedChapter?.city === chapter.city) && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 pointer-events-none z-50 whitespace-nowrap"
                >
                  <div className="relative bg-[#0D1226]/98 backdrop-blur-xl border border-[#65D6C8]/40 rounded-xl p-4 shadow-2xl">
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-3 h-3 rotate-45 bg-[#0D1226] border-r border-b border-[#65D6C8]/40" />
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-[#65D6C8]" />
                      </div>
                      <div>
                        <div className="text-base text-[#FDFDFB] font-medium mb-1">
                          {chapter.city}
                        </div>
                        <div className="text-sm text-[#FDFDFB]/60 mb-2">
                          {chapter.country}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#65D6C8]">
                          <Users className="w-4 h-4" />
                          {chapter.members} members
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats below map */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-6 grid grid-cols-3 gap-5"
      >
        <div className="text-center px-4 py-3 rounded-xl border border-[#65D6C8]/8 bg-[#FDFDFB]/[0.02] backdrop-blur-sm">
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] bg-clip-text text-transparent mb-1">
            {chapters.length}
          </div>
          <div className="text-sm text-[#FDFDFB]/60">Active Chapters</div>
        </div>
        <div className="text-center px-4 py-3 rounded-xl border border-[#65D6C8]/8 bg-[#FDFDFB]/[0.02] backdrop-blur-sm">
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] bg-clip-text text-transparent mb-1">
            20
          </div>
          <div className="text-sm text-[#FDFDFB]/60">Countries</div>
        </div>
        <div className="text-center px-4 py-3 rounded-xl border border-[#65D6C8]/8 bg-[#FDFDFB]/[0.02] backdrop-blur-sm">
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] bg-clip-text text-transparent mb-1">
            5,000+
          </div>
          <div className="text-sm text-[#FDFDFB]/60">Global Members</div>
        </div>
      </motion.div>

      {!preview && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-center text-sm text-[#FDFDFB]/50"
        >
          Click on a node to see chapter details • Hover to explore the network
        </motion.div>
      )}
    </div>
  );
}
