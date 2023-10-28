import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import imageCroppedUrl from "../services/img-url";
import GenreSkleton from "./GenreSkleton";
const Skletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function GenreList() {
  const { data, error, isLoading } = useGenres();
  if(error) return null
  return ( 
    <>
      {isLoading && Skletons.map((skl) => <GenreSkleton key={skl} />)}
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
