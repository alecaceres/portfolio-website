import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const customColors = {
  'hollywood-cerise': {
    50: '#fef1fc',
    100: '#fee5fa',
    200: '#ffcaf7',
    300: '#ff9fef',
    400: '#ff63e2',
    500: '#ff35d0',
    600: '#e70faa',
    700: '#d10592',
    800: '#ac0877',
    900: '#8f0c65',
    950: '#58003a',
  },
  'electric-violet': {
    50: '#f3f0ff',
    100: '#eae4ff',
    200: '#d7cdff',
    300: '#bba6ff',
    400: '#9a73ff',
    500: '#7d3bff',
    600: '#7114ff',
    700: '#6301ff',
    800: '#5301d6',
    900: '#4503af',
    950: '#290077',
  }
}

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
      colors: customColors,
    },
    colors: {
      ...colors,
      white: "#FEFDFF",
      black: "#191919",
      primary: customColors["hollywood-cerise"],
      secondary: customColors["electric-violet"],
    },
  },
  plugins: [],
};
export default config;
