"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { 
  Heart, Calendar, Users, Sparkles, ArrowRight, X, Info, 
  BookOpen, Box, Zap, Globe, Network, Check, ChevronRight,
  Mail, CreditCard, MapPin
} from "lucide-react";
import auroraCrystal from "figma:asset/aaf705a4da4e268e88fcd37c884f07d61d072e97.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Import enhanced components
import { EnhancedImpactMetricsSection } from "./EnhancedMetrics";
import { EnhancedThreePillarsSection } from "./EnhancedPillars";
import { FullyInteractiveEventsSection } from "./FullyInteractiveEvents";
import { WorldMapChapters } from "./WorldMapChapters";
import { UnifiedBuildersFinale } from "./EnhancedBuildersFinale";
import { EnhancedFooter } from "./EnhancedFooter";
import { BrandWordmark } from "./BrandWordmark";

/**
 * FULLY FUNCTIONAL PROTOTYPE
 * Every CTA has complete interaction flows
 */

export function FullyFunctionalPrototype() {
  // Global state for all modals/flows
  const [donateFlow, setDonateFlow] = useState<{
    active: boolean;
    step: 'amount' | 'details' | 'confirmation';
    amount: number | null;
    source: 'hero' | 'header' | 'final';
  }>({ active: false, step: 'amount', amount: null, source: 'hero' });

  const [eventFlow, setEventFlow] = useState<{
    active: boolean;
    step: 'details' | 'register' | 'confirmation';
    source: 'hero' | 'header';
  }>({ active: false, step: 'details', source: 'hero' });

  const [chapterFlow, setChapterFlow] = useState<{
    active: boolean;
    step: 'form' | 'confirmation';
  }>({ active: false, step: 'form' });

  const [builderFlow, setBuilderFlow] = useState<{
    active: boolean;
    step: 'form' | 'confirmation';
  }>({ active: false, step: 'form' });

  return (
    <div className="relative bg-[#040619] overflow-x-hidden">
      {/* Hero with Header */}
      <HeroSection 
        setDonateFlow={setDonateFlow}
        setEventFlow={setEventFlow}
      />

      {/* Constellation Divider */}
      <ConstellationDivider />

      {/* Aurora Thread Transition */}
      <AuroraThreadTransition text="Light crystallizes into architecture" />

      {/* Three Pillars */}
      <EnhancedThreePillarsSection />

      {/* Breathing Divider */}
      <BreathingDivider />

      {/* Events */}
      <section id="events" className="relative">
        <FullyInteractiveEventsSection />
      </section>

      {/* Aurora Thread Transition */}
      <AuroraThreadTransition text="The network pulses across the globe" />

      {/* Global Chapters */}
      <WorldMapChapters />

      {/* Vitruvian Ring Divider */}
      <VitruvianRingDivider />

      {/* Builders */}
      <section id="builders" className="relative">
        <UnifiedBuildersFinale />
      </section>

      {/* Aurora Crescendo */}
      <AuroraCrescendo />

      {/* Final CTA */}
      <FinalCTASection 
        setDonateFlow={setDonateFlow}
        setChapterFlow={setChapterFlow}
        setBuilderFlow={setBuilderFlow}
      />

      {/* Footer */}
      <EnhancedFooter 
        setDonateFlow={setDonateFlow}
        setEventFlow={setEventFlow}
        setChapterFlow={setChapterFlow}
        setBuilderFlow={setBuilderFlow}
      />

      {/* GLOBAL MODALS */}
      <DonateFlowModal donateFlow={donateFlow} setDonateFlow={setDonateFlow} />
      <EventFlowModal eventFlow={eventFlow} setEventFlow={setEventFlow} />
      <ChapterFlowModal chapterFlow={chapterFlow} setChapterFlow={setChapterFlow} />
      <BuilderFlowModal builderFlow={builderFlow} setBuilderFlow={setBuilderFlow} />
    </div>
  );
}

// ========================================
// HERO SECTION
// ========================================

function HeroSection({ setDonateFlow, setEventFlow }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
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
        setDonateFlow={setDonateFlow}
        setEventFlow={setEventFlow}
        showHeaderEventPanel={showHeaderEventPanel}
        setShowHeaderEventPanel={setShowHeaderEventPanel}
      />

      <section
        ref={containerRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
      >
        {/* Aurora gradients */}
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
            {/* Ambient Aurora Sweep - Horizontal */}
            <motion.div
              animate={{ x: ["-120%", "120%"] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear", repeatDelay: 0 }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#65D6C8]/15 to-transparent blur-3xl" />
            </motion.div>

            {/* Ambient Aurora Sweep - Diagonal */}
            <motion.div
              animate={{ 
                x: ["120%", "-120%"],
                y: ["-60%", "60%"]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear", repeatDelay: 0 }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#7A6FF0]/12 to-transparent blur-3xl" />
            </motion.div>

            {/* Ambient Aurora Sweep - Reverse Diagonal */}
            <motion.div
              animate={{ 
                x: ["-100%", "100%"],
                y: ["60%", "-60%"]
              }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear", repeatDelay: 0 }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-[#A8F0E4]/14 to-transparent blur-3xl" />
            </motion.div>

            {/* Breathing Glow Aura - behind static crystal */}
            <motion.div
              animate={{
                opacity: [0.05, 0.12, 0.05],
                scale: [0.95, 1.05, 0.95]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full bg-gradient-radial from-[#65D6C8]/20 via-[#7A6FF0]/10 to-transparent blur-2xl pointer-events-none"
            />

            {/* Static Crystal - NO rotation, NO scale animation */}
            <div className="relative w-64 h-64">
              <ImageWithFallback
                src={auroraCrystal}
                alt="Acheulean Crystal"
                className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(101,214,200,0.4)]"
              />
            </div>
          </div>

          {/* Hero text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-center max-w-5xl px-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#FDFDFB] mb-6 leading-tight">
              Shaping Tomorrow, Collectively.
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
              className="text-xl md:text-2xl text-[#FDFDFB]/80 mb-8 leading-relaxed max-w-4xl mx-auto"
            >
              A global network cultivating the relationship between humanity and intelligent systems.
            </motion.p>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="relative mb-12"
            >
              {/* Aurora haze */}
              <div className="absolute inset-0 -m-8 bg-gradient-to-r from-[#7A6FF0]/5 via-[#65D6C8]/8 to-[#7A6FF0]/5 blur-3xl rounded-full" />
              
              {/* Connection line */}
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
                {/* Donate Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: 1.3 }}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 0 40px rgba(101,214,200,0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setDonateFlow({ active: true, step: 'amount', amount: null, source: 'hero' })}
                  className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium tracking-wide overflow-hidden transition-all duration-400"
                >
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A8F0E4] to-[#7A6FF0] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  
                  {/* Particle drift */}
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

                {/* Join Event Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: 1.4 }}
                  whileHover={{ 
                    scale: 1.03,
                    borderColor: "rgba(122,111,240,0.8)",
                    boxShadow: "0 0 30px rgba(122,111,240,0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setEventFlow({ active: true, step: 'details', source: 'hero' })}
                  className="group relative px-8 py-4 rounded-lg border-2 border-[#7A6FF0]/50 bg-gradient-to-r from-[#7A6FF0]/5 to-[#65D6C8]/5 text-[#FDFDFB] font-medium tracking-wide overflow-hidden transition-all duration-400"
                >
                  {/* Neon edge */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#7A6FF0]/15 to-[#65D6C8]/15" />
                    <div className="absolute inset-0 border-2 border-[#7A6FF0]/60 rounded-lg blur-sm" />
                  </div>
                  
                  {/* Shimmer */}
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

            {/* Impact Metrics - Horizontal Row of 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {/* Metric 1: Community Members */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                {/* Subtle glow on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/10 to-[#65D6C8]/10 rounded-xl blur-xl"
                />
                
                <div className="relative p-6 rounded-xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 backdrop-blur-sm text-center">
                  <motion.div
                    className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#65D6C8] via-[#7A6FF0] to-[#A8F0E4] bg-clip-text text-transparent mb-2"
                    animate={{
                      opacity: [0.85, 1, 0.85],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    5K+
                  </motion.div>
                  <div className="text-[#FDFDFB]/70 text-sm uppercase tracking-wide">
                    Community Members
                  </div>
                </div>
              </motion.div>

              {/* Metric 2: Global Chapters */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                {/* Subtle glow on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/10 to-[#65D6C8]/10 rounded-xl blur-xl"
                />
                
                <div className="relative p-6 rounded-xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 backdrop-blur-sm text-center">
                  <motion.div
                    className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#65D6C8] via-[#7A6FF0] to-[#A8F0E4] bg-clip-text text-transparent mb-2"
                    animate={{
                      opacity: [0.85, 1, 0.85],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3
                    }}
                  >
                    28
                  </motion.div>
                  <div className="text-[#FDFDFB]/70 text-sm uppercase tracking-wide">
                    Global Chapters
                  </div>
                </div>
              </motion.div>

              {/* Metric 3: Workshops Hosted */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                {/* Subtle glow on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/10 to-[#65D6C8]/10 rounded-xl blur-xl"
                />
                
                <div className="relative p-6 rounded-xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 backdrop-blur-sm text-center">
                  <motion.div
                    className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#65D6C8] via-[#7A6FF0] to-[#A8F0E4] bg-clip-text text-transparent mb-2"
                    animate={{
                      opacity: [0.85, 1, 0.85],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.6
                    }}
                  >
                    300
                  </motion.div>
                  <div className="text-[#FDFDFB]/70 text-sm uppercase tracking-wide">
                    Workshops Hosted
                  </div>
                </div>
              </motion.div>
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
function ConstellationNodesHeader({ setDonateFlow, setEventFlow, showHeaderEventPanel, setShowHeaderEventPanel }: any) {
  const [hoveredCTA, setHoveredCTA] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#040619]/95 backdrop-blur-xl border-b border-[#65D6C8]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo - with increased padding and vertical adjustment */}
        <div className="px-4 py-1">
          <BrandWordmark 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            animated={false}
          />
        </div>

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
                  setDonateFlow({ active: true, step: 'amount', amount: null, source: 'header' });
                  setShowHeaderEventPanel(false);
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
                  whileTap={{ scale: 0.95 }}
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
                  setShowHeaderEventPanel(!showHeaderEventPanel);
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
                  whileTap={{ scale: 0.95 }}
                  className="relative w-10 h-10 rounded-full border-2 border-[#7A6FF0] bg-gradient-to-br from-[#7A6FF0]/10 to-[#65D6C8]/10 flex items-center justify-center shadow-[0_0_20px_rgba(122,111,240,0.4)]"
                >
                  <Calendar className="w-5 h-5 text-[#7A6FF0]" />
                </motion.div>
              </button>

              {/* Tooltip */}
              <AnimatePresence>
                {hoveredCTA === "event" && !showHeaderEventPanel && (
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

      {/* Event Panel - Rich Modal */}
      <AnimatePresence>
        {showHeaderEventPanel && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#040619]/90 backdrop-blur-md z-[60]"
              onClick={() => setShowHeaderEventPanel(false)}
            />

            {/* Rich Events Preview Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed left-1/2 -translate-x-1/2 z-[60] w-full max-w-2xl"
              style={{ top: "100px" }}
            >
              {/* Aurora glow behind modal */}
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
                className="absolute inset-0 -m-8 bg-gradient-to-br from-[#7A6FF0]/60 to-[#65D6C8]/60 rounded-3xl blur-3xl pointer-events-none"
              />

              {/* Modal Container */}
              <div className="relative bg-[#0D1226]/98 backdrop-blur-xl border border-[#7A6FF0]/40 rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="relative border-b border-[#7A6FF0]/20 p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7A6FF0]/20 to-[#65D6C8]/20 flex items-center justify-center border border-[#7A6FF0]/30">
                        <Calendar className="w-5 h-5 text-[#7A6FF0]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#7A6FF0] uppercase tracking-wider mb-1">UPCOMING EVENT</p>
                        <h2 className="text-xl text-[#FDFDFB]">Join the Collective</h2>
                      </div>
                    </div>
                    <motion.button
                      onClick={() => setShowHeaderEventPanel(false)}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg hover:bg-[#7A6FF0]/10 transition-colors group"
                    >
                      <X className="w-5 h-5 text-[#FDFDFB]/60 group-hover:text-[#7A6FF0] transition-colors" />
                    </motion.button>
                  </div>
                </div>

                {/* Content - Scrollable */}
                <div className="max-h-[70vh] overflow-y-auto custom-scrollbar">
                  {/* Featured Event Block */}
                  <div className="p-6 border-b border-[#7A6FF0]/10">
                    <div className="relative p-6 rounded-xl bg-gradient-to-br from-[#0D1226] to-[#1A1F35] border border-[#7A6FF0]/30">
                      {/* Subtle aurora glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 rounded-xl pointer-events-none" />
                      
                      <div className="relative space-y-4">
                        {/* Featured badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#7A6FF0]/20 to-[#65D6C8]/20 border border-[#7A6FF0]/30">
                          <Sparkles className="w-3.5 h-3.5 text-[#7A6FF0]" />
                          <span className="text-xs text-[#FDFDFB]/80 font-medium">FEATURED EVENT</span>
                        </div>

                        {/* Event title */}
                        <h3 className="text-2xl text-[#FDFDFB] font-semibold">
                          Global AI Literacy Summit
                        </h3>

                        {/* Event metadata */}
                        <div className="grid gap-3">
                          <div className="flex items-center gap-2.5 text-sm text-[#FDFDFB]/70">
                            <Calendar className="w-4 h-4 text-[#65D6C8]" />
                            <span>December 15, 2025 • 6:00 PM EST</span>
                          </div>
                          <div className="flex items-center gap-2.5 text-sm text-[#FDFDFB]/70">
                            <MapPin className="w-4 h-4 text-[#65D6C8]" />
                            <span>Virtual & In-Person (NYC, London, Tokyo)</span>
                          </div>
                          <div className="flex items-center gap-2.5 text-sm text-[#FDFDFB]/70">
                            <Users className="w-4 h-4 text-[#65D6C8]" />
                            <span>500+ Expected Attendees</span>
                          </div>
                        </div>

                        {/* Event description */}
                        <p className="text-sm text-[#FDFDFB]/60 leading-relaxed">
                          Join leaders, builders, and learners from around the world for an evening of dialogue, workshops, and collective vision-setting.
                        </p>

                        {/* Primary CTA */}
                        <motion.button
                          whileHover={{ 
                            scale: 1.02, 
                            boxShadow: "0 0 40px rgba(101,214,200,0.4)"
                          }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setEventFlow({ active: true, step: 'details', source: 'header' });
                            setShowHeaderEventPanel(false);
                          }}
                          className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                        >
                          <span>Register Now</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* More Events List */}
                  <div className="p-6">
                    <h4 className="text-xs text-[#7A6FF0] uppercase tracking-wider mb-4">MORE EVENTS</h4>
                    <div className="space-y-3">
                      {/* Event 1: Toronto Workshop */}
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="p-4 rounded-lg bg-[#0D1226]/50 border border-[#7A6FF0]/20 hover:border-[#7A6FF0]/40 transition-all group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 space-y-2">
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0]" />
                              <div className="flex-1">
                                <h5 className="text-base text-[#FDFDFB] font-medium mb-1">
                                  AI Lunchbox Workshop
                                </h5>
                                <div className="flex items-center gap-4 text-xs text-[#FDFDFB]/50">
                                  <span className="flex items-center gap-1.5">
                                    <Calendar className="w-3 h-3" />
                                    Dec 20
                                  </span>
                                  <span className="flex items-center gap-1.5">
                                    <MapPin className="w-3 h-3" />
                                    Toronto
                                  </span>
                                  <span className="flex items-center gap-1.5">
                                    <Users className="w-3 h-3" />
                                    45 attending
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-lg border border-[#7A6FF0]/30 text-xs text-[#FDFDFB]/70 hover:text-[#7A6FF0] hover:border-[#7A6FF0] hover:bg-[#7A6FF0]/5 transition-all"
                          >
                            Details
                          </motion.button>
                        </div>
                      </motion.div>

                      {/* Event 2: Nairobi Showcase */}
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="p-4 rounded-lg bg-[#0D1226]/50 border border-[#7A6FF0]/20 hover:border-[#7A6FF0]/40 transition-all group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 space-y-2">
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0]" />
                              <div className="flex-1">
                                <h5 className="text-base text-[#FDFDFB] font-medium mb-1">
                                  Community AI Showcase
                                </h5>
                                <div className="flex items-center gap-4 text-xs text-[#FDFDFB]/50">
                                  <span className="flex items-center gap-1.5">
                                    <Calendar className="w-3 h-3" />
                                    Jan 10
                                  </span>
                                  <span className="flex items-center gap-1.5">
                                    <MapPin className="w-3 h-3" />
                                    Nairobi
                                  </span>
                                  <span className="flex items-center gap-1.5">
                                    <Users className="w-3 h-3" />
                                    80 attending
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-lg border border-[#7A6FF0]/30 text-xs text-[#FDFDFB]/70 hover:text-[#7A6FF0] hover:border-[#7A6FF0] hover:bg-[#7A6FF0]/5 transition-all"
                          >
                            Details
                          </motion.button>
                        </div>
                      </motion.div>

                      {/* Event 3: Berlin Ethics Forum */}
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="p-4 rounded-lg bg-[#0D1226]/50 border border-[#7A6FF0]/20 hover:border-[#7A6FF0]/40 transition-all group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 space-y-2">
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0]" />
                              <div className="flex-1">
                                <h5 className="text-base text-[#FDFDFB] font-medium mb-1">
                                  AI Ethics Forum
                                </h5>
                                <div className="flex items-center gap-4 text-xs text-[#FDFDFB]/50">
                                  <span className="flex items-center gap-1.5">
                                    <Calendar className="w-3 h-3" />
                                    Jan 18
                                  </span>
                                  <span className="flex items-center gap-1.5">
                                    <MapPin className="w-3 h-3" />
                                    Berlin
                                  </span>
                                  <span className="flex items-center gap-1.5">
                                    <Users className="w-3 h-3" />
                                    120 attending
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-lg border border-[#7A6FF0]/30 text-xs text-[#FDFDFB]/70 hover:text-[#7A6FF0] hover:border-[#7A6FF0] hover:bg-[#7A6FF0]/5 transition-all"
                          >
                            Details
                          </motion.button>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

// ========================================
// GLOBAL MODALS WITH FULL FLOWS
// ========================================

// Donate Flow Modal
function DonateFlowModal({ donateFlow, setDonateFlow }: any) {
  const amounts = [25, 50, 100, 250, 500];
  const [customAmount, setCustomAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [email, setEmail] = useState("");

  const closeModal = () => {
    setDonateFlow({ active: false, step: 'amount', amount: null, source: 'hero' });
    setSelectedAmount(null);
    setCustomAmount("");
    setEmail("");
  };

  return (
    <AnimatePresence>
      {donateFlow.active && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#040619]/90 backdrop-blur-md z-[60]"
            onClick={closeModal}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed left-1/2 -translate-x-1/2 z-[60] w-full max-w-lg"
            style={{ top: "120px" }}
          >
            <div className="relative bg-[#1A1F35]/98 border border-[#65D6C8]/30 rounded-2xl p-8">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-[#65D6C8]/10 transition-colors"
              >
                <X className="w-5 h-5 text-[#FDFDFB]/60" />
              </button>

              {/* Step 1: Amount Selection */}
              {donateFlow.step === 'amount' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] flex items-center justify-center">
                      <Heart className="w-8 h-8 text-[#040619]" fill="currentColor" />
                    </div>
                    <h2 className="text-2xl text-[#FDFDFB] mb-2">Support the Continuum</h2>
                    <p className="text-sm text-[#FDFDFB]/70">
                      Help us build systems of care and expand collective intelligence
                    </p>
                  </div>

                  {/* Preset amounts */}
                  <div className="grid grid-cols-3 gap-3">
                    {amounts.map((amount) => (
                      <motion.button
                        key={amount}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedAmount(amount)}
                        className={`py-3 rounded-lg border-2 transition-all ${
                          selectedAmount === amount
                            ? "border-[#65D6C8] bg-[#65D6C8]/10 text-[#65D6C8]"
                            : "border-[#FDFDFB]/20 text-[#FDFDFB]/70 hover:border-[#65D6C8]/50"
                        }`}
                      >
                        ${amount}
                      </motion.button>
                    ))}
                  </div>

                  {/* Custom amount */}
                  <div>
                    <label className="block text-sm text-[#FDFDFB]/70 mb-2">Custom Amount</label>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      placeholder="Enter amount"
                      className="w-full px-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Continue button */}
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(101,214,200,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      if (selectedAmount || customAmount) {
                        setDonateFlow({ ...donateFlow, step: 'details', amount: selectedAmount || Number(customAmount) });
                      }
                    }}
                    disabled={!selectedAmount && !customAmount}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Continue
                  </motion.button>
                </div>
              )}

              {/* Step 2: Details */}
              {donateFlow.step === 'details' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl text-[#FDFDFB] mb-2">Your Details</h2>
                    <p className="text-sm text-[#FDFDFB]/70">
                      Contributing ${donateFlow.amount || selectedAmount || customAmount}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-[#FDFDFB]/70 mb-2">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="p-4 rounded-lg bg-[#7A6FF0]/10 border border-[#7A6FF0]/30">
                      <div className="flex items-start gap-3">
                        <CreditCard className="w-5 h-5 text-[#7A6FF0] mt-0.5" />
                        <div>
                          <p className="text-sm text-[#FDFDFB] mb-1">Payment Integration</p>
                          <p className="text-xs text-[#FDFDFB]/60">
                            Stripe or similar payment gateway would integrate here
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setDonateFlow({ ...donateFlow, step: 'amount' })}
                      className="flex-1 py-3 rounded-lg border border-[#FDFDFB]/20 text-[#FDFDFB]/70 hover:border-[#FDFDFB]/40 transition-all"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(101,214,200,0.4)" }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setDonateFlow({ ...donateFlow, step: 'confirmation' })}
                      disabled={!email}
                      className="flex-1 py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      Complete Donation
                    </motion.button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {donateFlow.step === 'confirmation' && (
                <div className="text-center space-y-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] flex items-center justify-center"
                  >
                    <Check className="w-10 h-10 text-[#040619]" strokeWidth={3} />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl text-[#FDFDFB] mb-2">Thank You!</h2>
                    <p className="text-sm text-[#FDFDFB]/70">
                      Your contribution of ${donateFlow.amount || selectedAmount || customAmount} helps us build a more dignified future
                    </p>
                  </div>
                  <p className="text-xs text-[#FDFDFB]/50 italic">
                    "Each gesture, a spark in the continuum."
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={closeModal}
                    className="w-full py-3 rounded-lg border border-[#65D6C8]/50 text-[#65D6C8] hover:bg-[#65D6C8]/10 transition-all"
                  >
                    Close
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Event Flow Modal
function EventFlowModal({ eventFlow, setEventFlow }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendance, setAttendance] = useState<'virtual' | 'in-person' | null>(null);

  const closeModal = () => {
    setEventFlow({ active: false, step: 'details', source: 'hero' });
    setName("");
    setEmail("");
    setAttendance(null);
  };

  return (
    <AnimatePresence>
      {eventFlow.active && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#040619]/90 backdrop-blur-md z-[60]"
            onClick={closeModal}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed left-1/2 -translate-x-1/2 z-[60] w-full max-w-lg"
            style={{ top: "120px" }}
          >
            <div className="relative bg-[#1A1F35]/98 border border-[#65D6C8]/30 rounded-2xl p-8">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-[#65D6C8]/10 transition-colors"
              >
                <X className="w-5 h-5 text-[#FDFDFB]/60" />
              </button>

              {/* Step 1: Event Details */}
              {eventFlow.step === 'details' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-[#040619]" fill="currentColor" />
                    </div>
                    <h2 className="text-2xl text-[#FDFDFB] mb-2">Global AI Literacy Summit</h2>
                    <p className="text-sm text-[#7A6FF0]">December 15, 2025</p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/10">
                      <h3 className="text-sm font-medium text-[#FDFDFB] mb-2">About this Event</h3>
                      <p className="text-xs text-[#FDFDFB]/60 leading-relaxed">
                        Join thinkers, builders, and learners from around the world as we explore the frontiers of AI literacy, ethical development, and collective intelligence. This flagship event brings together our global community for workshops, discussions, and collaborative building.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-[#7A6FF0]/10 border border-[#7A6FF0]/30">
                        <div className="text-[#7A6FF0] mb-1">Duration</div>
                        <div className="text-[#FDFDFB]/70">3 Days</div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#65D6C8]/10 border border-[#65D6C8]/30">
                        <div className="text-[#65D6C8] mb-1">Format</div>
                        <div className="text-[#FDFDFB]/70">Hybrid</div>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(101,214,200,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setEventFlow({ ...eventFlow, step: 'register' })}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium transition-all flex items-center justify-center gap-2"
                  >
                    Register Now
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              )}

              {/* Step 2: Registration */}
              {eventFlow.step === 'register' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl text-[#FDFDFB] mb-2">Register for Summit</h2>
                    <p className="text-sm text-[#FDFDFB]/70">
                      Join us December 15, 2025
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-[#FDFDFB]/70 mb-2">Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-[#FDFDFB]/70 mb-2">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-[#FDFDFB]/70 mb-2">Attendance</label>
                      <div className="grid grid-cols-2 gap-3">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setAttendance('virtual')}
                          className={`py-3 rounded-lg border-2 transition-all ${
                            attendance === 'virtual'
                              ? "border-[#65D6C8] bg-[#65D6C8]/10 text-[#65D6C8]"
                              : "border-[#FDFDFB]/20 text-[#FDFDFB]/70 hover:border-[#65D6C8]/50"
                          }`}
                        >
                          Virtual
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setAttendance('in-person')}
                          className={`py-3 rounded-lg border-2 transition-all ${
                            attendance === 'in-person'
                              ? "border-[#65D6C8] bg-[#65D6C8]/10 text-[#65D6C8]"
                              : "border-[#FDFDFB]/20 text-[#FDFDFB]/70 hover:border-[#65D6C8]/50"
                          }`}
                        >
                          In-Person
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setEventFlow({ ...eventFlow, step: 'details' })}
                      className="flex-1 py-3 rounded-lg border border-[#FDFDFB]/20 text-[#FDFDFB]/70 hover:border-[#FDFDFB]/40 transition-all"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(101,214,200,0.4)" }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setEventFlow({ ...eventFlow, step: 'confirmation' })}
                      disabled={!name || !email || !attendance}
                      className="flex-1 py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      Complete Registration
                    </motion.button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {eventFlow.step === 'confirmation' && (
                <div className="text-center space-y-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] flex items-center justify-center"
                  >
                    <Check className="w-10 h-10 text-[#040619]" strokeWidth={3} />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl text-[#FDFDFB] mb-2">You're Registered!</h2>
                    <p className="text-sm text-[#FDFDFB]/70">
                      We'll send details to {email}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-[#7A6FF0]/10 border border-[#7A6FF0]/30 text-left">
                    <h3 className="text-sm font-medium text-[#FDFDFB] mb-2">What's Next?</h3>
                    <ul className="space-y-2 text-xs text-[#FDFDFB]/60">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#65D6C8] mt-0.5" />
                        <span>Check your email for confirmation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#65D6C8] mt-0.5" />
                        <span>Join our community Discord</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#65D6C8] mt-0.5" />
                        <span>We'll send agenda details soon</span>
                      </li>
                    </ul>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={closeModal}
                    className="w-full py-3 rounded-lg border border-[#65D6C8]/50 text-[#65D6C8] hover:bg-[#65D6C8]/10 transition-all"
                  >
                    Close
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Chapter Flow Modal
function ChapterFlowModal({ chapterFlow, setChapterFlow }: any) {
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const closeModal = () => {
    setChapterFlow({ active: false, step: 'form' });
    setCity("");
    setName("");
    setEmail("");
  };

  return (
    <AnimatePresence>
      {chapterFlow.active && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#040619]/90 backdrop-blur-md z-[60]"
            onClick={closeModal}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed left-1/2 -translate-x-1/2 z-[60] w-full max-w-lg"
            style={{ top: "120px" }}
          >
            <div className="relative bg-[#1A1F35]/98 border border-[#65D6C8]/30 rounded-2xl p-8">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-[#65D6C8]/10 transition-colors"
              >
                <X className="w-5 h-5 text-[#FDFDFB]/60" />
              </button>

              {chapterFlow.step === 'form' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-[#040619]" />
                    </div>
                    <h2 className="text-2xl text-[#FDFDFB] mb-2">Start a Chapter</h2>
                    <p className="text-sm text-[#FDFDFB]/70">
                      Bring the Collective to your city
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-[#FDFDFB]/70 mb-2">City/Region</label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="San Francisco, CA"
                        className="w-full px-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-[#FDFDFB]/70 mb-2">Your Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-[#FDFDFB]/70 mb-2">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="p-4 rounded-lg bg-[#7A6FF0]/10 border border-[#7A6FF0]/30">
                      <h3 className="text-sm font-medium text-[#FDFDFB] mb-2">What to Expect</h3>
                      <ul className="space-y-1 text-xs text-[#FDFDFB]/60">
                        <li>• Guidance from existing chapter leaders</li>
                        <li>• Access to resources and templates</li>
                        <li>• Connection to global network</li>
                      </ul>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(101,214,200,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setChapterFlow({ ...chapterFlow, step: 'confirmation' })}
                    disabled={!city || !name || !email}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Submit Application
                  </motion.button>
                </div>
              )}

              {chapterFlow.step === 'confirmation' && (
                <div className="text-center space-y-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] flex items-center justify-center"
                  >
                    <Check className="w-10 h-10 text-[#040619]" strokeWidth={3} />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl text-[#FDFDFB] mb-2">Application Received!</h2>
                    <p className="text-sm text-[#FDFDFB]/70">
                      We'll be in touch within 3-5 days to discuss next steps for {city}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={closeModal}
                    className="w-full py-3 rounded-lg border border-[#65D6C8]/50 text-[#65D6C8] hover:bg-[#65D6C8]/10 transition-all"
                  >
                    Close
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Builder Flow Modal
function BuilderFlowModal({ builderFlow, setBuilderFlow }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [expertise, setExpertise] = useState("");

  const closeModal = () => {
    setBuilderFlow({ active: false, step: 'form' });
    setName("");
    setEmail("");
    setExpertise("");
  };

  return (
    <AnimatePresence>
      {builderFlow.active && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#040619]/90 backdrop-blur-md z-[60]"
            onClick={closeModal}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed left-1/2 -translate-x-1/2 z-[60] w-full max-w-lg"
            style={{ top: "120px" }}
          >
            <div className="relative bg-[#1A1F35]/98 border border-[#65D6C8]/30 rounded-2xl p-8">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-[#65D6C8]/10 transition-colors"
              >
                <X className="w-5 h-5 text-[#FDFDFB]/60" />
              </button>

              {builderFlow.step === 'form' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-[#040619]" />
                    </div>
                    <h2 className="text-2xl text-[#FDFDFB] mb-2">Become a Builder</h2>
                    <p className="text-sm text-[#FDFDFB]/70">
                      Join our community of thinkers and creators
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-[#FDFDFB]/70 mb-2">Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-[#FDFDFB]/70 mb-2">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-[#FDFDFB]/70 mb-2">Area of Expertise</label>
                      <input
                        type="text"
                        value={expertise}
                        onChange={(e) => setExpertise(e.target.value)}
                        placeholder="AI Ethics, Design, Research..."
                        className="w-full px-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="p-4 rounded-lg bg-[#65D6C8]/10 border border-[#65D6C8]/30">
                      <h3 className="text-sm font-medium text-[#FDFDFB] mb-2">Builder Benefits</h3>
                      <ul className="space-y-1 text-xs text-[#FDFDFB]/60">
                        <li>• Early access to programs</li>
                        <li>• Collaborate on projects</li>
                        <li>• Connect with community</li>
                      </ul>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(101,214,200,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setBuilderFlow({ ...builderFlow, step: 'confirmation' })}
                    disabled={!name || !email || !expertise}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Join the Collective
                  </motion.button>
                </div>
              )}

              {builderFlow.step === 'confirmation' && (
                <div className="text-center space-y-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] flex items-center justify-center"
                  >
                    <Check className="w-10 h-10 text-[#040619]" strokeWidth={3} />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl text-[#FDFDFB] mb-2">Welcome, Builder!</h2>
                    <p className="text-sm text-[#FDFDFB]/70">
                      Check {email} for next steps and community access
                    </p>
                  </div>
                  <p className="text-xs text-[#FDFDFB]/50 italic">
                    "From the first tool of thought to collective intelligence"
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={closeModal}
                    className="w-full py-3 rounded-lg border border-[#65D6C8]/50 text-[#65D6C8] hover:bg-[#65D6C8]/10 transition-all"
                  >
                    Close
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
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
// FINAL CTA SECTION
// ========================================

function FinalCTASection({ setDonateFlow, setChapterFlow, setBuilderFlow }: any) {
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
          <motion.button 
            whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(101,214,200,0.5)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setChapterFlow({ active: true, step: 'form' })}
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium transition-all flex items-center gap-3"
          >
            <Users className="w-5 h-5" />
            Start a Chapter
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setBuilderFlow({ active: true, step: 'form' })}
            className="px-8 py-4 rounded-lg border border-[#65D6C8]/50 text-[#65D6C8] hover:bg-[#65D6C8]/10 transition-all flex items-center gap-3"
          >
            <Sparkles className="w-5 h-5" />
            Become a Builder
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setDonateFlow({ active: true, step: 'amount', amount: null, source: 'final' })}
            className="text-sm text-[#65D6C8] hover:text-[#A8F0E4] transition-colors flex items-center gap-2 mx-auto"
          >
            <Heart className="w-4 h-4" />
            Or support with a donation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}


