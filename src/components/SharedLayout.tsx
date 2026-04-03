"use client";

import { Outlet, Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Heart, Calendar, Menu, X, ChevronDown } from "lucide-react";
import { BrandWordmark } from "./BrandWordmark";

export function SharedLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-[#040619]">
      {/* Fixed Header */}
      <Header 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        programsOpen={programsOpen}
        setProgramsOpen={setProgramsOpen}
        currentPath={location.pathname}
      />

      {/* Main Content */}
      <main className="relative">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function Header({ mobileMenuOpen, setMobileMenuOpen, programsOpen, setProgramsOpen, currentPath }: any) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#040619]/95 backdrop-blur-xl border-b border-[#65D6C8]/20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="px-4 py-1">
            <BrandWordmark animated={false} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/about"
              className={`text-sm tracking-wide transition-all duration-400 ${
                currentPath === '/about' 
                  ? 'text-[#65D6C8]' 
                  : 'text-[#FDFDFB]/70 hover:text-[#65D6C8]'
              }`}
            >
              About
            </Link>

            {/* Programs Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <button
                className={`text-sm tracking-wide transition-all duration-400 flex items-center gap-1 ${
                  currentPath.includes('/programs') || currentPath.includes('/ai-lunchbox')
                    ? 'text-[#65D6C8]' 
                    : 'text-[#FDFDFB]/70 hover:text-[#65D6C8]'
                }`}
              >
                Programs
                <ChevronDown className="w-3 h-3" />
              </button>

              <AnimatePresence>
                {programsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-[#0D1226]/98 backdrop-blur-xl border border-[#65D6C8]/30 rounded-xl overflow-hidden shadow-2xl"
                  >
                    <Link
                      to="/programs"
                      className="block px-4 py-3 text-sm text-[#FDFDFB]/80 hover:text-[#65D6C8] hover:bg-[#7A6FF0]/10 transition-all"
                    >
                      All Programs
                    </Link>
                    <Link
                      to="/ai-lunchbox"
                      className="block px-4 py-3 text-sm text-[#FDFDFB]/80 hover:text-[#65D6C8] hover:bg-[#7A6FF0]/10 transition-all"
                    >
                      AI Lunchbox
                    </Link>
                    <Link
                      to="/research"
                      className="block px-4 py-3 text-sm text-[#FDFDFB]/80 hover:text-[#65D6C8] hover:bg-[#7A6FF0]/10 transition-all"
                    >
                      Research & Policy
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/chapters"
              className={`text-sm tracking-wide transition-all duration-400 ${
                currentPath === '/chapters' 
                  ? 'text-[#65D6C8]' 
                  : 'text-[#FDFDFB]/70 hover:text-[#65D6C8]'
              }`}
            >
              Chapters
            </Link>
            <Link
              to="/events"
              className={`text-sm tracking-wide transition-all duration-400 ${
                currentPath === '/events' 
                  ? 'text-[#65D6C8]' 
                  : 'text-[#FDFDFB]/70 hover:text-[#65D6C8]'
              }`}
            >
              Events
            </Link>
            <Link
              to="/builders"
              className={`text-sm tracking-wide transition-all duration-400 ${
                currentPath === '/builders' 
                  ? 'text-[#65D6C8]' 
                  : 'text-[#FDFDFB]/70 hover:text-[#65D6C8]'
              }`}
            >
              Builders
            </Link>
            <Link
              to="/resources"
              className={`text-sm tracking-wide transition-all duration-400 ${
                currentPath === '/resources' 
                  ? 'text-[#65D6C8]' 
                  : 'text-[#FDFDFB]/70 hover:text-[#65D6C8]'
              }`}
            >
              Resources
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/get-involved">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-lg border-2 border-[#7A6FF0]/50 bg-[#7A6FF0]/10 text-[#FDFDFB] text-sm font-medium tracking-wide transition-all duration-400 hover:border-[#7A6FF0] hover:bg-[#7A6FF0]/20"
              >
                Get Involved
              </motion.button>
            </Link>
            <Link to="/donate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] text-sm font-medium tracking-wide transition-all duration-400 hover:shadow-[0_0_30px_rgba(101,214,200,0.4)]"
              >
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Donate
                </span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#FDFDFB] p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pt-4 border-t border-[#65D6C8]/20"
            >
              <nav className="flex flex-col gap-4">
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#FDFDFB]/80 hover:text-[#65D6C8] transition-all"
                >
                  About
                </Link>
                <Link
                  to="/programs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#FDFDFB]/80 hover:text-[#65D6C8] transition-all"
                >
                  Programs
                </Link>
                <Link
                  to="/chapters"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#FDFDFB]/80 hover:text-[#65D6C8] transition-all"
                >
                  Chapters
                </Link>
                <Link
                  to="/events"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#FDFDFB]/80 hover:text-[#65D6C8] transition-all"
                >
                  Events
                </Link>
                <Link
                  to="/builders"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#FDFDFB]/80 hover:text-[#65D6C8] transition-all"
                >
                  Builders
                </Link>
                <Link
                  to="/resources"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#FDFDFB]/80 hover:text-[#65D6C8] transition-all"
                >
                  Resources
                </Link>
                <div className="flex flex-col gap-3 pt-4">
                  <Link to="/get-involved" onClick={() => setMobileMenuOpen(false)}>
                    <button className="w-full px-6 py-3 rounded-lg border-2 border-[#7A6FF0]/50 bg-[#7A6FF0]/10 text-[#FDFDFB] text-sm font-medium">
                      Get Involved
                    </button>
                  </Link>
                  <Link to="/donate" onClick={() => setMobileMenuOpen(false)}>
                    <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] text-sm font-medium">
                      Donate
                    </button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-[#65D6C8]/20 bg-[#040619]">
      {/* Aurora glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7A6FF0]/5 to-transparent pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-[#FDFDFB] font-semibold mb-4">About</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/about" className="text-[#FDFDFB]/60 hover:text-[#65D6C8] text-sm transition-all">
                Our Story
              </Link>
              <Link to="/about#mission" className="text-[#FDFDFB]/60 hover:text-[#65D6C8] text-sm transition-all">
                Mission & Values
              </Link>
              <Link to="/builders" className="text-[#FDFDFB]/60 hover:text-[#65D6C8] text-sm transition-all">
                Team
              </Link>
            </nav>
          </div>

          {/* Programs Column */}
          <div>
            <h3 className="text-[#FDFDFB] font-semibold mb-4">Programs</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/ai-lunchbox" className="text-[#FDFDFB]/60 hover:text-[#65D6C8] text-sm transition-all">
                AI Lunchbox
              </Link>
              <Link to="/chapters" className="text-[#FDFDFB]/60 hover:text-[#65D6C8] text-sm transition-all">
                Global Chapters
              </Link>
              <Link to="/research" className="text-[#FDFDFB]/60 hover:text-[#65D6C8] text-sm transition-all">
                Research & Policy
              </Link>
              <Link to="/events" className="text-[#FDFDFB]/60 hover:text-[#65D6C8] text-sm transition-all">
                Events & Workshops
              </Link>
            </nav>
          </div>

          {/* Community Column */}
          <div>
            <h3 className="text-[#FDFDFB] font-semibold mb-4">Community</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/get-involved" className="text-[#FDFDFB]/60 hover:text-[#65D6C8] text-sm transition-all">
                Get Involved
              </Link>
              <Link to="/chapters" className="text-[#FDFDFB]/60 hover:text-[#65D6C8] text-sm transition-all">
                Start a Chapter
              </Link>
              <Link to="/resources" className="text-[#FDFDFB]/60 hover:text-[#65D6C8] text-sm transition-all">
                Resources
              </Link>
            </nav>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-[#FDFDFB] font-semibold mb-4">Connect</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/contact" className="text-[#FDFDFB]/60 hover:text-[#65D6C8] text-sm transition-all">
                Contact Us
              </Link>
              <Link to="/donate" className="text-[#FDFDFB]/60 hover:text-[#65D6C8] text-sm transition-all">
                Support Our Work
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#65D6C8]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[#FDFDFB]/50 text-sm">
            © 2026 Human + AI Collective. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-[#FDFDFB]/50 hover:text-[#65D6C8] text-sm transition-all">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-[#FDFDFB]/50 hover:text-[#65D6C8] text-sm transition-all">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
