import { colors } from './src/constants/colors';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    ...colors,
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%) translateX(50%)' },
          '100%': { transform: 'translateY(0) translateX(50%)' },
        },
        slideDown: {
          '0%': { maxHeight: '0', padding: '0 20px' },
          '50%': { padding: '20px' },
          '100%': { maxHeight: '100vh' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
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
        '.body-15-rg': {
          fontSize: '15px',
          lineHeight: '18px',
          fontWeight: 400,
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
        '.body-13-semibold': {
          fontSize: '13px',
          lineHeight: '16px',
          fontWeight: 600,
          letterSpacing: '-0.3px',
        },
        '.body-13-rg': {
          fontSize: '13px',
          lineHeight: '19px',
          fontWeight: 400,
          letterSpacing: '-0.3px',
        },
        '.caption-12-md': {
          fontSize: '12px',
          lineHeight: '14px',
          fontWeight: 500,
          letterSpacing: '0',
        },
        '.caption-12-rg': {
          fontSize: '12px',
          lineHeight: '14px',
          fontWeight: 400,
          letterSpacing: '0',
        },
        '.caption-11-md': {
          fontSize: '11px',
          lineHeight: '13px',
          fontWeight: 500,
          letterSpacing: '-0.3px',
        },
        '.ballon': {
          borderTop: '10px solid #FF7B54',
          borderLeft: '10px solid transparent',
          borderRight: '10px solid transparent',
          content: '',
          position: 'absolute',
          top: '68px',
          left: '50%',
          transform: 'translateX(-50%)',
        },
        '.font-synthesis-none': {
          fontSynthesis: 'none',
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
export default config;
