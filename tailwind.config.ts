import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* TURISTANDO Brand Colors */
      colors: {
        primary: {
          DEFAULT: '#116973',
          dark: '#0a4f57',
          light: '#1a8896',
          50: '#f0f7f9',
          100: '#d4eef3',
          200: '#a8ddeb',
          300: '#7cbce3',
          400: '#509bdb',
          500: '#2b7ab3',
          600: '#1f5a8b',
          700: '#116973',
          800: '#0a4f57',
          900: '#05303a',
        },
        secondary: {
          DEFAULT: '#F1BB19',
          dark: '#d9a616',
          light: '#f5cc47',
          50: '#fffbf0',
          100: '#fef6d9',
          200: '#fcedb3',
          300: '#fae08d',
          400: '#f8d767',
          500: '#f6ce41',
          600: '#f1bb19',
          700: '#d9a616',
          800: '#c19114',
          900: '#a97c12',
        },
        accent: {
          DEFAULT: '#8CCDF2',
          dark: '#5eb8e8',
          light: '#b1dff7',
          50: '#f0f8fc',
          100: '#d4eef8',
          200: '#a8def4',
          300: '#8ccdf2',
          400: '#70bdef',
          500: '#54adec',
          600: '#5eb8e8',
          700: '#5eb8e8',
          800: '#2b7ab3',
          900: '#1a4a6b',
        },
        support: {
          DEFAULT: '#976A26',
          dark: '#7a5520',
          light: '#b8884e',
          50: '#faf7f2',
          100: '#f2ede0',
          200: '#e5dac2',
          300: '#d8c7a4',
          400: '#c9ac7a',
          500: '#b89152',
          600: '#976a26',
          700: '#7a5520',
          800: '#5d3f1a',
          900: '#402a14',
        },
        neutral: '#ECECEC',
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#ececec',
          300: '#d4d4d8',
          400: '#a1a1a6',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#116973',
      },

      /* Typography */
      fontFamily: {
        sans: ["'Inter'", 'system-ui', '-apple-system', 'sans-serif'],
        heading: ["'Bebas Neue'", 'system-ui', 'sans-serif'],
        mono: ["'Monaco'", "'Courier New'", 'monospace'],
      },

      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.5px' }],
        sm: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.3px' }],
        base: ['1rem', { lineHeight: '1.5rem', letterSpacing: '0px' }],
        lg: ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0px' }],
        xl: ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.3px' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.3px' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.5px' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.5px' }],
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.8px' }],
        '6xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-1px' }],
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-1px' }],
      },

      /* Border Radius */
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        full: '9999px',
      },

      /* Spacing - Enhanced Scale with 8px baseline */
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '7': '1.75rem',
        '9': '2.25rem',
        '11': '2.75rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '28': '7rem',
        '30': '7.5rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
      },

      /* Shadows - Premium & Refined */
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        sm: '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        none: 'none',
        /* TURISTANDO Brand Shadows - Premium */
        'primary-sm': '0 4px 12px rgba(17, 105, 115, 0.12)',
        'primary-md': '0 8px 24px rgba(17, 105, 115, 0.2)',
        'primary-lg': '0 16px 40px rgba(17, 105, 115, 0.25)',
        'secondary-sm': '0 4px 12px rgba(241, 187, 25, 0.12)',
        'secondary-md': '0 8px 24px rgba(241, 187, 25, 0.2)',
        'accent-sm': '0 4px 12px rgba(140, 205, 242, 0.12)',
        'accent-md': '0 8px 24px rgba(140, 205, 242, 0.2)',
        /* Elevation shadows */
        'elevation-1': '0 2px 4px rgba(0, 0, 0, 0.08)',
        'elevation-2': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'elevation-3': '0 8px 16px rgba(0, 0, 0, 0.12)',
        'elevation-4': '0 12px 24px rgba(0, 0, 0, 0.15)',
      },

      /* Transitions */
      transitionDuration: {
        250: '250ms',
        350: '350ms',
      },

      /* Gradients */
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(135deg, #116973 0%, #1a8896 100%)',
        'gradient-primary-reverse':
          'linear-gradient(135deg, #1a8896 0%, #116973 100%)',
        'gradient-secondary':
          'linear-gradient(135deg, #F1BB19 0%, #f5cc47 100%)',
        'gradient-accent':
          'linear-gradient(135deg, #8CCDF2 0%, #5eb8e8 100%)',
        'gradient-support':
          'linear-gradient(135deg, #976A26 0%, #b8884e 100%)',
        'gradient-warm':
          'linear-gradient(135deg, #116973 0%, #976A26 100%)',
        'gradient-ocean':
          'linear-gradient(135deg, #116973 0%, #8CCDF2 100%)',
      },

      /* Custom Utilities for Component Design */
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'slide-in-up': 'slideInUp 0.4s ease-out',
        'slide-in-down': 'slideInDown 0.4s ease-out',
        'slide-in-left': 'slideInLeft 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
