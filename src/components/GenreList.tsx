import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import imageCroppedUrl from "../services/img-url";

function GenreList() {
  const { data, error } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}
      {/* {isLoading && skletons.map((skl) => <GameCardSkleton key={skl} />)} */}
      <List>
        {data.map((genre) => (
          <ListItem mt={2}>
            <HStack py={2}>
              <Image
                boxSize={10}
                borderRadius={8}
                src={imageCroppedUrl(genre.image_background)}
              />
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
