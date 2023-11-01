import { useContext } from "react";
import { GameQuery } from "../App";
import useData from "./useData";
import { Context } from "../store/ContextProvider";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

function useGames(gameQuery: GameQuery) {
  const ctx = useContext(Context);
  console.log(ctx.searchText, "in grid");
  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: ctx.searchText,
      },
    },
    [gameQuery,ctx]
  );
}

export default useGames;
