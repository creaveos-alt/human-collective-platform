"use client";

import { useState } from "react";
import { Sparkles, LayoutGrid, Workflow } from "lucide-react";

/**
 * How We Build Preview Toggle for Wireframe Editor
 * Three versions: Current, Connected Nodes, Aurora Field
 */

export function HowWeBuildPreviewToggle({ content }: any) {
  const [version, setVersion] = useState<"current" | "nodes" | "field">("nodes");

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
          onClick={() => setVersion("nodes")}
          className={`flex items-center gap-2 px-3 py-2 rounded text-xs transition-all duration-400 ${
            version === "nodes"
              ? "bg-gradient-to-r from-[#65D6C8]/20 to-[#7A6FF0]/20 text-[#65D6C8] border border-[#65D6C8]/30" 
              : "text-[#FDFDFB]/50 hover:text-[#FDFDFB]/70"
          }`}
        >
          <Workflow className="w-4 h-4" />
          Connected Nodes
        </button>

        <button
          onClick={() => setVersion("field")}
          className={`flex items-center gap-2 px-3 py-2 rounded text-xs transition-all duration-400 ${
            version === "field"
              ? "bg-gradient-to-r from-[#65D6C8]/20 to-[#7A6FF0]/20 text-[#65D6C8] border border-[#65D6C8]/30" 
              : "text-[#FDFDFB]/50 hover:text-[#FDFDFB]/70"
          }`}
        >
          <Sparkles className="w-4 h-4" />
          Aurora Field
        </button>
      </div>

      {/* Design Indicator */}
      {version === "current" && (
        <div className="p-3 bg-gradient-to-r from-[#65D6C8]/20 to-[#7A6FF0]/20 border-2 border-[#65D6C8]/40 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#65D6C8]"></div>
            <p className="text-sm text-[#FDFDFB] font-medium">📋 CURRENT DESIGN — Simple grid values</p>
          </div>
        </div>
      )}

      {version === "nodes" && (
        <div className="p-3 bg-gradient-to-r from-[#7A6FF0]/20 to-[#65D6C8]/20 border-2 border-[#7A6FF0]/40 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#7A6FF0] animate-pulse"></div>
            <p className="text-sm text-[#FDFDFB] font-medium">🔗 CONNECTED NODES — Light threads + CTAs</p>
          </div>
        </div>
      )}

      {version === "field" && (
        <div className="p-3 bg-gradient-to-r from-[#A8F0E4]/20 to-[#7A6FF0]/20 border-2 border-[#A8F0E4]/40 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#A8F0E4] animate-pulse"></div>
            <p className="text-sm text-[#FDFDFB] font-medium">✨ AURORA FIELD — Interactive light web</p>
          </div>
        </div>
      )}

      {/* Render Selected Version */}
      {version === "current" && <CurrentHowWeBuildPreview content={content} />}
      {version === "nodes" && <ConnectedNodesPreview content={content} />}
      {version === "field" && <AuroraFieldPreview content={content} />}

      {/* Design Comparison Notes */}
      <div className="p-4 bg-[#7A6FF0]/5 border border-[#7A6FF0]/20 rounded-lg space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#65D6C8]"></div>
          <p className="text-xs text-[#65D6C8] uppercase tracking-wider">
            {version === "current" && "📋 Current Design"}
            {version === "nodes" && "🔗 Connected Value Nodes"}
            {version === "field" && "✨ Aurora Field"}
          </p>
        </div>

        {version === "current" && (
          <div className="text-xs text-[#FDFDFB]/60 space-y-1">
            <p>• 5-column grid layout (Collaborate, Learn, Build, Innovate, Impact)</p>
            <p>• Large gradient text titles</p>
            <p>• Vertical dividers between values</p>
            <p>• Top shimmer divider</p>
            <p>• No CTAs (informational only)</p>
          </div>
        )}

        {version === "nodes" && (
          <div className="space-y-3">
            <div className="pl-4 border-l-2 border-[#65D6C8]/20">
              <p className="text-xs text-[#FDFDFB] italic">
                "We don't just build with tools — we build with each other. 
                Each principle a thread, together forming the continuum. 
                Values become living nodes connected by light."
              </p>
            </div>

            <div className="text-xs text-[#FDFDFB]/60 space-y-2">
              <p className="text-[#65D6C8] uppercase tracking-wider mb-2">Features:</p>
              
              <div className="space-y-1.5">
                <p>
                  <strong className="text-[#FDFDFB]/80">💡 Custom Minimal Icons:</strong> Each value has aurora-themed icon:
                  Collaboration (interlocking circles), Learn (diamond), Build (Vitruvian square+circle), 
                  Innovate (spark), Impact (ripple waves)
                </p>
                
                <p>
                  <strong className="text-[#FDFDFB]/80">🔗 Connecting Threads:</strong> Horizontal gradient line 
                  connects all nodes (20% opacity), animated draw-in (2.5s)
                </p>
                
                <p>
                  <strong className="text-[#FDFDFB]/80">🌊 Light Flow:</strong> Wave of light passes through all 
                  nodes every 8s (symbolizes continuous collaboration)
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🎯 Individual CTAs:</strong> Each value has contextual action:
                  <br />• Collaboration → "Join a Chapter" (ghost)
                  <br />• Learn Together → "Access AI Lunchbox" (primary)
                  <br />• Build Systems → "Explore Projects" (ghost)
                  <br />• Innovate Boldly → "See Fellow Projects" (ghost)
                  <br />• Impact Lives → "Read Impact Stories" (primary)
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🪟 Action Modals:</strong> Click CTA → opens modal with 
                  principle details and navigation hint
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">✨ Hover Glow:</strong> Node glows +20% brightness, 
                  text lifts 4px, connected lines brighten
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🎬 Sequential Reveal:</strong> Nodes appear L→R 150ms stagger, 
                  scale 0.96→1.0 with glow-up effect
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🌍 Global CTA:</strong> "Explore How We Build" below 
                  (links to detailed framework page)
                </p>
              </div>
            </div>
          </div>
        )}

        {version === "field" && (
          <div className="space-y-3">
            <div className="pl-4 border-l-2 border-[#65D6C8]/20">
              <p className="text-xs text-[#FDFDFB] italic">
                "When light meets light, structure is born — the continuum builds itself. 
                An interactive light web where principles float as glowing nodes, 
                revealing themselves through exploration."
              </p>
            </div>

            <div className="text-xs text-[#FDFDFB]/60 space-y-2">
              <p className="text-[#65D6C8] uppercase tracking-wider mb-2">Features:</p>
              
              <div className="space-y-1.5">
                <p>
                  <strong className="text-[#FDFDFB]/80">🌐 Interactive Light Web:</strong> 5 principles as floating nodes 
                  in horizontal constellation, connected by aurora gradient lines
                </p>
                
                <p>
                  <strong className="text-[#FDFDFB]/80">💫 Glowing Node Cores:</strong> 64px circles with icon centers, 
                  120px glow halos, each pulsing at unique frequency (4-6s cycles)
                </p>
                
                <p>
                  <strong className="text-[#FDFDFB]/80">🔗 Web Lines:</strong> Connecting lines between adjacent nodes, 
                  animate in on scroll (pathLength 0→1, 1.5s), brighten on hover
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">💬 Hover Tooltips:</strong> Float below hovered node, 
                  show title + description + CTA hint, glass panel style
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">👆 Click Nodes:</strong> Opens same action modal as Connected Nodes version
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🎭 Ambient Aurora Flux:</strong> 2 gradient layers moving 
                  at different speeds (20s/25s), create living atmosphere
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🎬 Node Formation:</strong> Nodes light up sequentially (0.5s + 0.2s stagger), 
                  web lines draw connecting them
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🌟 Interactive Response:</strong> Hover node → tooltip appears, 
                  connected lines glow brighter (0.3 → 0.6 opacity)
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#65D6C8]/10">
              <p className="text-xs text-[#FDFDFB]/50 leading-relaxed">
                <strong className="text-[#65D6C8]">Design Philosophy:</strong> More immersive, exploratory experience. 
                Principles aren't just listed — they're **alive in space**. Hover rewards curiosity, 
                click opens portal to action. Ambient flux creates continuous movement without distraction. 
                Perfect for users who want to **feel** the interconnection, not just read about it.
              </p>
            </div>
          </div>
        )}

        {/* Icon Details */}
        {version !== "current" && (
          <div className="pt-3 border-t border-[#65D6C8]/10">
            <p className="text-xs text-[#FDFDFB]/50 leading-relaxed">
              <strong className="text-[#65D6C8]">Custom Icons:</strong> All icons use Hero's geometry (circles, diamonds, lines). 
              Collaboration = interlocking orbits (dialogue). Learn = connected diamond (shared illumination). 
              Build = Vitruvian symmetry (proportion). Innovate = spark emerging (ignition). 
              Impact = expanding ripples (human touch). All breathe with aurora gradients.
            </p>
          </div>
        )}

        {/* Shared Features */}
        <div className="pt-2">
          <p className="text-xs text-[#FDFDFB]/50">
            <strong className="text-[#65D6C8]">Both Enhanced Versions:</strong> Action modals for each principle, 
            keyboard accessible (Tab, Enter, ESC), reduced-motion support, responsive (5→2→1 columns for nodes, 
            vertical stack for field)
          </p>
        </div>
      </div>
    </div>
  );
}

// Current Version Preview
function CurrentHowWeBuildPreview({ content }: any) {
  const steps = ["Collaborate", "Learn", "Build", "Innovate", "Impact"];

  return (
    <div className="space-y-8 p-8 bg-gradient-to-b from-[#040619] to-[#0a0a2e]/50 rounded-lg">
      <div className="text-center space-y-3">
        <h2 className="text-4xl text-[#FDFDFB]">
          How We Build Together{" "}
          <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
            Preview
          </span>
        </h2>
        <p className="text-sm text-[#FDFDFB]/70 max-w-2xl mx-auto">
          Rooted in collaboration, learning, and innovation
        </p>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#65D6C8]/30 to-transparent" />

      <div className="grid grid-cols-5 gap-6">
        {steps.map((name, i) => (
          <div key={i} className="space-y-3 text-center p-4">
            <div className="text-4xl bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent font-semibold">
              {name}
            </div>
            <p className="text-xs text-[#FDFDFB]/60">
              We bring together diverse thinkers...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Connected Nodes Preview
function ConnectedNodesPreview({ content }: any) {
  const principles = [
    { title: "Collaboration", color: "#7A6FF0", cta: "Join Chapter" },
    { title: "Learn Together", color: "#65D6C8", cta: "AI Lunchbox" },
    { title: "Build Systems", color: "#A8F0E4", cta: "Projects" },
    { title: "Innovate Boldly", color: "#7A6FF0", cta: "Fellows" },
    { title: "Impact Lives", color: "#65D6C8", cta: "Stories" },
  ];

  return (
    <div className="space-y-8 p-8 bg-gradient-to-b from-[#090F1E] via-[#0E1B4C] to-[#090F1E] rounded-lg">
      <div className="text-center space-y-3">
        <h2 className="text-4xl text-[#EAF0FF] font-semibold">How We Build Together</h2>
        <p className="text-sm text-[#BBD0FF]">Shared principles that guide our work</p>
      </div>

      <div className="relative">
        {/* Connecting thread */}
        <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#65D6C8]/30 to-transparent" />

        <div className="grid grid-cols-5 gap-6 relative">
          {principles.map((p, i) => (
            <div key={i} className="text-center space-y-4 p-6">
              {/* Icon placeholder */}
              <div className="mx-auto w-16 h-16 rounded-full border-2 flex items-center justify-center relative"
                style={{ borderColor: p.color }}
              >
                <div className="w-8 h-8 rounded-full animate-pulse" style={{ background: p.color }} />
                <div 
                  className="absolute inset-0 rounded-full blur-xl opacity-50"
                  style={{ background: p.color }}
                />
              </div>

              <h3 className="text-lg text-[#EAF0FF] font-medium">{p.title}</h3>
              <p className="text-xs text-[#9BB2E1] min-h-[60px]">
                Building together through shared values...
              </p>

              <button 
                className="w-full py-2 px-3 rounded-lg border border-[#FDFDFB]/20 text-xs text-[#FDFDFB] hover:bg-[#FDFDFB]/5 transition-all"
              >
                {p.cta} →
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center pt-4">
        <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium text-sm">
          Explore How We Build →
        </button>
      </div>
    </div>
  );
}

// Aurora Field Preview
function AuroraFieldPreview({ content }: any) {
  const nodes = [
    { title: "Collab", x: 15, color: "#7A6FF0" },
    { title: "Learn", x: 30, color: "#65D6C8" },
    { title: "Build", x: 50, color: "#A8F0E4" },
    { title: "Innovate", x: 70, color: "#7A6FF0" },
    { title: "Impact", x: 85, color: "#65D6C8" },
  ];

  return (
    <div className="space-y-8 p-8 bg-gradient-to-b from-[#0a0a2e] via-[#0E1B4C] to-[#090F1E] rounded-lg">
      <div className="text-center space-y-3">
        <h2 className="text-4xl text-[#EAF0FF] font-semibold">How We Build Together</h2>
        <p className="text-sm text-[#BBD0FF]">When light meets light, structure is born</p>
      </div>

      <div className="relative h-64 flex items-center justify-center">
        {/* Aurora flux background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/10 via-transparent to-[#65D6C8]/10 blur-2xl animate-pulse" />

        {/* Web lines */}
        <svg className="absolute inset-0 w-full h-full">
          {nodes.map((node, i) => {
            const next = nodes[i + 1];
            if (!next) return null;
            return (
              <line
                key={i}
                x1={`${node.x}%`}
                y1="50%"
                x2={`${next.x}%`}
                y2="50%"
                stroke="#65D6C8"
                strokeWidth="1"
                opacity="0.3"
              />
            );
          })}
        </svg>

        {/* Nodes */}
        <div className="relative w-full h-full flex items-center justify-around px-8">
          {nodes.map((node, i) => (
            <div key={i} className="relative cursor-pointer group">
              {/* Glow */}
              <div 
                className="absolute w-20 h-20 rounded-full blur-2xl opacity-50 animate-pulse"
                style={{ background: node.color, marginLeft: '-40px', marginTop: '-40px' }}
              />
              
              {/* Core */}
              <div 
                className="relative w-12 h-12 rounded-full border-2 border-[#FDFDFB]/60 bg-[#111931]/80 flex items-center justify-center group-hover:scale-125 transition-transform"
                style={{ boxShadow: `0 0 20px ${node.color}60` }}
              >
                <div className="w-4 h-4 rounded-full" style={{ background: node.color }} />
              </div>

              {/* Tooltip on hover */}
              <div className="absolute top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="whitespace-nowrap px-3 py-2 rounded-lg bg-[#111931]/95 border border-[#65D6C8]/30 text-xs text-[#FDFDFB]">
                  {node.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium text-sm">
          Explore How We Build →
        </button>
      </div>
    </div>
  );
}
