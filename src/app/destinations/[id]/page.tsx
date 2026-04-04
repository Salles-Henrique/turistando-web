'use client';

import { Button } from '@/components/common/Button';
import { destinationsData, type Destination } from '@/data/destinations';
import { useState } from 'react';

interface DestinationDetailProps {
  params: {
    id: string;
  };
}

/**
 * Destination Detail Page Component
 * Displays comprehensive information about a single travel destination.
 * Includes hero image, description, pricing, travel info, and booking CTA.
 * Uses dynamic routing with Next.js App Router.
 */
export default function DestinationDetailPage({ params }: DestinationDetailProps) {
  const destination = destinationsData.find((d) => d.id === params.id);
  const [travelers, setTravelers] = useState(1);
  const [showReservationForm, setShowReservationForm] = useState(false);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="text-6xl mb-4">🌍</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Destino não encontrado</h1>
          <p className="text-gray-600 mb-6">O destino que você procura não existe.</p>
          <a href="/destinations" className="text-primary font-semibold hover:underline">
            ← Voltar para Destinos
          </a>
        </div>
      </div>
    );
  }

  const discountPercentage = destination.originalPrice
    ? Math.round(((destination.originalPrice - destination.price) / destination.originalPrice) * 100)
    : 0;

  const totalPrice = destination.price * travelers;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Image Section */}
      <section className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        {/* Header Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14 text-white">
          <div className="max-w-7xl mx-auto">
            {/* Category & Discount Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-primary/90 px-3 py-1 rounded-full text-sm font-semibold uppercase">
                {destination.category}
              </span>
              {discountPercentage > 0 && (
                <span className="bg-secondary text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                  -{discountPercentage}% de desconto
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              {destination.title}
            </h1>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-100">
              <span>📍</span>
              <p className="text-lg">
                {destination.location}, {destination.country}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(destination.rating) ? 'text-secondary' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-100 font-medium">{destination.rating}</span>
              <span className="text-gray-200">({destination.reviews} avaliações)</span>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <a
          href="/destinations"
          className="absolute top-6 left-6 bg-white/90 hover:bg-white text-primary px-4 py-2 rounded-full font-semibold transition-colors flex items-center gap-2"
        >
          ← Voltar
        </a>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <section className="mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                Sobre este destino
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {destination.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Explore os encantos irresistíveis de {destination.location}, um destino que combina
                natureza exuberante, cultura vibrante e experiências inesquecíveis. Com sua {destination.category === 'beach' ? 'magnífica praia' : destination.category === 'mountain' ? 'paisagem montanhosa' : destination.category === 'city' ? 'vida urbana animada' : 'aventura épica'}, este local é perfeito para criar memórias que durarão toda uma vida.
              </p>
            </section>

            {/* Travel Information */}
            <section className="mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                Informações de Viagem
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Duration */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
                  <div className="text-3xl mb-2">📅</div>
                  <p className="text-gray-600 text-sm mb-1">Duração</p>
                  <p className="text-2xl font-bold text-primary">{destination.duration} dias</p>
                </div>

                {/* Category */}
                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-6 rounded-lg border border-secondary/20">
                  <div className="text-3xl mb-2">
                    {destination.category === 'beach' && '🏖️'}
                    {destination.category === 'mountain' && '⛰️'}
                    {destination.category === 'city' && '🏙️'}
                    {destination.category === 'adventure' && '🎯'}
                  </div>
                  <p className="text-gray-600 text-sm mb-1">Tipo</p>
                  <p className="text-xl font-bold text-gray-900 capitalize">{destination.category}</p>
                </div>

                {/* Location */}
                <div className="bg-gradient-to-br from-accent/10 to-secondary/10 p-6 rounded-lg border border-accent/20">
                  <div className="text-3xl mb-2">📍</div>
                  <p className="text-gray-600 text-sm mb-1">Local</p>
                  <p className="font-bold text-gray-900">{destination.location}</p>
                  <p className="text-sm text-gray-600">{destination.country}</p>
                </div>

                {/* Best For */}
                <div className="bg-gradient-to-br from-support/10 to-accent/10 p-6 rounded-lg border border-support/20">
                  <div className="text-3xl mb-2">👥</div>
                  <p className="text-gray-600 text-sm mb-1">Ideal para</p>
                  <p className="font-bold text-gray-900">Grupos</p>
                  <p className="text-sm text-gray-600">1-10 pessoas</p>
                </div>
              </div>
            </section>

            {/* Highlights */}
            <section className="mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                Destaques
              </h2>
              <ul className="space-y-3">
                {[
                  'Acomodação 4-5 estrelas incluída',
                  'Guia turístico profissional em português',
                  'Refeições selecionadas incluídas',
                  'Passeios e atividades programadas',
                  'Seguro de viagem coberto',
                  'Transporte 24/7 incluído',
                ].map((highlight, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <span className="text-secondary text-xl">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Reviews Summary */}
            <section>
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                O que dizem nossos viajantes
              </h2>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg border border-gray-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 text-secondary`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{destination.rating} de 5</p>
                    <p className="text-gray-600">Baseado em {destination.reviews} avaliações</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Uma experiência tranformadora! O {destination.location} superou todas as nossas expectativas. 
                  Equipe profissional, acomodação impecável e memórias que durarão para sempre."
                </p>
                <p className="text-gray-600 text-sm mt-4">— Maria e João, São Paulo</p>
              </div>
            </section>
          </div>

          {/* Sidebar - Pricing & Reservation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-white border border-gray-200 rounded-lg shadow-lg p-6 md:p-8">
              {/* Price Section */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <p className="text-gray-600 text-sm mb-2">Começando em</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-primary">
                    R$ {destination.price.toLocaleString('pt-BR')}
                  </span>
                  {destination.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      R$ {destination.originalPrice.toLocaleString('pt-BR')}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500">por pessoa / {destination.duration} dias</p>
              </div>

              {/* Travelers Selector */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Número de Viajantes
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={travelers}
                    onChange={(e) => setTravelers(Math.max(1, parseInt(e.target.value) || 1))}
                    className="flex-1 text-center px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button
                    onClick={() => setTravelers(Math.min(10, travelers + 1))}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total Price */}
              <div className="mb-8 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                <p className="text-gray-600 text-sm mb-1">Preço Total</p>
                <p className="text-3xl font-bold text-primary">
                  R$ {totalPrice.toLocaleString('pt-BR')}
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  {travelers} x R$ {destination.price.toLocaleString('pt-BR')} por pessoa
                </p>
              </div>

              {/* Reserve Button and Form */}
              {!showReservationForm ? (
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={() => setShowReservationForm(true)}
                >
                  Reservar Agora
                </Button>
              ) : (
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />

                  <div className="pt-2 space-y-2">
                    <Button
                      variant="primary"
                      size="md"
                      fullWidth
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Reserva enviada! Em breve entraremos em contato.');
                        setShowReservationForm(false);
                      }}
                    >
                      Confirmar Reserva
                    </Button>
                    <Button
                      variant="outline"
                      size="md"
                      fullWidth
                      onClick={() => setShowReservationForm(false)}
                    >
                      Cancelar
                    </Button>
                  </div>
                </form>
              )}

              {/* Extra Info */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3 text-sm">
                <div className="flex gap-2">
                  <span>✓</span>
                  <p className="text-gray-600">Cancelamento grátis até 14 dias antes</p>
                </div>
                <div className="flex gap-2">
                  <span>✓</span>
                  <p className="text-gray-600">Suporte 24/7 em português</p>
                </div>
                <div className="flex gap-2">
                  <span>✓</span>
                  <p className="text-gray-600">Melhor preço garantido</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Destinations */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8 text-center">
            Você também pode gostar de
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destinationsData
              .filter((d) => d.id !== destination.id && d.category === destination.category)
              .slice(0, 3)
              .map((relatedDestination) => (
                <a
                  key={relatedDestination.id}
                  href={`/destinations/${relatedDestination.id}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="overflow-hidden h-48">
                    <img
                      src={relatedDestination.image}
                      alt={relatedDestination.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-1">{relatedDestination.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      R$ {relatedDestination.price.toLocaleString('pt-BR')}
                    </p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(relatedDestination.rating)
                              ? 'text-secondary'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-600 ml-1">
                        {relatedDestination.rating}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
