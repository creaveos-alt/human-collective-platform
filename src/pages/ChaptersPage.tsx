"use client";

import { motion } from "motion/react";
import { Globe, Users, MapPin, Plus, ArrowRight } from "lucide-react";
import { useState } from "react";
import { GlobalNetworkMap } from "../components/GlobalNetworkMap";

export function ChaptersPage() {
  const [showStartForm, setShowStartForm] = useState(false);

  const chapters = [
    { city: "San Francisco", country: "USA", members: 450 },
    { city: "New York", country: "USA", members: 380 },
    { city: "London", country: "UK", members: 320 },
    { city: "Berlin", country: "Germany", members: 280 },
    { city: "Tokyo", country: "Japan", members: 410 },
    { city: "Sydney", country: "Australia", members: 240 },
    { city: "São Paulo", country: "Brazil", members: 290 },
    { city: "Mumbai", country: "India", members: 360 },
    { city: "Toronto", country: "Canada", members: 310 },
    { city: "Singapore", country: "Singapore", members: 270 },
  ];

  return (
    <div className="relative pt-20">
      {/* Hero */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
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
              Global Chapters
            </h1>
            <p className="text-xl md:text-2xl text-[#FDFDFB]/70 leading-relaxed mb-8">
              28 local communities across the world, united by a shared vision of cultivating 
              collective intelligence between humanity and AI.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                onClick={() => setShowStartForm(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium tracking-wide transition-all duration-400 hover:shadow-[0_0_40px_rgba(101,214,200,0.4)]"
              >
                <span className="flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Start a Chapter
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Global Network Map */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#040619] via-[#0D1226] to-[#040619]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-4 text-center">
              The Living Network
            </h2>
            <p className="text-lg text-[#FDFDFB]/60 text-center">
              Explore our global community spanning 20 countries
            </p>
          </motion.div>

          <GlobalNetworkMap preview={false} />
        </div>
      </section>

      {/* Chapter List */}
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
              Active Chapters
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/20 to-[#65D6C8]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative p-6 rounded-xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl text-[#FDFDFB] mb-1">{chapter.city}</h3>
                      <div className="flex items-center gap-2 text-[#FDFDFB]/60 text-sm">
                        <MapPin className="w-4 h-4" />
                        {chapter.country}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-[#65D6C8]" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[#FDFDFB]/70 text-sm">
                    <Users className="w-4 h-4" />
                    {chapter.members} members
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Start a Chapter */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#040619] via-[#0D1226] to-[#040619]">
        <div className="max-w-[1440px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-6">
              Start a Chapter in Your City
            </h2>
            <p className="text-lg text-[#FDFDFB]/70 leading-relaxed mb-12 max-w-[800px] mx-auto">
              Bring the Human + AI Collective to your community. We provide resources, support, 
              and connection to a global network.
            </p>

            <motion.button
              onClick={() => setShowStartForm(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] text-lg font-medium tracking-wide transition-all duration-400 hover:shadow-[0_0_40px_rgba(101,214,200,0.4)]"
            >
              <span className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Start a Chapter
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Start Chapter Modal */}
      {showStartForm && (
        <StartChapterModal onClose={() => setShowStartForm(false)} />
      )}
    </div>
  );
}

function StartChapterModal({ onClose }: { onClose: () => void }) {
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
        className="relative w-full max-w-md bg-[#0D1226] border border-[#65D6C8]/30 rounded-2xl p-8"
      >
        {!submitted ? (
          <>
            <h3 className="text-2xl text-[#FDFDFB] mb-2">Start a Chapter</h3>
            <p className="text-[#FDFDFB]/60 mb-6">Tell us about your vision and we'll help you get started.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-[#FDFDFB]/80 mb-2">Your Name</label>
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

              <div>
                <label className="block text-sm text-[#FDFDFB]/80 mb-2">City & Country</label>
                <input
                  type="text"
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
                  Submit
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20 flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-[#65D6C8]" />
            </div>
            <h3 className="text-2xl text-[#FDFDFB] mb-3">Application Received!</h3>
            <p className="text-[#FDFDFB]/70 mb-6">
              We'll be in touch soon with next steps for starting your chapter.
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