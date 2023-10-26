import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import CaneledError from "axios";

export interface Platform{
    id:number
    name:string
    slug:string
}
export interface Game {
  id: number;
  name: string;
  background_image:string
  parent_platforms: {platform:Platform}[]
}
export interface ResponseGames {
  count: number;
  results: Game[];
}
function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true)
    apiClient
      .get<ResponseGames>("/games")
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false)
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
    isLoading
  };
}

export default useGames;
