"use client"
import { Navbar } from "@/components/ui/navbar";
import { Box, chakra, SystemRecipeFn, useRecipe } from "@chakra-ui/react";

export default function Home() {
  const recipie = useRecipe({ key: "background" }) as SystemRecipeFn<{}, {}>
  const styles = recipie({ base: true })

  return (
    <>
      <Box css={styles}></Box>
      <chakra.main>
        <Navbar />
      </chakra.main>
    </>
  );
}
