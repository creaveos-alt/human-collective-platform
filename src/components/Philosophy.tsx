"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import auroraCrystal from "figma:asset/aaf705a4da4e268e88fcd37c884f07d61d072e97.png";

export function Philosophy() {
  return (
    <div className="relative bg-[#040619]">
      {/* Hero Introduction */}
      <PhilosophyHeroSection />

      {/* Core Principles */}
      <CorePrinciplesSection />

      {/* The Continuum Narrative */}
      <ContinuumNarrativeSection />

      {/* Foundation Values */}
      <FoundationValuesSection />

      {/* Closing Vision */}
      <ClosingVisionSection />
    </div>
  );
}

// Philosophy Hero Section
function PhilosophyHeroSection() {
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
      {/* Horizontal aurora gradients drifting */}
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

      {/* Acheulean silhouette motif */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <motion.img
          src={auroraCrystal}
          alt="Origin symbol"
          className="w-[800px] h-[800px] object-contain"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
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
          Our Philosophy
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
          style={{
            animation: "glow 3s ease-in-out infinite",
          }}
        >
          The Continuum of
          <br />
          <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
            Human Intelligence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-xl md:text-2xl text-[#FDFDFB]/80 max-w-4xl mx-auto leading-relaxed"
        >
          From the first Acheulean handaxe to the age of artificial intelligence —
          we believe progress is not linear, but a continuum of collective human
          thought, intention, and care.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
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

      <div className="absolute inset-0 bg-gradient-to-b from-[#040619] via-[#040619]/90 to-[#040619]" />
    </div>
  );
}

// Core Principles Section
function CorePrinciplesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const principles = [
    {
      title: "Access",
      description:
        "Everyone deserves access to the tools and knowledge that shape our collective future. We build systems that open doors, not close them.",
      delay: 0,
    },
    {
      title: "Proportion",
      description:
        "Technology must serve humanity at human scale. We design for balance, not domination — ensuring AI amplifies human wisdom rather than replacing it.",
      delay: 0.2,
    },
    {
      title: "Care",
      description:
        "Every line of code, every framework, every model we build must reflect deep care for the people it serves and the communities it touches.",
      delay: 0.4,
    },
    {
      title: "Dignity",
      description:
        "Human dignity is non-negotiable. Our work ensures that intelligent systems honor the inherent worth of every individual.",
      delay: 0.6,
    },
    {
      title: "Continuity",
      description:
        "We are part of an ancient continuum of human thought. From stone tools to neural networks, we honor the past while building the future.",
      delay: 0.8,
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
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#FDFDFB] mb-6 leading-tight">
            Core Principles
            <br />
            <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              That Guide Us
            </span>
          </h2>
        </motion.div>

        {/* Divider with shimmer */}
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

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {principles.map((principle, i) => (
            <motion.div
              key={`principle-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: principle.delay, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {i > 0 && i < 5 && (
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-[#65D6C8]/10" />
              )}

              <div className="relative p-6">
                <motion.h3
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: principle.delay + 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent mb-4"
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
                  {principle.title}
                </motion.h3>

                <p className="text-[#FDFDFB]/70 leading-relaxed">
                  {principle.description}
                </p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 rounded-lg blur-xl pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background aurora pulse */}
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

// The Continuum Narrative
function ContinuumNarrativeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="relative py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Narrative block 1 */}
          <div className="relative">
            <motion.div
              animate={{
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-20 top-0 w-16 h-16 bg-gradient-to-br from-[#7A6FF0]/30 to-[#65D6C8]/30 rounded-full blur-2xl"
            />

            <h3 className="text-3xl md:text-4xl text-[#FDFDFB] mb-4 leading-tight">
              1.7 million years ago, our ancestors shaped the first{" "}
              <span className="text-[#65D6C8]">Acheulean handaxe</span>.
            </h3>
            <p className="text-xl text-[#FDFDFB]/70 leading-relaxed">
              It was more than a tool — it was the first deliberate act of
              intelligence, the moment when thought became form. That handaxe
              represents the origin of intentional human creativity, the seed of
              everything that followed.
            </p>
          </div>

          {/* Narrative block 2 */}
          <div className="relative">
            <motion.div
              animate={{
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute -right-20 top-0 w-16 h-16 bg-gradient-to-br from-[#65D6C8]/30 to-[#A8F0E4]/30 rounded-full blur-2xl"
            />

            <h3 className="text-3xl md:text-4xl text-[#FDFDFB] mb-4 leading-tight">
              Today, we stand at the threshold of{" "}
              <span className="text-[#7A6FF0]">artificial intelligence</span>.
            </h3>
            <p className="text-xl text-[#FDFDFB]/70 leading-relaxed">
              AI is not a rupture from our past, but a continuation of the same
              human impulse — to build, to learn, to extend our capacity for
              understanding. The continuum that began with stone tools now reaches
              into neural networks, data systems, and collective intelligence.
            </p>
          </div>

          {/* Narrative block 3 */}
          <div className="relative">
            <motion.div
              animate={{
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4,
              }}
              className="absolute -left-20 bottom-0 w-16 h-16 bg-gradient-to-br from-[#A8F0E4]/30 to-[#7A6FF0]/30 rounded-full blur-2xl"
            />

            <h3 className="text-3xl md:text-4xl text-[#FDFDFB] mb-4 leading-tight">
              The question is not whether AI will shape our future —
              <br />
              but <span className="text-[#A8F0E4]">who gets to shape AI</span>.
            </h3>
            <p className="text-xl text-[#FDFDFB]/70 leading-relaxed">
              We believe the answer must be: everyone. Collective intelligence
              cannot be built by a few, for the few. It must be accessible,
              equitable, and rooted in care for all of humanity. This is the work
              of the Human + AI Collective.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Animated light gradients behind text */}
      <motion.div
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7A6FF0]/5 to-transparent blur-3xl"
      />
    </motion.section>
  );
}

// Foundation Values
function FoundationValuesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const values = [
    {
      number: "01",
      title: "Open Access",
      description:
        "We build tools, frameworks, and educational resources that are freely accessible to all, ensuring that knowledge is never gatekept.",
    },
    {
      number: "02",
      title: "Human Scale",
      description:
        "Our systems are designed to serve people at human scale — not to overwhelm, surveil, or control, but to amplify human capacity with dignity.",
    },
    {
      number: "03",
      title: "Collective Wisdom",
      description:
        "We believe the best solutions emerge from diverse voices working together — researchers, communities, artists, and builders united in purpose.",
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
            Our Foundation
            <br />
            <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              Values
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, i) => (
            <motion.div
              key={`value-${i}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5">
                <div className="text-6xl text-[#65D6C8]/30 mb-4">
                  {value.number}
                </div>
                <h3 className="text-2xl text-[#FDFDFB] mb-4">{value.title}</h3>
                <p className="text-[#FDFDFB]/70 leading-relaxed">
                  {value.description}
                </p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-2xl border-2 border-[#65D6C8] pointer-events-none"
                  style={{
                    boxShadow: "0 0 40px rgba(101,214,200,0.3)",
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

// Closing Vision
function ClosingVisionSection() {
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
            The continuum continues —
            <br />
            <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              and you are part of it.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-[#FDFDFB]/70 leading-relaxed mb-12">
            Every tool we build, every person we teach, every system we design —
            these are extensions of the same ancient impulse that shaped the first
            handaxe. Join us in honoring that legacy while building a future worthy
            of it.
          </p>

          <motion.a
            href="#programs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-12 py-5 border-2 border-[#65D6C8] rounded-full text-[#FDFDFB] text-lg hover:bg-[#65D6C8]/10 transition-all"
          >
            <span>Explore Our Programs</span>
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
