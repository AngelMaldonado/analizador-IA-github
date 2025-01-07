import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { recipes } from "./recipes";

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
      zIndex: 1,
      width: "100vw",
      height: "100vh",
    },
  },
  theme: {
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
