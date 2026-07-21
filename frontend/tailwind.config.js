/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#070B12',
        card: '#111827',
        border: '#1F2937',
        primary: {
          DEFAULT: '#3B82F6',
          foreground: '#FFFFFF',
        },
        success: '#10B981',
        warning: '#F59E0B',
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
        purple: '#8B5CF6',
        muted: {
          DEFAULT: '#1F2937',
          foreground: '#94A3B8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
