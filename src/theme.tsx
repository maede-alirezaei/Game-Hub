import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  initialColorMode: "light",
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
});

export default theme;
