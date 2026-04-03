"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { X, ArrowRight, ExternalLink, Mail, Linkedin, Github, Sparkles, Users, BookOpen, Box, Zap, Heart } from "lucide-react";
import { BuildersNetworkModal } from "./BuildersNetworkModal";

/**
 * BUILDERS FINALE SECTION - MERGED WITH "HOW WE BUILD"
 * 
 * The culmination: Principles → People
 * Where values find hands, and ideas find faces
 * 
 * Direction 1: Unified Flow (Structured)
 * Direction 2: Human Constellation (Creative Liberty)
 */

// Builders data with rich profiles and principle associations
const buildersData = [
  // === FOUNDERS ===
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    title: "Co-Founder & Head of Education",
    category: "founder",
    program: "AI Lunchbox",
    principles: ["learn", "impact"],
    color: "#65D6C8",
    bio: "Sarah launched AI Lunchbox to make AI education accessible to everyone. With a background in pedagogy and machine learning, she believes learning should be collaborative, not competitive.",
    expertise: ["AI Education", "Curriculum Design", "Community Building"],
    contact: { email: "sarah@collective.org", linkedin: "#", github: "#" }
  },
  {
    id: "marcus-williams",
    name: "Marcus Williams",
    title: "Co-Founder & Systems Architect",
    category: "founder",
    program: "Infrastructure",
    principles: ["build", "innovate"],
    color: "#A8F0E4",
    bio: "Marcus designs the technical infrastructure enabling the Collective's work. He's passionate about building systems that scale human understanding, not just computation.",
    expertise: ["Distributed Systems", "AI Infrastructure", "Open Source"],
    contact: { email: "marcus@collective.org", linkedin: "#", github: "#" }
  },
  {
    id: "amara-okafor",
    name: "Dr. Amara Okafor",
    title: "Co-Founder & Ethics Lead",
    category: "founder",
    program: "Think Tank",
    principles: ["collaboration", "impact"],
    color: "#7A6FF0",
    bio: "Amara ensures ethical considerations are woven into every Collective initiative. Her research focuses on bias mitigation and inclusive AI development.",
    expertise: ["AI Ethics", "Policy Research", "Global Development"],
    contact: { email: "amara@collective.org", linkedin: "#" }
  },

  // === RISING STARS ===
  {
    id: "james-liu",
    name: "James Liu",
    title: "AI Researcher & Educator",
    category: "rising-star",
    program: "AI Lunchbox",
    principles: ["learn", "innovate"],
    color: "#65D6C8",
    bio: "James bridges academic research and practical education. His workshops demystify complex AI concepts through hands-on projects.",
    expertise: ["Natural Language Processing", "Explainable AI", "Teaching"],
    contact: { linkedin: "#", github: "#" }
  },
  {
    id: "sofia-rodriguez",
    name: "Sofia Rodriguez",
    title: "Community Organizer",
    category: "rising-star",
    program: "Chapters",
    principles: ["collaboration", "impact"],
    color: "#7A6FF0",
    bio: "Sofia leads the Madrid chapter, creating spaces where diverse voices shape AI's future. She's a master connector who turns strangers into collaborators.",
    expertise: ["Community Organizing", "Event Planning", "Cross-Cultural Collaboration"],
    contact: { email: "sofia@madrid.collective.org", linkedin: "#" }
  },
  {
    id: "yuki-tanaka",
    name: "Yuki Tanaka",
    title: "Product Designer",
    category: "rising-star",
    program: "Fellows",
    principles: ["build", "innovate"],
    color: "#A8F0E4",
    bio: "Yuki designs interfaces that make AI feel human. Her work focuses on accessibility and intuitive interaction patterns.",
    expertise: ["UX/UI Design", "Accessibility", "Design Systems"],
    contact: { linkedin: "#", github: "#" }
  },

  // === RESEARCHERS ===
  {
    id: "prof-david-kim",
    name: "Prof. David Kim",
    title: "Research Director",
    category: "researcher",
    program: "Think Tank",
    principles: ["innovate", "learn"],
    color: "#7A6FF0",
    bio: "David leads the Think Tank's exploration of collective intelligence systems. His lab investigates how human+AI collaboration amplifies creativity.",
    expertise: ["Collective Intelligence", "Human-AI Collaboration", "Cognitive Science"],
    contact: { email: "kim@research.collective.org", linkedin: "#" }
  },
  {
    id: "elena-popov",
    name: "Dr. Elena Popov",
    title: "Senior Researcher",
    category: "researcher",
    program: "Think Tank",
    principles: ["innovate", "collaboration"],
    color: "#7A6FF0",
    bio: "Elena studies fairness and bias in ML systems. Her work has influenced industry standards for responsible AI development.",
    expertise: ["Fairness in ML", "Algorithmic Auditing", "Research Methods"],
    contact: { email: "elena@research.collective.org" }
  },

  // === COMMUNITY LEADERS ===
  {
    id: "raj-patel",
    name: "Raj Patel",
    title: "NYC Chapter Lead",
    category: "community-leader",
    program: "Chapters",
    principles: ["collaboration", "learn"],
    color: "#7A6FF0",
    bio: "Raj transforms coffee shops into classrooms and meetups into movements. The NYC chapter thrives under his energetic, inclusive leadership.",
    expertise: ["Community Leadership", "Event Facilitation", "Public Speaking"],
    contact: { email: "raj@nyc.collective.org", linkedin: "#" }
  },
  {
    id: "fatima-hassan",
    name: "Fatima Hassan",
    title: "Education Program Manager",
    category: "community-leader",
    program: "AI Lunchbox",
    principles: ["learn", "impact"],
    color: "#65D6C8",
    bio: "Fatima scales AI Lunchbox globally while maintaining its intimate, collaborative spirit. She's an expert at adapting curriculum to diverse contexts.",
    expertise: ["Program Management", "Curriculum Adaptation", "Global Coordination"],
    contact: { email: "fatima@collective.org", linkedin: "#" }
  },
  {
    id: "alex-chen",
    name: "Alex Chen",
    title: "Fellowship Coordinator",
    category: "community-leader",
    program: "Fellows",
    principles: ["build", "collaboration"],
    color: "#A8F0E4",
    bio: "Alex mentors emerging builders through the Fellows program. Their guidance helps transform curious learners into confident contributors.",
    expertise: ["Mentorship", "Project Management", "Career Development"],
    contact: { email: "alex@collective.org" }
  },

  // === MORE RISING STARS ===
  {
    id: "maya-johnston",
    name: "Maya Johnston",
    title: "Data Scientist",
    category: "rising-star",
    program: "Fellows",
    principles: ["build", "learn"],
    color: "#A8F0E4",
    bio: "Maya builds tools that democratize data analysis. Her open-source projects have helped hundreds of organizations leverage AI responsibly.",
    expertise: ["Data Science", "Open Source", "Data Visualization"],
    contact: { github: "#", linkedin: "#" }
  },
];

// Principle to icon mapping (from How We Build)
const principleIcons: any = {
  collaboration: Users,
  learn: BookOpen,
  build: Box,
  innovate: Zap,
  impact: Heart,
};

// Categories for tabs
const categories = [
  { id: "all", label: "All Builders", count: buildersData.length },
  { id: "founder", label: "Founders", count: buildersData.filter(b => b.category === "founder").length },
  { id: "rising-star", label: "Rising Stars", count: buildersData.filter(b => b.category === "rising-star").length },
  { id: "researcher", label: "Researchers", count: buildersData.filter(b => b.category === "researcher").length },
  { id: "community-leader", label: "Community Leaders", count: buildersData.filter(b => b.category === "community-leader").length },
];

// Builder Profile Modal
function BuilderProfileModal({ builder, isOpen, onClose }: any) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#040619]/95 backdrop-blur-xl"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-3xl w-full mx-6 p-10 rounded-2xl border border-[#65D6C8]/30 bg-gradient-to-br from-[#111931]/98 to-[#0a0a2e]/98 shadow-[0_0_60px_rgba(101,214,200,0.3)]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#65D6C8]/10 transition-colors"
        >
          <X className="w-5 h-5 text-[#FDFDFB]/70" />
        </button>

        <div 
          className="absolute inset-0 rounded-2xl blur-3xl opacity-20 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${builder.color}, transparent)` }}
        />

        <div className="relative space-y-6">
          {/* Avatar placeholder */}
          <div 
            className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold border-2 mx-auto"
            style={{ 
              borderColor: builder.color,
              background: `linear-gradient(135deg, ${builder.color}20, transparent)`,
              color: builder.color
            }}
          >
            {builder.name.split(' ').map((n: string) => n[0]).join('')}
          </div>

          <div className="text-center">
            <h3 className="text-3xl text-[#FDFDFB] font-semibold mb-2">{builder.name}</h3>
            <p className="text-lg text-[#BBD0FF]">{builder.title}</p>
            <div className="mt-2 inline-block px-4 py-1.5 rounded-full text-sm" style={{ 
              background: `${builder.color}20`,
              border: `1px solid ${builder.color}40`,
              color: builder.color
            }}>
              {builder.program}
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#65D6C8]/30 to-transparent" />

          <div>
            <h4 className="text-lg text-[#FDFDFB] font-medium mb-3">About</h4>
            <p className="text-[#FDFDFB]/70 leading-relaxed">
              {builder.bio}
            </p>
          </div>

          <div>
            <h4 className="text-lg text-[#FDFDFB] font-medium mb-3">Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {builder.expertise.map((skill: string, i: number) => (
                <span 
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-[#FDFDFB]/5 border border-[#FDFDFB]/10 text-sm text-[#FDFDFB]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg text-[#FDFDFB] font-medium mb-3">Embodies Principles</h4>
            <div className="flex gap-3">
              {builder.principles.map((principle: string, i: number) => {
                const Icon = principleIcons[principle];
                return (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#65D6C8]/10 border border-[#65D6C8]/20 text-[#65D6C8]">
                    <Icon className="w-4 h-4" />
                    <span className="text-sm capitalize">{principle}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {builder.contact && (
            <div>
              <h4 className="text-lg text-[#FDFDFB] font-medium mb-3">Connect</h4>
              <div className="flex gap-3">
                {builder.contact.email && (
                  <a href={`mailto:${builder.contact.email}`} className="p-3 rounded-lg bg-[#FDFDFB]/5 hover:bg-[#FDFDFB]/10 border border-[#FDFDFB]/10 transition-colors">
                    <Mail className="w-5 h-5 text-[#65D6C8]" />
                  </a>
                )}
                {builder.contact.linkedin && (
                  <a href={builder.contact.linkedin} className="p-3 rounded-lg bg-[#FDFDFB]/5 hover:bg-[#FDFDFB]/10 border border-[#FDFDFB]/10 transition-colors">
                    <Linkedin className="w-5 h-5 text-[#65D6C8]" />
                  </a>
                )}
                {builder.contact.github && (
                  <a href={builder.contact.github} className="p-3 rounded-lg bg-[#FDFDFB]/5 hover:bg-[#FDFDFB]/10 border border-[#FDFDFB]/10 transition-colors">
                    <Github className="w-5 h-5 text-[#65D6C8]" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ========================================
// DIRECTION 1: UNIFIED FLOW (STRUCTURED)
// ========================================

export function UnifiedBuildersFinale() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBuilder, setSelectedBuilder] = useState<any>(null);
  const [showBuildersModal, setShowBuildersModal] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const filteredBuilders = selectedCategory === "all" 
    ? buildersData 
    : buildersData.filter(b => b.category === selectedCategory);

  return (
    <>
      <motion.section
        ref={sectionRef}
        style={{ opacity }}
        className="relative py-40 overflow-hidden min-h-[1800px]"
      >
        {/* Deep aurora gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090F1E] via-[#0E1B4C] to-[#040619]" />

        {/* Animated vertical threads connecting principles to people */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <defs>
            <linearGradient id="threadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7A6FF0" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#65D6C8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#A8F0E4" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {[20, 35, 50, 65, 80].map((x, i) => (
            <motion.line
              key={i}
              x1={`${x}%`}
              y1="30%"
              x2={`${x}%`}
              y2="70%"
              stroke="url(#threadGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: i * 0.2 }}
              viewport={{ once: true }}
            />
          ))}
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
          {/* ===== HOW WE BUILD (TOP) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl text-[#EAF0FF] font-semibold mb-4">
              How We Build Together
            </h2>
            <p className="text-lg text-[#BBD0FF] max-w-3xl mx-auto">
              Guiding principles that flow into the hands of our community
            </p>
          </motion.div>

          {/* Principle nodes (simplified from full version) */}
          <div className="grid grid-cols-5 gap-6 mb-24">
            {[
              { label: "Collab", icon: Users, color: "#7A6FF0" },
              { label: "Learn", icon: BookOpen, color: "#65D6C8" },
              { label: "Build", icon: Box, color: "#A8F0E4" },
              { label: "Innovate", icon: Zap, color: "#7A6FF0" },
              { label: "Impact", icon: Heart, color: "#65D6C8" },
            ].map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div 
                  className="w-16 h-16 mx-auto mb-3 rounded-full border-2 flex items-center justify-center relative"
                  style={{ borderColor: principle.color }}
                >
                  <principle.icon className="w-7 h-7" style={{ color: principle.color }} />
                  <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
                    transition={{ duration: 4 + i * 0.3, repeat: Infinity }}
                    className="absolute inset-0 rounded-full blur-xl"
                    style={{ background: principle.color }}
                  />
                </div>
                <p className="text-sm text-[#EAF0FF]">{principle.label}</p>
              </motion.div>
            ))}
          </div>

          {/* ===== AURORA TRANSITION BAND ===== */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="relative h-32 mb-24 flex items-center justify-center"
          >
            <motion.div
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scaleY: [0.8, 1, 0.8]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#65D6C8]/30 to-transparent blur-2xl"
            />
            <div className="relative text-center">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-10 h-10 text-[#65D6C8] rotate-90" />
              </motion.div>
              <p className="text-sm text-[#65D6C8] mt-2 italic">
                Values become people
              </p>
            </div>
          </motion.div>

          {/* ===== MEET THE BUILDERS (BOTTOM) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-[#EAF0FF] font-semibold mb-4">
              Meet the Builders
            </h2>
            <p className="text-lg text-[#BBD0FF] max-w-3xl mx-auto">
              Every builder brings their unique perspective, expertise, and care to the Collective.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex gap-2 p-2 bg-[#111931]/80 border border-[#65D6C8]/20 rounded-lg backdrop-blur-sm overflow-x-auto">
              {categories.map((cat, i) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-5 py-2.5 rounded-lg text-sm transition-all duration-400 whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? "text-[#65D6C8]"
                      : "text-[#FDFDFB]/60 hover:text-[#FDFDFB]/80"
                  }`}
                >
                  {cat.label}
                  {cat.count > 0 && (
                    <span className="ml-2 text-xs opacity-60">({cat.count})</span>
                  )}
                  
                  {/* Active tab underline */}
                  {selectedCategory === cat.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0]"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Builders Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredBuilders.map((builder, i) => (
                <motion.div
                  key={builder.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  onClick={() => setSelectedBuilder(builder)}
                  className="relative p-6 rounded-xl bg-[#111931]/80 border border-[#65D6C8]/25 backdrop-blur-sm cursor-pointer group"
                >
                  {/* Hover glow */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 rounded-xl blur-2xl pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${builder.color}30, transparent)` }}
                  />

                  <div className="relative space-y-4">
                    {/* Avatar placeholder with aurora glow */}
                    <div 
                      className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-2xl font-bold border-2"
                      style={{ 
                        borderColor: builder.color,
                        background: `linear-gradient(135deg, ${builder.color}20, transparent)`,
                        color: builder.color,
                        boxShadow: `0 0 20px ${builder.color}40`
                      }}
                    >
                      {builder.name.split(' ').map(n => n[0]).join('')}
                    </div>

                    <div className="text-center">
                      <h3 className="text-lg text-[#EAF0FF] font-medium mb-1">
                        {builder.name}
                      </h3>
                      <p className="text-sm text-[#BBD0FF]/70 mb-2">
                        {builder.title}
                      </p>
                      <div 
                        className="inline-block px-3 py-1 rounded-full text-xs"
                        style={{ 
                          background: `${builder.color}15`,
                          border: `1px solid ${builder.color}30`,
                          color: builder.color
                        }}
                      >
                        {builder.program}
                      </div>
                    </div>

                    {/* Principle icons */}
                    <div className="flex justify-center gap-2">
                      {builder.principles.map((principle: string, i: number) => {
                        const Icon = principleIcons[principle];
                        return (
                          <div 
                            key={i}
                            className="w-8 h-8 rounded-full flex items-center justify-center"
                            style={{ background: `${builder.color}20` }}
                          >
                            <Icon className="w-4 h-4" style={{ color: builder.color }} />
                          </div>
                        );
                      })}
                    </div>

                    {/* CTA */}
                    <button className="w-full py-2 px-4 rounded-lg border border-[#FDFDFB]/20 text-[#FDFDFB] text-sm hover:bg-[#FDFDFB]/5 hover:border-[#65D6C8]/40 transition-all duration-400 flex items-center justify-center gap-2 group-hover:border-[#65D6C8]/60">
                      View Profile
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Global CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(101,214,200,0.5)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowBuildersModal(true)}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium transition-all duration-400 flex items-center gap-3 mx-auto"
            >
              <Users className="w-5 h-5" />
              Join the Builders Network
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <AnimatePresence>
        {selectedBuilder && (
          <BuilderProfileModal 
            builder={selectedBuilder} 
            isOpen={!!selectedBuilder} 
            onClose={() => setSelectedBuilder(null)} 
          />
        )}
      </AnimatePresence>

      {/* Builders Network Modal */}
      <BuildersNetworkModal
        isOpen={showBuildersModal}
        onClose={() => setShowBuildersModal(false)}
      />
    </>
  );
}

// ========================================
// DIRECTION 2: HUMAN CONSTELLATION
// ========================================

export function ConstellationBuildersFinale() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredBuilder, setHoveredBuilder] = useState<string | null>(null);
  const [selectedBuilder, setSelectedBuilder] = useState<any>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Position builders in constellation (scattered across field)
  const builderPositions = buildersData.map((_, i) => ({
    x: 15 + (i % 5) * 17,
    y: 25 + Math.floor(i / 5) * 20 + (i % 2) * 5,
  }));

  return (
    <>
      <motion.section
        ref={sectionRef}
        style={{ opacity }}
        className="relative py-40 overflow-hidden min-h-[1200px]"
      >
        {/* Deep aurora background with living flux */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e] via-[#0E1B4C] to-[#040619]" />

        {/* Ambient aurora layers */}
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
            x: ["-15%", "15%", "-15%"],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-[#7A6FF0]/15 via-transparent to-[#65D6C8]/10 blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.03, 0.12, 0.03],
            x: ["15%", "-15%", "15%"],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 10 }}
          className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-tl from-[#65D6C8]/15 via-transparent to-[#A8F0E4]/10 blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-[#EAF0FF] font-semibold mb-6">
              Meet the Builders
            </h2>
            <p className="text-lg text-[#BBD0FF] max-w-3xl mx-auto">
              Where values find hands, and ideas find faces — the continuum becomes human.
            </p>
          </motion.div>

          {/* Human Constellation Field */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative w-full h-[800px] rounded-2xl border border-[#65D6C8]/10 bg-[#040619]/20 backdrop-blur-sm overflow-hidden"
          >
            {/* Dynamic connection lines (connect builders to their principles) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {buildersData.map((builder, i) => {
                const pos = builderPositions[i];
                // Draw subtle lines connecting builders with similar principles
                const connections = buildersData
                  .map((b, j) => ({ builder: b, index: j }))
                  .filter((b, j) => j > i && b.builder.principles.some(p => builder.principles.includes(p)))
                  .slice(0, 2); // Limit connections to avoid clutter

                return connections.map((conn, ci) => {
                  const connPos = builderPositions[conn.index];
                  return (
                    <motion.line
                      key={`${i}-${conn.index}`}
                      x1={`${pos.x}%`}
                      y1={`${pos.y}%`}
                      x2={`${connPos.x}%`}
                      y2={`${connPos.y}%`}
                      stroke={builder.color}
                      strokeWidth="1"
                      opacity="0.15"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      animate={{
                        opacity: hoveredBuilder === builder.id || hoveredBuilder === conn.builder.id ? 0.4 : 0.15
                      }}
                    />
                  );
                });
              })}
            </svg>

            {/* Builder nodes */}
            {buildersData.map((builder, i) => {
              const pos = builderPositions[i];
              
              return (
                <motion.div
                  key={builder.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredBuilder(builder.id)}
                  onMouseLeave={() => setHoveredBuilder(null)}
                  onClick={() => setSelectedBuilder(builder)}
                  className="absolute cursor-pointer group"
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {/* Node glow */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.3, 1]
                    }}
                    transition={{
                      duration: 5 + i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full blur-2xl"
                    style={{
                      background: builder.color,
                      width: '100px',
                      height: '100px',
                      marginLeft: '-50px',
                      marginTop: '-50px'
                    }}
                  />

                  {/* Node core (avatar) */}
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-14 h-14 rounded-full border-2 border-[#FDFDFB]/80 bg-[#111931]/90 backdrop-blur-sm flex items-center justify-center text-lg font-bold"
                    style={{
                      boxShadow: `0 0 20px ${builder.color}80`,
                      color: builder.color
                    }}
                  >
                    {builder.name.split(' ').map(n => n[0]).join('')}
                  </motion.div>

                  {/* Principle indicators (small icons around node) */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {builder.principles.slice(0, 2).map((principle: string, pi: number) => {
                      const Icon = principleIcons[principle];
                      return (
                        <div 
                          key={pi}
                          className="w-5 h-5 rounded-full flex items-center justify-center bg-[#111931]/90 border"
                          style={{ borderColor: builder.color }}
                        >
                          <Icon className="w-3 h-3" style={{ color: builder.color }} />
                        </div>
                      );
                    })}
                  </div>

                  {/* Hover card */}
                  {hoveredBuilder === builder.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-16 left-1/2 -translate-x-1/2 w-64 p-5 rounded-xl bg-[#111931]/98 border border-[#65D6C8]/30 backdrop-blur-xl shadow-[0_0_40px_rgba(101,214,200,0.3)] pointer-events-none z-30"
                    >
                      <h4 className="text-[#EAF0FF] font-medium mb-1">{builder.name}</h4>
                      <p className="text-xs text-[#BBD0FF]/70 mb-3">{builder.title}</p>
                      <p className="text-xs text-[#9BB2E1] leading-relaxed mb-3">
                        {builder.bio.slice(0, 100)}...
                      </p>
                      <div className="text-xs text-[#65D6C8]">Click to view full profile →</div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Global CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium hover:shadow-[0_0_40px_rgba(101,214,200,0.5)] transition-all duration-400 flex items-center gap-3 mx-auto">
              <Users className="w-5 h-5" />
              Join the Builders Network
            </button>
          </motion.div>
        </div>
      </motion.section>

      <AnimatePresence>
        {selectedBuilder && (
          <BuilderProfileModal 
            builder={selectedBuilder} 
            isOpen={!!selectedBuilder} 
            onClose={() => setSelectedBuilder(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}