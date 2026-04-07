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
    <section className="w-full py-20 md:py-28 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight tracking-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            {subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col items-center text-center group p-4"
            >
              {/* Icon Container - Enhanced */}
              <div className="mb-8 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-gradient-to-br from-primary/15 to-accent/15 rounded-2xl group-hover:from-primary/25 group-hover:to-accent/25 transition-all duration-300 shadow-elevation-1 group-hover:shadow-elevation-3">
                <div className="w-10 h-10 md:w-12 md:h-12 text-primary group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
              </div>

              {/* Title - Larger & Bold */}
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4 tracking-tight">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
