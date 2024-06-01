import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner:
          "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);",
      },
      colors: {
        bg: {
          black: "#000000",
        },
        text: {
          white: "#FFFFFF",
          red: "rgb(229, 9, 20)",
        },
        border: {
          white: "#FFFFFF",
          gray: "#666666",
        },
        button: {
          primary: {
            bg: "rgb(229, 9, 20)",
            text: "#FFFFFF",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
