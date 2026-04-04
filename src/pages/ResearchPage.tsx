"use client";

import { motion } from "motion/react";
import { BookOpen, FileText, ArrowRight, Download } from "lucide-react";

export function ResearchPage() {
  const publications = [
    {
      title: "Participatory AI Design: A Framework for Inclusive Development",
      authors: "Chen, S., Patel, P., Berg, T.",
      year: "2026",
      type: "Research Paper",
      abstract: "This paper proposes a framework for involving diverse communities in the design and development of AI systems."
    },
    {
      title: "AI Literacy in Rural Communities: Lessons from Global Chapters",
      authors: "Mohammed, A., Johnson, M.",
      year: "2025",
      type: "Case Study",
      abstract: "An analysis of 50 AI Lunchbox workshops conducted in rural areas across 15 countries."
    },
    {
      title: "Policy Recommendations for Ethical AI Governance",
      authors: "Chen, S., Martinez, J.",
      year: "2025",
      type: "Policy Brief",
      abstract: "Recommendations for policymakers on creating inclusive and human-centered AI regulations."
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
              Research & Policy
            </h1>
            <p className="text-xl md:text-2xl text-[#FDFDFB]/70 leading-relaxed">
              Contributing to the academic and policy discourse on human-centered AI development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Publications */}
      <section className="relative py-24 px-6">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-4">
              Recent Publications
            </h2>
          </motion.div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.01, x: 5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#7A6FF0]/10 to-[#65D6C8]/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative p-8 rounded-xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 backdrop-blur-sm">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="inline-flex px-3 py-1 rounded-full bg-[#7A6FF0]/20 text-[#65D6C8] text-xs mb-3">
                        {pub.type}
                      </div>
                      <h3 className="text-2xl text-[#FDFDFB] mb-2">{pub.title}</h3>
                      <div className="text-[#FDFDFB]/60 text-sm mb-4">
                        {pub.authors} • {pub.year}
                      </div>
                      <p className="text-[#FDFDFB]/70 leading-relaxed">
                        {pub.abstract}
                      </p>
                    </div>

                    <button className="flex-shrink-0 w-12 h-12 rounded-full bg-[#65D6C8]/10 flex items-center justify-center hover:bg-[#65D6C8]/20 transition-all group-hover:scale-110">
                      <Download className="w-5 h-5 text-[#65D6C8]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
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
              Research Areas
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Participatory AI Design",
                description: "Methods for involving diverse communities in AI development processes."
              },
              {
                title: "AI Literacy & Education",
                description: "Effective approaches to teaching AI concepts to non-technical audiences."
              },
              {
                title: "Ethical AI Frameworks",
                description: "Guidelines and policies for responsible AI development and deployment."
              },
              {
                title: "Human-AI Collaboration",
                description: "Understanding how humans and AI systems can work together effectively."
              },
              {
                title: "AI Impact Assessment",
                description: "Measuring the societal effects of AI systems across different communities."
              },
              {
                title: "Inclusive AI Governance",
                description: "Policy recommendations for democratic oversight of AI technologies."
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 backdrop-blur-sm"
              >
                <h3 className="text-xl text-[#FDFDFB] mb-3">{area.title}</h3>
                <p className="text-[#FDFDFB]/70 text-sm leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
