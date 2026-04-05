"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Link } from "react-router";
import { FullyInteractiveEventsSection as HomeEventsInteractive } from "../components/HomeEventsInteractive";
import { Heart, Calendar, ArrowRight, Sparkles, Globe, Users, BookOpen, MapPin, ChevronRight } from "lucide-react";
import auroraCrystal from "figma:asset/aaf705a4da4e268e88fcd37c884f07d61d072e97.png";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { GlobalNetworkMap } from "../components/GlobalNetworkMap";
import { BuilderModal } from "../components/BuilderModal";
import { DonationModal } from "../components/CTAModals";

export function HomePage() {
  const [selectedBuilder, setSelectedBuilder] = useState<any>(null);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [isStartChapterModalOpen, setIsStartChapterModalOpen] = useState(false);

  return (
    <div id="top" className="relative overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Philosophy Framing */}
      <PhilosophySection />

      {/* Three Pillars Preview */}
      <ThreePillarsPreview />

      {/* Upcoming Events Preview */}
      <UpcomingEventsPreview />

      {/* Global Network Preview */}
      <GlobalNetworkPreview onStartChapterClick={() => setIsStartChapterModalOpen(true)} />

      {/* Builders Preview */}
      <BuildersPreview onSelectBuilder={setSelectedBuilder} />

      {/* Join CTA */}
      <JoinCTASection onSupportClick={() => setIsDonateModalOpen(true)} />

      {/* Builder Modal */}
      {selectedBuilder && (
        <BuilderModal 
          builder={selectedBuilder} 
          onClose={() => setSelectedBuilder(null)} 
        />
      )}

      {/* Start Chapter Modal */}
      {isStartChapterModalOpen && (
        <StartChapterModal onClose={() => setIsStartChapterModalOpen(false)} />
      )}

      {/* Donate Modal */}
      <DonationModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
      />
    </div>
  );
}

// ========================================
// HERO SECTION
// ========================================
function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[110vh] flex-col items-center justify-center overflow-hidden pt-[80px]"
    >
      {/* Aurora gradients */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7A6FF0]/10 to-transparent blur-3xl"
      />
      <motion.div
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#65D6C8]/10 to-transparent blur-3xl"
      />

      {/* Content Container */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center w-full max-w-[1440px] px-6"
      >
        {/* Crystal - 225 x 225, 40px from header */}
        <div className="relative w-[225px] h-[225px] flex items-center justify-center mb-10">
          {/* Ambient Aurora Sweeps */}
          <motion.div
            animate={{ x: ["-120%", "120%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#65D6C8]/15 to-transparent blur-3xl" />
          </motion.div>

          <motion.div
            animate={{ 
              x: ["120%", "-120%"],
              y: ["-60%", "60%"]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#7A6FF0]/12 to-transparent blur-3xl" />
          </motion.div>

          {/* Breathing Glow */}
          <motion.div
            animate={{
              opacity: [0.05, 0.12, 0.05],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full bg-gradient-radial from-[#65D6C8]/20 via-[#7A6FF0]/10 to-transparent blur-2xl pointer-events-none"
          />

          {/* Static Crystal */}
          <ImageWithFallback
            src={auroraCrystal}
            alt="Acheulean Crystal"
            className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(101,214,200,0.4)]"
          />
        </div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-center w-full max-w-[1000px] mb-10"
        >
          <h1 
            className="text-[#FDFDFB] leading-[100px]"
            style={{ fontSize: "60px" }}
          >
            No one left behind in the age of AI.
          </h1>
        </motion.div>

        {/* Body Copy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="text-center w-full max-w-[1000px] text-xl text-[#FDFDFB]/80 leading-relaxed mb-10"
        >
          The Human + AI Collective builds practical pathways into the future through learning, local chapters, shared opportunity, and policy shaped by people.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-5 mb-10"
        >
          <Link to="/programs">
            <motion.button
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 0 40px rgba(101,214,200,0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium tracking-wide transition-all duration-400"
              style={{ width: "220px", height: "60px" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#A8F0E4] to-[#7A6FF0] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Explore Programs
              </span>
            </motion.button>
          </Link>

          <Link to="/events">
            <motion.button
              whileHover={{ 
                scale: 1.03,
                borderColor: "rgba(122,111,240,0.8)",
                boxShadow: "0 0 30px rgba(122,111,240,0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-lg border-2 border-[#7A6FF0]/50 bg-gradient-to-r from-[#7A6FF0]/5 to-[#65D6C8]/5 text-[#FDFDFB] font-medium tracking-wide transition-all duration-400"
              style={{ width: "240px", height: "60px" }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7A6FF0]/15 to-[#65D6C8]/15" />
              </div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                View Events
              </span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Metrics Band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1000px]"
        >
          <MetricCard value="5K+" label="Community Members" delay={0} />
          <MetricCard value="28" label="Global Chapters" delay={0.3} />
          <MetricCard value="300+" label="Learning Sessions" delay={0.6} />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#65D6C8]/60 text-sm"
      >
        <div className="flex flex-col items-center gap-2">
          <span>Explore the Continuum</span>
          <ArrowRight className="w-4 h-4 rotate-90" />
        </div>
      </motion.div>
    </section>
  );
}

function MetricCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/10 to-[#65D6C8]/10 rounded-xl blur-xl"
      />
      
      <div className="relative p-6 rounded-xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 backdrop-blur-sm text-center">
        <motion.div
          className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#65D6C8] via-[#7A6FF0] to-[#A8F0E4] bg-clip-text text-transparent mb-2"
          animate={{
            opacity: [0.85, 1, 0.85],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay
          }}
        >
          {value}
        </motion.div>
        <div className="text-[#FDFDFB]/70 text-sm uppercase tracking-wide">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

// ========================================
// PHILOSOPHY SECTION
// ========================================
function PhilosophySection() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-6">
              About the Collective
            </h2>
            <p className="text-lg text-[#FDFDFB]/70 leading-relaxed mb-6">
              Human + AI Collective is building a future where artificial intelligence expands human dignity, access, and shared opportunity rather than leaving people behind.
            </p>
            <p className="text-lg text-[#FDFDFB]/70 leading-relaxed">
              Rooted in the long continuum of human toolmaking, the Collective connects learning, local action, global chapters, and policy so communities can help shape the future together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center mt-10"
          >
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-7 py-3 rounded-lg border border-[#65D6C8]/30 bg-[#65D6C8]/[0.04] text-[#FDFDFB] font-medium tracking-wide transition-all duration-400 hover:border-[#65D6C8]/55 hover:bg-[#65D6C8]/[0.08]"
              >
                Learn About the Collective
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ========================================
// THREE PILLARS PREVIEW
// ========================================
function ThreePillarsPreview() {
  const pillars = [
    {
      icon: BookOpen,
      title: "AI Lunchbox",
      description: "Practical learning experiences that make AI more accessible, understandable, and useful in everyday life.",
      link: "/ai-lunchbox",
      stat: "500+ Workshops"
    },
    {
      icon: Globe,
      title: "Global Chapters",
      description: "Local chapters creating space for learning, collaboration, and community-led action across regions.",
      link: "/chapters",
      stat: "28 Countries"
    },
    {
      icon: Sparkles,
      title: "Research & Policy",
      description: "Research, dialogue, and policy work that help shape more human-centered AI systems.",
      link: "/research",
      stat: "50+ Publications"
    }
  ];

  return (
    <section id="programs" className="relative py-24 px-6 bg-gradient-to-b from-[#040619] via-[#0D1226] to-[#040619]">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-4">
            Our Three Pillars
          </h2>
          <p className="text-lg text-[#FDFDFB]/60">
            Learning, local action, and systems change working together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link to={pillar.link}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative h-full group"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/20 to-[#65D6C8]/20 rounded-2xl blur-xl"
                  />
                  
                  <div className="relative h-full p-8 rounded-2xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 backdrop-blur-sm transition-all duration-400 group-hover:border-[#65D6C8]/40">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20 flex items-center justify-center mb-6">
                      <pillar.icon className="w-8 h-8 text-[#65D6C8]" />
                    </div>
                    
                    <h3 className="text-[2rem] leading-tight text-[#FDFDFB] mb-4">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-[#FDFDFB]/70 leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    <div className="text-[#65D6C8] font-medium text-sm mb-4">
                      {pillar.stat}
                    </div>
                    
                    <div className="flex items-center gap-2 text-[#65D6C8] text-sm font-medium group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/programs">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-lg border-2 border-[#65D6C8]/50 bg-[#65D6C8]/10 text-[#FDFDFB] font-medium tracking-wide transition-all duration-400 hover:border-[#65D6C8] hover:bg-[#65D6C8]/20"
            >
              View All Programs
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ========================================
// UPCOMING EVENTS PREVIEW
// ========================================
function UpcomingEventsPreview() {
  return (
    <div id="events">
      <HomeEventsInteractive />
    </div>
  );
}

// ========================================
// GLOBAL NETWORK PREVIEW
// ========================================
function GlobalNetworkPreview({ onStartChapterClick }: { onStartChapterClick: () => void }) {
  return (
    <section id="chapters" className="relative py-24 px-6 bg-gradient-to-b from-[#040619] via-[#0D1226] to-[#040619]">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-4">
            A Living Global Network
          </h2>
          <p className="text-lg text-[#FDFDFB]/60">
            28 chapters across 20 countries, connected by shared purpose
          </p>
        </motion.div>

        <GlobalNetworkMap preview={true} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/chapters">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium tracking-wide transition-all duration-400 hover:shadow-[0_0_40px_rgba(101,214,200,0.4)]"
            >
              Explore Global Chapters
            </motion.button>
          </Link>

          <motion.button
            onClick={onStartChapterClick}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-lg border-2 border-[#7A6FF0]/40 bg-[#7A6FF0]/8 text-[#FDFDFB] font-medium tracking-wide transition-all duration-400 hover:border-[#7A6FF0]/60 hover:bg-[#7A6FF0]/14"
          >
            Start a Chapter
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

// ========================================
// BUILDERS PREVIEW
// ========================================
function BuildersPreview({ onSelectBuilder }: any) {
  const featuredBuilders = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & Director",
      bio: "Works across ethics, policy, and public learning to make AI more accessible and accountable.",
      image: null
    },
    {
      name: "Marcus Johnson",
      role: "Head of Programs",
      bio: "Builds programs, learning experiences, and community pathways that turn ideas into participation.",
      image: null
    },
    {
      name: "Priya Patel",
      role: "Research Lead",
      bio: "Leads research grounded in participatory design, human dignity, and community-centered systems.",
      image: null
    }
  ];

  return (
    <section id="builders" className="relative py-24 px-6">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-4">
            Meet the Builders
          </h2>
          <p className="text-lg text-[#FDFDFB]/60">
            People building practical, human-centered pathways into the future of AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredBuilders.map((builder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => onSelectBuilder(builder)}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/20 to-[#65D6C8]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative p-8 rounded-xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 backdrop-blur-sm h-full">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20 flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-10 h-10 text-[#65D6C8]" />
                </div>

                <div className="text-center">
                  <h3 className="text-xl text-[#FDFDFB] mb-2">{builder.name}</h3>
                  <div className="text-[#65D6C8] text-sm font-medium mb-4">{builder.role}</div>
                  <p className="text-[#FDFDFB]/70 text-sm leading-relaxed">
                    {builder.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link to="/builders">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-lg border-2 border-[#65D6C8]/50 bg-[#65D6C8]/10 text-[#FDFDFB] font-medium tracking-wide transition-all duration-400 hover:border-[#65D6C8] hover:bg-[#65D6C8]/20"
            >
              Meet the Full Team
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ========================================
// START CHAPTER MODAL
// ========================================
function StartChapterModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#040619]/90 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="relative w-full max-w-4xl rounded-[28px] border border-[#7A6FF0]/35 bg-[#0B1023]/95 shadow-[0_0_80px_rgba(101,214,200,0.08)] overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#65D6C8]/50 to-transparent" />

          {!submitted ? (
            <>
              <div className="border-b border-[#65D6C8]/18 bg-[#10162E]/92 backdrop-blur-lg px-6 md:px-8 py-5">
                <div className="flex items-start justify-between gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-[#65D6C8]" />
                      <span className="text-xs text-[#7A6FF0] uppercase tracking-[0.22em]">Global Chapters</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl text-[#FDFDFB] leading-tight">Start a Chapter</h3>
                    <p className="text-sm md:text-base text-[#FDFDFB]/60 max-w-2xl leading-relaxed">
                      Bring the Collective into your city, campus, or community.
                    </p>
                  </div>

                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg text-[#FDFDFB]/60 hover:text-[#65D6C8] hover:bg-[#65D6C8]/10 transition-all duration-300"
                  >
                    <span className="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/14 to-[#65D6C8]/10 blur-2xl opacity-60" />
                  <div className="relative rounded-2xl border border-[#7A6FF0]/25 bg-[#040619]/55 backdrop-blur-sm p-5 md:p-6">
                    <div className="mb-6 max-w-2xl">
                      <p className="text-sm md:text-base text-[#FDFDFB]/72 leading-relaxed mb-3">
                        We’re looking for thoughtful local organizers who want to create practical pathways into the future of AI through learning, dialogue, and community action.
                      </p>
                      <p className="text-sm text-[#FDFDFB]/52 leading-relaxed">
                        Every chapter begins differently. We’re interested in care, commitment, and local relevance more than polish.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-[#FDFDFB]/80 mb-2">Full Name</label>
                          <input type="text" required className="w-full px-4 py-3 rounded-xl bg-[#040619] border border-[#65D6C8]/15 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none" />
                        </div>
                        <div>
                          <label className="block text-sm text-[#FDFDFB]/80 mb-2">Email Address</label>
                          <input type="email" required className="w-full px-4 py-3 rounded-xl bg-[#040619] border border-[#65D6C8]/15 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none" />
                        </div>
                        <div>
                          <label className="block text-sm text-[#FDFDFB]/80 mb-2">City</label>
                          <input type="text" required className="w-full px-4 py-3 rounded-xl bg-[#040619] border border-[#65D6C8]/15 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none" />
                        </div>
                        <div>
                          <label className="block text-sm text-[#FDFDFB]/80 mb-2">Country</label>
                          <input type="text" required className="w-full px-4 py-3 rounded-xl bg-[#040619] border border-[#65D6C8]/15 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none" />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm text-[#FDFDFB]/80 mb-2">Organization, School, or Community (optional)</label>
                          <input type="text" className="w-full px-4 py-3 rounded-xl bg-[#040619] border border-[#65D6C8]/15 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <label className="block text-sm text-[#FDFDFB]/80 mb-2">Why do you want to start a chapter?</label>
                          <textarea required rows={3} className="w-full px-4 py-3 rounded-xl bg-[#040619] border border-[#65D6C8]/15 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none resize-none" />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm text-[#FDFDFB]/80 mb-2">What kind of community would you like to build?</label>
                          <textarea required rows={3} className="w-full px-4 py-3 rounded-xl bg-[#040619] border border-[#65D6C8]/15 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none resize-none" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-[#FDFDFB]/80 mb-2">What stage are you in?</label>
                          <select required defaultValue="" className="w-full px-4 py-3 rounded-xl bg-[#040619] border border-[#65D6C8]/15 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none">
                            <option value="" disabled>Select one</option>
                            <option>Just exploring</option>
                            <option>I have a few interested people</option>
                            <option>I already have a community</option>
                            <option>Ready to organize a first gathering</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm text-[#FDFDFB]/80 mb-2">Likely focus area</label>
                          <select required defaultValue="" className="w-full px-4 py-3 rounded-xl bg-[#040619] border border-[#65D6C8]/15 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none">
                            <option value="" disabled>Select one</option>
                            <option>AI literacy</option>
                            <option>Community dialogue</option>
                            <option>Schools and universities</option>
                            <option>Entrepreneurship</option>
                            <option>Research and policy</option>
                            <option>Local partnerships</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm text-[#FDFDFB]/80 mb-2">Anything else you’d like us to know?</label>
                          <textarea rows={3} className="w-full px-4 py-3 rounded-xl bg-[#040619] border border-[#65D6C8]/15 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none resize-none" />
                        </div>
                      </div>

                      <div className="flex flex-col-reverse sm:flex-row gap-4 pt-2">
                        <button type="button" onClick={onClose} className="sm:flex-1 px-6 py-3 rounded-xl border border-[#65D6C8]/20 text-[#FDFDFB] hover:bg-[#65D6C8]/8 transition-all">
                          Close
                        </button>
                        <button type="submit" className="sm:flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium hover:shadow-[0_0_30px_rgba(101,214,200,0.25)] transition-all duration-300">
                          Submit Chapter Interest
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="p-6 md:p-8">
              <div className="rounded-2xl border border-[#7A6FF0]/25 bg-[#040619]/55 backdrop-blur-sm p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20 flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-[#65D6C8]" />
                </div>
                <h3 className="text-2xl md:text-3xl text-[#FDFDFB] mb-3">Thank you</h3>
                <p className="text-[#FDFDFB]/70 mb-8 max-w-md mx-auto leading-relaxed">
                  We’ve received your interest and will follow up as we shape the next chapter of the network together.
                </p>
                <button onClick={onClose} className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium">
                  Done
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

// ========================================
// JOIN CTA SECTION
// ========================================
function JoinCTASection({ onSupportClick }: { onSupportClick: () => void }) {
  const pathways = [
    {
      title: "Get Involved",
      description: "Volunteer, collaborate, attend events, or contribute your time and expertise to the movement.",
      to: "/get-involved",
      variant: "primary",
    },
    {
      title: "Explore Programs",
      description: "Discover practical learning pathways, local action, and policy work across the Collective.",
      to: "/programs",
      variant: "secondary",
    },
    {
      title: "Join a Chapter",
      description: "Find your nearest chapter and step into a growing global network of local participation.",
      to: "/chapters",
      variant: "secondary",
    },
  ] as const;

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-[#040619] via-[#0D1226] to-[#040619]">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-18 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-6">
            Choose how you want to take part
          </h2>
          <p className="text-lg text-[#FDFDFB]/70 leading-relaxed max-w-[820px] mx-auto">
            Whether you want to learn, organize locally, collaborate, or support the mission, there is a place to begin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          {pathways.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="h-full"
            >
              <div className="h-full min-h-[290px] rounded-2xl border border-[#65D6C8]/15 bg-[#FDFDFB]/[0.03] backdrop-blur-sm px-7 py-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-[2rem] leading-tight text-[#FDFDFB] mb-4">{item.title}</h3>
                  <p className="max-w-[30ch] text-sm leading-7 text-[#FDFDFB]/65">
                    {item.description}
                  </p>
                </div>

                <Link to={item.to} className="mt-10 block">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={
                      item.variant === "primary"
                        ? "w-full px-6 py-4 rounded-xl bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] text-base font-medium tracking-wide transition-all duration-400 hover:shadow-[0_0_36px_rgba(101,214,200,0.35)]"
                        : "w-full px-6 py-4 rounded-xl border border-[#7A6FF0]/35 bg-[#7A6FF0]/8 text-[#FDFDFB] text-base font-medium tracking-wide transition-all duration-400 hover:border-[#7A6FF0]/60 hover:bg-[#7A6FF0]/14"
                    }
                  >
                    {item.title}
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="h-full"
          >
            <div className="h-full min-h-[290px] rounded-2xl border border-[#F5B700]/18 bg-gradient-to-br from-[#F5B700]/[0.07] to-[#7A6FF0]/[0.07] backdrop-blur-sm px-7 py-8 flex flex-col justify-between">
              <div>
                <h3 className="text-[2rem] leading-tight text-[#FDFDFB] mb-4">Support the Work</h3>
                <p className="max-w-[30ch] text-sm leading-7 text-[#FDFDFB]/68">
                  Help sustain learning, local chapters, and long-term systems work through direct support.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onSupportClick}
                className="mt-10 w-full px-6 py-4 rounded-xl border border-[#F5B700]/28 bg-[#F5B700]/[0.08] text-[#FDFDFB] text-base font-medium tracking-wide transition-all duration-400 hover:border-[#F5B700]/45 hover:bg-[#F5B700]/[0.12]"
              >
                Support the Work
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
