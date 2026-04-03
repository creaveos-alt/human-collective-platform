"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";

interface BuilderModalProps {
  builder: {
    name: string;
    role: string;
    bio: string;
    image?: string | null;
  };
  onClose: () => void;
}

export function BuilderModal({ builder, onClose }: BuilderModalProps) {
  return (
    <AnimatePresence>
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
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-2xl overflow-visible"
        >
          {/* Aurora glow behind modal */}
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 -m-6 bg-gradient-to-br from-[#7A6FF0]/35 to-[#65D6C8]/35 rounded-3xl blur-3xl pointer-events-none"
          />

          {/* Modal Container */}
          <div className="relative bg-[#0D1226]/98 backdrop-blur-xl border border-[#65D6C8]/30 rounded-2xl shadow-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-[#040619]/50 border border-[#65D6C8]/20 flex items-center justify-center hover:bg-[#65D6C8]/10 hover:border-[#65D6C8]/40 transition-all"
            >
              <X className="w-5 h-5 text-[#FDFDFB]/80" />
            </button>

            {/* Content */}
            <div className="p-8 md:p-10">
              {/* Avatar */}
              <div className="flex justify-center mb-8">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#65D6C8]/18 to-[#7A6FF0]/18 flex items-center justify-center border border-[#65D6C8]/25">
                  <div className="text-4xl font-semibold bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] bg-clip-text text-transparent">
                    {builder.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>

              {/* Name & Role */}
              <div className="text-center mb-8">
                <h2 className="text-3xl text-[#FDFDFB] mb-2">{builder.name}</h2>
                <div className="inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-[#65D6C8]/8 to-[#7A6FF0]/8 border border-[#65D6C8]/18">
                  <span className="text-[#65D6C8] font-medium">{builder.role}</span>
                </div>
              </div>

              {/* Bio */}
              <div className="mb-8">
                <h3 className="text-lg text-[#FDFDFB] font-medium mb-4">About</h3>
                <p className="text-[#FDFDFB]/70 leading-relaxed">
                  {builder.bio}
                </p>
              </div>

              {/* Extended Bio Section */}
              <div className="mb-8 p-5 rounded-xl bg-gradient-to-br from-[#7A6FF0]/4 to-[#65D6C8]/4 border border-[#65D6C8]/10">
                <h3 className="text-lg text-[#FDFDFB] font-medium mb-4">Perspective</h3>
                <div className="space-y-3 text-[#FDFDFB]/70 text-sm leading-relaxed">
                  <p>
                    Working across technology, participation, and public impact, 
                    {builder.name.split(' ')[0]} brings a unique perspective to the challenges of AI development and deployment.
                  </p>
                  <p>
                    Their work focuses on making sure AI systems expand human capability rather than narrow it, 
                    with particular attention to accessibility, equity, and community engagement.
                  </p>
                </div>
              </div>

              {/* Areas of Focus */}
              <div className="mb-8">
                <h3 className="text-lg text-[#FDFDFB] font-medium mb-4">Areas of Focus</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AI Ethics",
                    "Community Building",
                    "Policy Development",
                    "Education Design",
                    "Participatory Research"
                  ].map((area, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-[#7A6FF0]/10 border border-[#7A6FF0]/20 text-[#FDFDFB]/80 text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <div className="h-px bg-gradient-to-r from-[#65D6C8]/20 via-[#7A6FF0]/20 to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
