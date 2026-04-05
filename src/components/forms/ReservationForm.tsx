'use client';

import { useState } from 'react';
import { Button } from '@/components/common/Button';

interface FormData {
  name: string;
  email: string;
  travelDate: string;
  numberOfPeople: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  travelDate?: string;
  numberOfPeople?: string;
}

interface ReservationFormProps {
  destinationTitle?: string;
  onSuccess?: (data: FormData) => void;
  className?: string;
}

/**
 * ReservationForm Component
 * Handles travel reservation with validation and success feedback.
 * Features:
 * - Real-time validation feedback
 * - Accessible form fields with proper labels
 * - Success state with message
 * - Responsive design
 */
export function ReservationForm({
  destinationTitle = 'this destination',
  onSuccess,
  className = '',
}: ReservationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    travelDate: '',
    numberOfPeople: '1',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successData, setSuccessData] = useState<FormData | null>(null);

  /**
   * Validation Logic
   */
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Nome deve ter no mínimo 3 caracteres';
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Nome deve ter no máximo 100 caracteres';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    // Travel Date validation
    if (!formData.travelDate) {
      newErrors.travelDate = 'Data da viagem é obrigatória';
    } else {
      const selectedDate = new Date(formData.travelDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.travelDate = 'Data da viagem não pode ser no passado';
      } else if (selectedDate > new Date(today.getTime() + 365 * 24 * 60 * 60 * 1000)) {
        newErrors.travelDate = 'Data da viagem deve estar dentro de 1 ano';
      }
    }

    // Number of people validation
    const numberOfPeople = parseInt(formData.numberOfPeople);
    if (!formData.numberOfPeople) {
      newErrors.numberOfPeople = 'Número de pessoas é obrigatório';
    } else if (isNaN(numberOfPeople) || numberOfPeople < 1) {
      newErrors.numberOfPeople = 'Número de pessoas deve ser no mínimo 1';
    } else if (numberOfPeople > 50) {
      newErrors.numberOfPeople = 'Número de pessoas deve ser no máximo 50';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle Input Change
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  /**
   * Handle Form Submit
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call (500-1000ms delay)
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Store success data
      setSuccessData(formData);
      setIsSuccess(true);

      // Call onSuccess callback if provided
      onSuccess?.(formData);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          travelDate: '',
          numberOfPeople: '1',
        });
        setIsSuccess(false);
        setSuccessData(null);
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Get minimum date (today)
   */
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  /**
   * Get maximum date (1 year from today)
   */
  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    return maxDate.toISOString().split('T')[0];
  };

  // Success State
  if (isSuccess && successData) {
    return (
      <div className={`${className}`}>
        <div className="bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent rounded-lg p-8 text-center">
          {/* Success Icon */}
          <div className="text-6xl mb-4 animate-bounce">✓</div>

          {/* Success Title */}
          <h3 className="font-heading text-2xl font-bold text-primary mb-2">
            Reserva Confirmada!
          </h3>

          {/* Success Message */}
          <p className="text-gray-700 mb-6">
            Obrigado, <strong>{successData.name}</strong>! Sua reserva foi recebida.
          </p>

          {/* Reservation Details */}
          <div className="bg-white/60 rounded-lg p-6 mb-6 space-y-2 text-left max-w-sm mx-auto">
            <div className="flex justify-between">
              <span className="text-gray-600">Destino:</span>
              <span className="font-semibold text-gray-900">{destinationTitle}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Data da viagem:</span>
              <span className="font-semibold text-gray-900">
                {new Date(successData.travelDate).toLocaleDateString('pt-BR')}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Viajantes:</span>
              <span className="font-semibold text-gray-900">{successData.numberOfPeople}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Email:</span>
              <span className="font-semibold text-gray-900">{successData.email}</span>
            </div>
          </div>

          {/* Confirmation Message */}
          <p className="text-sm text-gray-600 mb-4">
            Você receberá uma confirmação detalhada em <strong>{successData.email}</strong> em breve.
          </p>

          {/* Next Steps */}
          <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6 text-left">
            <p className="text-sm font-semibold text-blue-900 mb-2">Próximas etapas:</p>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>✓ Verifique seu email para detalhes da reserva</li>
              <li>✓ Nosso time entrará em contato em 24 horas</li>
              <li>✓ Você pode cancelar gratuitamente até 14 dias antes</li>
            </ul>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={() => {
              setIsSuccess(false);
              setSuccessData(null);
            }}
          >
            Fechar
          </Button>
        </div>
      </div>
    );
  }

  // Form State
  return (
    <div className={`${className}`}>
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
            Nome Completo <span className="text-secondary">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ex: João Silva"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${
              errors.name
                ? 'border-red-500 bg-red-50 focus:ring-red-200'
                : 'border-gray-300 bg-white'
            }`}
            disabled={isSubmitting}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-red-600 text-sm mt-1 flex items-center gap-1">
              <span>⚠</span> {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
            Email <span className="text-secondary">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${
              errors.email
                ? 'border-red-500 bg-red-50 focus:ring-red-200'
                : 'border-gray-300 bg-white'
            }`}
            disabled={isSubmitting}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-red-600 text-sm mt-1 flex items-center gap-1">
              <span>⚠</span> {errors.email}
            </p>
          )}
        </div>

        {/* Travel Date Field */}
        <div>
          <label htmlFor="travelDate" className="block text-sm font-semibold text-gray-900 mb-2">
            Data da Viagem <span className="text-secondary">*</span>
          </label>
          <input
            type="date"
            id="travelDate"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            min={getMinDate()}
            max={getMaxDate()}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${
              errors.travelDate
                ? 'border-red-500 bg-red-50 focus:ring-red-200'
                : 'border-gray-300 bg-white'
            }`}
            disabled={isSubmitting}
            aria-invalid={!!errors.travelDate}
            aria-describedby={errors.travelDate ? 'travelDate-error' : undefined}
          />
          {errors.travelDate && (
            <p id="travelDate-error" className="text-red-600 text-sm mt-1 flex items-center gap-1">
              <span>⚠</span> {errors.travelDate}
            </p>
          )}
          <p className="text-xs text-gray-500 mt-1">
            Mínimo hoje, máximo 1 ano a partir de hoje
          </p>
        </div>

        {/* Number of People Field */}
        <div>
          <label htmlFor="numberOfPeople" className="block text-sm font-semibold text-gray-900 mb-2">
            Número de Pessoas <span className="text-secondary">*</span>
          </label>
          <select
            id="numberOfPeople"
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${
              errors.numberOfPeople
                ? 'border-red-500 bg-red-50 focus:ring-red-200'
                : 'border-gray-300 bg-white'
            }`}
            disabled={isSubmitting}
            aria-invalid={!!errors.numberOfPeople}
            aria-describedby={errors.numberOfPeople ? 'numberOfPeople-error' : undefined}
          >
            {[...Array(50)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i === 0 ? 'pessoa' : 'pessoas'}
              </option>
            ))}
          </select>
          {errors.numberOfPeople && (
            <p
              id="numberOfPeople-error"
              className="text-red-600 text-sm mt-1 flex items-center gap-1"
            >
              <span>⚠</span> {errors.numberOfPeople}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          variant="primary"
          size="lg"
          fullWidth
          type="submit"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processando...' : 'Confirmar Reserva'}
        </Button>

        {/* Helper Text */}
        <p className="text-xs text-gray-500 text-center">
          Campos marcados com <span className="text-secondary">*</span> são obrigatórios
        </p>
      </form>
    </div>
  );
}
