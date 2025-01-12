import { defineSlotRecipe } from "@chakra-ui/react";

export const PodiumRecipe = defineSlotRecipe({
  slots: ["podium", "podiumChild"],
  base: {
    podium: {
      w: "full",
      h: "full",
      maxW: "7xl",
      display: "flex",
      flexDir: { base: "column", md: "row" },
      gap: { base: -8, md: 8 },
      justifyContent: { base: "start", md: "center" },
      mx: "auto",
      pt: 12,
    },
    podiumChild: {
      w: { base: "auto", md: "30%" },
      h: { base: "20%", md: "auto" },
      display: "flex",
      flexDir: "column",
      alignItems: "center",
      justifyContent: "center",
      aspectRatio: 1 / 1,
      spaceY: -10,
    }
  },
})
