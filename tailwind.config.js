/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['var(--font-inter)']
      },
      colors:{
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        accent: 'rgb(var(--accent))',
      },
      backgroundImage:{
        'firefly-radial': "radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, 0.5) 0%, rgba(217,217,217, 0) 100%)"
      },
      boxShadow:{
        'glass-inset': 'inset 0 17px 5px -9px rgba(254,254,91, 0.05)',
        'glass-sm': '5px 5px 20px 0px rgba(254,254,91, 0.3)',
      },
      keyframes:{
      'spin-reverse':{
        '0%': {transform: 'rotate(0deg)'},
        '100%': {transform: 'rotate(-360deg)'}
      },
      'gradient-x': {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
      },
      'glow-breathe': {
        '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
        '50%': { opacity: '0.9', transform: 'scale(1.12)' },
      },
      'pulse-ring': {
        '0%, 100%': { opacity: '0.25', transform: 'scale(0.56)' },
        '50%': { opacity: '0.7', transform: 'scale(0.6)' },
      },
      'float-slow': {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-18px)' },
      }
      },
      animation:{
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin-reverse 40s linear infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        'glow-breathe': 'glow-breathe 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 5s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
      },
      screens:{
        xs: '480px',
      }
    },
  },
  plugins: [],
};
