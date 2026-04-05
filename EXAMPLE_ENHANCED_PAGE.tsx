'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CardSkeletonGrid } from '@/components/common/Skeleton';
import { EmptyState } from '@/components/common/EmptyState';
import { DestinationCard } from '@/components/sections/DestinationCardEnhanced';
import { Button } from '@/components/common/Button';
import { destinationsData } from '@/data/destinations';
import { useFavorites } from '@/contexts/FavoriteContext';

/**
 * EXAMPLE: Enhanced Destinations Page with UX Improvements
 * 
 * Demonstrates:
 * - Loading skeletons during data fetch
 * - Empty state when no results
 * - Enhanced destination cards with favorites
 * - Better button states
 * - Smooth transitions
 * 
 * This is example code. Copy patterns to your own pages.
 */
export function DestinationsPageEnhanced() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [destinations, setDestinations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredDestinations, setFilteredDestinations] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  
  const { favoriteCount } = useFavorites();

  // Simulate loading data
  useEffect(() => {
    loadDestinations();
  }, []);

  const loadDestinations = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Load real data
    setDestinations(destinationsData);
    setFilteredDestinations(destinationsData);
    setIsLoading(false);
  };

  // Apply filters and search
  useEffect(() => {
    let filtered = [...destinations];

    // Search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(d =>
        d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(d => d.category === selectedCategory);
    }

    // Price filter
    filtered = filtered.filter(
      d => d.price >= priceRange.min && d.price <= priceRange.max
    );

    // Sorting
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setFilteredDestinations(filtered);
  }, [destinations, searchQuery, selectedCategory, priceRange, sortBy]);

  const handleViewDetails = (id: string) => {
    router.push(`/destinations/${id}`);
  };

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setPriceRange({ min: 0, max: 1000 });
    setSortBy('featured');
  };

  const categories = ['beach', 'mountain', 'city', 'adventure'];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-heading font-bold text-gray-900 mb-2">
                Destinos Incríveis
              </h1>
              <p className="text-gray-600">
                Explore {destinations.length} destinos fantásticos
                {favoriteCount > 0 && ` • ${favoriteCount} favorito(s) salvo(s)`}
              </p>
            </div>
            <Button 
              variant="secondary" 
              size="md"
              onClick={() => router.push('/favorites')}
            >
              ♥ Favoritos ({favoriteCount})
            </Button>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4">
            <svg
              className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Buscar destinos, cidades..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap gap-3 pt-4 pb-2 border-t border-gray-100">
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary transition-all duration-200"
            >
              <option value="all">Todas as categorias</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>

            {/* Sort Filter */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary transition-all duration-200"
            >
              <option value="featured">Em destaque</option>
              <option value="price-low">Menor preço</option>
              <option value="price-high">Maior preço</option>
              <option value="rating">Melhor avaliação</option>
            </select>

            {/* Price Range */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Preço:</span>
              <input
                type="number"
                min="0"
                max="1000"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
                className="w-20 px-2 py-2 border border-gray-300 rounded"
                placeholder="Min"
              />
              <span>-</span>
              <input
                type="number"
                min="0"
                max="1000"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                className="w-20 px-2 py-2 border border-gray-300 rounded"
                placeholder="Max"
              />
            </div>

            {/* Reset Button */}
            {(searchQuery || selectedCategory !== 'all' || priceRange.min !== 0 || priceRange.max !== 1000 || sortBy !== 'featured') && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleReset}
              >
                ✕ Limpar filtros
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        {/* Loading State */}
        {isLoading && (
          <div className="animate-fade-in">
            <CardSkeletonGrid count={6} columns={3} />
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredDestinations.length === 0 && (
          <div className="animate-fade-in">
            <EmptyState
              variant="search"
              title="Nenhum destino encontrado"
              description={
                searchQuery || selectedCategory !== 'all'
                  ? "Tente alterar seus filtros ou fazer uma nova busca"
                  : "Nenhum destino disponível no momento"
              }
              action={
                searchQuery || selectedCategory !== 'all'
                  ? {
                      label: "Limpar filtros",
                      onClick: handleReset
                    }
                  : undefined
              }
            />
          </div>
        )}

        {/* Destinations Grid */}
        {!isLoading && filteredDestinations.length > 0 && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDestinations.map((destination, index) => (
                <div
                  key={destination.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <DestinationCard
                    destination={destination}
                    onViewDetails={handleViewDetails}
                    showFavorite={true}
                  />
                </div>
              ))}
            </div>

            {/* Results Summary */}
            <div className="mt-12 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">
                Mostrando {filteredDestinations.length} de {destinations.length} destino(s)
              </p>
              {filteredDestinations.length > 0 && (
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  ↑ Voltar ao topo
                </Button>
              )}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
