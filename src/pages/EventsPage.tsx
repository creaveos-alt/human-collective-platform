"use client";

import { motion } from "motion/react";
import { Calendar, MapPin, Users, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

export function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const upcomingEvents = [
    {
      title: "AI Literacy Workshop",
      date: "April 15, 2026",
      time: "2:00 PM - 4:00 PM PST",
      location: "San Francisco Chapter",
      type: "Workshop",
      description: "Introduction to AI fundamentals for complete beginners.",
      capacity: 30,
      registered: 18
    },
    {
      title: "Collective Intelligence Summit",
      date: "April 22, 2026",
      time: "10:00 AM - 6:00 PM EST",
      location: "Virtual Event",
      type: "Conference",
      description: "Annual gathering exploring the future of human-AI collaboration.",
      capacity: 500,
      registered: 342
    },
    {
      title: "AI Ethics Discussion",
      date: "April 28, 2026",
      time: "6:00 PM - 8:00 PM GMT",
      location: "London Chapter",
      type: "Discussion",
      description: "Community conversation on ethical AI development.",
      capacity: 25,
      registered: 19
    },
    {
      title: "Build with AI Workshop",
      date: "May 5, 2026",
      time: "1:00 PM - 5:00 PM JST",
      location: "Tokyo Chapter",
      type: "Workshop",
      description: "Hands-on session creating AI-powered projects.",
      capacity: 20,
      registered: 12
    }
  ];

  return (
    <div className="relative pt-20">
      {/* Hero */}
      <section className="relative pt-20 pb-24 px-6 overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7A6FF0]/10 to-transparent blur-3xl"
        />
        
        <div className="max-w-[1440px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[900px] mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl text-[#FDFDFB] mb-8 leading-tight">
              Events & Workshops
            </h1>
            <p className="text-xl md:text-2xl text-[#FDFDFB]/70 leading-relaxed">
              Join us for workshops, discussions, and gatherings that explore the intersection 
              of humanity and artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="relative py-24 px-6">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-4">
              Upcoming Events
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedEvent(event)}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/20 to-[#65D6C8]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative p-8 rounded-xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 backdrop-blur-sm h-full">
                  <div className="inline-flex px-3 py-1 rounded-full bg-[#7A6FF0]/20 text-[#65D6C8] text-sm mb-4">
                    {event.type}
                  </div>

                  <h3 className="text-2xl text-[#FDFDFB] mb-4">{event.title}</h3>
                  <p className="text-[#FDFDFB]/70 mb-6">{event.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-[#FDFDFB]/80 text-sm">
                      <Calendar className="w-4 h-4 text-[#65D6C8]" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-3 text-[#FDFDFB]/80 text-sm">
                      <Clock className="w-4 h-4 text-[#65D6C8]" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-3 text-[#FDFDFB]/80 text-sm">
                      <MapPin className="w-4 h-4 text-[#65D6C8]" />
                      {event.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#65D6C8]/10">
                    <div className="text-[#FDFDFB]/60 text-sm">
                      {event.registered}/{event.capacity} registered
                    </div>
                    <div className="flex items-center gap-2 text-[#65D6C8] text-sm font-medium group-hover:gap-3 transition-all">
                      Register
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Registration Modal */}
      {selectedEvent && (
        <EventRegistrationModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </div>
  );
}

function EventRegistrationModal({ event, onClose }: any) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#040619]/90 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
        className="relative w-full max-w-3xl rounded-[28px] border border-[#7A6FF0]/35 bg-[#0B1023]/95 shadow-[0_0_80px_rgba(101,214,200,0.08)] overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#65D6C8]/50 to-transparent" />

        {!submitted ? (
          <>
            <div className="border-b border-[#65D6C8]/18 bg-[#10162E]/92 backdrop-blur-lg px-6 md:px-8 py-5">
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-2">
                  <div className="text-xs text-[#7A6FF0] uppercase tracking-[0.22em]">Event Registration</div>
                  <h3 className="text-2xl md:text-3xl text-[#FDFDFB] leading-tight">{event.title}</h3>
                  <p className="text-sm md:text-base text-[#FDFDFB]/60 max-w-2xl leading-relaxed">
                    Reserve your place and we’ll share the details with you.
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-[#FDFDFB]/60 hover:text-[#65D6C8] hover:bg-[#65D6C8]/10 transition-all duration-300"
                >
                  <span className="sr-only">Close</span>
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/14 to-[#65D6C8]/10 blur-2xl opacity-60" />
                <div className="relative rounded-2xl border border-[#7A6FF0]/25 bg-[#040619]/55 backdrop-blur-sm p-6 md:p-7">
                  <div className="mb-6 rounded-2xl border border-[#65D6C8]/12 bg-[#040619]/60 px-5 py-5">
                    <p className="text-[#FDFDFB]/72 text-base leading-relaxed mb-5">
                      {event.description}
                    </p>

                    <div className="space-y-3 text-sm text-[#FDFDFB]/75">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-[#65D6C8]" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-[#65D6C8]" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-[#65D6C8]" />
                        {event.location}
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm text-[#FDFDFB]/82 mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-[#040619]/88 border border-[#65D6C8]/16 text-[#FDFDFB] focus:border-[#65D6C8]/55 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-[#FDFDFB]/82 mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-[#040619]/88 border border-[#65D6C8]/16 text-[#FDFDFB] focus:border-[#65D6C8]/55 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row gap-4 pt-2">
                      <button
                        type="button"
                        onClick={onClose}
                        className="sm:flex-1 px-6 py-3.5 rounded-xl border border-[#65D6C8]/20 text-[#FDFDFB] hover:bg-[#65D6C8]/8 transition-all"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="sm:flex-1 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium"
                      >
                        Register
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
                <CheckCircle className="w-8 h-8 text-[#65D6C8]" />
              </div>
              <h3 className="text-2xl md:text-3xl text-[#FDFDFB] mb-3">You're Registered!</h3>
              <p className="text-[#FDFDFB]/70 mb-8 max-w-md mx-auto leading-relaxed">
                We’ll send you event details and reminders by email.
              </p>
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
