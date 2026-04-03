# Framer Integration Guide — Human + AI Collective

**Complete guide to bringing the Aurora Continuum design system into Framer**

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Setup](#project-setup)
3. [Design Tokens](#design-tokens)
4. [Component Migration](#component-migration)
5. [Animation System](#animation-system)
6. [Responsive Design](#responsive-design)
7. [Page Structure](#page-structure)
8. [Best Practices](#best-practices)

---

## Prerequisites

### Required Knowledge
- Basic Framer experience
- Understanding of React components
- Familiarity with Motion (Framer Motion)

### Framer Plan
- **Recommended:** Framer Pro (for custom code components)
- **Minimum:** Framer Free (limited code components)

---

## Project Setup

### Step 1: Create New Framer Project

1. Open Framer
2. Create new project: "Human + AI Collective"
3. Set canvas to **Desktop 1440px**
4. Enable dark mode in settings

### Step 2: Install Dependencies

Framer includes Motion by default. No additional packages needed for core functionality.

### Step 3: Set Up Pages

Create the following pages in Framer:
- **Home** (/)
- **Philosophy** (/philosophy)
- **Programs** (/programs)
- **Chapters** (/chapters)
- **Events** (/events)
- **Builders** (/builders)
- **Join** (/join)

---

## Design Tokens

### Create Design Token Files

#### File: `tokens/colors.ts`

```typescript
export const colors = {
  // Primary
  deepNightIndigo: "#040619",
  warmWhite: "#FDFDFB",
  
  // Accents
  cosmicViolet: "#7A6FF0",
  aquaRadiance: "#65D6C8",
  auroraMist: "#A8F0E4",
  
  // Secondary
  dawnSand: "#F5EDE2",
  shadowBlue: "#1A1F35",
  
  // Opacity variants
  text: {
    onDark: {
      primary: "rgba(253, 253, 251, 1)",
      secondary: "rgba(253, 253, 251, 0.8)",
      tertiary: "rgba(253, 253, 251, 0.6)",
      disabled: "rgba(253, 253, 251, 0.4)"
    },
    onLight: {
      primary: "rgba(4, 6, 25, 1)",
      secondary: "rgba(4, 6, 25, 0.8)",
      tertiary: "rgba(4, 6, 25, 0.6)",
      disabled: "rgba(4, 6, 25, 0.4)"
    }
  }
};

export const gradients = {
  aurora: "linear-gradient(135deg, #7A6FF0 0%, #65D6C8 50%, #A8F0E4 100%)",
  cosmicDepth: "linear-gradient(180deg, #040619 0%, #1A1F35 100%)",
  dawnRise: "linear-gradient(180deg, #FDFDFB 0%, #F5EDE2 50%, #A8F0E4 100%)",
  auroraDrift: "linear-gradient(90deg, transparent 0%, rgba(122, 111, 240, 0.1) 50%, transparent 100%)"
};
```

#### File: `tokens/spacing.ts`

```typescript
export const spacing = {
  // Base units (4px system)
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
  
  // Semantic
  containerPadding: {
    mobile: 16,
    tablet: 32,
    desktop: 80
  },
  sectionPadding: {
    compact: 96,
    standard: 128,
    large: 160
  }
};
```

#### File: `tokens/typography.ts`

```typescript
export const typography = {
  fonts: {
    display: "Tiempos Headline, Georgia, serif",
    heading: "Cooper Hewitt, -apple-system, sans-serif",
    body: "Whitney, -apple-system, sans-serif"
  },
  
  scale: {
    displayXL: {
      size: 96,
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      weight: 400
    },
    displayL: {
      size: 80,
      lineHeight: 1.1,
      letterSpacing: "-0.01em",
      weight: 400
    },
    displayM: {
      size: 64,
      lineHeight: 1.15,
      letterSpacing: "0em",
      weight: 400
    },
    h1: {
      size: 56,
      lineHeight: 1.2,
      letterSpacing: "0em",
      weight: 400
    },
    h2: {
      size: 48,
      lineHeight: 1.25,
      letterSpacing: "0em",
      weight: 400
    },
    h3: {
      size: 40,
      lineHeight: 1.3,
      letterSpacing: "0em",
      weight: 400
    },
    body: {
      size: 16,
      lineHeight: 1.6,
      letterSpacing: "0em",
      weight: 400
    },
    bodyLarge: {
      size: 20,
      lineHeight: 1.6,
      letterSpacing: "0em",
      weight: 400
    },
    caption: {
      size: 12,
      lineHeight: 1.5,
      letterSpacing: "0.08em",
      weight: 400
    }
  },
  
  // Responsive scaling
  responsive: {
    displayXL: {
      desktop: 96,
      tablet: 72,
      mobile: 48
    },
    h1: {
      desktop: 56,
      tablet: 40,
      mobile: 28
    }
  }
};
```

#### File: `tokens/motion.ts`

```typescript
export const motion = {
  duration: {
    instant: 0,
    fast: 0.15,
    normal: 0.3,
    smooth: 0.4,
    slow: 0.6,
    glacial: 1.0
  },
  
  easing: {
    easeOut: [0, 0, 0.2, 1],
    easeInOut: [0.4, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
    linear: [0, 0, 1, 1]
  },
  
  // Common animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] }
  },
  
  slideUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0, 0, 0.2, 1] }
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] }
  }
};

export const scrollAnimations = {
  parallax: {
    offset: ["start start", "end start"],
    y: ["0%", "30%"],
    opacity: [1, 0.8, 0]
  },
  
  fadeInOut: {
    offset: ["start end", "end start"],
    opacity: [0, 1, 1, 0],
    trigger: [0, 0.3, 0.7, 1]
  }
};
```

---

## Component Migration

### Core Reusable Components

#### 1. Aurora Background Layer

**File:** `components/AuroraBackground.tsx`

```typescript
import { motion } from "framer-motion"
import { colors } from "../tokens/colors"

export function AuroraBackground() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      {/* Horizontal drift - Violet */}
      <motion.div
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(90deg, transparent 0%, ${colors.cosmicViolet}1A 50%, transparent 100%)`,
          filter: "blur(60px)",
        }}
      />
      
      {/* Horizontal drift - Aqua */}
      <motion.div
        animate={{
          x: ["100%", "-100%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(90deg, transparent 0%, ${colors.aquaRadiance}1A 50%, transparent 100%)`,
          filter: "blur(60px)",
        }}
      />
    </div>
  )
}
```

**How to use in Framer:**
1. Create new Code Component
2. Paste code above
3. Insert on pages as background layer

---

#### 2. Shimmer Divider

**File:** `components/ShimmerDivider.tsx`

```typescript
import { motion } from "framer-motion"
import { colors } from "../tokens/colors"

interface ShimmerDividerProps {
  width?: string
}

export function ShimmerDivider({ width = "100%" }: ShimmerDividerProps) {
  return (
    <div style={{ 
      position: "relative", 
      width, 
      height: 1, 
      overflow: "hidden" 
    }}>
      {/* Base line */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `${colors.aquaRadiance}1A`
      }} />
      
      {/* Animated shimmer */}
      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2,
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "33.333%",
          background: `linear-gradient(90deg, transparent 0%, ${colors.aquaRadiance}66 50%, transparent 100%)`
        }}
      />
    </div>
  )
}
```

---

#### 3. Gradient Text

**File:** `components/GradientText.tsx`

```typescript
import { motion } from "framer-motion"
import { gradients } from "../tokens/colors"

interface GradientTextProps {
  children: React.ReactNode
  animate?: boolean
}

export function GradientText({ children, animate = true }: GradientTextProps) {
  return (
    <motion.span
      animate={animate ? {
        backgroundPosition: ["0%", "100%", "0%"],
      } : {}}
      transition={animate ? {
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      } : {}}
      style={{
        background: gradients.aurora,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </motion.span>
  )
}
```

---

#### 4. Metric Display

**File:** `components/MetricDisplay.tsx`

```typescript
import { motion } from "framer-motion"
import { GradientText } from "./GradientText"
import { colors } from "../tokens/colors"

interface MetricDisplayProps {
  number: string
  label: string
  description?: string
  delay?: number
}

export function MetricDisplay({ 
  number, 
  label, 
  description,
  delay = 0 
}: MetricDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        position: "relative",
        padding: 24,
      }}
    >
      {/* Number */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          fontSize: 64,
          marginBottom: 12,
        }}
      >
        <GradientText>{number}</GradientText>
      </motion.div>
      
      {/* Label */}
      <h3 style={{
        color: colors.warmWhite,
        fontSize: 18,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        marginBottom: description ? 12 : 0,
      }}>
        {label}
      </h3>
      
      {/* Description */}
      {description && (
        <p style={{
          color: colors.text.onDark.tertiary,
          fontSize: 14,
          lineHeight: 1.6,
        }}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
```

---

#### 5. Primary Button

**File:** `components/PrimaryButton.tsx`

```typescript
import { motion } from "framer-motion"
import { colors } from "../tokens/colors"

interface PrimaryButtonProps {
  label: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "ghost"
}

export function PrimaryButton({ 
  label, 
  onClick, 
  variant = "primary" 
}: PrimaryButtonProps) {
  const styles = {
    primary: {
      background: colors.cosmicViolet,
      color: colors.warmWhite,
      border: "none",
    },
    secondary: {
      background: "transparent",
      color: colors.warmWhite,
      border: `2px solid ${colors.aquaRadiance}`,
    },
    ghost: {
      background: "transparent",
      color: colors.warmWhite,
      border: `1px solid ${colors.warmWhite}33`,
    },
  }
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{
        padding: "16px 48px",
        borderRadius: 9999,
        fontSize: 18,
        cursor: "pointer",
        transition: "all 0.3s ease-out",
        position: "relative",
        overflow: "hidden",
        ...styles[variant],
      }}
    >
      {label}
      
      {/* Hover glow for secondary */}
      {variant === "secondary" && (
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            position: "absolute",
            inset: 0,
            background: `${colors.aquaRadiance}1A`,
            borderRadius: 9999,
            pointerEvents: "none",
          }}
        />
      )}
    </motion.button>
  )
}
```

---

#### 6. Gradient Card

**File:** `components/GradientCard.tsx`

```typescript
import { motion } from "framer-motion"
import { colors } from "../tokens/colors"

interface GradientCardProps {
  gradient: string
  children: React.ReactNode
  height?: number
  delay?: number
}

export function GradientCard({ 
  gradient, 
  children, 
  height = 500,
  delay = 0 
}: GradientCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      style={{
        position: "relative",
        height,
        borderRadius: 16,
        overflow: "hidden",
        background: gradient,
        padding: 32,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
    >
      {/* Background pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        opacity: 0.1,
        backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />
      
      {/* Content */}
      <div style={{ position: "relative", zIndex: 10 }}>
        {children}
      </div>
      
      {/* Hover border glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 16,
          border: `2px solid ${colors.aquaRadiance}`,
          boxShadow: `0 0 40px ${colors.aquaRadiance}66`,
          pointerEvents: "none",
        }}
      />
    </motion.div>
  )
}
```

---

## Animation System

### Scroll-Triggered Animations in Framer

**Method 1: Using whileInView (Recommended)**

```typescript
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] }}
  viewport={{ once: true, margin: "-100px" }}
>
  Content here
</motion.div>
```

**Method 2: Using useScroll for parallax**

```typescript
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function ParallaxSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])
  
  return (
    <motion.div ref={ref} style={{ y, opacity }}>
      Content with parallax
    </motion.div>
  )
}
```

### Sequential Stagger Animation

```typescript
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

<motion.div variants={container} initial="hidden" whileInView="show">
  <motion.div variants={item}>Item 1</motion.div>
  <motion.div variants={item}>Item 2</motion.div>
  <motion.div variants={item}>Item 3</motion.div>
</motion.div>
```

---

## Responsive Design

### Framer Breakpoint Strategy

**Create Responsive Variants:**

1. In Framer, select a frame
2. Click "Breakpoints" in right panel
3. Add breakpoints: Desktop (1440px), Tablet (768px), Mobile (375px)

**Or use CSS media queries in code:**

```typescript
const useResponsive = () => {
  const [breakpoint, setBreakpoint] = useState("desktop")
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setBreakpoint("mobile")
      else if (window.innerWidth < 1024) setBreakpoint("tablet")
      else setBreakpoint("desktop")
    }
    
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  
  return breakpoint
}
```

**Responsive typography:**

```typescript
const fontSize = {
  desktop: 56,
  tablet: 40,
  mobile: 28
}

const breakpoint = useResponsive()

<h1 style={{ fontSize: fontSize[breakpoint] }}>
  Responsive Heading
</h1>
```

---

## Page Structure

### Template: Hero Section

```typescript
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { AuroraBackground } from "../components/AuroraBackground"
import { colors } from "../tokens/colors"

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])
  
  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: colors.deepNightIndigo,
        overflow: "hidden",
      }}
    >
      {/* Aurora background */}
      <AuroraBackground />
      
      {/* Content */}
      <motion.div
        style={{ y, opacity, position: "relative", zIndex: 10, textAlign: "center" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            color: colors.aquaRadiance,
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            marginBottom: 24,
          }}
        >
          Our Philosophy
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          style={{
            fontSize: 80,
            color: colors.warmWhite,
            lineHeight: 1.1,
            marginBottom: 32,
          }}
        >
          Shaping Tomorrow,
          <br />
          Collectively.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          style={{
            fontSize: 20,
            color: colors.text.onDark.secondary,
            maxWidth: 800,
            lineHeight: 1.6,
          }}
        >
          From the first Acheulean handaxe to the age of artificial intelligence —
          we honor the continuum of human thought while building systems of care.
        </motion.p>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: "absolute",
          bottom: 48,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            width: 24,
            height: 40,
            border: `2px solid ${colors.aquaRadiance}66`,
            borderRadius: 20,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <motion.div
            animate={{ 
              y: [0, 16, 0], 
              opacity: [0.4, 0.8, 0.4] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              width: 4,
              height: 12,
              background: colors.aquaRadiance,
              borderRadius: 2,
              marginTop: 8,
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
```

### Template: Grid Section (Metrics/Pillars)

```typescript
import { motion } from "framer-motion"
import { MetricDisplay } from "../components/MetricDisplay"
import { ShimmerDivider } from "../components/ShimmerDivider"
import { colors } from "../tokens/colors"

export function MetricsSection() {
  const metrics = [
    { number: "20K+", label: "Hours with AI", description: "..." },
    { number: "5K+", label: "Community Members", description: "..." },
    { number: "28", label: "Global Chapters", description: "..." },
    { number: "300", label: "Workshops Hosted", description: "..." },
    { number: "1M", label: "Lives Touched", description: "..." },
  ]
  
  return (
    <section style={{
      position: "relative",
      padding: "128px 80px",
      background: colors.deepNightIndigo,
    }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: 80 }}
      >
        <h2 style={{ 
          fontSize: 56, 
          color: colors.warmWhite, 
          marginBottom: 24 
        }}>
          Impact Metrics
        </h2>
      </motion.div>
      
      {/* Divider */}
      <div style={{ marginBottom: 64 }}>
        <ShimmerDivider />
      </div>
      
      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 32,
      }}>
        {metrics.map((metric, i) => (
          <div key={i} style={{ position: "relative" }}>
            {i > 0 && (
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: 1,
                background: `${colors.aquaRadiance}1A`,
              }} />
            )}
            <MetricDisplay
              number={metric.number}
              label={metric.label}
              description={metric.description}
              delay={i * 0.1}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
```

---

## Best Practices

### Performance Optimization

1. **Use `viewport={{ once: true }}`** for animations that only need to play once
2. **Limit blur effects** on mobile devices
3. **Use `will-change` sparingly:**
   ```typescript
   style={{ willChange: "transform" }}
   ```
4. **Prefer transforms over layout properties** (opacity, transform > width, height)

### Accessibility

1. **Add alt text to images:**
   ```typescript
   <img src="..." alt="Descriptive text" />
   ```

2. **Ensure focus states:**
   ```typescript
   <motion.button
     whileFocus={{ outline: `2px solid ${colors.aquaRadiance}` }}
   >
     Button
   </motion.button>
   ```

3. **Respect reduced motion:**
   ```typescript
   const prefersReducedMotion = window.matchMedia(
     "(prefers-reduced-motion: reduce)"
   ).matches
   
   const transition = prefersReducedMotion 
     ? { duration: 0 } 
     : { duration: 0.8 }
   ```

### Code Organization

```
/components
  /core
    - AuroraBackground.tsx
    - ShimmerDivider.tsx
    - GradientText.tsx
  /ui
    - PrimaryButton.tsx
    - GradientCard.tsx
    - MetricDisplay.tsx
  /sections
    - HeroSection.tsx
    - MetricsSection.tsx
    - ThreePillarsSection.tsx

/tokens
  - colors.ts
  - spacing.ts
  - typography.ts
  - motion.ts

/utils
  - responsive.ts
  - animations.ts
```

---

## Publishing from Framer

### Steps to Launch

1. **Connect domain** in Framer settings
2. **Set SEO metadata** for each page:
   - Title
   - Description
   - OG Image
3. **Test responsive breakpoints** thoroughly
4. **Enable analytics** (Framer Analytics or Google Analytics)
5. **Publish!**

### Performance Checklist

- [ ] Optimize all images (WebP format, lazy loading)
- [ ] Minimize code component complexity
- [ ] Test on actual mobile devices
- [ ] Check load time (target < 3s)
- [ ] Validate accessibility (WCAG AA)
- [ ] Test all interactive states
- [ ] Cross-browser testing (Chrome, Safari, Firefox)

---

## Next Steps

1. **Set up design tokens** in Framer project
2. **Create core components** from templates above
3. **Build Home page** using section templates
4. **Create remaining pages** following same structure
5. **Add interactive prototyping** between pages
6. **Test responsive behavior** at all breakpoints
7. **Refine animations** and timing
8. **Launch!**

---

**Questions?** Refer back to DESIGN_SYSTEM.md or explore the existing React components for implementation details.

**Happy building!** 🎨✨
