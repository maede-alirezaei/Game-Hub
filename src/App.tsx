import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelection from "./components/PlatformSelection";
import { Platform } from "./hooks/useGames";
import { useState } from "react";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav main"`,
          lg: `"nav nav""aside main"`,
        }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl={4} area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem pl={6} area={"aside"}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onGenreHandler={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem p={4} area={"main"}>
          <PlatformSelection
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
