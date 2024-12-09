import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        base: '12px',
        "xs": "10px",
        "4xl": "40px",
        "5xl": "45px",
      },
      lineHeight: {
        "10": '47px',
        "12": "58.5px"
      },

      spacing: {
        small: '4px',
        medium: '8px',
        large: '16px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
       
        purple: '#7148CA', // Primary purple
        pink: '#C5436B', // Pink for gradients
        pink_300: "rgba(219, 202, 231, 1)",
        pink_700: "#f1588a",
        magenta: '#AA24AC', // Magenta for gradients
        magenta_300: '#A527AE',
        
        
        blue_900: "#342F55",
        blue_500: '#0689FF', // Bright blue for gradients
        blue_700: '#7879F1',
        blue_200: '#7AC8FF', // Light blue for borders/gradients
        blue_800: '#547BED', // Dark blue for borders/gradients
        lightPink: '#FF719D', // Light pink for borders/gradients

        // Semantic mappings
        border: {
          primary: '#7148CA', 
          secondary: '#6E679C', 
        },
        gradient: {
          text: {
            pink: '#C5436B',
            magenta: '#AA24AC',
            blue: '#0689FF',
          },
          border: {
            lightBlue: '#7AC8FF',
            darkBlue: '#547BED',
            lightPink: '#FF719D',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
