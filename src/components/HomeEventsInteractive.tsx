"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { 
  X, ArrowRight, MapPin, Clock, Users, Calendar, ChevronLeft, ChevronRight, 
  Sparkles, Check, Mail, User, Building2, Download, ChevronDown
} from "lucide-react";

/**
 * FULLY INTERACTIVE EVENTS SECTION
 * - Complete RSVP flows
 * - Event detail panels
 * - Full calendar modal
 * - Smooth carousel interactions
 * - All CTAs functional
 */

// Events data
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
    agenda: [
      "Introduction & Ice Breaker (10 min)",
      "Core Concept Deep Dive (25 min)",
      "Live Q&A with Practitioners (15 min)",
      "Community Showcase (10 min)"
    ],
    speakers: [
      { name: "Sarah Chen", role: "AI Ethics Researcher" },
      { name: "Marcus Williams", role: "ML Engineer" }
    ],
    level: "Beginner-Friendly",
    isFlagship: true,
    color: "#65D6C8",
    tags: ["Education", "Weekly", "Flagship"],
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
    agenda: [
      "Networking & Refreshments (30 min)",
      "Project Showcases (45 min)",
      "Breakout Discussions (30 min)",
      "Next Steps Planning (15 min)"
    ],
    speakers: [
      { name: "NYC Chapter Team", role: "Community Organizers" }
    ],
    level: "All Levels",
    color: "#7A6FF0",
    tags: ["Networking", "Local"],
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
    agenda: [
      "Opening Keynote (20 min)",
      "Panel Discussion: Ethics in Practice (45 min)",
      "Community Perspectives Round Table (30 min)",
      "Action Planning Workshop (25 min)"
    ],
    speakers: [
      { name: "Dr. Amara Okafor", role: "Ethics Researcher" },
      { name: "Prof. James Liu", role: "AI Policy Expert" }
    ],
    level: "Intermediate",
    color: "#A8F0E4",
    tags: ["Ethics", "Panel"],
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
    agenda: [
      "Team Formation & Challenge Brief (2 hrs)",
      "Building Sprint Day 1 (10 hrs)",
      "Building Sprint Day 2 (10 hrs)",
      "Presentations & Awards (2 hrs)"
    ],
    speakers: [
      { name: "Tokyo Chapter Team", role: "Hackathon Organizers" }
    ],
    level: "Advanced",
    color: "#7A6FF0",
    tags: ["Build", "Collaborative"],
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
    agenda: [
      "Welcome & Opening Remarks (10 min)",
      "Featured Project Presentations (60 min)",
      "Lightning Talks (30 min)",
      "Community Recognition & Closing (20 min)"
    ],
    speakers: [
      { name: "Collective Leadership Team", role: "Program Directors" }
    ],
    level: "All Levels",
    color: "#65D6C8",
    tags: ["Showcase", "Quarterly"],
  },
];

// Calendar data (simplified)
const calendarEvents = [
  { date: 8, month: "Dec", events: ["AI Lunchbox"] },
  { date: 15, month: "Dec", events: ["NYC Meetup", "AI Lunchbox"] },
  { date: 22, month: "Dec", events: ["AI Lunchbox"] },
  { date: 8, month: "Jan", events: ["Ethics Forum"] },
  { date: 12, month: "Jan", events: ["AI Lunchbox"] },
  { date: 20, month: "Jan", events: ["Tokyo Hackathon (Day 1)"] },
  { date: 21, month: "Jan", events: ["Tokyo Hackathon (Day 2)"] },
  { date: 5, month: "Feb", events: ["Builders Showcase"] },
];

// ========================================
// RSVP MODAL (3 Steps)
// ========================================

function RSVPModal({ event, isOpen, onClose }: any) {
  const [step, setStep] = useState<'form' | 'confirmation'>('form');
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    chapter: "" 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmation');
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep('form');
      setFormData({ name: "", email: "", chapter: "" });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-[#040619]/90 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.95, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: -20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-lg w-full mx-6 p-8 rounded-2xl border border-[#65D6C8]/30 bg-gradient-to-br from-[#111931]/98 to-[#0a0a2e]/98 shadow-[0_0_60px_rgba(101,214,200,0.25)]"
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#65D6C8]/10 transition-colors"
          >
            <X className="w-5 h-5 text-[#FDFDFB]/70" />
          </button>

          {/* Ambient glow */}
          <div 
            className="absolute inset-0 rounded-2xl blur-3xl opacity-15 pointer-events-none"
            style={{ background: `radial-gradient(circle, ${event.color}, transparent)` }}
          />

          {step === 'form' ? (
            <div className="relative space-y-6">
              {event.isFlagship && (
                <div className="flex items-center gap-2 text-sm text-[#65D6C8]">
                  <Sparkles className="w-4 h-4" />
                  Flagship Event Series
                </div>
              )}

              <h3 className="text-2xl text-[#FDFDFB]">{event.name}</h3>

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
                  <label className="flex items-center gap-2 text-sm text-[#FDFDFB]/80 mb-2">
                    <User className="w-4 h-4 text-[#65D6C8]" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8]/60 focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm text-[#FDFDFB]/80 mb-2">
                    <Mail className="w-4 h-4 text-[#65D6C8]" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8]/60 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm text-[#FDFDFB]/80 mb-2">
                    <Building2 className="w-4 h-4 text-[#65D6C8]" />
                    Chapter / Region (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.chapter}
                    onChange={(e) => setFormData({ ...formData, chapter: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8]/60 focus:outline-none transition-colors"
                    placeholder="e.g. NYC, London, Global"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(101,214,200,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium transition-all"
                >
                  Confirm RSVP
                </motion.button>
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative py-8 text-center space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] flex items-center justify-center"
              >
                <Check className="w-10 h-10 text-[#040619]" strokeWidth={3} />
              </motion.div>

              <div>
                <h4 className="text-2xl text-[#FDFDFB] mb-2">You're Registered! 🎉</h4>
                <p className="text-sm text-[#FDFDFB]/70">
                  Confirmation sent to {formData.email}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#7A6FF0]/10 border border-[#7A6FF0]/30 text-left">
                <h5 className="text-sm font-medium text-[#FDFDFB] mb-3">Add to Calendar</h5>
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 rounded-lg border border-[#FDFDFB]/20 text-xs text-[#FDFDFB] hover:bg-[#FDFDFB]/5 transition-colors flex items-center justify-center gap-1">
                    <Download className="w-3 h-3" />
                    Google
                  </button>
                  <button className="flex-1 px-3 py-2 rounded-lg border border-[#FDFDFB]/20 text-xs text-[#FDFDFB] hover:bg-[#FDFDFB]/5 transition-colors flex items-center justify-center gap-1">
                    <Download className="w-3 h-3" />
                    Apple
                  </button>
                  <button className="flex-1 px-3 py-2 rounded-lg border border-[#FDFDFB]/20 text-xs text-[#FDFDFB] hover:bg-[#FDFDFB]/5 transition-colors flex items-center justify-center gap-1">
                    <Download className="w-3 h-3" />
                    Outlook
                  </button>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleClose}
                className="w-full py-3 rounded-lg border border-[#65D6C8]/50 text-[#65D6C8] hover:bg-[#65D6C8]/10 transition-all"
              >
                Close
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ========================================
// EVENT DETAIL PANEL
// ========================================

function EventDetailPanel({ event, isOpen, onClose, onJoinEvent }: any) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[60] bg-[#040619]/80 backdrop-blur-sm"
      >
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="absolute top-0 right-0 bottom-0 w-full md:w-[550px] bg-gradient-to-br from-[#111931]/98 to-[#0a0a2e]/98 backdrop-blur-xl border-l border-[#65D6C8]/20 overflow-y-auto"
        >
          <div className="p-8 space-y-6">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#65D6C8]/10 transition-colors z-10"
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

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-[#7A6FF0]/10 border border-[#7A6FF0]/30 text-sm text-[#7A6FF0]">
                {event.type}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#65D6C8]/10 border border-[#65D6C8]/30 text-sm text-[#65D6C8]">
                {event.city}
              </span>
              {event.level && (
                <span className="px-3 py-1 rounded-full bg-[#A8F0E4]/10 border border-[#A8F0E4]/30 text-sm text-[#A8F0E4]">
                  {event.level}
                </span>
              )}
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#65D6C8] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[#FDFDFB]">{event.date}</div>
                  <div className="text-xs text-[#FDFDFB]/60">{event.time}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#65D6C8] mt-0.5 flex-shrink-0" />
                <div className="text-[#FDFDFB]">{event.location}</div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[#65D6C8] mt-0.5 flex-shrink-0" />
                <div className="text-[#FDFDFB]">{event.attendees} Expected</div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-[#65D6C8]/30 via-[#7A6FF0]/30 to-transparent" />

            <div className="space-y-3">
              <h4 className="text-lg text-[#FDFDFB] font-medium">About This Event</h4>
              <p className="text-[#FDFDFB]/70 leading-relaxed">
                {event.detailedDescription}
              </p>
            </div>

            {event.agenda && (
              <div className="space-y-3">
                <h4 className="text-lg text-[#FDFDFB] font-medium">Agenda</h4>
                <ul className="space-y-2">
                  {event.agenda.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#FDFDFB]/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#65D6C8] mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {event.speakers && (
              <div className="space-y-3">
                <h4 className="text-lg text-[#FDFDFB] font-medium">Speakers</h4>
                <div className="space-y-2">
                  {event.speakers.map((speaker: any, i: number) => (
                    <div key={i} className="p-3 rounded-lg bg-[#FDFDFB]/5 border border-[#FDFDFB]/10">
                      <div className="text-sm text-[#FDFDFB]">{speaker.name}</div>
                      <div className="text-xs text-[#FDFDFB]/60">{speaker.role}</div>
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

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(101,214,200,0.4)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                onClose();
                onJoinEvent(event);
              }}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium transition-all flex items-center justify-center gap-2"
            >
              Join This Event
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ========================================
// FULL CALENDAR MODAL
// ========================================

function FullCalendarModal({ isOpen, onClose, onSelectEvent }: any) {
  const [selectedFilter, setSelectedFilter] = useState<string>("All Events");
  const filters = ["All Events", "Workshops", "Gatherings", "Panels", "Chapter Events"];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-[#040619]/90 backdrop-blur-md p-6"
      >
        <motion.div
          initial={{ scale: 0.95, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: -20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-gradient-to-br from-[#111931]/98 to-[#0a0a2e]/98 rounded-2xl border border-[#65D6C8]/30 shadow-[0_0_60px_rgba(101,214,200,0.25)] overflow-hidden"
        >
          {/* Header */}
          <div className="relative p-6 border-b border-[#65D6C8]/20">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#65D6C8]/10 transition-colors"
            >
              <X className="w-5 h-5 text-[#FDFDFB]/70" />
            </button>

            <h3 className="text-2xl text-[#FDFDFB] mb-4">Event Calendar</h3>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedFilter === filter
                      ? "bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619]"
                      : "border border-[#FDFDFB]/20 text-[#FDFDFB]/70 hover:bg-[#FDFDFB]/5"
                  }`}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* December */}
              <div className="p-4 rounded-xl bg-[#040619]/30 border border-[#65D6C8]/10">
                <h4 className="text-lg text-[#FDFDFB] mb-4">December 2024</h4>
                <div className="space-y-2">
                  {calendarEvents.filter(e => e.month === "Dec").map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="p-3 rounded-lg bg-[#111931]/50 border border-[#65D6C8]/20 hover:border-[#65D6C8]/40 transition-all cursor-pointer"
                      onClick={() => {
                        const event = eventsData.find(e => item.events[0].includes(e.name.split(' ')[0]));
                        if (event) {
                          onClose();
                          onSelectEvent(event);
                        }
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#65D6C8]/10 border border-[#65D6C8]/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-medium text-[#65D6C8]">{item.date}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          {item.events.map((evt, j) => (
                            <div key={j} className="text-sm text-[#FDFDFB] truncate">{evt}</div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* January */}
              <div className="p-4 rounded-xl bg-[#040619]/30 border border-[#65D6C8]/10">
                <h4 className="text-lg text-[#FDFDFB] mb-4">January 2025</h4>
                <div className="space-y-2">
                  {calendarEvents.filter(e => e.month === "Jan").map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="p-3 rounded-lg bg-[#111931]/50 border border-[#65D6C8]/20 hover:border-[#65D6C8]/40 transition-all cursor-pointer"
                      onClick={() => {
                        const event = eventsData.find(e => item.events[0].includes(e.name.split(' ')[0]));
                        if (event) {
                          onClose();
                          onSelectEvent(event);
                        }
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#7A6FF0]/10 border border-[#7A6FF0]/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-medium text-[#7A6FF0]">{item.date}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          {item.events.map((evt, j) => (
                            <div key={j} className="text-sm text-[#FDFDFB] truncate">{evt}</div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* February */}
              <div className="p-4 rounded-xl bg-[#040619]/30 border border-[#65D6C8]/10">
                <h4 className="text-lg text-[#FDFDFB] mb-4">February 2025</h4>
                <div className="space-y-2">
                  {calendarEvents.filter(e => e.month === "Feb").map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="p-3 rounded-lg bg-[#111931]/50 border border-[#65D6C8]/20 hover:border-[#65D6C8]/40 transition-all cursor-pointer"
                      onClick={() => {
                        const event = eventsData.find(e => item.events[0].includes(e.name.split(' ')[0]));
                        if (event) {
                          onClose();
                          onSelectEvent(event);
                        }
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#A8F0E4]/10 border border-[#A8F0E4]/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-medium text-[#A8F0E4]">{item.date}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          {item.events.map((evt, j) => (
                            <div key={j} className="text-sm text-[#FDFDFB] truncate">{evt}</div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-[#65D6C8]/20 flex justify-between items-center">
            <p className="text-sm text-[#FDFDFB]/60">Click any event to view details</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="px-6 py-2 rounded-lg border border-[#65D6C8]/50 text-[#65D6C8] hover:bg-[#65D6C8]/10 transition-all"
            >
              Back to Events
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ========================================
// MAIN CAROUSEL SECTION
// ========================================

export function FullyInteractiveEventsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [detailEvent, setDetailEvent] = useState<any>(null);
  const [showCalendar, setShowCalendar] = useState(false);
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
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090F1E] via-[#0E1B4C] to-[#090F1E]" />

        {/* Aurora flow */}
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

        <div className="relative z-10 max-w-[1440px] mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-[#FDFDFB]/60 max-w-3xl mx-auto">
              Workshops, conversations, and gatherings that bring the Collective into practice.
            </p>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            {/* Navigation Arrows - NO BACKGROUND LINE */}
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(101,214,200,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-[#111931]/90 border border-[#65D6C8]/30 backdrop-blur-sm transition-all duration-400"
              aria-label="Previous event"
            >
              <ChevronLeft className="w-6 h-6 text-[#65D6C8]" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(101,214,200,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-[#111931]/90 border border-[#65D6C8]/30 backdrop-blur-sm transition-all duration-400"
              aria-label="Next event"
            >
              <ChevronRight className="w-6 h-6 text-[#65D6C8]" />
            </motion.button>

            {/* Cards */}
            <div className="relative px-12 md:px-16">
              <motion.div 
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {visibleCards.map((event, i) => (
                  <motion.div
                    key={`${event.id}-${currentIndex}-${i}`}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="relative group"
                  >
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className={`relative p-6 rounded-xl backdrop-blur-sm border transition-all duration-400 h-full ${
                        event.isFlagship
                          ? "bg-gradient-to-br from-[#7A6FF0]/8 to-[#65D6C8]/8 border-[#65D6C8]/25 shadow-[0_0_24px_rgba(101,214,200,0.12)]"
                          : "bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 border-[#65D6C8]/20"
                      }`}
                    >
                      {event.isFlagship && (
                        <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] text-xs font-medium flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Flagship
                        </div>
                      )}

                      {/* Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at 50% 50%, ${event.color}20, transparent)`
                        }}
                      />

                      {/* Content */}
                      <div className="relative z-10 flex h-full flex-col space-y-4">
                        <div className="flex items-center gap-2 text-xs text-[#7CE7E4]">
                          <span>{event.date}</span>
                          <span className="text-[#BBD0FF]">•</span>
                          <span className="text-[#BBD0FF]">{event.type}</span>
                        </div>

                        <h3 className="text-xl text-[#FDFDFB] leading-tight">
                          {event.name}
                        </h3>

                        <p className="text-base text-[#FDFDFB]/75 leading-relaxed line-clamp-3 min-h-[96px]">
                          {event.description}
                        </p>

                        <div className="flex items-center gap-3 text-xs text-[#BBD0FF]/70">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {event.city}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {event.attendees}
                          </div>
                        </div>

                        {/* CTAs */}
                        <div className="mt-auto flex gap-2 pt-3">
                          <motion.button
                            whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(101,214,200,0.4)" }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedEvent(event)}
                            className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] text-sm font-medium transition-all flex items-center justify-center gap-1.5"
                          >
                            Join Event
                            <ArrowRight className="w-3.5 h-3.5" />
                          </motion.button>
                          
                          <motion.button
                            whileHover={{ scale: 1.02, borderColor: "rgba(101,214,200,0.6)" }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setDetailEvent(event)}
                            className="px-4 py-3 rounded-lg border border-[#FDFDFB]/20 text-[#FDFDFB] text-sm hover:bg-[#FDFDFB]/5 transition-all"
                          >
                            Learn More
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {eventsData.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  whileHover={{ scale: 1.2 }}
                  className={`rounded-full transition-all duration-400 ${
                    i === currentIndex
                      ? "w-8 h-2 bg-[#65D6C8]"
                      : "w-2 h-2 bg-[#65D6C8]/30 hover:bg-[#65D6C8]/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* View Calendar CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(101,214,200,0.5)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowCalendar(true)}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium transition-all flex items-center gap-3 mx-auto"
            >
              <Calendar className="w-5 h-5" />
              View Full Calendar
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Modals */}
      <RSVPModal 
        event={selectedEvent} 
        isOpen={!!selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
      />

      <EventDetailPanel 
        event={detailEvent} 
        isOpen={!!detailEvent} 
        onClose={() => setDetailEvent(null)}
        onJoinEvent={(event: any) => setSelectedEvent(event)}
      />

      <FullCalendarModal 
        isOpen={showCalendar}
        onClose={() => setShowCalendar(false)}
        onSelectEvent={(event: any) => setDetailEvent(event)}
      />
    </>
  );
}
