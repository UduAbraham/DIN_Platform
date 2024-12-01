import { Box, Flex, Text, Link, IconButton,  useDisclosure, VStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      as="nav"
      position="relative"
      top="0"
      zIndex="1000"
      bg="linear-gradient(to right, #f7fafc, #ee8f0)"
      boxShadow="sm"
      py={4}
    >
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto" px={4}>
        <Text fontSize="xl" fontWeight="bold" color="teal.500">
          DIN.Platform
        </Text>
        <Flex gap={4} display={{ base: 'none', md: 'flex' }}>
          <Link href="#" _hover={{ textDecoration: 'none' }}>Home</Link>
          <Link href="#Features" _hover={{ textDecoration: 'none' }}>Features</Link>
          <Link href="#Benefits" _hover={{ textDecoration: 'none' }}>Benefits</Link>
          <Link href="#Partners" _hover={{ textDecoration: 'none' }}>Partners</Link>
          {/* <Link colorScheme="teal" href="#" _hover={{ textDecoration: 'none' }}>Get Started</Link> */}
        </Flex>
        <IconButton
          icon={<HamburgerIcon />}
          display={{ base: 'flex', md: 'none' }}
          variant="outline"
          onClick={onToggle}
          aria-label="Open Menu"
        />
      </Flex>

      {isOpen && (
        <VStack display={{ base: 'flex', md: 'none' }} mt={4} spacing={4} align="center">
          <Link href="#" _hover={{ textDecoration: 'none' }}>Home</Link>
          <Link href="#Features" _hover={{ textDecoration: 'none' }}>Features</Link>
          <Link href="#Benefits" _hover={{ textDecoration: 'none' }}>Benefits</Link>
          <Link href="#Partners" _hover={{ textDecoration: 'none' }}>Partners</Link>
          {/* <Link colorScheme="teal" href="#" _hover={{ textDecoration: 'none' }}>Get Started</Link> */}
        </VStack>
      )}
    </Box>
  );
};
