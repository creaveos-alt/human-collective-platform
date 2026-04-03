"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { Heart, Calendar, Users, Sparkles, ArrowRight, X, Info, BookOpen, Box, Zap, Globe, Network } from "lucide-react";
import auroraCrystal from "figma:asset/aaf705a4da4e268e88fcd37c884f07d61d072e97.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Import enhanced components
import { EnhancedImpactMetricsSection } from "./EnhancedMetrics";
import { EnhancedThreePillarsSection } from "./EnhancedPillars";
import { CarouselEventsSection } from "./EnhancedEvents";
import { WorldMapChapters } from "./WorldMapChapters";
import { UnifiedBuildersFinale } from "./EnhancedBuildersFinale";
import { EnhancedFooter } from "./EnhancedFooter";
import { BrandWordmark } from "./BrandWordmark";

/**
 * UNIFIED PROTOTYPE — Complete Aurora Continuum Experience
 * 
 * Narrative Flow:
 * 1. Arrival — Hero (Acheulean crystal, origin)
 * 2. Evidence — Impact Metrics (resonance field)
 * 3. Structure — Three Pillars (light crystallized)
 * 4. Gatherings — Events (human connection)
 * 5. Network — Global Chapters (constellation)
 * 6. Embodiment — Builders (principles → people)
 * 7. Invitation — Final CTA (join continuum)
 */

export function UnifiedPrototype() {
  return (
    <div className="relative bg-[#040619] overflow-x-hidden">
      {/* Hero with Constellation Nodes Header */}
      <HeroSection />

      {/* Constellation Divider */}
      <ConstellationDivider />

      {/* Impact Metrics — Living Resonance Field */}
      <EnhancedImpactMetricsSection />

      {/* Aurora Thread Transition */}
      <AuroraThreadTransition text="Light crystallizes into architecture" />

      {/* Three Pillars — Architectural Form */}
      <EnhancedThreePillarsSection />

      {/* Breathing Divider */}
      <BreathingDivider />

      {/* Events — Immersive Carousel */}
      <section id="events" className="relative">
        <CarouselEventsSection />
      </section>

      {/* Aurora Thread Transition */}
      <AuroraThreadTransition text="The network pulses across the globe" />

      {/* Global Chapters — World Map */}
      <WorldMapChapters />

      {/* Vitruvian Ring Divider */}
      <VitruvianRingDivider />

      {/* Builders — Unified Finale */}
      <section id="builders" className="relative">
        <UnifiedBuildersFinale />
      </section>

      {/* Aurora Crescendo */}
      <AuroraCrescendo />

      {/* Final CTA */}
      <FinalCTASection />

      {/* Footer */}
      <EnhancedFooter />
    </div>
  );
}

// ========================================
// HERO SECTION
// ========================================

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Separate state for Hero CTAs (independent from Header)
  const [showHeroDonateModal, setShowHeroDonateModal] = useState(false);
  const [showHeroEventModal, setShowHeroEventModal] = useState(false);
  
  // Separate state for Header Constellation Nodes (independent from Hero)
  const [showHeaderDonateModal, setShowHeaderDonateModal] = useState(false);
  const [showHeaderEventPanel, setShowHeaderEventPanel] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <>
      {/* Constellation Nodes Header */}
      <ConstellationNodesHeader 
        showDonateModal={showHeaderDonateModal}
        setShowDonateModal={setShowHeaderDonateModal}
        showEventPanel={showHeaderEventPanel}
        setShowEventPanel={setShowHeaderEventPanel}
        showHeroDonateModal={showHeroDonateModal}
        setShowHeroDonateModal={setShowHeroDonateModal}
        showHeroEventModal={showHeroEventModal}
        setShowHeroEventModal={setShowHeroEventModal}
      />

      <section
        ref={containerRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
      >
        {/* Horizontal aurora gradients */}
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

        {/* Acheulean crystal */}
        <motion.div
          style={{ y, opacity }}
          className="relative z-10 flex flex-col items-center mb-20"
        >
          <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            {/* Rotating aurora rings */}
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

            {/* Crystal image */}
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

          {/* Hero text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-center max-w-5xl px-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#FDFDFB] mb-6 leading-tight">
              From the First Tool of Thought<br />
              <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
                To Collective Intelligence
              </span>
            </h1>

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

            {/* Hero CTAs — Dual Entry Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="relative mb-12"
            >
              {/* Subtle aurora haze behind CTAs */}
              <div className="absolute inset-0 -m-8 bg-gradient-to-r from-[#7A6FF0]/5 via-[#65D6C8]/8 to-[#7A6FF0]/5 blur-3xl rounded-full" />
              
              {/* Connection line between CTAs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-px">
                <motion.div
                  animate={{
                    opacity: [0.1, 0.2, 0.1],
                    scaleX: [0.95, 1, 0.95]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="h-full bg-gradient-to-r from-transparent via-[#65D6C8]/20 to-transparent"
                />
              </div>

              {/* CTA Buttons */}
              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Donate — Gradient Bloom */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: 1.3 }}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 0 40px rgba(101,214,200,0.4)"
                  }}
                  onClick={() => setShowHeroDonateModal(true)}
                  className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium tracking-wide overflow-hidden transition-all duration-400"
                >
                  {/* Inner glow pulse */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A8F0E4] to-[#7A6FF0] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  
                  {/* Micro-particle drift */}
                  <motion.div
                    animate={{
                      x: [-20, 20, -20],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FDFDFB]/10 to-transparent"
                  />
                  
                  <span className="relative z-10 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Donate
                  </span>
                </motion.button>

                {/* Join Event — Aurora Outline */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: 1.4 }}
                  whileHover={{ 
                    scale: 1.03,
                    borderColor: "rgba(122,111,240,0.8)",
                    boxShadow: "0 0 30px rgba(122,111,240,0.3)"
                  }}
                  onClick={() => setShowHeroEventModal(true)}
                  className="group relative px-8 py-4 rounded-lg border-2 border-[#7A6FF0]/50 bg-gradient-to-r from-[#7A6FF0]/5 to-[#65D6C8]/5 text-[#FDFDFB] font-medium tracking-wide overflow-hidden transition-all duration-400"
                >
                  {/* Neon-edge reveal on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#7A6FF0]/15 to-[#65D6C8]/15" />
                    <div className="absolute inset-0 border-2 border-[#7A6FF0]/60 rounded-lg blur-sm" />
                  </div>
                  
                  {/* Shimmer drift */}
                  <motion.div
                    animate={{
                      x: ["-100%", "100%"]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FDFDFB]/5 to-transparent"
                  />
                  
                  <span className="relative z-10 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Join the Event
                  </span>
                </motion.button>
              </div>
            </motion.div>

            {/* Origin narrative */}
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
    </>
  );
}

// Constellation Nodes Header
function ConstellationNodesHeader({ showDonateModal, setShowDonateModal, showEventPanel, setShowEventPanel, showHeroDonateModal, setShowHeroDonateModal, showHeroEventModal, setShowHeroEventModal }: any) {
  const [hoveredCTA, setHoveredCTA] = useState<string | null>(null);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#040619]/95 backdrop-blur-xl border-b border-[#65D6C8]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <BrandWordmark 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            animated={false}
          />

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "About", href: "#" },
              { label: "Programs", href: "#" },
              { label: "Chapters", href: "#chapters" },
              { label: "Events", href: "#events" },
              { label: "Builders", href: "#builders" }
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#FDFDFB]/70 hover:text-[#65D6C8] transition-all duration-400 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Constellation Nodes */}
          <div className="flex items-center gap-6">
            <div className="relative flex items-center gap-6">
              {/* Donate node */}
              <div className="relative z-10">
                <button
                  onMouseEnter={() => setHoveredCTA("donate")}
                  onMouseLeave={() => setHoveredCTA(null)}
                  onClick={() => {
                    setShowDonateModal(true);
                    setShowEventPanel(false);
                  }}
                  className="group relative"
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
                    className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] flex items-center justify-center shadow-[0_0_20px_rgba(101,214,200,0.4)]"
                  >
                    <Heart className="w-5 h-5 text-[#040619]" />
                  </motion.div>
                </button>

                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredCTA === "donate" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-12 w-64 pointer-events-none z-50"
                    >
                      <div className="relative bg-[#1A1F35]/95 backdrop-blur-xl border border-[#65D6C8]/30 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20 flex items-center justify-center">
                            <Info className="w-4 h-4 text-[#65D6C8]" />
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm text-[#FDFDFB]">Support the Continuum</div>
                            <div className="text-xs text-[#FDFDFB]/60">Help us build systems of care</div>
                          </div>
                        </div>
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#1A1F35] border-t border-l border-[#65D6C8]/30" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Event node */}
              <div className="relative z-10">
                <button
                  onMouseEnter={() => setHoveredCTA("event")}
                  onMouseLeave={() => setHoveredCTA(null)}
                  onClick={() => {
                    setShowEventPanel(!showEventPanel);
                    setShowDonateModal(false);
                  }}
                  className="group relative"
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
                    className="relative w-10 h-10 rounded-full border-2 border-[#7A6FF0] bg-gradient-to-br from-[#7A6FF0]/10 to-[#65D6C8]/10 flex items-center justify-center shadow-[0_0_20px_rgba(122,111,240,0.4)]"
                  >
                    <Calendar className="w-5 h-5 text-[#7A6FF0]" />
                  </motion.div>
                </button>

                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredCTA === "event" && !showEventPanel && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-12 w-64 pointer-events-none z-50"
                    >
                      <div className="relative bg-[#1A1F35]/95 backdrop-blur-xl border border-[#7A6FF0]/30 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7A6FF0]/20 to-[#65D6C8]/20 flex items-center justify-center">
                            <Info className="w-4 h-4 text-[#7A6FF0]" />
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm text-[#FDFDFB]">Join the Collective</div>
                            <div className="text-xs text-[#FDFDFB]/60">Experience upcoming gatherings</div>
                          </div>
                        </div>
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#1A1F35] border-t border-l border-[#7A6FF0]/30" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Event Panel */}
        <AnimatePresence>
          {showEventPanel && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28 }}
              className="border-t border-[#7A6FF0]/20"
            >
              <div className="max-w-4xl mx-auto p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#7A6FF0]" />
                    <span className="text-sm text-[#7A6FF0] uppercase tracking-wider">Upcoming Event</span>
                  </div>
                  <button
                    onClick={() => setShowEventPanel(false)}
                    className="p-2 rounded-lg hover:bg-[#7A6FF0]/10 transition-colors"
                  >
                    <X className="w-5 h-5 text-[#FDFDFB]/60" />
                  </button>
                </div>
                <div className="p-5 rounded-xl border border-[#7A6FF0]/30 bg-[#040619]/50">
                  <h3 className="text-lg text-[#FDFDFB] mb-2">Global AI Literacy Summit</h3>
                  <p className="text-sm text-[#FDFDFB]/60 mb-4">December 15, 2025 • Virtual & In-Person</p>
                  <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] hover:shadow-[0_0_30px_rgba(101,214,200,0.4)] transition-all">
                    Register Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Donate Modal */}
      <AnimatePresence>
        {showDonateModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#040619]/90 backdrop-blur-md z-50"
              onClick={() => setShowDonateModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed left-1/2 -translate-x-1/2 z-50 w-full max-w-lg"
              style={{ top: "120px" }}
            >
              <div className="relative bg-[#1A1F35]/98 border border-[#65D6C8]/30 rounded-2xl p-8">
                <button
                  onClick={() => setShowDonateModal(false)}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-[#65D6C8]/10 transition-colors"
                >
                  <X className="w-5 h-5 text-[#FDFDFB]/60" />
                </button>
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] flex items-center justify-center">
                    <Heart className="w-8 h-8 text-[#040619]" fill="currentColor" />
                  </div>
                  <h2 className="text-2xl text-[#FDFDFB]">Support the Continuum</h2>
                  <p className="text-sm text-[#FDFDFB]/70">
                    Help us build systems of care and expand collective intelligence.
                  </p>
                  <button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] hover:shadow-[0_0_30px_rgba(101,214,200,0.4)] transition-all">
                    Choose Amount
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Donate Modal */}
      <AnimatePresence>
        {showHeroDonateModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#040619]/90 backdrop-blur-md z-50"
              onClick={() => setShowHeroDonateModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed left-1/2 -translate-x-1/2 z-50 w-full max-w-lg"
              style={{ top: "120px" }}
            >
              <div className="relative bg-[#1A1F35]/98 border border-[#65D6C8]/30 rounded-2xl p-8">
                <button
                  onClick={() => setShowHeroDonateModal(false)}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-[#65D6C8]/10 transition-colors"
                >
                  <X className="w-5 h-5 text-[#FDFDFB]/60" />
                </button>
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] flex items-center justify-center">
                    <Heart className="w-8 h-8 text-[#040619]" fill="currentColor" />
                  </div>
                  <h2 className="text-2xl text-[#FDFDFB]">Support the Continuum</h2>
                  <p className="text-sm text-[#FDFDFB]/70">
                    Help us build systems of care and expand collective intelligence.
                  </p>
                  <button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] hover:shadow-[0_0_30px_rgba(101,214,200,0.4)] transition-all">
                    Choose Amount
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Event Modal */}
      <AnimatePresence>
        {showHeroEventModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#040619]/90 backdrop-blur-md z-50"
              onClick={() => setShowHeroEventModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed left-1/2 -translate-x-1/2 z-50 w-full max-w-lg"
              style={{ top: "120px" }}
            >
              <div className="relative bg-[#1A1F35]/98 border border-[#65D6C8]/30 rounded-2xl p-8">
                <button
                  onClick={() => setShowHeroEventModal(false)}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-[#65D6C8]/10 transition-colors"
                >
                  <X className="w-5 h-5 text-[#FDFDFB]/60" />
                </button>
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-[#040619]" fill="currentColor" />
                  </div>
                  <h2 className="text-2xl text-[#FDFDFB]">Join the Collective</h2>
                  <p className="text-sm text-[#FDFDFB]/70">
                    Experience upcoming gatherings and connect with like-minded individuals.
                  </p>
                  <button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] hover:shadow-[0_0_30px_rgba(101,214,200,0.4)] transition-all">
                    Register Now
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
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
        <div className="relative w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-[#65D6C8]/40 to-transparent" />
      </motion.div>
      <div className="relative flex items-center gap-16">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5 + i * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity }}
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
    <div className="relative h-40 flex items-center justify-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-[#65D6C8] text-sm italic max-w-2xl px-6"
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
        transition={{ duration: 6, repeat: Infinity }}
        className="w-32 h-32 rounded-full bg-gradient-to-br from-[#7A6FF0]/20 to-[#65D6C8]/20 blur-3xl"
      />
    </div>
  );
}

function VitruvianRingDivider() {
  return (
    <div className="relative h-48 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 rounded-full border border-[#65D6C8]/30"
        />
      </motion.div>
    </div>
  );
}

function AuroraCrescendo() {
  return (
    <div className="relative h-64">
      <motion.div
        animate={{
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#7A6FF0]/30 via-[#65D6C8]/20 to-[#A8F0E4]/30 blur-3xl" />
      </motion.div>
    </div>
  );
}

// ========================================
// FINAL CTA
// ========================================

function FinalCTASection() {
  return (
    <section className="relative py-40">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl text-[#FDFDFB]"
        >
          Join the Continuum
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-[#FDFDFB]/70"
        >
          From the first tool of thought to collective intelligence — every voice matters.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium hover:shadow-[0_0_40px_rgba(101,214,200,0.5)] transition-all flex items-center gap-3">
            <Users className="w-5 h-5" />
            Start a Chapter
          </button>
          <button className="px-8 py-4 rounded-lg border border-[#65D6C8]/50 text-[#65D6C8] hover:bg-[#65D6C8]/10 transition-all flex items-center gap-3">
            <Sparkles className="w-5 h-5" />
            Become a Builder
          </button>
        </motion.div>
      </div>
    </section>
  );
}

