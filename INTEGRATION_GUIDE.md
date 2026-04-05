# 🔗 Integration Guide - Using UX Improvements

## Quick Start

This guide shows how to integrate the new UX components into your pages with real examples.

---

## 1️⃣ Replace DestinationCard

### Step 1: Update Import
```typescript
// OLD
import { DestinationCard } from '@/components/sections/DestinationCard';

// NEW - Use enhanced version
import { DestinationCard } from '@/components/sections/DestinationCardEnhanced';
```

### Step 2: Usage (Same API!)
```typescript
<DestinationCard 
  destination={destination}
  onViewDetails={(id) => router.push(`/destinations/${id}`)}
  showFavorite={true}  // NEW: Show favorite button
/>
```

---

## 2️⃣ Add Loading States

### Pattern: Skeleton while loading, content when ready

```typescript
'use client';

import { useState, useEffect } from 'react';
import { CardSkeletonGrid } from '@/components/common/Skeleton';
import { DestinationCard } from '@/components/sections/DestinationCardEnhanced';

export function DestinationsPage() {
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setDestinations(destinationsData); // Your data here
    setIsLoading(false);
  };

  // LOADING STATE
  if (isLoading) {
    return <CardSkeletonGrid count={6} columns={3} />;
  }

  // LOADED STATE
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {destinations.map(dest => (
        <DestinationCard 
          key={dest.id}
          destination={dest}
          onViewDetails={(id) => router.push(`/destinations/${id}`)}
          showFavorite={true}
        />
      ))}
    </div>
  );
}
```

---

## 3️⃣ Add Empty States

### Pattern: Show helpful message when no results

```typescript
import { EmptyState } from '@/components/common/EmptyState';

export function FavoritesPage() {
  const { favorites } = useFavorites();

  // NO DATA STATE
  if (favorites.size === 0) {
    return (
      <EmptyState
        variant="no-favorites"
        title="Nenhum favorito ainda"
        description="Comece a explorar e adicione seus destinos favoritos"
        action={{
          label: "Explorar Destinos",
          onClick: () => router.push('/destinations'),
          icon: <PlusIcon />
        }}
      />
    );
  }

  // LOADED STATE
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from(destinations).map(dest => (
        <DestinationCard key={dest.id} destination={dest} />
      ))}
    </div>
  );
}
```

---

## 4️⃣ Use Global Favorites

### Pattern: Access favorites anywhere using the hook

```typescript
import { useFavorites } from '@/contexts/FavoriteContext';

export function FavoriteButton({ destinationId }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFav = isFavorite(destinationId);

  return (
    <button
      onClick={() => toggleFavorite(destinationId)}
      className={`
        transition-all duration-200
        ${isFav ? 'text-red-500 text-2xl' : 'text-gray-400 text-xl'}
        hover:scale-110
      `}
    >
      ♥
    </button>
  );
}
```

---

## 5️⃣ Complete Page Example

### Real-world destinations page with all features

```typescript
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CardSkeletonGrid } from '@/components/common/Skeleton';
import { EmptyState } from '@/components/common/EmptyState';
import { DestinationCard } from '@/components/sections/DestinationCardEnhanced';
import { Button } from '@/components/common/Button';
import { destinationsData } from '@/data/destinations';
import { useFavorites } from '@/contexts/FavoriteContext';

export default function DestinationsPage() {
  const router = useRouter();
  const { favoriteCount } = useFavorites();

  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredDestinations, setFilteredDestinations] = useState([]);

  // Load destinations
  useEffect(() => {
    loadDestinations();
  }, []);

  // Filter destinations
  useEffect(() => {
    let filtered = [...destinations];

    if (searchQuery.trim()) {
      filtered = filtered.filter(d =>
        d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(d => d.category === selectedCategory);
    }

    setFilteredDestinations(filtered);
  }, [destinations, searchQuery, selectedCategory]);

  const loadDestinations = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    setDestinations(destinationsData);
    setIsLoading(false);
  };

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-heading font-bold text-gray-900">
                Destinos Incríveis
              </h1>
              <p className="text-gray-600">
                Explore {destinations.length} destinos
                {favoriteCount > 0 && ` • ${favoriteCount} favorito(s)`}
              </p>
            </div>
            <Button 
              variant="secondary" 
              onClick={() => router.push('/favorites')}
            >
              ♥ Favoritos ({favoriteCount})
            </Button>
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Buscar destinos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary transition-all"
          />

          {/* Filters */}
          <div className="flex gap-3 mt-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="all">Todas as categorias</option>
              <option value="beach">Praia</option>
              <option value="mountain">Montanha</option>
              <option value="city">Cidade</option>
              <option value="adventure">Aventura</option>
            </select>

            {(searchQuery || selectedCategory !== 'all') && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleReset}
              >
                ✕ Limpar
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        {/* LOADING STATE */}
        {isLoading && (
          <div className="animate-fade-in">
            <CardSkeletonGrid count={6} columns={3} />
          </div>
        )}

        {/* EMPTY STATE */}
        {!isLoading && filteredDestinations.length === 0 && (
          <div className="animate-fade-in">
            <EmptyState
              variant="search"
              title="Nenhum destino encontrado"
              description="Tente alterar seus filtros ou busca"
              action={{
                label: "Limpar filtros",
                onClick: handleReset
              }}
            />
          </div>
        )}

        {/* LOADED STATE */}
        {!isLoading && filteredDestinations.length > 0 && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDestinations.map((dest, idx) => (
                <div 
                  key={dest.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <DestinationCard
                    destination={dest}
                    onViewDetails={(id) => router.push(`/destinations/${id}`)}
                    showFavorite={true}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
```

---

## 6️⃣ Component Exports

### Ensure all components are exported from index files:

#### `src/components/common/index.ts`
```typescript
export { Button } from './Button';
export { Card, CardHeader, CardBody, CardFooter, CardImage } from './Card';
export { Skeleton, CardSkeleton, CardSkeletonGrid } from './Skeleton'; // NEW
export { EmptyState } from './EmptyState'; // NEW
```

#### `src/components/sections/index.ts`
```typescript
export { DestinationCard as DestinationCardOriginal } from './DestinationCard';
export { DestinationCard } from './DestinationCardEnhanced'; // NEW (default)
// ... other sections
```

---

## 7️⃣ Styles Applied

### Animation Classes Available

```typescript
// Fade animations
className="animate-fade-in"           // 0.5s fade in
className="animate-fade-in-up"        // 0.6s fade + slide up

// Slide animations
className="animate-slide-in-left"     // Slide from left
className="animate-slide-in-right"    // Slide from right

// Loading animations
className="animate-pulse"             // Pulse effect
className="animate-shimmer"           // Shimmer effect
className="animate-spin-smooth"       // Smooth spinner

// Special animations
className="animate-bounce-subtle"     // Subtle bounce
className="animate-heartbeat"         // Heartbeat effect

// Delays (use with animations)
className="animate-fade-in delay-100" // 100ms delay
className="animate-fade-in delay-200" // 200ms delay
className="animate-fade-in delay-300" // 300ms delay
```

---

## 8️⃣ Common Patterns

### Pattern: Staggered Animation

```typescript
{items.map((item, index) => (
  <div
    key={item.id}
    className="animate-fade-in-up"
    style={{ animationDelay: `${index * 50}ms` }}
  >
    {/* Content */}
  </div>
))}
```

### Pattern: Conditional Rendering

```typescript
// Show skeleton while loading
{isLoading ? <CardSkeleton /> : <ActualCard />}

// Show empty state while no data
{items.length === 0 ? <EmptyState /> : <ItemsList />}
```

### Pattern: Toggle with Animation

```typescript
{isFavorite ? (
  <div className="animate-heartbeat text-red-500">♥</div>
) : (
  <div className="text-gray-400">♡</div>
)}
```

---

## 9️⃣ TypeScript Types

### Key interfaces to import:

```typescript
// Components
import type { EmptyStateProps } from '@/components/common/EmptyState';
import type { SkeletonProps } from '@/components/common/Skeleton';
import type { ButtonProps } from '@/components/common/Button';
import type { DestinationCardProps } from '@/components/sections/DestinationCardEnhanced';

// Context
import type { FavoriteContextType } from '@/contexts/FavoriteContext';

// Data
import type { Destination } from '@/data/destinations';
```

---

## 📋 Migration Checklist

- [ ] Import `CardSkeletonGrid` in loading pages
- [ ] Replace `DestinationCard` with enhanced version
- [ ] Add `EmptyState` to pages with empty data
- [ ] Wrap app with `FavoriteProvider` (already done in layout)
- [ ] Use `useFavorites()` hook in components
- [ ] Add animation classes to elements
- [ ] Test favorite button functionality
- [ ] Verify all animations smooth on mobile
- [ ] Test keyboard navigation
- [ ] Verify localStorage persistence

---

## 🆘 Troubleshooting

### Favorites not working?
```typescript
// Make sure layout is wrapped with FavoriteProvider
<FavoriteProvider>
  <YourApp />
</FavoriteProvider>
```

### Animations not showing?
```typescript
// Make sure globals.css is imported in layout.tsx
import './globals.css';
```

### Build errors?
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

---

## 📚 Related Files

- **UX_IMPROVEMENTS.md** - Detailed documentation
- **EXAMPLE_ENHANCED_PAGE.tsx** - Working example
- **UX_IMPROVEMENTS_SUMMARY.md** - Executive summary

---

## ✅ Integration Complete!

Your app now has:
- ✅ Professional loading states
- ✅ Helpful empty states
- ✅ Global favorites system
- ✅ Smooth microinteractions
- ✅ Enhanced cards with hover effects
- ✅ Better button feedback

**Ready to delight your users!** 🎉
