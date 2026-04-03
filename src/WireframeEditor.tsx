"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ChevronUp, ChevronDown, Eye, EyeOff, Edit2, Save, Trash2 } from "lucide-react";
import { EnhancedHeaderPreview, EnhancedHeroPreview, CreativeHeaderPreview } from "./components/EnhancedPreviews";
import { HeaderStyleToggle } from "./components/HeaderStyleToggle";
import { MetricsPreviewToggle } from "./components/MetricsPreviewToggle";
import { PillarsPreviewToggle } from "./components/PillarsPreviewToggle";
import { ChaptersPreviewToggle } from "./components/ChaptersPreviewToggle";
import { HowWeBuildPreviewToggle } from "./components/HowWeBuildPreviewToggle";
import { EventsPreviewToggle } from "./components/EventsPreviewToggle";
import { BuildersFinaleToggle } from "./components/BuildersFinaleToggle";

// Define section types
type SectionType = "header" | "hero" | "metrics" | "pillars" | "chapters" | "howWeBuild" | "events" | "builders" | "footer";

interface Section {
  id: string;
  type: SectionType;
  title: string;
  enabled: boolean;
  order: number;
  content: any;
}

export default function WireframeEditor() {
  const [sections, setSections] = useState<Section[]>([
    {
      id: "header",
      type: "header",
      title: "Header / Navigation",
      enabled: true,
      order: 0,
      content: {
        logo: "Human + AI Collective",
        navLinks: [
          { label: "Origin", href: "#hero" },
          { label: "Philosophy", href: "#philosophy" },
          { label: "Programs", href: "#programs" },
          { label: "Chapters", href: "#chapters" },
          { label: "Events", href: "#events" },
          { label: "Builders", href: "#builders" },
        ],
        ctaPrimary: "Enter →",
        ctaDonate: "Donate",
        ctaEvent: "Join the Event",
        position: "fixed",
        backgroundColor: "Deep Night Indigo with backdrop blur",
        showCtasInHeader: false,
      }
    },
    {
      id: "hero",
      type: "hero",
      title: "Hero Section",
      enabled: true,
      order: 1,
      content: {
        headline: "Shaping Tomorrow, Collectively.",
        subtext1: "We are a growing network of thinkers, builders and learners who are cultivating the relationship between humanity and intelligent systems — creating a future that reflects the full spectrum of Collective intelligence, ensuring that no one is left behind.",
        subtext2: "From the Acheulean handaxe — humanity's first deliberate tool — to the frontiers of Artificial Intelligence, we honour the continuum of human thought while building systems of care, access and proportion.",
        ctaDonate: "Donate",
        ctaEvent: "Join the Event",
        showCtasInHero: true,
      }
    },
    {
      id: "metrics",
      type: "metrics",
      title: "Impact Metrics Wall",
      enabled: true,
      order: 2,
      content: {
        heading: "Every act of learning is a vote of dignity, a moment of",
        subheading: "light — reverence for the human continuum.",
        metrics: [
          { number: "20K+", label: "Hours with AI Models", description: "Our Fellows and Members — in dialogue with intelligent systems, learning and shaping the future together." },
          { number: "5K+", label: "Community Members", description: "A collective spanning continents, ages, and expertise — united by curiosity and care." },
          { number: "28", label: "Global Chapters", description: "Local roots, global reach. Each chapter adapts the Collective's philosophy to its community's needs." },
          { number: "300", label: "Workshops Hosted", description: "From grassroots AI literacy to systems design, we learn and teach in circles, not hierarchies." },
          { number: "1M", label: "Lives Touched", description: "The ripple of intention — every person reached, every story told, every tool built adds to the continuum." },
        ]
      }
    },
    {
      id: "pillars",
      type: "pillars",
      title: "Three Pillars",
      enabled: true,
      order: 3,
      content: {
        heading: "The Three Pillars of the Collective",
        subheading: "Our work is structured around three interconnected programs — each designed to expand access, deepen understanding, and ensure the age of AI reflects collective human intelligence.",
        pillars: [
          { icon: "🧠", title: "AI Lunchbox", subtitle: "Foundational AI Literacy", description: "A collaborative learning program designed to demystify AI systems and provide practical, accessible knowledge for individuals, communities, and organizations navigating the age of intelligent systems." },
          { icon: "🌱", title: "Micro-Entrepreneurship", subtitle: "Economic Access & Dignity", description: "Supporting community-led ventures and local economies through AI-powered tools and training — ensuring the benefits of intelligent systems are distributed equitably across the continuum." },
          { icon: "🔮", title: "Think Tank", subtitle: "Research & Policy Frameworks", description: "A research collective focused on human-centered AI governance, ethical frameworks, and the long-term implications of collective intelligence — shaping systems that reflect care, proportion, and shared wisdom." },
        ]
      }
    },
    {
      id: "chapters",
      type: "chapters",
      title: "Chapters Preview",
      enabled: true,
      order: 4,
      content: {
        heading: "Global Chapters Preview",
        subheading: "Our global chapters are hubs of innovation, collaboration, and community-driven initiatives — each adapting the Collective's philosophy to their unique contexts.",
        chapters: [
          { name: "New York", description: "A vibrant hub of innovation and collaboration, fostering a community of thinkers and builders." },
          { name: "London", description: "A global center for AI research and development, driving forward the future of intelligent systems." },
          { name: "Tokyo", description: "A leading edge in AI technology and education, shaping the future of collective intelligence." },
          { name: "Berlin", description: "A hub for ethical AI and social innovation, promoting responsible and inclusive development." },
          { name: "Sydney", description: "A diverse and dynamic community, exploring the intersection of AI and human values." },
        ]
      }
    },
    {
      id: "howWeBuild",
      type: "howWeBuild",
      title: "How We Build Together",
      enabled: true,
      order: 5,
      content: {
        heading: "How We Build Together",
        subheading: "The Collective thrives on shared principles that guide our work, learning, and growth.",
        principles: [
          { title: "Collaboration", description: "We create through dialogue, not monologue." },
          { title: "Learn Together", description: "We share knowledge freely across the continuum." },
          { title: "Build Systems", description: "We design with care and proportion." },
          { title: "Innovate Boldly", description: "We experiment with courage and curiosity." },
          { title: "Impact Lives", description: "We ensure our work touches real people." },
        ]
      }
    },
    {
      id: "events",
      type: "events",
      title: "Events Preview",
      enabled: true,
      order: 6,
      content: {
        heading: "Upcoming Events",
        subheading: "Join us at gatherings, workshops, and conversations happening around the world.",
        events: [
          { date: "Dec 15, 2025", type: "Workshop", location: "Toronto", title: "AI Lunchbox Workshop", description: "Learn the fundamentals of AI systems...", time: "6:00 PM EST", attendees: "45" },
          { date: "Dec 22, 2025", type: "Roundtable", location: "London", title: "Ethics in AI Development", description: "A deep-dive conversation about...", time: "7:00 PM GMT", attendees: "30" },
          { date: "Jan 10, 2026", type: "Showcase", location: "Nairobi", title: "Community AI Projects", description: "Showcasing local innovations...", time: "5:00 PM EAT", attendees: "60" },
        ]
      }
    },
    {
      id: "builders",
      type: "builders",
      title: "Builders Preview",
      enabled: true,
      order: 7,
      content: {
        heading: "Meet the Builders",
        subheading: "Every builder brings their unique perspective, expertise, and care to the Collective.",
        builders: [
          { initials: "SC", name: "Sarah Chen", role: "Lead Researcher", program: "Think Tank" },
          { initials: "MW", name: "Marcus Williams", role: "Community Organizer", program: "Chapters" },
          { initials: "AO", name: "Amara Okafor", role: "AI Educator", program: "AI Lunchbox" },
          { initials: "JP", name: "Juan Pérez", role: "Policy Advisor", program: "Think Tank" },
          { initials: "SR", name: "Saanvi Reddy", role: "Program Director", program: "Micro-Entrepreneurship" },
        ]
      }
    },
    {
      id: "footer",
      type: "footer",
      title: "Footer",
      enabled: true,
      order: 8,
      content: {
        logo: "THE COLLECTIVE",
        tagline: "The Continuum of Human Intelligence",
        columns: [
          {
            title: "Explore",
            links: [
              { label: "About", href: "/about" },
              { label: "Philosophy", href: "/philosophy" },
              { label: "Programs", href: "/programs" },
              { label: "Chapters", href: "/chapters" },
              { label: "Events", href: "/events" },
              { label: "Builders", href: "/builders" },
            ]
          },
          {
            title: "Programs",
            links: [
              { label: "AI Lunchbox", href: "/programs/ai-lunchbox" },
              { label: "Micro-Entrepreneurship", href: "/programs/micro-entrepreneurship" },
              { label: "Think Tank", href: "/programs/think-tank" },
            ]
          },
          {
            title: "Connect",
            links: [
              { label: "Join Us", href: "/join" },
              { label: "Newsletter", href: "/newsletter" },
              { label: "LinkedIn", href: "#" },
              { label: "Twitter", href: "#" },
              { label: "Medium", href: "#" },
            ]
          }
        ],
        copyright: "© 2025 Human + AI Collective",
        legalLinks: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
          { label: "Accessibility", href: "/accessibility" },
        ],
        backgroundColor: "Warm White (Light Mode)",
      }
    },
  ]);

  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"edit" | "preview">("edit");

  const moveSection = (index: number, direction: "up" | "down") => {
    const newSections = [...sections];
    const swapIndex = direction === "up" ? index - 1 : index + 1;
    if (swapIndex >= 0 && swapIndex < newSections.length) {
      [newSections[index], newSections[swapIndex]] = [newSections[swapIndex], newSections[index]];
      newSections[index].order = index + 1;
      newSections[swapIndex].order = swapIndex + 1;
      setSections(newSections);
    }
  };

  const toggleSection = (id: string) => {
    setSections(sections.map(s => s.id === id ? { ...s, enabled: !s.enabled } : s));
  };

  const updateSectionContent = (id: string, newContent: any) => {
    setSections(sections.map(s => s.id === id ? { ...s, content: newContent } : s));
  };

  return (
    <div className="min-h-screen bg-[#040619] text-[#FDFDFB]">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#040619]/95 backdrop-blur-lg border-b border-[#65D6C8]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl bg-gradient-to-r from-[#7A6FF0] to-[#65D6C8] bg-clip-text text-transparent">
              Landing Page Wireframe Editor
            </h1>
            <p className="text-sm text-[#FDFDFB]/60 mt-1">
              {viewMode === "edit" ? (
                <>Edit, reorder, and configure your landing page sections</>
              ) : (
                <>Viewing live wireframe preview — see your design in action</>
              )}
            </p>
          </div>
          <div className="flex items-center gap-4">
            {/* Mode Toggle - Enhanced */}
            <div className="flex items-center gap-2 p-1 bg-[#1A1F35] rounded-lg border border-[#65D6C8]/20">
              <button
                onClick={() => setViewMode("edit")}
                className={`px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-400 ${
                  viewMode === "edit"
                    ? "bg-[#7A6FF0] text-[#FDFDFB] shadow-[0_0_20px_rgba(122,111,240,0.3)]"
                    : "text-[#FDFDFB]/50 hover:text-[#FDFDFB]/80"
                }`}
              >
                <Edit2 className="w-4 h-4" />
                <span className="text-sm">Edit Mode</span>
              </button>
              <button
                onClick={() => setViewMode("preview")}
                className={`px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-400 ${
                  viewMode === "preview"
                    ? "bg-[#65D6C8] text-[#040619] shadow-[0_0_20px_rgba(101,214,200,0.3)]"
                    : "text-[#FDFDFB]/50 hover:text-[#FDFDFB]/80"
                }`}
              >
                <Eye className="w-4 h-4" />
                <span className="text-sm">Preview Mode</span>
              </button>
            </div>

            {/* Export Button */}
            <button
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] hover:shadow-[0_0_25px_rgba(101,214,200,0.4)] transition-all flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Export Code
            </button>
          </div>
        </div>

        {/* Mode Indicator Banner */}
        {viewMode === "preview" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-6 py-2 bg-gradient-to-r from-[#65D6C8]/10 to-[#7A6FF0]/10 border-t border-[#65D6C8]/20"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#65D6C8]">
                <Eye className="w-3 h-3" />
                <span>Preview Mode Active — Viewing interactive wireframe prototype</span>
              </div>
              <button
                onClick={() => setViewMode("edit")}
                className="text-[#FDFDFB]/60 hover:text-[#65D6C8] underline"
              >
                Return to Edit Mode
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Main Content */}
      <div className={viewMode === "preview" ? "pt-32 pb-12" : "pt-24 pb-12"}>
        <div className="max-w-7xl mx-auto px-6">
          {viewMode === "edit" ? (
            // Edit Mode - Section List
            <div className="space-y-4">
              {sections.map((section, index) => (
                <SectionEditor
                  key={section.id}
                  section={section}
                  index={index}
                  isFirst={index === 0}
                  isLast={index === sections.length - 1}
                  isEditing={editingSection === section.id}
                  onMoveUp={() => moveSection(index, "up")}
                  onMoveDown={() => moveSection(index, "down")}
                  onToggle={() => toggleSection(section.id)}
                  onEdit={() => setEditingSection(editingSection === section.id ? null : section.id)}
                  onUpdate={(content) => updateSectionContent(section.id, content)}
                />
              ))}
            </div>
          ) : (
            // Preview Mode - Visual Wireframe
            <div className="space-y-12">
              {/* Preview Header */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-3 pb-8 border-b border-[#65D6C8]/10"
              >
                <h2 className="text-3xl bg-gradient-to-r from-[#7A6FF0] to-[#65D6C8] bg-clip-text text-transparent">
                  Landing Page Wireframe Preview
                </h2>
                <p className="text-sm text-[#FDFDFB]/60 max-w-2xl mx-auto">
                  This is how your landing page sections will flow. Scroll to see all {sections.filter(s => s.enabled).length} enabled sections.
                </p>
                <div className="flex items-center justify-center gap-4 pt-2">
                  <div className="text-xs text-[#FDFDFB]/40">
                    Hover over elements to see interactions
                  </div>
                  <div className="h-1 w-1 rounded-full bg-[#65D6C8]/40"></div>
                  <div className="text-xs text-[#FDFDFB]/40">
                    Click "Edit Mode" to make changes
                  </div>
                </div>
              </motion.div>

              {/* Section Previews */}
              {sections.filter(s => s.enabled).map((section) => (
                <SectionPreview key={section.id} section={section} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Section Editor Component
function SectionEditor({ section, index, isFirst, isLast, isEditing, onMoveUp, onMoveDown, onToggle, onEdit, onUpdate }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`border rounded-lg overflow-hidden transition-all ${
        section.enabled 
          ? "border-[#65D6C8]/30 bg-[#1A1F35]/30" 
          : "border-[#FDFDFB]/10 bg-[#1A1F35]/10 opacity-50"
      }`}
    >
      {/* Section Header */}
      <div className="p-4 flex items-center justify-between border-b border-[#65D6C8]/10">
        <div className="flex items-center gap-4">
          <span className="text-sm font-mono text-[#65D6C8]">#{section.order}</span>
          <h3 className="text-lg">{section.title}</h3>
          <span className={`text-xs px-2 py-1 rounded ${
            section.enabled ? "bg-[#65D6C8]/20 text-[#65D6C8]" : "bg-[#FDFDFB]/10 text-[#FDFDFB]/50"
          }`}>
            {section.enabled ? "Enabled" : "Disabled"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Reorder buttons */}
          <button
            onClick={onMoveUp}
            disabled={isFirst}
            className="p-2 hover:bg-[#7A6FF0]/20 rounded disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <button
            onClick={onMoveDown}
            disabled={isLast}
            className="p-2 hover:bg-[#7A6FF0]/20 rounded disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronDown className="w-4 h-4" />
          </button>

          {/* Toggle visibility */}
          <button
            onClick={onToggle}
            className="p-2 hover:bg-[#65D6C8]/20 rounded transition-all"
          >
            {section.enabled ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </button>

          {/* Edit button */}
          <button
            onClick={onEdit}
            className={`p-2 rounded transition-all ${
              isEditing ? "bg-[#7A6FF0]/30" : "hover:bg-[#7A6FF0]/20"
            }`}
          >
            <Edit2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Editable Content */}
      {isEditing && (
        <div className="p-6 space-y-4 bg-[#040619]/50">
          <SectionContentEditor section={section} onUpdate={onUpdate} />
        </div>
      )}
    </motion.div>
  );
}

// Section Content Editor - Dynamic based on section type
function SectionContentEditor({ section, onUpdate }: any) {
  const handleChange = (field: string, value: any) => {
    onUpdate({ ...section.content, [field]: value });
  };

  const handleArrayChange = (arrayName: string, index: number, field: string, value: any) => {
    const newArray = [...section.content[arrayName]];
    newArray[index] = { ...newArray[index], [field]: value };
    onUpdate({ ...section.content, [arrayName]: newArray });
  };

  switch (section.type) {
    case "header":
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Logo</label>
            <input
              type="text"
              value={section.content.logo}
              onChange={(e) => handleChange("logo", e.target.value)}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Navigation Links</label>
            <div className="space-y-2">
              {section.content.navLinks.map((link: any, i: number) => (
                <div key={i} className="flex gap-3">
                  <input
                    type="text"
                    value={link.label}
                    onChange={(e) => handleArrayChange("navLinks", i, "label", e.target.value)}
                    placeholder="Label"
                    className="flex-1 px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                  />
                  <input
                    type="text"
                    value={link.href}
                    onChange={(e) => handleArrayChange("navLinks", i, "href", e.target.value)}
                    placeholder="Href"
                    className="flex-1 px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Primary CTA Button</label>
            <input
              type="text"
              value={section.content.ctaPrimary}
              onChange={(e) => handleChange("ctaPrimary", e.target.value)}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Donate CTA Button</label>
            <input
              type="text"
              value={section.content.ctaDonate}
              onChange={(e) => handleChange("ctaDonate", e.target.value)}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Event CTA Button</label>
            <input
              type="text"
              value={section.content.ctaEvent}
              onChange={(e) => handleChange("ctaEvent", e.target.value)}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Position</label>
            <input
              type="text"
              value={section.content.position}
              onChange={(e) => handleChange("position", e.target.value)}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Background Color</label>
            <input
              type="text"
              value={section.content.backgroundColor}
              onChange={(e) => handleChange("backgroundColor", e.target.value)}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Show CTAs in Header</label>
            <input
              type="checkbox"
              checked={section.content.showCtasInHeader}
              onChange={(e) => handleChange("showCtasInHeader", e.target.checked)}
              className="w-4 h-4 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
        </div>
      );

    case "hero":
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Headline</label>
            <input
              type="text"
              value={section.content.headline}
              onChange={(e) => handleChange("headline", e.target.value)}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Subtext 1</label>
            <textarea
              value={section.content.subtext1}
              onChange={(e) => handleChange("subtext1", e.target.value)}
              rows={3}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Subtext 2</label>
            <textarea
              value={section.content.subtext2}
              onChange={(e) => handleChange("subtext2", e.target.value)}
              rows={3}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Donate CTA Button</label>
            <input
              type="text"
              value={section.content.ctaDonate}
              onChange={(e) => handleChange("ctaDonate", e.target.value)}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Event CTA Button</label>
            <input
              type="text"
              value={section.content.ctaEvent}
              onChange={(e) => handleChange("ctaEvent", e.target.value)}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Show CTAs in Hero</label>
            <input
              type="checkbox"
              checked={section.content.showCtasInHero}
              onChange={(e) => handleChange("showCtasInHero", e.target.checked)}
              className="w-4 h-4 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
        </div>
      );

    case "metrics":
      return (
        <div className="space-y-6">
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Section Heading</label>
            <input
              type="text"
              value={section.content.heading}
              onChange={(e) => handleChange("heading", e.target.value)}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Subheading</label>
            <input
              type="text"
              value={section.content.subheading}
              onChange={(e) => handleChange("subheading", e.target.value)}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div className="space-y-4">
            <label className="block text-sm text-[#65D6C8]">Metrics ({section.content.metrics.length})</label>
            {section.content.metrics.map((metric: any, i: number) => (
              <div key={i} className="p-4 bg-[#040619] rounded-lg border border-[#65D6C8]/20 space-y-3">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={metric.number}
                    onChange={(e) => handleArrayChange("metrics", i, "number", e.target.value)}
                    placeholder="Number"
                    className="w-32 px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                  />
                  <input
                    type="text"
                    value={metric.label}
                    onChange={(e) => handleArrayChange("metrics", i, "label", e.target.value)}
                    placeholder="Label"
                    className="flex-1 px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                  />
                </div>
                <textarea
                  value={metric.description}
                  onChange={(e) => handleArrayChange("metrics", i, "description", e.target.value)}
                  placeholder="Description"
                  rows={2}
                  className="w-full px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] text-sm focus:border-[#65D6C8] focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>
      );

    case "pillars":
      return (
        <div className="space-y-6">
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Section Heading</label>
            <input
              type="text"
              value={section.content.heading}
              onChange={(e) => handleChange("heading", e.target.value)}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Subheading</label>
            <textarea
              value={section.content.subheading}
              onChange={(e) => handleChange("subheading", e.target.value)}
              rows={2}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div className="space-y-4">
            <label className="block text-sm text-[#65D6C8]">Pillars (3)</label>
            {section.content.pillars.map((pillar: any, i: number) => (
              <div key={i} className="p-4 bg-[#040619] rounded-lg border border-[#65D6C8]/20 space-y-3">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={pillar.icon}
                    onChange={(e) => handleArrayChange("pillars", i, "icon", e.target.value)}
                    placeholder="Icon"
                    className="w-20 px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-2xl text-center focus:border-[#65D6C8] focus:outline-none"
                  />
                  <input
                    type="text"
                    value={pillar.title}
                    onChange={(e) => handleArrayChange("pillars", i, "title", e.target.value)}
                    placeholder="Title"
                    className="flex-1 px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  value={pillar.subtitle}
                  onChange={(e) => handleArrayChange("pillars", i, "subtitle", e.target.value)}
                  placeholder="Subtitle"
                  className="w-full px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] text-sm focus:border-[#65D6C8] focus:outline-none"
                />
                <textarea
                  value={pillar.description}
                  onChange={(e) => handleArrayChange("pillars", i, "description", e.target.value)}
                  placeholder="Description"
                  rows={3}
                  className="w-full px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] text-sm focus:border-[#65D6C8] focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>
      );

    case "chapters":
      return (
        <div className="space-y-6">
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Section Heading</label>
            <input
              type="text"
              value={section.content.heading}
              onChange={(e) => handleChange("heading", e.target.value)}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Subheading</label>
            <textarea
              value={section.content.subheading}
              onChange={(e) => handleChange("subheading", e.target.value)}
              rows={2}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div className="space-y-4">
            <label className="block text-sm text-[#65D6C8]">Chapters ({section.content.chapters.length})</label>
            {section.content.chapters.map((chapter: any, i: number) => (
              <div key={i} className="p-4 bg-[#040619] rounded-lg border border-[#65D6C8]/20 space-y-3">
                <input
                  type="text"
                  value={chapter.name}
                  onChange={(e) => handleArrayChange("chapters", i, "name", e.target.value)}
                  placeholder="Name"
                  className="w-full px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                />
                <textarea
                  value={chapter.description}
                  onChange={(e) => handleArrayChange("chapters", i, "description", e.target.value)}
                  placeholder="Description"
                  rows={2}
                  className="w-full px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] text-sm focus:border-[#65D6C8] focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>
      );

    case "howWeBuild":
      return (
        <div className="space-y-6">
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Section Heading</label>
            <input
              type="text"
              value={section.content.heading}
              onChange={(e) => handleChange("heading", e.target.value)}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Subheading</label>
            <textarea
              value={section.content.subheading}
              onChange={(e) => handleChange("subheading", e.target.value)}
              rows={2}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div className="space-y-4">
            <label className="block text-sm text-[#65D6C8]">Principles ({section.content.principles.length})</label>
            {section.content.principles.map((principle: any, i: number) => (
              <div key={i} className="p-4 bg-[#040619] rounded-lg border border-[#65D6C8]/20 space-y-3">
                <input
                  type="text"
                  value={principle.title}
                  onChange={(e) => handleArrayChange("principles", i, "title", e.target.value)}
                  placeholder="Title"
                  className="w-full px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                />
                <textarea
                  value={principle.description}
                  onChange={(e) => handleArrayChange("principles", i, "description", e.target.value)}
                  placeholder="Description"
                  rows={2}
                  className="w-full px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] text-sm focus:border-[#65D6C8] focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>
      );

    case "events":
      return (
        <div className="space-y-6">
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Section Heading</label>
            <input
              type="text"
              value={section.content.heading}
              onChange={(e) => handleChange("heading", e.target.value)}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Subheading</label>
            <textarea
              value={section.content.subheading}
              onChange={(e) => handleChange("subheading", e.target.value)}
              rows={2}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div className="space-y-4">
            <label className="block text-sm text-[#65D6C8]">Events ({section.content.events.length})</label>
            {section.content.events.map((event: any, i: number) => (
              <div key={i} className="p-4 border border-[#65D6C8]/20 rounded-lg bg-[#1A1F35]/20 space-y-2">
                <input
                  type="text"
                  value={event.date}
                  onChange={(e) => handleArrayChange("events", i, "date", e.target.value)}
                  placeholder="Date"
                  className="w-full px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                />
                <input
                  type="text"
                  value={event.type}
                  onChange={(e) => handleArrayChange("events", i, "type", e.target.value)}
                  placeholder="Type"
                  className="w-full px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                />
                <input
                  type="text"
                  value={event.location}
                  onChange={(e) => handleArrayChange("events", i, "location", e.target.value)}
                  placeholder="Location"
                  className="w-full px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                />
                <input
                  type="text"
                  value={event.title}
                  onChange={(e) => handleArrayChange("events", i, "title", e.target.value)}
                  placeholder="Title"
                  className="w-full px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                />
                <textarea
                  value={event.description}
                  onChange={(e) => handleArrayChange("events", i, "description", e.target.value)}
                  placeholder="Description"
                  rows={2}
                  className="w-full px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] text-sm focus:border-[#65D6C8] focus:outline-none"
                />
                <input
                  type="text"
                  value={event.time}
                  onChange={(e) => handleArrayChange("events", i, "time", e.target.value)}
                  placeholder="Time"
                  className="w-full px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                />
                <input
                  type="text"
                  value={event.attendees}
                  onChange={(e) => handleArrayChange("events", i, "attendees", e.target.value)}
                  placeholder="Attendees"
                  className="w-full px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>
      );

    case "builders":
      return (
        <div className="space-y-6">
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Section Heading</label>
            <input
              type="text"
              value={section.content.heading}
              onChange={(e) => handleChange("heading", e.target.value)}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-[#65D6C8] mb-2">Subheading</label>
            <textarea
              value={section.content.subheading}
              onChange={(e) => handleChange("subheading", e.target.value)}
              rows={2}
              className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
            />
          </div>
          <div className="space-y-4">
            <label className="block text-sm text-[#65D6C8]">Builders ({section.content.builders.length})</label>
            {section.content.builders.map((builder: any, i: number) => (
              <div key={i} className="p-4 bg-[#040619] rounded-lg border border-[#65D6C8]/20 space-y-3">
                <input
                  type="text"
                  value={builder.initials}
                  onChange={(e) => handleArrayChange("builders", i, "initials", e.target.value)}
                  placeholder="Initials"
                  className="w-20 px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-2xl text-center focus:border-[#65D6C8] focus:outline-none"
                />
                <input
                  type="text"
                  value={builder.name}
                  onChange={(e) => handleArrayChange("builders", i, "name", e.target.value)}
                  placeholder="Name"
                  className="w-full px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                />
                <input
                  type="text"
                  value={builder.role}
                  onChange={(e) => handleArrayChange("builders", i, "role", e.target.value)}
                  placeholder="Role"
                  className="w-full px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                />
                <input
                  type="text"
                  value={builder.program}
                  onChange={(e) => handleArrayChange("builders", i, "program", e.target.value)}
                  placeholder="Program"
                  className="w-full px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>
      );

    case "footer":
      return (
        <div className="space-y-4">
          <label className="block text-sm text-[#65D6C8] mb-2">Logo</label>
          <input
            type="text"
            value={section.content.logo}
            onChange={(e) => handleChange("logo", e.target.value)}
            className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
          />
          <label className="block text-sm text-[#65D6C8] mb-2">Tagline</label>
          <input
            type="text"
            value={section.content.tagline}
            onChange={(e) => handleChange("tagline", e.target.value)}
            className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
          />
          <label className="block text-sm text-[#65D6C8] mb-2">Columns</label>
          <div className="space-y-2">
            {section.content.columns.map((column: any, i: number) => (
              <div key={i} className="space-y-2">
                <input
                  type="text"
                  value={column.title}
                  onChange={(e) => handleArrayChange("columns", i, "title", e.target.value)}
                  placeholder="Title"
                  className="w-full px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                />
                <div className="space-y-2">
                  {column.links.map((link: any, j: number) => (
                    <div key={j} className="flex gap-3">
                      <input
                        type="text"
                        value={link.label}
                        onChange={(e) => handleArrayChange("columns", i, "links", j, "label", e.target.value)}
                        placeholder="Label"
                        className="flex-1 px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                      />
                      <input
                        type="text"
                        value={link.href}
                        onChange={(e) => handleArrayChange("columns", i, "links", j, "href", e.target.value)}
                        placeholder="Href"
                        className="flex-1 px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <label className="block text-sm text-[#65D6C8] mb-2">Copyright</label>
          <input
            type="text"
            value={section.content.copyright}
            onChange={(e) => handleChange("copyright", e.target.value)}
            className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
          />
          <label className="block text-sm text-[#65D6C8] mb-2">Legal Links</label>
          <div className="space-y-2">
            {section.content.legalLinks.map((link: any, i: number) => (
              <div key={i} className="flex gap-3">
                <input
                  type="text"
                  value={link.label}
                  onChange={(e) => handleArrayChange("legalLinks", i, "label", e.target.value)}
                  placeholder="Label"
                  className="flex-1 px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                />
                <input
                  type="text"
                  value={link.href}
                  onChange={(e) => handleArrayChange("legalLinks", i, "href", e.target.value)}
                  placeholder="Href"
                  className="flex-1 px-3 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                />
              </div>
            ))}
          </div>
          <label className="block text-sm text-[#65D6C8] mb-2">Background Color</label>
          <input
            type="text"
            value={section.content.backgroundColor}
            onChange={(e) => handleChange("backgroundColor", e.target.value)}
            className="w-full px-4 py-2 bg-[#1A1F35] border border-[#65D6C8]/30 rounded-lg text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
          />
        </div>
      );

    default:
      return (
        <div className="text-[#FDFDFB]/60 text-sm">
          Editor for {section.type} section coming soon...
        </div>
      );
  }
}

// Section Preview Component
function SectionPreview({ section }: { section: Section }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border border-[#65D6C8]/20 rounded-lg overflow-hidden bg-[#1A1F35]/20"
    >
      {/* Section Label */}
      <div className="px-6 py-3 bg-[#040619]/80 border-b border-[#65D6C8]/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-mono text-[#65D6C8]">#{section.order}</span>
          <span className="text-sm text-[#FDFDFB]/70">{section.title}</span>
        </div>
        <span className="text-xs text-[#FDFDFB]/40">{section.type}</span>
      </div>

      {/* Visual Preview */}
      <div className="p-8">
        {section.type === "header" && <HeaderStyleToggle content={section.content} />}
        {section.type === "hero" && <EnhancedHeroPreview content={section.content} />}
        {section.type === "metrics" && <MetricsPreviewToggle content={section.content} />}
        {section.type === "pillars" && <PillarsPreviewToggle content={section.content} />}
        {section.type === "chapters" && <ChaptersPreviewToggle content={section.content} />}
        {section.type === "howWeBuild" && <HowWeBuildPreviewToggle content={section.content} />}
        {section.type === "events" && <EventsPreviewToggle content={section.content} />}
        {section.type === "builders" && <BuildersFinaleToggle content={section.content} />}
        {section.type === "footer" && <FooterPreview content={section.content} />}
      </div>
    </motion.div>
  );
}

// Preview Components for each section type
function HeaderPreview({ content }: any) {
  return (
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
            {content.navLinks.map((link: any, i: number) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-sm text-[#FDFDFB]/70 hover:text-[#65D6C8] transition-all duration-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* CTA Buttons - Conditional */}
        {content.showCtasInHeader ? (
          <div className="flex items-center gap-3">
            {/* Join the Event - Ghost/Outlined */}
            <button className="px-4 py-2 rounded-lg border border-[#7A6FF0]/60 bg-gradient-to-r from-[#7A6FF0]/10 to-[#65D6C8]/10 text-[#FDFDFB] text-sm hover:from-[#7A6FF0]/20 hover:to-[#65D6C8]/20 hover:border-[#7A6FF0] hover:shadow-[0_0_20px_rgba(122,111,240,0.3)] transition-all duration-400">
              {content.ctaEvent}
            </button>

            {/* Donate - Aurora Teal Filled */}
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] text-sm hover:shadow-[0_0_25px_rgba(101,214,200,0.4)] hover:scale-105 transition-all duration-400">
              {content.ctaDonate}
            </button>

            {/* Enter → - Primary */}
            <button className="px-4 py-2 rounded-lg bg-[#65D6C8] text-[#040619] text-sm hover:bg-[#A8F0E4] hover:shadow-[0_0_20px_rgba(101,214,200,0.3)] transition-all duration-400">
              {content.ctaPrimary}
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            {/* Enter → - Solo Primary CTA */}
            <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] text-sm hover:shadow-[0_0_25px_rgba(101,214,200,0.4)] transition-all duration-400">
              {content.ctaPrimary}
            </button>
          </div>
        )}
      </div>

      {/* Design Notes */}
      <div className="p-4 bg-[#7A6FF0]/5 border border-[#7A6FF0]/20 rounded-lg space-y-2">
        <p className="text-xs text-[#65D6C8] uppercase tracking-wider">
          {content.showCtasInHeader ? "Header Placement (Alternative)" : "Clean Navigation (Current)"}
        </p>
        <div className="text-xs text-[#FDFDFB]/60 space-y-1">
          {content.showCtasInHeader ? (
            <>
              <p>• Three-button rhythm: Ghost (Event) → Gradient (Donate) → Solid (Enter)</p>
              <p>• Aurora shimmer on hover with subtle glow effects</p>
              <p>• Maintains navigation clarity while adding conversion points</p>
            </>
          ) : (
            <>
              <p>• Clean navigation-focused header with single CTA</p>
              <p>• Primary conversion actions moved to Hero for maximum impact</p>
              <p>• Respects museum aesthetic — less visual noise, more intentionality</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function HeroPreview({ content }: any) {
  return (
    <div className="relative py-20">
      {/* Ambient Glow Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-96 h-96 bg-gradient-to-br from-[#7A6FF0]/20 via-[#65D6C8]/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative space-y-16 text-center">
        {/* Acheulean Mark (Aurora Crystal Symbol) - Museum Exhibit Style */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-56 h-56 mx-auto relative"
        >
          {/* Outer Ring - Pulsing */}
          <div className="absolute inset-0 border border-[#7A6FF0]/30 rounded-full animate-pulse"></div>
          <div className="absolute inset-4 border border-[#65D6C8]/20 rounded-full"></div>
          
          {/* Inner Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 bg-gradient-to-br from-[#7A6FF0]/30 to-[#65D6C8]/30 rounded-full blur-2xl"></div>
          </div>
          
          {/* Crystal Symbol */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-7xl bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] bg-clip-text text-transparent">◆</span>
          </div>

          {/* Subtle Corner Accents - Museum Frame */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-[#65D6C8]/20"></div>
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t border-r border-[#65D6C8]/20"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-[#65D6C8]/20"></div>
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-[#65D6C8]/20"></div>
        </motion.div>

        {/* Headline - Typography as Art */}
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

        {/* Subtext - Museum Label Style */}
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

        {/* CTAs - Illuminated Exhibits Emerging from Darkness */}
        {content.showCtasInHero && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="pt-12 space-y-10"
          >
            {/* CTA Container with Subtle Platform Effect */}
            <div className="relative">
              {/* Platform Glow */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-24 bg-gradient-to-r from-[#7A6FF0]/10 via-[#65D6C8]/10 to-[#7A6FF0]/10 blur-2xl rounded-full"></div>
              
              {/* Buttons */}
              <div className="relative flex items-center justify-center gap-6">
                {/* Donate - Primary Illuminated Exhibit */}
                <button className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] overflow-hidden transition-all duration-400 hover:scale-105 hover:shadow-[0_0_40px_rgba(101,214,200,0.5)]">
                  {/* Inner Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A8F0E4] to-[#7A6FF0] opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                  <span className="relative z-10">{content.ctaDonate}</span>
                </button>

                {/* Join the Event - Secondary Ghost Exhibit */}
                <button className="group relative px-8 py-4 rounded-lg border-2 border-[#7A6FF0]/50 bg-gradient-to-r from-[#7A6FF0]/5 to-[#65D6C8]/5 text-[#FDFDFB] backdrop-blur-sm overflow-hidden transition-all duration-400 hover:border-[#7A6FF0] hover:from-[#7A6FF0]/15 hover:to-[#65D6C8]/15 hover:shadow-[0_0_35px_rgba(122,111,240,0.4)]">
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[#FDFDFB]/10 to-transparent"></div>
                  <span className="relative z-10">{content.ctaEvent}</span>
                </button>
              </div>
            </div>

            {/* Narrative Anchor - Museum Plaque Style */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#65D6C8]/30"></div>
              <p className="text-xs text-[#FDFDFB]/40 italic tracking-wide">
                Where intention meets action — each gesture, a spark in the continuum.
              </p>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#65D6C8]/30"></div>
            </div>
          </motion.div>
        )}

        {/* Design Philosophy Note */}
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
                <p className="text-xs text-[#65D6C8] uppercase tracking-wider">Design Philosophy</p>
              </div>
              <div className="text-xs text-[#FDFDFB]/60 leading-relaxed space-y-2">
                <p>• <strong>Museum-style composition:</strong> CTAs emerge from darkness like illuminated exhibits with platform glow effect</p>
                <p>• <strong>Vitruvian proportion:</strong> Deliberate spacing (py-20, space-y-16) creates breathing room and reverence</p>
                <p>• <strong>Aurora continuum:</strong> Gradient flows from teal to violet, symbolizing the evolution from tool to intelligence</p>
                <p>• <strong>Micro-motion language:</strong> Subtle scale, glow intensification, and shimmer effects on hover (0.4s ease-out)</p>
                <p>• <strong>Narrative hierarchy:</strong> Symbol → Philosophy → Action — each layer reveals the collective's essence</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function MetricsPreview({ content }: any) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <p className="text-sm text-[#65D6C8] uppercase tracking-wider">{content.heading}</p>
        <h2 className="text-3xl text-[#FDFDFB]">{content.subheading}</h2>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#65D6C8]/30 to-transparent" />
      <div className="grid grid-cols-5 gap-6">
        {content.metrics.map((metric: any, i: number) => (
          <div key={i} className="space-y-2 text-center">
            <div className="text-3xl bg-gradient-to-r from-[#7A6FF0] to-[#65D6C8] bg-clip-text text-transparent">
              {metric.number}
            </div>
            <div className="text-sm text-[#FDFDFB] uppercase tracking-wide">{metric.label}</div>
            <div className="text-xs text-[#FDFDFB]/50 leading-relaxed">{metric.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PillarsPreview({ content }: any) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl text-[#FDFDFB]">{content.heading}</h2>
        <p className="text-base text-[#FDFDFB]/70 max-w-3xl mx-auto">{content.subheading}</p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {content.pillars.map((pillar: any, i: number) => (
          <div key={i} className="p-6 border border-[#65D6C8]/20 rounded-lg bg-gradient-to-br from-[#7A6FF0]/10 to-[#65D6C8]/10 space-y-3">
            <div className="text-4xl">{pillar.icon}</div>
            <h3 className="text-xl text-[#FDFDFB]">{pillar.title}</h3>
            <p className="text-sm text-[#FDFDFB]/80">{pillar.subtitle}</p>
            <p className="text-xs text-[#FDFDFB]/60 leading-relaxed">{pillar.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChaptersPreview({ content }: any) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl text-[#FDFDFB]">{content.heading}</h2>
        <p className="text-base text-[#FDFDFB]/70 max-w-3xl mx-auto">{content.subheading}</p>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#65D6C8]/30 to-transparent" />
      <div className="grid grid-cols-5 gap-6">
        {content.chapters.map((chapter: any, i: number) => (
          <div key={i} className="space-y-2 text-center">
            <div className="text-lg text-[#FDFDFB]">{chapter.name}</div>
            <div className="text-xs text-[#FDFDFB]/50 leading-relaxed">{chapter.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HowWeBuildPreview({ content }: any) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl text-[#FDFDFB]">{content.heading}</h2>
        <p className="text-base text-[#FDFDFB]/70 max-w-3xl mx-auto">{content.subheading}</p>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#65D6C8]/30 to-transparent" />
      <div className="grid grid-cols-5 gap-6">
        {content.principles.map((principle: any, i: number) => (
          <div key={i} className="space-y-2 text-center">
            <div className="text-base text-[#FDFDFB] uppercase tracking-wide">{principle.title}</div>
            <div className="text-xs text-[#FDFDFB]/50">{principle.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EventsPreview({ content }: any) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl text-[#FDFDFB]">{content.heading}</h2>
        <p className="text-base text-[#FDFDFB]/70 max-w-3xl mx-auto">{content.subheading}</p>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#65D6C8]/30 to-transparent" />
      <div className="space-y-4">
        {content.events.map((event: any, i: number) => (
          <div key={i} className="p-4 border border-[#65D6C8]/20 rounded-lg bg-[#1A1F35]/20 space-y-2">
            <div className="flex items-center gap-3 text-sm text-[#65D6C8]">
              <span>{event.date}</span>
              <span>|</span>
              <span>{event.type}</span>
              <span>|</span>
              <span>{event.location}</span>
            </div>
            <h3 className="text-lg text-[#FDFDFB]">{event.title}</h3>
            <p className="text-sm text-[#FDFDFB]/60">{event.description}</p>
            <div className="flex items-center gap-4 text-xs text-[#FDFDFB]/50">
              <span>📍 {event.location}</span>
              <span>🕐 {event.time}</span>
              <span>👥 {event.attendees} attendees</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BuildersPreview({ content }: any) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl text-[#FDFDFB]">{content.heading}</h2>
        <p className="text-base text-[#FDFDFB]/70 max-w-3xl mx-auto">{content.subheading}</p>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-[#65D6C8]/30 to-transparent" />
      <div className="grid grid-cols-5 gap-6">
        {content.builders.map((builder: any, i: number) => (
          <div key={i} className="space-y-2 text-center">
            <div className="aspect-[3/4] border-2 border-dashed border-[#7A6FF0]/40 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#7A6FF0]/10 to-[#65D6C8]/10">
              <span className="text-4xl text-[#FDFDFB]/40">{builder.initials}</span>
            </div>
            <div className="text-sm text-[#FDFDFB]">{builder.name}</div>
            <div className="text-xs text-[#FDFDFB]/70">{builder.role}</div>
            <div className="text-xs text-[#65D6C8]">{builder.program}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FooterPreview({ content }: any) {
  return (
    <div className="space-y-8 p-6 bg-[#FDFDFB] text-[#040619] rounded-lg">
      {/* Logo and tagline */}
      <div className="space-y-2">
        <div className="text-2xl bg-gradient-to-r from-[#7A6FF0] to-[#65D6C8] bg-clip-text text-transparent">
          {content.logo}
        </div>
        <p className="text-sm text-[#040619]/60">{content.tagline}</p>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-3 gap-8">
        {content.columns.map((column: any, i: number) => (
          <div key={i} className="space-y-3">
            <h4 className="text-sm uppercase tracking-wider text-[#040619]">{column.title}</h4>
            <div className="space-y-2">
              {column.links.map((link: any, j: number) => (
                <a key={j} href={link.href} className="block text-sm text-[#040619]/70 hover:text-[#65D6C8]">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#65D6C8]/30 to-transparent" />

      {/* Copyright and legal */}
      <div className="flex items-center justify-between text-xs text-[#040619]/50">
        <span>{content.copyright}</span>
        <div className="flex items-center gap-4">
          {content.legalLinks.map((link: any, i: number) => (
            <a key={i} href={link.href} className="hover:text-[#65D6C8]">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}