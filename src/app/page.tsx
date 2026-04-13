import { HeroSection, FeaturedDestinations, BenefitsSection, CTASection } from '@/components/sections';
import { destinationsData } from '@/data/destinations';

// Use real destination data - first 8 destinations
const mockDestinations = destinationsData.slice(0, 8);

// Benefit items with icons
const benefits = [
  {
    id: 'price',
    title: 'Melhores Preços',
    description:
      'Garantimos os melhores preços do mercado com ofertas exclusivas e descontos especiais para nossos membros.',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
      </svg>
    ),
  },
  {
    id: 'experience',
    title: 'Experiências Únicas',
    description:
      'Acesso a tours exclusivos, atividades locais autênticas e experiências que você não encontrará em outro lugar.',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  {
    id: 'safety',
    title: 'Segurança Garantida',
    description:
      'Com suporte 24/7, proteção de dados segura e garantias de satisfação, você viaja com total tranquilidade.',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
      </svg>
    ),
  },
];

/**
 * HomePage Component
 * Main landing page for Turistando travel platform.
 * Includes hero section, featured destinations, benefits, and call-to-action.
 */
export default function HomePage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Destinations Section */}
      <div id="featured-destinations">
        <FeaturedDestinations
          title="Destinos em Destaque"
          subtitle="Explore alguns dos lugares mais procurados por nossos viajantes"
          destinations={mockDestinations}
        />
      </div>

      {/* Benefits Section */}
      <BenefitsSection
        title="Por que nos escolher"
        subtitle="Descubra o que torna Turistando a melhor plataforma para seu próximo destino"
        benefits={benefits}
      />

      {/* Call to Action Section */}
      <CTASection
        title="Pronto para sua próxima aventura?"
        description="Comece a explorar os melhores destinos do mundo. Encontre pacotes especiais e economize até 30% em sua próxima viagem."
        primaryCtaText="Explorar agora"
        secondaryCtaText="Saiba mais"
      />
    </main>
  );
}
