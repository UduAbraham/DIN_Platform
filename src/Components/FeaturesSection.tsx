import  { useEffect } from 'react';
import { Box, SimpleGrid, Icon, Text, VStack } from '@chakra-ui/react';
import { FaServer, FaLock, FaNetworkWired } from 'react-icons/fa';

// Features Data
const features = [
  { icon: FaServer, title: 'Reliable', description: 'Guaranteed uptime for your blockchain infrastructure.' },
  { icon: FaLock, title: 'Secure', description: 'Enhanced data protection for decentralized applications.' },
  { icon: FaNetworkWired, title: 'Scalable', description: 'Easily handle growing network demands.' },
];

// FeatureCard Component
const FeatureCard = ({
  icon,
  title,
  description,
  delay,
}: {
  icon: any;
  title: string;
  description: string;
  delay: number; // Staggered delay
}) => (
  <VStack
    spacing={4}
    bg="white"
    align="center"
    textAlign="center"
    border="3px solid white"
    borderRadius="12px"
    p={{ base: 4, md: 6 }}
    boxShadow="lg"
    transition="transform 0.8s ease, box-shadow 0.2s ease, opacity 0.5s ease"
    opacity={0} // Initial opacity for fade-in
    transform="translateY(100px)" // Initial position for staggered animation
    animation={`fadeInUp 0.5s ease ${delay}s forwards`} // Staggered animation
    _hover={{
      transform: 'scale(1.05)',
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
    }}
  >
    <Icon as={icon} w={{ base: 10, md: 12 }} h={{ base: 10, md: 12 }} color="teal.500" />
    <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
      {title}
    </Text>
    <Text fontSize={{ base: 'sm', md: 'md' }}>{description}</Text>
  </VStack>
);

// FeaturesSection Component
export const FeaturesSection = () => {
  useEffect(() => {
    injectKeyframes();
  }, []);

  return (
    <Box
      py={{ base: 10, md: 20 }}
      px={{ base: 4, md: 16 }}
      id="Features"
      color="black"
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
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={idx * 0.3} // Adjusted delay for staggered animation
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

// Inject Keyframes
const injectKeyframes = () => {
  if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(50px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
  }
};

export default FeaturesSection;
