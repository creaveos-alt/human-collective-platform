"use client";

import { useState } from "react";
import { Sparkles, LayoutGrid, Network } from "lucide-react";

/**
 * Builders Finale Toggle for Wireframe Editor
 * Three versions: Current, Unified Flow, Constellation
 */

export function BuildersFinaleToggle({ content }: any) {
  const [version, setVersion] = useState<"current" | "unified" | "constellation">("unified");

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
          onClick={() => setVersion("unified")}
          className={`flex items-center gap-2 px-3 py-2 rounded text-xs transition-all duration-400 ${
            version === "unified"
              ? "bg-gradient-to-r from-[#65D6C8]/20 to-[#7A6FF0]/20 text-[#65D6C8] border border-[#65D6C8]/30" 
              : "text-[#FDFDFB]/50 hover:text-[#FDFDFB]/70"
          }`}
        >
          <Sparkles className="w-4 h-4" />
          Unified Flow
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
            <p className="text-sm text-[#FDFDFB] font-medium">📋 CURRENT — Simple builders list</p>
          </div>
        </div>
      )}

      {version === "unified" && (
        <div className="p-3 bg-gradient-to-r from-[#7A6FF0]/20 to-[#65D6C8]/20 border-2 border-[#7A6FF0]/40 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#7A6FF0] animate-pulse"></div>
            <p className="text-sm text-[#FDFDFB] font-medium">✨ UNIFIED — Principles → People flow</p>
          </div>
        </div>
      )}

      {version === "constellation" && (
        <div className="p-3 bg-gradient-to-r from-[#A8F0E4]/20 to-[#7A6FF0]/20 border-2 border-[#A8F0E4]/40 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#A8F0E4] animate-pulse"></div>
            <p className="text-sm text-[#FDFDFB] font-medium">🌐 CONSTELLATION — Interactive human network</p>
          </div>
        </div>
      )}

      {/* Render Selected Version */}
      {version === "current" && <CurrentBuildersPreview content={content} />}
      {version === "unified" && <UnifiedFlowPreview content={content} />}
      {version === "constellation" && <ConstellationPreview content={content} />}

      {/* Design Comparison Notes */}
      <div className="p-4 bg-[#7A6FF0]/5 border border-[#7A6FF0]/20 rounded-lg space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#65D6C8]"></div>
          <p className="text-xs text-[#65D6C8] uppercase tracking-wider">
            {version === "current" && "📋 Current Design"}
            {version === "unified" && "✨ Unified Flow (Merged)"}
            {version === "constellation" && "🌐 Human Constellation"}
          </p>
        </div>

        {version === "current" && (
          <div className="text-xs text-[#FDFDFB]/60 space-y-1">
            <p>• Simple grid of 5 builder cards</p>
            <p>• Large gradient text names</p>
            <p>• Basic descriptions</p>
            <p>• No categories or filters</p>
            <p>• No connection to "How We Build"</p>
            <p>• Separate sections, disconnected</p>
          </div>
        )}

        {version === "unified" && (
          <div className="space-y-3">
            <div className="pl-4 border-l-2 border-[#65D6C8]/20">
              <p className="text-xs text-[#FDFDFB] italic">
                "We build through principles. We grow through people. Together, we sustain the continuum. 
                This merges 'How We Build' + 'Meet the Builders' into one cohesive finale where 
                values flow into hands."
              </p>
            </div>

            <div className="text-xs text-[#FDFDFB]/60 space-y-2">
              <p className="text-[#65D6C8] uppercase tracking-wider mb-2">Features:</p>
              
              <div className="space-y-1.5">
                <p>
                  <strong className="text-[#FDFDFB]/80">📐 Unified Layout (1800px tall):</strong>
                  <br />• Top: "How We Build Together" (5 principle nodes)
                  <br />• Mid: Aurora transition band flowing downward ↓
                  <br />• Bottom: "Meet the Builders" (grid with tabs)
                </p>
                
                <p>
                  <strong className="text-[#FDFDFB]/80">🧵 Connecting Threads:</strong> Animated vertical lines 
                  flow from principles (top) to builders (bottom), visualizing "values → people"
                </p>
                
                <p>
                  <strong className="text-[#FDFDFB]/80">💫 Principle Nodes (Top):</strong> Simplified 5 nodes 
                  (Collab, Learn, Build, Innovate, Impact) with icons, pulsing glows, color-coded
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🌊 Aurora Transition Band:</strong> Mid-section 
                  with breathing gradient (scaleY animation), downward arrow, "Values become people" text
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">📑 Category Tabs:</strong> Filter builders by:
                  <br />• All Builders (12 total)
                  <br />• Founders (3)
                  <br />• Rising Stars (4)
                  <br />• Researchers (2)
                  <br />• Community Leaders (3)
                  <br />Active tab has aurora underline, smooth fade transitions (400ms)
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">💎 Builder Cards:</strong> Glass panels (20px radius), 
                  80% opacity, gradient borders, portrait placeholders (initials with aurora glow), 
                  name + title + program badge + principle icons
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🎨 Portrait Placeholders:</strong> Not generic initials — 
                  circular avatars with:
                  <br />• Builder's initials (2 letters)
                  <br />• Gradient background (principle color)
                  <br />• Border in principle color
                  <br />• Aurora glow shadow (20px)
                  <br />• Hover: scale 1.02 + lift -4px
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🏷️ Program Badges:</strong> Each builder shows their program 
                  (AI Lunchbox, Chapters, Fellows, Think Tank, Infrastructure) in colored pill badge
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🎯 Principle Icons:</strong> Each builder card shows 
                  2-3 small icons representing which principles they embody (from How We Build)
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🪟 Builder Profile Modal:</strong> Click "View Profile" → 
                  modal opens with:
                  <br />• Large avatar (120px)
                  <br />• Full bio (paragraph)
                  <br />• Expertise tags (3-4 skills)
                  <br />• Embodies Principles (with icons)
                  <br />• Connect buttons (email, LinkedIn, GitHub)
                  <br />• Glass panel style, aurora glow
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🌍 Global CTA:</strong> "Join the Builders Network" 
                  (primary gradient button) at bottom, opens application modal
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🎬 Motion:</strong> Vertical threads descend on scroll, 
                  builders fade in staggered (150ms intervals), hover glow + scale, 
                  aurora wave sweeps tabs every 10s
                </p>
              </div>
            </div>
          </div>
        )}

        {version === "constellation" && (
          <div className="space-y-3">
            <div className="pl-4 border-l-2 border-[#65D6C8]/20">
              <p className="text-xs text-[#FDFDFB] italic">
                "Where values find hands, and ideas find faces — the continuum becomes human. 
                An interactive constellation where builders are luminous nodes connected by 
                shared principles, revealing the human layer of the Aurora Museum."
              </p>
            </div>

            <div className="text-xs text-[#FDFDFB]/60 space-y-2">
              <p className="text-[#65D6C8] uppercase tracking-wider mb-2">Features:</p>
              
              <div className="space-y-1.5">
                <p>
                  <strong className="text-[#FDFDFB]/80">🌐 Constellation Field:</strong> 800px canvas, 
                  builders positioned spatially (not grid), scattered across field to suggest organic network
                </p>
                
                <p>
                  <strong className="text-[#FDFDFB]/80">💫 Builder Nodes:</strong> 56px circular avatars 
                  (initials), border in principle color, 100px glow halos, pulsing at unique rates (5-7s)
                </p>
                
                <p>
                  <strong className="text-[#FDFDFB]/80">🔗 Dynamic Connection Lines:</strong> Builders with 
                  shared principles connected by subtle gradient lines (15% opacity), brighten on hover 
                  (40%), animate pathLength on scroll (2s, stagger)
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🏷️ Principle Indicators:</strong> Small icon badges 
                  below each node showing top 2 principles they embody (5px circles with micro-icons)
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">💬 Hover Cards:</strong> Float below nodes (256px wide), 
                  show name + title + bio preview (100 chars) + "Click to view full profile", 
                  glass panel style
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">👆 Click Interaction:</strong> Click any node → 
                  full profile modal opens (same as Unified version) with complete bio, expertise, 
                  principles, contact
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🎭 Ambient Aurora Flux:</strong> 2 gradient layers 
                  moving opposite (30-35s), creates living atmosphere, nodes breathe within aurora light
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🎬 Node Formation:</strong> Canvas fades, nodes light 
                  up sequentially (0.3s + 0.08s stagger), connection lines draw between them (2s each), 
                  creates effect of constellation forming
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🌟 Color Coding:</strong> Each builder glows with their 
                  primary principle color:
                  <br />• AI Lunchbox / Learn → Teal (#65D6C8)
                  <br />• Think Tank / Innovate → Violet (#7A6FF0)
                  <br />• Fellows / Build → Aqua (#A8F0E4)
                  <br />• Impact-focused → Gradient teal-violet
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🪟 Full Profile Modal:</strong> Same rich modal as 
                  Unified (avatar, bio, expertise, principles, contact), glass panel + aurora glow
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🌍 Global CTA:</strong> "Join the Builders Network" 
                  below field (primary gradient)
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#65D6C8]/10">
              <p className="text-xs text-[#FDFDFB]/50 leading-relaxed">
                <strong className="text-[#65D6C8]">Design Philosophy:</strong> More poetic, exploratory. 
                Builders aren't in a grid — they're **alive in space** like stars in a constellation. 
                Connection lines visualize shared principles. Hover rewards curiosity (tooltips reveal). 
                Click opens portal (full profile). Perfect for users who want to **feel** the human network, 
                not just browse a directory.
              </p>
            </div>
          </div>
        )}

        {/* Shared Features */}
        <div className="pt-3 border-t border-[#65D6C8]/10">
          <p className="text-xs text-[#FDFDFB]/50">
            <strong className="text-[#65D6C8]">Both Enhanced Versions:</strong> Rich builder profiles 
            (12 people total: 3 founders, 4 rising stars, 2 researchers, 3 community leaders). 
            Each has bio, expertise, principles, contact. Profile modals with full details. 
            Principle connections visualized. "Join Network" CTA. Keyboard accessible. 
            Reduced-motion support.
          </p>
        </div>

        {/* Merger Context */}
        <div className="pt-2">
          <p className="text-xs text-[#FDFDFB]/50">
            <strong className="text-[#65D6C8]">Why Merged:</strong> "How We Build" + "Meet the Builders" 
            now form one **finale section**. Philosophy → embodiment. Values → people. Light → hands. 
            The Acheulean-to-AI continuum culminates in human faces. Both versions show this transition 
            (Unified = explicit visual flow, Constellation = dynamic connections).
          </p>
        </div>
      </div>
    </div>
  );
}

// Current Version Preview
function CurrentBuildersPreview({ content }: any) {
  const builders = ["John Doe", "Jane Smith", "Alex Johnson", "Emily Davis", "Michael Brown"];

  return (
    <div className="space-y-8 p-8 bg-gradient-to-b from-[#040619] to-[#0a0a2e]/50 rounded-lg">
      <div className="text-center space-y-3">
        <h2 className="text-4xl text-[#FDFDFB]">
          Meet the Builders{" "}
          <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
            Preview
          </span>
        </h2>
        <p className="text-sm text-[#FDFDFB]/70 max-w-2xl mx-auto">
          Diverse experts contributing their skills
        </p>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#65D6C8]/30 to-transparent" />

      <div className="grid grid-cols-5 gap-6">
        {builders.map((name, i) => (
          <div key={i} className="p-4 space-y-3 text-center">
            <div className="text-4xl bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              {name}
            </div>
            <p className="text-xs text-[#FDFDFB]/60">
              A professional dedicated to building...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Unified Flow Preview
function UnifiedFlowPreview({ content }: any) {
  const principles = ["Collab", "Learn", "Build", "Innovate", "Impact"];
  const builders = [
    { name: "Sarah Chen", program: "AI Lunchbox", color: "#65D6C8" },
    { name: "Marcus Williams", program: "Infrastructure", color: "#A8F0E4" },
    { name: "Amara Okafor", program: "Think Tank", color: "#7A6FF0" },
    { name: "James Liu", program: "AI Lunchbox", color: "#65D6C8" },
  ];

  return (
    <div className="space-y-12 p-8 bg-gradient-to-b from-[#090F1E] via-[#0E1B4C] to-[#040619] rounded-lg">
      {/* Top: Principles */}
      <div>
        <h2 className="text-3xl text-[#EAF0FF] font-semibold text-center mb-8">How We Build Together</h2>
        <div className="grid grid-cols-5 gap-4">
          {principles.map((p, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full border border-[#65D6C8] flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-[#65D6C8]" />
              </div>
              <p className="text-xs text-[#EAF0FF]">{p}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mid: Transition */}
      <div className="relative h-24 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#65D6C8]/30 to-transparent blur-xl opacity-50" />
        <div className="relative text-xs text-[#65D6C8]">↓ Values become people</div>
      </div>

      {/* Bottom: Builders */}
      <div>
        <h2 className="text-3xl text-[#EAF0FF] font-semibold text-center mb-6">Meet the Builders</h2>
        
        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-6">
          {["All", "Founders", "Rising Stars"].map((tab, i) => (
            <button 
              key={i}
              className={`px-4 py-2 rounded-lg text-xs ${
                i === 0 
                  ? "text-[#65D6C8] border-b-2 border-[#65D6C8]" 
                  : "text-[#FDFDFB]/60"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-4">
          {builders.map((builder, i) => (
            <div key={i} className="p-4 rounded-xl bg-[#111931]/80 border border-[#65D6C8]/25 space-y-3 text-center">
              <div 
                className="w-16 h-16 mx-auto rounded-full border-2 flex items-center justify-center text-lg"
                style={{ borderColor: builder.color, color: builder.color }}
              >
                {builder.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="text-sm text-[#EAF0FF] font-medium">{builder.name}</p>
                <p className="text-xs text-[#BBD0FF]/70 mt-1">{builder.program}</p>
              </div>
              <button className="w-full py-1.5 px-3 rounded-lg border border-[#FDFDFB]/20 text-xs text-[#FDFDFB]">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center pt-4">
        <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium text-sm">
          Join the Builders Network
        </button>
      </div>
    </div>
  );
}

// Constellation Preview
function ConstellationPreview({ content }: any) {
  const nodes = [
    { name: "SC", x: 20, y: 30, color: "#65D6C8" },
    { name: "MW", x: 38, y: 45, color: "#A8F0E4" },
    { name: "AO", x: 50, y: 25, color: "#7A6FF0" },
    { name: "JL", x: 68, y: 50, color: "#65D6C8" },
    { name: "SR", x: 82, y: 35, color: "#7A6FF0" },
  ];

  return (
    <div className="space-y-8 p-8 bg-gradient-to-b from-[#0a0a2e] via-[#0E1B4C] to-[#040619] rounded-lg">
      <div className="text-center space-y-3">
        <h2 className="text-4xl text-[#EAF0FF] font-semibold">Meet the Builders</h2>
        <p className="text-sm text-[#BBD0FF]">Where values find hands, ideas find faces</p>
      </div>

      <div className="relative h-[400px] rounded-2xl border border-[#65D6C8]/10 bg-[#040619]/20 overflow-hidden">
        {/* Aurora flux */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/10 via-transparent to-[#65D6C8]/10 blur-2xl animate-pulse" />

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full">
          {nodes.map((node, i) => {
            const next = nodes[i + 1];
            if (!next) return null;
            return (
              <line
                key={i}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${next.x}%`}
                y2={`${next.y}%`}
                stroke={node.color}
                strokeWidth="1"
                opacity="0.15"
              />
            );
          })}
        </svg>

        {/* Builder nodes */}
        <div className="relative w-full h-full">
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
              {/* Glow */}
              <div 
                className="absolute w-20 h-20 rounded-full blur-2xl opacity-50 animate-pulse -ml-10 -mt-10"
                style={{ background: node.color }}
              />
              
              {/* Core */}
              <div 
                className="relative w-14 h-14 rounded-full border-2 border-[#FDFDFB]/80 bg-[#111931]/90 flex items-center justify-center text-lg font-bold group-hover:scale-125 transition-transform"
                style={{ boxShadow: `0 0 20px ${node.color}80`, color: node.color }}
              >
                {node.name}
              </div>

              {/* Tooltip */}
              <div className="absolute top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="whitespace-nowrap px-4 py-2 rounded-lg bg-[#111931]/95 border border-[#65D6C8]/30 text-xs text-[#FDFDFB]">
                  Click to view profile
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium text-sm">
          Join the Builders Network
        </button>
      </div>
    </div>
  );
}
