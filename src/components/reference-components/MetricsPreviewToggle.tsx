"use client";

import { useState } from "react";
import { Sparkles, BarChart3 } from "lucide-react";

/**
 * Metrics Preview Toggle for Wireframe Editor
 * Allows switching between current and enhanced versions
 */

export function MetricsPreviewToggle({ content }: any) {
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

      {/* Design Indicator */}
      {useEnhanced ? (
        <div className="p-3 bg-gradient-to-r from-[#7A6FF0]/20 to-[#65D6C8]/20 border-2 border-[#7A6FF0]/40 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#7A6FF0] animate-pulse"></div>
            <p className="text-sm text-[#FDFDFB] font-medium">✨ RESONANCE FIELD — Living data with aurora threads</p>
          </div>
        </div>
      ) : (
        <div className="p-3 bg-gradient-to-r from-[#65D6C8]/20 to-[#7A6FF0]/20 border-2 border-[#65D6C8]/40 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#65D6C8]"></div>
            <p className="text-sm text-[#FDFDFB] font-medium">📊 CURRENT DESIGN — Clean grid layout</p>
          </div>
        </div>
      )}

      {/* Render Selected Design */}
      {useEnhanced ? (
        <EnhancedMetricsPreview content={content} />
      ) : (
        <CurrentMetricsPreview content={content} />
      )}

      {/* Design Comparison Notes */}
      <div className="p-4 bg-[#7A6FF0]/5 border border-[#7A6FF0]/20 rounded-lg space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#65D6C8]"></div>
          <p className="text-xs text-[#65D6C8] uppercase tracking-wider">
            {useEnhanced ? "✨ Resonance Field Features" : "📊 Current Design Features"}
          </p>
        </div>

        {useEnhanced ? (
          <div className="text-xs text-[#FDFDFB]/60 space-y-2">
            <p className="text-[#FDFDFB] italic mb-2">
              "Each metric is a luminous node in a field of resonance — numbers breathe, particles bloom, threads connect."
            </p>
            
            <div className="space-y-1">
              <p><strong className="text-[#FDFDFB]/80">🔢 Living Count-Up:</strong> 0 → target value (1.8s ease-out expo)</p>
              <p><strong className="text-[#FDFDFB]/80">💫 Rhythmic Breathing:</strong> Each metric pulses at unique frequency (4-6s cycles)</p>
              <p><strong className="text-[#FDFDFB]/80">🌊 Aurora Thread:</strong> Horizontal resonance line connecting metrics (desktop)</p>
              <p><strong className="text-[#FDFDFB]/80">✨ Particle Bloom:</strong> 8 light particles on hover (radial emanation)</p>
              <p><strong className="text-[#FDFDFB]/80">🎭 Parallax Aurora:</strong> Multi-layer background depth (30-40s cycles)</p>
              <p><strong className="text-[#FDFDFB]/80">💎 Card Design:</strong> Bordered tiles with corner accents + backdrop blur</p>
              <p><strong className="text-[#FDFDFB]/80">📱 Mobile Staff:</strong> Vertical gradient line (musical staff metaphor)</p>
            </div>

            <div className="pt-2 border-t border-[#65D6C8]/10 mt-3">
              <p className="text-[#FDFDFB]/50 leading-relaxed">
                <strong className="text-[#65D6C8]">Design Philosophy:</strong> Metrics aren't static — 
                they're living reflections of collective action. The breathing pulses create visual harmony, 
                like watching aurora lights shimmer. Hover reveals particle blooms, rewarding curiosity.
              </p>
            </div>
          </div>
        ) : (
          <div className="text-xs text-[#FDFDFB]/60 space-y-1">
            <p>• Clean grid with consistent spacing</p>
            <p>• Gradient numbers with shimmer animation</p>
            <p>• Staggered entrance (200ms intervals)</p>
            <p>• Subtle hover glow effects</p>
            <p>• Top divider with traveling light</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Enhanced Version Preview (simplified for wireframe)
function EnhancedMetricsPreview({ content }: any) {
  return (
    <div className="space-y-8 p-8 bg-gradient-to-b from-[#0B1022] to-[#0E1B4C] rounded-lg border border-[#65D6C8]/20">
      {/* Header */}
      <div className="text-center space-y-2">
        <p className="text-sm text-[#7CE7E4] uppercase tracking-[0.08em]">{content.heading}</p>
        <h2 className="text-3xl text-[#EAF0FF]">{content.subheading}</h2>
      </div>

      {/* Divider with glow */}
      <div className="relative h-px bg-[#00FFC2]/10">
        <div className="absolute inset-0 h-1 bg-[#00FFC2]/10 blur-sm" />
      </div>

      {/* Aurora Thread (visual indicator) */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#7A6FF0]/30 to-transparent" />

      {/* Metrics Grid */}
      <div className="relative grid grid-cols-5 gap-6">
        {content.metrics.map((metric: any, i: number) => (
          <div 
            key={i} 
            className="relative p-6 rounded-xl border border-[#65D6C8]/10 bg-gradient-to-br from-[#040619]/80 to-[#0a0a2e]/40 backdrop-blur-sm group"
          >
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#65D6C8]/5 to-transparent rounded-tr-xl" />
            
            {/* Number with breathing indicator */}
            <div className="relative mb-3">
              <div className="text-4xl font-semibold bg-gradient-to-r from-[#65D6C8] via-[#7A6FF0] to-[#A8F0E4] bg-clip-text text-transparent">
                {metric.number}
              </div>
              {/* Pulse indicator */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#65D6C8] rounded-full opacity-70 animate-pulse" />
            </div>

            {/* Label */}
            <h3 className="text-[#FDFDFB] text-sm uppercase tracking-wide mb-2">
              {metric.label}
            </h3>

            {/* Description */}
            <p className="text-[#FDFDFB]/60 text-xs leading-relaxed">
              {metric.description}
            </p>

            {/* Hover particle indicators (static preview) */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              {[0, 1, 2, 3].map((j) => (
                <div 
                  key={j}
                  className="absolute w-1 h-1 bg-[#65D6C8]/50 rounded-full blur-sm"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(${Math.cos((j / 4) * Math.PI * 2) * 30}px, ${Math.sin((j / 4) * Math.PI * 2) * 30}px)`
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom context */}
      <div className="text-center space-y-2">
        <p className="text-[#7F8FB2] text-xs max-w-3xl mx-auto">
          These numbers represent real people — each contributing to building a more just, intelligent future.
        </p>
        <p className="text-[#65D6C8]/50 text-xs italic">
          "Each gesture, a spark in the continuum."
        </p>
      </div>
    </div>
  );
}

// Current Version Preview
function CurrentMetricsPreview({ content }: any) {
  return (
    <div className="space-y-8 p-8 bg-gradient-to-b from-[#040619] to-[#0a0a2e]/50 rounded-lg">
      {/* Header */}
      <div className="text-center space-y-2">
        <p className="text-sm text-[#65D6C8] uppercase tracking-wider">{content.heading}</p>
        <h2 className="text-3xl text-[#FDFDFB]">{content.subheading}</h2>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#65D6C8]/30 to-transparent" />

      {/* Metrics Grid */}
      <div className="grid grid-cols-5 gap-6">
        {content.metrics.map((metric: any, i: number) => (
          <div key={i} className="space-y-2 text-center p-4">
            {/* Number */}
            <div className="text-5xl bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              {metric.number}
            </div>

            {/* Label */}
            <h3 className="text-[#FDFDFB] text-sm uppercase tracking-wide">
              {metric.label}
            </h3>

            {/* Description */}
            <p className="text-[#FDFDFB]/60 text-xs leading-relaxed">
              {metric.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom text */}
      <div className="text-center text-[#FDFDFB]/50 text-xs max-w-3xl mx-auto">
        These numbers represent real people — researchers, students, organizers, makers.
      </div>
    </div>
  );
}
