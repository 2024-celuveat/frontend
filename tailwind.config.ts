import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: {
        DEFAULT: '#FFFFFF',
      },
      gray: {
        100: '#F1F3F6',
        200: '#E1E2E4',
        300: '#BEBEC0',
        400: '#909097',
        600: '#6B6C74',
        700: '#494A50',
        800: '#2A2A2E',
        900: '#101113',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.title-22-md': {
          fontSize: '22px',
          lineHeight: '28px',
          fontWeight: 500,
          letterSpacing: '-0.3px',
        },
        '.title-20-bold': {
          fontSize: '20px',
          lineHeight: '24px',
          fontWeight: 700,
          letterSpacing: '-0.3px',
        },
        '.title-20-md': {
          fontSize: '20px',
          lineHeight: '24px',
          fontWeight: 500,
          letterSpacing: '-0.3px',
        },
        '.body-18-bold': {
          fontSize: '18px',
          lineHeight: '22px',
          fontWeight: 700,
          letterSpacing: '-0.3px',
        },
        '.title-16-sb': {
          fontSize: '16px',
          lineHeight: '19px',
          fontWeight: 600,
          letterSpacing: '-0.3px',
        },
        '.body-16-md': {
          fontSize: '16px',
          lineHeight: '19px',
          fontWeight: 500,
          letterSpacing: '-0.3px',
        },
        '.title-15-md': {
          fontSize: '15px',
          lineHeight: '18px',
          fontWeight: 500,
          letterSpacing: '-0.3px',
        },
        '.body-14-md': {
          fontSize: '14px',
          lineHeight: '17px',
          fontWeight: 500,
          letterSpacing: '0',
        },
        '.body-14-rg': {
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: 400,
          letterSpacing: '-0.3px',
        },
        '.body-13-rg': {
          fontSize: '13px',
          lineHeight: '19px',
          fontWeight: 400,
          letterSpacing: '-0.3px',
        },
        '.caption-12-rg': {
          fontSize: '12px',
          lineHeight: '14px',
          fontWeight: 400,
          letterSpacing: '0',
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
export default config;
