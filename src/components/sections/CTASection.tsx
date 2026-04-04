'use client';

import { Button } from '@/components/common/Button';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
}

/**
 * CTASection Component
 * Eye-catching call-to-action section with gradient background and CTA buttons.
 * Encourages user action with compelling copy and prominent buttons.
 */
export function CTASection({
  title = 'Pronto para sua próxima aventura?',
  description = 'Comece a explorar os melhores destinos do mundo. Encontre pacotes especiais e economize até 30% em sua próxima viagem.',
  primaryCtaText = 'Explorar agora',
  secondaryCtaText = 'Saiba mais',
}: CTASectionProps) {
  const handlePrimaryCta = () => {
    console.log('Primary CTA clicked');
    // Router integration can be added here
  };

  const handleSecondaryCta = () => {
    console.log('Secondary CTA clicked');
    // Router integration can be added here
  };

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-r from-primary via-primary-600 to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Title */}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {title}
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="primary"
            size="lg"
            onClick={handlePrimaryCta}
            className="w-full sm:w-auto bg-white text-primary hover:bg-gray-50"
          >
            {primaryCtaText}
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={handleSecondaryCta}
            className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10"
          >
            {secondaryCtaText}
          </Button>
        </div>

        {/* Trust indicator */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-sm md:text-base text-gray-100 mb-4">
            ⭐ Confiado por milhões de viajantes em todo o mundo
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-white">
              <div className="font-bold text-2xl md:text-3xl">2.5M+</div>
              <div className="text-sm text-gray-200">Viajantes</div>
            </div>
            <div className="text-white">
              <div className="font-bold text-2xl md:text-3xl">150+</div>
              <div className="text-sm text-gray-200">Destinos</div>
            </div>
            <div className="text-white">
              <div className="font-bold text-2xl md:text-3xl">4.8★</div>
              <div className="text-sm text-gray-200">Avaliação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
