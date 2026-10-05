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
        paper: {
          light: '#FBFBFA',
          surface: '#F4F3EE',
          card: '#EDECE6',
          border: '#E3E1D8',
          'border-subtle': '#ECEAE4',
          dark: '#0E0F12',
          'dark-surface': '#15171B',
          'dark-card': '#1C1E23',
          'dark-border': '#282B32',
          'dark-border-subtle': '#1E2127',
        },
        ink: {
          charcoal: '#111111',
          primary: '#1A1A1A',
          muted: '#5A5854',
          subtle: '#8C8983',
          faint: '#C5C2BA',
          light: '#F2EFEB',
          'light-muted': '#A4A19B',
          'light-subtle': '#686661',
        },
        accent: {
          blue: '#1D4ED8',
          'blue-vibrant': '#2563EB',
          'blue-soft': '#3B82F6',
          'blue-tint': '#EFF6FF',
          'blue-dark-tint': 'rgba(37, 99, 235, 0.12)',
        }
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Newsreader', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.02em',
        'widest-editorial': '0.18em',
      },
      boxShadow: {
        'editorial': '0 12px 32px -4px rgba(22, 23, 26, 0.05)',
        'editorial-hover': '0 20px 48px -6px rgba(22, 23, 26, 0.09)',
        'editorial-dark': '0 12px 32px -4px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        }
      }
    },
  },
  plugins: [],
}
