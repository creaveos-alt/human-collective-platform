"use client";

import { useState } from "react";
import { Sparkles, BarChart3 } from "lucide-react";
import { EnhancedImpactMetricsSection } from "./EnhancedMetrics";

// Import the original from Hero.tsx - we'll need to extract it
// For now, creating a wrapper that shows both versions

export function MetricsComparisonToggle() {
  const [useEnhanced, setUseEnhanced] = useState(true);

  return (
    <div className="relative">
      {/* Toggle Control - Fixed position */}
      <div className="sticky top-24 z-50 flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 p-2 bg-[#040619]/95 backdrop-blur-xl border border-[#65D6C8]/30 rounded-lg shadow-[0_0_30px_rgba(101,214,200,0.2)]">
          <button
            onClick={() => setUseEnhanced(false)}
            className={`flex items-center gap-2 px-4 py-2 rounded text-xs transition-all duration-400 ${
              !useEnhanced 
                ? "bg-gradient-to-r from-[#65D6C8]/20 to-[#7A6FF0]/20 text-[#65D6C8] border border-[#65D6C8]/30" 
                : "text-[#FDFDFB]/50 hover:text-[#FDFDFB]/70"
            }`}
          >
            <BarChart3 className="w-4 h-4" />
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
            Resonance Field
          </button>
        </div>
      </div>

      {/* Design Indicator Banner */}
      {useEnhanced ? (
        <div className="mb-6 p-4 bg-gradient-to-r from-[#7A6FF0]/20 to-[#65D6C8]/20 border-2 border-[#7A6FF0]/40 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#7A6FF0] animate-pulse"></div>
            <p className="text-sm text-[#FDFDFB] font-medium">✨ RESONANCE FIELD — Enhanced with living animations</p>
          </div>
        </div>
      ) : (
        <div className="mb-6 p-4 bg-gradient-to-r from-[#65D6C8]/20 to-[#7A6FF0]/20 border-2 border-[#65D6C8]/40 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#65D6C8]"></div>
            <p className="text-sm text-[#FDFDFB] font-medium">📊 CURRENT DESIGN — Clean and elegant</p>
          </div>
        </div>
      )}

      {/* Render Selected Version */}
      {useEnhanced && <EnhancedImpactMetricsSection />}
      
      {!useEnhanced && (
        <div className="p-8 bg-[#040619]/50 border border-[#65D6C8]/20 rounded-lg text-center">
          <p className="text-[#FDFDFB]/60 text-sm">
            Current design from Hero.tsx would render here.
            <br />
            (Toggle to "Resonance Field" to see the enhanced version)
          </p>
        </div>
      )}

      {/* Design Notes */}
      <div className="mt-8 p-6 bg-[#7A6FF0]/5 border border-[#7A6FF0]/20 rounded-lg space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#65D6C8]"></div>
          <p className="text-xs text-[#65D6C8] uppercase tracking-wider">
            {useEnhanced ? "✨ Resonance Field Enhancements" : "📊 Current Design Features"}
          </p>
        </div>

        {useEnhanced ? (
          <div className="space-y-4">
            {/* Philosophy */}
            <div className="pl-4 border-l-2 border-[#65D6C8]/20 space-y-2">
              <p className="text-xs text-[#FDFDFB] italic">
                "Each metric is a note; together they form a visual chord. Numbers breathe, 
                particles bloom on interaction, and aurora threads connect them in a field of collective resonance."
              </p>
            </div>

            {/* Key Features */}
            <div className="text-xs text-[#FDFDFB]/60 space-y-2">
              <p className="text-[#65D6C8] uppercase tracking-wider mb-2">Creative Enhancements:</p>
              
              <div className="space-y-1.5">
                <p>
                  <strong className="text-[#FDFDFB]/80">🔢 Living Count-Up:</strong> Numbers animate from 0 to target (1.8s, ease-out expo) — feels like data awakening
                </p>
                
                <p>
                  <strong className="text-[#FDFDFB]/80">💫 Rhythmic Breathing:</strong> Each metric pulses at unique frequency (4-6s cycles) — musical chord concept
                </p>
                
                <p>
                  <strong className="text-[#FDFDFB]/80">🌊 Aurora Threads:</strong> Horizontal resonance line connects all metrics (desktop) — visual continuum
                </p>
                
                <p>
                  <strong className="text-[#FDFDFB]/80">✨ Particle Bloom:</strong> On hover, 8 light particles emanate outward (1s decay) — living interaction
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🎭 Parallax Depth:</strong> Multi-layer aurora backgrounds move at different speeds — cinematic depth
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">📱 Mobile Staff Lines:</strong> Vertical gradient line connects metrics in single column — musical staff metaphor
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">💎 Card Design:</strong> Bordered tiles with corner accents, backdrop blur — museum plinth aesthetic
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🌟 Aurora Sweep:</strong> On hover, gradient line travels across number (2s loop) — same as header CTAs
                </p>
              </div>
            </div>

            {/* Technical Details */}
            <div className="pt-3 border-t border-[#65D6C8]/10">
              <p className="text-xs text-[#FDFDFB]/50 leading-relaxed">
                <strong className="text-[#65D6C8]">Motion Philosophy:</strong> "Resonance in stillness" — 
                metrics aren't static facts, they're living reflections of collective action. 
                The breathing pulses (each at different rates) create a subtle visual harmony, 
                like watching candles flicker in a dark gallery. Hover interactions reward curiosity 
                with particle blooms, reinforcing that every engagement matters in the continuum.
              </p>
            </div>

            {/* Accessibility Note */}
            <div className="pt-2 text-center">
              <p className="text-xs text-[#FDFDFB]/40 italic">
                Respects prefers-reduced-motion — instant count appearance, no particles
              </p>
            </div>
          </div>
        ) : (
          <div className="text-xs text-[#FDFDFB]/60 space-y-1">
            <p>• Clean grid layout with shimmer effects</p>
            <p>• Staggered entrance animations</p>
            <p>• Gradient text with background position animation</p>
            <p>• Subtle hover glow effects</p>
            <p>• Aurora pulse background</p>
          </div>
        )}
      </div>
    </div>
  );
}
