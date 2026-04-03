"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

export function Events() {
  return (
    <div className="relative bg-[#040619]">
      <EventsHeroSection />
      <UpcomingEventsSection />
      <PastEventsSection />
    </div>
  );
}

// Events Hero
function EventsHeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7A6FF0]/10 to-transparent blur-3xl"
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center max-w-5xl px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[#65D6C8] text-sm uppercase tracking-widest mb-6"
        >
          Events & Gatherings
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl text-[#FDFDFB] mb-8 leading-tight"
          animate={{
            textShadow: [
              "0 0 20px rgba(122,111,240,0.2)",
              "0 0 30px rgba(122,111,240,0.4)",
              "0 0 20px rgba(122,111,240,0.2)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Where Intent
          <br />
          <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
            Becomes Presence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-xl md:text-2xl text-[#FDFDFB]/80 max-w-4xl mx-auto leading-relaxed"
        >
          The Collective gathers across cities and circles — moments of learning,
          making, and meaning shared in time.
        </motion.p>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#040619] via-[#040619]/90 to-[#040619]" />
    </div>
  );
}

// Upcoming Events
function UpcomingEventsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const events = [
    {
      date: "15 Dec 2024",
      title: "AI Lunchbox Workshop",
      location: "Toronto Chapter",
      time: "6:00 PM EST",
      attendees: 45,
      description: "Foundational AI literacy for local entrepreneurs",
    },
    {
      date: "22 Dec 2024",
      title: "Ethics Roundtable",
      location: "London Chapter",
      time: "7:00 PM GMT",
      attendees: 30,
      description: "Collective intelligence and governance frameworks",
    },
    {
      date: "10 Jan 2025",
      title: "Micro-Venture Showcase",
      location: "Nairobi Chapter",
      time: "5:00 PM EAT",
      attendees: 60,
      description: "Presenting local AI-powered businesses",
    },
    {
      date: "18 Jan 2025",
      title: "Think Tank Symposium",
      location: "San Francisco Chapter",
      time: "2:00 PM PST",
      attendees: 80,
      description: "Research on human-centered AI systems",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#040619] via-[#0a0a2e]/50 to-[#040619]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#FDFDFB] mb-6 leading-tight">
            Upcoming
            <br />
            <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              Gatherings
            </span>
          </h2>
        </motion.div>

        {/* Divider with shimmer */}
        <div className="relative w-full h-px mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-[#65D6C8]/10" />
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 2,
            }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-[#65D6C8]/40 to-transparent"
          />
        </div>

        {/* Events table */}
        <div className="space-y-4">
          {events.map((event, i) => (
            <motion.div
              key={`event-${i}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredEvent(i)}
              onMouseLeave={() => setHoveredEvent(null)}
              whileHover={{ x: 8 }}
              className="relative group cursor-pointer"
            >
              <div className="relative p-6 rounded-lg border border-[#65D6C8]/20 bg-gradient-to-r from-[#7A6FF0]/5 to-[#65D6C8]/5">
                {/* Gradient indicator */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: hoveredEvent === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] origin-left rounded-l-lg"
                />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Date */}
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-2 text-[#65D6C8]">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm uppercase tracking-wider">
                        {event.date}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="md:col-span-5">
                    <h3 className="text-xl text-[#FDFDFB] mb-1">{event.title}</h3>
                    <p className="text-[#FDFDFB]/60 text-sm">{event.description}</p>
                  </div>

                  {/* Meta info */}
                  <div className="md:col-span-5 flex flex-wrap gap-4 text-sm text-[#FDFDFB]/60">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                </div>

                {/* Hover glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredEvent === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 rounded-lg border-2 border-[#65D6C8] pointer-events-none"
                  style={{
                    boxShadow: "0 0 30px rgba(101,214,200,0.3)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        animate={{
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#7A6FF0]/20 to-[#65D6C8]/20 rounded-full blur-3xl pointer-events-none"
      />
    </motion.section>
  );
}

// Past Events
function PastEventsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="relative py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl text-[#FDFDFB] mb-8 leading-tight">
            Every gathering
            <br />
            <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
              leaves a trace
            </span>
          </h2>

          <p className="text-xl text-[#FDFDFB]/70 leading-relaxed mb-8">
            From a single idea shared to hundreds of lives touched, each event adds
            to the continuum of human care and intelligence.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { number: "300+", label: "Events Hosted" },
              { number: "1,200+", label: "Participants" },
              { number: "23", label: "Cities" },
              { number: "∞", label: "Ideas Shared" },
            ].map((stat, i) => (
              <motion.div
                key={`past-stat-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl text-[#65D6C8] mb-2">{stat.number}</div>
                <div className="text-[#FDFDFB]/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#events-archive"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-4 border-2 border-[#65D6C8] rounded-full text-[#FDFDFB] hover:bg-[#65D6C8]/10 transition-all"
          >
            <span>View Event Archive</span>
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#65D6C8]/10 to-transparent blur-3xl"
      />
    </motion.section>
  );
}
