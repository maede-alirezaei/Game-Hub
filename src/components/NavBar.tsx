import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
function NavBar() {
  return (
    <HStack justifyContent={'space-between'} p={'10px'}>
      <Image src={Logo} boxSize={"48px"}></Image>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
