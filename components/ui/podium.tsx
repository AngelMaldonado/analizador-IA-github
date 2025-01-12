"use client"
import { createSlotRecipeContext, Flex, HTMLChakraProps, Icon, RecipeVariantProps, Image, Heading, Box } from "@chakra-ui/react"
import { PodiumRecipe } from "@/theme/recipes/podium"
import { PodiumUser } from "@/lib/types/PodiumUser"
import { TrophyIcon } from "lucide-react"

const { withProvider, withContext } = createSlotRecipeContext({ recipe: PodiumRecipe })

type PodiumProps = HTMLChakraProps<"div", RecipeVariantProps<typeof PodiumRecipe>>
export const Podium = withProvider<HTMLDivElement, PodiumProps>("section", "podium")

type PodiumChildProps = HTMLChakraProps<"div"> & { user: PodiumUser }
export const PodiumChild = withContext<typeof PodiumChildComponent, PodiumChildProps>(
  PodiumChildComponent,
  "podiumChild"
)

function PodiumChildComponent(props: PodiumChildProps) {
  return (
    <Box className={props.className}>
      <Icon bg="gray.700" w={12} h={12} rounded="full" p={3}>
        <TrophyIcon />
      </Icon>
      <Flex zIndex={-1} flex={1} w="full" minW={32} minH={32} align="center" justify="center" overflow="hidden">
        <Image bg="whiteAlpha.300" p={3} w="auto" h="auto" maxH="full" src="https://bit.ly/sage-adebayo" rounded="full" />
      </Flex>
      <Heading size={{ base: "sm", md: "2xl" }}>AngelMaldonado</Heading>
    </Box>
  )
}
