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
  // daisyui: {
  //   themes: false,
  //   base: true,
  //   styled: true,
  //   utils: true,
  //   logs: true,
  //   themeRoot: ':root',
  // },
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
