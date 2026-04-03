"use client";

import { useState } from "react";
import { Sparkles, LayoutGrid } from "lucide-react";

/**
 * Pillars Preview Toggle for Wireframe Editor
 * Allows switching between current and enhanced versions
 */

export function PillarsPreviewToggle({ content }: any) {
  const [useEnhanced, setUseEnhanced] = useState(true);

  return (
    <div className="space-y-6">
      {/* Style Toggle */}
      <div className="flex items-center justify-center gap-2 p-2 bg-[#040619]/50 border border-[#65D6C8]/20 rounded-lg">
        <button
          onClick={() => setUseEnhanced(false)}
          className={`flex items-center gap-2 px-4 py-2 rounded text-xs transition-all duration-400 ${
            !useEnhanced 
              ? "bg-gradient-to-r from-[#65D6C8]/20 to-[#7A6FF0]/20 text-[#65D6C8] border border-[#65D6C8]/30" 
              : "text-[#FDFDFB]/50 hover:text-[#FDFDFB]/70"
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
          Current Design
        </button>
        
        <button
          onClick={() => setUseEnhanced(true)}
          className={`flex items-center gap-2 px-4 py-2 rounded text-xs transition-all duration-400 ${
            useEnhanced 
              ? "bg-gradient-to-r from-[#65D6C8]/20 to-[#7A6FF0]/20 text-[#65D6C8] border border-[#65D6C8]/30" 
              : "text-[#FDFDFB]/50 hover:text-[#FDFDFB]/70"
          }`}
        >
          <Sparkles className="w-4 h-4" />
          Light Becomes Architecture
        </button>
      </div>

      {/* Design Indicator */}
      {useEnhanced ? (
        <div className="p-3 bg-gradient-to-r from-[#7A6FF0]/20 to-[#65D6C8]/20 border-2 border-[#7A6FF0]/40 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#7A6FF0] animate-pulse"></div>
            <p className="text-sm text-[#FDFDFB] font-medium">✨ LIGHT BECOMES ARCHITECTURE — Custom icons, CTAs, modals</p>
          </div>
        </div>
      ) : (
        <div className="p-3 bg-gradient-to-r from-[#65D6C8]/20 to-[#7A6FF0]/20 border-2 border-[#65D6C8]/40 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#65D6C8]"></div>
            <p className="text-sm text-[#FDFDFB] font-medium">🎴 CURRENT DESIGN — Gradient cards</p>
          </div>
        </div>
      )}

      {/* Render Selected Design */}
      {useEnhanced ? (
        <EnhancedPillarsPreview content={content} />
      ) : (
        <CurrentPillarsPreview content={content} />
      )}

      {/* Design Comparison Notes */}
      <div className="p-4 bg-[#7A6FF0]/5 border border-[#7A6FF0]/20 rounded-lg space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#65D6C8]"></div>
          <p className="text-xs text-[#65D6C8] uppercase tracking-wider">
            {useEnhanced ? "✨ Light Becomes Architecture" : "🎴 Current Design"}
          </p>
        </div>

        {useEnhanced ? (
          <div className="space-y-3">
            {/* Philosophy */}
            <div className="pl-4 border-l-2 border-[#65D6C8]/20 space-y-2">
              <p className="text-xs text-[#FDFDFB] italic">
                "The Hero's aurora field crystallizes into three illuminated nodes. 
                AI Lunchbox glows brightest as the magnum opus — each pillar has its own 
                CTA opening contextual modals for deeper engagement."
              </p>
            </div>

            {/* Key Features */}
            <div className="text-xs text-[#FDFDFB]/60 space-y-2">
              <p className="text-[#65D6C8] uppercase tracking-wider mb-2">Creative Enhancements:</p>
              
              <div className="space-y-1.5">
                <p>
                  <strong className="text-[#FDFDFB]/80">💎 Custom Geometric Icons:</strong> Lunchbox (bento diamond radiating light), 
                  Entrepreneurship (interlocking loops), Think Tank (Vitruvian grid-sphere)
                </p>
                
                <p>
                  <strong className="text-[#FDFDFB]/80">🌟 AI Lunchbox Emphasis:</strong> Scale +3%, ambient halo glow (80px blur), 
                  breathing animation (6s cycle, opacity 0.9→1.0)
                </p>
                
                <p>
                  <strong className="text-[#FDFDFB]/80">🎯 Individual CTAs:</strong> Each pillar has contextual action button 
                  (Join Program / Explore / Read Insights)
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🪟 Modal Overlays:</strong> Lunchbox = teal portal overlay, 
                  Initiatives = card grid modal, Insights = right-panel slide
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🏛️ Glass Panel Design:</strong> Bordered cards (#111931/80%), 
                  gradient border (teal→violet/25%), aurora reflections, 20px radius
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🎨 Visual Hierarchy:</strong> Primary (Lunchbox), Secondary (Entrepreneurship), 
                  Tertiary (Think Tank) — color warmth reflects purpose
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🌊 Aurora Continuity:</strong> Background continues from Metrics Wall, 
                  deepened contrast behind Lunchbox anchors focus
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">✨ Sequential Reveal:</strong> Title → Subtitle → Cards (200ms stagger L→R) → 
                  Icons glow → CTAs lift (4px, 120ms delay)
                </p>
              </div>
            </div>

            {/* Icon Design Philosophy */}
            <div className="pt-3 border-t border-[#65D6C8]/10">
              <p className="text-xs text-[#FDFDFB]/50 leading-relaxed">
                <strong className="text-[#65D6C8]">Icon Language:</strong> Each icon echoes the Hero's aurora crystal geometry — 
                Lunchbox uses the central diamond divided into "bento compartments" with light radiating upward (collective learning). 
                Entrepreneurship shows interlocking spirals (growth & reciprocity). Think Tank presents a Vitruvian grid-sphere 
                with light bands (equilibrium between systems & ethics). All share gradient flows and breathing animations.
              </p>
            </div>

            {/* CTA Interactions */}
            <div className="pt-2">
              <p className="text-xs text-[#FDFDFB]/50 leading-relaxed">
                <strong className="text-[#65D6C8]">CTA Modals:</strong> Lunchbox opens immersive teal-dominant overlay (learning portal), 
                Initiatives shows grid of community ventures, Insights slides in right-panel with research articles. 
                All maintain Hero's motion language (fade + glow emergence, 0.3s ease-out).
              </p>
            </div>

            {/* Accessibility Note */}
            <div className="pt-2 text-center">
              <p className="text-xs text-[#FDFDFB]/40 italic">
                Keyboard accessible (Tab navigation), focus rings #00EAD2 2px, ESC to close modals
              </p>
            </div>
          </div>
        ) : (
          <div className="text-xs text-[#FDFDFB]/60 space-y-1">
            <p>• Gradient background cards with emoji icons</p>
            <p>• Staggered entrance animations (200ms)</p>
            <p>• Hover lift and border glow effects</p>
            <p>• "Learn more" indicator with arrow animation</p>
            <p>• Radial dot pattern background</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Enhanced Version Preview (simplified for wireframe)
function EnhancedPillarsPreview({ content }: any) {
  const pillarData = [
    { 
      title: "AI Lunchbox", 
      subtitle: "Foundational AI Literacy",
      cta: "Join Program",
      isPrimary: true,
      color: "#65D6C8"
    },
    { 
      title: "Micro-Entrepreneurship", 
      subtitle: "Economic Access & Dignity",
      cta: "Explore",
      isPrimary: false,
      color: "#A8F0E4"
    },
    { 
      title: "Think Tank", 
      subtitle: "Research & Policy",
      cta: "Read Insights",
      isPrimary: false,
      color: "#7A6FF0"
    },
  ];

  return (
    <div className="space-y-8 p-8 bg-gradient-to-b from-[#0E1B4C] via-[#0B1022] to-[#040619] rounded-lg">
      {/* Header */}
      <div className="text-center space-y-3">
        <h2 className="text-4xl text-[#FDFDFB] font-semibold">
          The Three Pillars of{" "}
          <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
            the Collective
          </span>
        </h2>
        <p className="text-sm text-[#FDFDFB]/70 max-w-2xl mx-auto">
          From the first light of learning to systems of dignity and wisdom
        </p>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-3 gap-8 relative">
        {/* Lunchbox ambient halo (behind center card) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00EAD2]/10 rounded-full blur-3xl pointer-events-none" />

        {pillarData.map((pillar, i) => (
          <div 
            key={i}
            className="relative group"
            style={{
              transform: pillar.isPrimary ? 'scale(1.05)' : 'scale(1)'
            }}
          >
            {/* Glass panel card */}
            <div className="relative h-80 rounded-[20px] p-6 bg-[#111931]/80 backdrop-blur-sm border-2 border-transparent hover:border-[#65D6C8]/40 transition-all duration-400">
              {/* Gradient border effect */}
              <div 
                className="absolute inset-0 rounded-[20px] opacity-25"
                style={{
                  background: `linear-gradient(135deg, ${pillar.color}40, #7A6FF040)`
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Custom icon placeholder */}
                <div 
                  className="w-16 h-16 mb-4 rounded-lg flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${pillar.color}20, transparent)`,
                    border: `1px solid ${pillar.color}40`
                  }}
                >
                  <div className="w-8 h-8 rounded-full animate-pulse" style={{ background: pillar.color }} />
                </div>

                {/* Subtitle */}
                <p className="text-xs text-[#7CE7E4] uppercase tracking-wider mb-1">
                  {pillar.subtitle}
                </p>

                {/* Title */}
                <h3 className="text-xl text-[#EAF0FF] font-medium mb-3">
                  {pillar.title}
                </h3>

                {/* Description snippet */}
                <p className="text-xs text-[#BBD0FF] leading-relaxed mb-4 flex-grow">
                  A collaborative program designed to expand access and deepen understanding...
                </p>

                {/* CTA */}
                <button
                  className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-all duration-400 ${
                    pillar.isPrimary
                      ? "bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619]"
                      : "border border-[#FDFDFB]/20 text-[#FDFDFB]"
                  }`}
                >
                  {pillar.cta} →
                </button>
              </div>

              {/* Primary emphasis glow */}
              {pillar.isPrimary && (
                <div className="absolute -inset-2 bg-gradient-to-br from-[#65D6C8]/20 to-transparent rounded-[22px] blur-xl pointer-events-none opacity-60 animate-pulse" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Narrative anchor */}
      <div className="text-center pt-4">
        <p className="text-xs text-[#FDFDFB]/50 italic">
          "Not a new chapter, but a continuation — light crystallized into form"
        </p>
      </div>
    </div>
  );
}

// Current Version Preview
function CurrentPillarsPreview({ content }: any) {
  const pillars = [
    { title: "AI Lunchbox", subtitle: "Foundational AI Literacy", icon: "🧠", gradient: "from-[#7A6FF0]/60 to-[#65D6C8]/40" },
    { title: "Micro-Entrepreneurship", subtitle: "Economic Access", icon: "🌱", gradient: "from-[#65D6C8]/60 to-[#A8F0E4]/40" },
    { title: "Think Tank", subtitle: "Research & Policy", icon: "🔮", gradient: "from-[#A8F0E4]/60 to-[#7A6FF0]/40" },
  ];

  return (
    <div className="space-y-8 p-8 bg-gradient-to-b from-[#040619] to-[#0a0a2e]/50 rounded-lg">
      {/* Header */}
      <div className="text-center space-y-3">
        <h2 className="text-4xl text-[#FDFDFB]">
          The Three Pillars of{" "}
          <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
            the Collective
          </span>
        </h2>
        <p className="text-sm text-[#FDFDFB]/70 max-w-2xl mx-auto">
          Each designed to expand access, deepen understanding, and ensure AI reflects collective intelligence.
        </p>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-3 gap-6">
        {pillars.map((pillar, i) => (
          <div 
            key={i}
            className={`relative h-80 rounded-2xl p-6 bg-gradient-to-br ${pillar.gradient} group hover:scale-105 transition-transform duration-400`}
          >
            {/* Icon */}
            <div className="text-5xl mb-4">{pillar.icon}</div>

            {/* Title */}
            <h3 className="text-2xl text-[#FDFDFB] mb-2">
              {pillar.title}
            </h3>

            {/* Subtitle */}
            <p className="text-[#FDFDFB]/80 text-sm mb-4">
              {pillar.subtitle}
            </p>

            {/* Description */}
            <p className="text-[#FDFDFB]/70 text-xs leading-relaxed">
              Supporting the collective through accessible learning and shared wisdom...
            </p>

            {/* Learn more indicator */}
            <div className="absolute bottom-6 left-6 text-[#FDFDFB] text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Learn more →
            </div>

            {/* Hover border glow */}
            <div className="absolute inset-0 rounded-2xl border-2 border-[#65D6C8] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
}
