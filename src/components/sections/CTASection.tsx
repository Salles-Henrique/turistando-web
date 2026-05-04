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
    <section className="w-full py-28 md:py-36 lg:py-44 bg-gradient-to-r from-primary via-primary-600 to-accent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Title */}
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-tight tracking-tighter">
          {title}
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-50 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <Button
            variant="primary"
            size="lg"
            onClick={handlePrimaryCta}
            className="w-full sm:w-auto"
            style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
          >
            {primaryCtaText}
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={handleSecondaryCta}
            className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/20 font-semibold"
            style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
          >
            {secondaryCtaText}
          </Button>
        </div>

        {/* Trust indicator */}
        <div className="mt-20 pt-16 border-t border-white/20">
          <p className="text-base md:text-lg text-gray-50 mb-12 font-medium tracking-wide">
            ⭐ CONFIADO POR MILHÕES DE VIAJANTES EM TODO O MUNDO
          </p>
          <div className="flex justify-center gap-16 md:gap-24 flex-wrap">
            <div className="text-white">
              <div className="font-bold text-4xl md:text-5xl leading-tight">2.5M+</div>
              <div className="text-sm text-gray-100 mt-3 font-medium tracking-wide">VIAJANTES</div>
            </div>
            <div className="text-white">
              <div className="font-bold text-4xl md:text-5xl leading-tight">150+</div>
              <div className="text-sm text-gray-100 mt-3 font-medium tracking-wide">DESTINOS</div>
            </div>
            <div className="text-white">
              <div className="font-bold text-4xl md:text-5xl leading-tight">4.8★</div>
              <div className="text-sm text-gray-100 mt-3 font-medium tracking-wide">AVALIAÇÃO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
