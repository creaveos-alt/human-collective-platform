"use client";

import { motion } from "motion/react";
import { BookOpen, FileText, Video, Download, ExternalLink } from "lucide-react";

export function ResourcesPage() {
  const categories = [
    {
      title: "Learning Materials",
      icon: BookOpen,
      resources: [
        { title: "Introduction to AI", type: "PDF Guide", size: "2.5 MB" },
        { title: "AI Ethics Primer", type: "PDF Guide", size: "1.8 MB" },
        { title: "Participatory AI Design Toolkit", type: "PDF Toolkit", size: "5.2 MB" }
      ]
    },
    {
      title: "Workshop Templates",
      icon: FileText,
      resources: [
        { title: "AI Lunchbox Facilitator Guide", type: "PDF Template", size: "3.1 MB" },
        { title: "Community Discussion Framework", type: "PDF Template", size: "1.2 MB" },
        { title: "Chapter Starter Kit", type: "ZIP Package", size: "12 MB" }
      ]
    },
    {
      title: "Video Resources",
      icon: Video,
      resources: [
        { title: "What is Collective Intelligence?", type: "Video (15 min)", size: "Stream" },
        { title: "Starting Your AI Journey", type: "Video (20 min)", size: "Stream" },
        { title: "Building Inclusive AI Systems", type: "Video (30 min)", size: "Stream" }
      ]
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
              Resources
            </h1>
            <p className="text-xl md:text-2xl text-[#FDFDFB]/70 leading-relaxed">
              Free educational materials, toolkits, and guides to support your AI literacy journey 
              and community initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="relative py-24 px-6">
        <div className="max-w-[1440px] mx-auto space-y-16">
          {categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20 flex items-center justify-center">
                  <category.icon className="w-7 h-7 text-[#65D6C8]" />
                </div>
                <h2 className="text-3xl md:text-4xl text-[#FDFDFB]">
                  {category.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.resources.map((resource, resIndex) => (
                  <motion.div
                    key={resIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: resIndex * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/20 to-[#65D6C8]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative p-6 rounded-xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 backdrop-blur-sm h-full">
                      <h3 className="text-lg text-[#FDFDFB] mb-3">{resource.title}</h3>
                      
                      <div className="flex items-center justify-between text-sm text-[#FDFDFB]/60 mb-4">
                        <span>{resource.type}</span>
                        <span>{resource.size}</span>
                      </div>

                      <button className="flex items-center gap-2 text-[#65D6C8] text-sm font-medium group-hover:gap-3 transition-all">
                        <Download className="w-4 h-4" />
                        {resource.type.includes("Video") ? "Watch" : "Download"}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#040619] via-[#0D1226] to-[#040619]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-[#FDFDFB]/60">
              Insights from our community and research team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "The Future of Human-AI Collaboration",
                excerpt: "Exploring how participatory design can create AI systems that truly serve communities.",
                date: "March 2026",
                readTime: "8 min read"
              },
              {
                title: "AI Literacy Beyond Tech: Stories from Rural Workshops",
                excerpt: "How diverse communities are engaging with AI education in unexpected ways.",
                date: "February 2026",
                readTime: "6 min read"
              },
              {
                title: "Building Ethical AI Systems: A Practitioner's Guide",
                excerpt: "Practical frameworks for developers, designers, and policymakers.",
                date: "January 2026",
                readTime: "12 min read"
              },
              {
                title: "The Acheulean Mindset: Learning from 2.6 Million Years of Tool-Making",
                excerpt: "What ancient technology teaches us about designing modern AI systems.",
                date: "December 2025",
                readTime: "10 min read"
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0]/20 to-[#65D6C8]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative p-8 rounded-xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 backdrop-blur-sm h-full">
                  <div className="flex items-center gap-3 text-sm text-[#FDFDFB]/60 mb-4">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-2xl text-[#FDFDFB] mb-3">{article.title}</h3>
                  <p className="text-[#FDFDFB]/70 mb-6">{article.excerpt}</p>

                  <div className="flex items-center gap-2 text-[#65D6C8] text-sm font-medium group-hover:gap-3 transition-all">
                    Read Article
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-24 px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl text-[#FDFDFB] mb-6">
              Get New Resources First
            </h2>
            <p className="text-lg text-[#FDFDFB]/70 leading-relaxed mb-12 max-w-[800px] mx-auto">
              Subscribe to receive new learning materials, research publications, and community insights.
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
