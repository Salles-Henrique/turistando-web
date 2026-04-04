'use client';

import React from 'react';

type CardVariant = 'default' | 'elevated' | 'outlined' | 'accent';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hoverable?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}

/**
 * TURISTANDO Card Component
 *
 * A flexible card component for displaying content in an organized way.
 * Supports multiple variants and can be made interactive.
 *
 * @example
 * // Basic card
 * <Card>
 *   <Card.Header>
 *     <Card.Title>Destination Title</Card.Title>
 *   </Card.Header>
 *   <Card.Body>Content here</Card.Body>
 *   <Card.Footer>Footer content</Card.Footer>
 * </Card>
 *
 * // Interactive card
 * <Card hoverable clickable onClick={() => navigate('/details')}>
 *   <Card.Body>Click to see more</Card.Body>
 * </Card>
 */
export function Card({
  variant = 'default',
  hoverable = false,
  clickable = false,
  className = '',
  children,
  ...props
}: CardProps) {
  const baseStyles = 'rounded-lg overflow-hidden transition-all duration-200';

  const variants: Record<CardVariant, string> = {
    default:
      'bg-white border border-gray-200 shadow-sm',
    elevated:
      'bg-white shadow-lg',
    outlined:
      'bg-white border-2 border-primary',
    accent:
      'bg-gradient-to-br from-accent/10 to-primary/5 border border-accent/20',
  };

  const interactiveStyles =
    hoverable || clickable
      ? 'hover:shadow-lg hover:border-primary/50 cursor-pointer'
      : '';

  return (
    <div
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${interactiveStyles}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Card Header - Top section of the card
 */
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  borderColor?: boolean;
}

export function CardHeader({
  borderColor = true,
  className = '',
  children,
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={`
        px-6 py-4
        ${borderColor ? 'border-b border-gray-100' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Card Title - Title within card header
 */
export function CardTitle({
  className = '',
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`
        text-xl font-bold text-foreground
        ${className}
      `}
      {...props}
    >
      {children}
    </h3>
  );
}

/**
 * Card Subtitle - Subtitle text
 */
export function CardSubtitle({
  className = '',
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={`
        text-sm text-gray-500 mt-1
        ${className}
      `}
      {...props}
    >
      {children}
    </p>
  );
}

/**
 * Card Body - Main content area
 */
interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  noPadding?: boolean;
}

export function CardBody({
  noPadding = false,
  className = '',
  children,
  ...props
}: CardBodyProps) {
  return (
    <div
      className={`
        ${noPadding ? '' : 'px-6 py-4'}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Card Footer - Bottom section
 */
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  divider?: boolean;
}

export function CardFooter({
  divider = true,
  className = '',
  children,
  ...props
}: CardFooterProps) {
  return (
    <div
      className={`
        px-6 py-4
        ${divider ? 'border-t border-gray-100' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Card Image - For cards with image content
 */
interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  height?: string;
}

export function CardImage({
  height = 'h-48',
  className = '',
  ...props
}: CardImageProps) {
  return (
    <div className={`overflow-hidden ${height}`}>
      <img
        className={`w-full h-full object-cover ${className}`}
        {...props}
      />
    </div>
  );
}

/**
 * Card Stat - For displaying statistics in cards
 */
export function CardStat({
  label,
  value,
  icon,
}: {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      {icon && <span className="text-primary text-2xl">{icon}</span>}
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-2xl font-bold text-primary">{value}</p>
      </div>
    </div>
  );
}

/**
 * Card Grid - Container for multiple cards
 */
export function CardGrid({
  columns = 3,
  gap = 6,
  className = '',
  children,
}: {
  columns?: 1 | 2 | 3 | 4;
  gap?: 3 | 4 | 6 | 8;
  className?: string;
  children: React.ReactNode;
}) {
  const gridColumns: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const gaps: Record<number, string> = {
    3: 'gap-3',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
  };

  return (
    <div
      className={`
        grid ${gridColumns[columns]} ${gaps[gap]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
