'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-40 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logos/logomarca.png"
              alt="Turistando Logo"
              width={64}
              height={64}
              className="h-14 w-auto"
              priority
            />
            <span className="font-bold text-2xl text-gray-900 tracking-tight">Turistando</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="/trips"
              className="text-gray-600 hover:text-primary transition-colors font-medium text-sm tracking-wide"
            >
              Explorar Viagens
            </Link>
            <Link
              href="/destinations"
              className="text-gray-600 hover:text-primary transition-colors font-medium text-sm tracking-wide"
            >
              Destinos
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-primary transition-colors font-medium text-sm tracking-wide"
            >
              Sobre
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-6">
            <button className="text-gray-700 hover:text-primary transition-colors font-medium text-sm tracking-wide">
              Entrar
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
