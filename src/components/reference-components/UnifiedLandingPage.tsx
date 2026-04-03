"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Heart, Calendar, BookOpen, Users, Zap, Globe, ArrowRight, Sparkles, Network } from "lucide-react";
import auroraCrystal from "figma:asset/aaf705a4da4e268e88fcd37c884f07d61d072e97.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BrandWordmark } from "./BrandWordmark";
import { WorldMapChapters } from "./WorldMapChapters";

/**
 * UNIFIED LANDING PAGE — Aurora Continuum
 * 
 * Narrative Flow (Museum Exhibition):
 * 1. Arrival — Hero (Acheulean crystal, origin story)
 * 2. Evidence — Impact Metrics (resonance field)
 * 3. Structure — Three Pillars (light crystallized)
 * 4. Gatherings — Events (human connection)
 * 5. Network — Global Chapters (constellation)
 * 6. Embodiment — How We Build + Builders (principles → people)
 * 7. Invitation — Final CTA (join the continuum)
 * 
 * All interactions preserved, narrative reordered for emotional resonance
 */

export function UnifiedLandingPage() {
  return (
    <div className="relative bg-[#040619] overflow-x-hidden">
      {/* 1. ARRIVAL — Hero Section */}
      <HeroSection />

      {/* Constellation Divider */}
      <ConstellationDivider />

      {/* 2. EVIDENCE — Impact Metrics */}
      <ImpactMetricsSection />

      {/* Aurora Thread Transition */}
      <AuroraThreadTransition text="Light crystallizes into architecture" />

      {/* 3. STRUCTURE — Three Pillars */}
      <ThreePillarsSection />

      {/* Breathing Divider */}
      <BreathingDivider />

      {/* 4. GATHERINGS — Events */}
      <EventsSection />

      {/* Aurora Thread Transition */}
      <AuroraThreadTransition text="The network pulses across the globe" />

      {/* 5. NETWORK — Global Chapters */}
      <WorldMapChapters />

      {/* Vitruvian Ring Divider */}
      <VitruvianRingDivider />

      {/* 6. EMBODIMENT — How We Build + Builders */}
      <HowWeBuildAndBuildersSection />

      {/* Aurora Crescendo */}
      <AuroraCrescendo />

      {/* 7. INVITATION — Final CTA */}
      <FinalCTASection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}

// ========================================
// 1. ARRIVAL — HERO SECTION
// ========================================

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showEventPanel, setShowEventPanel] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Constellation Nodes CTA Bar — Fixed Header */}
      <ConstellationNodesHeader 
        showDonateModal={showDonateModal}
        setShowDonateModal={setShowDonateModal}
        showEventPanel={showEventPanel}
        setShowEventPanel={setShowEventPanel}
      />

      {/* Horizontal aurora gradients drifting */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7A6FF0]/10 to-transparent blur-3xl"
      />
      <motion.div
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#65D6C8]/10 to-transparent blur-3xl"
      />

      {/* Central Acheulean crystal */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center mb-20"
      >
        {/* Rotating aurora ring */}
        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7A6FF0]/30 via-transparent to-[#65D6C8]/30 blur-2xl" />
          </motion.div>

          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#65D6C8]/20 via-transparent to-[#A8F0E4]/20 blur-2xl" />
          </motion.div>

          {/* Acheulean crystal image */}
          <motion.div
            animate={{
              rotateY: [0, 360],
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative w-64 h-64"
            style={{ transformStyle: "preserve-3d" }}
          >
            <ImageWithFallback
              src={auroraCrystal}
              alt="Acheulean Crystal"
              className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(101,214,200,0.4)]"
            />
          </motion.div>
        </div>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-center max-w-5xl px-6"
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl text-[#FDFDFB] mb-6 leading-tight"
          >
            From the First Tool of Thought<br />
            <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              To Collective Intelligence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="text-xl md:text-2xl text-[#FDFDFB]/80 mb-8 leading-relaxed max-w-4xl mx-auto"
          >
            We are a growing network of thinkers, builders, and learners cultivating
            the relationship between{" "}
            <span
              className="text-[#65D6C8]"
              style={{ textShadow: "0 0 20px rgba(101,214,200,0.4)" }}
            >
              humanity and intelligent systems
            </span>
            {" "}— creating a future that reflects the full spectrum of human wisdom.
          </motion.p>

          {/* Origin Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 border border-[#65D6C8]/20 backdrop-blur-sm"
          >
            <p className="text-[#FDFDFB]/70 leading-relaxed italic">
              "1.76 million years ago, the Acheulean hand axe emerged — humanity's first tool
              of thought. Today, we stand at another threshold: intelligent systems that can
              amplify human wisdom, not replace it. The Collective builds the continuum between
              these moments — honoring dignity, fostering care, ensuring no one is left behind."
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#65D6C8]/60 text-sm"
      >
        <div className="flex flex-col items-center gap-2">
          <span>Explore the Continuum</span>
          <ArrowRight className="w-4 h-4 rotate-90" />
        </div>
      </motion.div>
    </section>
  );
}

// Constellation Nodes Header (Fixed)
function ConstellationNodesHeader({ showDonateModal, setShowDonateModal, showEventPanel, setShowEventPanel }: any) {
  const [hoveredCTA, setHoveredCTA] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#040619]/95 backdrop-blur-xl border-b border-[#65D6C8]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <BrandWordmark 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          animated={true}
        />

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["About", "Programs", "Chapters", "Events", "Builders"].map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm text-[#FDFDFB]/70 hover:text-[#65D6C8] transition-all duration-400 tracking-wide"
            >
              {link}
            </motion.a>
          ))}
        </nav>

        {/* Constellation Nodes CTAs */}
        <div className="flex items-center gap-6">
          {/* Aurora Thread */}
          <div className="relative flex items-center gap-6">
            {/* Donate Node */}
            <div className="relative z-10">
              <button
                onMouseEnter={() => setHoveredCTA("donate")}
                onMouseLeave={() => setHoveredCTA(null)}
                onClick={() => {
                  setShowDonateModal(true);
                  setShowEventPanel(false);
                }}
                className="group relative"
                aria-label="Support the Continuum"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 -m-3 bg-gradient-to-br from-[#65D6C8]/40 to-[#7A6FF0]/40 rounded-full blur-xl"
                />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] flex items-center justify-center shadow-[0_0_20px_rgba(101,214,200,0.4)]"
                >
                  <Heart className="w-5 h-5 text-[#040619]" />
                </motion.div>
              </button>
            </div>

            {/* Event Node */}
            <div className="relative z-10">
              <button
                onMouseEnter={() => setHoveredCTA("event")}
                onMouseLeave={() => setHoveredCTA(null)}
                onClick={() => {
                  setShowEventPanel(!showEventPanel);
                  setShowDonateModal(false);
                }}
                className="group relative"
                aria-label="Join upcoming events"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute inset-0 -m-3 bg-gradient-to-br from-[#7A6FF0]/40 to-[#65D6C8]/40 rounded-full blur-xl"
                />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-10 h-10 rounded-full border-2 border-[#7A6FF0] bg-gradient-to-br from-[#7A6FF0]/10 to-[#65D6C8]/10 backdrop-blur-sm flex items-center justify-center shadow-[0_0_20px_rgba(122,111,240,0.4)]"
                >
                  <Calendar className="w-5 h-5 text-[#7A6FF0]" />
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// ========================================
// TRANSITIONAL ELEMENTS
// ========================================

function ConstellationDivider() {
  return (
    <div className="relative h-32 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-full max-w-5xl h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#65D6C8]/40 to-transparent" />
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-[#65D6C8]/60 to-transparent"
          />
        </div>
      </motion.div>

      {/* Constellation nodes */}
      <div className="relative flex items-center gap-16">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-3 h-3 rounded-full bg-gradient-to-br from-[#7A6FF0] to-[#65D6C8] shadow-[0_0_15px_rgba(101,214,200,0.5)]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AuroraThreadTransition({ text }: { text: string }) {
  return (
    <div className="relative h-40 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7A6FF0]/5 to-transparent"
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative text-center text-[#65D6C8] text-sm italic max-w-2xl px-6"
      >
        {text}
      </motion.p>
    </div>
  );
}

function BreathingDivider() {
  return (
    <div className="relative h-24 flex items-center justify-center">
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [0.95, 1.05, 0.95]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="w-32 h-32 rounded-full bg-gradient-to-br from-[#7A6FF0]/20 to-[#65D6C8]/20 blur-3xl"
      />
    </div>
  );
}

function VitruvianRingDivider() {
  return (
    <div className="relative h-48 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 rounded-full border border-[#65D6C8]/30"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7A6FF0]/10 to-[#65D6C8]/10 blur-xl" />
        </motion.div>
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-32 h-32 rounded-full border border-[#7A6FF0]/20"
        />
      </motion.div>
    </div>
  );
}

function AuroraCrescendo() {
  return (
    <div className="relative h-64 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#7A6FF0]/30 via-[#65D6C8]/20 to-[#A8F0E4]/30 blur-3xl"
        />
      </motion.div>
    </div>
  );
}

// ========================================
// PLACEHOLDER SECTIONS (to be completed)
// ========================================

function ImpactMetricsSection() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-center text-[#FDFDFB] mb-16">Impact Metrics</h2>
        <p className="text-center text-[#FDFDFB]/60">Loading enhanced metrics...</p>
      </div>
    </section>
  );
}

function ThreePillarsSection() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-center text-[#FDFDFB] mb-16">Three Pillars</h2>
        <p className="text-center text-[#FDFDFB]/60">Loading pillars...</p>
      </div>
    </section>
  );
}

function EventsSection() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-center text-[#FDFDFB] mb-16">Events</h2>
        <p className="text-center text-[#FDFDFB]/60">Loading events...</p>
      </div>
    </section>
  );
}

function HowWeBuildAndBuildersSection() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-center text-[#FDFDFB] mb-16">How We Build + Builders</h2>
        <p className="text-center text-[#FDFDFB]/60">Loading builders...</p>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="relative py-40 overflow-hidden">
      <motion.div
        animate={{
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/20 to-[#65D6C8]/20 blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl text-[#FDFDFB]"
        >
          Join the Continuum
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-[#FDFDFB]/70 leading-relaxed"
        >
          From the first tool of thought to collective intelligence —
          every voice matters, every contribution shapes the field.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium hover:shadow-[0_0_40px_rgba(101,214,200,0.5)] transition-all duration-400 flex items-center gap-3">
            <Users className="w-5 h-5" />
            Start a Chapter
          </button>
          <button className="px-8 py-4 rounded-lg border border-[#65D6C8]/50 text-[#65D6C8] hover:bg-[#65D6C8]/10 transition-all duration-400 flex items-center gap-3">
            <Sparkles className="w-5 h-5" />
            Become a Builder
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8"
        >
          <p className="text-sm text-[#FDFDFB]/40 italic">
            "Each gesture, a spark in the continuum."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="relative border-t border-[#65D6C8]/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[#FDFDFB]/60 text-sm">
            © 2025 Human + AI Collective. Honoring dignity, fostering care.
          </div>
          <div className="flex items-center gap-6">
            {["Twitter", "GitHub", "LinkedIn"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-[#FDFDFB]/60 hover:text-[#65D6C8] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
