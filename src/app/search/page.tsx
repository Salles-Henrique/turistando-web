'use client';

import { Suspense, useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { destinationsData, getUniqueLocations, getCategories, getPriceRange, type Destination } from '@/data/destinations';
import { DestinationCard } from '@/components/sections/DestinationCard';
import { Button } from '@/components/common/Button';

/**
 * Search Results Page
 * Displays filtered travel destinations based on search parameters
 */
function SearchPageContent() {
  const searchParams = useSearchParams();
  
  const origin = searchParams.get('origin') || '';
  const destination = searchParams.get('destination') || '';
  const checkIn = searchParams.get('checkIn') || '';
  const checkOut = searchParams.get('checkOut') || '';
  const withInsurance = searchParams.get('insurance') === 'true';

  // Filter state
  const [selectedCountries, setSelectedCountries] = useState<string[]>([destination || '']);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    getPriceRange().min,
    getPriceRange().max,
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'rating' | 'newest'>('newest');

  // Get available filter options
  const countries = getUniqueLocations();
  const categories = getCategories();
  const { min: minPrice, max: maxPrice } = getPriceRange();

  // Filter and sort destinations
  const filteredDestinations = useMemo(() => {
    let filtered = destinationsData.filter((dest) => {
      // Country filter
      if (selectedCountries.length > 0 && !selectedCountries.includes(dest.country)) {
        return false;
      }

      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(dest.category)) {
        return false;
      }

      // Price filter
      if (dest.price < priceRange[0] || dest.price > priceRange[1]) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          dest.title.toLowerCase().includes(query) ||
          dest.location.toLowerCase().includes(query) ||
          dest.description.toLowerCase().includes(query)
        );
      }

      return true;
    });

    // Sort
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
      default:
        break;
    }

    return filtered;
  }, [selectedCountries, selectedCategories, priceRange, searchQuery, sortBy]);

  // Toggle country filter
  const toggleCountry = (country: string) => {
    setSelectedCountries((prev) =>
      prev.includes(country)
        ? prev.filter((c) => c !== country)
        : [...prev, country]
    );
  };

  // Toggle category filter
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCountries([]);
    setSelectedCategories([]);
    setPriceRange([minPrice, maxPrice]);
    setSearchQuery('');
    setSortBy('newest');
  };

  // Check if any filters are active
  const hasActiveFilters =
    selectedCountries.length > 0 ||
    selectedCategories.length > 0 ||
    priceRange[0] !== minPrice ||
    priceRange[1] !== maxPrice ||
    searchQuery !== '';

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-accent py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Compact Search Summary */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-white text-sm">
              {origin && (
                <div>
                  <p className="text-white/70 font-semibold text-xs">De</p>
                  <p className="font-bold truncate">{origin}</p>
                </div>
              )}
              
              {destination && (
                <div>
                  <p className="text-white/70 font-semibold text-xs">Para</p>
                  <p className="font-bold truncate">{destination}</p>
                </div>
              )}
              
              {checkIn && (
                <div>
                  <p className="text-white/70 font-semibold text-xs">Ida</p>
                  <p className="font-bold">{new Date(checkIn).toLocaleDateString('pt-BR', { month: 'short', day: 'numeric' })}</p>
                </div>
              )}
              
              {checkOut && (
                <div>
                  <p className="text-white/70 font-semibold text-xs">Volta</p>
                  <p className="font-bold">{new Date(checkOut).toLocaleDateString('pt-BR', { month: 'short', day: 'numeric' })}</p>
                </div>
              )}
              
              {withInsurance && (
                <div>
                  <p className="text-white/70 font-semibold text-xs">Seguro</p>
                  <p className="font-bold">✓ Sim</p>
                </div>
              )}
              
              <div className="flex items-end">
                <Button variant="secondary" size="sm" fullWidth>
                  Alterar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="space-y-6 sticky top-20">
              {/* Search */}
              <div>
                <h3 className="font-heading text-lg font-bold text-primary mb-4">
                  Buscar
                </h3>
                <input
                  type="text"
                  placeholder="Nome, local..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Sort */}
              <div>
                <h3 className="font-heading text-lg font-bold text-primary mb-4">
                  Ordenar por
                </h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="newest">Mais Recentes</option>
                  <option value="price-asc">Preço (menor)</option>
                  <option value="price-desc">Preço (maior)</option>
                  <option value="rating">Melhor Avaliação</option>
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3 className="font-heading text-lg font-bold text-primary mb-4">
                  Preço (R$)
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-600 block mb-2">
                      Mínimo: R$ {priceRange[0].toLocaleString('pt-BR')}
                    </label>
                    <input
                      type="range"
                      min={minPrice}
                      max={maxPrice}
                      value={priceRange[0]}
                      onChange={(e) => {
                        const newMin = Math.min(parseInt(e.target.value), priceRange[1]);
                        setPriceRange([newMin, priceRange[1]]);
                      }}
                      className="w-full accent-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 block mb-2">
                      Máximo: R$ {priceRange[1].toLocaleString('pt-BR')}
                    </label>
                    <input
                      type="range"
                      min={minPrice}
                      max={maxPrice}
                      value={priceRange[1]}
                      onChange={(e) => {
                        const newMax = Math.max(parseInt(e.target.value), priceRange[0]);
                        setPriceRange([priceRange[0], newMax]);
                      }}
                      className="w-full accent-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <h3 className="font-heading text-lg font-bold text-primary mb-4">
                  Tipo de Viagem
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="w-4 h-4 accent-primary rounded"
                      />
                      <span className="text-gray-700">{category}</span>
                      <span className="text-sm text-gray-500 ml-auto">
                        ({destinationsData.filter((d) => d.category === category).length})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Country Filter */}
              <div>
                <h3 className="font-heading text-lg font-bold text-primary mb-4">
                  País
                </h3>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {countries.map((country) => (
                    <label key={country} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCountries.includes(country)}
                        onChange={() => toggleCountry(country)}
                        className="w-4 h-4 accent-primary rounded"
                      />
                      <span className="text-gray-700">{country}</span>
                      <span className="text-sm text-gray-500 ml-auto">
                        ({destinationsData.filter((d) => d.country === country).length})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              {hasActiveFilters && (
                <Button
                  variant="outline"
                  size="md"
                  fullWidth
                  onClick={resetFilters}
                >
                  Limpar Filtros
                </Button>
              )}
            </div>
          </aside>

          {/* Results Grid */}
          <main className="lg:col-span-3">
            {/* Results Counter */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-primary">
                {filteredDestinations.length} destino(s) encontrado(s)
              </h2>
            </div>

            {/* Destinations Grid */}
            {filteredDestinations.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map((destination) => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
              </div>
            ) : (
              // No results state
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="text-6xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Nenhum destino encontrado
                </h3>
                <p className="text-gray-600 mb-6 max-w-md">
                  Tente ajustar seus filtros para encontrar mais destinos. Existem {destinationsData.length} destinos disponíveis!
                </p>
                <Button
                  variant="primary"
                  size="md"
                  onClick={resetFilters}
                >
                  Limpar Todos os Filtros
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                {destinationsData.length}+
              </div>
              <p className="text-gray-600">Destinos Disponíveis</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                {destinationsData.reduce((sum, d) => sum + d.reviews, 0).toLocaleString('pt-BR')}
              </div>
              <p className="text-gray-600">Avaliações de Clientes</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                {(destinationsData.reduce((sum, d) => sum + d.rating, 0) / destinationsData.length).toFixed(1)}★
              </div>
              <p className="text-gray-600">Avaliação Média</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Carregando...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
