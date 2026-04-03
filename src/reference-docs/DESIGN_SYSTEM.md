# Human + AI Collective — Design System Documentation

**Version:** 2.0 — Aurora Continuum  
**Last Updated:** November 9, 2025  
**Status:** Production Ready

---

## Table of Contents

1. [Philosophy & Vision](#philosophy--vision)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Grid](#spacing--grid)
5. [Motion & Animation](#motion--animation)
6. [Components](#components)
7. [Responsive Behavior](#responsive-behavior)
8. [Accessibility](#accessibility)
9. [Framer Integration](#framer-integration)

---

## Philosophy & Vision

### Design Ethos
The Human + AI Collective design system embodies the **Aurora Continuum** — a seamless flow between light and darkness, representing the journey from ancient human tools to collective intelligence.

**Core Principles:**
- **Breathing Space:** Wide margins, generous padding, calm rhythm
- **Living Light:** Subtle aurora gradients that drift and pulse
- **Museum-Grade Atmosphere:** Cinematic, contemplative, intentional
- **Proportional Balance:** Human scale, dignified hierarchy
- **Continuum Flow:** Seamless transitions between sections and states

---

## Color System

### Aurora Equilibrium Palette

#### Primary Colors

| Token Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| `deep-night-indigo` | #040619 | 4, 6, 25 | Primary dark background, text on light |
| `warm-white` | #FDFDFB | 253, 253, 251 | Primary light background, text on dark |
| `cosmic-violet` | #7A6FF0 | 122, 111, 240 | Primary accent, CTA, highlights |
| `aqua-radiance` | #65D6C8 | 101, 214, 200 | Secondary accent, interactive states |
| `aurora-mist` | #A8F0E4 | 168, 240, 228 | Tertiary accent, subtle highlights |
| `dawn-sand` | #F5EDE2 | 245, 237, 226 | Light mode secondary background |
| `shadow-blue` | #1A1F35 | 26, 31, 53 | Dark mode secondary background |

#### Opacity Scales

**Dark Mode Backgrounds:**
- `deep-night-indigo` @ 100% — Primary
- `deep-night-indigo` @ 90% — Secondary layer
- `shadow-blue/50` @ 50% — Depth layer

**Light Mode Backgrounds:**
- `warm-white` @ 100% — Primary
- `dawn-sand` @ 100% — Secondary
- `aurora-mist/40` @ 40% — Accent layer

**Text Colors:**
- On Dark: `warm-white` @ 100%, 80%, 70%, 60%, 50%
- On Light: `deep-night-indigo` @ 100%, 80%, 70%, 60%, 50%

**Gradient Definitions:**

```css
/* Aurora Gradient (Primary) */
background: linear-gradient(135deg, #7A6FF0 0%, #65D6C8 50%, #A8F0E4 100%);

/* Cosmic Depth */
background: linear-gradient(180deg, #040619 0%, #1A1F35 100%);

/* Dawn Rise */
background: linear-gradient(180deg, #FDFDFB 0%, #F5EDE2 50%, #A8F0E4 100%);

/* Horizontal Aurora Drift */
background: linear-gradient(90deg, transparent 0%, #7A6FF0/10 50%, transparent 100%);
```

---

## Typography

### Font Stack

**Primary Typefaces:**

1. **Tiempos Headline** — Serif, Display
   - Usage: Hero headlines, section titles, large statements
   - Weights: Regular (400), Medium (500)
   - Fallback: Georgia, Times New Roman, serif

2. **Cooper Hewitt** — Sans-serif, Geometric
   - Usage: Subheadings, labels, navigation
   - Weights: Regular (400), Medium (500), Bold (700)
   - Fallback: -apple-system, system-ui, sans-serif

3. **Whitney** — Sans-serif, Humanist
   - Usage: Body text, descriptions, captions
   - Weights: Book (400), Medium (500)
   - Fallback: -apple-system, system-ui, sans-serif

### Type Scale (Desktop 1440px)

| Style | Font | Size | Line Height | Letter Spacing | Weight |
|-------|------|------|-------------|----------------|---------|
| **Display XL** | Tiempos | 96px | 1.1 (105px) | -0.02em | 400 |
| **Display L** | Tiempos | 80px | 1.1 (88px) | -0.01em | 400 |
| **Display M** | Tiempos | 64px | 1.15 (74px) | 0em | 400 |
| **H1** | Tiempos | 56px | 1.2 (67px) | 0em | 400 |
| **H2** | Tiempos | 48px | 1.25 (60px) | 0em | 400 |
| **H3** | Tiempos | 40px | 1.3 (52px) | 0em | 400 |
| **H4** | Cooper Hewitt | 32px | 1.4 (45px) | 0.01em | 500 |
| **H5** | Cooper Hewitt | 24px | 1.4 (34px) | 0.02em | 500 |
| **H6** | Cooper Hewitt | 20px | 1.5 (30px) | 0.03em | 700 |
| **Body XL** | Whitney | 24px | 1.6 (38px) | 0em | 400 |
| **Body L** | Whitney | 20px | 1.6 (32px) | 0em | 400 |
| **Body M** | Whitney | 18px | 1.6 (29px) | 0em | 400 |
| **Body** | Whitney | 16px | 1.6 (26px) | 0em | 400 |
| **Body S** | Whitney | 14px | 1.6 (22px) | 0em | 400 |
| **Caption** | Cooper Hewitt | 12px | 1.5 (18px) | 0.08em | 400 |
| **Overline** | Cooper Hewitt | 10px | 1.6 (16px) | 0.15em | 700 |

### Responsive Type Scale

**Tablet (768px):**
- Display XL: 72px
- Display L: 60px
- Display M: 48px
- H1: 40px
- H2: 36px
- Body scales: 90% of desktop

**Mobile (375px):**
- Display XL: 48px
- Display L: 40px
- Display M: 32px
- H1: 28px
- H2: 24px
- Body scales: 85% of desktop

### Text Styling Rules

**Important:** Never use Tailwind font-size, font-weight, or line-height classes unless specifically requested by the user. Typography is controlled through `styles/globals.css` with semantic HTML tags.

---

## Spacing & Grid

### Spacing System

**Base Unit:** 4px

| Token | Value | Usage |
|-------|-------|-------|
| `space-0` | 0px | Reset |
| `space-1` | 4px | Micro spacing |
| `space-2` | 8px | Tight padding |
| `space-3` | 12px | Default gap |
| `space-4` | 16px | Standard padding |
| `space-5` | 20px | Medium gap |
| `space-6` | 24px | Large gap |
| `space-8` | 32px | Section gap |
| `space-10` | 40px | Large section gap |
| `space-12` | 48px | Container padding |
| `space-16` | 64px | Vertical section spacing |
| `space-20` | 80px | Large vertical spacing |
| `space-24` | 96px | XL vertical spacing |
| `space-32` | 128px | Section divider |

### Grid System

**12-Column Fluid Grid**

**Desktop (1440px):**
- Max width: 1440px
- Container: 1280px (80px margin each side)
- Columns: 12
- Column width: ~85px
- Gutter: 24px
- Outer margin: 80px

**Tablet (768px):**
- Max width: 768px
- Container: 704px (32px margin each side)
- Columns: 12
- Column width: ~46px
- Gutter: 16px
- Outer margin: 32px

**Mobile (375px):**
- Max width: 375px
- Container: 343px (16px margin each side)
- Columns: 4
- Column width: ~73px
- Gutter: 12px
- Outer margin: 16px

### Layout Containers

```css
/* Max-width containers */
.container-xl { max-width: 1440px; }
.container-lg { max-width: 1280px; }
.container-md { max-width: 960px; }
.container-sm { max-width: 768px; }
.container-xs { max-width: 640px; }
```

### Section Spacing

**Vertical Rhythm:**
- Hero sections: `min-h-screen` (100vh)
- Standard sections: `py-32` (128px top/bottom)
- Compact sections: `py-24` (96px top/bottom)
- Subsections: `py-16` (64px top/bottom)

---

## Motion & Animation

### Animation Principles

1. **Breathing Motion:** Slow, organic, continuous
2. **Aurora Drift:** Horizontal gradients moving 20-30s duration
3. **Sequential Reveals:** Staggered delays (0.1-0.2s increments)
4. **Parallax Depth:** Subtle Y-axis movement on scroll
5. **Hover Glow:** Soft 20-30px blur radius halos

### Timing Functions

| Name | Easing Curve | Usage |
|------|--------------|-------|
| **ease-out** | cubic-bezier(0, 0, 0.2, 1) | Default transitions, fades |
| **ease-in-out** | cubic-bezier(0.4, 0, 0.2, 1) | Smooth bidirectional |
| **ease-in** | cubic-bezier(0.4, 0, 1, 1) | Accelerating entrance |
| **linear** | linear | Continuous loops, drifts |

### Duration Scale

| Duration | Value | Usage |
|----------|-------|-------|
| **instant** | 0ms | Immediate state changes |
| **fast** | 150ms | Micro-interactions |
| **normal** | 300ms | Button hovers, toggles |
| **smooth** | 400ms | Section transitions (PRIMARY) |
| **slow** | 600ms | Content reveals |
| **glacial** | 1000ms+ | Hero animations, entrances |

### Motion Patterns

**Aurora Drift (Horizontal):**
```javascript
animate: {
  x: ["-100%", "100%"]
}
transition: {
  duration: 20,
  repeat: Infinity,
  ease: "linear"
}
```

**Breathing Pulse:**
```javascript
animate: {
  scale: [1, 1.1, 1],
  opacity: [0.3, 0.6, 0.3]
}
transition: {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut"
}
```

**Scroll Reveal (Fade + Translate):**
```javascript
initial: { opacity: 0, y: 40 }
whileInView: { opacity: 1, y: 0 }
transition: { duration: 0.8, ease: "easeOut" }
viewport: { once: true }
```

**Hover Glow:**
```javascript
whileHover: { scale: 1.02, y: -8 }
transition: { duration: 0.4, ease: "easeOut" }

// Add glow layer:
<motion.div
  initial={{ opacity: 0 }}
  whileHover={{ opacity: 1 }}
  className="absolute inset-0 border-2 border-[#65D6C8] blur-xl"
/>
```

**Shimmer Animation (Gradient Text):**
```javascript
animate: {
  backgroundPosition: ["0%", "100%", "0%"]
}
transition: {
  duration: 4,
  repeat: Infinity,
  ease: "linear"
}
style: {
  backgroundSize: "200% 100%"
}
```

### Scroll Behavior

**Hero Parallax:**
```javascript
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start start", "end start"]
});

const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
```

**Section Fade In/Out:**
```javascript
const opacity = useTransform(
  scrollYProgress, 
  [0, 0.3, 0.7, 1], 
  [0, 1, 1, 0]
);
```

---

## Components

### Core Component Library

#### 1. Buttons

**Primary Button:**
- Background: `cosmic-violet` (#7A6FF0)
- Text: `warm-white` (#FDFDFB)
- Padding: 16px 48px
- Border-radius: 9999px (full)
- Hover: scale(1.05), shadow glow
- Transition: 0.3s ease-out

**Secondary Button:**
- Border: 2px solid `aqua-radiance` (#65D6C8)
- Text: `warm-white` or `deep-night-indigo`
- Padding: 16px 48px
- Border-radius: 9999px
- Hover: background `aqua-radiance/10`
- Transition: 0.4s ease-out

**Ghost Button:**
- Border: 1px solid `warm-white/20`
- Text: `warm-white/80`
- Padding: 12px 32px
- Border-radius: 9999px
- Hover: `warm-white/10` background
- Transition: 0.3s ease-out

#### 2. Cards

**Gradient Card:**
- Background: `linear-gradient(135deg, #7A6FF0/60, #65D6C8/40)`
- Border-radius: 16px
- Padding: 32px
- Pattern overlay: radial dots @ 10% opacity
- Hover: border-2 `aqua-radiance`, glow shadow
- Height: 400-500px

**Profile Card:**
- Aspect ratio: 3:4
- Border-radius: 8px
- Gradient background (role-based)
- Text overlay at bottom
- Hover: border glow, vertical beam scan

**Impact Card:**
- Border: 1px solid `aqua-radiance/20`
- Background: `cosmic-violet/5` to `aqua-radiance/5` gradient
- Padding: 32px
- Hover: border-2 `aqua-radiance`, shadow

#### 3. Dividers

**Shimmer Divider:**
- Height: 1px
- Background: `aqua-radiance/10`
- Animated gradient sweep (3s duration)
- Width: 100%

**Vertical Divider (Grid):**
- Width: 1px
- Background: `aqua-radiance/10`
- Height: 100%
- Position: absolute left

#### 4. Navigation

**Header:**
- Position: fixed top
- Background: `deep-night-indigo/90` with backdrop-blur
- Height: 80px
- Padding: 0 80px
- Border-bottom: 1px solid `aqua-radiance/10`

**Footer:**
- Background: `warm-white` (#FDFDFB)
- Padding: 80px 80px 64px
- 3-column grid
- Divider at top

#### 5. Input Fields

**Text Input:**
- Border: 1px solid `aqua-radiance/30`
- Border-radius: 8px
- Padding: 12px 16px
- Background: `deep-night-indigo/50`
- Focus: border-2 `aqua-radiance`, glow
- Text: `warm-white`

#### 6. Metrics Display

**Large Number:**
- Font: 60-80px
- Gradient: `cosmic-violet` → `aqua-radiance` → `aurora-mist`
- Animated shimmer background
- Background-clip: text

**Label:**
- Font: 12-14px uppercase
- Tracking: 0.08em
- Color: `warm-white/60`

---

## Responsive Behavior

### Breakpoints

```css
/* Mobile First */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md - Tablet */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1440px) { /* 2xl - Desktop */ }
```

### Layout Adaptations

**Desktop (1440px+):**
- 3-column grids
- Full parallax effects
- Large hero sections (100vh)
- Side-by-side content + visual layouts

**Tablet (768px-1024px):**
- 2-column grids → 1-column for complex content
- Reduced parallax intensity
- Hero sections: 80vh minimum
- Stacked content + visual layouts

**Mobile (375px-767px):**
- Single column layouts
- Reduced font sizes (85% scale)
- Hero sections: 100vh with adjusted padding
- Hamburger navigation
- Reduced motion (respect prefers-reduced-motion)
- Touch-friendly targets (44px minimum)

### Typography Scaling

Automatically scales using CSS clamp():

```css
/* Example H1 */
font-size: clamp(28px, 5vw, 56px);
line-height: 1.2;
```

---

## Accessibility

### Color Contrast

All text meets WCAG AA standards:
- Large text (18px+): 3:1 minimum
- Body text: 4.5:1 minimum
- Interactive elements: 3:1 minimum

### Motion

**Respect user preferences:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Keyboard Navigation

- All interactive elements focusable
- Focus indicators: 2px solid `aqua-radiance`
- Skip links for main navigation
- Logical tab order

### Screen Readers

- Semantic HTML structure
- ARIA labels on decorative elements
- Alt text on all images
- Live regions for dynamic content

---

## Framer Integration

### How to Import This System into Framer

**Step 1: Set Up Design Tokens**

Create a code file in Framer called `designTokens.ts`:

```typescript
export const colors = {
  deepNightIndigo: "#040619",
  warmWhite: "#FDFDFB",
  cosmicViolet: "#7A6FF0",
  aquaRadiance: "#65D6C8",
  auroraMist: "#A8F0E4",
  dawnSand: "#F5EDE2",
  shadowBlue: "#1A1F35"
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  section: 128
};

export const typography = {
  displayXL: { size: 96, lineHeight: 1.1 },
  displayL: { size: 80, lineHeight: 1.1 },
  h1: { size: 56, lineHeight: 1.2 },
  body: { size: 16, lineHeight: 1.6 }
};
```

**Step 2: Import React Components**

All components in this project use `motion/react` which is compatible with Framer. You can:

1. Copy component code directly into Framer code components
2. Use Framer's "Insert from React" feature
3. Import as a package

**Step 3: Create Reusable Framer Components**

Convert key patterns into Framer components:
- Aurora Background Layer
- Shimmer Divider
- Gradient Card
- Metric Display
- Hero Section Template

**Step 4: Set Up Responsive Variants**

Use Framer's variant system:
- Desktop (1440px)
- Tablet (768px)
- Mobile (375px)

**Step 5: Animation Overrides**

Create Framer overrides for:
- Scroll-triggered reveals
- Hover states
- Aurora drift animations
- Parallax effects

**See FRAMER_INTEGRATION_GUIDE.md for detailed instructions.**

---

## Version History

- **v2.0** — Aurora Continuum (Nov 2025) — Complete system redesign
- **v1.0** — Initial headphones showcase (Deprecated)

---

**Document maintained by:** Human + AI Collective Design Team  
**For questions:** design@humanaicollective.org
