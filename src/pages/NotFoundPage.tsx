"use client";

import { motion } from "motion/react";
import { Link } from "react-router";
import { Home, Search, AlertCircle } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6">
      {/* Aurora background */}
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

      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Icon */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20 flex items-center justify-center mx-auto mb-8">
            <AlertCircle className="w-12 h-12 text-[#65D6C8]" />
          </div>

          {/* Error Code */}
          <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#65D6C8] via-[#7A6FF0] to-[#A8F0E4] bg-clip-text text-transparent mb-6">
            404
          </div>

          {/* Message */}
          <h1 className="text-3xl md:text-5xl text-[#FDFDFB] mb-6">
            Page Not Found
          </h1>
          <p className="text-lg text-[#FDFDFB]/70 leading-relaxed mb-12">
            This page seems to have drifted outside the collective continuum. 
            Let's bring you back to familiar territory.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium tracking-wide transition-all duration-400 hover:shadow-[0_0_40px_rgba(101,214,200,0.4)]"
              >
                <span className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Return Home
                </span>
              </motion.button>
            </Link>

            <Link to="/resources">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-lg border-2 border-[#7A6FF0]/50 bg-[#7A6FF0]/10 text-[#FDFDFB] font-medium tracking-wide transition-all duration-400 hover:border-[#7A6FF0] hover:bg-[#7A6FF0]/20"
              >
                <span className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Explore Resources
                </span>
              </motion.button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-16 p-8 rounded-xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 backdrop-blur-sm">
            <h3 className="text-xl text-[#FDFDFB] mb-6">Looking for something specific?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <Link to="/about" className="text-[#FDFDFB]/70 hover:text-[#65D6C8] transition-all">
                About
              </Link>
              <Link to="/programs" className="text-[#FDFDFB]/70 hover:text-[#65D6C8] transition-all">
                Programs
              </Link>
              <Link to="/events" className="text-[#FDFDFB]/70 hover:text-[#65D6C8] transition-all">
                Events
              </Link>
              <Link to="/chapters" className="text-[#FDFDFB]/70 hover:text-[#65D6C8] transition-all">
                Chapters
              </Link>
              <Link to="/builders" className="text-[#FDFDFB]/70 hover:text-[#65D6C8] transition-all">
                Team
              </Link>
              <Link to="/research" className="text-[#FDFDFB]/70 hover:text-[#65D6C8] transition-all">
                Research
              </Link>
              <Link to="/contact" className="text-[#FDFDFB]/70 hover:text-[#65D6C8] transition-all">
                Contact
              </Link>
              <Link to="/donate" className="text-[#FDFDFB]/70 hover:text-[#65D6C8] transition-all">
                Donate
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
