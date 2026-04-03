"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { 
  X, Heart, ArrowRight, ChevronLeft, CreditCard, Mail, 
  User, MapPin, Lock, Check, Sparkles
} from "lucide-react";

/**
 * POLISHED DONATION MODAL - 3-STEP FLOW
 * Elegant, minimal, aurora-inspired, calm and trustworthy
 * Step 1: Select contribution type & amount
 * Step 2: Payment details
 * Step 3: Confirmation
 */

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Donation tiers
const donationTiers = [
  {
    amount: 25,
    label: "Community Member",
    description: "Supports monthly AI workshops",
    color: "#65D6C8"
  },
  {
    amount: 100,
    label: "Chapter Builder",
    description: "Funds local chapter programs",
    color: "#7A6FF0"
  },
  {
    amount: 500,
    label: "System Architect",
    description: "Enables research & policy work",
    color: "#A8F0E4"
  },
];

export function PolishedDonationModal({ isOpen, onClose }: DonationModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    address: ""
  });

  // Reset on open/close
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setSelectedAmount(null);
        setCustomAmount("");
        setShowCustomInput(false);
        setIsAnonymous(false);
        setFormData({
          name: "",
          email: "",
          cardNumber: "",
          expiry: "",
          cvv: "",
          address: ""
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

  const handleTierSelect = (amount: number) => {
    setSelectedAmount(amount);
    setShowCustomInput(false);
    setCustomAmount("");
  };

  const handleCustomAmountClick = () => {
    setShowCustomInput(true);
    setSelectedAmount(null);
  };

  const handleContinue = () => {
    if ((selectedAmount || (customAmount && parseFloat(customAmount) > 0)) && step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
  };

  const finalAmount = selectedAmount || parseFloat(customAmount) || 0;

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
            className="fixed inset-0 z-[70] bg-[#040619]/90 backdrop-blur-[10px]"
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
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-lg mx-6"
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
              className="absolute inset-0 bg-gradient-to-br from-[#65D6C8]/30 via-[#7A6FF0]/20 to-[#A8F0E4]/30 blur-3xl rounded-2xl"
            />

            {/* Content Card */}
            <div className="relative bg-gradient-to-br from-[#111931]/95 to-[#0a0a2e]/95 border border-[#65D6C8]/30 rounded-2xl shadow-[0_0_60px_rgba(101,214,200,0.2)] overflow-hidden">
              {/* Top aurora accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#65D6C8] via-[#7A6FF0] to-[#A8F0E4] opacity-40" />

              {/* Floating particles (subtle) */}
              {step === 3 && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: "100%" }}
                      animate={{ 
                        opacity: [0, 0.4, 0],
                        y: ["100%", "-20%"],
                        x: `${Math.random() * 100}%`
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.4,
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
                {/* Step 1: Select Amount */}
                {step === 1 && (
                  <motion.div
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
                          <Heart className="w-8 h-8 text-[#040619]" fill="currentColor" />
                        </div>
                      </div>
                    </div>

                    {/* Header */}
                    <div className="text-center space-y-3">
                      <h2 className="text-2xl md:text-3xl text-[#FDFDFB]">Support the Continuum</h2>
                      <div className="w-16 h-px mx-auto bg-gradient-to-r from-transparent via-[#65D6C8]/40 to-transparent" />
                      <p className="text-sm text-[#FDFDFB]/70 leading-relaxed max-w-md mx-auto">
                        Every contribution helps us build systems of care, expand access to AI literacy, 
                        and ensure collective intelligence reflects the dignity of all humanity.
                      </p>
                    </div>

                    {/* Donation Tiers */}
                    <div className="space-y-3">
                      {donationTiers.map((tier) => (
                        <motion.button
                          key={tier.amount}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleTierSelect(tier.amount)}
                          className={`group w-full p-5 rounded-xl border transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/50 ${
                            selectedAmount === tier.amount
                              ? "border-[#65D6C8] bg-[#65D6C8]/10 shadow-[0_0_20px_rgba(101,214,200,0.3)]"
                              : "border-[#7A6FF0]/30 bg-[#7A6FF0]/5 hover:border-[#65D6C8]/50 hover:bg-[#65D6C8]/5"
                          }`}
                        >
                          {/* Glow on selection */}
                          {selectedAmount === tier.amount && (
                            <div 
                              className="absolute inset-0 rounded-xl blur-xl opacity-30 pointer-events-none"
                              style={{ background: tier.color }}
                            />
                          )}

                          <div className="relative flex items-center justify-between">
                            <div className="flex-1">
                              <div className={`text-xl font-medium transition-colors ${
                                selectedAmount === tier.amount ? "text-[#65D6C8]" : "text-[#FDFDFB]"
                              }`}>
                                ${tier.amount}
                                <span className="text-sm text-[#FDFDFB]/60 ml-1">/ month</span>
                              </div>
                              <div className="text-sm text-[#FDFDFB]/70 mt-1">{tier.label}</div>
                              <div className="text-xs text-[#FDFDFB]/50 mt-2">{tier.description}</div>
                            </div>
                            <ArrowRight className={`w-5 h-5 transition-all ${
                              selectedAmount === tier.amount 
                                ? "text-[#65D6C8] translate-x-1" 
                                : "text-[#FDFDFB]/40 group-hover:text-[#65D6C8] group-hover:translate-x-1"
                            }`} />
                          </div>
                        </motion.button>
                      ))}
                    </div>

                    {/* Custom Amount */}
                    <div className="pt-2 border-t border-[#65D6C8]/10 space-y-3">
                      {!showCustomInput ? (
                        <motion.button
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={handleCustomAmountClick}
                          className="w-full py-3 rounded-xl border border-[#65D6C8]/40 text-[#65D6C8] text-sm hover:bg-[#65D6C8]/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/50"
                        >
                          Choose Custom Amount
                        </motion.button>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="space-y-2"
                        >
                          <label className="text-xs text-[#FDFDFB]/70">Custom Amount (USD)</label>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FDFDFB]/50">$</span>
                            <input
                              type="number"
                              min="1"
                              step="1"
                              value={customAmount}
                              onChange={(e) => setCustomAmount(e.target.value)}
                              placeholder="Enter amount"
                              className="w-full pl-8 pr-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8]/60 focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/30 transition-all"
                              autoFocus
                            />
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Continue Button */}
                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(101,214,200,0.4)" }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleContinue}
                      disabled={!selectedAmount && (!customAmount || parseFloat(customAmount) <= 0)}
                      className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/50 flex items-center justify-center gap-2"
                    >
                      Continue
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>

                    {/* Narrative anchor */}
                    <div className="text-center pt-2">
                      <p className="text-xs text-[#FDFDFB]/40 italic">
                        "Each gesture, a spark in the continuum."
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Payment Details */}
                {step === 2 && (
                  <motion.div
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
                            opacity: [0.4, 0.6, 0.4],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 bg-gradient-to-br from-[#7A6FF0] to-[#65D6C8] blur-xl"
                        />
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#7A6FF0] to-[#65D6C8] flex items-center justify-center">
                          <Lock className="w-8 h-8 text-[#040619]" />
                        </div>
                      </div>
                    </div>

                    {/* Header */}
                    <div className="text-center space-y-2">
                      <h2 className="text-2xl text-[#FDFDFB]">Complete Your Contribution</h2>
                      <div className="text-sm text-[#65D6C8]">${finalAmount} / month</div>
                    </div>

                    {/* Form */}
                    <div className="space-y-4">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-xs text-[#FDFDFB]/70">
                          <User className="w-3 h-3 text-[#65D6C8]" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
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
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8]/60 focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/30 transition-all"
                        />
                      </div>

                      {/* Card Number */}
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-xs text-[#FDFDFB]/70">
                          <CreditCard className="w-3 h-3 text-[#65D6C8]" />
                          Card Number
                        </label>
                        <input
                          type="text"
                          value={formData.cardNumber}
                          onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8]/60 focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/30 transition-all"
                        />
                      </div>

                      {/* Expiry & CVV */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs text-[#FDFDFB]/70">Expiry Date</label>
                          <input
                            type="text"
                            value={formData.expiry}
                            onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                            placeholder="MM / YY"
                            className="w-full px-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8]/60 focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/30 transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs text-[#FDFDFB]/70">CVV</label>
                          <input
                            type="text"
                            value={formData.cvv}
                            onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                            placeholder="123"
                            className="w-full px-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8]/60 focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/30 transition-all"
                          />
                        </div>
                      </div>

                      {/* Billing Address */}
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-xs text-[#FDFDFB]/70">
                          <MapPin className="w-3 h-3 text-[#65D6C8]" />
                          Billing Address
                        </label>
                        <input
                          type="text"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          placeholder="Street, City, State, ZIP"
                          className="w-full px-4 py-3 rounded-lg bg-[#040619]/50 border border-[#FDFDFB]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8]/60 focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/30 transition-all"
                        />
                      </div>

                      {/* Anonymous Toggle */}
                      <div className="flex items-center gap-3 pt-2">
                        <button
                          onClick={() => setIsAnonymous(!isAnonymous)}
                          className={`w-12 h-6 rounded-full transition-all duration-300 relative focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/50 ${
                            isAnonymous ? "bg-[#65D6C8]" : "bg-[#FDFDFB]/20"
                          }`}
                        >
                          <motion.div
                            animate={{ x: isAnonymous ? 24 : 2 }}
                            transition={{ duration: 0.2 }}
                            className={`absolute top-1 w-4 h-4 rounded-full ${
                              isAnonymous ? "bg-[#040619]" : "bg-[#FDFDFB]"
                            }`}
                          />
                        </button>
                        <span className="text-sm text-[#FDFDFB]/70">Make this contribution anonymously</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleBack}
                        className="px-6 py-3 rounded-xl border border-[#FDFDFB]/20 text-[#FDFDFB] hover:bg-[#FDFDFB]/5 transition-all focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/50 flex items-center gap-2"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Back
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(101,214,200,0.4)" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleContinue}
                        className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/50"
                      >
                        Confirm Contribution
                      </motion.button>
                    </div>

                    {/* Security note */}
                    <div className="flex items-center justify-center gap-2 text-xs text-[#FDFDFB]/50">
                      <Lock className="w-3 h-3" />
                      Secured by Stripe
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Confirmation */}
                {step === 3 && (
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
                        Thank you for supporting the Continuum
                      </h2>
                      <div className="w-16 h-px mx-auto bg-gradient-to-r from-transparent via-[#65D6C8]/40 to-transparent" />
                      <p className="text-sm text-[#FDFDFB]/70 leading-relaxed max-w-md mx-auto">
                        Your contribution strengthens our shared ability to build systems of care, 
                        expand AI literacy, and ensure no one is left behind.
                      </p>
                    </motion.div>

                    {/* Amount Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#65D6C8]/10 to-[#7A6FF0]/10 border border-[#65D6C8]/30"
                    >
                      <Sparkles className="w-4 h-4 text-[#65D6C8]" />
                      <span className="text-[#FDFDFB]">${finalAmount} / month</span>
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-col sm:flex-row gap-3 pt-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 px-6 py-3 rounded-xl border border-[#65D6C8]/40 text-[#65D6C8] hover:bg-[#65D6C8]/10 transition-all focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/50"
                      >
                        View Impact Report
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={onClose}
                        className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-[#65D6C8]/20 to-[#7A6FF0]/20 border border-[#65D6C8]/30 text-[#FDFDFB] hover:from-[#65D6C8]/30 hover:to-[#7A6FF0]/30 transition-all focus:outline-none focus:ring-2 focus:ring-[#65D6C8]/50"
                      >
                        Return Home
                      </motion.button>
                    </motion.div>

                    {/* Narrative anchor */}
                    <div className="pt-6">
                      <p className="text-xs text-[#FDFDFB]/40 italic">
                        "Together, we illuminate the path forward."
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
