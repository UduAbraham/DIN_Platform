import { Box, Text, SimpleGrid, Image } from '@chakra-ui/react';

const partners = [
  
    'https://cryptologos.cc/logos/aave-aave-logo.png',
    'https://cryptologos.cc/logos/uniswap-uni-logo.png',
    'https://cryptologos.cc/logos/compound-comp-logo.png',
    'https://cryptologos.cc/logos/maker-mkr-logo.png',
    'https://cryptologos.cc/logos/curve-dao-token-crv-logo.png',
    'https://cryptologos.cc/logos/sushiswap-sushi-logo.png',
  
  
];

export const PartnersSection = () => (
  <Box py="80px" bg="white" textAlign="center" id='Partners'>
    <Text fontSize="2xl" fontWeight="bold" mb="6" color="gray.700">
      Our Partners
    </Text>
    <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }} spacing={8} px="10%">
      {partners.map((src, idx) => (
        <Image
          key={idx}
          src={src}
          alt={`Partner ${idx + 1}`}
          borderRadius="md"
          _hover={{ transform: 'scale(1.05)', transition: '0.3s ease' }}
          boxShadow="sm"
        />
      ))}
    </SimpleGrid>
  </Box>
);

