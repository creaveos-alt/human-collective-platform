"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Programs() {
  return (
    <div className="relative bg-[#040619]">
      {/* Hero */}
      <ProgramsHeroSection />

      {/* Three Programs Detail */}
      <ThreeProgramsSection />

      {/* Impact Stories */}
      <ImpactStoriesSection />

      {/* Join Programs CTA */}
      <JoinProgramsSection />
    </div>
  );
}

// Programs Hero
function ProgramsHeroSection() {
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
          Our Programs
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
          Building Access,
          <br />
          <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
            Dignity, and Scale
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-xl md:text-2xl text-[#FDFDFB]/80 max-w-4xl mx-auto leading-relaxed"
        >
          Our three core programs provide foundational AI literacy, economic
          opportunity, and research-driven frameworks — ensuring everyone can
          participate in shaping the age of collective intelligence.
        </motion.p>
      </motion.div>

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

// Three Programs Detail
function ThreeProgramsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const programs = [
    {
      icon: "🧠",
      title: "AI Lunchbox",
      subtitle: "Foundational AI Literacy for All",
      gradient: "from-[#7A6FF0]/60 to-[#65D6C8]/40",
      description:
        "A collaborative learning program designed to demystify AI systems and provide practical, accessible knowledge.",
      features: [
        "Weekly community workshops",
        "Self-paced online curriculum",
        "Hands-on AI tool exploration",
        "Certification pathways",
      ],
      stats: { number: "5K+", label: "Learners Trained" },
    },
    {
      icon: "🌱",
      title: "Micro-Entrepreneurship",
      subtitle: "Economic Access & Dignity",
      gradient: "from-[#65D6C8]/60 to-[#A8F0E4]/40",
      description:
        "Supporting community-led ventures and local economies through AI-powered tools and training.",
      features: [
        "AI-powered business tools",
        "Mentorship & funding support",
        "Local chapter networks",
        "Revenue-sharing models",
      ],
      stats: { number: "300+", label: "Ventures Launched" },
    },
    {
      icon: "🔮",
      title: "Think Tank",
      subtitle: "Research & Policy Frameworks",
      gradient: "from-[#A8F0E4]/60 to-[#7A6FF0]/40",
      description:
        "A research collective focused on human-centered AI governance, ethical frameworks, and long-term implications.",
      features: [
        "Open research publications",
        "Policy framework development",
        "Cross-sector collaboration",
        "Fellows program",
      ],
      stats: { number: "50+", label: "Research Papers" },
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="relative py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="space-y-32">
          {programs.map((program, i) => (
            <motion.div
              key={`program-${i}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content side */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="text-6xl mb-6">{program.icon}</div>

                <h3 className="text-4xl md:text-5xl text-[#FDFDFB] mb-3">
                  {program.title}
                </h3>

                <p className="text-xl text-[#65D6C8] mb-6">{program.subtitle}</p>

                <p className="text-lg text-[#FDFDFB]/70 mb-8 leading-relaxed">
                  {program.description}
                </p>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  {program.features.map((feature, j) => (
                    <motion.div
                      key={`feature-${j}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + j * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#65D6C8]" />
                      <span className="text-[#FDFDFB]/80">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-block"
                >
                  <div className="text-5xl bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent mb-2">
                    {program.stats.number}
                  </div>
                  <div className="text-[#FDFDFB]/60 text-sm uppercase tracking-wider">
                    {program.stats.label}
                  </div>
                </motion.div>
              </div>

              {/* Visual side */}
              <motion.div
                whileHover={{ scale: 1.02, y: -8 }}
                className={`relative ${i % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div
                  className={`relative h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br ${program.gradient} p-12 flex items-center justify-center`}
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

                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 text-[#FDFDFB]/80 text-9xl"
                  >
                    {program.icon}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 rounded-2xl border-2 border-[#65D6C8] pointer-events-none"
                    style={{
                      boxShadow: "0 0 40px rgba(101,214,200,0.4)",
                    }}
                  />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 0.6, scale: 1 }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-[#7A6FF0] blur-2xl rounded-full pointer-events-none"
                  />
                </div>
              </motion.div>
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

// Impact Stories
function ImpactStoriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const stories = [
    {
      quote:
        "AI Lunchbox gave me the confidence to integrate AI into my small business. Now I'm serving more customers and creating jobs in my community.",
      author: "Maria Santos",
      role: "Micro-Entrepreneur, São Paulo",
      program: "AI Lunchbox → Micro-Entrepreneurship",
    },
    {
      quote:
        "Through the Think Tank fellowship, I've been able to contribute to policy frameworks that ensure AI development in my country prioritizes human dignity.",
      author: "Dr. Kwame Osei",
      role: "Research Fellow, Accra",
      program: "Think Tank",
    },
    {
      quote:
        "I came to AI Lunchbox knowing nothing about technology. Six months later, I'm teaching workshops in my neighborhood and helping others learn.",
      author: "Priya Sharma",
      role: "Community Educator, Mumbai",
      program: "AI Lunchbox",
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
            Stories of
            <br />
            <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              Impact & Change
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={`story-${i}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 h-full flex flex-col">
                <div className="text-6xl text-[#65D6C8]/20 mb-4">"</div>

                <p className="text-lg text-[#FDFDFB]/80 leading-relaxed mb-6 flex-grow">
                  {story.quote}
                </p>

                <div className="border-t border-[#65D6C8]/10 pt-4">
                  <div className="text-[#FDFDFB] mb-1">{story.author}</div>
                  <div className="text-[#FDFDFB]/60 text-sm mb-2">
                    {story.role}
                  </div>
                  <div className="text-[#65D6C8] text-xs uppercase tracking-wider">
                    {story.program}
                  </div>
                </div>

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

// Join Programs CTA
function JoinProgramsSection() {
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
            Ready to join
            <br />
            <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              the continuum?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-[#FDFDFB]/70 leading-relaxed mb-12">
            Whether you're looking to learn, build, or research — our programs
            provide pathways for everyone to participate in shaping the future of
            collective intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#ai-lunchbox"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-[#7A6FF0] rounded-full text-[#FDFDFB] text-lg hover:shadow-xl hover:shadow-[#7A6FF0]/40 transition-all"
            >
              Start Learning
            </motion.a>

            <motion.a
              href="#apply"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-[#65D6C8] rounded-full text-[#FDFDFB] text-lg hover:bg-[#65D6C8]/10 transition-all"
            >
              Apply to Fellowship
            </motion.a>
          </div>
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
