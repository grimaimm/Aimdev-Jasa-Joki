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
    extend: {
      fontFamily: {
        sans: ['var(--onestSans-font)'],
        sora: ['var(--soraSans-font)'],
        onest: ['var(--onestSans-font)'],
        code: ['var(--firaCode-font)'],
        emoji: ['Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('daisyui'),
    heroui({
      prefix: 'heroui',
      addCommonColors: false,
      defaultTheme: 'light',
      // themes: {
      //   light: {
      //     colors: {},
      //   },
      //   dark: {
      //     colors: {},
      //   },
      // },
    }),
  ],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: ["light"],
    base: true,
    styled: true,
    utils: true,
    logs: true,
    themeRoot: ':root',
  },
};
