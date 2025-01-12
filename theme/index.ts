import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { recipes } from "./recipes";
import { Fira_Code } from "next/font/google";

const fira = Fira_Code({ subsets: ["cyrillic"] });
const customConfig = defineConfig({
  globalCss: {
    // Body styles
    body: {
      bg: "#071c39",
      display: "flex",
      placeContent: "center",
      alignItems: "center",
      overflow: "hidden",
      height: "100vh",
    },
    main: {
      p: 4,
      h: "full",
      display: "flex",
      flexDirection: "column",
    },
  },
  theme: {
    tokens: {
      fonts: {
        body: { value: fira.style.fontFamily },
        heading: { value: fira.style.fontFamily },
      },
    },
    recipes,
    // Adding keyframes and animations
    keyframes: {
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
