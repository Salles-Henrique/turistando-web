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
    <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-r from-primary via-primary-600 to-accent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Title */}
        <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
          {title}
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            variant="primary"
            size="lg"
            onClick={handlePrimaryCta}
            className="w-full sm:w-auto bg-white text-primary hover:bg-gray-50 font-semibold"
            style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
          >
            {primaryCtaText}
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={handleSecondaryCta}
            className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 font-semibold"
            style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
          >
            {secondaryCtaText}
          </Button>
        </div>

        {/* Trust indicator */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <p className="text-base md:text-lg text-gray-100 mb-8 font-medium">
            ⭐ Confiado por milhões de viajantes em todo o mundo
          </p>
          <div className="flex justify-center gap-12 md:gap-16 flex-wrap">
            <div className="text-white">
              <div className="font-bold text-3xl md:text-4xl">2.5M+</div>
              <div className="text-sm text-gray-200 mt-2">Viajantes</div>
            </div>
            <div className="text-white">
              <div className="font-bold text-3xl md:text-4xl">150+</div>
              <div className="text-sm text-gray-200 mt-2">Destinos</div>
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
