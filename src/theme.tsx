import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  initialColorMode: "light",
  components: {
    Text: {
      baseStyle: {
        color: "chakra-body-text",
      },
    },
    MenuList:{
      baseStyle: {
        color: "chakra-body-text",
      },
    }
  },
});

export default theme;
