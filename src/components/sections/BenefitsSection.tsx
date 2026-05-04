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
    <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28 lg:mb-32">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-8 leading-tight tracking-tight">
            {title}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col items-center text-center group p-6"
            >
              {/* Icon Container - Enhanced */}
              <div className="mb-10 w-24 h-24 md:w-28 md:h-28 flex items-center justify-center bg-gradient-to-br from-primary/15 to-accent/15 rounded-3xl group-hover:from-primary/25 group-hover:to-accent/25 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:-translate-y-1">
                <div className="w-12 h-12 md:w-14 md:h-14 text-primary group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
              </div>

              {/* Title - Larger & Bold */}
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-base md:text-lg font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
