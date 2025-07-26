import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazirmatn', 'IRANSans', 'Tahoma', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
        'spin': 'spin 1s linear infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      animationDelay: {
        '2000': '2s',
        '4000': '4s',
        '6000': '6s',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      gradientColorStops: {
        'primary': '#667eea',
        'secondary': '#764ba2',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          850: '#1f2937',
          950: '#030712',
        },
        blue: {
          450: '#1e40af',
          550: '#1d4ed8',
        },
        purple: {
          450: '#7c3aed',
          550: '#6d28d9',
        },
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        'inner-lg': 'inset 0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(147, 51, 234, 0.5)',
        'glow-lg': '0 0 40px rgba(147, 51, 234, 0.3)',
      },
      transitionDuration: {
        '2000': '2s',
        '3000': '3s',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
    },
  },
  plugins: [],
} satisfies Config;