"use client";

import { motion } from "motion/react";

/**
 * BRAND WORDMARK - Human + AI Collective
 * 
 * Typography-based logo with constellation logic.
 * The "+" acts as a node of connection, a point of harmony.
 */

interface BrandWordmarkProps {
  className?: string;
  onClick?: () => void;
  size?: "default" | "large";
  animated?: boolean;
}

export function BrandWordmark({ 
  className = "", 
  onClick,
  size = "default",
  animated = true
}: BrandWordmarkProps) {
  
  const baseSize = size === "large" ? "text-3xl md:text-4xl" : "text-xl md:text-2xl";
  
  return (
    <motion.div
      onClick={onClick}
      initial={animated ? { opacity: 0, x: -20 } : undefined}
      animate={animated ? { opacity: 1, x: 0 } : undefined}
      transition={animated ? { duration: 0.6 } : undefined}
      whileHover={onClick ? { scale: 1.01 } : undefined}
      className={`
        ${baseSize}
        font-semibold 
        tracking-wide
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      <span className="inline-flex items-center gap-2">
        {/* "Human" - Clean white */}
        <span className="text-[#F2F6FF]">
          Human
        </span>
        
        {/* "+" - Constellation Node */}
        <span className="relative inline-flex items-center justify-center">
          {/* Aurora glow behind the + */}
          <motion.span
            animate={animated ? {
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3]
            } : undefined}
            transition={animated ? {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            } : undefined}
            className="absolute inset-0 -m-2 bg-gradient-to-br from-[#65D6C8]/40 to-[#7A6FF0]/40 rounded-full blur-lg"
            aria-hidden="true"
          />
          
          {/* The + symbol itself */}
          <motion.span
            animate={animated ? {
              rotate: [0, 90, 0],
            } : undefined}
            transition={animated ? {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            } : undefined}
            className="relative text-[#65D6C8] font-light tracking-normal"
            style={{
              textShadow: "0 0 20px rgba(101, 214, 200, 0.4)"
            }}
          >
            +
          </motion.span>
        </span>
        
        {/* "AI" - Clean white */}
        <span className="text-[#F2F6FF]">
          AI
        </span>
        
        {/* "Collective" - Subtle aurora gradient (lighter) */}
        <span className="bg-gradient-to-r from-[#8FA8F4]/90 via-[#85D9CD]/85 to-[#9FB5F5]/90 bg-clip-text text-transparent">
          Collective
        </span>
      </span>
    </motion.div>
  );
}

/**
 * Simplified version without animations for static contexts
 */
export function BrandWordmarkStatic({ 
  className = "",
  size = "default"
}: Pick<BrandWordmarkProps, "className" | "size">) {
  
  const baseSize = size === "large" ? "text-3xl md:text-4xl" : "text-xl md:text-2xl";
  
  return (
    <div className={`${baseSize} font-semibold tracking-tight ${className}`}>
      <span className="inline-flex items-center gap-1.5">
        <span className="bg-gradient-to-r from-[#7A6FF0] to-[#65D6C8] bg-clip-text text-transparent">
          Human
        </span>
        <span 
          className="text-[#65D6C8] font-light"
          style={{ textShadow: "0 0 20px rgba(101, 214, 200, 0.4)" }}
        >
          +
        </span>
        <span className="bg-gradient-to-r from-[#65D6C8] to-[#A8F0E4] bg-clip-text text-transparent">
          AI
        </span>
        <span className="bg-gradient-to-r from-[#7A6FF0] via-[#65D6C8] to-[#7A6FF0] bg-clip-text text-transparent">
          Collective
        </span>
      </span>
    </div>
  );
}