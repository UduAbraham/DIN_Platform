// import React from 'react';
import { Box, Text, VStack, Icon, HStack } from '@chakra-ui/react';
import { FaShieldAlt, FaBolt, FaServer, FaNetworkWired, } from 'react-icons/fa';
import { keyframes } from '@emotion/react'; // Correct import

// Define the keyframes for the scrolling animation
const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } /* Adjust to half the total width */
`;

const features = [
  {
    icon: FaShieldAlt,
    title: 'Secure Infrastructure',
    description: 'Top-tier security protocols to protect your data and ensure reliable access.',
  },
  {
    icon: FaBolt,
    title: 'High Performance',
    description: 'Blazing fast response times to optimize your blockchain interactions.',
  },
  {
    icon: FaServer,
    title: 'Scalable Services',
    description: 'Effortlessly scale your operations with our robust infrastructure.',
  },
  {
    icon: FaNetworkWired,
    title: 'Seamless Connectivity',
    description: 'Access multiple blockchain networks with ease, all in one place.',
  },
];

export const FeaturesSection = () => (
  <Box
    py="80px"
    id="Benefits"
    backgroundImage="url(/src/assets/Annotation 2024-11-28 042847.png)" // Adjust if needed
    backgroundSize="cover"
    backgroundPosition="center"
    overflow="hidden"
  >
    <VStack spacing={4} mb={8} textAlign="center">
      <Text
        fontSize="3xl"
        fontWeight="bold"
        bgClip="text"
        bgGradient="linear(to-r, teal.400, blue.500)"
      >
        Benefits We Offer
      </Text>
      <Text color="gray.600" maxW="600px">
        Discover the advantages of using our platform—built to empower developers with reliable,
        scalable, and secure solutions.
      </Text>
    </VStack>
    <Box overflow="hidden" whiteSpace="nowrap" w="full" position="relative">
      <HStack
        spacing={8}
        animation={`${scrollAnimation} 25s linear infinite`} // Adjust duration for smoothness
        display="inline-flex"
      >
        {/* Repeat features array to ensure smooth scrolling */}
        {[...features, ...features].map((feature, idx) => (
          <Feature
            key={idx}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </HStack>
    </Box>
  </Box>
);

const Feature = ({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <VStack
    spacing={3}
    align="center"
    textAlign="center"
    bg="blackAlpha.800"
    color="white"
    border="1px solid teal"
    borderRadius="12px"
    p={6}
    boxShadow="lg"
    minW="300px" // Ensures consistent size
    whiteSpace="normal"
  >
    <Icon as={icon} w={12} h={12} color="teal.400" />
    <Text fontSize="xl" fontWeight="semibold">
      {title}
    </Text>
    <Text>{description}</Text>
  </VStack>
);

export default FeaturesSection;
