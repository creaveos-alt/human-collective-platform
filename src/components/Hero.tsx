"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import auroraCrystal from "figma:asset/aaf705a4da4e268e88fcd37c884f07d61d072e97.png";

export function Hero() {
  return (
    <div className="relative bg-[#040619]">
      {/* Hero Section */}
      <HeroSection />

      {/* Impact Metrics Wall */}
      <ImpactMetricsSection />

      {/* Three Pillars Section */}
      <ThreePillarsSection />

      {/* Chapters Preview Section */}
      <ChaptersPreviewSection />

      {/* How We Build Together */}
      <HowWeBuildSection />

      {/* Events Preview */}
      <EventsPreviewSection />

      {/* Builders Preview */}
      <BuildersPreviewSection />
    </div>
  );
}

// Hero Section with Circular Acheulean Mark
function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Horizontal aurora gradients drifting (Violet → Teal) */}
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
        animate={{
          x: ["100%", "-100%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#65D6C8]/10 to-transparent blur-3xl"
      />

      {/* Central circular Acheulean mark container */}
      <motion.div
        style={{ y }}
        className="relative z-10 flex flex-col items-center mb-20"
      >
        {/* Circular container with rotational light motion */}
        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
          {/* Soft rotational light motion behind the form */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0"
          >
            {/* Aurora gradient ring rotating */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7A6FF0]/30 via-transparent to-[#65D6C8]/30 blur-2xl" />
          </motion.div>

          {/* Second counter-rotating light layer */}
          <motion.div
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-[#65D6C8]/20 via-transparent to-[#A8F0E4]/20 blur-3xl" />
          </motion.div>

          {/* Circular glow rings */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute inset-0 rounded-full border border-[#7A6FF0]/40 blur-sm"
          />

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.2 }}
            transition={{ duration: 2.5, delay: 0.7 }}
            className="absolute inset-0 rounded-full border border-[#65D6C8]/30 blur-md"
          />

          {/* Central Acheulean crystal mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="relative z-10"
          >
            {/* Gentle rotational parallax */}
            <motion.div
              animate={{
                rotateY: [0, 10, -10, 0],
                rotateZ: [0, 2, -2, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={auroraCrystal}
                alt="Acheulean Mark - Origin of Intelligence"
                className="w-[280px] h-[280px] object-contain"
                style={{
                  filter:
                    "brightness(1.3) saturate(1.2) drop-shadow(0 0 40px rgba(122,111,240,0.6)) drop-shadow(0 0 80px rgba(101,214,200,0.4))",
                }}
              />
            </motion.div>

            {/* Pulsing glow emanating from center */}
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/40 via-[#65D6C8]/40 to-[#A8F0E4]/40 rounded-full blur-3xl"
            />
          </motion.div>

          {/* Orbital particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background:
                  i % 3 === 0
                    ? "#7A6FF0"
                    : i % 3 === 1
                    ? "#65D6C8"
                    : "#A8F0E4",
                top: "50%",
                left: "50%",
              }}
              animate={{
                x: [
                  0,
                  Math.cos((i * 360) / 12) * 180,
                  Math.cos((i * 360) / 12 + 180) * 180,
                  0,
                ],
                y: [
                  0,
                  Math.sin((i * 360) / 12) * 180,
                  Math.sin((i * 360) / 12 + 180) * 180,
                  0,
                ],
                opacity: [0, 0.8, 0.8, 0],
                scale: [0, 1, 1, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Typography with subtle glow emphasis */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
        style={{ opacity }}
        className="relative z-10 text-center max-w-5xl px-6"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl text-[#FDFDFB] mb-6 leading-tight"
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
          Shaping Tomorrow, Collectively.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="text-xl md:text-2xl text-[#FDFDFB]/80 mb-4 leading-relaxed max-w-4xl mx-auto"
        >
          We are a growing network of thinkers, builders and learners who are
          cultivating the relationship between{" "}
          <span
            className="text-[#65D6C8]"
            style={{ textShadow: "0 0 20px rgba(101,214,200,0.4)" }}
          >
            humanity and intelligent systems
          </span>{" "}
          — creating a future that reflects the full spectrum of Collective
          intelligence, ensuring that no one is left behind.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="text-lg md:text-xl text-[#FDFDFB]/60 leading-relaxed max-w-3xl mx-auto"
        >
          From the Acheulean handaxe — humanity's first deliberate tool — to the
          frontiers of Artificial Intelligence, we honour the continuum of human
          thought while building systems of care, access and proportion.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#65D6C8]/40 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-[#65D6C8] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Aurora light layer - breathing background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040619] via-[#040619]/90 to-[#040619]" />
    </div>
  );
}

// Impact Metrics Wall
function ImpactMetricsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const metrics = [
    {
      number: "20K+",
      label: "Hours with AI Models",
      description:
        "Our Fellows and Members — in dialogue with intelligent systems, learning and shaping the future together.",
      delay: 0,
    },
    {
      number: "5K+",
      label: "Community Members",
      description:
        "A collective spanning continents, ages, and expertise — united by curiosity and care.",
      delay: 0.2,
    },
    {
      number: "28",
      label: "Global Chapters",
      description:
        "Local roots, global reach. Each chapter adapts the Collective's philosophy to its community's needs.",
      delay: 0.4,
    },
    {
      number: "300",
      label: "Workshops Hosted",
      description:
        "From grassroots AI literacy to systems design, we learn and teach in circles, not hierarchies.",
      delay: 0.6,
    },
    {
      number: "1M",
      label: "Lives Touched",
      description:
        "The ripple of intention — every person reached, every story told, every tool built adds to the continuum.",
      delay: 0.8,
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="relative py-32 overflow-hidden"
    >
      {/* Background depth layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040619] via-[#0a0a2e]/50 to-[#040619]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#65D6C8] text-sm uppercase tracking-widest mb-4">
            Every act of learning is a vote of dignity, a moment of
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#FDFDFB] leading-tight mb-6">
            light — reverence for the human continuum.
          </h2>
        </motion.div>

        {/* Top divider with shimmer */}
        <div className="relative w-full h-px mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[#65D6C8]/10" />
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

        {/* Metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={`metric-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: metric.delay, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Vertical divider on left (except first) */}
              {i > 0 && i < 5 && (
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-[#65D6C8]/10" />
              )}

              <div className="relative p-6">
                {/* Number with shimmer transition */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: metric.delay + 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-3"
                >
                  <motion.div
                    className="text-5xl md:text-6xl bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% 100%",
                    }}
                  >
                    {metric.number}
                  </motion.div>
                </motion.div>

                {/* Label */}
                <h3 className="text-[#FDFDFB] text-lg mb-3 uppercase tracking-wide">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-[#FDFDFB]/60 text-sm leading-relaxed">
                  {metric.description}
                </p>

                {/* Hover glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 rounded-lg blur-xl pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-[#FDFDFB]/50 text-sm max-w-4xl mx-auto"
        >
          These numbers represent real people — researchers, students, organizers,
          makers — each contributing their part to building a more just, intelligent
          future. The collective continues to grow, both in depth and scale.
        </motion.div>
      </div>

      {/* Subtle background aurora pulse */}
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

// Three Pillars Section
function ThreePillarsSection() {
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
      gradient: "from-[#7A6FF0]/60 to-[#65D6C8]/40",
      icon: "🧠",
    },
    {
      title: "Micro-Entrepreneurship",
      subtitle: "Economic Access & Dignity",
      description:
        "Supporting community-led ventures and local economies through AI-powered tools and training — ensuring the benefits of intelligent systems are distributed equitably across the continuum.",
      gradient: "from-[#65D6C8]/60 to-[#A8F0E4]/40",
      icon: "🌱",
    },
    {
      title: "Think Tank",
      subtitle: "Research & Policy Frameworks",
      description:
        "A research collective focused on human-centered AI governance, ethical frameworks, and the long-term implications of collective intelligence — shaping systems that reflect care, proportion, and shared wisdom.",
      gradient: "from-[#A8F0E4]/60 to-[#7A6FF0]/40",
      icon: "🔮",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="relative py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#FDFDFB] mb-6 leading-tight">
            The Three Pillars of
            <br />
            <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              the Collective
            </span>
          </h2>
          <p className="text-xl text-[#FDFDFB]/70 max-w-3xl mx-auto">
            Our work is structured around three interconnected programs — each
            designed to expand access, deepen understanding, and ensure the age of
            AI reflects collective human intelligence.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={`pillar-${i}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group cursor-pointer"
            >
              {/* Card container */}
              <div
                className={`relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br ${pillar.gradient} p-8 flex flex-col justify-between`}
              >
                {/* Background pattern */}
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

                {/* Gradient illumination on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#FDFDFB]/10 via-transparent to-transparent"
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-6xl mb-6">{pillar.icon}</div>

                  {/* Title */}
                  <h3 className="text-3xl text-[#FDFDFB] mb-2">
                    {pillar.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-[#FDFDFB]/80 text-lg mb-4">
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-[#FDFDFB]/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Learn more indicator */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="relative z-10 text-[#FDFDFB] text-sm flex items-center gap-2"
                >
                  <span>Learn more</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>

                {/* Border glow on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-2xl border-2 border-[#65D6C8] pointer-events-none"
                  style={{
                    boxShadow: "0 0 40px rgba(101,214,200,0.4)",
                  }}
                />

                {/* Hover glow beneath card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 0.6, scale: 1 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-[#7A6FF0] blur-2xl rounded-full pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background aurora layers */}
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

// Chapters Preview Section
function ChaptersPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const chapters = [
    {
      name: "New York",
      description:
        "A vibrant hub of innovation and collaboration, fostering a community of thinkers and builders.",
      delay: 0,
    },
    {
      name: "London",
      description:
        "A global center for AI research and development, driving forward the future of intelligent systems.",
      delay: 0.2,
    },
    {
      name: "Tokyo",
      description:
        "A leading edge in AI technology and education, shaping the future of collective intelligence.",
      delay: 0.4,
    },
    {
      name: "Berlin",
      description:
        "A hub for ethical AI and social innovation, promoting responsible and inclusive development.",
      delay: 0.6,
    },
    {
      name: "Sydney",
      description:
        "A diverse and dynamic community, exploring the intersection of AI and human values.",
      delay: 0.8,
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="relative py-32 overflow-hidden"
    >
      {/* Background depth layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040619] via-[#0a0a2e]/50 to-[#040619]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#FDFDFB] mb-6 leading-tight">
            Global Chapters
            <br />
            <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              Preview
            </span>
          </h2>
          <p className="text-xl text-[#FDFDFB]/70 max-w-3xl mx-auto">
            Our global chapters are hubs of innovation, collaboration, and
            community-driven initiatives — each adapting the Collective's philosophy
            to their unique contexts.
          </p>
        </motion.div>

        {/* Top divider with shimmer */}
        <div className="relative w-full h-px mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[#65D6C8]/10" />
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

        {/* Chapters grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {chapters.map((chapter, i) => (
            <motion.div
              key={`chapter-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: chapter.delay, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Vertical divider on left (except first) */}
              {i > 0 && i < 5 && (
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-[#65D6C8]/10" />
              )}

              <div className="relative p-6">
                {/* Name with shimmer transition */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: chapter.delay + 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-3"
                >
                  <motion.div
                    className="text-5xl md:text-6xl bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% 100%",
                    }}
                  >
                    {chapter.name}
                  </motion.div>
                </motion.div>

                {/* Description */}
                <p className="text-[#FDFDFB]/60 text-sm leading-relaxed">
                  {chapter.description}
                </p>

                {/* Hover glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 rounded-lg blur-xl pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-[#FDFDFB]/50 text-sm max-w-4xl mx-auto"
        >
          These chapters represent a diverse network of communities, each
          contributing to the global conversation on AI and collective intelligence.
          Join us in shaping the future.
        </motion.div>
      </div>

      {/* Subtle background aurora pulse */}
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

// How We Build Together
function HowWeBuildSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const steps = [
    {
      title: "Collaborate",
      description:
        "We bring together a diverse group of thinkers, builders, and learners to share knowledge and ideas.",
      delay: 0,
    },
    {
      title: "Learn",
      description:
        "Our programs provide foundational AI literacy and practical skills for individuals and communities.",
      delay: 0.2,
    },
    {
      title: "Build",
      description:
        "We support the development of AI-powered tools and systems that address real-world challenges.",
      delay: 0.4,
    },
    {
      title: "Innovate",
      description:
        "Through research and experimentation, we push the boundaries of what's possible with AI and collective intelligence.",
      delay: 0.6,
    },
    {
      title: "Impact",
      description:
        "Our work aims to create a more just, intelligent future for all, ensuring that no one is left behind.",
      delay: 0.8,
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="relative py-32 overflow-hidden"
    >
      {/* Background depth layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040619] via-[#0a0a2e]/50 to-[#040619]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#FDFDFB] mb-6 leading-tight">
            How We Build Together
            <br />
            <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              Preview
            </span>
          </h2>
          <p className="text-xl text-[#FDFDFB]/70 max-w-3xl mx-auto">
            Our approach to building a more intelligent future is rooted in
            collaboration, learning, and innovation — ensuring that our work is
            accessible, impactful, and reflective of collective human intelligence.
          </p>
        </motion.div>

        {/* Top divider with shimmer */}
        <div className="relative w-full h-px mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[#65D6C8]/10" />
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

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={`step-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: step.delay, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Vertical divider on left (except first) */}
              {i > 0 && i < 5 && (
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-[#65D6C8]/10" />
              )}

              <div className="relative p-6">
                {/* Title with shimmer transition */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: step.delay + 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-3"
                >
                  <motion.div
                    className="text-5xl md:text-6xl bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% 100%",
                    }}
                  >
                    {step.title}
                  </motion.div>
                </motion.div>

                {/* Description */}
                <p className="text-[#FDFDFB]/60 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Hover glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 rounded-lg blur-xl pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-[#FDFDFB]/50 text-sm max-w-4xl mx-auto"
        >
          Our collaborative approach ensures that our work is not only impactful but
          also reflective of the diverse perspectives and needs of our community.
          Join us in shaping the future.
        </motion.div>
      </div>

      {/* Subtle background aurora pulse */}
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

// Events Preview
function EventsPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const events = [
    {
      name: "AI Conference 2023",
      description:
        "A global event bringing together experts, researchers, and practitioners to discuss the latest in AI and its impact on society.",
      delay: 0,
    },
    {
      name: "Workshop on AI Ethics",
      description:
        "An interactive workshop exploring ethical considerations in AI development and deployment.",
      delay: 0.2,
    },
    {
      name: "Tech Meetup",
      description:
        "A monthly meetup for tech enthusiasts to share ideas, learn from each other, and collaborate on projects.",
      delay: 0.4,
    },
    {
      name: "AI Hackathon",
      description:
        "A collaborative event where participants work in teams to develop innovative AI solutions to real-world problems.",
      delay: 0.6,
    },
    {
      name: "Panel Discussion",
      description:
        "A panel discussion featuring industry leaders and experts on the future of AI and its role in shaping society.",
      delay: 0.8,
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="relative py-32 overflow-hidden"
    >
      {/* Background depth layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040619] via-[#0a0a2e]/50 to-[#040619]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#FDFDFB] mb-6 leading-tight">
            Upcoming Events
            <br />
            <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              Preview
            </span>
          </h2>
          <p className="text-xl text-[#FDFDFB]/70 max-w-3xl mx-auto">
            Stay informed about our upcoming events, workshops, and conferences —
            opportunities to learn, collaborate, and shape the future of AI and
            collective intelligence.
          </p>
        </motion.div>

        {/* Top divider with shimmer */}
        <div className="relative w-full h-px mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[#65D6C8]/10" />
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

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={`event-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: event.delay, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Vertical divider on left (except first) */}
              {i > 0 && i < 5 && (
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-[#65D6C8]/10" />
              )}

              <div className="relative p-6">
                {/* Name with shimmer transition */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: event.delay + 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-3"
                >
                  <motion.div
                    className="text-5xl md:text-6xl bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% 100%",
                    }}
                  >
                    {event.name}
                  </motion.div>
                </motion.div>

                {/* Description */}
                <p className="text-[#FDFDFB]/60 text-sm leading-relaxed">
                  {event.description}
                </p>

                {/* Hover glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 rounded-lg blur-xl pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-[#FDFDFB]/50 text-sm max-w-4xl mx-auto"
        >
          These events are opportunities to connect with like-minded individuals,
          learn from experts, and contribute to the global conversation on AI and
          collective intelligence. Join us in shaping the future.
        </motion.div>
      </div>

      {/* Subtle background aurora pulse */}
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

// Builders Preview
function BuildersPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const builders = [
    {
      name: "John Doe",
      description:
        "A software engineer with expertise in AI and machine learning, John is dedicated to building intelligent systems that benefit society.",
      delay: 0,
    },
    {
      name: "Jane Smith",
      description:
        "A researcher in AI ethics, Jane focuses on ensuring that AI development is responsible and inclusive.",
      delay: 0.2,
    },
    {
      name: "Alex Johnson",
      description:
        "A data scientist with a passion for AI, Alex is committed to using data to drive innovation and solve real-world problems.",
      delay: 0.4,
    },
    {
      name: "Emily Davis",
      description:
        "A tech entrepreneur, Emily is building AI-powered tools that address social challenges and promote collective intelligence.",
      delay: 0.6,
    },
    {
      name: "Michael Brown",
      description:
        "A community organizer, Michael is working to bring AI literacy and access to underserved communities.",
      delay: 0.8,
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="relative py-32 overflow-hidden"
    >
      {/* Background depth layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040619] via-[#0a0a2e]/50 to-[#040619]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#FDFDFB] mb-6 leading-tight">
            Meet the Builders
            <br />
            <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              Preview
            </span>
          </h2>
          <p className="text-xl text-[#FDFDFB]/70 max-w-3xl mx-auto">
            Our builders are a diverse group of experts, researchers, and
            practitioners — each contributing their unique skills and perspectives
            to the development of AI and collective intelligence.
          </p>
        </motion.div>

        {/* Top divider with shimmer */}
        <div className="relative w-full h-px mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[#65D6C8]/10" />
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

        {/* Builders grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {builders.map((builder, i) => (
            <motion.div
              key={`builder-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: builder.delay, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Vertical divider on left (except first) */}
              {i > 0 && i < 5 && (
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-[#65D6C8]/10" />
              )}

              <div className="relative p-6">
                {/* Name with shimmer transition */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: builder.delay + 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-3"
                >
                  <motion.div
                    className="text-5xl md:text-6xl bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% 100%",
                    }}
                  >
                    {builder.name}
                  </motion.div>
                </motion.div>

                {/* Description */}
                <p className="text-[#FDFDFB]/60 text-sm leading-relaxed">
                  {builder.description}
                </p>

                {/* Hover glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 rounded-lg blur-xl pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-[#FDFDFB]/50 text-sm max-w-4xl mx-auto"
        >
          These builders represent a diverse network of experts and practitioners,
          each contributing to the development of AI and collective intelligence.
          Join us in shaping the future.
        </motion.div>
      </div>

      {/* Subtle background aurora pulse */}
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