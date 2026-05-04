'use client';

import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'support' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
}

/**
 * TURISTANDO Button Component
 *
 * A versatile button component following the TURISTANDO design system.
 * Supports multiple variants and sizes for different use cases.
 *
 * @example
 * // Primary CTA button
 * <Button variant="primary" size="lg">Book Now</Button>
 *
 * // Secondary button with icon
 * <Button variant="secondary" icon={<SearchIcon />}>Search</Button>
 *
 * // Loading state
 * <Button isLoading>Processing...</Button>
 */
export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  rightIcon,
  fullWidth = false,
  disabled = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 hover:scale-[1.02] hover:-translate-y-1';

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-primary text-white hover:bg-primary-dark focus:ring-primary shadow-lg hover:shadow-2xl hover:shadow-primary/40',
    secondary:
      'bg-secondary text-gray-900 hover:bg-secondary-dark focus:ring-secondary shadow-lg hover:shadow-2xl hover:shadow-secondary/40',
    accent:
      'bg-accent text-white hover:bg-accent-dark focus:ring-accent shadow-lg hover:shadow-2xl hover:shadow-accent/40',
    support:
      'bg-support text-white hover:bg-support-dark focus:ring-support shadow-lg hover:shadow-2xl hover:shadow-support/40',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary hover:shadow-lg',
    ghost: 'text-primary hover:bg-primary/10 focus:ring-primary hover:shadow-md',
  };

  const sizes: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm font-medium',
    md: 'px-8 py-3 text-base font-medium',
    lg: 'px-10 py-4 text-lg font-semibold',
    xl: 'px-12 py-5 text-lg font-semibold',
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {isLoading && (
        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {icon && !isLoading && <span>{icon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
}

/**
 * Button Group Component
 * Used to group related buttons together
 */
export function ButtonGroup({
  children,
  orientation = 'horizontal',
  className = '',
}: {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}) {
  const flexDirection = orientation === 'horizontal' ? 'flex-row' : 'flex-col';

  return (
    <div className={`flex ${flexDirection} gap-3 ${className}`}>
      {children}
    </div>
  );
}
