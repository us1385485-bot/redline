/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep dark blue/charcoal base
        pitch: {
          950: '#050810',
          900: '#0a0f1c',
          800: '#101828',
          700: '#1a2438',
          600: '#243048',
        },
        // Light blue accent
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Dark blue accent
        navy: {
          400: '#4a6cf7',
          500: '#3b5bdb',
          600: '#2f4bc4',
          700: '#273aa3',
          800: '#1f2d82',
          900: '#182161',
        },
        // Blood red accent for CTA/highlights
        crimson: {
          500: '#D32F2F',
          600: '#8B0000',
          700: '#FF1744',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
        }
      },
      fontFamily: {
        display: ['"Oswald"', '"Bebas Neue"', 'sans-serif'],
        body: ['"Inter"', '"Poppins"', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-blue': '0 4px 30px rgba(59, 130, 246, 0.25)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.15)',
        'glow-red': '0 0 20px rgba(255, 23, 68, 0.4), 0 0 60px rgba(255, 23, 68, 0.15)',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(5,8,16,0.92), rgba(10,15,28,0.97))",
        'grid-pattern': "linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}