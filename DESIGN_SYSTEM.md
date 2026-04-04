# 🎨 TURISTANDO Design System - Complete Guide

## 📋 Table of Contents

1. [Brand Overview](#brand-overview)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Usage Rules](#usage-rules)
7. [Accessibility](#accessibility)
8. [Examples](#examples)

---

## 🌍 Brand Overview

**TURISTANDO** is a modern travel agency platform. The design system reflects:
- **Trust**: Professional, clean aesthetic
- **Adventure**: Vibrant, energetic colors
- **Navigation**: Clear, intuitive interfaces
- **Accessibility**: Inclusive design principles

### Brand Personality
- Modern & Professional
- Friendly & Approachable
- Reliable & Trustworthy
- Adventurous & Inspiring

---

## 🎨 Color Palette

### Primary Color: Dark Azure `#116973`
**Usage**: Main CTAs, Headers, Primary actions, Brand identity
- **Dark**: `#0a4f57` (Hover states)
- **Light**: `#1a8896` (Hover variations)

```css
/* Tailwind utilities */
bg-primary           /* Background */
text-primary         /* Text */
border-primary       /* Borders */
hover:bg-primary-dark /* Interactive */
```

### Secondary Color: Yellow `#F1BB19`
**Usage**: Highlights, Accents, Alerts, Secondary CTAs
- **Dark**: `#d9a616` (Hover states)
- **Light**: `#f5cc47` (Light backgrounds)

```css
/* Tailwind utilities */
bg-secondary         /* Background */
text-secondary       /* Text (use with dark text) */
hover:bg-secondary-dark
```

### Accent Color: Light Blue `#8CCDF2`
**Usage**: Informational content, Secondary highlights
- **Dark**: `#5eb8e8` (Hover states)
- **Light**: `#b1dff7` (Light backgrounds)

```css
bg-accent
text-accent
bg-gradient-ocean   /* Primary + Accent gradient */
```

### Support Color: Brown `#976A26`
**Usage**: Supporting elements, Filters, Tags, Secondary actions
- **Dark**: `#7a5520`
- **Light**: `#b8884e`

```css
bg-support
text-support
```

### Neutral Colors: Grey Scale
- **Gray 50**: `#fafafa` (Very light backgrounds)
- **Gray 100**: `#f5f5f5` (Light backgrounds)
- **Gray 200**: `#ececec` (Borders, dividers)
- **Gray 500**: `#71717a` (Secondary text)
- **Gray 700**: `#3f3f46` (Body text)
- **Gray 900**: `#18181b` (Dark text)

### Semantic Colors
- **Success**: `#10b981` (Confirmations, positive actions)
- **Warning**: `#f59e0b` (Cautions, alerts)
- **Error**: `#ef4444` (Deletions, errors)
- **Info**: `#116973` (Same as primary)

---

## ✍️ Typography

### Heading Font: Bebas Neue
**Characteristics**: Bold, distinctive, impactful
**Usage**: All headings (h1-h6)

```html
<h1>Perfect for Hero Sections</h1>
<h2>Section Titles</h2>
<h3>Subsection Headers</h3>
```

**Font Sizes**:
- h1: `3.75rem` (60px) - Page titles
- h2: `3rem` (48px) - Section titles
- h3: `2.25rem` (36px) - Subsection titles
- h4: `1.875rem` (30px) - Card titles
- h5: `1.5rem` (24px) - Smaller titles
- h6: `1.25rem` (20px) - Minor headings

### Body Font: Inter
**Characteristics**: Clean, modern, highly readable
**Usage**: Body text, paragraphs, descriptions, UI labels

```html
<p>All body content uses Inter for optimal readability</p>
<Button>UI Labels in Inter</Button>
```

**Font Sizes**:
- xs: `0.75rem` (12px) - Helper text, captions
- sm: `0.875rem` (14px) - Small text, hints
- base: `1rem` (16px) - Body text (default)
- lg: `1.125rem` (18px) - Emphasized text
- xl: `1.25rem` (20px) - Larger body

**Font Weights**:
- Regular (400): Body text
- Medium (500): Buttons, labels
- Semibold (600): Emphasis, subheadings
- Bold (700): Strong emphasis
- Black (900): Rare, headlines

### Monospace Font: Monaco
**Usage**: Code blocks, timestamps, technical content
```javascript
// Used in code examples and development contexts
```

---

## 📐 Spacing & Layout

### Spacing Scale
Follows a consistent 4px base unit:

```
4px   (0.25rem) - xs
8px   (0.5rem)  - sm
12px  (0.75rem) - md
16px  (1rem)    - lg
20px  (1.25rem) - xl
24px  (1.5rem)  - 2xl
32px  (2rem)    - 3xl
40px  (2.5rem)  - 4xl
48px  (3rem)    - 5xl
```

### Container Spacing
- **Padding**: 24px (`px-6`) for most containers
- **Gap**: 24px for component spacing
- **Margin**: 0 for flush layouts, 16-32px for breathing room

### Responsive Breakpoints
```css
sm: 640px   /* Tablets */
md: 768px   /* Small laptops */
lg: 1024px  /* Desktops */
xl: 1280px  /* Large screens */
```

---

## 🧩 Components

### 1. Button Component

**Variants**:
- **primary** (Default): Main CTAs, primary actions
- **secondary**: Secondary actions, less prominent
- **accent**: Informational actions
- **support**: Tertiary actions
- **outline**: Alternative primary action
- **ghost**: Minimal actions, hover reveal

**Sizes**:
- **sm**: Small buttons (buttons in tables, compact UI)
- **md**: Default button size
- **lg**: Prominent CTAs, hero sections
- **xl**: Large, attention-grabbing CTAs

**Tailwind Classes**:
```typescript
// Primary CTA
<Button variant="primary" size="lg">Book Now</Button>

// Secondary with outline
<Button variant="outline">Learn More</Button>

// Icon button
<Button icon={<SearchIcon />}>Search</Button>

// Loading state
<Button isLoading>Processing...</Button>

// Disabled state
<Button disabled>Not Available</Button>
```

**Usage Rules**:
- Primary buttons: One per section (CTA)
- Use secondary for navigation/less important actions
- Full-width buttons on mobile (< 768px)
- Button text should be action-oriented (Book, Search, Cancel)

---

### 2. Card Component

**Variants**:
- **default**: Standard card with border
- **elevated**: Floating appearance, heavy shadow
- **outlined**: Primary color border emphasis
- **accent**: Light background with accent color

**Anatomy**:
```typescript
<Card variant="default">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardSubtitle>Subtitle</CardSubtitle>
  </CardHeader>
  <CardImage src="..." height="h-48" />
  <CardBody>Content</CardBody>
  <CardFooter divider>Footer actions</CardFooter>
</Card>
```

**Grid Layout**:
```typescript
<CardGrid columns={3} gap={6}>
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</CardGrid>

// Responsive: 1 col (mobile), 2 cols (tablet), 3 cols (desktop)
```

**Usage Rules**:
- Consistent spacing within cards (24px padding)
- Max-width for readability: 600px for text-heavy cards
- Use CardImage for visual content (max height 200-300px)
- Footer for actions (buttons, links)

---

## 🎯 Usage Rules

### CTAs & Buttons

#### Primary CTAs (Book, Reserve, Sign Up)
```
Variant:  primary
Size:     lg
Color:    #116973
Shadow:   md/lg
Position: Hero, End of forms
```

#### Secondary CTAs
```
Variant:  secondary or outline
Size:     md
Color:    #F1BB19 or primary
Position: Below primary CTA
```

#### Navigation & Browse Actions
```
Variant:  ghost or outline
Size:     md
Position: Headers, sidebars
```

### Background Colors

#### Page Background
- **Default**: White (`#ffffff`)
- **Sections**: Gray 50 (`#fafafa`) for alternation
- **Cards**: White with shadow/border

#### Seasonal/Campaign Sections
- Use gradients: `bg-gradient-primary`, `bg-gradient-ocean`
- Overlay: Semi-transparent primary on images

### Text Color

#### Headings
- **Dark text**: Gray 900 (`#18181b`)
- **On card**: Primary color for emphasis
- **On primary background**: White

#### Body Text
- **Default**: Gray 700 (`#3f3f46`)
- **Secondary**: Gray 600 (`#52525b`) for helper text
- **Links**: Primary (`#116973`) with underline on hover

### Borders

- **Default**: Gray 200 (`#ececec`)
- **Emphasis**: Primary color (`#116973`)
- **Width**: 1px for most, 2px for outlined components

### Shadows

- **Cards**: `shadow-md` (default), `shadow-lg` (hover)
- **Buttons**: `shadow-md` with `shadow-lg` on hover
- **Modals**: `shadow-xl`
- **Brand shadows**: `shadow-primary-md`, `shadow-secondary-md`

---

## ♿ Accessibility

### Color Contrast
- All text meets WCAG AA standards (4.5:1 ratio minimum)
- Use `text-gray-700` on white backgrounds
- Use white text on primary backgrounds

### Interactive Elements
- All buttons have focus states: `focus:ring-2 focus:ring-offset-2`
- Min touch target: 44x44px on mobile
- Clear hover states (color change, shadow increase)

### Typography
- Base font size: 16px on desktop, 14px on mobile
- Line height: 1.5 for body, 1.2 for headings
- Font weight: Regular for body, Bold for emphasis

### Keyboard Navigation
- Buttons and links are keyboard focusable
- Focus outline visible with primary ring color
- Tab order follows visual order

---

## 📚 Examples

### Hero Section with CTA

```typescript
<section className="bg-gradient-primary text-white px-6 py-20 rounded-2xl text-center">
  <h1 className="text-6xl font-heading mb-6">
    Discover Your Next Adventure
  </h1>
  <p className="text-xl mb-8 max-w-2xl mx-auto">
    Explore stunning destinations and book unforgettable experiences
  </p>
  <Button variant="secondary" size="lg" fullWidth={false}>
    Browse Destinations
  </Button>
</section>
```

### Destination Card

```typescript
<Card>
  <CardImage src="destination.jpg" height="h-48" alt="Destination" />
  <CardHeader>
    <CardTitle>Paris, France</CardTitle>
    <CardSubtitle>City of Light & Romance</CardSubtitle>
  </CardHeader>
  <CardBody>
    <p className="text-gray-600">
      Discover the beauty, culture, and cuisine of Paris
    </p>
    <div className="flex gap-4 mt-4">
      <CardStat label="Rating" value="4.8" icon="⭐" />
      <CardStat label="Reviews" value="2,341" icon="💬" />
    </div>
  </CardBody>
  <CardFooter>
    <Button fullWidth variant="outline">Explore</Button>
  </CardFooter>
</Card>
```

### Trip Card Grid

```typescript
<section className="max-w-7xl mx-auto px-6 py-20">
  <h2 className="text-4xl font-heading mb-4">Featured Trips</h2>
  
  <CardGrid columns={3} gap={6}>
    {trips.map(trip => (
      <Card key={trip.id} hoverable clickable>
        <CardImage src={trip.image} />
        <CardBody>
          <h3 className="text-lg font-bold mb-2">{trip.name}</h3>
          <p className="text-gray-600 mb-4">
            {trip.duration} • {trip.price}
          </p>
          <Button variant="primary" fullWidth size="sm">
            View Details
          </Button>
        </CardBody>
      </Card>
    ))}
  </CardGrid>
</section>
```

### Call-to-Action Banner

```typescript
<div className="bg-secondary text-gray-900 rounded-xl p-12 text-center">
  <h3 className="text-3xl font-heading mb-4">
    Limited Time Offer
  </h3>
  <p className="text-lg mb-8">
    Get 20% off on all bookings this month
  </p>
  <Button variant="primary" size="lg">
    Claim Discount
  </Button>
</div>
```

---

## 🎓 Quick Reference

### Most Common Utilities

```css
/* Colors */
text-primary       /* Primary text */
bg-primary         /* Primary background */
text-secondary     /* Secondary text */
bg-secondary       /* Secondary background */

/* Spacing */
px-6               /* 24px horizontal padding */
py-4               /* 16px vertical padding */
gap-4              /* 16px gap between items */
mb-6               /* 24px margin bottom */

/* Text */
text-4xl           /* Large heading size */
font-heading       /* Bebas Neue */
font-semibold      /* Medium weight (500) */
text-gray-600      /* Secondary text color */

/* Interactive */
hover:shadow-lg    /* Hover shadow effect */
focus:ring-2       /* Focus outline */
transition-all     /* Smooth transitions */
disabled:opacity-50 /* Disabled state */

/* Layout */
rounded-lg         /* Border radius */
shadow-md          /* Drop shadow */
max-w-2xl          /* Max width constraint */
grid grid-cols-3   /* 3-column grid */
```

---

## 🚀 Implementation Checklist

- ✅ Import fonts (Bebas Neue, Inter)
- ✅ Define color variables in tailwind.config.ts
- ✅ Create Button component with variants
- ✅ Create Card component with sub-components
- ✅ Use spacing scale consistently
- ✅ Apply semantic colors for feedback
- ✅ Test keyboard navigation
- ✅ Verify color contrast (WCAG AA)
- ✅ Document component usage
- ✅ Create example pages

---

## 📖 File Structure

```
src/
├── app/
│   └── globals.css         # Theme variables, fonts
├── components/
│   ├── common/
│   │   ├── Button.tsx      # Button component
│   │   ├── Card.tsx        # Card components
│   │   └── index.ts
│   └── layout/
│       ├── Header.tsx
│       └── Footer.tsx
└── tailwind.config.ts      # Tailwind configuration
```

---

**Version**: 1.0.0  
**Last Updated**: April 2026  
**Brand**: TURISTANDO - Travel Agency Platform
