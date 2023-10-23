import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  initialColorMode: "dark",
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
});

export default theme;
