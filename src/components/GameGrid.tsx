import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface ResponseGames {
  count: number;
  results: Game[];
}
function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<ResponseGames>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((error) => setError(error.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games && games.map((game) => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  );
}

export default GameGrid;
