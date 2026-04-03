"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { X, ArrowRight, MapPin, Clock, Users, Calendar, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

/**
 * ENHANCED EVENTS SECTION - TWO CREATIVE DIRECTIONS
 * 
 * The beating heart of the continuum — where philosophy becomes participation
 * AI Lunchbox as flagship event series
 * 
 * Direction 1: Immersive Card Carousel (Structured)
 * Direction 2: Aurora Field of Gatherings (Creative Liberty)
 */

// Events data with AI Lunchbox as flagship
const eventsData = [
  {
    id: "ai-lunchbox",
    name: "AI Lunchbox Workshop",
    type: "Workshop Series",
    city: "Global",
    date: "Every Thursday",
    time: "12:00 PM EST",
    location: "Virtual & NYC Chapter",
    attendees: "200+ weekly",
    description: "Join our flagship educational series where we break down AI concepts over lunch. Accessible, practical, and community-driven.",
    detailedDescription: "AI Lunchbox is our flagship program that makes AI education accessible to everyone. Each week, we gather over lunch to explore practical AI concepts, discuss real-world applications, and build collective understanding. No prerequisites needed — just bring your curiosity and appetite for learning!",
    isFlagship: true,
    color: "#65D6C8",
    tags: ["Education", "Weekly", "Flagship"],
    hosts: ["Sarah Chen", "Marcus Williams"]
  },
  {
    id: "nyc-meetup",
    name: "NYC Collective Meetup",
    type: "Community Gathering",
    city: "New York",
    date: "Dec 15, 2024",
    time: "6:00 PM EST",
    location: "Manhattan Chapter House",
    attendees: "80+",
    description: "Monthly gathering for NYC chapter members to connect, share projects, and collaborate on local AI initiatives.",
    detailedDescription: "Our NYC chapter comes together monthly to strengthen local bonds and advance regional projects. These gatherings blend informal networking with structured project showcases, creating space for both connection and collaboration.",
    color: "#7A6FF0",
    tags: ["Networking", "Local"],
    hosts: ["NYC Chapter Team"]
  },
  {
    id: "ethics-forum",
    name: "AI Ethics Forum",
    type: "Discussion Panel",
    city: "London",
    date: "Jan 8, 2025",
    time: "2:00 PM GMT",
    location: "London Chapter",
    attendees: "150+",
    description: "A global conversation on ethical AI development, featuring researchers, practitioners, and community voices.",
    detailedDescription: "Join leading thinkers and practitioners for a deep dive into the ethical considerations shaping AI development. This forum creates space for diverse perspectives on responsible innovation, bias mitigation, and human-centered design.",
    color: "#A8F0E4",
    tags: ["Ethics", "Panel"],
    hosts: ["Dr. Amara Okafor", "Prof. James Liu"]
  },
  {
    id: "tokyo-hackathon",
    name: "Tokyo AI Hackathon",
    type: "Hackathon",
    city: "Tokyo",
    date: "Jan 20-21, 2025",
    time: "9:00 AM JST",
    location: "Tokyo Innovation Hub",
    attendees: "120+",
    description: "48-hour collaborative sprint to build AI solutions addressing local community challenges.",
    detailedDescription: "Teams work together over two days to prototype AI-powered solutions for real community needs. Mentors from industry and academia provide guidance, and winning projects receive funding and implementation support.",
    color: "#7A6FF0",
    tags: ["Build", "Collaborative"],
    hosts: ["Tokyo Chapter Team"]
  },
  {
    id: "builders-showcase",
    name: "Collective Builders Showcase",
    type: "Presentation",
    city: "Global",
    date: "Feb 5, 2025",
    time: "3:00 PM EST",
    location: "Virtual Event",
    attendees: "300+",
    description: "Fellows and chapter members present their projects, share learnings, and celebrate collective progress.",
    detailedDescription: "A quarterly celebration where our community shares what they've built. This showcase highlights diverse projects — from educational tools to research prototypes — demonstrating the power of collective intelligence in action.",
    color: "#65D6C8",
    tags: ["Showcase", "Quarterly"],
    hosts: ["Collective Leadership Team"]
  },
];

// Registration Modal
function RegistrationModal({ event, isOpen, onClose }: any) {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({ name: "", email: "" });
    }, 2000);
  };

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
        className="relative max-w-2xl w-full mx-6 p-8 rounded-2xl border border-[#65D6C8]/30 bg-gradient-to-br from-[#111931]/95 to-[#0a0a2e]/95 shadow-[0_0_60px_rgba(101,214,200,0.3)]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#65D6C8]/10 transition-colors"
        >
          <X className="w-5 h-5 text-[#FDFDFB]/70" />
        </button>

        <div 
          className="absolute inset-0 rounded-2xl blur-2xl opacity-20 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${event.color}, transparent)` }}
        />

        {!submitted ? (
          <div className="relative space-y-6">
            {event.isFlagship && (
              <div className="flex items-center gap-2 text-sm text-[#65D6C8]">
                <Sparkles className="w-4 h-4" />
                Flagship Event Series
              </div>
            )}

            <h3 className="text-3xl text-[#FDFDFB] font-semibold">{event.name}</h3>

            <div className="flex flex-wrap gap-4 text-sm text-[#FDFDFB]/70">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#65D6C8]" />
                {event.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#65D6C8]" />
                {event.time}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#65D6C8]" />
                {event.location}
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-[#65D6C8]/30 via-[#7A6FF0]/30 to-transparent" />

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-[#FDFDFB]/80 mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#FDFDFB]/5 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8]/60 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm text-[#FDFDFB]/80 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#FDFDFB]/5 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8]/60 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium hover:shadow-[0_0_30px_rgba(101,214,200,0.4)] transition-all duration-400"
              >
                Confirm Registration
              </button>
            </form>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative py-12 text-center space-y-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="w-16 h-16 mx-auto rounded-full bg-[#65D6C8]/20 flex items-center justify-center"
            >
              <div className="w-8 h-8 rounded-full bg-[#65D6C8]" />
            </motion.div>
            <h4 className="text-2xl text-[#FDFDFB]">You're Registered! 🎉</h4>
            <p className="text-[#FDFDFB]/70">
              A calendar invite will be sent to {formData.email}
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

// Event Detail Panel (slides in)
function EventDetailPanel({ event, isOpen, onClose }: any) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-0 right-0 bottom-0 w-full md:w-[500px] bg-gradient-to-br from-[#111931]/98 to-[#0a0a2e]/98 backdrop-blur-xl border-l border-[#65D6C8]/20 z-50 overflow-y-auto"
    >
      <div className="p-8 space-y-6">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#65D6C8]/10 transition-colors"
        >
          <X className="w-5 h-5 text-[#FDFDFB]/70" />
        </button>

        {event.isFlagship && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#65D6C8]/10 border border-[#65D6C8]/30 text-sm text-[#65D6C8]">
            <Sparkles className="w-4 h-4" />
            Flagship Event
          </div>
        )}

        <h3 className="text-3xl text-[#FDFDFB] font-semibold pr-12">{event.name}</h3>

        <div className="flex items-center gap-2 text-sm">
          <span className="px-3 py-1 rounded-full bg-[#7A6FF0]/10 border border-[#7A6FF0]/30 text-[#7A6FF0]">
            {event.type}
          </span>
          <span className="px-3 py-1 rounded-full bg-[#65D6C8]/10 border border-[#65D6C8]/30 text-[#65D6C8]">
            {event.city}
          </span>
        </div>

        <div className="space-y-3 text-sm text-[#FDFDFB]/70">
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-[#65D6C8] mt-0.5" />
            <div>
              <div className="text-[#FDFDFB]">{event.date}</div>
              <div className="text-xs">{event.time}</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#65D6C8] mt-0.5" />
            <div className="text-[#FDFDFB]">{event.location}</div>
          </div>
          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-[#65D6C8] mt-0.5" />
            <div className="text-[#FDFDFB]">{event.attendees} Expected</div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-[#65D6C8]/30 via-[#7A6FF0]/30 to-transparent" />

        <div className="space-y-4">
          <h4 className="text-lg text-[#FDFDFB] font-medium">About This Event</h4>
          <p className="text-[#FDFDFB]/70 leading-relaxed">
            {event.detailedDescription}
          </p>
        </div>

        {event.hosts && (
          <div className="space-y-3">
            <h4 className="text-lg text-[#FDFDFB] font-medium">Hosted By</h4>
            <div className="flex flex-wrap gap-2">
              {event.hosts.map((host: string, i: number) => (
                <div key={i} className="px-3 py-1.5 rounded-lg bg-[#FDFDFB]/5 border border-[#FDFDFB]/10 text-sm text-[#FDFDFB]">
                  {host}
                </div>
              ))}
            </div>
          </div>
        )}

        {event.tags && (
          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag: string, i: number) => (
              <span key={i} className="px-2 py-1 rounded text-xs bg-[#65D6C8]/10 text-[#65D6C8]">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ========================================
// DIRECTION 1: IMMERSIVE CARD CAROUSEL
// ========================================

export function CarouselEventsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [detailEvent, setDetailEvent] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % eventsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + eventsData.length) % eventsData.length);
  };

  // Determine which cards to show (3 visible on desktop)
  const visibleCards = [
    eventsData[currentIndex],
    eventsData[(currentIndex + 1) % eventsData.length],
    eventsData[(currentIndex + 2) % eventsData.length],
  ];

  return (
    <>
      <motion.section
        ref={sectionRef}
        style={{ opacity }}
        className="relative py-32 md:py-40 overflow-hidden"
      >
        {/* Background - navy to indigo gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090F1E] via-[#0E1B4C] to-[#090F1E]" />

        {/* Faint aurora streaks flowing laterally */}
        <motion.div
          animate={{
            x: ["-30%", "30%", "-30%"],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-0 right-0 h-1/3 bg-gradient-to-r from-transparent via-[#65D6C8]/10 to-transparent blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl text-[#EAF0FF] font-semibold mb-6">
              Upcoming Events
            </h2>
            <p className="text-lg text-[#BBD0FF] max-w-3xl mx-auto">
              Join us at gatherings, workshops, and conversations happening around the world.
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#111931]/80 border border-[#65D6C8]/30 hover:bg-[#65D6C8]/10 transition-all duration-400 backdrop-blur-sm"
              aria-label="Previous event"
            >
              <ChevronLeft className="w-6 h-6 text-[#65D6C8]" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#111931]/80 border border-[#65D6C8]/30 hover:bg-[#65D6C8]/10 transition-all duration-400 backdrop-blur-sm"
              aria-label="Next event"
            >
              <ChevronRight className="w-6 h-6 text-[#65D6C8]" />
            </button>

            {/* Cards Container */}
            <div className="relative px-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {visibleCards.map((event, i) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.8 }}
                    className="relative group"
                  >
                    {/* Event Card */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className={`relative p-10 rounded-3xl backdrop-blur-sm border transition-all duration-400 ${
                        event.isFlagship
                          ? "bg-[#111931]/90 border-[#65D6C8]/40 shadow-[0_0_40px_rgba(101,214,200,0.2)]"
                          : "bg-[#111931]/80 border-[#65D6C8]/25"
                      }`}
                    >
                      {/* Flagship badge */}
                      {event.isFlagship && (
                        <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] text-xs font-medium flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Flagship
                        </div>
                      )}

                      {/* Glow on hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 rounded-3xl blur-2xl pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at 50% 50%, ${event.color}20, transparent)`
                        }}
                      />

                      {/* Content */}
                      <div className="relative z-10 space-y-5">
                        {/* Header */}
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-[#7CE7E4] font-medium">{event.date}</span>
                          <span className="text-[#BBD0FF]">•</span>
                          <span className="text-[#BBD0FF]">{event.type}</span>
                          <span className="text-[#BBD0FF]">•</span>
                          <span className="text-[#BBD0FF]">{event.city}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl text-[#EAF0FF] font-medium leading-tight">
                          {event.name}
                        </h3>

                        {/* Description */}
                        <p className="text-[#9BB2E1] leading-relaxed min-h-[80px]">
                          {event.description}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center gap-4 text-sm text-[#BBD0FF]/70">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {event.time}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-[#BBD0FF]/70">
                          <Users className="w-4 h-4" />
                          {event.attendees}
                        </div>

                        {/* CTAs */}
                        <div className="flex gap-3 pt-2">
                          <button
                            onClick={() => setSelectedEvent(event)}
                            className={`flex-1 px-5 py-3 rounded-lg font-medium transition-all duration-400 flex items-center justify-center gap-2 ${
                              event.isFlagship
                                ? "bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] hover:shadow-[0_0_30px_rgba(101,214,200,0.4)]"
                                : "bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] hover:shadow-[0_0_25px_rgba(101,214,200,0.3)]"
                            }`}
                          >
                            Join Event
                            <ArrowRight className="w-4 h-4" />
                          </button>
                          
                          <button
                            onClick={() => setDetailEvent(event)}
                            className="px-5 py-3 rounded-lg border border-[#FDFDFB]/20 text-[#FDFDFB] hover:bg-[#FDFDFB]/5 hover:border-[#65D6C8]/40 transition-all duration-400"
                          >
                            Learn More
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {eventsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-400 ${
                    i === currentIndex
                      ? "w-8 bg-[#65D6C8]"
                      : "bg-[#65D6C8]/30 hover:bg-[#65D6C8]/50"
                  }`}
                  aria-label={`Go to event ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Global CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium hover:shadow-[0_0_40px_rgba(101,214,200,0.5)] transition-all duration-400 flex items-center gap-3 mx-auto">
              <Calendar className="w-5 h-5" />
              View Full Calendar
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Modals */}
      <AnimatePresence>
        {selectedEvent && (
          <RegistrationModal 
            event={selectedEvent} 
            isOpen={!!selectedEvent} 
            onClose={() => setSelectedEvent(null)} 
          />
        )}

        {detailEvent && (
          <EventDetailPanel 
            event={detailEvent} 
            isOpen={!!detailEvent} 
            onClose={() => setDetailEvent(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}

// ========================================
// DIRECTION 2: AURORA FIELD OF GATHERINGS
// ========================================

export function AuroraFieldEventsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [detailEvent, setDetailEvent] = useState<any>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Position events spatially (timeline constellation)
  const eventPositions = [
    { x: 20, y: 50, size: 1.5 }, // AI Lunchbox (flagship, larger)
    { x: 38, y: 35, size: 1 },
    { x: 50, y: 55, size: 1 },
    { x: 68, y: 40, size: 1 },
    { x: 82, y: 52, size: 1 },
  ];

  return (
    <>
      <motion.section
        ref={sectionRef}
        style={{ opacity }}
        className="relative py-32 md:py-40 overflow-hidden"
      >
        {/* Deep aurora gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e] via-[#0E1B4C] to-[#090F1E]" />

        {/* Ambient aurora flux layers */}
        <motion.div
          animate={{
            opacity: [0.05, 0.12, 0.05],
            x: ["-20%", "20%", "-20%"],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-[#7A6FF0]/15 via-transparent to-[#65D6C8]/10 blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.03, 0.1, 0.03],
            x: ["20%", "-20%", "20%"],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
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
              Upcoming Events
            </h2>
            <p className="text-lg text-[#BBD0FF] max-w-3xl mx-auto">
              Gatherings as constellations — where light meets light, the continuum connects.
            </p>
          </motion.div>

          {/* Aurora Field Constellation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative w-full h-[600px] rounded-2xl border border-[#65D6C8]/10 bg-[#040619]/20 backdrop-blur-sm overflow-hidden"
          >
            {/* Timeline aurora ribbon */}
            <motion.div
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scaleY: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 left-0 right-0 h-32 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#65D6C8]/20 to-transparent blur-2xl"
            />

            {/* Connecting flow lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {eventsData.map((event, i) => {
                const nextEvent = eventsData[i + 1];
                if (!nextEvent) return null;
                const pos1 = eventPositions[i];
                const pos2 = eventPositions[i + 1];
                
                return (
                  <motion.line
                    key={`line-${i}`}
                    x1={`${pos1.x}%`}
                    y1={`${pos1.y}%`}
                    x2={`${pos2.x}%`}
                    y2={`${pos2.y}%`}
                    stroke="url(#flowGradient)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 2, delay: i * 0.3 }}
                    viewport={{ once: true }}
                    animate={{
                      opacity: hoveredEvent === event.id || hoveredEvent === nextEvent.id ? 0.6 : 0.3
                    }}
                  />
                );
              })}
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7A6FF0" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#65D6C8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#A8F0E4" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Event nodes */}
            {eventsData.map((event, i) => {
              const pos = eventPositions[i];
              
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredEvent(event.id)}
                  onMouseLeave={() => setHoveredEvent(null)}
                  onClick={() => setDetailEvent(event)}
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
                      opacity: [0.3, event.isFlagship ? 0.8 : 0.6, 0.3],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: event.isFlagship ? 4 : 5 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full blur-2xl"
                    style={{
                      background: event.color,
                      width: `${pos.size * 140}px`,
                      height: `${pos.size * 140}px`,
                      marginLeft: `-${pos.size * 70}px`,
                      marginTop: `-${pos.size * 70}px`
                    }}
                  />

                  {/* Node core */}
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.3 }}
                    className={`relative rounded-full border-2 border-[#FDFDFB]/80 bg-[#111931]/90 backdrop-blur-sm flex items-center justify-center ${
                      event.isFlagship ? "w-20 h-20" : "w-16 h-16"
                    }`}
                    style={{
                      boxShadow: `0 0 30px ${event.color}80`
                    }}
                  >
                    {event.isFlagship && (
                      <Sparkles className="w-8 h-8 text-[#65D6C8]" />
                    )}
                    {!event.isFlagship && (
                      <Calendar className="w-6 h-6 text-[#65D6C8]" />
                    )}
                  </motion.div>

                  {/* Hover card */}
                  {hoveredEvent === event.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-24 left-1/2 -translate-x-1/2 w-72 p-6 rounded-xl bg-[#111931]/98 border border-[#65D6C8]/30 backdrop-blur-xl shadow-[0_0_50px_rgba(101,214,200,0.3)] pointer-events-none z-30"
                    >
                      {event.isFlagship && (
                        <div className="flex items-center gap-2 text-xs text-[#65D6C8] mb-2">
                          <Sparkles className="w-3 h-3" />
                          Flagship Event
                        </div>
                      )}
                      
                      <h4 className="text-[#EAF0FF] font-medium mb-2">{event.name}</h4>
                      
                      <div className="flex items-center gap-2 text-xs text-[#BBD0FF]/70 mb-3">
                        <Calendar className="w-3 h-3" />
                        {event.date} • {event.time}
                      </div>
                      
                      <p className="text-xs text-[#9BB2E1] mb-4 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="flex gap-2">
                        <div className="text-xs text-[#65D6C8]">Click to learn more →</div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}

            {/* Cursor-responsive aurora movement */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/5 via-transparent to-[#65D6C8]/5 pointer-events-none"
            />
          </motion.div>

          {/* Quick join flagship */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setSelectedEvent(eventsData[0])}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium hover:shadow-[0_0_40px_rgba(101,214,200,0.5)] transition-all duration-400 flex items-center gap-3 mx-auto"
            >
              <Sparkles className="w-5 h-5" />
              Join AI Lunchbox
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Modals */}
      <AnimatePresence>
        {selectedEvent && (
          <RegistrationModal 
            event={selectedEvent} 
            isOpen={!!selectedEvent} 
            onClose={() => setSelectedEvent(null)} 
          />
        )}

        {detailEvent && (
          <EventDetailPanel 
            event={detailEvent} 
            isOpen={!!detailEvent} 
            onClose={() => setDetailEvent(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}
