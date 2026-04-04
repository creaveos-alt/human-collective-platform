"use client";

import { motion } from "motion/react";
import { Link } from "react-router";
import { BookOpen, Globe, Sparkles, Users, Zap, ArrowRight, CheckCircle } from "lucide-react";

export function ProgramsPage() {
  const programs = [
    {
      icon: BookOpen,
      title: "AI Lunchbox",
      tagline: "Bite-sized AI literacy for everyone",
      description: "Community-driven workshops that demystify artificial intelligence through accessible, hands-on learning experiences. From rural communities to urban centers, we're making AI education available to all.",
      features: [
        "Free weekly workshops",
        "Multilingual resources",
        "No technical background required",
        "Community-led curriculum"
      ],
      link: "/ai-lunchbox",
      color: "from-[#65D6C8] to-[#7A6FF0]"
    },
    {
      icon: Globe,
      title: "Global Chapters",
      tagline: "Local communities, worldwide network",
      description: "Autonomous chapters in 28 countries fostering local connections while contributing to a global conversation about humanity's AI future. Each chapter adapts our mission to their unique cultural context.",
      features: [
        "28 active chapters worldwide",
        "Locally-led initiatives",
        "Global knowledge sharing",
        "Chapter starter kits available"
      ],
      link: "/chapters",
      color: "from-[#7A6FF0] to-[#A8F0E4]"
    },
    {
      icon: Sparkles,
      title: "Research & Policy",
      tagline: "Shaping ethical AI frameworks",
      description: "Collaborative research initiatives that inform policy, advance human-centered AI design, and contribute to public discourse on the societal implications of intelligent systems.",
      features: [
        "Open-access research",
        "Policy recommendations",
        "Industry partnerships",
        "Public discourse initiatives"
      ],
      link: "/research",
      color: "from-[#A8F0E4] to-[#65D6C8]"
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
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl text-[#FDFDFB]/70 leading-relaxed">
              Three interconnected pillars working together to cultivate collective intelligence 
              and shape humanity's AI future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="relative py-24 px-6">
        <div className="max-w-[1440px] mx-auto space-y-24">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} index={index} />
          ))}
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#040619] via-[#0D1226] to-[#040619]">
        <div className="max-w-[1440px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-6">
              Find Your Place in the Collective
            </h2>
            <p className="text-lg text-[#FDFDFB]/70 leading-relaxed mb-12 max-w-[800px] mx-auto">
              Whether you want to learn, teach, research, or build community, we have a program for you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/get-involved">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] text-lg font-medium tracking-wide transition-all duration-400 hover:shadow-[0_0_40px_rgba(101,214,200,0.4)]"
                >
                  Get Involved
                </motion.button>
              </Link>
              <Link to="/events">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 rounded-lg border-2 border-[#7A6FF0]/50 bg-[#7A6FF0]/10 text-[#FDFDFB] text-lg font-medium tracking-wide transition-all duration-400 hover:border-[#7A6FF0] hover:bg-[#7A6FF0]/20"
                >
                  View Upcoming Events
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ProgramCard({ program, index }: any) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
    >
      {/* Content */}
      <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${program.color} bg-opacity-10 mb-6`}>
          <program.icon className="w-5 h-5 text-[#65D6C8]" />
          <span className="text-sm text-[#FDFDFB]/80 font-medium">{program.tagline}</span>
        </div>

        <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-6">
          {program.title}
        </h2>

        <p className="text-lg text-[#FDFDFB]/70 leading-relaxed mb-8">
          {program.description}
        </p>

        <div className="space-y-3 mb-8">
          {program.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#65D6C8] flex-shrink-0" />
              <span className="text-[#FDFDFB]/80">{feature}</span>
            </div>
          ))}
        </div>

        <Link to={program.link}>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-4 rounded-lg border-2 border-[#65D6C8]/50 bg-[#65D6C8]/10 text-[#FDFDFB] font-medium tracking-wide transition-all duration-400 hover:border-[#65D6C8] hover:bg-[#65D6C8]/20"
          >
            <span className="flex items-center gap-2">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </Link>
      </div>

      {/* Visual Card */}
      <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative"
        >
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
            className={`absolute inset-0 -m-8 bg-gradient-to-br ${program.color} rounded-3xl blur-3xl opacity-30`}
          />
          
          <div className="relative p-12 rounded-2xl border border-[#65D6C8]/30 bg-gradient-to-br from-[#7A6FF0]/10 to-[#65D6C8]/10 backdrop-blur-sm">
            <program.icon className="w-24 h-24 text-[#65D6C8] mb-6" />
            <div className="text-6xl font-bold bg-gradient-to-r from-[#65D6C8] via-[#7A6FF0] to-[#A8F0E4] bg-clip-text text-transparent">
              {index === 0 ? '500+' : index === 1 ? '28' : '50+'}
            </div>
            <div className="text-[#FDFDFB]/60 mt-2">
              {index === 0 ? 'Workshops Conducted' : index === 1 ? 'Global Chapters' : 'Research Publications'}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
