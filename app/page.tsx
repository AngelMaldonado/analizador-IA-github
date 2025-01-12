"use client"
import { Navbar } from "@/components/ui/navbar";
import { Podium, PodiumChild } from "@/components/ui/podium";
import { chakra, Flex, Heading, Input } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex flexDir="column" h="full" w="full" zIndex={1}>
      <Navbar />
      <chakra.main>
        <Flex flexDir="column" justifyContent="center" alignItems="center">
          <Heading size="3xl">Busca un perfil</Heading>
          <Input variant="subtle" size="xl" rounded="full" shadow="lg" />
        </Flex>
        <Podium>
          <PodiumChild user={{ name: "AngelMaldonado", avatar: "https://bit.ly/sage-adebayo", rank: 1 }} />
          <PodiumChild user={{ name: "AngelMaldonado", avatar: "https://bit.ly/sage-adebayo", rank: 1 }} />
          <PodiumChild user={{ name: "AngelMaldonado", avatar: "https://bit.ly/sage-adebayo", rank: 1 }} />
        </Podium>
      </chakra.main>
    </Flex >
  );
}
