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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#040619]/90 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-md bg-[#0D1226] border border-[#65D6C8]/30 rounded-2xl p-8 max-h-[90vh] overflow-y-auto"
      >
        {!submitted ? (
          <>
            <h3 className="text-2xl text-[#FDFDFB] mb-2">{event.title}</h3>
            <p className="text-[#FDFDFB]/60 mb-6">{event.description}</p>

            <div className="space-y-3 mb-6 p-4 rounded-lg bg-[#040619]/50 border border-[#65D6C8]/10">
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

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-[#FDFDFB]/80 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#040619] border border-[#65D6C8]/20 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-[#FDFDFB]/80 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#040619] border border-[#65D6C8]/20 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 rounded-lg border border-[#65D6C8]/30 text-[#FDFDFB] hover:bg-[#65D6C8]/10 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium"
                >
                  Register
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[#65D6C8]" />
            </div>
            <h3 className="text-2xl text-[#FDFDFB] mb-3">You're Registered!</h3>
            <p className="text-[#FDFDFB]/70 mb-6">
              We'll send you event details and reminders via email.
            </p>
            <button
              onClick={onClose}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium"
            >
              Done
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
