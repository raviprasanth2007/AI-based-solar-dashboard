# UI/UX Design System Specification
## BIT Energy Command Center (ECC)
**Subtitle:** AI-Powered Campus Energy Intelligence & Monitoring Platform

---

## 1. DESIGN PHILOSOPHY
The design philosophy for the BIT ECC revolves around a mission-critical, industrial dashboard aesthetic. The product personality is authoritative, precise, and highly reliable. Drawing visual identity elements from aerospace and modern energy grids, the brand values emphasize data integrity and user confidence. The emotional feeling should be one of control and calm, assuring users that despite complex underlying data, the system is highly capable. Minimalism is employed not for the sake of emptiness, but to eliminate visual noise, ensuring that critical anomalies stand out instantly.

## 2. USER EXPERIENCE PRINCIPLES
- **Clarity & Readability:** High contrast and legible typography ensure data is immediately digestible.
- **Consistency:** Uniform interaction patterns reduce cognitive load.
- **Hierarchy:** Critical metrics (e.g., Total Consumption, Alerts) dominate the visual field.
- **Discoverability:** Complex filters and analytics are logically grouped and easily found.
- **Accessibility:** Ensure high contrast and logical tab flows.
- **Efficiency:** Minimize clicks required to navigate from macro (campus) to micro (building) views.
- **Visual Balance & Professionalism:** Strict adherence to grid alignment and spacing.
- **Error Prevention:** Destructive actions are guarded; inputs are validated in real-time.

## 3. DESIGN GOALS
The interface must feel:
- **Modern & Premium:** Utilizing glassmorphism and subtle gradients.
- **Enterprise & High-tech:** Evoking the feel of an advanced control room.
- **Reliable & Fast:** Instant feedback and zero perceived latency.
- **Clean & Minimal:** Data-focused with zero unnecessary ornamentation.

## 4. DESIGN INSPIRATION
The design language is an original synthesis inspired by the best traits of top-tier enterprise software:
- The deep analytics and modularity of **Datadog** and **Grafana**.
- The sleek, dark, data-dense aesthetics of **Tesla Energy**.
- The structural rigidity and enterprise-grade navigation of **Microsoft Azure Portal** and **AWS Console**.
- The industrial reliability of **Schneider Electric EcoStruxure** and **Honeywell Forge**.

## 5. APPLICATION LAYOUT
- **Sidebar:** Left-aligned, collapsible vertical navigation.
- **Top Navigation:** Contains global search, breadcrumbs, time, and user profile.
- **Workspace:** The main fluid content area.
- **Dashboard Grid:** A 12-column CSS Grid layout for widgets and cards.
- **Panels/Modals:** Slide-out right drawer panels for detailed settings/filters, and center-aligned modal windows for critical alerts.
- **Empty/Loading States:** Skeleton loaders matching the exact dimensions of the expected content.

## 6. RESPONSIVE GRID SYSTEM
- **Grid System:** 12-column grid structure.
- **Breakpoints:**
  - `sm`: 640px
  - `md`: 768px (Tablet)
  - `lg`: 1024px (Laptop)
  - `xl`: 1280px (Desktop)
  - `2xl`: 1536px (Large Monitor)
  - `3xl`: 1920px (Ultra-wide)
- **Spacing Rules:** Base 8pt grid system.
- **Gutter Width:** 24px on desktop, 16px on mobile.

## 7. SIDEBAR DESIGN
- **Width:** 260px (Expanded), 80px (Collapsed).
- **Icons:** 20x20px Lucide icons, aligned left.
- **Hover/Active:** Subtle glow effect with a left border accent (`#3B82F6`).
- **Animations:** 300ms ease-in-out for expanding/collapsing.
- **Footer:** Contains global settings and user profile to anchor the layout.

## 8. TOP NAVIGATION
- **Height:** 64px fixed.
- **Global Search:** Centered, expansive search bar with a `/` keyboard shortcut hint.
- **Notifications:** Bell icon with a distinct red dot for unread critical alerts.
- **Breadcrumbs:** Muted gray text, slashes as separators.
- **Spacing:** Elements padded uniformly at 16px.

## 9. DASHBOARD DESIGN
- **Visual Hierarchy:** Top row reserved for primary KPI Cards (Consumption, Cost, Carbon). Second row for primary area chart (Consumption Trend). Third row for breakdowns (Donut charts, Heatmaps).
- **Live Updates:** Glowing green pulsing dot next to "Live Status" indicators.
- **Card Alignment:** Strict alignment to the 12-column grid. No orphaned or oddly sized cards.

## 10. CARD DESIGN SYSTEM
- **Background:** `#111827` (Gray-900) with a slight glassmorphic blur if positioned over complex backgrounds.
- **Border:** `#1F2937` (Gray-800), 1px solid.
- **Elevation:** Subtle drop shadow `0 4px 6px -1px rgba(0, 0, 0, 0.5)`.
- **Border Radius:** 12px (Rounded-xl).
- **Padding:** 24px (p-6) globally for internal content spacing.

## 11. TYPOGRAPHY SYSTEM
- **Font Family:** Inter or Roboto (Sans-serif, highly legible for numbers).
- **Heading 1:** 30px, Semibold, White.
- **Heading 2:** 24px, Semibold, White.
- **Paragraph:** 14px, Regular, `#94A3B8`.
- **KPI Numbers:** 36px, Bold, tabular-nums (to prevent horizontal shifting).
- **Chart Labels:** 12px, Medium, `#64748B`.

## 12. ICONOGRAPHY
- **Style:** Clean, unicolor stroke icons (Lucide/Feather style).
- **Stroke Width:** 2px.
- **Size:** 20px (Navigation), 16px (Buttons), 24px (KPI Headers).
- **Consistency:** Sharp edges, open paths, strictly adherence to the stroke width.

## 13. SPACING SYSTEM
- **Base Unit:** 8px.
- **Variables:** `spacing-1` (4px) through `spacing-12` (96px).
- **Section Spacing:** 32px (margin-bottom) between distinct dashboard rows.
- **Inner Padding:** 24px inside cards.

## 14. COLOR SYSTEM
- **Background:** `#070B12` (Deep Space Blue/Black)
- **Surface (Cards):** `#111827`
- **Borders:** `#1F2937`
- **Primary:** `#3B82F6` (Electric Blue)
- **Success:** `#10B981` (Emerald Green)
- **Warning:** `#F59E0B` (Amber)
- **Critical/Error:** `#EF4444` (Vibrant Red)
- **Accent/AI:** `#8B5CF6` (Purple)
- **Text Primary:** `#FFFFFF`
- **Text Secondary:** `#94A3B8`

## 15. GLASSMORPHISM SYSTEM
- **Backdrop Blur:** `blur(12px)`
- **Background Opacity:** `rgba(17, 24, 39, 0.7)`
- **Borders:** 1px solid `rgba(255, 255, 255, 0.1)`
- **Use Case:** Top navigation, floating panels, and map popups to maintain context of underlying data.

## 16. SHADOW SYSTEM
- **Card Shadow:** `0 4px 10px rgba(0,0,0,0.4)`
- **Hover Shadow:** `0 10px 25px rgba(0,0,0,0.6)` - Creates a floating effect.
- **Modal/Dropdown Shadow:** `0 25px 50px -12px rgba(0,0,0,0.8)`

## 17. BORDER SYSTEM
- **Radius:** 12px for primary containers (Cards, Modals), 6px for interactive elements (Buttons, Inputs).
- **Thickness:** 1px globally to maintain a crisp, refined look.
- **Dividers:** 1px solid `#1F2937`.

## 18. BUTTON DESIGN
- **Primary:** Solid `#3B82F6` background, White text. Hover: `#2563EB`.
- **Secondary:** Transparent background, 1px solid `#3B82F6`, `#3B82F6` text.
- **Ghost:** No background, `#94A3B8` text. Hover: `#1F2937` background, White text.
- **Icon Button:** 40x40px square with 6px radius, centered icon.

## 19. TABLE DESIGN
- **Header:** Sticky top, uppercase, 12px, font-semibold, `#94A3B8` text, `#111827` background.
- **Rows:** 1px bottom border `#1F2937`. Hover state: `#1E293B` background.
- **Status Indicators:** Small colored dots (Green, Yellow, Red) preceding the text.
- **Pagination:** Simple prev/next arrows with current page numeric input.

## 20. CHART DESIGN
- **Area Charts:** Smooth curves (`monotone`), subtle gradient fills fading to 0% opacity at the bottom.
- **Grid Lines:** Horizontal only, dashed, `#1F2937`.
- **Tooltips:** Custom glassmorphic tooltip with precise data points, avoiding native browser styles.
- **Legends:** Top-right aligned, utilizing circular markers.

## 21. MAP DESIGN
- **Tiles:** CARTO Dark Matter or custom dark tiles matching `#070B12`.
- **Markers:** Pulsing circles. Size correlates to consumption; color correlates to efficiency.
- **Popups:** Custom HTML popups matching Card Design System. Arrow points exactly to the marker.
- **Controls:** Minimal, bottom-right aligned zoom controls.

## 22. FILTER SYSTEM
- **Global Filters:** Positioned in the Topbar (e.g., Global Date Range).
- **Local Filters:** Positioned above Tables/Charts. Utilizes pill-shaped dropdowns.
- **Quick Filters:** Pre-defined buttons (e.g., "Last 24h", "This Week").

## 23. SEARCH EXPERIENCE
- **Interaction:** `Cmd/Ctrl + K` opens a centralized, blurred modal overlay.
- **Results:** Categorized by Buildings, Alerts, and Reports. Immediate keystroke rendering.

## 24. ALERT DESIGN
- **Critical (Red):** Pulsing animation, requires manual acknowledgment.
- **High (Orange), Medium (Yellow), Low (Blue), Info (Gray).**
- **Placement:** Slide-in toasts from the top-right for real-time; dedicated full-page list for historical.

## 25. AI INSIGHTS DESIGN
- **Visual Distinction:** Outlined with a subtle Purple (`#8B5CF6`) border or glow.
- **Structure:** Title, AI Confidence Score (percentage with progress bar), Estimated Savings ($), and an Actionable Recommendation button.

## 26. BUILDING DETAILS PAGE
- **Layout:** 
  - Header: Building Name, Status Badge, High-level KPIs.
  - Row 1: Massive 24-hour load profile chart.
  - Row 2: Power Source Donut Chart, Efficiency Radar Chart, AI Insights list.
  - Row 3: Event/Alert Timeline.

## 27. REPORTS PAGE
- **Layout:** Grid of report templates (Daily Digest, Carbon Footprint). 
- **Generation:** Slide-out right drawer for configuring date ranges and formats (PDF/CSV) with a "Preview" pane.

## 28. LOADING STATES
- **Strategy:** Skeleton screens matching exact final geometry. Dark gray pulsing animation (`animate-pulse`). No generic spinner rings for primary page loads.

## 29. EMPTY STATES
- **Visuals:** Muted, desaturated illustration or icon (64x64px), centered, with a clear, concise message (e.g., "No critical alerts at this time") and a primary action button if applicable.

## 30. ERROR STATES
- **Display:** Full-container overlay with a bold Red icon, error code, and a "Retry Connection" button. Never expose raw stack traces to the end user.

## 31. ANIMATION SYSTEM
- **Transitions:** `150ms ease-in-out` for all hover states. `300ms` for drawer slides.
- **Counters:** Number odometers spin rapidly from 0 to target value on page load.
- **Rule:** Animations must never delay the user. If an animation takes longer than 300ms, it is too slow.

## 32. ACCESSIBILITY
- **Contrast:** Ensure text against background exceeds 4.5:1 ratio.
- **Focus:** `focus:ring-2 focus:ring-blue-500 focus:outline-none` on all interactive elements.
- **Charts:** Support patterns or distinct lightness variations for color-blind users.

## 33. USER EXPERIENCE FLOW
- **Journey:** User lands on Dashboard -> Notices red dot on Map -> Clicks Building marker -> Popup reveals alert -> Clicks "View Details" -> Transitions to Building Page -> Reviews AI Insight -> Clicks "Acknowledge". This entire flow must require zero scrolling and minimal cognitive effort.

## 34. VISUAL CONSISTENCY RULES
- **Zero Overlap:** Absolute positioning is strictly governed by z-indexes (Map = 0, Modals = 50, Popovers = 40).
- **No Rogue Colors:** Any hex code not defined in Section 14 is strictly forbidden.
- **Alignment:** Every edge of a card must align with the card above, below, or beside it based on the 12-column grid.

## 35. DESIGN QA CHECKLIST
- [ ] Are all margins and paddings multiples of 8?
- [ ] Is the primary typeface Inter/Roboto without exception?
- [ ] Do all interactive elements have visible hover and focus states?
- [ ] Are there zero native scrollbars visible inside cards? (Use custom thin, dark scrollbars).
- [ ] Does the UI render perfectly without overlap on a 1280px width screen?
- [ ] Do all AI elements utilize the designated Purple accent for immediate recognition?
- [ ] Is the interface completely devoid of pure white backgrounds?
