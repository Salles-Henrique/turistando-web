# Turistando - Travel Booking Platform

A modern, scalable web application for discovering and booking travel experiences. Built with Next.js 15, TypeScript, Tailwind CSS, and optimized for performance and user experience.

## 🎯 Overview

Turistando is a travel booking platform that enables users to:
- Discover destinations worldwide
- Browse curated trip packages
- Search and filter by dates, location, and preferences
- Book accommodations and experiences
- Manage travel itineraries

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Formatting**: Prettier
- **Linting**: ESLint with Next.js config
- **Package Manager**: npm

## 📂 Project Structure

```
turistando-web/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx      # Root layout component
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/         # Reusable components
│   │   ├── common/         # Common UI components
│   │   └── layout/         # Layout components (Header, Footer)
│   ├── features/           # Feature-specific modules
│   │   ├── search/         # Search functionality
│   │   ├── booking/        # Booking management
│   │   └── listings/       # Destination listings
│   ├── lib/               # Utilities and helpers
│   ├── types/             # TypeScript type definitions
│   └── constants/         # App constants
├── public/                # Static assets
├── .eslintrc.json        # ESLint configuration
├── .prettierrc            # Prettier configuration
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── postcss.config.mjs    # PostCSS configuration
└── package.json          # Dependencies and scripts
```

## ✨ Key Features

### Current Implementation
- ✅ Responsive Header with navigation
- ✅ Hero section with call-to-action
- ✅ Featured destinations showcase
- ✅ Trending trips section
- ✅ Trip search form
- ✅ Responsive Footer with links
- ✅ Dark mode ready styles
- ✅ Tailwind CSS utilities

### Path Aliases
The project is configured with path aliases for cleaner imports:
```typescript
import { Header } from '@/components/layout';
import { Trip } from '@/types';
```

## 🛠 Installation & Setup

### Prerequisites
- Node.js 18+ or 20+
- npm, yarn, pnpm, or bun

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup (Optional)
Create a `.env.local` file if needed:
```bash
cp .env.example .env.local
```

### 3. Development Server

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📦 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Lint the codebase
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format

# Check code formatting
npm run format:check
```

## 🔧 Configuration Files

### TypeScript (`tsconfig.json`)
- Strict mode enabled
- Path alias: `@/*` → `./src/*`
- React JSX transform configured

### Tailwind CSS (`tailwind.config.ts`)
- Latest Tailwind CSS 4
- Custom color scheme for travel theme
- Optimized for responsive design

### ESLint (`eslint.config.mjs`)
- Next.js recommended rules
- TypeScript support
- Prettier integration
- Web vitals rules

### Prettier (`.prettierrc`)
- Print width: 100 characters
- Single quotes for JavaScript
- Trailing commas: ES5
- Semi-colons enabled
- 2-space indentation

## 📝 Styling

### Global Styles (`src/app/globals.css`)
- Tailwind CSS integration
- Custom theme colors (Primary: Blue, Secondary: Teal)
- Semantic color tokens
- Responsive typography helpers
- Custom animations and utilities

### Tailwind Configuration
Custom colors for the travel theme:
- Primary: `#3b82f6` (Blue)
- Secondary: `#14b8a6` (Teal)
- Success: `#10b981` (Green)
- Warning: `#f59e0b` (Amber)
- Error: `#ef4444` (Red)

## 🧩 Component Structure

### Layout Components
- **Header**: Navigation bar with logo and CTA buttons
- **Footer**: Multi-column footer with links and social media

### Feature Modules
- **Search**: Trip search and filtering
- **Booking**: Booking management and confirmation
- **Listings**: Destination and accommodation display

### Common Components
Placeholder directory for shared UI components

## 🎨 Design System

The project follows a clean, modern design system optimized for travel booking:
- Color-coded actions (primary, secondary, success, warning, error)
- Consistent spacing using Tailwind scale
- Smooth transitions and hover effects
- Mobile-first responsive design
- Accessibility considerations

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and configure build settings
4. Click deploy

### Other Platforms
```bash
npm run build
npm start
```

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [ESLint Documentation](https://eslint.org/docs)

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎯 Roadmap

- [ ] User authentication
- [ ] Payment integration
- [ ] Booking management dashboard
- [ ] User reviews and ratings
- [ ] Recommendation engine
- [ ] Advanced search filters
- [ ] Mobile app (React Native)
- [ ] Admin dashboard
- [ ] API integration

## 📞 Support

For support, email support@turistando.com or open an issue in the repository.

---

**Happy Travels! 🌍✈️**
