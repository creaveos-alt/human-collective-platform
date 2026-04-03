"use client";

import { motion } from "motion/react";
import { Heart, Users, Calendar, Mail, Linkedin, Twitter, Github, ArrowRight, Sparkles } from "lucide-react";
import { BrandWordmarkStatic } from "./BrandWordmark";

/**
 * ENHANCED FOOTER - Grounding Layer of the Continuum
 * 
 * The footer serves as the calm, minimal conclusion to the experience.
 * It echoes the aurora/constellation visual language while providing
 * essential navigation and engagement pathways.
 */

interface EnhancedFooterProps {
  setDonateFlow?: (flow: any) => void;
  setEventFlow?: (flow: any) => void;
  setChapterFlow?: (flow: any) => void;
  setBuilderFlow?: (flow: any) => void;
}

export function EnhancedFooter({ 
  setDonateFlow, 
  setEventFlow,
  setChapterFlow,
  setBuilderFlow 
}: EnhancedFooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative border-t border-[#65D6C8]/10 overflow-hidden">
      {/* Aurora glow at top edge - fades upward into main page */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scaleX: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="h-full bg-gradient-to-r from-transparent via-[#65D6C8]/40 to-transparent"
        />
      </div>

      {/* Constellation texture background (very subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.circle
              key={i}
              cx={`${(i * 67) % 100}%`}
              cy={`${(i * 43) % 100}%`}
              r="1"
              fill="#65D6C8"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </svg>
      </div>

      {/* Deep background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040619] via-[#0a0a2e] to-[#040619]" />

      {/* Content */}
      <div className="relative z-10">
        {/* Top Row - Philosophical Anchor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center pt-16 pb-12 px-6"
        >
          <p className="text-sm text-[#FDFDFB]/40 italic tracking-wide">
            "From the first tool of thought to collective intelligence."
          </p>
        </motion.div>

        {/* Main Footer Row */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-4"
            >
              <BrandWordmarkStatic size="default" />
              <p className="text-sm text-[#FDFDFB]/60 leading-relaxed max-w-xs">
                A growing network of thinkers, builders, and learners cultivating collective intelligence.
              </p>
              
              {/* Aurora accent */}
              <div className="pt-2">
                <motion.div
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scaleX: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-16 h-px bg-gradient-to-r from-[#7A6FF0] to-[#65D6C8]"
                />
              </div>
            </motion.div>

            {/* Navigation Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-medium text-[#FDFDFB]/80 tracking-wide">Explore</h3>
              <nav className="space-y-2.5">
                {[
                  { label: "About", id: "about" },
                  { label: "Programs", id: "programs" },
                  { label: "Chapters", id: "chapters" },
                  { label: "Events", id: "events" },
                  { label: "Builders", id: "builders" }
                ].map((link, i) => (
                  <motion.button
                    key={link.label}
                    onClick={() => scrollToSection(link.id)}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="block text-sm text-[#FDFDFB]/60 hover:text-[#65D6C8] transition-colors text-left"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
            </motion.div>

            {/* Engagement Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-medium text-[#FDFDFB]/80 tracking-wide">Join Us</h3>
              <div className="space-y-3">
                {/* Join the Collective */}
                <motion.button
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setChapterFlow?.({ active: true, step: 'form' })}
                  className="flex items-center gap-2 text-sm text-[#FDFDFB]/60 hover:text-[#65D6C8] transition-colors group"
                >
                  <Users className="w-4 h-4 text-[#65D6C8]/60 group-hover:text-[#65D6C8] transition-colors" />
                  <span>Join the Collective</span>
                </motion.button>

                {/* Support the Continuum */}
                <motion.button
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setDonateFlow?.({ active: true, step: 'amount', amount: null, source: 'footer' })}
                  className="flex items-center gap-2 text-sm text-[#FDFDFB]/60 hover:text-[#65D6C8] transition-colors group"
                >
                  <Heart className="w-4 h-4 text-[#65D6C8]/60 group-hover:text-[#65D6C8] transition-colors" />
                  <span>Support the Continuum</span>
                </motion.button>

                {/* View Calendar */}
                <motion.button
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setEventFlow?.({ active: true, step: 'browse' })}
                  className="flex items-center gap-2 text-sm text-[#FDFDFB]/60 hover:text-[#65D6C8] transition-colors group"
                >
                  <Calendar className="w-4 h-4 text-[#65D6C8]/60 group-hover:text-[#65D6C8] transition-colors" />
                  <span>View Full Calendar</span>
                </motion.button>

                {/* Become a Builder */}
                <motion.button
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setBuilderFlow?.({ active: true, step: 'form' })}
                  className="flex items-center gap-2 text-sm text-[#FDFDFB]/60 hover:text-[#65D6C8] transition-colors group"
                >
                  <Sparkles className="w-4 h-4 text-[#65D6C8]/60 group-hover:text-[#65D6C8] transition-colors" />
                  <span>Become a Builder</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Social / Contact Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-medium text-[#FDFDFB]/80 tracking-wide">Connect</h3>
              <div className="space-y-3">
                {/* Email */}
                <motion.a
                  href="mailto:hello@collective.org"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 text-sm text-[#FDFDFB]/60 hover:text-[#65D6C8] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#65D6C8]/60 group-hover:text-[#65D6C8] transition-colors" />
                  <span>hello@collective.org</span>
                </motion.a>

                {/* Social Icons */}
                <div className="flex items-center gap-4 pt-2">
                  {[
                    { Icon: Twitter, href: "#", label: "Twitter" },
                    { Icon: Linkedin, href: "#", label: "LinkedIn" },
                    { Icon: Github, href: "#", label: "GitHub" }
                  ].map(({ Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="relative group"
                      aria-label={label}
                    >
                      {/* Glow on hover */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-[#65D6C8]/20 rounded-full blur-lg"
                      />
                      <div className="relative w-9 h-9 rounded-full bg-[#FDFDFB]/5 border border-[#FDFDFB]/10 flex items-center justify-center hover:border-[#65D6C8]/40 transition-colors">
                        <Icon className="w-4 h-4 text-[#FDFDFB]/60 group-hover:text-[#65D6C8] transition-colors" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="relative h-px">
            <motion.div
              animate={{
                opacity: [0.05, 0.15, 0.05],
                scaleX: [0.9, 1, 0.9]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="h-full bg-gradient-to-r from-transparent via-[#65D6C8]/20 to-transparent"
            />
          </div>
        </div>

        {/* Bottom Row - Legal / Utility */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-7xl mx-auto px-6 md:px-12 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#FDFDFB]/40">
            <div>
              © {currentYear} Human + AI Collective. Honoring dignity, fostering care.
            </div>
            <div className="flex items-center gap-1">
              <motion.a
                href="#"
                whileHover={{ color: "#65D6C8" }}
                transition={{ duration: 0.2 }}
                className="hover:text-[#65D6C8] transition-colors"
              >
                Privacy Policy
              </motion.a>
              <span className="mx-2">•</span>
              <motion.a
                href="#"
                whileHover={{ color: "#65D6C8" }}
                transition={{ duration: 0.2 }}
                className="hover:text-[#65D6C8] transition-colors"
              >
                Terms of Use
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Final constellation nodes (decorative) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-20 pointer-events-none">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.8
              }}
              className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#7A6FF0] to-[#65D6C8]"
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
