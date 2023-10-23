import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.webp"
function NavBar() {
  return (
    <HStack>
      <Image src={Logo} boxSize={'48px'}></Image>
      <Text>Navbar</Text>
    </HStack>
  );
}

export default NavBar;
