# Turistando Web Project - Copilot Instructions

This document provides workspace-specific guidance for working with the Turistando travel booking platform project.

## Project Overview

**Turistando** is a modern travel booking platform built with:
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- ESLint & Prettier

## Development Guidelines

### Code Style & Formatting

1. **Prettier Configuration**  
   All code is automatically formatted using Prettier on save. Configuration is in `.prettierrc`.
   ```bash
   npm run format      # Format all files
   npm run format:check # Check formatting without changes
   ```

2. **Linting with ESLint**  
   The project uses ESLint with Next.js configuration and Prettier integration.
   ```bash
   npm run lint        # Run linting
   npm run lint:fix    # Auto-fix issues
   ```

### Path Aliases

Use the configured path alias `@/*` for clean imports:
```typescript
// Good ✅
import { Header, Footer } from '@/components/layout';
import { Trip } from '@/types';

// Avoid ❌
import { Header } from '../../../components/layout';
```

### Folder Structure Rules

**Components**
- Place reusable UI components in `/src/components/common/`
- Layout components (Header, Footer) go in `/src/components/layout/`
- Keep each component in its own file with index exports

**Features**
- Travel platform features live in `/src/features/`
- Each feature (search, booking, listings) is a separate module
- Keep feature-specific logic isolated

**Types & Utilities**
- All TypeScript types go in `/src/types/`
- Utilities and helpers in `/src/lib/`
- Constants in `/src/constants/`

## Common Tasks

### Adding a New Page

1. Create a folder in `src/app/` (e.g., `trips`)
2. Add `page.tsx` for the route
3. Add `layout.tsx` if you need a custom layout
4. Use the root layout from `src/app/layout.tsx` as reference

### Creating a New Component

```tsx
// src/components/MyComponent.tsx
'use client'; // Add if using hooks

import Link from 'next/link';

export function MyComponent() {
  return <div>{/* component */}</div>;
}

// Export in index for easier imports
// src/components/index.ts
export { MyComponent } from './MyComponent';
```

### Styling with Tailwind

The project uses Tailwind CSS 4 with custom colors:
- Primary: `from-blue-500 to-teal-500`
- Semantic colors defined in `src/app/globals.css`
- Dark mode support included

## Scripts Reference

```bash
npm run dev          # Start development server (port 3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Check for linting errors
npm run lint:fix     # Fix linting errors
npm run format       # Format code with Prettier
npm run format:check # Check formatting without changes
```

## Environment Variables

Create `.env.local` for environment variables (not tracked in git):
```env
# Example variables
NEXT_PUBLIC_API_URL=https://api.example.com
API_SECRET_KEY=your_secret_key
```

## Git Workflow

1. Create a feature branch: `git checkout -b feature/trip-search`
2. Make changes and commit: `git commit -m 'Add trip search feature'`
3. Push to branch: `git push origin feature/trip-search`
4. Open a Pull Request

Always run `npm run format && npm run lint:fix` before committing.

## Performance Tips

1. Use `next/Image` for images (automatic optimization)
2. Lazy load components: `const SearchBar = dynamic(() => import('./SearchBar'))`
3. Optimize fonts: Already configured with `next/font/google`
4. Use `'use client'` only when necessary (hooks, event listeners)

## Deployment

### Vercel (Recommended)
```bash
# Push to GitHub, then:
# 1. Import repository in Vercel dashboard
# 2. Vercel auto-detects Next.js
# 3. Click Deploy
```

### Other Platforms
```bash
npm run build        # Creates .next folder
npm start            # Starts production server
```

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## Troubleshooting

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001  # Use different port
```

**ESLint errors after changes:**
```bash
npm run lint:fix  # Auto-fix most issues
```

**Build fails:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

**Last Updated**: April 2026  
**Maintained By**: Turistando Team
