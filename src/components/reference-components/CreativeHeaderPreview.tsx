"use client";

import { motion } from "motion/react";
import { CreativeHeaderCTAs } from "./CreativeHeaderCTAs";

/**
 * CREATIVE HEADER PREVIEW
 * 
 * Reimagines the Header CTAs as "illuminated constellation nodes" rather than traditional buttons
 * Inspired by museum exhibits that glow softly in darkness, inviting exploration
 */

export function CreativeHeaderPreview({ content }: any) {
  return (
    <div className="space-y-6">
      {/* Clear Indicator */}
      <div className="p-3 bg-gradient-to-r from-[#7A6FF0]/20 to-[#65D6C8]/20 border-2 border-[#7A6FF0]/40 rounded-lg text-center">
        <div className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#7A6FF0] animate-pulse"></div>
          <p className="text-sm text-[#FDFDFB] font-medium">✨ CONSTELLATION NODES DESIGN — Circular Glowing Orbs</p>
        </div>
      </div>

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

        {/* Creative CTAs - Constellation Nodes */}
        {content.showCtasInHeader ? (
          <CreativeHeaderCTAs content={content} />
        ) : (
          <div className="flex items-center gap-3">
            {/* Solo Primary CTA */}
            <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] text-sm tracking-wide hover:shadow-[0_0_30px_rgba(101,214,200,0.4)] transition-all duration-400">
              {content.ctaPrimary}
            </button>
          </div>
        )}
      </div>

      {/* Design Philosophy & Interaction Guide */}
      <div className="space-y-4">
        {/* Visual Pattern Sample */}
        {content.showCtasInHeader && (
          <div className="p-6 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 border border-[#65D6C8]/20 rounded-lg">
            <div className="flex items-center justify-center gap-12 py-8">
              {/* Miniature constellation visualization */}
              <div className="relative flex items-center gap-8">
                {/* Node 1 - Donate */}
                <div className="relative z-10">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-6 h-6 rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] shadow-[0_0_15px_rgba(101,214,200,0.5)]"
                  />
                </div>

                {/* Node 2 - Event */}
                <div className="relative z-10">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                    className="w-6 h-6 rounded-full border-2 border-[#7A6FF0] bg-[#7A6FF0]/20 shadow-[0_0_15px_rgba(122,111,240,0.5)]"
                  />
                </div>
              </div>

              {/* Pattern descriptor */}
              <div className="text-left space-y-1">
                <div className="text-xs text-[#65D6C8] uppercase tracking-wider">Constellation Pattern</div>
                <div className="text-xs text-[#FDFDFB]/50 italic">Breathing nodes in the continuum</div>
              </div>
            </div>
          </div>
        )}

        {/* Creative Design Notes */}
        <div className="p-4 bg-[#7A6FF0]/5 border border-[#7A6FF0]/20 rounded-lg space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#65D6C8]"></div>
            <p className="text-xs text-[#65D6C8] uppercase tracking-wider">
              {content.showCtasInHeader ? "✨ Creative Constellation Design" : "Clean Navigation (Current)"}
            </p>
          </div>

          {content.showCtasInHeader ? (
            <div className="space-y-4">
              {/* Core Philosophy */}
              <div className="pl-4 border-l-2 border-[#65D6C8]/20 space-y-2">
                <p className="text-xs text-[#FDFDFB] italic">
                  "Instead of buttons demanding clicks, illuminated nodes invite exploration—
                  like exhibits in a museum that glow softly, revealing their purpose through proximity."
                </p>
              </div>

              {/* Interaction Details */}
              <div className="text-xs text-[#FDFDFB]/60 space-y-2">
                <p className="text-[#65D6C8] uppercase tracking-wider mb-2">Interaction Behaviors:</p>
                
                <div className="space-y-1.5">
                  <p>
                    <strong className="text-[#FDFDFB]/80">🌬️ Ambient Breathing:</strong> Nodes pulse gently (3s cycle, offset rhythm) — alive, not static
                  </p>
                  
                  <p>
                    <strong className="text-[#FDFDFB]/80">💫 Contextual Revelation:</strong> Hover reveals intent card before commitment — no mystery, just clarity
                  </p>
                  
                  <p>
                    <strong className="text-[#FDFDFB]/80">🌊 Aurora Thread:</strong> Connecting gradient line shows they're part of the same continuum (4s flow)
                  </p>
                  
                  <p>
                    <strong className="text-[#FDFDFB]/80">🎭 Theatrical Transition:</strong> Click opens modals/panels maintaining constellation aesthetic
                  </p>

                  <p>
                    <strong className="text-[#FDFDFB]/80">🔮 Node Styles:</strong> Donate = filled aurora gradient | Event = outlined with inner glow
                  </p>

                  <p>
                    <strong className="text-[#FDFDFB]/80">🔗 Connection Rays:</strong> Subtle aurora beam links orb to opened modal/panel (280ms reveal)
                  </p>

                  <p>
                    <strong className="text-[#FDFDFB]/80">📏 Proportions:</strong> 40px nodes, 6px gap to thread, "Enter →" removed for cleaner constellation
                  </p>
                </div>
              </div>

              {/* Design Rationale */}
              <div className="pt-3 border-t border-[#65D6C8]/10">
                <p className="text-xs text-[#FDFDFB]/50 leading-relaxed">
                  <strong className="text-[#65D6C8]">Recent Fixes:</strong> Removed "Enter →" button for cleaner constellation. 
                  Donate modal now anchors to hero (not viewport center) with connection ray from Heart orb. 
                  Event panel expands horizontally beneath CTAs (not slide from right) with aurora beam from Calendar orb. 
                  Tooltips harmonized to never clip or push modals. All interactions maintain breathing-orb aesthetic 
                  within the Constellation Nodes — Circular Glowing Orbs system.
                </p>
              </div>

              <div className="pt-2">
                <p className="text-xs text-[#FDFDFB]/50 leading-relaxed">
                  <strong className="text-[#65D6C8]">Why this approach?</strong> Traditional buttons in headers create visual noise. 
                  This constellation pattern maintains the "museum in darkness" aesthetic — quiet reverence, intentional interaction, 
                  and the feeling that every gesture is meaningful. The breathing animation suggests these aren't static objects 
                  but living invitation points in the collective intelligence network.
                </p>
              </div>

              {/* Narrative Anchor */}
              <div className="pt-2 text-center">
                <p className="text-xs text-[#FDFDFB]/40 italic">
                  "Each gesture, a spark in the continuum."
                </p>
              </div>
            </div>
          ) : (
            <div className="text-xs text-[#FDFDFB]/60 space-y-1">
              <p>• Clean navigation-focused header with single CTA</p>
              <p>• Primary conversion actions in Hero for maximum impact</p>
              <p>• Museum aesthetic — intentional restraint</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}