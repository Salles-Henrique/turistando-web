import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  placeholder?: string;
  options: { label: string; value: string | number }[];
}

/**
 * Select Component
 * Reusable select with proper contrast, accessibility, and error handling
 * - High contrast text (text-gray-900)
 * - Pseudo-placeholder using disabled hidden option
 * - Proper disabled state styling
 * - Error state with good visual feedback
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      disabled,
      className,
      id,
      options,
      placeholder,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'w-full px-4 py-3 border rounded-lg outline-none transition-all appearance-none bg-right pr-8';

    const normalStyles =
      'border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent';

    const errorStyles =
      'border-red-500 bg-red-50 text-gray-900 focus:ring-2 focus:ring-red-200';

    const disabledStyles =
      'disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed';

    const selectStyles = `${baseStyles} ${error ? errorStyles : normalStyles} ${disabledStyles} ${className || ''}`;

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

        <div className="relative">
          <select
            ref={ref}
            id={id}
            disabled={disabled}
            className={selectStyles}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
            {...props}
          >
            {/* Pseudo-placeholder option - controlado pelo value da select */}
            <option value="" disabled hidden>
              {placeholder || 'Selecione uma opção'}
            </option>

            {/* Actual options */}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Custom dropdown arrow */}
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>

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

Select.displayName = 'Select';
