'use client';

import { Card, CardImage, CardBody, CardFooter } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Destination } from '@/data/destinations';
import { useFavorites } from '@/contexts/FavoriteContext';
import { useState } from 'react';

interface DestinationCardProps {
  destination: Destination;
  onViewDetails?: (id: string) => void;
  showFavorite?: boolean;
}

/**
 * Enhanced DestinationCard Component
 * Displays a travel destination package with:
 * - Smooth hover animations
 * - Image zoom effect on hover
 * - Favorite button with heart animation
 * - Better visual feedback
 */
export function DestinationCard({ 
  destination, 
  onViewDetails,
  showFavorite = true
}: DestinationCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const discountPercentage = destination.originalPrice
    ? Math.round(((destination.originalPrice - destination.price) / destination.originalPrice) * 100)
    : 0;

  const handleViewDetails = () => {
    onViewDetails?.(destination.id);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(destination.id);
  };

  const isFav = isFavorite(destination.id);

  return (
    <Card 
      variant="elevated" 
      hoverable 
      clickable 
      onClick={handleViewDetails}
      className="group/card overflow-hidden"
    >
      {/* Image Container with Discount Badge */}
      <div className="relative overflow-hidden bg-gray-100 h-56 sm:h-64">
        <img
          src={destination.image}
          alt={destination.title}
          onLoad={() => setIsImageLoaded(true)}
          className={`
            w-full h-full object-cover transition-transform duration-500
            ${isImageLoaded ? 'group-hover/card:scale-110' : 'blur-sm'}
          `}
        />

        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-4 right-4 bg-secondary text-gray-900 px-3 py-1 rounded-full font-bold text-sm shadow-md animate-bounce-subtle">
            -{discountPercentage}%
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full font-semibold text-xs uppercase shadow-md">
          {destination.category}
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
          📅 {destination.duration} dias
        </div>

        {/* Favorite Button */}
        {showFavorite && (
          <button
            onClick={handleFavoriteClick}
            className={`
              absolute top-4 right-12 w-10 h-10 rounded-full
              flex items-center justify-center
              transition-all duration-200
              backdrop-blur-sm
              ${isFav 
                ? 'bg-red-500/90 text-white shadow-lg scale-100' 
                : 'bg-white/80 text-gray-600 hover:bg-white/95 hover:scale-110'
              }
            `}
            aria-label={isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          >
            <svg
              className={`w-5 h-5 transition-transform duration-200 ${isFav ? 'scale-110' : ''}`}
              fill={isFav ? 'currentColor' : 'none'}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Card Content */}
      <CardBody>
        {/* Title */}
        <h3 className="text-lg font-heading font-bold text-gray-900 mb-2 line-clamp-2 group-hover/card:text-primary transition-colors duration-200">
          {destination.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 text-gray-600 text-sm mb-3">
          <span>📍</span>
          <span className="font-medium">{destination.location}, {destination.country}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {destination.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 transition-transform duration-200 hover:scale-110 ${
                  i < Math.floor(destination.rating) ? 'text-secondary' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-medium text-gray-900">
            {destination.rating}
          </span>
          <span className="text-xs text-gray-500">
            ({destination.reviews})
          </span>
        </div>

        {/* Price Section */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2 mb-1 transition-all duration-200">
            <span className="text-3xl font-bold text-primary group-hover/card:text-primary group-hover/card:text-4xl transition-all duration-200">
              R$ {destination.price.toLocaleString('pt-BR')}
            </span>
            {destination.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                R$ {destination.originalPrice.toLocaleString('pt-BR')}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500">por pessoa</p>
        </div>
      </CardBody>

      {/* CTA Footer */}
      <CardFooter className="pt-3" divider={false}>
        <Button
          variant="primary"
          size="md"
          fullWidth
          onClick={(e) => {
            e.stopPropagation();
            handleViewDetails();
          }}
        >
          Ver Detalhes
        </Button>
      </CardFooter>
    </Card>
  );
}
