import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme(
  {
    initialColorMode: "light",
    components: {
      Text: {
        baseStyle: {
          color: "chakra-body-text",
        },
      },
    },
  },

  {
    colors: {
      primary: {
        50: "#E3F2FD",
        100: "#BBDEFB",
        200: "#90CAF9",
        300: "#64B5F6",
        400: "#42A5F5",
        500: "#2196F3", // Main primary blue color
        600: "#1E88E5",
        700: "#1976D2",
        800: "#1565C0",
        900: "#0D47A1",
      },
      secondary: {
        50: "#FCF8F7",
        100: "#F8E8E6",
        200: "#F3C9C0",
        300: "#EEA49B",
        400: "#E98076",
        500: "#E45B51",
        600: "#CD463D",
        700: "#B52E29",
        800: "#8C1D1A",
        900: "#63110F",
      },
    },
  }
);

export default theme;
