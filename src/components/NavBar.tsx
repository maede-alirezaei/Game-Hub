import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
function NavBar() {
  return (
    <HStack>
      <Image src={Logo} boxSize={14}></Image>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
