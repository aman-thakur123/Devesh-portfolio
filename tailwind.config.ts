import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'blackLight': '#0B0B0B',
      'blackgrey': '#2D3C3C',
      'blue': '#2668F2',
      'bluelight': '#18395E',
      'grey': '#7A7A7A',
      'bluehover': '#2668F21A',
      'blackHeading': '#2D2D2D',
      'yellow': '#fff6de',
      'yellowdark': '#f6e4c1',
      'blue-100': '#EEFAF3',
      'lightgrey': '#828282',
      'greybg': '#FAFAFA',
      'lightblack': '#4F4F4F'
    }
  },
  plugins: [],
};
export default config;
