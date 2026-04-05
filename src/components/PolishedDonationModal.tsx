"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { X, Heart, ArrowRight, ChevronLeft, Check } from "lucide-react";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const presetAmounts = [25, 50, 100, 250, 500, 1000];

const impactCues = [
  { amount: 25, text: "Supports workshop materials" },
  { amount: 100, text: "Helps fund a local session" },
  { amount: 500, text: "Supports chapter growth" },
];

export function PolishedDonationModal({ isOpen, onClose }: DonationModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setStep(1);
        setSelectedAmount(null);
        setCustomAmount("");
        setFrequency("one-time");
        setFormData({
          name: "",
          email: "",
          cardNumber: "",
          expiry: "",
          cvv: "",
        });
      }, 250);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onEsc);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEsc);
    };
  }, [isOpen, onClose]);

  const finalAmount = selectedAmount || Number(customAmount) || 0;

  const canContinueFromStep1 = finalAmount > 0;
  const canContinueFromStep2 =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.cardNumber.trim() &&
    formData.expiry.trim() &&
    formData.cvv.trim();

  const handlePrimary = () => {
    if (step === 1 && canContinueFromStep1) setStep(2);
    if (step === 2 && canContinueFromStep2) setStep(3);
    if (step === 3) onClose();
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
    if (step === 3) setStep(2);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[70] bg-[#040619]/88 backdrop-blur-[10px]"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.985 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[71] flex items-center justify-center p-4 sm:p-6"
          >
            <div
              className="relative w-full max-w-5xl rounded-[34px] border border-[#65D6C8]/24 bg-gradient-to-br from-[#111931]/96 to-[#0A1025]/96 shadow-[0_0_80px_rgba(101,214,200,0.12)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(122,111,240,0.14),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(101,214,200,0.10),transparent_28%)]" />

              <div className="relative px-6 sm:px-10 pt-7 sm:pt-8 pb-0">
                <div className="flex items-start justify-between gap-6">
                  <div className="pr-10">
                    <div className="flex items-center gap-3 mb-3">
                      <Heart className="w-4 h-4 text-[#65D6C8]" />
                      <span className="text-[11px] tracking-[0.24em] uppercase text-[#7A6FF0]">
                        Support the Collective
                      </span>
                    </div>
                    <h2 className="text-[2rem] sm:text-[2.6rem] leading-tight text-[#FDFDFB]">
                      Contribute to the work
                    </h2>
                    <p className="mt-3 max-w-3xl text-[#FDFDFB]/72 text-base sm:text-[1.05rem] leading-8">
                      Help expand AI literacy, strengthen local chapters, and support the systems work
                      that makes the Collective durable, practical, and human-centered.
                    </p>
                  </div>

                  <button
                    onClick={onClose}
                    className="shrink-0 p-2 rounded-full text-[#FDFDFB]/65 hover:text-[#FDFDFB] transition-all"
                    aria-label="Close modal"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="mt-7 h-px w-full bg-gradient-to-r from-[#65D6C8]/30 via-[#7A6FF0]/20 to-transparent" />
              </div>

              <div className="relative p-6 sm:p-8">
                <div className="rounded-[28px] border border-[#65D6C8]/16 bg-[#060B1D]/88 px-5 py-5 sm:px-8 sm:py-8">
                  {step === 1 && (
                    <div className="space-y-7">
                      <div>
                        <p className="text-[#FDFDFB] text-lg sm:text-xl mb-2">
                          Choose your contribution
                        </p>
                        <p className="text-[#FDFDFB]/60 text-sm sm:text-base">
                          Select a preset amount, enter a custom contribution, and see what key amounts can help support.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <button
                          onClick={() => setFrequency("one-time")}
                          className={`h-14 rounded-[18px] border transition-all ${
                            frequency === "one-time"
                              ? "border-[#65D6C8] bg-[#0E1731] text-[#FDFDFB]"
                              : "border-[#65D6C8]/22 bg-[#040919] text-[#FDFDFB]/65 hover:border-[#65D6C8]/40"
                          }`}
                        >
                          One-Time
                        </button>
                        <button
                          onClick={() => setFrequency("monthly")}
                          className={`h-14 rounded-[18px] border transition-all ${
                            frequency === "monthly"
                              ? "border-[#65D6C8] bg-[#0E1731] text-[#FDFDFB]"
                              : "border-[#65D6C8]/22 bg-[#040919] text-[#FDFDFB]/65 hover:border-[#65D6C8]/40"
                          }`}
                        >
                          Monthly
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {impactCues.map((cue) => (
                          <div
                            key={cue.amount}
                            className="rounded-[18px] border border-[#7A6FF0]/18 bg-[#0B1127]/62 px-4 py-4"
                          >
                            <div className="text-[#FDFDFB] text-lg mb-1">${cue.amount}</div>
                            <div className="text-[#FDFDFB]/58 text-sm leading-6">{cue.text}</div>
                          </div>
                        ))}
                      </div>

                      <div>
                        <label className="block text-sm text-[#FDFDFB]/72 mb-3">Preset amounts</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {presetAmounts.map((amount) => {
                            const active = selectedAmount === amount;
                            return (
                              <button
                                key={amount}
                                onClick={() => {
                                  setSelectedAmount(amount);
                                  setCustomAmount("");
                                }}
                                className={`h-14 rounded-[18px] border transition-all ${
                                  active
                                    ? "border-[#65D6C8] bg-[#0E1731] text-[#FDFDFB]"
                                    : "border-[#65D6C8]/22 bg-[#040919] text-[#FDFDFB]/75 hover:border-[#65D6C8]/40"
                                }`}
                              >
                                ${amount}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="pt-1">
                        <label className="block text-sm text-[#FDFDFB]/72 mb-3">Custom amount</label>
                        <div className="relative">
                          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#FDFDFB]/45">$</span>
                          <input
                            value={customAmount}
                            onChange={(e) => {
                              setCustomAmount(e.target.value.replace(/[^0-9.]/g, ""));
                              setSelectedAmount(null);
                            }}
                            placeholder="Enter custom amount"
                            className="w-full h-14 rounded-[18px] border border-[#65D6C8]/22 bg-[#040919] pl-10 pr-4 text-[#FDFDFB] placeholder:text-[#FDFDFB]/28 focus:outline-none focus:border-[#65D6C8]/55"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-7">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[#FDFDFB] text-lg sm:text-xl mb-2">Your details</p>
                          <p className="text-[#FDFDFB]/60 text-sm sm:text-base">
                            Completing {frequency === "monthly" ? "monthly" : "one-time"} contribution of <span className="text-[#65D6C8]">${finalAmount}</span>
                          </p>
                        </div>
                        <button
                          onClick={handleBack}
                          className="inline-flex items-center gap-2 text-sm text-[#FDFDFB]/65 hover:text-[#FDFDFB]"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          Back
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field
                          label="Full Name"
                          value={formData.name}
                          onChange={(value) => setFormData({ ...formData, name: value })}
                          placeholder="Your full name"
                        />
                        <Field
                          label="Email Address"
                          value={formData.email}
                          onChange={(value) => setFormData({ ...formData, email: value })}
                          placeholder="you@example.com"
                        />
                      </div>

                      <Field
                        label="Card Number"
                        value={formData.cardNumber}
                        onChange={(value) => setFormData({ ...formData, cardNumber: value })}
                        placeholder="1234 5678 9012 3456"
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field
                          label="Expiry Date"
                          value={formData.expiry}
                          onChange={(value) => setFormData({ ...formData, expiry: value })}
                          placeholder="MM/YY"
                        />
                        <Field
                          label="CVV"
                          value={formData.cvv}
                          onChange={(value) => setFormData({ ...formData, cvv: value })}
                          placeholder="123"
                        />
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="py-6 sm:py-10 text-center">
                      <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0]">
                        <Check className="w-10 h-10 text-[#040619]" />
                      </div>
                      <h3 className="text-[2rem] sm:text-[2.4rem] text-[#FDFDFB] mb-4">
                        Thank you
                      </h3>
                      <p className="max-w-2xl mx-auto text-[#FDFDFB]/68 text-base sm:text-lg leading-8">
                        Your {frequency === "monthly" ? "monthly" : "one-time"} contribution of ${finalAmount} helps extend practical learning, support local chapter growth, and strengthen the broader work of the Collective.
                      </p>
                    </div>
                  )}

                  <div className="mt-8 pt-6 border-t border-[#65D6C8]/12 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                    <div className="text-sm text-[#FDFDFB]/42 italic">
                      “Small contributions can widen the continuum.”
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                      {step !== 1 && step !== 3 && (
                        <button
                          onClick={handleBack}
                          className="h-14 px-7 rounded-[18px] border border-[#65D6C8]/20 text-[#FDFDFB] hover:border-[#65D6C8]/40 transition-all"
                        >
                          Back
                        </button>
                      )}

                      <button
                        onClick={handlePrimary}
                        disabled={
                          (step === 1 && !canContinueFromStep1) ||
                          (step === 2 && !canContinueFromStep2)
                        }
                        className="h-14 px-8 rounded-[18px] bg-gradient-to-r from-[#65D6C8] to-[#7A6FF0] text-[#040619] font-medium inline-flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        {step === 1 && "Continue"}
                        {step === 2 && "Confirm Contribution"}
                        {step === 3 && "Close"}
                        {step !== 3 && <ArrowRight className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm text-[#FDFDFB]/72 mb-3">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-14 rounded-[18px] border border-[#65D6C8]/22 bg-[#040919] px-4 text-[#FDFDFB] placeholder:text-[#FDFDFB]/28 focus:outline-none focus:border-[#65D6C8]/55"
      />
    </label>
  );
}
