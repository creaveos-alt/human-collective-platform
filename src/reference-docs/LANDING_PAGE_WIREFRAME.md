# Landing Page Wireframe — Human + AI Collective

**Current Structure Visualization**

---

## 🎯 Page Overview

The landing page consists of 7 main sections, all contained within a single scrollable page with a fixed navigation bar.

---

## 📐 Full Page Layout

```
┌─────────────────────────────────────────────────────────────┐
│                    FIXED NAVIGATION BAR                      │
│  ┌──────────────┬────────────────────────┬──────────────┐  │
│  │ THE          │ Origin | Lineage | ... │  [Enter →]   │  │
│  │ COLLECTIVE   │                         │              │  │
│  │ (Gradient)   │  (Navigation Links)     │   (Button)   │  │
│  └──────────────┴────────────────────────┴──────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## 📍 Section 1: Hero Section
**Height:** 100vh (Full viewport)  
**Background:** Deep Night Indigo (#040619)  
**Elements:** Acheulean crystal mark, headline, scroll indicator

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                    [AURORA DRIFT LAYERS]                     │
│                   (Horizontal gradients                      │
│                    moving slowly)                            │
│                                                              │
│          ┌───────────────────────────────┐                  │
│          │                               │                  │
│          │    ╱◆╲   ┌─────────┐   ╱◆╲   │  Rotating        │
│          │   ╱   ╲  │         │  ╱   ╲  │  aurora rings    │
│          │  │     │ │  [CRYSTAL] │     │ │                  │
│          │   ╲   ╱  │  MARK    │  ╲   ╱  │  Particle       │
│          │    ╲◆╱   └─────────┘   ╲◆╱   │  orbits          │
│          │                               │                  │
│          │      (500px × 500px)          │                  │
│          └───────────────────────────────┘                  │
│                                                              │
│                                                              │
│              Shaping Tomorrow, Collectively.                 │
│              ═══════════════════════════                     │
│                   (H1, 96px desktop)                         │
│                                                              │
│    We are a growing network of thinkers, builders and        │
│    learners who are cultivating the relationship between     │
│    humanity and intelligent systems — creating a future      │
│    that reflects the full spectrum of Collective             │
│    intelligence, ensuring that no one is left behind.        │
│                                                              │
│    From the Acheulean handaxe — humanity's first             │
│    deliberate tool — to the frontiers of Artificial         │
│    Intelligence, we honour the continuum of human            │
│    thought while building systems of care, access            │
│    and proportion.                                           │
│                                                              │
│                                                              │
│                       ┌─────┐                                │
│                       │  ○  │  ← Scroll indicator            │
│                       │  ●  │     (Animated)                 │
│                       └─────┘                                │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Key Elements:**
- Rotating Acheulean crystal mark (280px × 280px)
- Circular aurora gradient rings (rotating counter-clockwise)
- 12 orbital particles (violet, aqua, mist colors)
- Main headline with text-shadow glow
- Two-paragraph description
- Animated scroll indicator at bottom

---

## 📍 Section 2: Impact Metrics Wall
**Padding:** py-32 (128px top/bottom)  
**Background:** Deep Night Indigo  
**Layout:** 5-column grid (desktop), stacks on mobile

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                                                              │
│           Every act of learning is a vote of dignity,        │
│                       a moment of                            │
│                                                              │
│         light — reverence for the human continuum.           │
│         ══════════════════════════════════════               │
│                    (H2, 80px desktop)                        │
│                                                              │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│             [SHIMMER DIVIDER - Animated sweep]               │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│                                                              │
│  ┌──────────┬──────────┬──────────┬──────────┬──────────┐  │
│  │          │          │          │          │          │  │
│  │   20K+   │   5K+    │    28    │   300    │    1M    │  │
│  │  ─────   │  ─────   │  ─────   │  ─────   │  ─────   │  │
│  │ (Gradient│ (Gradient│ (Gradient│ (Gradient│ (Gradient│  │
│  │  number, │  number, │  number, │  number, │  number, │  │
│  │  64px)   │  64px)   │  64px)   │  64px)   │  64px)   │  │
│  │          │          │          │          │          │  │
│  │  HOURS   │ COMMUNITY│  GLOBAL  │WORKSHOPS │  LIVES   │  │
│  │ WITH AI  │ MEMBERS  │ CHAPTERS │  HOSTED  │ TOUCHED  │  │
│  │  MODELS  │          │          │          │          │  │
│  │          │          │          │          │          │  │
│  │ Our Fell-│A collect-│Local roo-│From gras-│The ripple│  │
│  │ ows and  │ive span- │ts, global│sroots AI │of intent-│  │
│  │ Members  │ning cont-│reach...  │literacy  │ion...    │  │
│  │ in dial- │inents... │          │to sys... │          │  │
│  │ ogue...  │          │          │          │          │  │
│  │          │          │          │          │          │  │
│  └──────────┴──────────┴──────────┴──────────┴──────────┘  │
│      │           │           │           │           │      │
│   [Vertical  dividers between columns - 1px aqua/10%]       │
│                                                              │
│                                                              │
│     These numbers represent real people — researchers,       │
│     students, organizers, makers — each contributing         │
│     their part to building a more just, intelligent          │
│     future. The collective continues to grow...              │
│                                                              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Key Elements:**
- Header text (2 lines, center-aligned)
- Animated shimmer divider
- 5-column grid with:
  - Large gradient numbers (shimmer animation)
  - Uppercase labels
  - Descriptive text
  - Vertical dividers between columns
- Footer text (centered, muted)
- Background: Pulsing aurora orb (subtle)

---

## 📍 Section 3: Three Pillars
**Padding:** py-32 (128px top/bottom)  
**Background:** Deep Night Indigo  
**Layout:** 3-column grid (desktop)

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                                                              │
│                  The Three Pillars of                        │
│                   the Collective                             │
│                  ════════════════                            │
│                 ("the Collective" in                         │
│                   gradient text)                             │
│                                                              │
│      Our work is structured around three interconnected      │
│      programs — each designed to expand access, deepen       │
│      understanding, and ensure the age of AI reflects        │
│      collective human intelligence.                          │
│                                                              │
│                                                              │
│  ┌─────────────────┬─────────────────┬─────────────────┐   │
│  │                 │                 │                 │   │
│  │  ┌───────────┐  │  ┌───────────┐  │  ┌───────────┐  │   │
│  │  │           │  │  │           │  │  │           │  │   │
│  │  │    🧠     │  │  │    🌱     │  │  │    🔮     │  │   │
│  │  │  (64px)   │  │  │  (64px)   │  │  │  (64px)   │  │   │
│  │  │           │  │  │           │  │  │           │  │   │
│  │  │    AI     │  │  │  Micro-   │  │  │   Think   │  │   │
│  │  │ Lunchbox  │  │  │  Entre    │  │  │   Tank    │  │   │
│  │  │  ─────    │  │  │  ─────    │  │  │  ─────    │  │   │
│  │  │  (H3)     │  │  │  (H3)     │  │  │  (H3)     │  │   │
│  │  │           │  │  │           │  │  │           │  │   │
│  │  │Foundation-│  │  │ Economic  │  │  │ Research  │  │   │
│  │  │al AI Lit. │  │  │Access &   │  │  │& Policy   │  │   │
│  │  │           │  │  │ Dignity   │  │  │Frameworks │  │   │
│  │  │           │  │  │           │  │  │           │  │   │
│  │  │A collabo- │  │  │Supporting │  │  │A research │  │   │
│  │  │rative le- │  │  │community- │  │  │collective │  │   │
│  │  │arning pr- │  │  │led ventu- │  │  │focused on │  │   │
│  │  │ogram des- │  │  │res and... │  │  │human-cen- │  │   │
│  │  │igned to...│  │  │           │  │  │tered AI...│  │   │
│  │  │           │  │  │           │  │  │           │  │   │
│  │  │           │  │  │           │  │  │           │  │   │
│  │  │           │  │  │           │  │  │           │  │   │
│  │  │Learn more │  │  │Learn more │  │  │Learn more │  │   │
│  │  │    →      │  │  │    →      │  │  │    →      │  │   │
│  │  │           │  │  │           │  │  │           │  │   │
│  │  └───────────┘  │  └───────────┘  │  └───────────┘  │   │
│  │  Gradient:      │  Gradient:      │  Gradient:      │   │
│  │  Violet→Aqua    │  Aqua→Mist      │  Mist→Violet    │   │
│  │  (500px tall)   │  (500px tall)   │  (500px tall)   │   │
│  │                 │                 │                 │   │
│  └─────────────────┴─────────────────┴─────────────────┘   │
│                                                              │
│  [Each card has]:                                            │
│  - Background: Gradient from card gradient colors            │
│  - Pattern overlay: Radial dots @ 10% opacity                │
│  - Border: 2px aqua on hover                                 │
│  - Glow: Shadow underneath on hover                          │
│  - Animation: Lift up 8px + scale 1.02 on hover              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Key Elements:**
- Centered header with gradient text on "the Collective"
- Subheading paragraph
- 3 gradient cards (500px height each):
  - Large emoji icon (64px)
  - Title (H3)
  - Subtitle
  - Description paragraph
  - "Learn more →" indicator
- Hover effects: lift, glow, border
- Background: Floating aurora orbs (left & right)

---

## 📍 Section 4: Chapters Preview
**Padding:** py-32 (128px top/bottom)  
**Background:** Deep Night Indigo with depth layer  
**Layout:** 5-column grid (desktop)

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                                                              │
│                    Global Chapters                           │
│                       Preview                                │
│                    ══════════                                │
│                 ("Preview" in gradient)                      │
│                                                              │
│      Our global chapters are hubs of innovation,             │
│      collaboration, and community-driven initiatives —       │
│      each adapting the Collective's philosophy to their      │
│      unique contexts.                                        │
│                                                              │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│             [SHIMMER DIVIDER - Animated sweep]               │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│                                                              │
│  ┌──────────┬──────────┬──────────┬──────────┬──────────┐  │
│  │          │          │          │          │          │  │
│  │   NEW    │  LONDON  │  TOKYO   │  BERLIN  │  SYDNEY  │  │
│  │   YORK   │          │          │          │          │  │
│  │  ─────   │  ─────   │  ─────   │  ─────   │  ─────   │  │
│  │ (H3, 24px│ (H3)     │ (H3)     │ (H3)     │ (H3)     │  │
│  │          │          │          │          │          │  │
│  │          │          │          │          │          │  │
│  │A vibrant │A global  │A leading │A hub for │A diverse │  │
│  │hub of    │center for│edge in AI│ethical AI│and dyna- │  │
│  │innovat-  │AI resea- │technolo- │and social│mic comm- │  │
│  │ion and   │rch and   │gy and ed-│innovati- │unity ex- │  │
│  │collabor- │developm- │ucation...│on, prom- │ploring...│  │
│  │ation...  │ent...    │          │oting...  │          │  │
│  │          │          │          │          │          │  │
│  │          │          │          │          │          │  │
│  └──────────┴──────────┴──────────┴──────────┴──────────┘  │
│      │           │           │           │           │      │
│   [Vertical dividers between columns - 1px aqua/10%]        │
│                                                              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Key Elements:**
- Header with "Preview" in gradient text
- Subheading paragraph
- Shimmer divider
- 5-column grid with:
  - City names (H3)
  - Descriptions
  - Vertical dividers
- Hover effect: Subtle glow
- Background: Gradient depth layer

---

## 📍 Section 5: How We Build Together
**Padding:** py-32 (128px top/bottom)  
**Background:** Deep Night Indigo  
**Layout:** 5-column grid (desktop)

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                                                              │
│                  How We Build Together                       │
│                  ══════════════════                          │
│                                                              │
│         The Collective thrives on shared principles          │
│         that guide our work, learning, and growth.           │
│                                                              │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│             [SHIMMER DIVIDER - Animated sweep]               │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│                                                              │
│  ┌──────────┬──────────┬──────────┬──────────┬──────────┐  │
│  │          │          │          │          │          │  │
│  │ COLLABO- │  LEARN   │  BUILD   │ INNOVATE │  IMPACT  │  │
│  │  RATION  │ TOGETHER │ SYSTEMS  │ BOLDLY   │ LIVES    │  │
│  │  ─────   │  ─────   │  ─────   │  ─────   │  ─────   │  │
│  │ (H4)     │ (H4)     │ (H4)     │ (H4)     │ (H4)     │  │
│  │          │          │          │          │          │  │
│  │          │          │          │          │          │  │
│  │We create │We share  │We design │We experi-│We ensure │  │
│  │through   │knowledge │with care │ment with │our work  │  │
│  │dialogue  │freely... │and prop- │courage...│touches   │  │
│  │not mono- │          │ortion... │          │real peo- │  │
│  │logue...  │          │          │          │ple...    │  │
│  │          │          │          │          │          │  │
│  │          │          │          │          │          │  │
│  └──────────┴──────────┴──────────┴──────────┴──────────┘  │
│      │           │           │           │           │      │
│   [Vertical dividers between columns - 1px aqua/10%]        │
│                                                              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Key Elements:**
- Centered header
- Subheading
- Shimmer divider
- 5-column grid with:
  - Principle names (uppercase H4)
  - Descriptions
  - Vertical dividers
- Similar layout to metrics/chapters

---

## 📍 Section 6: Events Preview
**Padding:** py-32 (128px top/bottom)  
**Background:** Deep Night Indigo  
**Layout:** Vertical list with timeline feel

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                                                              │
│                    Upcoming Events                           │
│                    ══════════════                            │
│                                                              │
│         Join us at gatherings, workshops, and                │
│         conversations happening around the world.            │
│                                                              │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│             [SHIMMER DIVIDER - Animated sweep]               │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ [●]  Dec 15, 2025  |  Workshop  |  Toronto           │  │
│  │                                                        │  │
│  │      AI Lunchbox Workshop                              │  │
│  │      Learn the fundamentals of AI systems...           │  │
│  │                                                        │  │
│  │      📍 Toronto  🕐 6:00 PM EST  👥 45 attendees       │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ [●]  Dec 22, 2025  |  Roundtable  |  London           │  │
│  │                                                        │  │
│  │      Ethics in AI Development                          │  │
│  │      A deep-dive conversation about...                 │  │
│  │                                                        │  │
│  │      📍 London  🕐 7:00 PM GMT  👥 30 attendees        │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ [●]  Jan 10, 2026  |  Showcase  |  Nairobi            │  │
│  │      ...                                               │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  (3-5 event cards total)                                    │
│                                                              │
│                                                              │
│              [View All Events →]                             │
│                                                              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Key Elements:**
- Header and subheading
- Shimmer divider
- Event cards (stacked vertically):
  - Date | Type | Location
  - Event title
  - Brief description
  - Icons for location, time, attendees
  - Hover: Gradient glow border
- "View All Events" button at bottom

---

## 📍 Section 7: Builders Preview
**Padding:** py-32 (128px top/bottom)  
**Background:** Deep Night Indigo  
**Layout:** 5-column grid of profile cards

```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│                                                              │
│                   Meet the Builders                          │
│                   ═══════════════                            │
│                                                              │
│      Every builder brings their unique perspective,          │
│      expertise, and care to the Collective.                  │
│                                                              │
│                                                              │
│  ─────────────────────────────────────────────────────────  │
│             [SHIMMER DIVIDER - Animated sweep]               │
│  ─────────────────────────────────────────────────────────  │
│                                                              │
│                                                              │
│  ┌─────┬─────┬─────┬─────┬─────┐                           │
│  │     │     │     │     │     │                           │
│  │ ┌─┐ │ ┌─┐ │ ┌─┐ │ ┌─┐ │ ┌─┐ │  Portrait cards          │
│  │ │S│ │ │M│ │ │A│ │ │J│ │ │S│ │  (3:4 aspect ratio)      │
│  │ │C│ │ │W│ │ │O│ │ │P│ │ │R│ │                           │
│  │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │  Gradient backgrounds    │
│  │ │ │ │ │ │ │ │ │ │ │ │ │ │ │ │  with initials           │
│  │ └─┘ │ └─┘ │ └─┘ │ └─┘ │ └─┘ │                           │
│  │     │     │     │     │     │                           │
│  │Name │Name │Name │Name │Name │  Name overlay at bottom  │
│  │Role │Role │Role │Role │Role │  Role below name         │
│  │Desc │Desc │Desc │Desc │Desc │  Descriptor (program)    │
│  │     │     │     │     │     │                           │
│  └─────┴─────┴─────┴─────┴─────┘                           │
│                                                              │
│  [Hover effect: Vertical beam scan + border glow]           │
│                                                              │
│                                                              │
│              [View All Builders →]                           │
│                                                              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Key Elements:**
- Header and subheading
- Shimmer divider
- 5 profile cards (portrait orientation):
  - Gradient background (role-based colors)
  - Initials in center (40% opacity)
  - Name overlay at bottom
  - Role
  - Program descriptor
  - Hover: Beam scan + glow
- "View All Builders" button

---

## 📏 Spacing & Measurements

### Section Spacing
- **Hero:** 100vh (full viewport)
- **All other sections:** py-32 (128px top + 128px bottom)
- **Between elements:** 16-32px typically

### Container Width
- **Max width:** 1280px (7xl in Tailwind)
- **Padding:** 24px (px-6)

### Grid Columns
- **5-column grids:** Metrics, Chapters, How We Build, Builders
- **3-column grid:** Three Pillars
- **1-column stack:** Events

### Card Heights
- **Pillar cards:** 500px
- **Event cards:** Auto (content-based)
- **Profile cards:** 3:4 aspect ratio

---

## 🎨 Visual Hierarchy

### Typography Sizes (Desktop)
- **H1 (Hero headline):** 96px (text-7xl)
- **H2 (Section headers):** 80px (text-6xl)
- **H3 (Card titles):** 32px (text-3xl)
- **H4 (Labels):** 24px (text-2xl)
- **Body Large:** 20-24px
- **Body:** 16px
- **Small/Caption:** 14px

### Color Usage
- **Background:** #040619 (Deep Night Indigo)
- **Primary Text:** #FDFDFB (Warm White)
- **Accent Text:** #65D6C8 (Aqua Radiance)
- **Gradient Numbers/Highlights:** Violet → Aqua → Mist

---

## 🎬 Animation Summary

### On Scroll
- Parallax on hero content (y: 0% → 30%)
- Fade in sections (opacity: 0 → 1)
- Stagger delays (0.2s increments)

### Continuous Loops
- Horizontal aurora drifts (20-25s)
- Rotating light rings (30-40s)
- Shimmer sweeps (3s + 2s delay)
- Gradient text shimmer (4s)
- Orbital particles (10s)

### Hover States
- Cards: Lift -8px, scale 1.02
- Border glow: 2px aqua + shadow
- Background: Gradient overlay fade in

---

## 📱 Responsive Behavior

### Desktop (1440px+)
- All grids at full column count
- All animations enabled
- Full parallax effects

### Tablet (768px - 1024px)
- 5-column → 2-3 column grids
- 3-column → 2 column
- Reduced parallax

### Mobile (< 768px)
- All grids → Single column stack
- Reduced font sizes (85%)
- Simplified animations
- Touch-optimized spacing

---

## ✅ Current Status

All 7 sections are **built and functional** with:
- ✅ Aurora background animations
- ✅ Scroll-triggered reveals
- ✅ Hover interactions
- ✅ Gradient effects
- ✅ Responsive layouts
- ✅ Shimmer dividers
- ✅ Particle effects

---

## 🎯 Ready for Adjustments

Now that you can visualize the structure, which section would you like to adjust first?

**Common adjustments:**
1. Change copy/content
2. Modify spacing or layout
3. Adjust animations
4. Reorder sections
5. Add/remove elements
6. Change colors or gradients

Let me know what you'd like to change! 🚀
