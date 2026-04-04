export interface Trip {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
  price: number;
  image?: string;
}

export interface Booking {
  id: string;
  tripId: string;
  userId: string;
  passengers: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  image?: string;
  rating: number;
  reviews: number;
}
