# Turistando Web - Setup & Installation Guide

## ✅ Project Status: Ready for Development

Your Turistando travel booking platform is fully configured and ready to use!

---

## 📋 Quick Start

### 1. Navigate to Project
```bash
cd turistando-web
```

### 2. Start Development Server
```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser to see the live app.

### 3. Start Coding
- Edit `src/app/page.tsx` to modify the home page
- Create new pages in `src/app/[page]/`
- Add components in `src/components/`

---

## 📁 Project Folder Structure

```
turistando-web/
├── .github/
│   └── copilot-instructions.md    # Development guidelines
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── favicon.ico
│   │   ├── globals.css            # Global Tailwind styles
│   │   ├── layout.tsx             # Root layout with Header/Footer
│   │   ├── page.tsx               # Home page (travel platform)
│   │   └── [routes]/              # Add new routes here
│   │
│   ├── components/                # Reusable components
│   │   ├── common/                # Shared UI components
│   │   └── layout/
│   │       ├── Header.tsx         # Navigation header
│   │       ├── Footer.tsx         # Footer with links
│   │       └── index.ts           # Exports
│   │
│   ├── features/                  # Feature modules
│   │   ├── search/                # Trip search functionality
│   │   ├── booking/               # Booking management
│   │   └── listings/              # Destination listings
│   │
│   ├── lib/                       # Utilities & helpers
│   ├── types/                     # TypeScript definitions
│   │   └── index.ts               # Trip, Booking, Destination types
│   └── constants/                 # App constants
│
├── public/                        # Static files (images, icons)
├── .eslintrc.mjs                  # ESLint config
├── .prettierrc                    # Prettier config
├── .prettierignore                # Files to skip formatting
├── next.config.ts                 # Next.js config
├── tsconfig.json                  # TypeScript config
├── tailwind.config.ts             # Tailwind CSS config
├── postcss.config.mjs             # PostCSS config
├── package.json                   # Dependencies & scripts
├── package-lock.json              # Dependency lock file
└── README.md                      # Project documentation
```

---

## 🔧 Configuration Files Reference

### `tsconfig.json` - TypeScript Configuration
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "strict": true,
    "paths": {
      "@/*": ["./src/*"]  // Path alias for imports
    }
  }
}
```

### `tailwind.config.ts` - Tailwind CSS
```typescript
// Tailwind 4 with custom travel theme colors
// Primary: Blue (#3b82f6)
// Secondary: Teal (#14b8a6)
// Full responsive design included
```

### `.prettierrc` - Code Formatter
```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "always"
}
```

### `eslint.config.mjs` - Linter
```javascript
// Includes:
// - Next.js recommended rules
// - TypeScript support
// - Prettier integration
// - Web Vitals checks
```

---

## 📦 Key Files Overview

### `src/app/layout.tsx` - Root Layout
```typescript
// Includes Header and Footer components
// Manages global metadata and fonts
// Provides root structure for all pages
```

### `src/app/page.tsx` - Home Page
```typescript
// Landing page for travel booking platform
// Features:
// - Hero section with CTA
// - Featured destinations grid
// - Trending trips section
// - Trip search form
// - Responsive design
// - Dark mode ready
```

### `src/components/layout/Header.tsx` - Navigation
```typescript
// Sticky header with:
// - Turistando logo
// - Navigation links
// - Sign In button
// - CTA button
// - Mobile responsive
```

### `src/components/layout/Footer.tsx` - Footer
```typescript
// Multi-column footer with:
// - Company info
// - Navigation links
// - Support links
// - Legal links
// - Social media icons
// - Copyright
```

### `src/types/index.ts` - TypeScript Types
```typescript
// Trip: Travel package data
// Booking: Reservation information
// Destination: Location details
```

---

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#3b82f6` - Main CTA buttons
- **Secondary Teal**: `#14b8a6` - Accents
- **Success Green**: `#10b981` - Confirmations
- **Warning Amber**: `#f59e0b` - Alerts
- **Error Red**: `#ef4444` - Errors

### Typography
- **Font Family**: Geist (Google Fonts)
- **Sizes**: Responsive Tailwind scale
- **Line Heights**: Optimized for readability

### Spacing
- Uses Tailwind spacing scale (4px base)
- Responsive padding/margins
- Mobile-first design

---

## 📦 Available npm Scripts

```bash
npm run dev              # Start development server (port 3000)
npm run build           # Create production build
npm start               # Start production server
npm run lint            # Check for linting errors
npm run lint:fix        # Auto-fix linting issues
npm run format          # Format code with Prettier
npm run format:check    # Check formatting without changes
```

---

## ⚙️ Environment Setup

### Optional: Create `.env.local`
```bash
# API endpoints (example)
NEXT_PUBLIC_API_URL=https://api.turistando.com

# Add more as needed
NEXT_PUBLIC_STRIPE_KEY=your_stripe_key
API_SECRET=your_secret_key
```

---

## 🚀 How to Use Path Aliases

The project comes with `@/*` alias configured for cleaner imports:

### Good ✅
```typescript
import { Header, Footer } from '@/components/layout';
import { Trip } from '@/types';
import { searchTrips } from '@/lib/api';
```

### Avoid ❌
```typescript
import { Header } from '../../../../components/layout/Header';
import { Trip } from '../../../types/index';
```

---

## 📱 Creating New Pages

### Method 1: Simple Route
```bash
# Create folder structure
mkdir -p src/app/trips

# Create page file
cat > src/app/trips/page.tsx << 'EOF'
export default function TripsPage() {
  return <div>All Trips</div>;
}
EOF
```

### Method 2: Route with Layout
```bash
# Create layout for route-specific styling
cat > src/app/trips/layout.tsx << 'EOF'
export default function TripsLayout({ children }) {
  return <main>{children}</main>;
}
EOF
```

---

## 🧩 Creating New Components

### Simple Functional Component
```tsx
// src/components/TripCard.tsx
import Link from 'next/link';

export function TripCard({ trip }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-2">{trip.destination}</h3>
      <p className="text-gray-600 mb-4">${trip.price}</p>
      <Link href={`/trips/${trip.id}`} className="text-blue-600 hover:underline">
        View Details
      </Link>
    </div>
  );
}
```

### Client Component with Hooks
```tsx
// src/components/SearchForm.tsx
'use client';  // Required for useState, useEffect, etc.

import { useState } from 'react';

export function SearchForm() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Search logic
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search destinations..."
        className="px-4 py-2 border rounded-lg"
      />
      <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg">
        Search
      </button>
    </form>
  );
}
```

---

## 🎓 Learning Resources

### Official Documentation
- **[Next.js Docs](https://nextjs.org/docs)** - Framework documentation
- **[Tailwind CSS Docs](https://tailwindcss.com/docs)** - Styling
- **[TypeScript Handbook](https://www.typescriptlang.org/docs)** - Type safety
- **[ESLint Guide](https://eslint.org/docs/rules)** - Code quality

### Next.js Specific
- **App Router**: [nextjs.org/docs/app](https://nextjs.org/docs/app)
- **API Routes**: [nextjs.org/docs/app/building-your-application/routing/route-handlers](https://nextjs.org/docs/app/api-reference/file-conventions/route)
- **Images**: [nextjs.org/docs/app/api-reference/components/image](https://nextjs.org/docs/app/api-reference/components/image)
- **Fonts**: [nextjs.org/docs/app/building-your-application/optimizing/fonts](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001  # Use port 3001
```

### Build Errors
```bash
# Clean and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### TypeScript Errors
```bash
# Regenerate types
rm -rf next-env.d.ts .next
npm run build
```

### Prettier Issues
```bash
# Format all files
npm run format

# Check before committing
npm run format:check
```

---

## 📤 Deployment

### Vercel (Recommended - 1 Click Deploy)
1. Push code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Click **Deploy** - that's it!

### Other Platforms
```bash
# Build for production
npm run build

# Start production server
npm start

# Runs on http://localhost:3000 in production mode
```

### Docker Deployment
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🎯 Next Steps

1. ✅ **Development**: `npm run dev` and start in `src/app/page.tsx`
2. 📝 **Add Pages**: Create new routes in `src/app/`
3. 🧩 **Build Components**: Add to `src/components/`
4. 🎨 **Customize Styles**: Edit `src/app/globals.css`
5. 🔌 **Add Features**: Create in `src/features/`
6. 📦 **Deploy**: Push to GitHub and deploy to Vercel

---

## 📞 Support

- **Issues?**: Check `/README.md` for full documentation
- **Guidelines?**: See `.github/copilot-instructions.md`
- **Questions?**: Refer to [nextjs.org/docs](https://nextjs.org/docs)

---

**Happy Building! 🚀✈️**

*Last Updated: April 2026*
