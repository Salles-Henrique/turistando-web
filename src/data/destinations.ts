/**
 * Mock Destinations Data
 * Sample travel package data for the Destinations page
 */

// Brazilian departure cities for search form
export const departureCities = [
  'São Paulo - SP',
  'Rio de Janeiro - RJ',
  'Belo Horizonte - MG',
  'Brasília - DF',
  'Salvador - BA',
  'Recife - PE',
  'Fortaleza - CE',
  'Manaus - AM',
  'Curitiba - PR',
  'Porto Alegre - RS',
];

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
  /*{
    id: '1',
    title: 'Pirâmides de Gizé',
    location: 'Gizé',
    country: 'Egito',
    description: 'Mergulhe na grandiozidade da civilização egípcia',
    image: 'https://images.unsplash.com/photo-1584719866406-c76ddee48493?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2850,
    originalPrice: 3800,
    rating: 4.9,
    reviews: 521,
    duration: 4,
    category: 'Culture',
  },
  {
    id: '2',
    title: 'Alpes Suíços',
    location: 'Interlaken',
    country: 'Suíça',
    description: 'Montanhas deslumbrantes e trilhas épicas',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    price: 3200,
    originalPrice: 4100,
    rating: 4.8,
    reviews: 289,
    duration: 6,
    category: 'Adventure',
  },
  {
    id: '3',
    title: 'Tóquio Moderno',
    location: 'Tóquio',
    country: 'Japão',
    description: 'Tecnologia futurista e tradições milenares',
    image: 'https://s2.glbimg.com/1NqTrdukaHaNY2ZGKqaSkb2dnO4=/e.glbimg.com/og/ed/f/original/2021/08/02/gettyimages-1208124099.jpg',
    price: 2900,
    originalPrice: 3850,
    rating: 4.9,
    reviews: 456,
    duration: 5,
    category: 'City',
  },
  {
    id: '4',
    title: 'Maldivas Cristalinas',
    location: 'Malé',
    country: 'Maldivas',
    description: 'Resort exclusivo com bangalôs sobre a água',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    price: 4200,
    originalPrice: 5600,
    rating: 4.9,
    reviews: 234,
    duration: 7,
    category: 'Beach',
  },
  {
    id: '5',
    title: 'Barcelona Costeira',
    location: 'Barcelona',
    country: 'Espanha',
    description: 'Arte, arquitetura e praias mediterrâneas',
    image: 'https://vivabcnbr.com/hf-conteudo/uploads/posts/2025/07/72_sant-miquel-jpg.jpg',
    price: 2100,
    originalPrice: 2850,
    rating: 4.8,
    reviews: 398,
    duration: 4,
    category: 'City',
  },
  {
    id: '6',
    title: 'Dubai Luxuoso',
    location: 'Dubai',
    country: 'Emirados Árabes',
    description: 'Oásis de luxo no deserto moderno',
    image: 'https://www.civitatis.com/blog/wp-content/uploads/2025/06/shutterstock_1711382014.jpg',
    price: 2700,
    originalPrice: 3600,
    rating: 4.7,
    reviews: 367,
    duration: 5,
    category: 'City',
  },
  {
    id: '7',
    title: 'Rio de Janeiro',
    location: 'Rio de Janeiro',
    country: 'Brasil',
    description: 'Praias icônicas e paisagens montanhosas',
    image: 'https://cdn.sanity.io/images/nxpteyfv/goguides/2cbf85c69509a394db51b8c6469d74aa0206689e-1600x1066.jpg',
    price: 1850,
    originalPrice: 2450,
    rating: 4.6,
    reviews: 423,
    duration: 5,
    category: 'Beach',
  },
  {
    id: '8',
    title: 'Nova Zelândia',
    location: 'Queenstown',
    country: 'Nova Zelândia',
    description: 'Esportes radicais e maravilhas naturais',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop',
    price: 3800,
    originalPrice: 4900,
    rating: 4.8,
    reviews: 312,
    duration: 6,
    category: 'Adventure',
  },
  {
    id: '9',
    title: 'Paris Romântica',
    location: 'Paris',
    country: 'França',
    description: 'Cidade da luz, amor e cultura',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
    price: 2240,
    originalPrice: 2960,
    rating: 4.9,
    reviews: 645,
    duration: 4,
    category: 'City',
  },
  {
    id: '10',
    title: 'Tailândia Exótica',
    location: 'Bangcoc',
    country: 'Tailândia',
    description: 'Templos antigos e praias paradisíacas',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop',
    price: 1600,
    originalPrice: 2200,
    rating: 4.7,
    reviews: 534,
    duration: 5,
    category: 'Beach',
  },
  {
    id: '11',
    title: 'Islândia - Círculo Dourado',
    location: 'Reykjavik',
    country: 'Islândia',
    description: 'Cachoeiras, gêiseres e luzes do norte',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=600&fit=crop',
    price: 2900,
    originalPrice: 3800,
    rating: 4.9,
    reviews: 278,
    duration: 5,
    category: 'Adventure',
  },
  {
    id: '12',
    title: 'Itália Clássica',
    location: 'Roma',
    country: 'Itália',
    description: 'Arquitetura histórica e gastronomia incomparável',
    image: 'https://midias.eurodicas.com.br/wp-content/uploads/2024/07/coliseu-roma-1.jpg.webp',
    price: 2150,
    originalPrice: 2850,
    rating: 4.8,
    reviews: 512,
    duration: 5,
    category: 'Culture',
  },*/
  
  {
    id: '1',
    title: 'Especial dia das Mães',
    location: 'Campos do Jordão - SP',
    country: 'Brazil',
    description: 'Prepare-se para dias inesquecíveis entre montanhas, arquitetura europeia, o aconchego de uma lareira e o sabor irresistível de um bom fondue.',
    image: 'https://blog.nacionalinn.com.br/wp-content/uploads/2022/10/O-que-fazer-em-Campos-do-Jordao-50-sugestoes.png',
    price: 765,
    originalPrice: 950,
    rating: 4.2,
    reviews: 367,
    duration: 3,
    category: 'Mountain',
  },

   {
    id: '2',
    title: 'Show da Shakira',
    location: 'Copacabana - RJ',
    country: 'Brazil',
    description: 'O cenário perfeito do Rio de Janeiro com a trilha sonora de uma das maiores artistas do planeta. Dias de sol, mar e muita música boa esperam por você!',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Praia_de_Copacabana_-_Rio_de_Janeiro%2C_Brasil.jpg',
    price: 1089,
    originalPrice: 1346,
    rating: 4.7,
    reviews: 439,
    duration: 4,
    category: 'Beach',
  },

  {
    id: '3',
    title: 'Aventura nas Montanhas',
    location: 'Serra Negra - SP',
    country: 'Brazil',
    description: 'Prepare-se para desbravar trilhas, curtir visuais incríveis do alto das montanhas e viver momentos cheios de adrenalina e contato com a natureza.',
    image: 'https://www.essemundoenosso.com.br/wp-content/uploads/2025/04/o-que-fazer-em-serra-negra-cristo-destaque.jpg',
    price: 678,
    originalPrice: 845,
    rating: 4.0,
    reviews: 572,
    duration: 3,
    category: 'Adventure',
  },
  
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
