import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

/**
 * Input Component
 * Reusable input with proper contrast, accessibility, and error handling
 * - High contrast text (text-gray-900)
 * - Visible placeholder for supported types (placeholder-gray-600)
 * - Proper disabled state styling
 * - Error state with good visual feedback
 * 
 * Note: placeholder-gray-600 is only applied to input types that support ::placeholder
 * (text, email, number, search, tel, url). Types like date follow native browser styling.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      disabled,
      type = 'text',
      className,
      id,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'w-full px-4 py-3 border rounded-lg outline-none transition-all';

    // Apply placeholder-gray-600 only to input types that support ::placeholder
    const supportsPlaceholder = ['text', 'email', 'number', 'search', 'tel', 'url'].includes(type);
    
    const normalStyles = `border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent ${
      supportsPlaceholder ? 'placeholder-gray-600' : ''
    }`;

    const errorStyles = `border-red-500 bg-red-50 text-gray-900 focus:ring-2 focus:ring-red-200 ${
      supportsPlaceholder ? 'placeholder-gray-600' : ''
    }`;

    const disabledStyles =
      'disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-500 disabled:placeholder-gray-400 disabled:cursor-not-allowed';

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

        <input
          ref={ref}
          id={id}
          type={type}
          disabled={disabled}
          className={inputStyles}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          {...props}
        />

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

Input.displayName = 'Input';
