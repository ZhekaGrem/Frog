import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        first: "url('/public/bg/1.webp')",
      },
      customPing: {
        '0%': { transform: 'scale(1)', opacity: '1' },
        '75%': { transform: 'scale(1.1)', opacity: '1' },
        '100%': { transform: 'scale(1)', opacity: '1' },
      },
      keyframes: {
        customPing: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '75%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
    animation: {
      'custom-ping': 'customPing 1s ease-in-out infinite',
    },
  },
  plugins: [],
};
export default config;
