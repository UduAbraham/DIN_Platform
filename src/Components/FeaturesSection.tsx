
import { Box, SimpleGrid, Icon, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaServer, FaLock, FaNetworkWired } from 'react-icons/fa';

const MotionVStack = motion(VStack); // Motion-enabled VStack

const features = [
  { icon: FaServer, title: 'Reliable', description: 'Guaranteed uptime for your blockchain infrastructure.' },
  { icon: FaLock, title: 'Secure', description: 'Enhanced data protection for decentralized applications.' },
  { icon: FaNetworkWired, title: 'Scalable', description: 'Easily handle growing network demands.' },
];

export const FeaturesSection = () => (
  <Box py={{ base: 10, md: 20 }} px={{ base: 4, md: 16 }} color="black"
  id='Features'
  >
    <Text
      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
      fontWeight="bold"
      bgClip="text"
      bgGradient="linear(to-l, teal.400, blue.500)"
      textAlign="center"
      mb={10}
    >
      Key Features
    </Text>

    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 10 }}>
      {features.map((feature, idx) => (
        <MotionVStack
          key={idx}
          spacing={4}
          bg="white"
          align="center"
          textAlign="center"
          border="px solid teal"
          borderRadius="12px"
          p={{ base: 4, md: 6 }}
          boxShadow="lg"
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.6 }}
        >
          <Icon as={feature.icon} w={{ base: 10, md: 12 }} h={{ base: 10, md: 12 }} color="teal.500" />
          <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">{feature.title}</Text>
          <Text fontSize={{ base: 'sm', md: 'md' }}>{feature.description}</Text>
        </MotionVStack>
      ))}
    </SimpleGrid>
  </Box>
);

export default FeaturesSection;
