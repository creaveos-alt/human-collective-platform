# Framer Quick Start Guide

**Get the Human + AI Collective design system running in Framer in under 30 minutes**

---

## 🚀 30-Minute Setup

### Step 1: Create Project (2 min)

1. Open Framer
2. Click "New Project"
3. Name it: "Human + AI Collective"
4. Select "Blank Canvas"
5. Set canvas size: **1440px**

---

### Step 2: Import Design Tokens (5 min)

Create a new **Code File** called `tokens.ts`:

```typescript
// Copy this entire block into Framer Code File

export const colors = {
  deepNightIndigo: "#040619",
  warmWhite: "#FDFDFB",
  cosmicViolet: "#7A6FF0",
  aquaRadiance: "#65D6C8",
  auroraMist: "#A8F0E4",
  dawnSand: "#F5EDE2",
  shadowBlue: "#1A1F35"
}

export const gradients = {
  aurora: "linear-gradient(135deg, #7A6FF0 0%, #65D6C8 50%, #A8F0E4 100%)"
}

export const spacing = {
  section: 128,
  container: 80,
  card: 32,
  gap: 24
}
```

**How to create Code File in Framer:**
1. Click "Assets" panel (left sidebar)
2. Click "+" → "Code File"
3. Name it `tokens`
4. Paste code above
5. Done!

---

### Step 3: Create First Component - Aurora Background (5 min)

Create a new **Code Component** called `AuroraBackground`:

```typescript
import { motion } from "framer-motion"
import { colors } from "./tokens"

export default function AuroraBackground() {
  return (
    <div style={{ 
      position: "absolute", 
      inset: 0, 
      overflow: "hidden",
      pointerEvents: "none" 
    }}>
      {/* Violet drift */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(90deg, transparent, ${colors.cosmicViolet}1A, transparent)`,
          filter: "blur(60px)",
        }}
      />
      
      {/* Aqua drift */}
      <motion.div
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(90deg, transparent, ${colors.aquaRadiance}1A, transparent)`,
          filter: "blur(60px)",
        }}
      />
    </div>
  )
}
```

**How to use:**
1. Drag component onto canvas
2. Set to "absolute" positioning
3. Stretch to full screen (0,0,0,0)
4. Set Z-index to 1
5. Place behind content

---

### Step 4: Create Hero Section (10 min)

Create a **Frame** on canvas:
- Width: 1440px
- Height: 100vh (use viewport height)
- Background: `#040619`

Add **AuroraBackground** component inside

Create **Code Component** for Hero Content:

```typescript
import { motion } from "framer-motion"
import { colors } from "./tokens"

export default function HeroContent() {
  return (
    <div style={{
      position: "relative",
      zIndex: 10,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "0 80px",
      maxWidth: 1280,
      margin: "0 auto"
    }}>
      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          color: colors.aquaRadiance,
          fontSize: 12,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          marginBottom: 24
        }}
      >
        Our Philosophy
      </motion.p>
      
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        style={{
          fontSize: 80,
          color: colors.warmWhite,
          lineHeight: 1.1,
          marginBottom: 32,
          fontFamily: "Georgia, serif"
        }}
      >
        Shaping Tomorrow,
        <br />
        Collectively.
      </motion.h1>
      
      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        style={{
          fontSize: 20,
          color: `${colors.warmWhite}CC`,
          maxWidth: 800,
          lineHeight: 1.6
        }}
      >
        From the first tool to collective intelligence —
        we honor the continuum while building systems of care.
      </motion.p>
    </div>
  )
}
```

**Layout structure:**
```
Frame (Hero Container)
├─ AuroraBackground (Code Component)
├─ HeroContent (Code Component) ← centered
```

---

### Step 5: Add Button Component (5 min)

Create **Code Component** called `PrimaryButton`:

```typescript
import { motion } from "framer-motion"
import { colors } from "./tokens"

interface Props {
  label: string
  onClick?: () => void
}

export default function PrimaryButton({ label = "Click me" }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        padding: "16px 48px",
        borderRadius: 9999,
        background: colors.cosmicViolet,
        color: colors.warmWhite,
        fontSize: 18,
        border: "none",
        cursor: "pointer",
        fontWeight: 500
      }}
    >
      {label}
    </motion.button>
  )
}
```

**How to use:**
1. Drag onto canvas
2. In properties panel, set `label` to your text
3. Style will automatically apply

---

### Step 6: Create Gradient Text Component (3 min)

```typescript
import { motion } from "framer-motion"
import { gradients } from "./tokens"

interface Props {
  children: string
}

export default function GradientText({ children = "Gradient Text" }: Props) {
  return (
    <motion.span
      animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      style={{
        background: gradients.aurora,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        display: "inline-block"
      }}
    >
      {children}
    </motion.span>
  )
}
```

**Usage in text:**
Replace part of heading with this component for gradient effect.

---

## 📱 Making It Responsive

### Quick Responsive Setup

1. **Select your main frame**
2. **Click breakpoints icon** (top-right)
3. **Add breakpoints:**
   - Tablet: 768px
   - Mobile: 375px

4. **For each breakpoint:**
   - Adjust font sizes (mobile = 60% of desktop)
   - Change padding (mobile = 16px, desktop = 80px)
   - Stack columns vertically on mobile

### Responsive Code Component

```typescript
import { useEffect, useState } from "react"

function useBreakpoint() {
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

// Use in component:
const breakpoint = useBreakpoint()
const fontSize = breakpoint === "mobile" ? 32 : 80
```

---

## 🎨 Essential Components Checklist

Copy these into Framer to get started:

- [x] **AuroraBackground** - Animated background layer
- [x] **PrimaryButton** - Main CTA button
- [x] **GradientText** - Animated gradient text
- [ ] **ShimmerDivider** - Animated divider (see full guide)
- [ ] **MetricDisplay** - Large numbers with labels
- [ ] **GradientCard** - Feature cards
- [ ] **Header** - Navigation bar
- [ ] **Footer** - Site footer

---

## 🔗 Creating Page Links

### Step 1: Create Pages

1. Click "+" next to "Home" in pages panel
2. Add pages: Philosophy, Programs, Chapters, etc.

### Step 2: Add Navigation

```typescript
import { Link } from "framer"

export default function Navigation() {
  return (
    <nav style={{ display: "flex", gap: 32 }}>
      <Link href="/">Home</Link>
      <Link href="/philosophy">Philosophy</Link>
      <Link href="/programs">Programs</Link>
      <Link href="/chapters">Chapters</Link>
    </nav>
  )
}
```

### Step 3: Add Transitions

1. Select frame
2. Click "Prototype" tab
3. Set transition: **Dissolve, 0.4s, Ease Out**

---

## 🎯 Quick Prototyping

### Scroll Animation Template

```typescript
import { motion } from "framer-motion"

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  Your content
</motion.div>
```

### Hover Glow Template

```typescript
<motion.div
  whileHover={{ scale: 1.02, y: -8 }}
  style={{ position: "relative" }}
>
  Content
  
  {/* Hover glow */}
  <motion.div
    initial={{ opacity: 0 }}
    whileHover={{ opacity: 1 }}
    style={{
      position: "absolute",
      inset: 0,
      border: "2px solid #65D6C8",
      borderRadius: 16,
      boxShadow: "0 0 40px rgba(101,214,200,0.4)"
    }}
  />
</motion.div>
```

---

## 📦 Import Existing React Code

If you want to import the full components from this project:

1. **Copy component code** from `/components` folder
2. **Create new Code Component** in Framer
3. **Paste code**
4. **Import dependencies:**
   ```typescript
   import { motion } from "framer-motion"
   ```
5. **Update import paths:**
   ```typescript
   // Change:
   import { colors } from "../tokens/colors"
   // To:
   import { colors } from "./tokens"
   ```

---

## 🎬 Animation Presets

Save these as **Code Overrides** for quick reuse:

### Fade In On Scroll

```typescript
export function fadeIn(): Override {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true }
  }
}
```

### Stagger Children

```typescript
export function stagger(): Override {
  return {
    initial: "hidden",
    whileInView: "show",
    variants: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
      }
    }
  }
}
```

---

## ⚡ Performance Tips

1. **Use `once: true`** in viewport animations
2. **Limit blur effects** on mobile
3. **Reduce animation complexity** on smaller screens
4. **Use transforms** instead of width/height changes
5. **Lazy load images** (Framer does this automatically)

---

## 🚀 Publishing Checklist

Before you publish:

- [ ] Test all breakpoints (desktop, tablet, mobile)
- [ ] Check all page links work
- [ ] Verify button hover states
- [ ] Test scroll animations
- [ ] Add meta tags (SEO)
- [ ] Optimize images
- [ ] Add favicon
- [ ] Connect custom domain
- [ ] Enable analytics

---

## 📚 Next Steps

1. **Complete the component library** - Add remaining components from COMPONENT_SPECIFICATIONS.md
2. **Build all pages** - Use the templates in FRAMER_INTEGRATION_GUIDE.md
3. **Add interactions** - Prototype user flows
4. **Refine animations** - Adjust timing and easing
5. **Test thoroughly** - Multiple devices and browsers
6. **Launch!** 🎉

---

## 🆘 Common Issues & Fixes

### "Module not found"
- Make sure token file is named exactly `tokens.ts`
- Check import path: `import { colors } from "./tokens"`

### Animations not working
- Ensure `motion` is imported from `"framer-motion"`
- Check that component has position: relative or absolute

### Gradient text not showing
- Add `display: "inline-block"` to style
- Ensure WebkitBackgroundClip is set correctly

### Responsive not updating
- Check breakpoint values in settings
- Use `useBreakpoint` hook for code components
- Ensure Auto Layout is enabled on frames

---

## 📖 Full Documentation

For complete specifications, refer to:
- **DESIGN_SYSTEM.md** - Complete design system
- **FRAMER_INTEGRATION_GUIDE.md** - Detailed integration
- **COMPONENT_SPECIFICATIONS.md** - Component details
- **design-tokens.json** - Exportable tokens

---

**Ready to build?** Start with the Hero section and work your way down! 🎨✨
