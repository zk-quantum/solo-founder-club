import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#FAFAF8',
          secondary: '#F5F5F3',
        },
        text: {
          primary: '#0A0A0A',
          secondary: '#6B6B6B',
        },
        accent: {
          yellow: '#FFE500',
          'yellow-hover': '#FFD000',
        },
        border: {
          subtle: '#E5E5E5',
          strong: '#0A0A0A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        serif: ['var(--font-canela)', 'ui-serif', 'Georgia'],
        display: ['var(--font-gt-super)', 'ui-serif', 'Georgia'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.5rem', { lineHeight: '2rem' }],
        '2xl': ['2rem', { lineHeight: '2.5rem' }],
        '3xl': ['3rem', { lineHeight: '1.2' }],
        '4xl': ['4rem', { lineHeight: '1.1' }],
        '5xl': ['6rem', { lineHeight: '1' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      },
    },
  },
  plugins: [],
}
export default config
