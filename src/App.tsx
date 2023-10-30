import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelection from "./components/PlatformSelection";
import { Platform } from "./hooks/useGames";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
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
              selectedGenre={selectedGenre}
              onGenreHandler={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem p={4} area={"main"}>
          <PlatformSelection
            onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <GameGrid platform={selectedPlatform} genre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
