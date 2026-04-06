'use client';

import { Card, CardImage, CardBody, CardHeader, CardTitle, CardSubtitle, CardFooter } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface Destination {
  id: string;
  title: string;
  location?: string;
  country?: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  duration?: number;
  category?: string;
  icon?: ReactNode;
}

interface FeaturedDestinationsProps {
  title?: string;
  subtitle?: string;
  destinations: Destination[];
}

/**
 * FeaturedDestinations Component
 * Displays a grid of destination cards with images, ratings, prices, and CTA buttons.
 * Responsive grid: 1 column on mobile, 2 on tablet, 3-4 on desktop.
 */
export function FeaturedDestinations({
  title = 'Destinos em Destaque',
  subtitle = 'Explore alguns dos lugares mais procurados por nossos viajantes',
  destinations,
}: FeaturedDestinationsProps) {
  const router = useRouter();

  const handleDestinationClick = (id: string) => {
    router.push(`/destinations/${id}`);
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              variant="elevated"
              hoverable
              clickable
              onClick={() => handleDestinationClick(destination.id)}
            >
              {/* Destination Image */}
              <CardImage
                src={destination.image}
                alt={destination.title}
                height="h-48 sm:h-56"
              />

              {/* Card Content */}
              <CardBody className="pb-3">
                <CardHeader className="pb-2 -mx-4 px-4 mb-3">
                  <CardTitle className="text-lg md:text-xl">{destination.title}</CardTitle>
                  <CardSubtitle className="text-sm">{destination.description}</CardSubtitle>
                </CardHeader>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(destination.rating)
                            ? 'text-secondary'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {destination.rating} ({destination.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="text-2xl font-bold text-primary">
                    R$ {destination.price.toLocaleString('pt-BR')}
                  </div>
                  <div className="text-sm text-gray-500">por noite</div>
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
                    handleDestinationClick(destination.id);
                  }}
                >
                  Detalhes
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
