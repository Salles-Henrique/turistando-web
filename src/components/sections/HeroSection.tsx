'use client';

import { destinationsData } from '@/data/destinations';
import { SearchForm } from '@/components/forms/SearchForm';

/**
 * HeroSection Component
 * Full-width hero section with search form for travel bookings.
 * Features dynamic destination count and call-to-action.
 */
export function HeroSection() {
  const destinationCount = destinationsData.length;

  return (
    <section className="relative w-full min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-primary via-primary-600 to-accent">
      {/* Overlay for depth */}
      <div className="absolute inset-0 opacity-10 bg-pattern" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 md:px-8 text-center">
        {/* Title */}
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Suas Viagens, Seus Jeitos, Suas Histórias
        </h1>

        {/* Subtitle with dynamic destination count */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
          Explore {destinationCount}+ destinos incríveis e crie memórias inesquecíveis com a Turistando
        </p>

        {/* Search Form */}
        <div className="mb-16">
          <SearchForm />
        </div>

        {/* Trust Indicator */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white mb-12">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✈️</span>
            <div>
              <p className="font-bold text-lg">{destinationCount}+</p>
              <p className="text-sm text-gray-200">Destinos</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/30" />
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <div>
              <p className="font-bold text-lg">4.8★</p>
              <p className="text-sm text-gray-200">Avaliação</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/30" />
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏷️</span>
            <div>
              <p className="font-bold text-lg">Até 40%</p>
              <p className="text-sm text-gray-200">Grandes descontos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
