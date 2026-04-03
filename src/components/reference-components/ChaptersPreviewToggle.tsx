"use client";

import { useState } from "react";
import { Sparkles, LayoutGrid, Network } from "lucide-react";

/**
 * Chapters Preview Toggle for Wireframe Editor
 * Three versions: Current, Structured Enhancement, Constellation
 */

export function ChaptersPreviewToggle({ content }: any) {
  const [version, setVersion] = useState<"current" | "structured" | "constellation">("structured");

  return (
    <div className="space-y-6">
      {/* Three-way Toggle */}
      <div className="flex items-center justify-center gap-2 p-2 bg-[#040619]/50 border border-[#65D6C8]/20 rounded-lg">
        <button
          onClick={() => setVersion("current")}
          className={`flex items-center gap-2 px-3 py-2 rounded text-xs transition-all duration-400 ${
            version === "current"
              ? "bg-gradient-to-r from-[#65D6C8]/20 to-[#7A6FF0]/20 text-[#65D6C8] border border-[#65D6C8]/30" 
              : "text-[#FDFDFB]/50 hover:text-[#FDFDFB]/70"
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
          Current
        </button>
        
        <button
          onClick={() => setVersion("structured")}
          className={`flex items-center gap-2 px-3 py-2 rounded text-xs transition-all duration-400 ${
            version === "structured"
              ? "bg-gradient-to-r from-[#65D6C8]/20 to-[#7A6FF0]/20 text-[#65D6C8] border border-[#65D6C8]/30" 
              : "text-[#FDFDFB]/50 hover:text-[#FDFDFB]/70"
          }`}
        >
          <Sparkles className="w-4 h-4" />
          Structured
        </button>

        <button
          onClick={() => setVersion("constellation")}
          className={`flex items-center gap-2 px-3 py-2 rounded text-xs transition-all duration-400 ${
            version === "constellation"
              ? "bg-gradient-to-r from-[#65D6C8]/20 to-[#7A6FF0]/20 text-[#65D6C8] border border-[#65D6C8]/30" 
              : "text-[#FDFDFB]/50 hover:text-[#FDFDFB]/70"
          }`}
        >
          <Network className="w-4 h-4" />
          Constellation
        </button>
      </div>

      {/* Design Indicator */}
      {version === "current" && (
        <div className="p-3 bg-gradient-to-r from-[#65D6C8]/20 to-[#7A6FF0]/20 border-2 border-[#65D6C8]/40 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#65D6C8]"></div>
            <p className="text-sm text-[#FDFDFB] font-medium">📍 CURRENT DESIGN — Simple grid</p>
          </div>
        </div>
      )}

      {version === "structured" && (
        <div className="p-3 bg-gradient-to-r from-[#7A6FF0]/20 to-[#65D6C8]/20 border-2 border-[#7A6FF0]/40 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#7A6FF0] animate-pulse"></div>
            <p className="text-sm text-[#FDFDFB] font-medium">✨ STRUCTURED ENHANCEMENT — Glass cards + CTAs</p>
          </div>
        </div>
      )}

      {version === "constellation" && (
        <div className="p-3 bg-gradient-to-r from-[#A8F0E4]/20 to-[#7A6FF0]/20 border-2 border-[#A8F0E4]/40 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#A8F0E4] animate-pulse"></div>
            <p className="text-sm text-[#FDFDFB] font-medium">🌌 CONSTELLATION — Interactive node network</p>
          </div>
        </div>
      )}

      {/* Render Selected Version */}
      {version === "current" && <CurrentChaptersPreview content={content} />}
      {version === "structured" && <StructuredChaptersPreview content={content} />}
      {version === "constellation" && <ConstellationChaptersPreview content={content} />}

      {/* Design Comparison Notes */}
      <div className="p-4 bg-[#7A6FF0]/5 border border-[#7A6FF0]/20 rounded-lg space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#65D6C8]"></div>
          <p className="text-xs text-[#65D6C8] uppercase tracking-wider">
            {version === "current" && "📍 Current Design"}
            {version === "structured" && "✨ Structured Enhancement"}
            {version === "constellation" && "🌌 Constellation Interpretation"}
          </p>
        </div>

        {version === "current" && (
          <div className="text-xs text-[#FDFDFB]/60 space-y-1">
            <p>• Simple 5-column grid layout</p>
            <p>• Gradient text with shimmer</p>
            <p>• Vertical dividers between cards</p>
            <p>• Hover glow effects</p>
            <p>• No CTAs (passive display)</p>
          </div>
        )}

        {version === "structured" && (
          <div className="space-y-3">
            <div className="pl-4 border-l-2 border-[#65D6C8]/20">
              <p className="text-xs text-[#FDFDFB] italic">
                "Each light is a chapter in the continuum — distinct yet connected. 
                Glass cards with gradient borders, individual CTAs, and aurora shimmer 
                connecting them every 10 seconds."
              </p>
            </div>

            <div className="text-xs text-[#FDFDFB]/60 space-y-2">
              <p className="text-[#65D6C8] uppercase tracking-wider mb-2">Features:</p>
              
              <div className="space-y-1.5">
                <p>
                  <strong className="text-[#FDFDFB]/80">💎 Glass Panel Cards:</strong> Transparent background (#111931/70%), 
                  gradient borders (teal→violet), 16px radius, hover lift -2px
                </p>
                
                <p>
                  <strong className="text-[#FDFDFB]/80">🎯 Individual CTAs:</strong> "View Chapter →" button per card, 
                  ghost style (transparent + stroke), opens modal with details
                </p>
                
                <p>
                  <strong className="text-[#FDFDFB]/80">🌊 Aurora Connection:</strong> Horizontal shimmer passes through 
                  cards every 10s, symbolizing interconnection
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🌍 Global CTA:</strong> "Explore All Chapters" primary button below grid 
                  (aurora gradient fill), leads to world map or directory
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">📍 Location Tags:</strong> MapPin icon with location name 
                  (NYC USA, UK, Japan, etc.)
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">✨ Aurora Divider:</strong> Small streak above title, 
                  shimmer animation, connects to other sections
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🪟 Chapter Modals:</strong> Click any CTA → modal with members count, 
                  next event, join/events CTAs
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🎬 Sequential Reveal:</strong> Cards L→R 150ms stagger, 
                  buttons fade in 200ms after
                </p>
              </div>
            </div>
          </div>
        )}

        {version === "constellation" && (
          <div className="space-y-3">
            <div className="pl-4 border-l-2 border-[#65D6C8]/20">
              <p className="text-xs text-[#FDFDFB] italic">
                "From node to node, the light travels — each chapter reflecting a fragment of the whole. 
                An abstract world map where chapters are glowing nodes connected by aurora lines."
              </p>
            </div>

            <div className="text-xs text-[#FDFDFB]/60 space-y-2">
              <p className="text-[#65D6C8] uppercase tracking-wider mb-2">Features:</p>
              
              <div className="space-y-1.5">
                <p>
                  <strong className="text-[#FDFDFB]/80">🌐 Constellation Map:</strong> 600px height canvas with 
                  chapters positioned spatially (25% NYC, 50% London, 85% Tokyo, etc.)
                </p>
                
                <p>
                  <strong className="text-[#FDFDFB]/80">💫 Glowing Nodes:</strong> Each chapter = pulsing dot (4-6s cycles), 
                  unique colors per city, radial glow halo (60px blur)
                </p>
                
                <p>
                  <strong className="text-[#FDFDFB]/80">🌊 Connecting Lines:</strong> Aurora gradient lines between nodes 
                  (draw animation 1.5s), brighten on hover (0.3 → 0.6 opacity)
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🗺️ World Mesh:</strong> Subtle grid pattern (10% opacity) 
                  as background texture, suggests global network
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">💬 Hover Tooltips:</strong> Hover node → floating card appears 
                  with name + location + "Click to explore"
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">👆 Click Interaction:</strong> Click any node → same chapter modal 
                  as structured version (members, events, CTAs)
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🎭 Ambient Motion:</strong> Aurora flux moves across background 
                  (15-20s cycles), reacts subtly to cursor position
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🎬 Node Reveal:</strong> Map fades in first, nodes light up 
                  sequentially (200ms intervals), lines connect gradually
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#65D6C8]/10">
              <p className="text-xs text-[#FDFDFB]/50 leading-relaxed">
                <strong className="text-[#65D6C8]">Design Philosophy:</strong> Moves beyond literal geography to 
                **symbolic connectivity**. Each node breathes at its own rhythm (like metrics section), 
                but they're visibly linked — aurora energy flows between them. Hover rewards exploration, 
                click opens portal to that chapter's world. Not a map, but a living constellation.
              </p>
            </div>
          </div>
        )}

        {/* Shared Features */}
        <div className="pt-3 border-t border-[#65D6C8]/10">
          <p className="text-xs text-[#FDFDFB]/50">
            <strong className="text-[#65D6C8]">All Versions Share:</strong> Chapter modals with stats (members, next event), 
            dual CTAs (Join Chapter + Events), keyboard accessible (Tab, ESC), reduced-motion support
          </p>
        </div>
      </div>
    </div>
  );
}

// Current Version Preview
function CurrentChaptersPreview({ content }: any) {
  const chapters = ["New York", "London", "Tokyo", "Berlin", "Sydney"];

  return (
    <div className="space-y-8 p-8 bg-gradient-to-b from-[#040619] to-[#0a0a2e]/50 rounded-lg">
      <div className="text-center space-y-3">
        <h2 className="text-4xl text-[#FDFDFB]">
          Global Chapters{" "}
          <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
            Preview
          </span>
        </h2>
        <p className="text-sm text-[#FDFDFB]/70 max-w-2xl mx-auto">
          Hubs of innovation, collaboration, and community-driven initiatives
        </p>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#65D6C8]/30 to-transparent" />

      <div className="grid grid-cols-5 gap-6">
        {chapters.map((name, i) => (
          <div key={i} className="space-y-3 text-center p-4">
            <div className="text-4xl bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent font-semibold">
              {name}
            </div>
            <p className="text-xs text-[#FDFDFB]/60">
              A hub of innovation and collaboration...
            </p>
          </div>
        ))}
      </div>

      <div className="text-center text-xs text-[#FDFDFB]/50 pt-4">
        These chapters represent a diverse network of communities
      </div>
    </div>
  );
}

// Structured Enhancement Preview
function StructuredChaptersPreview({ content }: any) {
  const chapters = [
    { name: "New York", location: "NYC, USA", color: "#7A6FF0" },
    { name: "London", location: "UK", color: "#65D6C8" },
    { name: "Tokyo", location: "Japan", color: "#A8F0E4" },
    { name: "Berlin", location: "Germany", color: "#7A6FF0" },
    { name: "Sydney", location: "Australia", color: "#65D6C8" },
  ];

  return (
    <div className="space-y-8 p-8 bg-gradient-to-b from-[#040619] via-[#0a0a2e]/50 to-[#040619] rounded-lg">
      <div className="text-center space-y-4">
        <div className="w-24 h-px mx-auto bg-[#65D6C8]/30 relative overflow-hidden">
          <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-[#65D6C8]/80 to-transparent animate-pulse" />
        </div>
        <h2 className="text-4xl text-[#FDFDFB] font-semibold">Global Chapters</h2>
        <p className="text-sm text-[#FDFDFB]/70">Each light is a chapter in the continuum</p>
      </div>

      <div className="relative grid grid-cols-5 gap-4">
        {/* Connecting shimmer */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#65D6C8]/40 to-transparent" />

        {chapters.map((chapter, i) => (
          <div 
            key={i}
            className="relative p-6 rounded-2xl bg-[#111931]/70 border border-[#65D6C8]/20 hover:border-[#65D6C8]/40 transition-all group"
          >
            <div 
              className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: `${chapter.color}20` }}
            />
            
            <div className="relative space-y-3">
              <h3 className="text-2xl bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
                {chapter.name}
              </h3>
              <p className="text-xs text-[#65D6C8]">📍 {chapter.location}</p>
              <p className="text-xs text-[#FDFDFB]/60 min-h-[60px]">
                A hub of innovation and collaboration...
              </p>
              <button className="w-full py-2 px-3 rounded-lg border border-[#FDFDFB]/20 text-xs text-[#FDFDFB] hover:bg-[#FDFDFB]/5 transition-all">
                View Chapter →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium text-sm">
          🌍 Explore All Chapters
        </button>
      </div>
    </div>
  );
}

// Constellation Preview
function ConstellationChaptersPreview({ content }: any) {
  const nodes = [
    { name: "New York", x: 25, y: 45, color: "#7A6FF0" },
    { name: "London", x: 50, y: 35, color: "#65D6C8" },
    { name: "Tokyo", x: 85, y: 40, color: "#A8F0E4" },
    { name: "Berlin", x: 55, y: 38, color: "#7A6FF0" },
    { name: "Sydney", x: 82, y: 75, color: "#65D6C8" },
  ];

  return (
    <div className="space-y-8 p-8 bg-gradient-to-b from-[#0a0a2e] via-[#0B1022] to-[#040619] rounded-lg">
      <div className="text-center space-y-3">
        <h2 className="text-4xl text-[#FDFDFB] font-semibold">Global Network</h2>
        <p className="text-sm text-[#FDFDFB]/70">From node to node, the light travels</p>
      </div>

      <div className="relative h-96 rounded-2xl border border-[#65D6C8]/10 bg-[#040619]/30 overflow-hidden">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(#65D6C8 1px, transparent 1px), linear-gradient(90deg, #65D6C8 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full">
          {nodes.map((node, i) => {
            const next = nodes[(i + 1) % nodes.length];
            return (
              <line
                key={i}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${next.x}%`}
                y2={`${next.y}%`}
                stroke="#65D6C8"
                strokeWidth="1"
                opacity="0.3"
              />
            );
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((node, i) => (
          <div
            key={i}
            className="absolute cursor-pointer group"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div 
              className="absolute w-12 h-12 rounded-full blur-xl opacity-60 animate-pulse"
              style={{ background: node.color, marginLeft: '-24px', marginTop: '-24px' }}
            />
            <div 
              className="relative w-3 h-3 rounded-full border-2 border-[#FDFDFB]/80 group-hover:scale-150 transition-transform"
              style={{ background: node.color }}
            />
            
            {/* Tooltip */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="whitespace-nowrap px-3 py-2 rounded-lg bg-[#111931]/95 border border-[#65D6C8]/30 text-xs text-[#FDFDFB]">
                {node.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium text-sm">
          🌍 Explore All Chapters
        </button>
      </div>
    </div>
  );
}
