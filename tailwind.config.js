/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ayush: {
          deep: '#063A2B',       // Deep botanical forest green
          darker: '#03241B',     // Ultra dark botanical green
          primary: '#0D5C43',    // Official Ayush green
          emerald: '#10B981',    // Fresh health emerald
          lightEmerald: '#34D399',
          mint: '#ECFDF5',       // Soft background tint
          mintBorder: '#A7F3D0',
          saffron: '#D97706',    // Warm Indian saffron / gold
          saffronLight: '#FEF3C7',
          saffronHover: '#B45309',
          charcoal: '#0F172A',   // Slate / charcoal text
          slate: '#334155',      // Secondary slate
          muted: '#64748B',      // Subtitle slate
          sand: '#F8FAFC',       // Clean background
          card: '#FFFFFF',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(13, 92, 67, 0.08)',
        'medium': '0 12px 30px -4px rgba(13, 92, 67, 0.12)',
        'elevated': '0 20px 40px -6px rgba(13, 92, 67, 0.16)',
        'saffron-glow': '0 0 25px rgba(217, 119, 6, 0.25)',
        'emerald-glow': '0 0 25px rgba(16, 185, 129, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
}
