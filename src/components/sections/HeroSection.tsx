'use client';

import { Button } from '@/components/common/Button';

interface HeroSectionProps {
  backgroundImage?: string;
  title: string;
  subtitle: string;
  ctaText?: string;
}

/**
 * HeroSection Component
 * Full-width hero section with background image, title, subtitle, and CTA button.
 * Responsive design with proper overlay for text readability on mobile and desktop.
 */
export function HeroSection({
  backgroundImage = 'https://images.unsplash.com/photo-1519707267537-b85faf00021b?w=1200&h=600&fit=crop',
  title,
  subtitle,
  ctaText = 'Explorar destinos',
}: HeroSectionProps) {
  const handleCTAClick = () => {
    const element = document.getElementById('featured-destinations');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative w-full min-h-screen md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 md:px-8 text-center">
        {/* Title */}
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-100 mb-12 md:mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
          {subtitle}
        </p>

        {/* CTA Button */}
        <Button
          variant="primary"
          size="lg"
          onClick={handleCTAClick}
          className="sm:text-lg font-semibold"
          style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
        >
          {ctaText}
        </Button>
      </div>

      {/* Scroll indicator (optional) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
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
