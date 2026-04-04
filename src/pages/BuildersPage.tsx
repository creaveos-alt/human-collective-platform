"use client";

import { motion } from "motion/react";
import { Users, Linkedin, Twitter, Mail } from "lucide-react";
import { useState } from "react";
import { BuilderModal } from "../components/BuilderModal";

export function BuildersPage() {
  const [selectedBuilder, setSelectedBuilder] = useState<any>(null);

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & Director",
      bio: "AI ethics researcher and former policy advisor. Passionate about democratizing AI literacy.",
      image: null
    },
    {
      name: "Marcus Johnson",
      role: "Head of Programs",
      bio: "Community organizer with 15 years of experience building grassroots education initiatives.",
      image: null
    },
    {
      name: "Priya Patel",
      role: "Research Lead",
      bio: "PhD in Human-Computer Interaction, focused on participatory AI design.",
      image: null
    },
    {
      name: "James Martinez",
      role: "Chapter Coordinator",
      bio: "Connecting global communities and facilitating knowledge sharing across borders.",
      image: null
    },
    {
      name: "Aisha Mohammed",
      role: "AI Lunchbox Director",
      bio: "Educator and workshop facilitator specializing in accessible technical education.",
      image: null
    },
    {
      name: "Thomas Berg",
      role: "Technology Advisor",
      bio: "Former AI engineer turned advocate for ethical and human-centered AI systems.",
      image: null
    }
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
              The Builders
            </h1>
            <p className="text-xl md:text-2xl text-[#FDFDFB]/70 leading-relaxed">
              Meet the people shaping the Human + AI Collective and cultivating collective 
              intelligence across the globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="relative py-24 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedBuilder(member)}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/20 to-[#65D6C8]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative p-8 rounded-xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 backdrop-blur-sm h-full">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20 flex items-center justify-center mb-6 mx-auto">
                    <Users className="w-12 h-12 text-[#65D6C8]" />
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h3 className="text-2xl text-[#FDFDFB] mb-2">{member.name}</h3>
                    <div className="text-[#65D6C8] text-sm font-medium mb-4">{member.role}</div>
                    <p className="text-[#FDFDFB]/70 text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    <div className="text-[#65D6C8] text-sm font-medium">
                      Click to view profile →
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#040619] via-[#0D1226] to-[#040619]">
        <div className="max-w-[1440px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-6">
              Join Our Team
            </h2>
            <p className="text-lg text-[#FDFDFB]/70 leading-relaxed mb-12 max-w-[800px] mx-auto">
              We're always looking for passionate individuals to help shape the future of 
              human-AI collaboration.
            </p>

            <motion.a
              href="mailto:careers@humanai collective.org"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-10 py-5 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] text-lg font-medium tracking-wide transition-all duration-400 hover:shadow-[0_0_40px_rgba(101,214,200,0.4)]"
            >
              View Open Positions
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Builder Modal */}
      {selectedBuilder && (
        <BuilderModal 
          builder={selectedBuilder} 
          onClose={() => setSelectedBuilder(null)} 
        />
      )}
    </div>
  );
}