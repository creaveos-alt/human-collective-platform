"use client";

import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-[#FDFDFB]/70 leading-relaxed">
              We'd love to hear from you. Whether you have questions, partnership ideas, 
              or just want to connect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-24 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {!submitted ? (
                <>
                  <h2 className="text-3xl text-[#FDFDFB] mb-6">Send us a message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                      <label className="block text-sm text-[#FDFDFB]/80 mb-2">Subject</label>
                      <select
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#040619] border border-[#65D6C8]/20 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none transition-all"
                      >
                        <option value="">Select a topic</option>
                        <option>General Inquiry</option>
                        <option>Partnership Opportunity</option>
                        <option>Workshop Request</option>
                        <option>Start a Chapter</option>
                        <option>Media & Press</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-[#FDFDFB]/80 mb-2">Message</label>
                      <textarea
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg bg-[#040619] border border-[#65D6C8]/20 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none transition-all resize-none"
                        placeholder="Tell us more..."
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium tracking-wide transition-all duration-400 hover:shadow-[0_0_40px_rgba(101,214,200,0.4)]"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-12 rounded-2xl border border-[#65D6C8]/30 bg-gradient-to-br from-[#7A6FF0]/10 to-[#65D6C8]/10"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-[#65D6C8]" />
                  </div>
                  <h3 className="text-2xl text-[#FDFDFB] mb-3">Message Sent!</h3>
                  <p className="text-[#FDFDFB]/70">
                    We'll get back to you within 2-3 business days.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl text-[#FDFDFB] mb-6">Get in touch</h2>
                <p className="text-lg text-[#FDFDFB]/70 leading-relaxed mb-8">
                  Our team is here to answer your questions and explore ways we can work together 
                  to advance collective intelligence.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#65D6C8]" />
                  </div>
                  <div>
                    <div className="text-[#FDFDFB] font-medium mb-1">Email</div>
                    <a href="mailto:hello@humanaicollective.org" className="text-[#FDFDFB]/70 hover:text-[#65D6C8] transition-all">
                      hello@humanaicollective.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#65D6C8]" />
                  </div>
                  <div>
                    <div className="text-[#FDFDFB] font-medium mb-1">Global Network</div>
                    <div className="text-[#FDFDFB]/70">
                      28 chapters across 20 countries
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#65D6C8]" />
                  </div>
                  <div>
                    <div className="text-[#FDFDFB] font-medium mb-1">Office Hours</div>
                    <div className="text-[#FDFDFB]/70">
                      Monday - Friday, 9am - 5pm PST
                    </div>
                  </div>
                </div>
              </div>

              {/* Partnership CTA */}
              <div className="mt-12 p-8 rounded-xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 backdrop-blur-sm">
                <h3 className="text-xl text-[#FDFDFB] mb-3">Interested in partnering?</h3>
                <p className="text-[#FDFDFB]/70 mb-4">
                  We collaborate with organizations, universities, and communities worldwide.
                </p>
                <a 
                  href="mailto:partnerships@humanaicollective.org"
                  className="inline-flex items-center gap-2 text-[#65D6C8] hover:gap-3 transition-all"
                >
                  Learn about partnerships
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
