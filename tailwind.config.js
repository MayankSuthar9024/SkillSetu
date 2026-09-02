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
        // Stitch Design System Colors
        primary: {
          DEFAULT: "#006c49",
          fixed: "#6ffbbe",
          "fixed-dim": "#4edea3",
          container: "#10b981",
        },
        "on-primary": "#ffffff",
        "on-primary-container": "#00422b",
        "on-primary-fixed": "#002113",
        "on-primary-fixed-variant": "#005236",
        "inverse-primary": "#4edea3",

        secondary: {
          DEFAULT: "#416656",
          container: "#c3ecd7",
          fixed: "#c3ecd7",
          "fixed-dim": "#a8cfbc",
        },
        "on-secondary": "#ffffff",
        "on-secondary-container": "#476c5b",
        "on-secondary-fixed": "#002115",
        "on-secondary-fixed-variant": "#294e3f",

        tertiary: {
          DEFAULT: "#006a61",
          container: "#42b4a7",
          fixed: "#89f5e7",
          "fixed-dim": "#6bd8cb",
        },
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#00413b",
        "on-tertiary-fixed": "#00201d",
        "on-tertiary-fixed-variant": "#005049",

        surface: {
          DEFAULT: "#f8f9fa",
          bright: "#f8f9fa",
          dim: "#d9dadb",
          variant: "#e1e3e4",
          tint: "#006c49",
          container: "#edeeef",
          "container-lowest": "#ffffff",
          "container-low": "#f3f4f5",
          "container-high": "#e7e8e9",
          "container-highest": "#e1e3e4",
        },
        "on-surface": "#191c1d",
        "on-surface-variant": "#3c4a42",
        "inverse-surface": "#2e3132",
        "inverse-on-surface": "#f0f1f2",

        background: "#f8f9fa",
        "on-background": "#191c1d",

        outline: {
          DEFAULT: "#6c7a71",
          variant: "#bbcabf",
        },

        error: {
          DEFAULT: "#ba1a1a",
          container: "#ffdad6",
        },
        "on-error": "#ffffff",
        "on-error-container": "#93000a",

        // Ayush Specific Tokens
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
        sans: ['"Caacupe One"', 'cursive', 'system-ui', 'sans-serif'],
        serif: ['"Caacupe One"', 'cursive', 'serif'],
        display: ['"Caacupe One"', 'cursive'],
        accent: ['"Caacupe One"', 'cursive'],
        "display-lg": ['"Caacupe One"', 'cursive'],
        "display-lg-mobile": ['"Caacupe One"', 'cursive'],
        "headline-md": ['"Caacupe One"', 'cursive'],
        body: ['"Caacupe One"', 'cursive', 'sans-serif'],
        "body-lg": ['"Caacupe One"', 'cursive'],
        "body-md": ['"Caacupe One"', 'cursive'],
        "label-sm": ['"Caacupe One"', 'cursive'],
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "1.15", letterSpacing: "0.01em", fontWeight: "400" }],
        "display-lg-mobile": ["32px", { lineHeight: "1.2", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "400" }],
        "body-lg": ["17px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["15px", { lineHeight: "1.5", fontWeight: "400" }],
        "label-sm": ["13px", { lineHeight: "1", letterSpacing: "0.02em", fontWeight: "400" }],
      },
      spacing: {
        base: "8px",
        "container-max": "1280px",
        gutter: "24px",
        "margin-mobile": "16px",
        "margin-desktop": "40px",
        "grid-pattern-size": "32px",
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(0, 108, 73, 0.06)',
        'medium': '0 10px 25px -4px rgba(15, 23, 42, 0.08)',
        'elevated': '0 20px 35px -6px rgba(15, 23, 42, 0.12)',
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

