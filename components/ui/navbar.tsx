"use client"
import { Button } from "@/components/ui/button"
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { chakra, IconButton, Image, useRecipe, VStack } from "@chakra-ui/react"
import { Menu } from "lucide-react"

export function Navbar() {
  const recipe = useRecipe({ key: "Navbar" }) as any
  const styles = recipe({ base: true })

  return (
    <chakra.nav css={styles}>
      <Image src="/owl.svg" alt="Logo" width="auto" h={10} />
      <Drawer />
    </chakra.nav>
  )
}

function Drawer() {
  return (
    <DrawerRoot>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <IconButton variant="surface" aria-label="Open drawer">
          <Menu />
        </IconButton>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Github Profile Analyzer</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <VStack w="full" gap={4}>
            <Button w="full">Home</Button>
          </VStack>
        </DrawerBody>
        <DrawerFooter>
          <Button>Login</Button>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  )
}
