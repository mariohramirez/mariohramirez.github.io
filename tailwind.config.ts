import type { Config } from 'tailwindcss'

//Se anade el font-family de la fuente que se va a usar
const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      //Definicion para las fuentes
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      //Definicion para los colores
      colors: {
        //Nombre del color: valor del color
        dark:"#1b1b1b",
        light: "f5f5f5",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
        grape: "#331C52",
        revolver: "#291C3A",
        purpleHeart: "#821DC0",
        wisteria: "#8f72b5",
        prelude: "#DCCFED",
      },
    },
  },
  plugins: [],
}
export default config
