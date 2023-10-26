import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkleton from "./GameCardSkleton";

function GameGrid() {
  const { games, error, isLoading } = useGames();
  const skletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid p={10} columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {isLoading && skletons.map((skl) => <GameCardSkleton key={skl} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
