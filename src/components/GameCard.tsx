import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import imageCroppedUrl from "../services/img-url";
interface GameProp {
  game: Game;
}
function GameCard({ game }: GameProp) {
  return (
    <Card border={10} overflow={"hidden"}>
      <Image src={imageCroppedUrl(game.background_image)} />
      <CardBody>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
