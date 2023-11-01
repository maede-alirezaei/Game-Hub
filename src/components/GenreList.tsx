import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import imageCroppedUrl from "../services/img-url";
import GenreSkleton from "./GenreSkleton";
const Skletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface GenreListProps {
  onGenreHandler: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
function GenreList({ onGenreHandler, selectedGenre }: GenreListProps) {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  return (
    <>
      <Heading color={"GrayText"} fontSize={'2xl'}>Genres</Heading>
      {isLoading && Skletons.map((skl) => <GenreSkleton key={skl} />)}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} mt={2}>
            <HStack py={2}>
              <Image
                boxSize={10}
                borderRadius={8}
                objectFit={"cover"}
                src={imageCroppedUrl(genre.image_background)}
              />
              <Button
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                onClick={() => onGenreHandler(genre)}
                variant={"link"}
                whiteSpace={"normal"}
                textAlign={"left"}
              >
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
