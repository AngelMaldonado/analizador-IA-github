import { Box, Flex, Icon, HStack, IconButton, Link, Stack, Text, useDisclosure } from "@chakra-ui/react";

export default function GlassNavbar() {
  const { onOpen, onClose, open } = useDisclosure();

  const Links = ["Home", "About", "Services", "Contact"];

  const NavLink = ({ children }: { children: string }) => (
    <Link
      px={3}
      py={1}
      rounded="md"
      _hover={{
        textDecoration: "none",
        bg: "whiteAlpha.300",
      }}
      href={`#${children.toLowerCase()}`}
    >
      {children}
    </Link>
  );

  return (
    <Box>
      <Flex
        as="nav"
        bg="whiteAlpha.200"
        backdropFilter="blur(10px)"
        w="100%"
        p={4}
        color="white"
        alignItems="center"
        justifyContent="space-between"
        left={0}
        top={0}
        position="fixed"
        zIndex="10"
        shadow="md"
      >
        <Text fontSize="lg" fontWeight="bold">
          MyLogo
        </Text>
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={open ? onClose : onOpen}
          // _icon={open ? <Icon><CircleX /></Icon> : <Icon><CircleX /></Icon>}
          variant="outline"
          aria-label="Toggle Navigation"
        />
        <HStack
          as="nav"
          display={{ base: "none", md: "flex" }}
        >
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>
      </Flex>
      {open && (
        <Box
          pb={4}
          display={{ md: "none" }}
          bg="whiteAlpha.200"
          backdropFilter="blur(10px)"
        >
          <Stack as="nav">
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
