import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner:
          "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);",
      },
      backgroundSize: {
        "125%": "125%",
      },
      colors: {
        bg: {
          black: "#000000",
          gray: "rgb(35, 35, 35)",
          "gray-2": "rgb(45, 45, 45)",
          "gray-3": "#393939",
        },
        text: {
          white: "#FFFFFF",
          red: "rgb(229, 9, 20)",
          blue: "rgb(0, 113, 235)",
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
    screens: {
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1920px",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
