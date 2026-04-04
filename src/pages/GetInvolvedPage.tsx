"use client";

import { motion } from "motion/react";
import { Link } from "react-router";
import { BookOpen, Globe, Users, Heart, Sparkles, ArrowRight } from "lucide-react";

export function GetInvolvedPage() {
  const opportunities = [
    {
      icon: BookOpen,
      title: "Attend a Workshop",
      description: "Join an AI Lunchbox session and start your learning journey.",
      action: "Find Workshops",
      link: "/ai-lunchbox"
    },
    {
      icon: Globe,
      title: "Join a Chapter",
      description: "Connect with your local community exploring AI together.",
      action: "Find Your Chapter",
      link: "/chapters"
    },
    {
      icon: Users,
      title: "Start a Chapter",
      description: "Bring the Human + AI Collective to your city.",
      action: "Start a Chapter",
      link: "/chapters"
    },
    {
      icon: Heart,
      title: "Donate",
      description: "Support our mission to democratize AI literacy globally.",
      action: "Make a Donation",
      link: "/donate"
    },
    {
      icon: Sparkles,
      title: "Volunteer",
      description: "Share your skills as a facilitator, translator, or organizer.",
      action: "Apply to Volunteer",
      link: "/contact"
    },
    {
      icon: Users,
      title: "Partner With Us",
      description: "Collaborate on research, events, or community initiatives.",
      action: "Explore Partnerships",
      link: "/contact"
    }
  ];

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
              Get Involved
            </h1>
            <p className="text-xl md:text-2xl text-[#FDFDFB]/70 leading-relaxed">
              Join thousands of people around the world shaping the future of human-AI collaboration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="relative py-24 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={opp.link}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative h-full group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/20 to-[#65D6C8]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative h-full p-8 rounded-xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 backdrop-blur-sm">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20 flex items-center justify-center mb-6">
                        <opp.icon className="w-8 h-8 text-[#65D6C8]" />
                      </div>

                      <h3 className="text-2xl text-[#FDFDFB] mb-4">{opp.title}</h3>
                      <p className="text-[#FDFDFB]/70 leading-relaxed mb-6">{opp.description}</p>

                      <div className="flex items-center gap-2 text-[#65D6C8] text-sm font-medium group-hover:gap-3 transition-all">
                        {opp.action}
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#040619] via-[#0D1226] to-[#040619]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[800px] mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-6">
              Stay Connected
            </h2>
            <p className="text-lg text-[#FDFDFB]/70 leading-relaxed mb-8">
              Get monthly updates on events, research, and opportunities to engage.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-[600px] mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 rounded-lg bg-[#040619] border border-[#65D6C8]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8] focus:outline-none transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium transition-all duration-400 hover:shadow-[0_0_30px_rgba(101,214,200,0.4)]"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
