import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import CaneledError from "axios";
function useGames() {
  interface Game {
    id: number;
    name: string;
  }

  interface ResponseGames {
    count: number;
    results: Game[];
  }
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<ResponseGames>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((error) => {
        if (error instanceof CaneledError) return;
        setError(error.message);
      });
    return () => controller.abort();
  }, []);
  return {
    games,
    error,
  };
}

export default useGames;
