"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Heart, Calendar, Info, X, Sparkles, ArrowRight } from "lucide-react";

/**
 * CREATIVE HEADER CTAs - Constellation Nodes (Circular Glowing Orbs System)
 * 
 * Design Philosophy:
 * Instead of traditional buttons, these CTAs exist as "illuminated nodes" in a continuum—
 * like exhibits in a museum that glow softly in the darkness, inviting exploration
 * without demanding attention.
 * 
 * Key Concepts:
 * 1. Ambient Breathing - Gentle pulse shows they're alive, not static
 * 2. Contextual Revelation - Hover reveals intent before commitment
 * 3. Aurora Thread - Visual connection showing they're part of the same continuum
 * 4. Connection Rays - Subtle beam linking orb to opened modal/panel
 * 5. Theatrical Transition - Interface dims and spotlights the chosen path
 * 
 * FIXES APPLIED:
 * - Removed "Enter →" button entirely
 * - Fixed Donate Modal positioning (anchored to hero, not viewport)
 * - Fixed Event Panel (expands within banner horizontally beneath CTAs)
 * - Added connection rays from orbs to modals/panels
 * - Harmonized tooltip behavior
 */

export function CreativeHeaderCTAs({ content }: any) {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showEventPanel, setShowEventPanel] = useState(false);
  const [hoveredCTA, setHoveredCTA] = useState<string | null>(null);

  return (
    <>
      <div className="relative flex items-center gap-6">
        {/* Aurora Thread - Connecting Line */}
        <div className="relative flex items-center gap-6">
          {/* DONATE NODE - Illuminated Marker */}
          <div className="relative z-10">
            <button
              onMouseEnter={() => setHoveredCTA("donate")}
              onMouseLeave={() => setHoveredCTA(null)}
              onClick={() => {
                setShowDonateModal(true);
                setShowEventPanel(false);
                setHoveredCTA(null);
              }}
              className="group relative"
              aria-label="Support the Continuum"
            >
              {/* Ambient Breathing Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 -m-3 bg-gradient-to-br from-[#65D6C8]/40 to-[#7A6FF0]/40 rounded-full blur-xl"
              />

              {/* Core Node */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] flex items-center justify-center shadow-[0_0_20px_rgba(101,214,200,0.4)]"
              >
                <Heart className="w-5 h-5 text-[#040619]" />
              </motion.div>

              {/* Label - Appears on Hover */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: hoveredCTA === "donate" ? 1 : 0,
                  y: hoveredCTA === "donate" ? 0 : 10
                }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-xs text-[#65D6C8] pointer-events-none"
              >
                Donate
              </motion.div>
            </button>

            {/* Contextual Info Card - Reveals on Hover */}
            <AnimatePresence>
              {hoveredCTA === "donate" && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-12 w-64 pointer-events-none z-50"
                >
                  {/* Ambient Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20 blur-2xl rounded-xl"></div>
                  
                  {/* Card Content */}
                  <div className="relative bg-[#1A1F35]/95 backdrop-blur-xl border border-[#65D6C8]/30 rounded-xl p-4 shadow-[0_0_30px_rgba(101,214,200,0.2)]">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20 flex items-center justify-center flex-shrink-0">
                        <Info className="w-4 h-4 text-[#65D6C8]" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-[#FDFDFB]">Support the Continuum</div>
                        <div className="text-xs text-[#FDFDFB]/60 leading-relaxed">
                          Help us build systems of care and expand collective intelligence
                        </div>
                      </div>
                    </div>
                    
                    {/* Subtle arrow indicator */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#1A1F35] border-t border-l border-[#65D6C8]/30"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* JOIN EVENT NODE - Illuminated Marker */}
          <div className="relative z-10">
            <button
              onMouseEnter={() => setHoveredCTA("event")}
              onMouseLeave={() => setHoveredCTA(null)}
              onClick={() => {
                setShowEventPanel(!showEventPanel);
                setShowDonateModal(false);
                setHoveredCTA(null);
              }}
              className="group relative"
              aria-label="Join upcoming events"
            >
              {/* Ambient Breathing Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5 // Offset from donate for wave effect
                }}
                className="absolute inset-0 -m-3 bg-gradient-to-br from-[#7A6FF0]/40 to-[#65D6C8]/40 rounded-full blur-xl"
              />

              {/* Core Node */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative w-10 h-10 rounded-full border-2 border-[#7A6FF0] bg-gradient-to-br from-[#7A6FF0]/10 to-[#65D6C8]/10 backdrop-blur-sm flex items-center justify-center shadow-[0_0_20px_rgba(122,111,240,0.4)]"
              >
                <Calendar className="w-5 h-5 text-[#7A6FF0]" />
              </motion.div>

              {/* Label - Appears on Hover */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: hoveredCTA === "event" ? 1 : 0,
                  y: hoveredCTA === "event" ? 0 : 10
                }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-xs text-[#7A6FF0] pointer-events-none"
              >
                Join Event
              </motion.div>
            </button>

            {/* Contextual Info Card - Reveals on Hover */}
            <AnimatePresence>
              {hoveredCTA === "event" && !showEventPanel && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-12 w-64 pointer-events-none z-50"
                >
                  {/* Ambient Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/20 to-[#65D6C8]/20 blur-2xl rounded-xl"></div>
                  
                  {/* Card Content */}
                  <div className="relative bg-[#1A1F35]/95 backdrop-blur-xl border border-[#7A6FF0]/30 rounded-xl p-4 shadow-[0_0_30px_rgba(122,111,240,0.2)]">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7A6FF0]/20 to-[#65D6C8]/20 flex items-center justify-center flex-shrink-0">
                        <Info className="w-4 h-4 text-[#7A6FF0]" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-[#FDFDFB]">Join the Collective</div>
                        <div className="text-xs text-[#FDFDFB]/60 leading-relaxed">
                          Experience upcoming gatherings, workshops, and dialogues
                        </div>
                      </div>
                    </div>
                    
                    {/* Subtle arrow indicator */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#1A1F35] border-t border-l border-[#7A6FF0]/30"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* "Enter →" button REMOVED as requested */}
        </div>

        {/* Event Panel - Expands Beneath CTA Cluster */}
        <AnimatePresence>
          {showEventPanel && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[600px] max-w-[calc(100vw-4rem)] z-40"
            >
              {/* Connection Glow Ray from Calendar Orb */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.22 }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-[#7A6FF0]/60 to-transparent origin-top"
              >
                <div className="absolute inset-0 w-2 -ml-0.5 bg-gradient-to-b from-[#7A6FF0]/30 to-transparent blur-sm"></div>
              </motion.div>

              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/15 to-[#65D6C8]/15 blur-2xl rounded-2xl"></div>

              {/* Panel Content */}
              <div className="relative bg-[#1A1F35]/98 backdrop-blur-xl border border-[#7A6FF0]/30 rounded-2xl shadow-[0_0_40px_rgba(122,111,240,0.25)] overflow-hidden">
                {/* Header */}
                <div className="flex items-start justify-between p-6 border-b border-[#7A6FF0]/20">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[#7A6FF0]" />
                      <span className="text-xs text-[#7A6FF0] uppercase tracking-wider">Upcoming Event</span>
                    </div>
                    <h3 className="text-xl text-[#FDFDFB]">Join the Collective</h3>
                  </div>
                  <button
                    onClick={() => setShowEventPanel(false)}
                    className="p-2 rounded-lg text-[#FDFDFB]/60 hover:text-[#7A6FF0] hover:bg-[#7A6FF0]/10 transition-all duration-400"
                    aria-label="Close event panel"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Event Content */}
                <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                  {/* Featured Event */}
                  <div className="relative group">
                    {/* Ambient Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/20 to-[#65D6C8]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative p-5 rounded-xl border border-[#7A6FF0]/30 bg-[#040619]/50 backdrop-blur-sm space-y-4">
                      {/* Event Badge */}
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#65D6C8]" />
                        <span className="text-xs text-[#65D6C8] uppercase tracking-wider">Featured Event</span>
                      </div>

                      {/* Event Details */}
                      <div>
                        <h4 className="text-lg text-[#FDFDFB] mb-2">Global AI Literacy Summit</h4>
                        <div className="text-sm text-[#FDFDFB]/60 space-y-1">
                          <p>📅 December 15, 2025 • 6:00 PM EST</p>
                          <p>📍 Virtual & In-Person (NYC, London, Tokyo)</p>
                          <p>👥 500+ Expected Attendees</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-[#FDFDFB]/70 leading-relaxed">
                        Join leaders, builders, and learners from around the world for an evening of dialogue, workshops, and collective vision-setting.
                      </p>

                      {/* CTA */}
                      <button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] hover:shadow-[0_0_30px_rgba(101,214,200,0.4)] transition-all duration-400 flex items-center justify-center gap-2">
                        Register Now
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* More Events */}
                  <div className="space-y-3">
                    <h5 className="text-xs text-[#FDFDFB]/60 uppercase tracking-wider">More Events</h5>
                    
                    {[
                      { date: "Dec 20", title: "AI Lunchbox Workshop", location: "Toronto", attendees: "45" },
                      { date: "Jan 10", title: "Community AI Showcase", location: "Nairobi", attendees: "60" },
                    ].map((event, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-lg border border-[#65D6C8]/20 bg-[#040619]/30 hover:border-[#65D6C8]/40 hover:bg-[#040619]/50 transition-all duration-400"
                      >
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <div className="text-xs text-[#65D6C8]">{event.date}</div>
                            <div className="text-sm text-[#FDFDFB]">{event.title}</div>
                            <div className="text-xs text-[#FDFDFB]/50">{event.location} • {event.attendees} attending</div>
                          </div>
                          <button className="px-3 py-1 rounded text-xs border border-[#7A6FF0]/40 text-[#7A6FF0] hover:bg-[#7A6FF0]/10 transition-all">
                            Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Donate Modal - Anchored to Hero Banner */}
      <AnimatePresence>
        {showDonateModal && (
          <>
            {/* Dimmed Overlay - Museum Night */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-[#040619]/90 backdrop-blur-md z-50"
              onClick={() => setShowDonateModal(false)}
            />

            {/* Modal Content - Anchored to Hero (not full viewport) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed left-1/2 -translate-x-1/2 z-50 w-full max-w-lg"
              style={{ 
                top: "min(20vh, 120px)", // Anchored to hero, not viewport center
                maxHeight: "calc(80vh - 120px)" // Stays within hero boundaries
              }}
            >
              {/* Connection Ray from Heart Orb */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute -top-20 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-[#65D6C8]/60 to-transparent origin-bottom"
              >
                <div className="absolute inset-0 w-2 -ml-0.5 bg-gradient-to-b from-[#65D6C8]/30 to-transparent blur-sm"></div>
              </motion.div>

              {/* Soft Shadow Halo (aurora gradient) */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#65D6C8]/18 to-[#7A6FF0]/18 blur-3xl rounded-2xl"></div>

              {/* Content Card */}
              <div className="relative bg-[#1A1F35]/98 border border-[#65D6C8]/30 rounded-2xl p-8 space-y-6 overflow-y-auto max-h-[calc(80vh-140px)]">
                {/* Close Button - Always Visible */}
                <button
                  onClick={() => setShowDonateModal(false)}
                  className="absolute top-4 right-4 p-2 rounded-lg text-[#FDFDFB]/60 hover:text-[#65D6C8] hover:bg-[#65D6C8]/10 transition-all duration-400 z-10"
                  aria-label="Close donation modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Icon - Museum Exhibit Style */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] blur-xl opacity-50"></div>
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] flex items-center justify-center">
                      <Heart className="w-8 h-8 text-[#040619]" fill="currentColor" />
                    </div>
                  </div>
                </div>

                {/* Headline */}
                <div className="text-center space-y-2">
                  <h2 className="text-2xl text-[#FDFDFB]">Support the Continuum</h2>
                  <div className="w-16 h-px mx-auto bg-gradient-to-r from-transparent via-[#65D6C8]/40 to-transparent"></div>
                </div>

                {/* Body Text */}
                <p className="text-sm text-[#FDFDFB]/70 text-center leading-relaxed">
                  Every contribution helps us build systems of care, expand access to AI literacy, and ensure collective intelligence reflects the dignity of all humanity.
                </p>

                {/* Donation Tiers */}
                <div className="space-y-3">
                  {[
                    { amount: "$25", label: "Community Member", description: "Support monthly AI workshops" },
                    { amount: "$100", label: "Chapter Builder", description: "Fund local chapter programs" },
                    { amount: "$500", label: "System Architect", description: "Enable research & policy work" },
                  ].map((tier) => (
                    <button
                      key={tier.amount}
                      className="group w-full p-4 rounded-lg border border-[#7A6FF0]/30 bg-[#7A6FF0]/5 hover:border-[#65D6C8] hover:bg-[#65D6C8]/10 transition-all duration-400 text-left"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-lg text-[#FDFDFB] group-hover:text-[#65D6C8] transition-colors">
                            {tier.amount} <span className="text-sm text-[#FDFDFB]/60">/ month</span>
                          </div>
                          <div className="text-xs text-[#FDFDFB]/50 mt-1">{tier.label}</div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-[#FDFDFB]/40 group-hover:text-[#65D6C8] group-hover:translate-x-1 transition-all" />
                      </div>
                      <div className="text-xs text-[#FDFDFB]/60 mt-2">{tier.description}</div>
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="pt-2 border-t border-[#65D6C8]/10">
                  <button className="w-full py-3 rounded-lg border border-[#65D6C8]/50 text-[#65D6C8] text-sm hover:bg-[#65D6C8]/10 transition-all duration-400">
                    Choose Custom Amount
                  </button>
                </div>

                {/* Narrative Anchor */}
                <div className="text-center">
                  <p className="text-xs text-[#FDFDFB]/40 italic">
                    "Each gesture, a spark in the continuum."
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
