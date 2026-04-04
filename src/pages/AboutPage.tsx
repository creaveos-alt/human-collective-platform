"use client";

import { motion } from "motion/react";
import { Link } from "react-router";
import { Heart, Users, Globe, Sparkles, ArrowRight, Target, Eye, Compass } from "lucide-react";

export function AboutPage() {
  return (
    <div className="relative pt-20">
      {/* Hero */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        {/* Aurora background */}
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
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-[#FDFDFB]/70 leading-relaxed">
              We are architects of the future, building bridges between human wisdom 
              and artificial intelligence with care, dignity, and shared purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#040619] via-[#0D1226] to-[#040619]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-6">
                From Acheulean Axes to Artificial Intelligence
              </h2>
              <p className="text-lg text-[#FDFDFB]/70 leading-relaxed mb-6">
                2.6 million years ago, an early human held a hand axe—our species' first tool, 
                carved from stone through patient observation and transmitted across generations. 
                It was more than a cutting implement; it was crystallized thought, a bridge between 
                mind and matter.
              </p>
              <p className="text-lg text-[#FDFDFB]/70 leading-relaxed">
                Today, we stand at another threshold. Artificial intelligence represents humanity's 
                latest tool—one that can augment cognition itself. Human + AI Collective emerged from 
                a simple question: How do we ensure this tool amplifies our collective wisdom rather 
                than diminishing it?
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative p-8 rounded-2xl border border-[#65D6C8]/30 bg-gradient-to-br from-[#7A6FF0]/10 to-[#65D6C8]/10 backdrop-blur-sm">
                <blockquote className="text-xl text-[#FDFDFB]/80 italic leading-relaxed">
                  "The tools we create shape us as much as we shape them. With AI, we have 
                  the opportunity to design systems that amplify our collective intelligence, 
                  wisdom, and care for one another."
                </blockquote>
                <div className="mt-6 text-[#65D6C8] font-medium">
                  — Founding Vision
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section id="mission" className="relative py-24 px-6">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-4">
              Mission & Values
            </h2>
            <p className="text-lg text-[#FDFDFB]/60 max-w-[800px] mx-auto">
              The principles that guide our work and community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={Target}
              title="Our Mission"
              description="To cultivate a global community that shapes the relationship between humanity and artificial intelligence through education, research, and collective action."
              index={0}
            />
            <ValueCard
              icon={Eye}
              title="Our Vision"
              description="A future where AI systems amplify human dignity, wisdom, and opportunity—designed with and for all communities, not just a privileged few."
              index={1}
            />
            <ValueCard
              icon={Compass}
              title="Our Approach"
              description="We believe in participatory design, ethical innovation, and accessible education. Technology should serve humanity, not the other way around."
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#040619] via-[#0D1226] to-[#040619]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-4">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Dignity & Care",
                description: "Every person deserves respect, agency, and the opportunity to shape their technological future."
              },
              {
                title: "Accessibility & Inclusion",
                description: "AI literacy and participation should be available to all communities, not gatekept by privilege."
              },
              {
                title: "Wisdom & Intention",
                description: "We move deliberately, considering the long-term implications of the systems we help create."
              },
              {
                title: "Collective Intelligence",
                description: "The best solutions emerge from diverse perspectives working together toward shared goals."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 backdrop-blur-sm"
              >
                <h3 className="text-2xl text-[#FDFDFB] mb-3">{value.title}</h3>
                <p className="text-[#FDFDFB]/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="relative py-24 px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-6">
              Be Part of the Story
            </h2>
            <p className="text-lg text-[#FDFDFB]/70 leading-relaxed mb-12 max-w-[800px] mx-auto">
              Our story is still being written, and we invite you to help shape the next chapter.
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
              <Link to="/builders">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 rounded-lg border-2 border-[#7A6FF0]/50 bg-[#7A6FF0]/10 text-[#FDFDFB] text-lg font-medium tracking-wide transition-all duration-400 hover:border-[#7A6FF0] hover:bg-[#7A6FF0]/20"
                >
                  Meet the Team
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon: Icon, title, description, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative group"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/20 to-[#65D6C8]/20 rounded-2xl blur-xl"
      />
      
      <div className="relative p-8 rounded-2xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 backdrop-blur-sm h-full">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20 flex items-center justify-center mb-6">
          <Icon className="w-8 h-8 text-[#65D6C8]" />
        </div>
        
        <h3 className="text-2xl text-[#FDFDFB] mb-4">{title}</h3>
        <p className="text-[#FDFDFB]/70 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
