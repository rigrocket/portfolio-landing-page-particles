import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary:"#026641",
        darkBg:"#02CA79",
        terciary:"#F1F4F8",
        quaternary:"#326d32",
      },
      backgroundImage: {
        'gradient-cover': 'linear-gradient(92.23deg, #00e68a 0%, #02CA79 40%, #028a55 80%, #026641 100%)',

      },
    },
  },
  plugins: [],
};
export default config;
