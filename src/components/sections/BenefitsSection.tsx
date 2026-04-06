'use client';

import { ReactNode } from 'react';

interface Benefit {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  title?: string;
  subtitle?: string;
  benefits: Benefit[];
}

/**
 * BenefitsSection Component
 * Displays benefits/features in a 3-column responsive grid.
 * Each benefit shows an icon, title, and description.
 * Uses brand colors and responsive typography.
 */
export function BenefitsSection({
  title = 'Por que nos escolher',
  subtitle = 'Descubra o que torna Turistando a melhor plataforma para seu próximo destino',
  benefits,
}: BenefitsSectionProps) {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
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

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="mb-6 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-full group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300">
                <div className="w-8 h-8 md:w-10 md:h-10 text-primary">
                  {benefit.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl md:text-2xl font-bold text-primary pl-4 border-l-4 border-primary mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
