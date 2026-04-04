'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-40 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Turistando</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/trips"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Explore Trips
            </Link>
            <Link
              href="/destinations"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Destinations
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all font-medium">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
