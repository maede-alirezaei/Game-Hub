import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaAndroid,
  FaApple,
  FaPlaystation,
  FaWindows,
  FaXbox,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
interface PlatformProp {
  platforms: Platform[];
}
const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  android: FaAndroid,
  apple: FaApple,
  playstation: FaPlaystation,
  linux: FaLinux,
  mac: FaApple,
  iphone: MdPhoneIphone,
  xbox: FaXbox,
  nintendo: SiNintendo,
  web: BsGlobe,
};
function PlatformIconList({ platforms }: PlatformProp) {
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color={"gray.400"} />
      ))}
    </HStack>
  );
}

export default PlatformIconList;
