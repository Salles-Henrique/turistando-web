/**
 * Mock Destinations Data
 * Sample travel package data for the Destinations page
 */

export interface Destination {
  id: string;
  title: string;
  location: string;
  country: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  duration: number; // in days
  category: string; // 'beach', 'mountain', 'city', 'adventure'
}

export const destinationsData: Destination[] = [
  {
    id: '1',
    title: 'Paraíso Tropical - Bali Beach Resort',
    location: 'Bali',
    country: 'Indonesia',
    description: 'Relaxation and adventure in a tropical paradise',
    image: 'https://images.unsplash.com/photo-1508522275700-162ee4be3fbb?w=800&h=600&fit=crop',
    price: 280,
    originalPrice: 380,
    rating: 4.8,
    reviews: 342,
    duration: 5,
    category: 'beach',
  },
  /*
  {
    id: '2',
    title: 'Paris Romantic Getaway',
    location: 'Paris',
    country: 'France',
    description: 'Explore the city of love with iconic landmarks',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
    price: 450,
    originalPrice: 580,
    rating: 4.9,
    reviews: 521,
    duration: 4,
    category: 'city',
  },
  {
    id: '3',
    title: 'Mountain Adventure - Swiss Alps',
    location: 'Swiss Alps',
    country: 'Switzerland',
    description: 'Hiking and skiing in stunning mountain scenery',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    price: 520,
    originalPrice: 650,
    rating: 4.7,
    reviews: 289,
    duration: 6,
    category: 'mountain',
  },
  {
    id: '4',
    title: 'Tokyo Modern Metropolis',
    location: 'Tokyo',
    country: 'Japan',
    description: 'Experience cutting-edge technology and ancient traditions',
    image: 'https://images.unsplash.com/photo-1540959375944-7049f642e608?w=800&h=600&fit=crop',
    price: 380,
    originalPrice: 520,
    rating: 4.9,
    reviews: 456,
    duration: 5,
    category: 'city',
  },
  {
    id: '5',
    title: 'Maldives Crystal Waters',
    location: 'Maldives',
    country: 'Maldives',
    description: 'Exclusive island resort with overwater bungalows',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    price: 620,
    originalPrice: 850,
    rating: 4.9,
    reviews: 234,
    duration: 7,
    category: 'beach',
  },
  {
    id: '6',
    title: 'Barcelona Coastal Beauty',
    location: 'Barcelona',
    country: 'Spain',
    description: 'Art, architecture, and Mediterranean beaches',
    image: 'https://images.unsplash.com/photo-1562883676-8c6bffe67dfa?w=800&h=600&fit=crop',
    price: 320,
    originalPrice: 420,
    rating: 4.8,
    reviews: 398,
    duration: 4,
    category: 'city',
  },
  {
    id: '7',
    title: 'carack',
    location: 'Dubai',
    country: 'UAE',
    description: 'Ultra-modern luxury in the desert oasis',
    image: 'https://images.unsplash.com/photo-1512453074622-c1c6e6ae95f5?w=800&h=600&fit=crop',
    price: 480,
    originalPrice: 640,
    rating: 4.7,
    reviews: 367,
    duration: 5,
    category: 'city',
  },
  {
    id: '8',
    title: 'Rio Beach & Mountains',
    location: 'Rio de Janeiro',
    country: 'Brazil',
    description: 'Iconic beaches and dramatic mountain landscapes',
    image: 'https://images.unsplash.com/photo-1563537348885-7be370b634b6?w=800&h=600&fit=crop',
    price: 290,
    originalPrice: 380,
    rating: 4.6,
    reviews: 423,
    duration: 5,
    category: 'beach',
  },
  {
    id: '9',
    title: 'New Zealand Adventure',
    location: 'Queenstown',
    country: 'New Zealand',
    description: 'Extreme sports and breathtaking natural wonders',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop',
    price: 550,
    originalPrice: 720,
    rating: 4.8,
    reviews: 312,
    duration: 6,
    category: 'adventure',
  },
  {
    id: '10',
    title: 'Iceland Golden Circle',
    location: 'Reykjavik',
    country: 'Iceland',
    description: 'Waterfalls, geysers, and northern lights',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=600&fit=crop',
    price: 490,
    originalPrice: 640,
    rating: 4.9,
    reviews: 278,
    duration: 5,
    category: 'adventure',
  },
  {
    id: '11',
    title: 'Thailand Temple Tour',
    location: 'Bangkok',
    country: 'Thailand',
    description: 'Ancient temples, vibrant markets, and tropical islands',
    image: 'https://images.unsplash.com/photo-1552520206-7890c9c9c14d?w=800&h=600&fit=crop',
    price: 220,
    originalPrice: 320,
    rating: 4.7,
    reviews: 501,
    duration: 6,
    category: 'city',
  },
  {
    id: '12',
    title: 'Greece Island Hopping',
    location: 'Santorini & Mykonos',
    country: 'Greece',
    description: 'Whitewashed villages and Aegean Sea beauty',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
    price: 380,
    originalPrice: 520,
    rating: 4.8,
    reviews: 445,
    duration: 7,
    category: 'beach',
  },*/
];

// Get unique locations and categories for filters
export const getUniqueLocations = (): string[] => {
  const locations = destinationsData.map((d) => d.country);
  return Array.from(new Set(locations)).sort();
};

export const getCategories = (): string[] => {
  const categories = destinationsData.map((d) => d.category);
  return Array.from(new Set(categories)).sort();
};

// Get price range
export const getPriceRange = () => {
  const prices = destinationsData.map((d) => d.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
};
