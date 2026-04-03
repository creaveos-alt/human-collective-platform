# Component Specifications

**Human + AI Collective — Aurora Continuum Design System**

Complete specifications for all reusable components in the design system.

---

## Table of Contents

1. [Buttons](#buttons)
2. [Cards](#cards)
3. [Typography Components](#typography-components)
4. [Dividers](#dividers)
5. [Navigation](#navigation)
6. [Forms](#forms)
7. [Metrics & Data Display](#metrics--data-display)
8. [Background Effects](#background-effects)
9. [Icons & Graphics](#icons--graphics)
10. [Modals & Overlays](#modals--overlays)

---

## Buttons

### Primary Button

**Usage:** Main CTAs, primary actions

**Specifications:**
- **Dimensions:** Auto width × 56px height
- **Padding:** 16px (top/bottom) × 48px (left/right)
- **Border Radius:** 9999px (fully rounded)
- **Background:** `#7A6FF0` (Cosmic Violet)
- **Text:** 
  - Font: Cooper Hewitt Medium
  - Size: 18px
  - Color: `#FDFDFB` (Warm White)
  - Letter Spacing: 0.02em

**States:**

| State | Transform | Shadow | Background | Duration |
|-------|-----------|--------|------------|----------|
| Default | scale(1) | None | `#7A6FF0` | - |
| Hover | scale(1.05) | 0 8px 24px rgba(122,111,240,0.4) | `#7A6FF0` | 0.3s |
| Active | scale(0.95) | None | `#6D5FE0` | 0.15s |
| Disabled | scale(1) | None | `#7A6FF0` @ 40% opacity | - |

**Accessibility:**
- Min touch target: 44×44px
- Focus ring: 2px solid `#65D6C8` with 2px offset
- ARIA: `role="button"`, `aria-label` when icon-only

**Code Example:**
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  style={{
    padding: "16px 48px",
    borderRadius: 9999,
    background: "#7A6FF0",
    color: "#FDFDFB",
    fontSize: 18,
    border: "none",
    cursor: "pointer",
  }}
>
  Get Started
</motion.button>
```

---

### Secondary Button

**Usage:** Secondary actions, ghost CTAs

**Specifications:**
- **Dimensions:** Auto width × 56px height
- **Padding:** 16px × 48px
- **Border Radius:** 9999px
- **Border:** 2px solid `#65D6C8` (Aqua Radiance)
- **Background:** Transparent
- **Text:** Same as primary

**States:**

| State | Background | Border | Duration |
|-------|------------|--------|----------|
| Default | Transparent | `#65D6C8` | - |
| Hover | `#65D6C8` @ 10% | `#65D6C8` | 0.4s |
| Active | `#65D6C8` @ 20% | `#65D6C8` | 0.15s |
| Disabled | Transparent | `#65D6C8` @ 40% | - |

**Code Example:**
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  style={{
    padding: "16px 48px",
    borderRadius: 9999,
    border: "2px solid #65D6C8",
    background: "transparent",
    color: "#FDFDFB",
    fontSize: 18,
  }}
>
  Learn More
</motion.button>
```

---

### Icon Button

**Usage:** Navigation, actions with icons only

**Specifications:**
- **Dimensions:** 48×48px (square)
- **Border Radius:** 50% (circle) or 8px (rounded square)
- **Background:** `#FDFDFB` @ 10% opacity
- **Icon Size:** 24×24px
- **Icon Color:** `#FDFDFB`

**States:**

| State | Background | Icon Color | Scale |
|-------|------------|------------|-------|
| Default | `#FDFDFB` @ 10% | `#FDFDFB` @ 80% | 1 |
| Hover | `#65D6C8` @ 20% | `#FDFDFB` | 1.1 |
| Active | `#65D6C8` @ 30% | `#FDFDFB` | 0.95 |

---

## Cards

### Gradient Card

**Usage:** Program cards, feature cards, chapter highlights

**Specifications:**
- **Dimensions:** 
  - Width: 100% (grid-responsive)
  - Height: 400-500px (flexible)
- **Border Radius:** 16px
- **Padding:** 32px
- **Background:** Linear gradient (role-specific)
  - AI Lunchbox: `linear-gradient(135deg, #7A6FF0/60, #65D6C8/40)`
  - Micro-Entrepreneurship: `linear-gradient(135deg, #65D6C8/60, #A8F0E4/40)`
  - Think Tank: `linear-gradient(135deg, #A8F0E4/60, #7A6FF0/40)`

**Pattern Overlay:**
- Radial dots: 2px circles @ 40px spacing
- Opacity: 10%
- Color: currentColor (inherits from gradient)

**States:**

| State | Transform | Border | Shadow |
|-------|-----------|--------|--------|
| Default | translateY(0) | None | None |
| Hover | translateY(-8px) scale(1.02) | 2px solid `#65D6C8` | 0 0 40px rgba(101,214,200,0.4) |

**Content Structure:**
```
┌─────────────────────────┐
│ Icon (64px)             │
│                         │
│ Title (H3, 32px)        │
│ Subtitle (18px)         │
│                         │
│ Description             │
│ (16px, line-height 1.6) │
│                         │
│ [Stats or CTA]          │
└─────────────────────────┘
```

**Animation:**
- Entry: Fade in + slide up
- Duration: 0.8s
- Easing: ease-out
- Stagger: 0.2s between cards

---

### Profile Card

**Usage:** Builder profiles, team members

**Specifications:**
- **Aspect Ratio:** 3:4 (portrait)
- **Border Radius:** 8px
- **Background:** Gradient (person-specific)
- **Content:** 
  - Initials: 60px, centered, `#FDFDFB` @ 40%
  - Name overlay at bottom

**Hover Effect:**
- Vertical beam scan (top to bottom)
- Duration: 1.5s
- Gradient: `linear-gradient(to bottom, transparent, #FDFDFB/30, transparent)`
- Border glow: 2px solid `#65D6C8` with 30px shadow

**Content Overlay (Bottom):**
```
┌─────────────────────┐
│                     │
│     [Initials]      │
│                     │
│─────────────────────│
│ Name (16px bold)    │
│ Role (14px)         │
│ Descriptor (12px)   │
└─────────────────────┘
```

---

### Impact Card

**Usage:** Testimonials, case studies

**Specifications:**
- **Border Radius:** 16px
- **Border:** 1px solid `#65D6C8` @ 20%
- **Background:** Gradient from `#7A6FF0/5` to `#65D6C8/5`
- **Padding:** 32px
- **Min Height:** 300px

**Content Structure:**
```
┌─────────────────────────┐
│ " (quote mark, 60px)    │
│                         │
│ Quote text (18px)       │
│ (italic, line-height    │
│  1.6, relaxed)          │
│                         │
│ ─────────────────────   │
│                         │
│ Author Name (16px)      │
│ Role (14px, secondary)  │
│ Program (12px, aqua)    │
└─────────────────────────┘
```

---

## Typography Components

### Gradient Text

**Usage:** Accent headings, key phrases

**Specifications:**
- **Gradient:** `linear-gradient(135deg, #7A6FF0, #65D6C8, #A8F0E4)`
- **Background Size:** 200% 100%
- **Background Clip:** text
- **Text Fill Color:** transparent

**Animation:**
- Background position: 0% → 100% → 0%
- Duration: 4s
- Easing: linear
- Repeat: infinite

**Code:**
```tsx
<motion.span
  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
  style={{
    background: "linear-gradient(135deg, #7A6FF0, #65D6C8, #A8F0E4)",
    backgroundSize: "200% 100%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  Gradient Text
</motion.span>
```

---

### Section Label

**Usage:** Section overlines, category labels

**Specifications:**
- **Font:** Cooper Hewitt Regular
- **Size:** 10-12px
- **Text Transform:** UPPERCASE
- **Letter Spacing:** 0.15em
- **Color:** `#65D6C8`
- **Margin Bottom:** 16-24px

**Example:**
```
OUR PHILOSOPHY
─────────────
(16px gap)

Main Heading Here
```

---

## Dividers

### Shimmer Divider

**Usage:** Section dividers, visual breaks

**Specifications:**
- **Height:** 1px
- **Width:** 100%
- **Base Color:** `#65D6C8` @ 10%
- **Shimmer:** Gradient sweep
  - Width: 33.33% of container
  - Gradient: `transparent → #65D6C8/40 → transparent`
  - Animation: -100% → 200% (X position)
  - Duration: 3s
  - Repeat Delay: 2s

**Code:**
```tsx
<div style={{ position: "relative", width: "100%", height: 1 }}>
  <div style={{ 
    position: "absolute", 
    inset: 0, 
    background: "#65D6C81A" 
  }} />
  <motion.div
    animate={{ x: ["-100%", "200%"] }}
    transition={{ 
      duration: 3, 
      repeat: Infinity, 
      ease: "linear", 
      repeatDelay: 2 
    }}
    style={{
      position: "absolute",
      inset: 0,
      width: "33.333%",
      background: "linear-gradient(90deg, transparent, #65D6C866, transparent)"
    }}
  />
</div>
```

---

### Vertical Grid Divider

**Usage:** Column separators in grids

**Specifications:**
- **Width:** 1px
- **Height:** 100%
- **Color:** `#65D6C8` @ 10%
- **Position:** Absolute, left: 0
- **Display:** Hidden on mobile, visible lg+

---

## Navigation

### Header

**Usage:** Global site navigation

**Specifications:**
- **Position:** Fixed top
- **Width:** 100%
- **Height:** 80px
- **Background:** `#040619` @ 90% with backdrop-blur(12px)
- **Border Bottom:** 1px solid `#65D6C8` @ 10%
- **Z-index:** 1000
- **Padding:** 0 80px (desktop), 0 32px (tablet), 0 16px (mobile)

**Layout:**
```
┌─────────────────────────────────────────────┐
│  Logo          Nav Links          [CTA]     │
└─────────────────────────────────────────────┘
```

**Nav Link States:**

| State | Color | Border Bottom | Duration |
|-------|-------|---------------|----------|
| Default | `#FDFDFB` @ 80% | None | - |
| Hover | `#FDFDFB` | 2px `#65D6C8` | 0.3s |
| Active | `#65D6C8` | 2px `#65D6C8` | - |

---

### Footer

**Usage:** Site footer with links and info

**Specifications:**
- **Background:** `#FDFDFB` (Warm White)
- **Padding:** 80px 80px 64px (desktop)
- **Border Top:** 1px solid `#65D6C8` @ 10%

**Layout (3-column grid):**
```
┌────────────┬────────────┬────────────┐
│ Logo &     │ Navigation │ Connect &  │
│ Descriptor │ Links      │ Social     │
└────────────┴────────────┴────────────┘
─────────────────────────────────────────
Copyright · Privacy · Terms
```

**Link Hover:**
- Underline animation (scale X: 0 → 1)
- Duration: 0.3s
- Color: `#65D6C8`

---

## Forms

### Text Input

**Specifications:**
- **Height:** 48px
- **Border Radius:** 8px
- **Border:** 1px solid `#65D6C8` @ 30%
- **Background:** `#040619` @ 50%
- **Padding:** 12px 16px
- **Font:** Whitney Regular, 16px
- **Color:** `#FDFDFB`

**States:**

| State | Border | Background | Shadow |
|-------|--------|------------|--------|
| Default | 1px `#65D6C8` @ 30% | `#040619` @ 50% | None |
| Focus | 2px `#65D6C8` | `#040619` @ 70% | 0 0 0 4px rgba(101,214,200,0.1) |
| Error | 2px `#FF6B6B` | `#040619` @ 50% | None |
| Disabled | 1px `#65D6C8` @ 10% | `#040619` @ 30% | None |

**Placeholder:**
- Color: `#FDFDFB` @ 40%
- Font style: italic (optional)

---

### Textarea

**Same as Text Input, but:**
- **Height:** 120px (default, resizable)
- **Padding:** 16px

---

## Metrics & Data Display

### Large Metric Display

**Usage:** Impact numbers, statistics

**Specifications:**

**Number:**
- **Font:** Display font (Tiempos or Cooper Hewitt)
- **Size:** 60-96px (responsive)
- **Gradient:** Aurora gradient with shimmer
- **Animation:** Background position sweep

**Label:**
- **Font:** Cooper Hewitt Regular
- **Size:** 12-14px
- **Transform:** UPPERCASE
- **Tracking:** 0.08em
- **Color:** `#FDFDFB` @ 60%

**Description (optional):**
- **Font:** Whitney Regular
- **Size:** 14px
- **Line Height:** 1.6
- **Color:** `#FDFDFB` @ 60%

**Layout:**
```
┌─────────────┐
│  20,000+    │ ← Number (gradient)
│             │
│ COMMUNITY   │ ← Label
│ MEMBERS     │
│             │
│ Description │ ← Optional text
│ of the      │
│ metric      │
└─────────────┘
```

**Entry Animation:**
- Fade in + scale (0.8 → 1)
- Duration: 0.6s
- Delay: Staggered (0.1s per item)

---

### Progress Bar

**Usage:** Skill levels, completion status

**Specifications:**
- **Height:** 8px
- **Border Radius:** 4px
- **Background:** `#FDFDFB` @ 10%
- **Fill:** Gradient `#7A6FF0` → `#65D6C8`
- **Animation:** Width 0% → target% over 1s

---

## Background Effects

### Aurora Drift Layer

**Usage:** Background animation layer

**Specifications:**

**Violet Drift:**
- **Gradient:** `linear-gradient(90deg, transparent, #7A6FF0/10, transparent)`
- **Blur:** 60px
- **Animation:** X position -100% → 100%
- **Duration:** 20s linear infinite

**Aqua Drift:**
- **Gradient:** `linear-gradient(90deg, transparent, #65D6C8/10, transparent)`
- **Blur:** 60px
- **Animation:** X position 100% → -100%
- **Duration:** 25s linear infinite

**Implementation:**
- Position: absolute, inset 0
- Z-index: 1 (behind content)
- Pointer events: none

---

### Breathing Pulse

**Usage:** Ambient glow behind sections

**Specifications:**
- **Shape:** Circle (border-radius: 50%)
- **Size:** 600-1000px diameter
- **Gradient:** Radial from center
  - `#7A6FF0/20` → `#65D6C8/20`
- **Blur:** 100-120px
- **Animation:**
  - Scale: 1 → 1.1 → 1
  - Opacity: 0.05 → 0.15 → 0.05
  - Duration: 8s ease-in-out infinite

---

### Parallax Scroll Effect

**Usage:** Hero sections, featured content

**Specifications:**
- **Y Transform:** 0% → 30% (based on scroll)
- **Opacity:** 1 → 0.8 → 0
- **Scroll Offset:** "start start" to "end start"

**Code:**
```tsx
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start start", "end start"]
})

const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

<motion.div style={{ y, opacity }}>
  Content
</motion.div>
```

---

## Icons & Graphics

### Icon Specifications

**Sizes:**
- Small: 16×16px
- Medium: 24×24px
- Large: 32×32px
- XL: 48×48px

**Stroke Width:** 2px (default), 1.5px (light), 2.5px (bold)

**Colors:**
- On dark: `#FDFDFB` @ 80%
- Accent: `#65D6C8`
- Hover: `#FDFDFB` @ 100%

**Library:** Lucide React (preferred)

---

### Logo / Symbol

**The Collective Mark:**
- **Shape:** Hexagon (geometric abstraction)
- **Stroke:** 2px
- **Gradient:** Aurora gradient
- **Size:** 
  - Header: 32×32px
  - Footer: 48×48px
  - Hero: 120×120px

**Animation (optional):**
- Path draw-in: 0 → 1 over 2s
- Rotation: 360° over 40s (slow ambient)

---

## Modals & Overlays

### Modal Container

**Specifications:**
- **Max Width:** 600px
- **Border Radius:** 16px
- **Background:** `#040619` @ 95% with backdrop-blur(20px)
- **Border:** 1px solid `#65D6C8` @ 30%
- **Padding:** 48px
- **Shadow:** 0 20px 60px rgba(4,6,25,0.6)

**Backdrop:**
- Background: `#040619` @ 80%
- Backdrop blur: 8px
- Click to close

**Animation:**
- Entry: Scale 0.9 → 1, opacity 0 → 1
- Exit: Scale 1 → 0.95, opacity 1 → 0
- Duration: 0.3s ease-out

---

### Toast Notification

**Specifications:**
- **Width:** 360px max
- **Height:** Auto (min 64px)
- **Border Radius:** 12px
- **Background:** `#1A1F35` @ 95% with backdrop-blur
- **Border:** 1px solid based on type:
  - Success: `#65D6C8`
  - Error: `#FF6B6B`
  - Info: `#7A6FF0`
- **Padding:** 16px 20px

**Position:** 
- Bottom-right: 24px from edges
- Stack vertically with 12px gap

**Animation:**
- Entry: Slide in from right + fade
- Exit: Slide out right + fade
- Duration: 0.4s ease-out

---

## Component Usage Guidelines

### Do's ✅

- Use semantic HTML tags (button, nav, footer, etc.)
- Maintain consistent spacing using the 4px grid
- Apply hover states to all interactive elements
- Use `viewport={{ once: true }}` for scroll animations to improve performance
- Respect `prefers-reduced-motion` for accessibility
- Ensure 3:1 minimum contrast ratio for large text

### Don'ts ❌

- Don't use Tailwind font size/weight classes unless requested
- Don't animate width/height properties (use transform instead)
- Don't nest more than 3 levels of motion components
- Don't use hard-coded colors (use design tokens)
- Don't override typography without proper semantic reason
- Don't create inaccessible color combinations

---

## Responsive Behavior Summary

### Desktop (1440px+)
- Full component sizes
- All animations enabled
- Multi-column layouts (3-5 columns)

### Tablet (768px - 1024px)
- 90% scale on typography
- 2-column layouts (max)
- Reduced animation complexity

### Mobile (375px - 767px)
- 85% scale on typography
- Single column layouts
- Simplified hover states (tap instead)
- Reduced motion (respect user preference)
- Touch targets minimum 44×44px

---

**Document Version:** 2.0  
**Last Updated:** November 9, 2025  
**Maintained by:** Human + AI Collective Design Team
