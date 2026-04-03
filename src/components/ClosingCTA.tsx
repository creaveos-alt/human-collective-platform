"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import auroraCrystal from "figma:asset/aaf705a4da4e268e88fcd37c884f07d61d072e97.png";

export function ClosingCTA() {
  return (
    <div className="relative">
      <InvitationSection />
      <ContinuumFootnote />
      <VisualClosureSection />
      <Footer />
    </div>
  );
}

// The Invitation
function InvitationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040619] via-[#7A6FF0]/30 to-[#A8F0E4]/60" />

      {/* Horizontal aurora sweep */}
      <motion.div
        animate={{
          x: ["100%", "-100%"],
          opacity: [0, 0.4, 0.6, 0.4, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 2,
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#65D6C8]/30 to-transparent blur-2xl"
      />

      {/* Acheulean Handaxe silhouette */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05]">
        <img
          src={auroraCrystal}
          alt="Origin meeting horizon"
          className="w-[1000px] h-[1000px] object-contain"
          style={{
            filter: "brightness(1.5) contrast(0.5)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Headline */}
          <motion.h1
            className="text-6xl md:text-7xl lg:text-9xl text-[#FDFDFB] mb-8 leading-tight"
            animate={{
              textShadow: [
                "0 0 20px rgba(122,111,240,0.3)",
                "0 0 40px rgba(122,111,240,0.5)",
                "0 0 20px rgba(122,111,240,0.3)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Grow with
            <br />
            <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              the Collective.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-[#FDFDFB]/90 max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            Be part of a living system built on empathy, learning, and shared
            intelligence.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#join"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 px-16 py-6 border-3 border-[#FDFDFB] rounded-full text-[#FDFDFB] text-xl uppercase tracking-widest group relative overflow-hidden"
              style={{
                borderWidth: "3px",
              }}
            >
              {/* Button glow on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#65D6C8]/0 via-[#65D6C8]/20 to-[#65D6C8]/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <span className="relative z-10">Start Your Journey</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />

              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#65D6C8] opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                style={{
                  boxShadow: "0 0 40px rgba(101,214,200,0.6)",
                }}
              />
            </motion.a>
          </motion.div>

          {/* Supporting line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{ once: true }}
            className="mt-12 text-[#FDFDFB]/60 text-sm uppercase tracking-widest"
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span>Chapters</span>
              <span className="text-[#65D6C8]">·</span>
              <span>Programs</span>
              <span className="text-[#65D6C8]">·</span>
              <span>Builders</span>
              <span className="text-[#65D6C8]">·</span>
              <span>Stories</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// Continuum Footnote
function ContinuumFootnote() {
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
      className="relative py-24 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#A8F0E4]/40 via-[#A8F0E4]/60 to-[#FDFDFB]/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-[#7A6FF0]/40 to-transparent mb-12"
        />

        {/* Footnote text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[#040619]/60 text-sm leading-relaxed max-w-3xl mx-auto uppercase tracking-wider">
            From the first Acheulean handaxe to the age of intelligent systems —
            <br />
            the continuum continues.
          </p>
        </motion.div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-[#7A6FF0]/40 to-transparent mt-12"
        />
      </div>
    </motion.section>
  );
}

// Visual Closure
function VisualClosureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const backgroundWhiteness = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgba(168,240,228,0.8)", "rgba(253,253,251,0.95)", "rgba(253,253,251,1)"]
  );

  const markOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 1]);
  const markScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.9, 1, 1]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundColor: backgroundWhiteness }}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
        {/* The Collective mark */}
        <motion.div
          style={{ opacity: markOpacity, scale: markScale }}
          className="mb-12"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                className="mx-auto"
              >
                <motion.path
                  d="M 60 20 L 90 40 L 90 70 L 60 90 L 30 70 L 30 40 Z"
                  fill="none"
                  stroke="url(#logoGradient)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  style={{
                    filter: "drop-shadow(0 0 10px rgba(101,214,200,0.5))",
                  }}
                />

                <defs>
                  <linearGradient
                    id="logoGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#7A6FF0" />
                    <stop offset="50%" stopColor="#65D6C8" />
                    <stop offset="100%" stopColor="#A8F0E4" />
                  </linearGradient>
                </defs>
              </svg>

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-[#65D6C8] rounded-full blur-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <div className="text-2xl tracking-widest text-[#040619]/80 uppercase">
                The Collective
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          viewport={{ once: true }}
          className="text-[#040619]/70 text-lg tracking-wide mb-16"
        >
          <p>The Continuum Lives in Us.</p>
        </motion.div>
      </div>

      {/* Fade to pure white at bottom */}
      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0.7, 1], [0, 1]),
        }}
        className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-[#FDFDFB]"
      />
    </motion.section>
  );
}

// Footer
function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navigationLinks = [
    { label: "About", href: "#hero" },
    { label: "Programs", href: "#programs" },
    { label: "Chapters", href: "#chapters" },
    { label: "Builders", href: "#builders" },
    { label: "Stories", href: "#events" },
    { label: "Contact", href: "#closing" },
  ];

  const connectLinks = [
    { label: "hello@humanaicollective.org", href: "mailto:hello@humanaicollective.org" },
    { label: "LinkedIn", href: "#linkedin" },
    { label: "Medium", href: "#medium" },
    { label: "Newsletter", href: "#newsletter" },
  ];

  return (
    <footer className="relative bg-[#FDFDFB] pt-20 pb-16">
      {/* Top divider */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="w-full h-px bg-[#65D6C8]/10" />
      </div>

      {/* 3-column grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Column 1 - Logo Mark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="mb-4">
              <svg width="60" height="60" viewBox="0 0 120 120">
                <path
                  d="M 60 20 L 90 40 L 90 70 L 60 90 L 30 70 L 30 40 Z"
                  fill="none"
                  stroke="url(#footerLogoGradient)"
                  strokeWidth="2"
                  opacity="0.8"
                />
                <defs>
                  <linearGradient
                    id="footerLogoGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#7A6FF0" />
                    <stop offset="50%" stopColor="#65D6C8" />
                    <stop offset="100%" stopColor="#A8F0E4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <h3 className="text-[#040619] text-lg mb-1 text-center md:text-left">
              Human + AI Collective
            </h3>
            <p className="text-[#040619]/60 text-xs uppercase tracking-wider text-center md:text-left">
              Continuum of Human Intelligence
            </p>
          </motion.div>

          {/* Column 2 - Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-[#040619] text-sm mb-4 uppercase tracking-wider">
              Explore
            </h4>
            <nav className="flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="text-[#040619]/70 text-sm leading-relaxed relative group"
                >
                  <span className="relative">
                    {link.label}
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: hoveredLink === link.label ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 h-px bg-[#65D6C8] origin-left"
                    />
                  </span>
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Column 3 - Connect/Follow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-[#040619] text-sm mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <nav className="flex flex-col gap-3 mb-6">
              {connectLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="text-[#040619]/70 text-sm leading-relaxed relative group"
                >
                  <span className="relative">
                    {link.label}
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: hoveredLink === link.label ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 h-px bg-[#65D6C8] origin-left"
                    />
                  </span>
                </a>
              ))}
            </nav>

            <motion.a
              href="#join"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-2 border border-[#65D6C8]/50 rounded-full text-[#040619]/80 text-sm hover:border-[#65D6C8] hover:bg-[#65D6C8]/5 transition-all group relative"
            >
              <span>Join the Collective</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>

        {/* Closing line section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Divider */}
          <div className="relative w-full h-px bg-[#65D6C8]/10 mb-8 overflow-hidden">
            <motion.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 5,
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7A6FF0]/5 to-transparent w-1/3"
            />
          </div>

          {/* Copyright text */}
          <p
            className="text-center text-[#040619]/70 text-xs leading-relaxed"
            style={{ letterSpacing: "0.05em" }}
          >
            © 2025 Human + AI Collective. Built with Care, Curiosity, and
            Continuum.
          </p>

          {/* Secondary links */}
          <div className="flex items-center justify-center gap-4 mt-6 text-[#040619]/50 text-xs">
            <a
              href="#privacy"
              className="hover:text-[#7A6FF0] transition-colors"
            >
              Privacy
            </a>
            <span>·</span>
            <a
              href="#terms"
              className="hover:text-[#7A6FF0] transition-colors"
            >
              Terms
            </a>
            <span>·</span>
            <a
              href="#accessibility"
              className="hover:text-[#7A6FF0] transition-colors"
            >
              Accessibility
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-[#A8F0E4]/5 to-transparent blur-2xl pointer-events-none" />
    </footer>
  );
}
