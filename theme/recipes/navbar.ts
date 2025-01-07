import { defineRecipe } from "@chakra-ui/react";

export const Navbar = defineRecipe({
  base: {
    display: "flex",
    justifyContent: "space-between",
    bg: "whiteAlpha.200",
    px: { base: 4, md: 12 },
    py: 4,
  }
})
