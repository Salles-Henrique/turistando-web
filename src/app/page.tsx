'use client';

import Link from 'next/link';

const featuredDestinations = [
  {
    id: 1,
    name: 'Paris',
    country: 'France',
    image: '🗼',
    rating: 4.8,
    reviews: 2341,
  },
  {
    id: 2,
    name: 'Tokyo',
    country: 'Japan',
    image: '🗾',
    rating: 4.9,
    reviews: 1876,
  },
  {
    id: 3,
    name: 'Barcelona',
    country: 'Spain',
    image: '🏖️',
    rating: 4.7,
    reviews: 1654,
  },
  {
    id: 4,
    name: 'New York',
    country: 'USA',
    image: '🗽',
    rating: 4.6,
    reviews: 2890,
  },
];

const trendingTrips = [
  {
    id: 1,
    destination: 'Bali Beach Paradise',
    price: 1299,
    duration: '7 days',
    image: '🏝️',
  },
  {
    id: 2,
    destination: 'Swiss Alps Adventure',
    price: 1899,
    duration: '10 days',
    image: '⛰️',
  },
  {
    id: 3,
    destination: 'Mediterranean Cruise',
    price: 2499,
    duration: '14 days',
    image: '🚢',
  },
  {
    id: 4,
    destination: 'Desert Safari Expedition',
    price: 899,
    duration: '5 days',
    image: '🐪',
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Discover Your Next <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">Adventure</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Explore breathtaking destinations, book unforgettable experiences, and create memories that last a lifetime. Your journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all font-semibold text-lg">
                Explore Trips
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-500 hover:text-blue-500 transition-all font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="text-center">
            <div className="text-8xl mb-4">✈️</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-3xl font-bold text-blue-600">500+</p>
                <p className="text-gray-600">Destinations</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-3xl font-bold text-teal-600">50K+</p>
                <p className="text-gray-600">Happy Travelers</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-3xl font-bold text-blue-600">1000+</p>
                <p className="text-gray-600">Trip Packages</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-3xl font-bold text-teal-600">24/7</p>
                <p className="text-gray-600">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Your Perfect Trip</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destination
              </label>
              <input
                type="text"
                placeholder="Where to?"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check In
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check Out
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Travelers
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>1 Person</option>
                <option>2 People</option>
                <option>3+ People</option>
              </select>
            </div>
          </div>
          <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 rounded-lg hover:shadow-lg transition-all font-semibold text-lg">
            Search Trips
          </button>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Destinations</h2>
        <p className="text-xl text-gray-600 mb-12">
          Explore the most popular destinations loved by our travelers
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDestinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/destinations/${destination.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-6xl bg-gradient-to-br from-blue-100 to-teal-100 p-8 text-center group-hover:scale-110 transition-transform">
                {destination.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {destination.name}
                </h3>
                <p className="text-gray-600 mb-4">{destination.country}</p>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">★</span>
                  <span className="font-semibold text-gray-900">
                    {destination.rating}
                  </span>
                  <span className="text-gray-600">({destination.reviews} reviews)</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Trips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Trending Trips</h2>
        <p className="text-xl text-gray-600 mb-12">
          Check out our most booked packages this season
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingTrips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-6xl bg-gradient-to-br from-blue-100 to-teal-100 p-8 text-center">
                {trip.image}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {trip.destination}
                </h3>
                <p className="text-sm text-gray-600 mb-4">📅 {trip.duration}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    ${trip.price}
                  </span>
                  <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors font-semibold">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of travelers discovering amazing destinations. Start planning your dream vacation today.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
            Browse All Trips
          </button>
        </div>
      </section>
    </div>
  );
}
