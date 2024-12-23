// index.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import theme from "./Theme"; // Import the custom theme
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>
);

