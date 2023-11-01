import { ReactNode, createContext, useState } from "react";

interface ContextProps {
  children: ReactNode;
}
export const Context = createContext({
  searchText: "",
  handleSearchText: (text: string) => {
    text;
  },
});
const ContextProvider = ({ children }: ContextProps) => {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  return (
    <Context.Provider
      value={{
        searchText,
        handleSearchText: (text: string) => setSearchText(text),
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
