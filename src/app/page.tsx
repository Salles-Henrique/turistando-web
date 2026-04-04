import { HeroSection, FeaturedDestinations, BenefitsSection, CTASection } from '@/components/sections';

// Mock destination data - Replace with real data from API
const mockDestinations = [
  {
    id: '1',
    name: 'Paris',
    description: 'A cidade da luz e do amor',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 2450,
    price: 450,
  },
  {
    id: '2',
    name: 'Tokyo',
    description: 'Tradição encontra modernidade',
    image: 'https://images.unsplash.com/photo-1540959375944-7049f642e608?w=600&h=400&fit=crop',
    rating: 4.9,
    reviews: 1890,
    price: 380,
  },
  {
    id: '3',
    name: 'Bali',
    description: 'Praias paradisíacas e cultura vibrante',
    image: 'https://images.unsplash.com/photo-1508522275700-162ee4be3fbb?w=600&h=400&fit=crop',
    rating: 4.7,
    reviews: 3200,
    price: 220,
  },
  {
    id: '4',
    name: 'Nova York',
    description: 'A cidade que nunca dorme',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop',
    rating: 4.6,
    reviews: 4100,
    price: 380,
  },
  {
    id: '5',
    name: 'Barcelona',
    description: 'Arte, arquitetura e praia',
    image: 'https://images.unsplash.com/photo-1562883676-8c6bffe67dfa?w=600&h=400&fit=crop',
    rating: 4.8,
    reviews: 2880,
    price: 320,
  },
  {
    id: '6',
    name: 'Maldivas',
    description: 'Água cristalina e resorts exclusivos',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    rating: 4.9,
    reviews: 1650,
    price: 520,
  },
  {
    id: '7',
    name: 'Dubai',
    description: 'Luxo e inovação no deserto',
    image: 'https://images.unsplash.com/photo-1512453074622-c1c6e6ae95f5?w=600&h=400&fit=crop',
    rating: 4.7,
    reviews: 2340,
    price: 400,
  },
  {
    id: '8',
    name: 'Rio de Janeiro',
    description: 'Beleza natural do Brasil',
    image: 'https://images.unsplash.com/photo-1563537348885-7be370b634b6?w=600&h=400&fit=crop',
    rating: 4.6,
    reviews: 3100,
    price: 280,
  },
];

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
      <HeroSection
        title="Explore o Mundo com Turistando"
        subtitle="Descubra destinos incríveis, faça reservas seguras e crie memórias inesquecíveis"
        ctaText="Explorar destinos"
      />

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
