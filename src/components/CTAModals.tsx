"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, Heart, Calendar, Sparkles, ArrowRight } from "lucide-react";
import { PolishedDonationModal } from "./PolishedDonationModal";

// Export the new polished donation modal
export { PolishedDonationModal as DonationModal };

// Event Modal - Lateral Aurora Slide
export function EventModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dimmed Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#040619]/90 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Slide Panel - From Right */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-2xl"
          >
            {/* Aurora Glow Left Edge */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#65D6C8] via-[#7A6FF0] to-[#65D6C8]">
              <div className="absolute inset-0 blur-xl bg-gradient-to-r from-[#65D6C8] to-transparent"></div>
            </div>

            {/* Content Panel */}
            <div className="h-full bg-[#1A1F35] border-l border-[#65D6C8]/30 overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-[#1A1F35]/95 backdrop-blur-lg border-b border-[#65D6C8]/20 p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[#65D6C8]" />
                      <span className="text-xs text-[#65D6C8] uppercase tracking-wider">Upcoming Event</span>
                    </div>
                    <h2 className="text-2xl text-[#FDFDFB]">Join the Collective</h2>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg text-[#FDFDFB]/60 hover:text-[#65D6C8] hover:bg-[#65D6C8]/10 transition-all duration-400"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6 space-y-8">
                {/* Featured Event */}
                <div className="relative group">
                  {/* Ambient Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/20 to-[#65D6C8]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative p-6 rounded-xl border border-[#7A6FF0]/30 bg-[#040619]/50 backdrop-blur-sm space-y-4">
                    {/* Event Badge */}
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#65D6C8]" />
                      <span className="text-xs text-[#65D6C8] uppercase tracking-wider">Featured Event</span>
                    </div>

                    {/* Event Details */}
                    <div>
                      <h3 className="text-xl text-[#FDFDFB] mb-2">Global AI Literacy Summit</h3>
                      <div className="text-sm text-[#FDFDFB]/60 space-y-1">
                        <p>📅 December 15, 2025 • 6:00 PM EST</p>
                        <p>📍 Virtual & In-Person (NYC, London, Tokyo)</p>
                        <p>👥 500+ Expected Attendees</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#FDFDFB]/70 leading-relaxed">
                      Join leaders, builders, and learners from around the world for an evening of dialogue, workshops, and collective vision-setting. Experience the intersection of human wisdom and intelligent systems.
                    </p>

                    {/* CTA */}
                    <button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] hover:shadow-[0_0_30px_rgba(101,214,200,0.4)] transition-all duration-400">
                      Register Now
                    </button>
                  </div>
                </div>

                {/* More Events */}
                <div className="space-y-4">
                  <h4 className="text-sm text-[#FDFDFB]/60 uppercase tracking-wider">More Events</h4>
                  
                  {[
                    { date: "Dec 20", title: "AI Lunchbox Workshop", location: "Toronto", attendees: "45" },
                    { date: "Jan 10", title: "Community AI Showcase", location: "Nairobi", attendees: "60" },
                    { date: "Jan 22", title: "Ethics Roundtable", location: "Berlin", attendees: "30" },
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

                {/* Narrative Anchor */}
                <div className="text-center pt-4 border-t border-[#65D6C8]/10">
                  <p className="text-xs text-[#FDFDFB]/40 italic">
                    "From thought to action, every ripple shapes the field."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}