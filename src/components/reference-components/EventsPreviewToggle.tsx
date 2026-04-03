"use client";

import { useState } from "react";
import { Sparkles, LayoutGrid, Network, Calendar } from "lucide-react";

/**
 * Events Preview Toggle for Wireframe Editor
 * Three versions: Current, Carousel, Aurora Field
 */

export function EventsPreviewToggle({ content }: any) {
  const [version, setVersion] = useState<"current" | "carousel" | "field">("carousel");

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
          onClick={() => setVersion("carousel")}
          className={`flex items-center gap-2 px-3 py-2 rounded text-xs transition-all duration-400 ${
            version === "carousel"
              ? "bg-gradient-to-r from-[#65D6C8]/20 to-[#7A6FF0]/20 text-[#65D6C8] border border-[#65D6C8]/30" 
              : "text-[#FDFDFB]/50 hover:text-[#FDFDFB]/70"
          }`}
        >
          <Calendar className="w-4 h-4" />
          Carousel
        </button>

        <button
          onClick={() => setVersion("field")}
          className={`flex items-center gap-2 px-3 py-2 rounded text-xs transition-all duration-400 ${
            version === "field"
              ? "bg-gradient-to-r from-[#65D6C8]/20 to-[#7A6FF0]/20 text-[#65D6C8] border border-[#65D6C8]/30" 
              : "text-[#FDFDFB]/50 hover:text-[#FDFDFB]/70"
          }`}
        >
          <Network className="w-4 h-4" />
          Aurora Field
        </button>
      </div>

      {/* Design Indicator */}
      {version === "current" && (
        <div className="p-3 bg-gradient-to-r from-[#65D6C8]/20 to-[#7A6FF0]/20 border-2 border-[#65D6C8]/40 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#65D6C8]"></div>
            <p className="text-sm text-[#FDFDFB] font-medium">📋 CURRENT DESIGN — Simple list</p>
          </div>
        </div>
      )}

      {version === "carousel" && (
        <div className="p-3 bg-gradient-to-r from-[#7A6FF0]/20 to-[#65D6C8]/20 border-2 border-[#7A6FF0]/40 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#7A6FF0] animate-pulse"></div>
            <p className="text-sm text-[#FDFDFB] font-medium">📅 CAROUSEL — Glass cards + quick join</p>
          </div>
        </div>
      )}

      {version === "field" && (
        <div className="p-3 bg-gradient-to-r from-[#A8F0E4]/20 to-[#7A6FF0]/20 border-2 border-[#A8F0E4]/40 rounded-lg text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#A8F0E4] animate-pulse"></div>
            <p className="text-sm text-[#FDFDFB] font-medium">✨ AURORA FIELD — Timeline constellation</p>
          </div>
        </div>
      )}

      {/* Render Selected Version */}
      {version === "current" && <CurrentEventsPreview content={content} />}
      {version === "carousel" && <CarouselEventsPreview content={content} />}
      {version === "field" && <AuroraFieldEventsPreview content={content} />}

      {/* Design Comparison Notes */}
      <div className="p-4 bg-[#7A6FF0]/5 border border-[#7A6FF0]/20 rounded-lg space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#65D6C8]"></div>
          <p className="text-xs text-[#65D6C8] uppercase tracking-wider">
            {version === "current" && "📋 Current Design"}
            {version === "carousel" && "📅 Immersive Carousel"}
            {version === "field" && "✨ Aurora Field"}
          </p>
        </div>

        {version === "current" && (
          <div className="text-xs text-[#FDFDFB]/60 space-y-1">
            <p>• Vertical list of events (5 stacked cards)</p>
            <p>• Simple gradient text titles</p>
            <p>• Top shimmer divider</p>
            <p>• Basic descriptions</p>
            <p>• No CTAs (informational only)</p>
            <p>• No flagship emphasis</p>
          </div>
        )}

        {version === "carousel" && (
          <div className="space-y-3">
            <div className="pl-4 border-l-2 border-[#65D6C8]/20">
              <p className="text-xs text-[#FDFDFB] italic">
                "Every gathering adds to the resonance — step into the field. 
                AI Lunchbox highlighted as flagship, frictionless join flow, 
                immersive cards that breathe with aurora light."
              </p>
            </div>

            <div className="text-xs text-[#FDFDFB]/60 space-y-2">
              <p className="text-[#65D6C8] uppercase tracking-wider mb-2">Features:</p>
              
              <div className="space-y-1.5">
                <p>
                  <strong className="text-[#FDFDFB]/80">📅 Carousel Layout:</strong> 3 visible cards (desktop), 
                  horizontal navigation with arrows, dots indicator, swipeable on mobile
                </p>
                
                <p>
                  <strong className="text-[#FDFDFB]/80">💎 Glass Event Cards:</strong> 24px radius, 
                  #111931/80-90%, gradient borders (teal→violet/25-40%), 40px padding
                </p>
                
                <p>
                  <strong className="text-[#FDFDFB]/80">✨ Flagship Badge:</strong> AI Lunchbox has 
                  "Flagship" badge (gradient pill), larger glow (40px shadow), 90% opacity card
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">📋 Rich Card Content:</strong>
                  <br />• Header: Date + Type + City (color-coded)
                  <br />• Title: 24px medium weight
                  <br />• Description: 16px, 80px min-height
                  <br />• Meta: Location, Time, Attendees (with icons)
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🎯 Dual CTAs Per Card:</strong>
                  <br />• Primary: "Join Event →" (aurora gradient, opens registration modal)
                  <br />• Secondary: "Learn More" (ghost, slides detail panel from right)
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🪟 Quick Registration Modal:</strong> 
                  Click "Join Event" → glass panel modal (640px), name + email inputs, 
                  submit → micro-confirmation "You're Registered! 🎉" → calendar invite message
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">📄 Event Detail Panel:</strong> 
                  Click "Learn More" → slides from right (350ms), full event info, 
                  hosts, tags, detailed description, ESC/X to close
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🌊 Aurora Wave Entrance:</strong> 
                  Section reveals with aurora sweep L→R, cards light up sequentially (200ms stagger)
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">✨ Hover Glow + Lift:</strong> 
                  Card lifts -4px, radial glow behind (chapter color), gradient shimmer on button (1s)
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🌍 Global CTA:</strong> 
                  "View Full Calendar" below carousel (primary gradient button)
                </p>
              </div>
            </div>
          </div>
        )}

        {version === "field" && (
          <div className="space-y-3">
            <div className="pl-4 border-l-2 border-[#65D6C8]/20">
              <p className="text-xs text-[#FDFDFB] italic">
                "Gatherings as constellations — where light meets light, the continuum connects. 
                A living aurora field where events float as nodes across a timeline, 
                revealing themselves through exploration."
              </p>
            </div>

            <div className="text-xs text-[#FDFDFB]/60 space-y-2">
              <p className="text-[#65D6C8] uppercase tracking-wider mb-2">Features:</p>
              
              <div className="space-y-1.5">
                <p>
                  <strong className="text-[#FDFDFB]/80">🌐 Timeline Constellation:</strong> 
                  600px canvas, events as glowing nodes positioned spatially (x: 20-82%, y: 35-55%)
                </p>
                
                <p>
                  <strong className="text-[#FDFDFB]/80">💫 Event Nodes:</strong> AI Lunchbox = 80px (flagship, larger), 
                  others = 64px, glowing halos (140px blur), pulsing at unique rates (4-6s)
                </p>
                
                <p>
                  <strong className="text-[#FDFDFB]/80">✨ Flagship Emphasis:</strong> 
                  AI Lunchbox 1.5× larger, Sparkles icon inside, brighter glow (80% vs 60%), 
                  faster pulse (4s vs 5-6s)
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🌊 Timeline Aurora Ribbon:</strong> 
                  Horizontal gradient band flowing through center (via-[#65D6C8]/20), 
                  breathing (scaleY 0.8→1, 15s), symbolizes event flow
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🔗 Flow Lines:</strong> 
                  Connect adjacent events (gradient strokes), animate pathLength (2s, stagger 0.3s), 
                  brighten on hover (0.3 → 0.6 opacity)
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">💬 Hover Event Cards:</strong> 
                  Float below nodes (272px wide), show flagship badge + name + date/time + 
                  description + "Click to learn more", glass panel style
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">👆 Click Interaction:</strong> 
                  Click any node → detail panel slides from right (same as carousel version), 
                  full event info
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🎭 Ambient Aurora Flux:</strong> 
                  2 gradient layers moving opposite directions (25s/30s), 
                  one rotates slowly (60s), creates living atmosphere
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">🎬 Node Formation:</strong> 
                  Canvas fades, nodes light up sequentially (0.5s + 0.2s stagger), 
                  flow lines draw connecting them (2s each)
                </p>

                <p>
                  <strong className="text-[#FDFDFB]/80">⚡ Quick Join Flagship:</strong> 
                  "Join AI Lunchbox" button below field (primary gradient + Sparkles icon), 
                  opens registration modal
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#65D6C8]/10">
              <p className="text-xs text-[#FDFDFB]/50 leading-relaxed">
                <strong className="text-[#65D6C8]">Design Philosophy:</strong> More poetic, exploratory. 
                Events aren't listed chronologically — they're **alive in space**. 
                The timeline ribbon suggests flow without rigid structure. 
                Hover rewards curiosity (tooltips reveal details). 
                Click opens portal (detail panel). Perfect for users who want to **feel** 
                the constellation of gatherings, not just read a schedule.
              </p>
            </div>
          </div>
        )}

        {/* Shared Features */}
        <div className="pt-3 border-t border-[#65D6C8]/10">
          <p className="text-xs text-[#FDFDFB]/50">
            <strong className="text-[#65D6C8]">Both Enhanced Versions:</strong> AI Lunchbox emphasized 
            as flagship (badge, larger, brighter). Quick registration flow (≤2 steps: name + email → confirm). 
            Event detail panels with full info. Keyboard accessible (Tab, arrows, Enter, ESC). 
            Reduced-motion support (fade only).
          </p>
        </div>

        {/* Join Flow */}
        <div className="pt-2">
          <p className="text-xs text-[#FDFDFB]/50">
            <strong className="text-[#65D6C8]">Frictionless Join Flow:</strong> Click "Join Event" → 
            Modal appears (300ms fade) → Enter name + email → Submit → "You're Registered! 🎉" → 
            Auto-close (2s) → Calendar invite notification. No page reload, ≤2 steps total!
          </p>
        </div>
      </div>
    </div>
  );
}

// Current Version Preview
function CurrentEventsPreview({ content }: any) {
  const events = [
    "AI Conference 2023",
    "Workshop on AI Ethics",
    "Tech Meetup",
    "AI Hackathon",
    "Panel Discussion"
  ];

  return (
    <div className="space-y-8 p-8 bg-gradient-to-b from-[#040619] to-[#0a0a2e]/50 rounded-lg">
      <div className="text-center space-y-3">
        <h2 className="text-4xl text-[#FDFDFB]">
          Upcoming Events{" "}
          <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
            Preview
          </span>
        </h2>
        <p className="text-sm text-[#FDFDFB]/70 max-w-2xl mx-auto">
          Opportunities to learn, collaborate, and shape the future
        </p>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#65D6C8]/30 to-transparent" />

      <div className="space-y-4">
        {events.map((name, i) => (
          <div key={i} className="p-4 border border-[#65D6C8]/20 rounded-lg bg-[#1A1F35]/20">
            <div className="text-4xl bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              {name}
            </div>
            <p className="text-xs text-[#FDFDFB]/60 mt-2">
              A gathering bringing together experts and practitioners...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Carousel Preview
function CarouselEventsPreview({ content }: any) {
  const events = [
    { name: "AI Lunchbox Workshop", flagship: true, color: "#65D6C8" },
    { name: "NYC Collective Meetup", flagship: false, color: "#7A6FF0" },
    { name: "AI Ethics Forum", flagship: false, color: "#A8F0E4" },
  ];

  return (
    <div className="space-y-8 p-8 bg-gradient-to-b from-[#090F1E] via-[#0E1B4C] to-[#090F1E] rounded-lg">
      <div className="text-center space-y-3">
        <h2 className="text-4xl text-[#EAF0FF] font-semibold">Upcoming Events</h2>
        <p className="text-sm text-[#BBD0FF]">Join us at gatherings happening around the world</p>
      </div>

      <div className="relative grid grid-cols-3 gap-6">
        {events.map((event, i) => (
          <div
            key={i}
            className={`p-8 rounded-3xl space-y-4 relative ${
              event.flagship
                ? "bg-[#111931]/90 border-2 border-[#65D6C8]/40"
                : "bg-[#111931]/80 border border-[#65D6C8]/25"
            }`}
          >
            {event.flagship && (
              <div className="absolute -top-2 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] text-xs font-medium flex items-center gap-1">
                ⭐ Flagship
              </div>
            )}

            <div 
              className="absolute inset-0 rounded-3xl blur-2xl opacity-20"
              style={{ background: `radial-gradient(circle, ${event.color}, transparent)` }}
            />

            <div className="relative space-y-3">
              <div className="text-xs text-[#7CE7E4]">Every Thursday • Workshop • Global</div>
              <h3 className="text-xl text-[#EAF0FF] font-medium">{event.name}</h3>
              <p className="text-xs text-[#9BB2E1] min-h-[60px]">
                Join our educational series where we break down AI concepts...
              </p>

              <div className="flex items-center gap-2 text-xs text-[#BBD0FF]/70">
                📍 Virtual & NYC • 🕒 12:00 PM EST
              </div>

              <div className="flex gap-2 pt-2">
                <button className="flex-1 py-2 px-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] text-xs font-medium">
                  Join Event →
                </button>
                <button className="px-4 py-2 rounded-lg border border-[#FDFDFB]/20 text-xs text-[#FDFDFB]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i === 0 ? "w-8 bg-[#65D6C8]" : "bg-[#65D6C8]/30"}`}
          />
        ))}
      </div>

      <div className="text-center">
        <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium text-sm">
          📅 View Full Calendar
        </button>
      </div>
    </div>
  );
}

// Aurora Field Preview
function AuroraFieldEventsPreview({ content }: any) {
  const nodes = [
    { name: "Lunchbox", x: 20, y: 50, flagship: true, color: "#65D6C8" },
    { name: "NYC", x: 38, y: 35, flagship: false, color: "#7A6FF0" },
    { name: "Ethics", x: 50, y: 55, flagship: false, color: "#A8F0E4" },
    { name: "Tokyo", x: 68, y: 40, flagship: false, color: "#7A6FF0" },
    { name: "Showcase", x: 82, y: 52, flagship: false, color: "#65D6C8" },
  ];

  return (
    <div className="space-y-8 p-8 bg-gradient-to-b from-[#0a0a2e] via-[#0E1B4C] to-[#090F1E] rounded-lg">
      <div className="text-center space-y-3">
        <h2 className="text-4xl text-[#EAF0FF] font-semibold">Upcoming Events</h2>
        <p className="text-sm text-[#BBD0FF]">Gatherings as constellations</p>
      </div>

      <div className="relative h-[400px] rounded-2xl border border-[#65D6C8]/10 bg-[#040619]/20 overflow-hidden">
        {/* Aurora flux */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/10 via-transparent to-[#65D6C8]/10 blur-2xl animate-pulse" />

        {/* Timeline ribbon */}
        <div className="absolute top-1/2 left-0 right-0 h-24 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#65D6C8]/20 to-transparent blur-xl opacity-40" />

        {/* Flow lines */}
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
                stroke="#65D6C8"
                strokeWidth="1.5"
                opacity="0.3"
              />
            );
          })}
        </svg>

        {/* Event nodes */}
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
                className={`absolute rounded-full blur-2xl opacity-50 animate-pulse ${
                  node.flagship ? "w-28 h-28 -ml-14 -mt-14" : "w-20 h-20 -ml-10 -mt-10"
                }`}
                style={{ background: node.color }}
              />
              
              {/* Core */}
              <div 
                className={`relative rounded-full border-2 border-[#FDFDFB]/80 bg-[#111931]/90 flex items-center justify-center group-hover:scale-125 transition-transform ${
                  node.flagship ? "w-20 h-20" : "w-16 h-16"
                }`}
                style={{ boxShadow: `0 0 30px ${node.color}80` }}
              >
                {node.flagship ? (
                  <div className="text-2xl">⭐</div>
                ) : (
                  <div className="text-lg">📅</div>
                )}
              </div>

              {/* Tooltip */}
              <div className="absolute top-24 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="whitespace-nowrap px-4 py-2 rounded-lg bg-[#111931]/95 border border-[#65D6C8]/30 text-xs text-[#FDFDFB]">
                  {node.name}
                  {node.flagship && <span className="text-[#65D6C8] ml-2">⭐ Flagship</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium text-sm flex items-center gap-2 mx-auto">
          ⭐ Join AI Lunchbox
        </button>
      </div>
    </div>
  );
}
