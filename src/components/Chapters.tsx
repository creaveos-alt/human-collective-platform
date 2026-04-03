"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { MapPin } from "lucide-react";

export function Chapters() {
  return (
    <div className="relative bg-[#040619]">
      <ChaptersHeroSection />
      <GlobalNetworkSection />
      <FeaturedChaptersSection />
      <StartChapterSection />
    </div>
  );
}

// Chapters Hero
function ChaptersHeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7A6FF0]/10 to-transparent blur-3xl"
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center max-w-5xl px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[#65D6C8] text-sm uppercase tracking-widest mb-6"
        >
          Global Chapters
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl text-[#FDFDFB] mb-8 leading-tight"
          animate={{
            textShadow: [
              "0 0 20px rgba(122,111,240,0.2)",
              "0 0 30px rgba(122,111,240,0.4)",
              "0 0 20px rgba(122,111,240,0.2)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Local Roots,
          <br />
          <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
            Global Reach
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-xl md:text-2xl text-[#FDFDFB]/80 max-w-4xl mx-auto leading-relaxed"
        >
          28 chapters across six continents — each one adapting the Collective's
          philosophy to their community's unique context, needs, and aspirations.
        </motion.p>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#040619] via-[#040619]/90 to-[#040619]" />
    </div>
  );
}

// Global Network
function GlobalNetworkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredCity, setHoveredCity] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const cities = [
    { name: "New York", region: "North America", x: 25, y: 35, members: 450 },
    { name: "London", region: "Europe", x: 50, y: 30, members: 380 },
    { name: "Tokyo", region: "Asia", x: 85, y: 38, members: 520 },
    { name: "São Paulo", region: "South America", x: 35, y: 65, members: 290 },
    { name: "Nairobi", region: "Africa", x: 55, y: 60, members: 310 },
    { name: "Sydney", region: "Oceania", x: 90, y: 70, members: 240 },
    { name: "Toronto", region: "North America", x: 22, y: 32, members: 400 },
    { name: "Berlin", region: "Europe", x: 52, y: 28, members: 350 },
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#040619] via-[#0a0a2e]/50 to-[#040619]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#FDFDFB] mb-6 leading-tight">
            The Living
            <br />
            <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              Network
            </span>
          </h2>
        </motion.div>

        {/* World map visualization */}
        <div className="relative h-[600px] rounded-2xl overflow-hidden bg-[#040619]/50 border border-[#65D6C8]/20 mb-16">
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
            <motion.path
              d="M 10,30 Q 30,25 45,30 T 65,35 L 70,45 Q 60,50 45,48 T 20,45 Z"
              stroke="#65D6C8"
              strokeWidth="0.3"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            />
          </svg>

          {/* City nodes */}
          {cities.map((city, i) => (
            <motion.div
              key={`city-${i}`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCity(i)}
              onMouseLeave={() => setHoveredCity(null)}
              className="absolute cursor-pointer"
              style={{
                left: `${city.x}%`,
                top: `${city.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.div
                animate={{
                  scale: hoveredCity === i ? [1, 1.3, 1] : 1,
                }}
                transition={{
                  duration: 2,
                  repeat: hoveredCity === i ? Infinity : 0,
                }}
                className="relative"
              >
                <div
                  className="w-3 h-3 rounded-full bg-[#65D6C8]"
                  style={{
                    boxShadow: "0 0 20px #65D6C8",
                  }}
                />

                <motion.div
                  animate={{
                    scale: [1, 2.5, 1],
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="absolute inset-0 rounded-full border border-[#65D6C8]"
                />
              </motion.div>

              {hoveredCity === i && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#040619]/95 backdrop-blur-md border border-[#65D6C8] rounded-lg p-3 whitespace-nowrap z-20"
                  style={{
                    boxShadow: "0 8px 32px rgba(101,214,200,0.3)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-3 h-3 text-[#65D6C8]" />
                    <h4 className="text-[#FDFDFB] text-sm">{city.name}</h4>
                  </div>
                  <p className="text-[#FDFDFB]/60 text-xs">{city.region}</p>
                  <p className="text-[#65D6C8] text-xs mt-1">{city.members} members</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: "28", label: "Active Chapters" },
            { number: "5,000+", label: "Community Members" },
            { number: "6", label: "Continents" },
            { number: "15", label: "Languages Spoken" },
          ].map((stat, i) => (
            <motion.div
              key={`stat-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-[#FDFDFB]/60 uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        animate={{
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#7A6FF0]/20 to-[#65D6C8]/20 rounded-full blur-3xl pointer-events-none"
      />
    </motion.section>
  );
}

// Featured Chapters
function FeaturedChaptersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const featured = [
    {
      city: "Toronto",
      description:
        "The founding chapter, where the Collective first took shape. Toronto focuses on AI literacy workshops and micro-entrepreneurship programs.",
      gradient: "from-[#7A6FF0]/60 to-[#65D6C8]/40",
      initiatives: "12 monthly workshops, 45 businesses supported",
    },
    {
      city: "Nairobi",
      description:
        "Building AI capacity across East Africa through community-led education and sustainable tech ventures.",
      gradient: "from-[#65D6C8]/60 to-[#A8F0E4]/40",
      initiatives: "8 local programs, 200+ students trained",
    },
    {
      city: "Berlin",
      description:
        "A research-focused chapter advancing ethical AI frameworks and cross-sector policy collaboration.",
      gradient: "from-[#A8F0E4]/60 to-[#7A6FF0]/40",
      initiatives: "5 research papers, 30 policy consultations",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="relative py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#FDFDFB] mb-6 leading-tight">
            Featured
            <br />
            <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              Chapter Stories
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((chapter, i) => (
            <motion.div
              key={`featured-${i}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative group cursor-pointer"
            >
              <div
                className={`relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br ${chapter.gradient} p-8 flex flex-col justify-between`}
              >
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <h3 className="text-4xl text-[#FDFDFB] mb-4">{chapter.city}</h3>
                  <p className="text-[#FDFDFB]/80 leading-relaxed mb-4">
                    {chapter.description}
                  </p>
                  <p className="text-[#FDFDFB]/60 text-sm">{chapter.initiatives}</p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-2xl border-2 border-[#65D6C8] pointer-events-none"
                  style={{
                    boxShadow: "0 0 40px rgba(101,214,200,0.4)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        animate={{
          x: ["-10%", "10%", "-10%"],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-0 w-96 h-96 bg-[#7A6FF0]/10 rounded-full blur-3xl"
      />
    </motion.section>
  );
}

// Start a Chapter
function StartChapterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="relative py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl text-[#FDFDFB] mb-8 leading-tight">
            Start a chapter
            <br />
            <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              in your city
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-[#FDFDFB]/70 leading-relaxed mb-12">
            Bring the Collective's philosophy to your community. We provide
            resources, training, and ongoing support to help you build local
            capacity and collective intelligence.
          </p>

          <motion.a
            href="#start-chapter"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-12 py-5 border-2 border-[#65D6C8] rounded-full text-[#FDFDFB] text-lg hover:bg-[#65D6C8]/10 transition-all"
          >
            <span>Apply to Start a Chapter</span>
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#65D6C8]/10 to-transparent blur-3xl"
      />
    </motion.section>
  );
}
