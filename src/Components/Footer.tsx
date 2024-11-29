import { Box, Text, SimpleGrid, Stack, Link, HStack } from '@chakra-ui/react';
import { FaTelegram, FaTwitter, FaDiscord } from 'react-icons/fa';

export const Footer = () => (
  <Box bg="gray.800" color="white" py={6} textAlign="center">
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      <Text>© 2024 Decentralized Infrastructure Network. All rights reserved.</Text>
      <Stack direction="row" spacing={4} justify="center">
        <Link href="#privacy" _hover={{ textDecoration: 'underline' }}>Privacy</Link>
        <Link href="#terms" _hover={{ textDecoration: 'underline' }}>Terms</Link>
        <Link href="#contact" _hover={{ textDecoration: 'underline' }}>Contact</Link>
      </Stack>
    </SimpleGrid>
    <HStack justify="center" spacing={4} mt={4}>
      <Link href="https://telegram.org" isExternal>
        <FaTelegram size="20px" />
      </Link>
      <Link href="https://twitter.com" isExternal>
        <FaTwitter size="20px" />
      </Link>
      <Link href="https://discord.com" isExternal>
        <FaDiscord size="20px" />
      </Link>
    </HStack>
  </Box>
);
