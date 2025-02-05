// tailwind.config.js
/** @type {import('tailwindcss').Config} */

const { heroui } = require('@heroui/react');

module.exports = {
  content: [
    // Next.js
    './src/**/*.{js,jsx,mdx}',
    './src/**/**/*.{js,jsx,mdx}',
    './src/**/**/**/*.{js,jsx,mdx}',
    './src/**/**/**/**/*.{js,jsx,mdx}',
    './src/**/**/**/**/**/*.{js,jsx,mdx}',
    './src/**/**/**/**/**/**/*.{js,jsx,mdx}',
    './src/**/**/**/**/**/**/**/*.{js,jsx,mdx}',
    './src/**/**/**/**/**/**/**/**/*.{js,jsx,mdx}',
    './src/**/**/**/**/**/**/**/**/**/*.{js,jsx,mdx}',

    // HeroUI
    './node_modules/@heroui/theme/dist/**/*.{js,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--onestSans-font)'],
        sora: ['var(--soraSans-font)'],
        onest: ['var(--onestSans-font)'],
        code: ['var(--firaCode-font)'],
        aguarita: ['var(--aguarita-font)'],
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
    }),
  ],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: false,
    base: true,
    styled: true,
    utils: true,
    logs: false,
    themeRoot: ':root',
  },
};
