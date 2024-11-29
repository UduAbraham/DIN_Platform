import {
   Box, 
   Text,
    // Button,
     VStack } from '@chakra-ui/react';

export const HeroSection = () => (
  <Box
    bg="linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)" // Updated background gradient
    color="white"
    py="100px"
    textAlign="center"
    id="home"
  >
    <VStack spacing={6}>
      <Text
        fontSize="4xl"
        fontWeight="bold"
        bgClip="text" // Enables gradient text
        bgGradient="linear(to-r, teal.400, blue.500, purple.600)" // Gradient for text
      >
        Decentralized Infrastructure for Web3
      </Text>
      <Text fontSize="1.5rem" maxW="30rem" color="gray.200">
        Reliable, scalable, and secure blockchain data access for developers.
        Interact with Ethereum and other networks using modern infrastructure.
      </Text>
      {/* <Button
        bgGradient="linear(to-r, teal.400, blue.500)" // Gradient button
        _hover={{ bgGradient: 'linear(to-r, blue.500, purple.600)' }}
        color="white"
        size="lg"
      >
        Get Started
      </Button> */}
    </VStack>
  </Box>
);
