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
      <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 md:p-6 overflow-y-auto">
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
          className="relative w-full max-w-3xl my-4 sm:my-0 rounded-[22px] sm:rounded-[28px] border border-[#7A6FF0]/35 bg-[#0B1023]/95 shadow-[0_0_80px_rgba(101,214,200,0.08)] overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#65D6C8]/50 to-transparent" />

          <div className="border-b border-[#65D6C8]/18 bg-[#10162E]/92 backdrop-blur-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5">
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-2">
                <div className="text-xs text-[#7A6FF0] uppercase tracking-[0.22em]">Collective Builders</div>
                <h2 className="text-xl sm:text-2xl md:text-3xl text-[#FDFDFB] leading-tight pr-8">{builder.name}</h2>
                <p className="text-sm md:text-base text-[#FDFDFB]/60 max-w-2xl leading-relaxed">
                  Meet the people helping shape the Collective through learning, community, and systems thinking.
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-lg text-[#FDFDFB]/60 hover:text-[#65D6C8] hover:bg-[#65D6C8]/10 transition-all duration-300"
              >
                <span className="sr-only">Close</span>
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/14 to-[#65D6C8]/10 blur-2xl opacity-60" />
              <div className="relative rounded-2xl border border-[#7A6FF0]/25 bg-[#040619]/55 backdrop-blur-sm p-4 sm:p-6 md:p-7">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#65D6C8]/18 to-[#7A6FF0]/18 flex items-center justify-center border border-[#65D6C8]/25 mb-5">
                    <div className="text-4xl font-semibold bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] bg-clip-text text-transparent">
                      {builder.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl text-[#FDFDFB] mb-3">{builder.name}</h3>

                  <div className="inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-[#65D6C8]/8 to-[#7A6FF0]/8 border border-[#65D6C8]/18">
                    <span className="text-[#65D6C8] font-medium">{builder.role}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg text-[#FDFDFB] font-medium mb-4">About</h4>
                  <p className="text-[#FDFDFB]/72 leading-relaxed">
                    {builder.bio}
                  </p>
                </div>

                <div className="mb-8 p-5 rounded-2xl bg-gradient-to-br from-[#7A6FF0]/4 to-[#65D6C8]/4 border border-[#65D6C8]/10">
                  <h4 className="text-lg text-[#FDFDFB] font-medium mb-4">Perspective</h4>
                  <div className="space-y-3 text-[#FDFDFB]/70 text-sm leading-relaxed">
                    <p>
                      Working across technology, participation, and public impact,
                      {" "}{builder.name.split(' ')[0]} brings a unique perspective to the challenges of AI development and deployment.
                    </p>
                    <p>
                      Their work focuses on making sure AI systems expand human capability rather than narrow it,
                      with particular attention to accessibility, equity, and community engagement.
                    </p>
                  </div>
                </div>

                <div className="mb-2">
                  <h4 className="text-lg text-[#FDFDFB] font-medium mb-4">Areas of Focus</h4>
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

                <div className="pt-6">
                  <div className="h-px bg-gradient-to-r from-[#65D6C8]/20 via-[#7A6FF0]/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
