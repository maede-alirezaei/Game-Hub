import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Box, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme.tsx";
import ContextProvider from "./store/ContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript
        initialColorMode={theme.initialColorMode}
      ></ColorModeScript>
      <ContextProvider>
        <Box color="chakra-body-text">
          <App />
        </Box>
      </ContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
