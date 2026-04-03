// This file will replace WireframeEditor.tsx
// Contains enhanced header and hero CTAs with modal interactions

import React from 'react';

export const ENHANCED_HEADER_PREVIEW = `
// Enhanced HeaderPreview with modal interactions
import { useState } from "react";
import { DonationModal, EventModal } from "./components/CTAModals";

function HeaderPreview({ content }: any) {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);

  return (
    <>
      <div className="space-y-6">
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 bg-[#040619]/95 backdrop-blur-lg border border-[#65D6C8]/20 rounded-lg">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <span className="text-xl bg-gradient-to-r from-[#7A6FF0] to-[#65D6C8] bg-clip-text text-transparent">
              {content.logo}
            </span>
            
            {/* Navigation Links */}
            <nav className="flex items-center gap-6">
              {content.navLinks.map((link: any) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="text-sm text-[#FDFDFB]/70 hover:text-[#65D6C8] transition-all duration-400 tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* CTA Buttons - Enhanced with Interactions */}
          {content.showCtasInHeader ? (
            <div className="flex items-center gap-3">
              {/* Join the Event - Ghost with Inner Glow */}
              <button 
                onClick={() => setShowEventModal(true)}
                className="group relative px-5 py-2.5 rounded-lg border border-[#7A6FF0]/50 bg-gradient-to-r from-[#7A6FF0]/5 to-[#65D6C8]/5 text-[#FDFDFB] text-sm tracking-wide overflow-hidden transition-all duration-400 hover:border-[#7A6FF0] hover:from-[#7A6FF0]/15 hover:to-[#65D6C8]/15 hover:shadow-[0_0_25px_rgba(122,111,240,0.4)]"
              >
                {/* Inner Shimmer on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[#FDFDFB]/10 to-transparent"></div>
                <span className="relative z-10">{content.ctaEvent}</span>
              </button>

              {/* Donate - Primary with Pulse Glow */}
              <button 
                onClick={() => setShowDonateModal(true)}
                className="group relative px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] text-sm tracking-wide overflow-hidden transition-all duration-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(101,214,200,0.5)]"
              >
                {/* Inner Glow Pulse */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#A8F0E4] to-[#7A6FF0] opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                <span className="relative z-10 font-medium">{content.ctaDonate}</span>
              </button>

              {/* Enter → - Solid Primary */}
              <button className="px-5 py-2.5 rounded-lg bg-[#65D6C8] text-[#040619] text-sm tracking-wide hover:bg-[#A8F0E4] hover:shadow-[0_0_25px_rgba(101,214,200,0.4)] transition-all duration-400">
                {content.ctaPrimary}
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              {/* Solo Primary CTA */}
              <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] text-sm tracking-wide hover:shadow-[0_0_30px_rgba(101,214,200,0.4)] transition-all duration-400">
                {content.ctaPrimary}
              </button>
            </div>
          )}
        </div>

        {/* Design Notes */}
        <div className="p-4 bg-[#7A6FF0]/5 border border-[#7A6FF0]/20 rounded-lg space-y-2">
          <p className="text-xs text-[#65D6C8] uppercase tracking-wider">
            {content.showCtasInHeader ? "Interactive Header CTAs" : "Clean Navigation (Current)"}
          </p>
          <div className="text-xs text-[#FDFDFB]/60 space-y-1">
            {content.showCtasInHeader ? (
              <>
                <p>• <strong>Donate:</strong> Opens museum plinth modal with soft dimmed overlay</p>
                <p>• <strong>Join Event:</strong> Triggers lateral aurora-slide panel from right</p>
                <p>• <strong>Hover Effects:</strong> Shimmer gradient, inner glow pulse, scale transform</p>
                <p>• <strong>Typography:</strong> Medium weight, tracking-wide for elegance</p>
              </>
            ) : (
              <>
                <p>• Clean navigation-focused header with single CTA</p>
                <p>• Primary conversion actions in Hero for maximum impact</p>
                <p>• Museum aesthetic — intentional restraint</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      <DonationModal isOpen={showDonateModal} onClose={() => setShowDonateModal(false)} />
      <EventModal isOpen={showEventModal} onClose={() => setShowEventModal(false)} />
    </>
  );
}
`;

export const ENHANCED_HERO_PREVIEW = `
// Enhanced HeroPreview with aurora wave effects
import { useState } from "react";
import { motion } from "motion/react";
import { DonationModal, EventModal } from "./components/CTAModals";

function HeroPreview({ content }: any) {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);

  return (
    <>
      <div className="relative py-20">
        {/* Ambient Glow Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
          <motion.div 
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-96 h-96 bg-gradient-to-br from-[#7A6FF0]/20 via-[#65D6C8]/20 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="relative space-y-16 text-center">
          {/* Acheulean Mark (Aurora Crystal Symbol) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-56 h-56 mx-auto relative"
          >
            {/* Pulsing Rings */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 border border-[#7A6FF0]/30 rounded-full"
            />
            <div className="absolute inset-4 border border-[#65D6C8]/20 rounded-full"></div>
            
            {/* Inner Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 bg-gradient-to-br from-[#7A6FF0]/30 to-[#65D6C8]/30 rounded-full blur-2xl"></div>
            </div>
            
            {/* Crystal Symbol */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span 
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="text-7xl bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] bg-clip-text text-transparent"
              >
                ◆
              </motion.span>
            </div>

            {/* Museum Frame Corners */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-[#65D6C8]/20"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t border-r border-[#65D6C8]/20"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-[#65D6C8]/20"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-[#65D6C8]/20"></div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-3"
          >
            <h1 className="text-5xl text-[#FDFDFB] max-w-4xl mx-auto tracking-tight">
              {content.headline}
            </h1>
            <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#65D6C8]/40 to-transparent"></div>
          </motion.div>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-8 max-w-4xl mx-auto"
          >
            <p className="text-lg text-[#FDFDFB]/80 leading-relaxed px-8">
              {content.subtext1}
            </p>
            <p className="text-base text-[#FDFDFB]/60 leading-relaxed max-w-3xl mx-auto px-8">
              {content.subtext2}
            </p>
          </motion.div>

          {/* CTAs with Aurora Wave Effect */}
          {content.showCtasInHero && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="pt-12 space-y-10"
            >
              {/* CTA Container with Aurora Wave */}
              <div className="relative">
                {/* Aurora Wave Background - Animated */}
                <motion.div
                  animate={{
                    x: [-100, 100, -100],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-32 bg-gradient-to-r from-[#7A6FF0]/20 via-[#65D6C8]/20 to-[#7A6FF0]/20 blur-3xl rounded-full"
                />
                
                {/* Buttons */}
                <div className="relative flex items-center justify-center gap-6">
                  {/* Donate - Primary Illuminated Exhibit */}
                  <button 
                    onClick={() => setShowDonateModal(true)}
                    className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] overflow-hidden transition-all duration-400 hover:scale-105 hover:shadow-[0_0_40px_rgba(101,214,200,0.6)]"
                  >
                    {/* Inner Glow Pulse on Hover */}
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1.2, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-gradient-to-r from-[#A8F0E4] to-[#7A6FF0] blur-md"
                    />
                    <span className="relative z-10 font-medium">{content.ctaDonate}</span>
                  </button>

                  {/* Join the Event - Ghost with Gradient Shimmer */}
                  <button 
                    onClick={() => setShowEventModal(true)}
                    className="group relative px-8 py-4 rounded-lg border-2 border-[#7A6FF0]/50 bg-gradient-to-r from-[#7A6FF0]/5 to-[#65D6C8]/5 text-[#FDFDFB] backdrop-blur-sm overflow-hidden transition-all duration-400 hover:border-[#7A6FF0] hover:from-[#7A6FF0]/15 hover:to-[#65D6C8]/15 hover:shadow-[0_0_35px_rgba(122,111,240,0.5)]"
                  >
                    {/* Shimmer Wave Effect */}
                    <motion.div 
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FDFDFB]/15 to-transparent"
                    />
                    <span className="relative z-10">{content.ctaEvent}</span>
                  </button>
                </div>
              </div>

              {/* Narrative Anchor - Museum Plaque */}
              <div className="flex items-center justify-center gap-3">
                <motion.div 
                  animate={{ scaleX: [0.8, 1, 0.8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-8 h-px bg-gradient-to-r from-transparent to-[#65D6C8]/30"
                />
                <p className="text-xs text-[#FDFDFB]/40 italic tracking-wide">
                  From thought to action, every ripple shapes the field.
                </p>
                <motion.div 
                  animate={{ scaleX: [0.8, 1, 0.8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="w-8 h-px bg-gradient-to-l from-transparent to-[#65D6C8]/30"
                />
              </div>
            </motion.div>
          )}

          {/* Design Philosophy */}
          {content.showCtasInHero && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-16 p-6 max-w-3xl mx-auto border border-[#7A6FF0]/20 rounded-lg bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 backdrop-blur-sm"
            >
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#65D6C8]"></div>
                  <p className="text-xs text-[#65D6C8] uppercase tracking-wider">Interactive Design Philosophy</p>
                </div>
                <div className="text-xs text-[#FDFDFB]/60 leading-relaxed space-y-2">
                  <p>• <strong>Aurora wave animation:</strong> Continuous gradient flow beneath CTAs (10s cycle) signifies energy in motion</p>
                  <p>• <strong>Donate interaction:</strong> Opens soft dimmed overlay modal — illuminated plinth in museum darkness</p>
                  <p>• <strong>Event interaction:</strong> Triggers lateral slide overlay from right — aurora-edged panel with ambient motion</p>
                  <p>• <strong>Hover micro-animations:</strong> Inner glow pulse (Donate), gradient shimmer wave (Event), scale transforms</p>
                  <p>• <strong>Breathing crystal:</strong> Subtle rotation and pulsing rings create living, inviting atmosphere</p>
                  <p>• <strong>Narrative rhythm:</strong> Symbol breathes → Headlines appear → CTAs emerge with aurora support</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Modals */}
      <DonationModal isOpen={showDonateModal} onClose={() => setShowDonateModal(false)} />
      <EventModal isOpen={showEventModal} onClose={() => setShowEventModal(false)} />
    </>
  );
}
`;
