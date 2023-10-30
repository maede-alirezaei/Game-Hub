import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import imageCroppedUrl from "../services/img-url";
import GenreSkleton from "./GenreSkleton";
const Skletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface GenreListProps {
  onGenreHandler: (genre: Genre) => void;
}
function GenreList({ onGenreHandler }: GenreListProps) {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  return (
    <>
      {isLoading && Skletons.map((skl) => <GenreSkleton key={skl} />)}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} mt={2}>
            <HStack py={2}>
              <Image
                boxSize={10}
                borderRadius={8}
                src={imageCroppedUrl(genre.image_background)}
              />
              <Button  onClick={() => onGenreHandler(genre)} variant={"link"}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
