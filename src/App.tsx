
import {  Box } from '@chakra-ui/react';
import { Navbar } from './Components/Navbar';
import { HeroSection } from './Components/HeroSection';
import { FeaturesSection } from './Components/FeaturesSection';
import  Benefit  from './Components/Benefits';
import { PartnersSection } from './Components/PartnersSection';
import { Footer } from './Components/Footer';

function App() {
  return (
    // <ChakraProvider>
      <Box>
        <Navbar />
        <HeroSection />
        <FeaturesSection/>
        <Benefit/>
        <PartnersSection />
        <Footer />

      </Box>
    // </ChakraProvider>
  );
}

export default App;
