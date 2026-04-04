# 🎨 Design Tokens - TURISTANDO Brand

A comprehensive reference of all design tokens used in the TURISTANDO platform.

## Color Tokens

### Primary Palette
```
Primary (Dark Azure)
├── Primary Base    #116973 (Main color, dark text on light, buttons, links)
├── Primary Dark    #0a4f57 (Hover states, pressed states)
├── Primary Light   #1a8896 (Hover variations, light backgrounds)
└── CSS Variables
    ├── bg-primary
    ├── text-primary
    ├── border-primary
    └── hover:bg-primary-dark
```

### Secondary Palette
```
Secondary (Yellow)
├── Secondary Base    #F1BB19 (Highlights, secondary CTAs)
├── Secondary Dark    #d9a616 (Hover states)
├── Secondary Light   #f5cc47 (Light backgrounds, overlays)
└── CSS Variables
    ├── bg-secondary
    ├── text-secondary (pair with darktext for contrast)
    └── hover:bg-secondary-dark
```

### Accent Palette
```
Accent (Light Blue)
├── Accent Base    #8CCDF2 (Info, secondary highlights)
├── Accent Dark    #5eb8e8 (Hover states)
├── Accent Light   #b1dff7 (Light backgrounds)
└── CSS Variables
    ├── bg-accent
    ├── text-accent
    └── gradient-ocean (primary + accent)
```

### Support Palette
```
Support (Brown)
├── Support Base    #976A26 (Supporting elements, tags)
├── Support Dark    #7a5520 (Hover states)
├── Support Light   #b8884e (Light backgrounds)
└── CSS Variables
    ├── bg-support
    ├── text-support
    └── border-support
```

### Neutral Palette
```
Gray Scale
├── Gray 50    #fafafa (Very light backgrounds)
├── Gray 100   #f5f5f5 (Light backgrounds, alternation)
├── Gray 200   #ececec (Borders, dividers)
├── Gray 300   #d4d4d8 (Subtle borders)
├── Gray 400   #a1a1a6 (Placeholder text)
├── Gray 500   #71717a (Secondary text)
├── Gray 600   #52525b (Helper text)
├── Gray 700   #3f3f46 (Body text)
├── Gray 800   #27272a (Strong text)
└── Gray 900   #18181b (Darkest text)
```

### Semantic Colors
```
Feedback Colors
├── Success    #10b981 (Confirmations, positive actions)
├── Warning    #f59e0b (Alerts, cautions)
├── Error      #ef4444 (Errors, deletions, warnings)
└── Info       #116973 (Information, same as primary)
```

## Typography Tokens

### Font Families
```typescript
// Sans Serif (Body)
font-sans: 'Inter', system-ui, -apple-system, 'Segoe UI'
// - Weights: 100, 200, 300, 400, 500, 600, 700, 800, 900
// - Perfect for: Body text, labels, UI elements

// Display (Headings)
font-heading: 'Bebas Neue', system-ui, sans-serif
// - Weight: 400 (single weight available)
// - Perfect for: All heading levels, impact text

// Monospace (Code)
font-mono: 'Monaco', 'Courier New', monospace
// - Perfect for: Code blocks, timestamps, technical content
```

### Font Sizes
```
Heading Sizes (Bebas Neue)
├── h1    3.75rem (60px) - Page titles, hero headlines
├── h2    3rem    (48px) - Section titles
├── h3    2.25rem (36px) - Subsection titles
├── h4    1.875rem (30px) - Card titles
├── h5    1.5rem  (24px) - Smaller titles
└── h6    1.25rem (20px) - Minor headings

Body Sizes (Inter)
├── xs     0.75rem (12px) - Caption, helper text
├── sm     0.875rem (14px) - Small text, labels
├── base   1rem    (16px) - Body text (default)
├── lg     1.125rem (18px) - Emphasized text
├── xl     1.25rem (20px) - Larger body
├── 2xl    1.5rem  (24px) - Large text
├── 3xl    1.875rem (30px) - Extra large
├── 4xl    2.25rem (36px) - Huge text
├── 5xl    3rem    (48px) - Massive text
├── 6xl    3.75rem (60px) - Huge text
└── 7xl    4.5rem  (72px) - Massive text
```

### Line Heights
```
Reading Comfort
├── tight    1.25 (Headings, compact)
├── snug     1.375 (Headings, slightly loose)
├── normal   1.5 (Body text, default)
├── relaxed  1.625 (Body text, loose)
└── loose    2 (Very spacious, special cases)
```

### Font Weights
```
Inter Weights
├── 100  thin
├── 200  extralight
├── 300  light (For secondary/disabled)
├── 400  normal (Body text)
├── 500  medium (Buttons, emphasized UI)
├── 600  semibold (Subheadings, important text)
├── 700  bold (Strong emphasis)
├── 800  extrabold (Extra strong)
└── 900  black (Maximum emphasis, rare)

Bebas Neue Weight
└── 400  normal (Standard, only available weight)
```

## Spacing Tokens

### Spacing Scale
```
4px Base Unit
├──  4px  (0.25rem) - xs
├──  8px  (0.5rem)  - sm
├── 12px  (0.75rem) - md
├── 16px  (1rem)    - lg
├── 20px  (1.25rem) - xl
├── 24px  (1.5rem)  - 2xl (most common padding)
├── 32px  (2rem)    - 3xl
├── 40px  (2.5rem)  - 4xl
├── 48px  (3rem)    - 5xl (large sections)
├── 64px  (4rem)    - 6xl (hero sections)
├── 80px  (5rem)    - 7xl
├── 96px  (6rem)    - 8xl
├── 128px (8rem)    - 9xl
└── 160px (10rem)   - 10xl
```

### Padding
```
Common Padding Values
├── Card/Container      px-6 py-4 (24px horizontal, 16px vertical)
├── Large Section       px-6 py-20 (24px horizontal, 80px vertical)
├── Compact UI          px-4 py-2 (16px horizontal, 8px vertical)
└── Extra Spacious      px-8 py-6 (32px horizontal, 24px vertical)
```

### Margin & Gap
```
Gaps Between Elements
├── Tight      gap-2 (8px)
├── Compact    gap-3 (12px)
├── Normal     gap-4 (16px)
├── Spacious   gap-6 (24px)
└── Very Open  gap-8 (32px)
```

## Border Tokens

### Border Radius
```
Rounded Corners
├── sm        0.25rem (4px) - Subtle, buttons/small elements
├── default   0.5rem  (8px) - Standard radius
├── md        0.5rem  (8px) - Medium
├── lg        0.75rem (12px) - Large
├── xl        1rem    (16px) - Extra large
├── 2xl       1.5rem  (24px) - Card corners
├── 3xl       2rem    (32px) - Sections
└── full      9999px  - Fully rounded (pills, circles)
```

### Border Width
```
Default      1px (Most elements)
Emphasis     2px (Outlined buttons, focused states)
Thick        4px (Rare, special emphasis)
```

## Shadow Tokens

### Drop Shadows
```
Default Shadows (Dark Azure Primary at Various Opacities)
├── xs      small, subtle (1px down, 0.05 opacity)
├── sm      small, light (3px down, 0.1 opacity)
├── md      medium, normal (6px down, 0.1 opacity) - Cards default
├── lg      large, pronounced (15px down, 0.1 opacity) - Card hover
├── xl      extra large, strong (25px down, 0.1 opacity) - Modals
├── 2xl     huge shadow (50px down, 0.25 opacity) - Floating elements
└── inner   inside shadow

Brand Shadows
├── shadow-primary-sm   Primary color at 15% opacity
├── shadow-primary-md   Primary color at 25% opacity
├── shadow-secondary-sm Secondary color at 15% opacity
└── shadow-secondary-md Secondary color at 25% opacity
```

## Component Tokens

### Button Tokens
```
Sizes
├── sm  px-4 py-1.5 text-sm (Small, compact)
├── md  px-6 py-2.5 text-base (Default, standard)
├── lg  px-8 py-3 text-lg (Large, prominent)
└── xl  px-10 py-4 text-lg (Extra large, hero)

States
├── Default     Full opacity, solid color
├── Hover       Darker shade, increased shadow
├── Active      Same as pressed (darker)
├── Focus       Ring outline focus:ring-2 focus:ring-offset-2
├── Disabled    opacity-50, cursor-not-allowed
└── Loading     Spinner animation, disabled interaction
```

### Card Tokens
```
Padding
├── Header    px-6 py-4 with bottom border
├── Body      px-6 py-4 (can be no padding)
└── Footer    px-6 py-4 with top border

Sizes
├── Small     max-w-sm (384px)
├── Medium    max-w-md (448px)
├── Large     max-w-lg (512px)
└── X-Large   max-w-2xl (672px)
```

## Animation Tokens

### Transitions
```
Duration
├── 200ms   Quick interactions
├── 250ms   Standard transition
├── 300ms   Noticeable animation
└── 350ms   Elaborate animation

Timing Functions
├── ease-in    Slow start, fast end
├── ease-out   Fast start, slow end
├── ease-in-out Slow start and end
└── cubic-bezier Custom curves
```

### Keyframe Animations
```
Pre-built Animations
├── fadeIn           0.3s ease-in (Opacity change)
├── slideInUp        0.4s ease-out (From below)
├── slideInDown      0.4s ease-out (From above)
├── slideInLeft      0.4s ease-out (From left)
├── slideInRight     0.4s ease-out (From right)
├── pulse            2s infinite (Breathing effect)
└── bounce           1s infinite (Bouncing effect)
```

## Breakpoint Tokens

### Responsive Design
```
Device Sizes
├── Mobile      < 640px (sm)
├── Tablet      640px - 1024px (md-lg)
├── Desktop     > 1024px (xl, 2xl)

CSS Example
md:grid-cols-2     // 2 columns on tablets
lg:grid-cols-3     // 3 columns on desktop
xl:max-w-6xl       // Max width on large screens
```

## Z-Index Scale

```
Layering (Stacking Order)
├── Static     0 (default)
├── Relative   1 (minor elevations)
├── Sticky     10 (sticky headers)
├── Fixed      20 (fixed navigation)
├── Dropdown   30 (dropdowns, menus)
├── Modal      40 (modals, overlays)
├── Popover    50 (popovers, tooltips)
└── Notification 60 (toast messages, alerts)
```

## Usage Examples

### Quick Color Reference
```typescript
// Primary brand color
<Button className="bg-primary text-white">Book Now</Button>

// Secondary accent
<div className="bg-secondary text-gray-900">
  Special Offer!
</div>

// Semantic feedback
<Alert className="text-error">Error message</Alert>
<Notification className="text-success">Success!</Notification>

// Text hierarchy
<h1 className="text-primary">Main Title</h1>
<p className="text-gray-700">Body text</p>
<span className="text-gray-500">Helper text</span>
```

### Component Spacing
```typescript
// Standard card
<Card className="p-6">
  <h3 className="mb-4">Title</h3>
  <p className="mb-6">Content</p>
  <Button>Action</Button>
</Card>

// Grid with consistent gaps
<div className="grid grid-cols-3 gap-6">
  {cards.map(card => <Card key={card.id}>{card}</Card>)}
</div>

// Section spacing
<section className="px-6 py-20">
  <h2 className="text-4xl mb-8">Section Title</h2>
  <p className="mb-6">Content here</p>
</section>
```

---

**Document Version**: 1.0.0  
**Last Updated**: April 2026  
**Brand**: TURISTANDO

For implementation details, see [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)
