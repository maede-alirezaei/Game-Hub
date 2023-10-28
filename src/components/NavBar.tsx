import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
function NavBar() {
  return (
    <HStack justifyContent={'space-between'}>
      <Image src={Logo} boxSize={14}></Image>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
