"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

export function Builders() {
  return (
    <div className="relative bg-[#040619]">
      <BuildersHeroSection />
      <BuildersGridSection />
      <JoinBuildersSection />
    </div>
  );
}

// Builders Hero
function BuildersHeroSection() {
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
          Builders of the Continuum
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
          The Continuum grows
          <br />
          <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
            through collaboration
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-xl md:text-2xl text-[#FDFDFB]/80 max-w-4xl mx-auto leading-relaxed"
        >
          Every builder — a bridge between human intention and intelligent systems.
        </motion.p>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#040619] via-[#040619]/90 to-[#040619]" />
    </div>
  );
}

// Builders Grid
function BuildersGridSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredBuilder, setHoveredBuilder] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const builders = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & Director",
      descriptor: "AI Ethics & Policy",
      gradient: "from-[#7A6FF0]/60 to-[#65D6C8]/40",
    },
    {
      name: "Marcus Williams",
      role: "Co-Founder",
      descriptor: "Systems Architecture",
      gradient: "from-[#65D6C8]/60 to-[#A8F0E4]/40",
    },
    {
      name: "Dr. Amara Okafor",
      role: "Research Fellow",
      descriptor: "Human-Centered AI",
      gradient: "from-[#A8F0E4]/60 to-[#7A6FF0]/40",
    },
    {
      name: "James Park",
      role: "Lead Developer",
      descriptor: "Open Source Tools",
      gradient: "from-[#7A6FF0]/60 to-[#A8F0E4]/40",
    },
    {
      name: "Dr. Sofia Rodriguez",
      role: "Senior Fellow",
      descriptor: "Economic Justice",
      gradient: "from-[#65D6C8]/60 to-[#7A6FF0]/40",
    },
    {
      name: "Kai Tanaka",
      role: "Design Lead",
      descriptor: "Interface & Experience",
      gradient: "from-[#A8F0E4]/60 to-[#65D6C8]/40",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Research Director",
      descriptor: "Collective Intelligence",
      gradient: "from-[#7A6FF0]/60 to-[#65D6C8]/40",
    },
    {
      name: "Alex Thompson",
      role: "Community Lead",
      descriptor: "Chapter Coordination",
      gradient: "from-[#65D6C8]/60 to-[#A8F0E4]/40",
    },
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
            Founders, Collaborators,
            <br />
            <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              Fellows
            </span>
          </h2>
          <p className="text-xl text-[#FDFDFB]/70 max-w-3xl mx-auto">
            Those who laid the first stones, those who build the bridges forward.
          </p>
        </motion.div>

        {/* Grid of builders */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {builders.map((builder, i) => (
            <motion.div
              key={`builder-${i}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.8 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredBuilder(i)}
              onMouseLeave={() => setHoveredBuilder(null)}
              whileHover={{ y: -8 }}
              className="relative group cursor-pointer"
            >
              {/* Portrait card */}
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                <div
                  className={`w-full h-full bg-gradient-to-br ${builder.gradient} flex items-center justify-center relative`}
                >
                  {/* Initials */}
                  <div className="text-6xl text-[#FDFDFB]/40">
                    {builder.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  {/* Aurora beam on hover */}
                  {hoveredBuilder === i && (
                    <motion.div
                      initial={{ y: "-100%" }}
                      animate={{ y: "100%" }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FDFDFB]/30 to-transparent"
                    />
                  )}

                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
                        backgroundSize: "30px 30px",
                      }}
                    />
                  </div>
                </div>

                {/* Border glow */}
                <motion.div
                  animate={{
                    opacity: hoveredBuilder === i ? 1 : 0.2,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 border-2 border-[#FDFDFB] rounded-lg pointer-events-none"
                />

                {/* Aqua edge glow on hover */}
                {hoveredBuilder === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-lg border-2 border-[#65D6C8]"
                    style={{
                      boxShadow: "0 0 30px rgba(101,214,200,0.5)",
                    }}
                  />
                )}
              </div>

              {/* Name and role */}
              <div>
                <h3 className="text-[#FDFDFB] text-lg mb-1">{builder.name}</h3>
                <p className="text-[#FDFDFB]/60 text-sm mb-1">{builder.role}</p>
                <p className="text-[#65D6C8] text-sm">{builder.descriptor}</p>
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

      <motion.div
        animate={{
          x: ["10%", "-10%", "10%"],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#65D6C8]/10 rounded-full blur-3xl"
      />
    </motion.section>
  );
}

// Join Builders
function JoinBuildersSection() {
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
            The Continuum is
            <br />
            <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              still being built
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-[#FDFDFB]/70 leading-relaxed mb-12">
            Add your story. Shape the next chapter of collective intelligence.
          </p>

          <motion.a
            href="#become-builder"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-12 py-5 border-2 border-[#7A6FF0] rounded-full text-[#FDFDFB] text-lg hover:bg-[#7A6FF0]/10 transition-all"
          >
            <span>Become a Builder</span>
            <span>→</span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-[#FDFDFB]/60 text-sm"
          >
            <div>Researchers Welcome</div>
            <div>•</div>
            <div>Designers Welcome</div>
            <div>•</div>
            <div>Community Organizers Welcome</div>
          </motion.div>
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
