'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { destinationsData, departureCities } from '@/data/destinations';
import { Input } from '@/components/common/Input';

/**
 * SearchForm Component
 * Travel search form with origin, destination, dates, and insurance option.
 * Redirects to search results page on submission.
 */
export function SearchForm() {
  const router = useRouter();
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [withInsurance, setWithInsurance] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Get unique destinations for autocomplete
  const uniqueDestinations = Array.from(
    new Set(destinationsData.map((d) => d.title))
  );

  const handleDestinationChange = (value: string) => {
    setDestination(value);

    if (value.length > 0) {
      const filtered = uniqueDestinations.filter((dest) =>
        dest.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setDestination(suggestion);
    setShowSuggestions(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!origin.trim() || !destination.trim()) {
      return;
    }

    // Redirect to search page with query params
    const params = new URLSearchParams({
      origin: origin,
      destination: destination,
      ...(checkIn && { checkIn }),
      ...(checkOut && { checkOut }),
      ...(withInsurance && { insurance: 'true' }),
    });

    router.push(`/search?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8"
    >
      {/* Line 1: Origin, Destination, Dates */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {/* Origin Select */}
        <div className="md:col-span-1">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Origem
          </label>
          <select
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          >
            <option value="">Selecione a origem</option>
            {departureCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Destination Input */}
        <div className="relative md:col-span-1">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Destino
          </label>
          <div className="relative">
            <Input
              type="text"
              placeholder="Para onde?"
              value={destination}
              onChange={(e) => handleDestinationChange(e.target.value)}
              onFocus={() => destination.length > 0 && setShowSuggestions(true)}
              className="w-full"
            />

            {/* Autocomplete Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md mt-1 shadow-md z-10">
                {suggestions.slice(0, 5).map((suggestion, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSelectSuggestion(suggestion)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors first:rounded-t-md last:rounded-b-md"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Check-in Date */}
        <div className="md:col-span-1">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Ida
          </label>
          <Input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="w-full"
          />
        </div>

        {/* Check-out Date */}
        <div className="md:col-span-1">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Volta
          </label>
          <Input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            min={checkIn || new Date().toISOString().split('T')[0]}
            className="w-full"
          />
        </div>
      </div>

      {/* Line 2: Insurance checkbox and Search Button */}
      <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={withInsurance}
            onChange={(e) => setWithInsurance(e.target.checked)}
            className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer accent-primary"
          />
          <span className="text-sm font-medium text-gray-700">
            Viagem com seguro?
          </span>
        </label>
        {/*Spacer*/}

        <button
          type="submit"
          className="px-16 py-3 bg-primary text-white font-semibold text-lg rounded-lg hover:bg-primary-dark hover:shadow-lg transition-all border border-primary"
        >
          <div className="flex items-center justify-center px-2">
            <span>Buscar</span>
          </div>
        </button>
      </div>
    </form>
  );
}
