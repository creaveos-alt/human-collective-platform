"use client";

import { motion } from "motion/react";
import { Link } from "react-router";
import { BookOpen, Users, Clock, MapPin, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

export function AILunchboxPage() {
  const [showJoinForm, setShowJoinForm] = useState(false);

  return (
    <div className="relative pt-20">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#65D6C8]/10 to-transparent blur-3xl"
        />
        
        <div className="max-w-[1440px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[900px] mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#65D6C8]/30 bg-[#65D6C8]/10 mb-6">
              <BookOpen className="w-4 h-4 text-[#65D6C8]" />
              <span className="text-sm text-[#FDFDFB]/80">Community Learning Program</span>
            </div>

            <h1 className="text-5xl md:text-7xl text-[#FDFDFB] mb-8 leading-tight">
              AI Lunchbox
            </h1>
            <p className="text-xl md:text-2xl text-[#FDFDFB]/70 leading-relaxed mb-8">
              Bite-sized AI literacy workshops designed for everyone—from farmers to teachers, 
              students to seniors. No technical background required.
            </p>

            <motion.button
              onClick={() => setShowJoinForm(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] text-lg font-medium tracking-wide transition-all duration-400 hover:shadow-[0_0_40px_rgba(101,214,200,0.4)]"
            >
              Join a Workshop
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* What is AI Lunchbox */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#040619] via-[#0D1226] to-[#040619]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-6">
                What is AI Lunchbox?
              </h2>
              <p className="text-lg text-[#FDFDFB]/70 leading-relaxed mb-6">
                AI Lunchbox began with a simple idea: AI education should be as accessible as bringing 
                lunch to a community gathering. We create welcoming spaces where anyone can learn about 
                artificial intelligence through hands-on activities, real-world examples, and shared conversation.
              </p>
              <p className="text-lg text-[#FDFDFB]/70 leading-relaxed">
                Our workshops break down complex AI concepts into digestible sessions that feel more like 
                friendly discussions than lectures. We meet people where they are—in libraries, community 
                centers, schools, and online.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <StatCard value="500+" label="Workshops" />
              <StatCard value="5,000+" label="Participants" />
              <StatCard value="28" label="Countries" />
              <StatCard value="Free" label="Always" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshop Topics */}
      <section className="relative py-24 px-6">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-4">
              Workshop Topics
            </h2>
            <p className="text-lg text-[#FDFDFB]/60 max-w-[800px] mx-auto">
              Practical, accessible sessions covering the fundamentals of AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI Basics",
                description: "What is AI? How does it work? Demystifying the technology behind the headlines.",
                duration: "90 minutes"
              },
              {
                title: "AI in Daily Life",
                description: "Recognizing AI in apps, services, and tools you already use every day.",
                duration: "60 minutes"
              },
              {
                title: "AI Ethics & Bias",
                description: "Understanding fairness, privacy, and the human values embedded in AI systems.",
                duration: "90 minutes"
              },
              {
                title: "AI for Work",
                description: "How AI can enhance your career without replacing human skills and judgment.",
                duration: "120 minutes"
              },
              {
                title: "Critical AI Thinking",
                description: "Evaluating AI claims, spotting misinformation, and asking the right questions.",
                duration: "90 minutes"
              },
              {
                title: "Building with AI",
                description: "Hands-on introduction to using AI tools for creativity and problem-solving.",
                duration: "120 minutes"
              }
            ].map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/20 to-[#65D6C8]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative p-6 rounded-xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 backdrop-blur-sm h-full">
                  <h3 className="text-xl text-[#FDFDFB] mb-3">{topic.title}</h3>
                  <p className="text-[#FDFDFB]/70 text-sm leading-relaxed mb-4">{topic.description}</p>
                  <div className="flex items-center gap-2 text-[#65D6C8] text-sm">
                    <Clock className="w-4 h-4" />
                    {topic.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#040619] via-[#0D1226] to-[#040619]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-4">
              How It Works
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Find a Workshop",
                description: "Browse upcoming sessions in your area or online"
              },
              {
                step: "02",
                title: "Register Free",
                description: "All workshops are free and open to everyone"
              },
              {
                step: "03",
                title: "Learn Together",
                description: "Participate in hands-on, community-driven learning"
              },
              {
                step: "04",
                title: "Share Knowledge",
                description: "Take what you learn back to your community"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="text-6xl font-bold bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] bg-clip-text text-transparent mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl text-[#FDFDFB] mb-3">{item.title}</h3>
                <p className="text-[#FDFDFB]/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-6">
              Start Your AI Learning Journey
            </h2>
            <p className="text-lg text-[#FDFDFB]/70 leading-relaxed mb-12 max-w-[800px] mx-auto">
              Join thousands of learners discovering how AI works and how to shape its future.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                onClick={() => setShowJoinForm(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] text-lg font-medium tracking-wide transition-all duration-400 hover:shadow-[0_0_40px_rgba(101,214,200,0.4)]"
              >
                Join a Workshop
              </motion.button>
              <Link to="/events">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 rounded-lg border-2 border-[#7A6FF0]/50 bg-[#7A6FF0]/10 text-[#FDFDFB] text-lg font-medium tracking-wide transition-all duration-400 hover:border-[#7A6FF0] hover:bg-[#7A6FF0]/20"
                >
                  View Schedule
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Form Modal */}
      {showJoinForm && (
        <JoinWorkshopModal onClose={() => setShowJoinForm(false)} />
      )}
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 backdrop-blur-sm text-center"
    >
      <div className="text-4xl font-bold bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] bg-clip-text text-transparent mb-2">
        {value}
      </div>
      <div className="text-[#FDFDFB]/60 text-sm">{label}</div>
    </motion.div>
  );
}

function JoinWorkshopModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#040619]/90 backdrop-blur-md"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-md bg-[#0D1226] border border-[#65D6C8]/30 rounded-2xl p-8"
      >
        {!submitted ? (
          <>
            <h3 className="text-2xl text-[#FDFDFB] mb-2">Join AI Lunchbox</h3>
            <p className="text-[#FDFDFB]/60 mb-6">We'll notify you about upcoming workshops in your area.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-[#FDFDFB]/80 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#040619] border border-[#65D6C8]/20 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-[#FDFDFB]/80 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#040619] border border-[#65D6C8]/20 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm text-[#FDFDFB]/80 mb-2">Location</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#040619] border border-[#65D6C8]/20 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none transition-all"
                  placeholder="City, Country"
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
                  className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium hover:shadow-[0_0_20px_rgba(101,214,200,0.4)] transition-all"
                >
                  Join Waitlist
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[#65D6C8]" />
            </div>
            <h3 className="text-2xl text-[#FDFDFB] mb-3">You're on the list!</h3>
            <p className="text-[#FDFDFB]/70 mb-6">
              We'll notify you when workshops become available in your area.
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
