import { useLocation } from "react-router";
"use client";

import { motion, AnimatePresence } from "motion/react";
import { Globe, Users, MapPin, Plus, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { GlobalNetworkMap } from "../components/GlobalNetworkMap";

export function ChaptersPage() {
  const [showStartForm, setShowStartForm] = useState(false);

  
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#start-chapter") {
      setShowStartForm(true);
    }
  }, [location.hash]);
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
      <section className="relative pt-20 pb-16 px-6 overflow-hidden">
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
      <section className="relative pt-10 pb-24 px-6 bg-gradient-to-b from-[#040619] via-[#0D1226] to-[#040619]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl text-[#FDFDFB] mb-3 text-center">
              The Living Network
            </h2>
            <p className="text-base md:text-lg text-[#FDFDFB]/60 text-center">
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
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-[#040619] border border-[#65D6C8]/15 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-sm text-[#FDFDFB]/80 mb-2">Email Address</label>
                          <input
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-[#040619] border border-[#65D6C8]/15 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-sm text-[#FDFDFB]/80 mb-2">City</label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-[#040619] border border-[#65D6C8]/15 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-sm text-[#FDFDFB]/80 mb-2">Country</label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-[#040619] border border-[#65D6C8]/15 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm text-[#FDFDFB]/80 mb-2">Organization, School, or Community (optional)</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl bg-[#040619] border border-[#65D6C8]/15 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <label className="block text-sm text-[#FDFDFB]/80 mb-2">Why do you want to start a chapter?</label>
                          <textarea
                            required
                            rows={3}
                            className="w-full px-4 py-3 rounded-xl bg-[#040619] border border-[#65D6C8]/15 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none resize-none"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm text-[#FDFDFB]/80 mb-2">What kind of community would you like to build?</label>
                          <textarea
                            required
                            rows={3}
                            className="w-full px-4 py-3 rounded-xl bg-[#040619] border border-[#65D6C8]/15 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none resize-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-[#FDFDFB]/80 mb-2">What stage are you in?</label>
                          <select
                            required
                            className="w-full px-4 py-3 rounded-xl bg-[#040619] border border-[#65D6C8]/15 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                            defaultValue=""
                          >
                            <option value="" disabled>Select one</option>
                            <option>Just exploring</option>
                            <option>I have a few interested people</option>
                            <option>I already have a community</option>
                            <option>Ready to organize a first gathering</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm text-[#FDFDFB]/80 mb-2">Likely focus area</label>
                          <select
                            required
                            className="w-full px-4 py-3 rounded-xl bg-[#040619] border border-[#65D6C8]/15 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none"
                            defaultValue=""
                          >
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
                          <textarea
                            rows={3}
                            className="w-full px-4 py-3 rounded-xl bg-[#040619] border border-[#65D6C8]/15 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none resize-none"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col-reverse sm:flex-row gap-4 pt-2">
                        <button
                          type="button"
                          onClick={onClose}
                          className="sm:flex-1 px-6 py-3 rounded-xl border border-[#65D6C8]/20 text-[#FDFDFB] hover:bg-[#65D6C8]/8 transition-all"
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          className="sm:flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium hover:shadow-[0_0_30px_rgba(101,214,200,0.25)] transition-all duration-300"
                        >
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
    </AnimatePresence>
  );
}