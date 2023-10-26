import { Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

function GenreList() {
  const { data, error } = useGenres()
  return (
    <>
      {error && <Text>{error}</Text>}
      {/* {isLoading && skletons.map((skl) => <GameCardSkleton key={skl} />)} */}

      {data.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </>
  );
}

export default GenreList;
