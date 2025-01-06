import { createSystem, defaultBaseConfig, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  globalCss: {
    // Body styles
    body: {
      bg: "#071c39",
      inset: 0,
      display: "flex",
      placeContent: "center",
      alignItems: "center",
      overflow: "hidden",
      height: "100vh",
    },
    "*": {
      transition: "all 0.5s ease-out",
    },
  },
  theme: {
    recipes: {
      background: {
        base: {
          position: "absolute",
          "--size": "750px",
          "--speed": "50s",
          "--easing": "cubic-bezier(0.8, 0.2, 0.2, 0.8)",
          width: "var(--size)",
          height: "var(--size)",
          filter: "blur(calc(var(--size) / 5))",
          backgroundImage:
            "linear-gradient(hsl(222, 84%, 60%, 100%), hsl(164, 79%, 71%))",
          backgroundBlendMode: "screen",
          borderRadius: "50% 30% 50% 70% / 60% 40% 70% 50%",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          "@media (min-width: 720px)": {
            "--size": "500px",
          },
          animation: "rotate var(--speed) var(--easing) alternate infinite",
        },
      }
    },
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
