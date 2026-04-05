'use client';

import React from 'react';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string | number;
  height?: string | number;
  count?: number;
  animation?: 'pulse' | 'wave' | 'none';
}

/**
 * Skeleton Loading Component
 * Provides animated skeleton loaders for better UX while data is loading
 * 
 * @example
 * // Text skeleton
 * <Skeleton variant="text" width="100%" height={20} />
 * 
 * // Circular skeleton (for avatars)
 * <Skeleton variant="circular" width={48} height={48} />
 * 
 * // Card skeleton
 * <Skeleton variant="card" />
 * 
 * // Multiple text lines
 * <Skeleton variant="text" count={3} height={20} />
 */
export function Skeleton({
  variant = 'rectangular',
  width = '100%',
  height = 24,
  count = 1,
  animation = 'pulse',
  className = '',
  ...props
}: SkeletonProps) {
  const animationClass = {
    pulse: 'animate-pulse',
    wave: 'animate-shimmer',
    none: '',
  }[animation];

  const baseStyles = 'bg-gray-200 rounded-md overflow-hidden';

  const variantStyles = {
    text: 'rounded-md',
    circular: 'rounded-full',
    rectangular: 'rounded-md',
    card: 'rounded-lg shadow-sm',
  }[variant];

  const defaultHeights = {
    text: 'h-5',
    circular: 'w-12 h-12',
    rectangular: 'h-32',
    card: 'h-96',
  };

  const skeletonStyle: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  const skeletons = Array.from({ length: count }, (_, i) => (
    <div
      key={i}
      className={`
        ${baseStyles}
        ${variantStyles}
        ${animationClass}
        ${className}
        ${count > 1 ? 'mb-3' : ''}
      `}
      style={skeletonStyle}
      {...props}
    />
  ));

  return <>{skeletons}</>;
}

/**
 * Card Skeleton - Pre-built card layout loader
 * Perfect for loading destination cards or content cards
 */
export function CardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      {/* Image skeleton */}
      <Skeleton variant="rectangular" width="100%" height={224} animation="pulse" />

      {/* Content area */}
      <div className="p-6 space-y-4">
        {/* Title skeleton */}
        <Skeleton variant="text" width="80%" height={24} animation="pulse" />

        {/* Subtitle skeleton */}
        <Skeleton variant="text" width="60%" height={16} animation="pulse" />

        {/* Description skeletons */}
        <div className="space-y-2">
          <Skeleton variant="text" width="100%" height={16} animation="pulse" />
          <Skeleton variant="text" width="90%" height={16} animation="pulse" />
        </div>

        {/* Rating skeleton */}
        <div className="flex gap-2 pt-2">
          <Skeleton variant="circular" width={20} height={20} animation="pulse" />
          <Skeleton variant="text" width={40} height={20} animation="pulse" />
        </div>

        {/* Price and button skeleton */}
        <div className="pt-4 space-y-3">
          <Skeleton variant="text" width="40%" height={30} animation="pulse" />
          <Skeleton variant="rectangular" width="100%" height={44} animation="pulse" />
        </div>
      </div>
    </div>
  );
}

/**
 * Grid of skeleton cards - For displaying multiple loading cards
 */
interface SkeletonGridProps {
  count?: number;
  columns?: number;
}

export function CardSkeletonGrid({ count = 6, columns = 3 }: SkeletonGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
      {Array.from({ length: count }, (_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
