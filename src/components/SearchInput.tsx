import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { Context } from "../store/ContextProvider";

function SearchInput() {
  const ref = useRef<HTMLInputElement>(null);
  const ctx = useContext(Context);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          ctx.handleSearchText(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          variant={"filled"}
          placeholder="Search games..."
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
