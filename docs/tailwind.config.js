/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      colors: {
        iblack: '#0f0d0e',
        igray: '#221f20',
        ilightgray: '#383533',
        iblue: '#53b2e0',
        iyellow: '#f2bd4c',
        iwhite: '#f8f4dd',
        igreen: '#48995c',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
