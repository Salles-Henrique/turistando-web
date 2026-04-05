'use client';

import React from 'react';
import { Button } from './Button';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
  variant?: 'search' | 'error' | 'no-data' | 'no-favorites' | 'custom';
}

/**
 * Empty State Component
 * Shows helpful message when there's no data or results
 * 
 * @example
 * <EmptyState
 *   variant="search"
 *   title="Nenhum destino encontrado"
 *   description="Tente alterar seus filtros ou fazer uma nova busca"
 *   action={{
 *     label: "Limpar filtros",
 *     onClick: () => handleReset()
 *   }}
 * />
 */
export function EmptyState({
  icon,
  title,
  description,
  action,
  variant = 'no-data',
}: EmptyStateProps) {
  const defaultIcons = {
    search: (
      <svg
        className="w-20 h-20 mx-auto text-gray-300 mb-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    error: (
      <svg
        className="w-20 h-20 mx-auto text-red-300 mb-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 9v2m0 4v2m0 4v2m0-12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    'no-data': (
      <svg
        className="w-20 h-20 mx-auto text-gray-300 mb-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
        />
      </svg>
    ),
    'no-favorites': (
      <svg
        className="w-20 h-20 mx-auto text-gray-300 mb-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    custom: null,
  };

  const displayIcon = icon || defaultIcons[variant];

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      {/* Icon */}
      <div className="animate-fade-in">{displayIcon}</div>

      {/* Title */}
      <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-center mb-8 max-w-md leading-relaxed">
        {description}
      </p>

      {/* Action Button */}
      {action && (
        <div className="animate-fade-in-up delay-100">
          <Button
            variant="primary"
            size="md"
            icon={action.icon}
            onClick={action.onClick}
          >
            {action.label}
          </Button>
        </div>
      )}
    </div>
  );
}
