"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { 
  X, Users, ArrowRight, ChevronDown, Check, Sparkles, Mail, User, Globe
} from "lucide-react";

/**
 * BUILDERS NETWORK MODAL
 * Fully polished application flow for joining the Builders Network
 * Matches the Collective's aurora-driven design system
 */

interface BuildersNetworkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Regions
const regions = [
  "North America",
  "Latin America",
  "Europe",
  "Africa",
  "Middle East",
  "South Asia",
  "East Asia",
  "Oceania"
];

// Areas of Interest
const areasOfInterest = [
  { id: "lunchbox", label: "AI Lunchbox", color: "#65D6C8" },
  { id: "research", label: "Research & Policy", color: "#7A6FF0" },
  { id: "chapters", label: "Community Chapters", color: "#A8F0E4" },
  { id: "product", label: "Product & Infrastructure", color: "#65D6C8" },
  { id: "design", label: "Design & Storytelling", color: "#7A6FF0" },
  { id: "events", label: "Events & Facilitation", color: "#A8F0E4" }
];

export function BuildersNetworkModal({ isOpen, onClose }: BuildersNetworkModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [showRegionDropdown, setShowRegionDropdown] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    region: "",
    interests: [] as string[],
    contribution: ""
  });

  // Reset on open/close
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep('form');
        setFormData({
          name: "",
          email: "",
          region: "",
          interests: [],
          contribution: ""
        });
      }, 300);
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleInterest = (id: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter(i => i !== id)
        : [...prev.interests, id]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const isFormValid = formData.name && formData.email && formData.region && 
                       formData.interests.length > 0 && formData.contribution;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dimmed backdrop with radial vignette */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[70] bg-[#040619]/90 backdrop-blur-[8px]"
            style={{
              backgroundImage: "radial-gradient(circle at 50% 50%, transparent 0%, rgba(4,6,25,0.6) 100%)"
            }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-2xl mx-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Aurora ambient glow */}
            <motion.div
              animate={{
                opacity: [0.15, 0.25, 0.15],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-br from-[#65D6C8]/30 via-[#7A6FF0]/20 to-[#A8F0E4]/30 blur-3xl rounded-2xl pointer-events-none"
            />

            {/* Content Card */}
            <div className="relative bg-gradient-to-br from-[#111931]/95 to-[#0a0a2e]/95 border border-[#65D6C8]/30 rounded-2xl shadow-[0_0_60px_rgba(101,214,200,0.2)] overflow-hidden">
              {/* Top aurora accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#65D6C8] via-[#7A6FF0] to-[#A8F0E4] opacity-40" />

              {/* Floating particles (on success) */}
              {step === 'success' && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: "100%" }}
                      animate={{ 
                        opacity: [0, 0.5, 0],
                        y: ["100%", "-20%"],
                        x: `${Math.random() * 100}%`
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeOut"
                      }}
                      className="absolute w-1 h-1 rounded-full bg-[#65D6C8]"
                    />
                  ))}
                </div>
              )}

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full text-[#FDFDFB]/60 hover:text-[#65D6C8] hover:bg-[#65D6C8]/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/50"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="p-8 space-y-8">
                {/* Form Step */}
                {step === 'form' && (
                  <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Icon */}
                    <div className="flex justify-center">
                      <div className="relative">
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.4, 0.6, 0.4],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] blur-xl"
                        />
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#65D6C8] to-[#7A6FF0] flex items-center justify-center">
                          <Users className="w-8 h-8 text-[#040619]" />
                        </div>
                      </div>
                    </div>

                    {/* Header */}
                    <div className="text-center space-y-3">
                      <h2 className="text-2xl md:text-3xl text-[#FDFDFB]">Join the Builders Network</h2>
                      <div className="w-16 h-px mx-auto bg-gradient-to-r from-transparent via-[#65D6C8]/40 to-transparent" />
                      <p className="text-sm text-[#FDFDFB]/70 leading-relaxed max-w-lg mx-auto">
                        Collaborate with thinkers, builders, researchers, and community leaders around the world.
                      </p>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-5">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-xs text-[#FDFDFB]/70">
                          <User className="w-3 h-3 text-[#65D6C8]" />
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8]/60 focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/30 transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-xs text-[#FDFDFB]/70">
                          <Mail className="w-3 h-3 text-[#65D6C8]" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8]/60 focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/30 transition-all"
                        />
                      </div>

                      {/* Region Dropdown */}
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-xs text-[#FDFDFB]/70">
                          <Globe className="w-3 h-3 text-[#65D6C8]" />
                          Region
                        </label>
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setShowRegionDropdown(!showRegionDropdown)}
                            className="w-full px-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] text-left flex items-center justify-between focus:border-[#65D6C8]/60 focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/30 transition-all"
                          >
                            <span className={formData.region ? "text-[#FDFDFB]" : "text-[#FDFDFB]/40"}>
                              {formData.region || "Select your region"}
                            </span>
                            <ChevronDown className={`w-4 h-4 text-[#FDFDFB]/60 transition-transform ${
                              showRegionDropdown ? "rotate-180" : ""
                            }`} />
                          </button>

                          {/* Dropdown Menu */}
                          <AnimatePresence>
                            {showRegionDropdown && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 right-0 mt-2 p-2 rounded-lg bg-[#111931]/98 backdrop-blur-xl border border-[#65D6C8]/30 shadow-[0_0_30px_rgba(101,214,200,0.2)] max-h-60 overflow-y-auto z-10"
                              >
                                {regions.map((region) => (
                                  <button
                                    key={region}
                                    type="button"
                                    onClick={() => {
                                      setFormData({ ...formData, region });
                                      setShowRegionDropdown(false);
                                    }}
                                    className={`w-full px-3 py-2 rounded-lg text-left text-sm transition-all ${
                                      formData.region === region
                                        ? "bg-[#65D6C8]/20 text-[#65D6C8]"
                                        : "text-[#FDFDFB] hover:bg-[#FDFDFB]/5"
                                    }`}
                                  >
                                    {region}
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Areas of Interest (Multi-select chips) */}
                      <div className="space-y-3">
                        <label className="text-xs text-[#FDFDFB]/70">
                          Area(s) of Interest
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {areasOfInterest.map((area) => (
                            <motion.button
                              key={area.id}
                              type="button"
                              onClick={() => toggleInterest(area.id)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/50 ${
                                formData.interests.includes(area.id)
                                  ? "bg-gradient-to-r from-[#65D6C8]/20 to-[#7A6FF0]/20 border border-[#65D6C8]/40 text-[#65D6C8]"
                                  : "bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB]/70 hover:border-[#65D6C8]/30"
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                {formData.interests.includes(area.id) && (
                                  <Check className="w-3 h-3" />
                                )}
                                {area.label}
                              </span>
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Contribution Intent */}
                      <div className="space-y-2">
                        <label className="text-xs text-[#FDFDFB]/70">
                          How would you like to contribute to the Collective?
                        </label>
                        <textarea
                          required
                          value={formData.contribution}
                          onChange={(e) => setFormData({ ...formData, contribution: e.target.value })}
                          placeholder="Share your interests, skills, or ideas..."
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8]/60 focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/30 transition-all resize-none"
                        />
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={onClose}
                        className="px-6 py-3 rounded-xl text-[#FDFDFB]/70 hover:text-[#FDFDFB] hover:bg-[#FDFDFB]/5 transition-all focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/50"
                      >
                        Back
                      </motion.button>
                      
                      <motion.button
                        type="submit"
                        whileHover={isFormValid ? { scale: 1.02, boxShadow: "0 0 30px rgba(101,214,200,0.4)" } : {}}
                        whileTap={isFormValid ? { scale: 0.98 } : {}}
                        disabled={!isFormValid}
                        className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/50 flex items-center justify-center gap-2"
                      >
                        Submit Application
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>

                    {/* Narrative anchor */}
                    <div className="text-center pt-2">
                      <p className="text-xs text-[#FDFDFB]/40 italic">
                        "Every builder adds a thread to the continuum."
                      </p>
                    </div>
                  </motion.form>
                )}

                {/* Success Step */}
                {step === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6 py-4 text-center"
                  >
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2, duration: 0.6 }}
                      className="flex justify-center"
                    >
                      <div className="relative">
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 bg-gradient-to-br from-[#65D6C8] to-[#A8F0E4] blur-2xl"
                        />
                        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#65D6C8] to-[#A8F0E4] flex items-center justify-center">
                          <Check className="w-10 h-10 text-[#040619]" strokeWidth={3} />
                        </div>
                      </div>
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-4"
                    >
                      <h2 className="text-2xl md:text-3xl text-[#FDFDFB]">
                        Welcome to the Builders Network
                      </h2>
                      <div className="w-16 h-px mx-auto bg-gradient-to-r from-transparent via-[#65D6C8]/40 to-transparent" />
                      <p className="text-sm text-[#FDFDFB]/70 leading-relaxed max-w-md mx-auto">
                        You'll receive an email soon with next steps. Thank you for contributing your spark to the continuum.
                      </p>
                    </motion.div>

                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#65D6C8]/10 to-[#7A6FF0]/10 border border-[#65D6C8]/30"
                    >
                      <Sparkles className="w-4 h-4 text-[#65D6C8]" />
                      <span className="text-[#FDFDFB]">{formData.name}</span>
                    </motion.div>

                    {/* Selected Interests */}
                    {formData.interests.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-2"
                      >
                        <p className="text-xs text-[#FDFDFB]/50">Your areas of interest:</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {formData.interests.map((id) => {
                            const area = areasOfInterest.find(a => a.id === id);
                            return (
                              <span 
                                key={id}
                                className="px-3 py-1 rounded-full bg-[#65D6C8]/10 border border-[#65D6C8]/30 text-xs text-[#65D6C8]"
                              >
                                {area?.label}
                              </span>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                    {/* Action */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="pt-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(101,214,200,0.4)" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={onClose}
                        className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/50"
                      >
                        Return Home
                      </motion.button>
                    </motion.div>

                    {/* Narrative anchor */}
                    <div className="pt-6">
                      <p className="text-xs text-[#FDFDFB]/40 italic">
                        "Together, we build the future we wish to see."
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
