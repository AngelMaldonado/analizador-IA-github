"use client"
import { Avatar } from "@/components/ui/avatar";
import { Navbar } from "@/components/ui/navbar";
import { Box, chakra, Heading, HStack, Icon, Input, VStack } from "@chakra-ui/react";
import { TrophyIcon } from "lucide-react";

export default function Home() {
  return (
    <Box h="full" w="full" zIndex={1}>
      <Navbar />
      <chakra.main>
        <Heading size="3xl">Busca un perfil</Heading>
        <Input variant="subtle" size="xl" rounded="2xl" shadow="lg" />
        <Heading size="3xl" mt={8}>
          Top 3
        </Heading>
        <HStack mt={8}>
          <VStack>
            <Icon bg="gray.700" w={16} h={16} rounded="xl" p={2}>
              <TrophyIcon />
            </Icon>
            <Avatar w={32} h={32} src="https://bit.ly/sage-adebayo" />
            <Heading size="md">AngelMaldonado</Heading>
          </VStack>
          <VStack mb={24}>
            <Icon bg="yellow.500" w={16} h={16} rounded="xl" p={2}
            >
              <TrophyIcon />
            </Icon>
            <Avatar w={48} h={48} src="https://bit.ly/sage-adebayo"
              boxShadow="
              0 0 20px #0ff,
              0 0 40px #0ff,
              0 0 80px #0ff,
              0 0 120px #0ff"
            />
            <Heading size="md">AngelMaldonado</Heading>
          </VStack>
          <VStack>
            <Icon bg="orange.800" w={16} h={16} rounded="xl" p={2}>
              <TrophyIcon />
            </Icon>
            <Avatar w={16} h={16} src="https://bit.ly/sage-adebayo" />
            <Heading size="md">AngelMaldonado</Heading>
          </VStack>
        </HStack>
      </chakra.main>
    </Box >
  );
}
