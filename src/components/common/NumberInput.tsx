import React from 'react';

interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  onIncrement?: () => void;
  onDecrement?: () => void;
  showControls?: boolean;
}

/**
 * NumberInput Component
 * Specialized input for numbers with optional +/- controls
 * - High contrast text (text-gray-900)
 * - Clear button states with good visual feedback
 * - Accessible increment/decrement buttons
 * - Proper disabled state styling
 */
export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      disabled,
      className,
      id,
      onIncrement,
      onDecrement,
      showControls = false,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'px-3 py-2 border rounded-lg outline-none transition-all text-center';

    const normalStyles =
      'border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent';

    const errorStyles =
      'border-red-500 bg-red-50 text-gray-900 focus:ring-2 focus:ring-red-200';

    const disabledStyles =
      'disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed';

    const inputStyles = `${baseStyles} ${error ? errorStyles : normalStyles} ${disabledStyles} ${className || ''}`;

    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-semibold text-gray-900 mb-2"
          >
            {label}
            {props.required && <span className="text-secondary"> *</span>}
          </label>
        )}

        {showControls ? (
          <div className="flex items-center gap-3">
            {/* Decrement Button */}
            <button
              type="button"
              onClick={onDecrement}
              disabled={disabled}
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-100 active:bg-gray-200 disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
              aria-label="Diminuir"
            >
              −
            </button>

            {/* Input */}
            <input
              ref={ref}
              id={id}
              type="number"
              disabled={disabled}
              className={`flex-1 ${inputStyles}`}
              aria-invalid={!!error}
              aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
              {...props}
            />

            {/* Increment Button */}
            <button
              type="button"
              onClick={onIncrement}
              disabled={disabled}
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-100 active:bg-gray-200 disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
              aria-label="Aumentar"
            >
              +
            </button>
          </div>
        ) : (
          <input
            ref={ref}
            id={id}
            type="number"
            disabled={disabled}
            className={inputStyles}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
            {...props}
          />
        )}

        {error && (
          <p
            id={`${id}-error`}
            className="text-red-600 text-sm mt-1 flex items-center gap-1"
          >
            <span>⚠</span> {error}
          </p>
        )}

        {helperText && !error && (
          <p id={`${id}-helper`} className="text-xs text-gray-500 mt-1">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

NumberInput.displayName = 'NumberInput';
