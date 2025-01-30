/** @type {import('tailwindcss').Config} */

const { heroui } = require('@heroui/react');

export default {
  content: [
    // Next.js
    './src/**/*.{js,ts,jsx,mdx}',
    './src/**/**/*.{js,ts,jsx,mdx}',
    './src/**/**/**/*.{js,ts,jsx,mdx}',
    './src/**/**/**/**/*.{js,ts,jsx,mdx}',
    './src/**/**/**/**/**/*.{js,ts,jsx,mdx}',
    './src/**/**/**/**/**/**/*.{js,ts,jsx,mdx}',
    './src/**/**/**/**/**/**/**/*.{js,ts,jsx,mdx}',
    './src/**/**/**/**/**/**/**/**/*.{js,ts,jsx,mdx}',
    './src/**/**/**/**/**/**/**/**/**/*.{js,ts,jsx,mdx}',

    // HeroUI
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    heroui({
      prefix: 'heroui',
      addCommonColors: false,
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {},
        },
        dark: {
          colors: {},
        },
      },
    }),
  ],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: false,
    base: true,
    styled: true,
    utils: true,
    prefix: 'daisyui',
    logs: true,
    themeRoot: ':root',
  },
};
