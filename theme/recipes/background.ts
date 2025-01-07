import { defineRecipe } from "@chakra-ui/react";

export const Background = defineRecipe({
  base: {
    position: "absolute",
    zIndex: 0,
    "--size": "750px",
    "--speed": "50s",
    "--easing": "cubic-bezier(0.8, 0.2, 0.2, 0.8)",
    width: "var(--size)",
    height: "var(--size)",
    filter: "blur(calc(var(--size) / 5))",
    backgroundImage: "linear-gradient(hsl(222, 84%, 60%, 100%), hsl(164, 79%, 71%))",
    backgroundBlendMode: "screen",
    borderRadius: "50% 30% 50% 70% / 60% 40% 70% 50%",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    "@media (min-width: 720px)": {
      "--size": "500px",
    },
    animation: "rotate var(--speed) var(--easing) alternate infinite",
  },
})
