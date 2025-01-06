"use client"
import GlassNavbar from "@/components/ui/navbar";
import { Box, SystemRecipeFn, useRecipe } from "@chakra-ui/react";

export default function Home() {
  const recipie = useRecipe({ key: "background" }) as SystemRecipeFn<{}, {}>
  const styles = recipie({ base: true })

  return (
    <>
      <Box css={styles}></Box>
      <main style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <GlassNavbar />
      </main>
    </>
  );
}
