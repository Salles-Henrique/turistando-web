'use client';

import { ReservationForm } from '@/components/forms/ReservationForm';

/**
 * Reservation Form Demo Page
 * Showcases the ReservationForm component with example usage
 */
export default function ReservationFormDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary pl-4 border-l-4 border-primary mb-4">
            Formulário de Reserva
          </h1>
          <p className="text-lg text-gray-600">
            Demonstração do componente ReservationForm com validação e feedback
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
          <ReservationForm
            destinationTitle="Paris - Romantic Getaway"
            onSuccess={(data) => {
              console.log('Reservation submitted:', data);
            }}
          />
        </div>

        {/* Features List */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-heading text-xl font-bold text-primary pl-4 border-l-4 border-primary mb-4">Validações</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Nome: mínimo 3 caracteres</li>
              <li>✓ Email: formato válido</li>
              <li>✓ Data: não pode ser no passado</li>
              <li>✓ Data: máximo 1 ano no futuro</li>
              <li>✓ Pessoas: 1-50</li>
              <li>✓ Mensagens de erro em tempo real</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-heading text-xl font-bold text-primary pl-4 border-l-4 border-primary mb-4">Funcionalidades</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Validação completa antes do envio</li>
              <li>✓ Feedback visual de erros</li>
              <li>✓ Estado de carregamento</li>
              <li>✓ Mensagem de sucesso personalizada</li>
              <li>✓ Acessibilidade WCAG</li>
              <li>✓ Campos obrigatórios marcados</li>
            </ul>
          </div>
        </div>

        {/* Code Example */}
        <div className="mt-12 bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto">
          <h3 className="font-bold text-white mb-4">Exemplo de Uso:</h3>
          <pre className="text-sm leading-relaxed">
{`import { ReservationForm } from '@/components/forms';

export default function Page() {
  return (
    <ReservationForm
      destinationTitle="Paris - Romantic Getaway"
      onSuccess={(data) => {
        console.log('Reservation:', data);
        // Handle successful reservation
      }}
    />
  );
}`}
          </pre>
        </div>

        {/* Navigation */}
        <div className="mt-12 text-center">
          <a
            href="/destinations"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            ← Ver Destinos
          </a>
        </div>
      </div>
    </div>
  );
}
