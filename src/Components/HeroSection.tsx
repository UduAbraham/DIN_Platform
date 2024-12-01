import { Box, Text, VStack, Image, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react"; // Using hooks to trigger animations
import HeroImage from "../assets/Hero_img.png";

export const HeroSection = () => {
  const [isInView, setIsInView] = useState(false);

  // Check if the section is in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("home");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      bgGradient="linear(to-br, #0f2027, #203a43, #2c5364)" // Smooth background gradient
      color="white"
      py="120px"
      px="4"
      textAlign="left" // Align the text to the left
      id="home"
      position="relative"
      overflow="hidden"
    >
      {/* Background Effect */}
      <Box
        position="absolute"
        top="-50px"
        left="20%"
        w="300px"
        h="300px"
        bgGradient="radial(blue.600, transparent)"
        borderRadius="full"
        zIndex={0}
        transition="all 2s ease-in-out"
        transform={isInView ? "scale(2)" : "scale(0.8)"}
        opacity={isInView ? 0.4 : 0}
      />
      <Box
        position="absolute"
        bottom="-50px"
        right="15%"
        w="250px"
        h="250px"
        bgGradient="radial(teal.400, transparent)"
        borderRadius="full"
        zIndex={0}
        transition="all 3s ease-in-out"
        transform={isInView ? "scale(1.2)" : "scale(0.8)"}
        opacity={isInView ? 0.3 : 0}
      />

      {/* Main Content - Flex Layout */}
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={12}
        alignItems="center"
        zIndex={1}
      >
        {/* Left Column (Text Section) */}
        <VStack spacing={6} align="start">
          <Text
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            bgClip="text"
            bgGradient="linear(to-r, teal.400, blue.500, purple.600)"
            transition="transform 1s ease-out, opacity 1s ease-out"
            transform={isInView ? "translateY(0)" : "translateY(30px)"}
            opacity={isInView ? 1 : 0}
          >
            Decentralized Infrastructure for Web3
          </Text>

          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            maxW="600px"
            color="gray.200"
            transition="transform 1s ease-out, opacity 1s ease-out"
            transform={isInView ? "translateY(0)" : "translateY(50px)"}
            opacity={isInView ? 1 : 0}
          >
            Reliable, scalable, and secure blockchain data access for developers.
            Interact with Ethereum and other networks using modern infrastructure.
          </Text>
        </VStack>

        {/* Right Column (Image Section) */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          transition="opacity 0.7s ease-in-out"
          opacity={isInView ? 1 : 0.7}
        >
          <Image
            src={HeroImage}
            alt="Web3 Infrastructure"
            boxSize="380px"
            objectFit="cover"
            borderRadius="75"
            opacity={isInView ? 1 : 0.7}
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};
