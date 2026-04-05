'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface FavoriteContextType {
  favorites: Set<string>;
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  clearFavorites: () => void;
  favoriteCount: number;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

/**
 * Favorite Provider Component
 * Manages global state for user's favorite destinations
 * 
 * Persists to localStorage for persistence across sessions
 */
export function FavoriteProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [isHydrated, setIsHydrated] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('turistando_favorites');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setFavorites(new Set(parsed));
      } catch (error) {
        console.error('Failed to parse favorites:', error);
      }
    }
    setIsHydrated(true);
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('turistando_favorites', JSON.stringify(Array.from(favorites)));
    }
  }, [favorites, isHydrated]);

  const addFavorite = (id: string) => {
    setFavorites((prev) => {
      const newSet = new Set(prev);
      newSet.add(id);
      return newSet;
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites((prev) => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const isFavorite = (id: string) => {
    return favorites.has(id);
  };

  const clearFavorites = () => {
    setFavorites(new Set());
  };

  const value: FavoriteContextType = {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    clearFavorites,
    favoriteCount: favorites.size,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

/**
 * Hook to use favorite context
 * 
 * @example
 * const { favorites, toggleFavorite, isFavorite } = useFavorites();
 */
export function useFavorites() {
  const context = useContext(FavoriteContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoriteProvider');
  }
  return context;
}
