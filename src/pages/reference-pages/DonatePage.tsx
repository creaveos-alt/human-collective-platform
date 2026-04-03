"use client";

import { motion } from "motion/react";
import { Heart, Check, CreditCard } from "lucide-react";
import { useState } from "react";

export function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [submitted, setSubmitted] = useState(false);

  const suggestedAmounts = [25, 50, 100, 250, 500, 1000];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const amount = selectedAmount || (customAmount ? parseInt(customAmount) : 0);

  return (
    <div className="relative pt-20">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
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
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20 flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-[#65D6C8]" />
            </div>

            <h1 className="text-5xl md:text-7xl text-[#FDFDFB] mb-8 leading-tight">
              Support the Collective
            </h1>
            <p className="text-xl md:text-2xl text-[#FDFDFB]/70 leading-relaxed">
              Your contribution helps us democratize AI literacy and build inclusive systems 
              for collective intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {!submitted ? (
        <>
          {/* Donation Form */}
          <section className="relative py-24 px-6">
            <div className="max-w-[800px] mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="p-8 md:p-12 rounded-2xl border border-[#65D6C8]/30 bg-gradient-to-br from-[#7A6FF0]/10 to-[#65D6C8]/10 backdrop-blur-sm"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Frequency Toggle */}
                  <div>
                    <label className="block text-sm text-[#FDFDFB]/80 mb-4">Donation Frequency</label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setFrequency("once")}
                        className={`flex-1 px-6 py-3 rounded-lg border-2 font-medium transition-all ${
                          frequency === "once"
                            ? "border-[#65D6C8] bg-[#65D6C8]/10 text-[#FDFDFB]"
                            : "border-[#65D6C8]/20 bg-transparent text-[#FDFDFB]/60"
                        }`}
                      >
                        One-Time
                      </button>
                      <button
                        type="button"
                        onClick={() => setFrequency("monthly")}
                        className={`flex-1 px-6 py-3 rounded-lg border-2 font-medium transition-all ${
                          frequency === "monthly"
                            ? "border-[#65D6C8] bg-[#65D6C8]/10 text-[#FDFDFB]"
                            : "border-[#65D6C8]/20 bg-transparent text-[#FDFDFB]/60"
                        }`}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div>
                    <label className="block text-sm text-[#FDFDFB]/80 mb-4">Select Amount</label>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {suggestedAmounts.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(amt);
                            setCustomAmount("");
                          }}
                          className={`px-6 py-4 rounded-lg border-2 font-medium transition-all ${
                            selectedAmount === amt
                              ? "border-[#65D6C8] bg-[#65D6C8]/10 text-[#FDFDFB]"
                              : "border-[#65D6C8]/20 bg-transparent text-[#FDFDFB]/60 hover:border-[#65D6C8]/40"
                          }`}
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>

                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FDFDFB]/60">$</span>
                      <input
                        type="number"
                        placeholder="Custom amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                        className="w-full pl-8 pr-4 py-4 rounded-lg bg-[#040619] border border-[#65D6C8]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Payment Details */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-[#FDFDFB]/80 mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#040619] border border-[#65D6C8]/20 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-[#FDFDFB]/80 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#040619] border border-[#65D6C8]/20 text-[#FDFDFB] focus:border-[#65D6C8] focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-[#FDFDFB]/80 mb-2">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#040619] border border-[#65D6C8]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8] focus:outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-[#FDFDFB]/80 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-[#040619] border border-[#65D6C8]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8] focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#FDFDFB]/80 mb-2">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-[#040619] border border-[#65D6C8]/20 text-[#FDFDFB] placeholder:text-[#FDFDFB]/40 focus:border-[#65D6C8] focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={!amount}
                    className="w-full px-8 py-5 rounded-lg bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] text-lg font-medium tracking-wide transition-all duration-400 hover:shadow-[0_0_40px_rgba(101,214,200,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Heart className="w-5 h-5" />
                      Donate {amount ? `$${amount}` : ""} {frequency === "monthly" ? "/ month" : ""}
                    </span>
                  </motion.button>

                  <p className="text-center text-sm text-[#FDFDFB]/60">
                    Your donation is tax-deductible. All contributions go directly to our programs.
                  </p>
                </form>
              </motion.div>
            </div>
          </section>

          {/* Impact Information */}
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
                  Your Impact
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    amount: "$25",
                    impact: "Provides AI literacy materials for 5 workshop participants"
                  },
                  {
                    amount: "$100",
                    impact: "Sponsors a full AI Lunchbox workshop in a rural community"
                  },
                  {
                    amount: "$500",
                    impact: "Supports the launch of a new chapter in an underserved region"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 rounded-xl border border-[#65D6C8]/20 bg-gradient-to-br from-[#7A6FF0]/5 to-[#65D6C8]/5 backdrop-blur-sm text-center"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] bg-clip-text text-transparent mb-4">
                      {item.amount}
                    </div>
                    <p className="text-[#FDFDFB]/70 leading-relaxed">{item.impact}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="relative py-24 px-6">
          <div className="max-w-[800px] mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center p-12 rounded-2xl border border-[#65D6C8]/30 bg-gradient-to-br from-[#7A6FF0]/10 to-[#65D6C8]/10 backdrop-blur-sm"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#65D6C8]/20 to-[#7A6FF0]/20 flex items-center justify-center mx-auto mb-8">
                <Check className="w-10 h-10 text-[#65D6C8]" />
              </div>

              <h2 className="text-4xl text-[#FDFDFB] mb-4">Thank You!</h2>
              <p className="text-lg text-[#FDFDFB]/70 leading-relaxed mb-8">
                Your generous contribution of <span className="text-[#65D6C8] font-semibold">${amount}</span> will 
                help us continue democratizing AI literacy and building systems of collective intelligence.
              </p>

              <p className="text-sm text-[#FDFDFB]/60">
                You'll receive a confirmation email shortly with your tax receipt.
              </p>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
