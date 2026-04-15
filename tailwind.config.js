/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        snow: '#F8FAFC',
        electric: '#2563EB',
        'electric-dark': '#1D4ED8',
        'electric-light': '#DBEAFE',
        ink: '#0F172A',
        'ink-muted': '#334155',
        'ink-subtle': '#64748B',
        border: '#E2E8F0',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      fontSize: {
        'clamp-hero': 'clamp(3rem, 10vw, 8rem)',
        'clamp-section': 'clamp(2rem, 5vw, 4rem)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'pill-1': 'pillDrift1 8s ease-in-out infinite',
        'pill-2': 'pillDrift2 10s ease-in-out infinite',
        'pill-3': 'pillDrift3 7s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'slide-down': 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pillDrift1: {
          '0%, 100%': { transform: 'rotate(-8deg) translateY(0px)' },
          '50%': { transform: 'rotate(-6deg) translateY(-8px)' },
        },
        pillDrift2: {
          '0%, 100%': { transform: 'rotate(12deg) translateY(0px)' },
          '50%': { transform: 'rotate(10deg) translateY(-6px)' },
        },
        pillDrift3: {
          '0%, 100%': { transform: 'rotate(-3deg) translateY(0px)' },
          '50%': { transform: 'rotate(-5deg) translateY(-10px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'brutal': '4px 4px 0px #0F172A',
        'brutal-blue': '4px 4px 0px #2563EB',
        'brutal-lg': '8px 8px 0px #0F172A',
        'card-hover': '0 20px 40px rgba(37, 99, 235, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
