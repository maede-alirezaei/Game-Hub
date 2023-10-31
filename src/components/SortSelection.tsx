import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const sortOptions = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Released" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
];

interface SortSelectionProps {
  selectedSortOrder?: string;
  onSelectedSortOption: (sortOrder: string) => void;
}
function SortSelection({
  onSelectedSortOption,
  selectedSortOrder = "",
}: SortSelectionProps) {
  return (
    <Menu>
      <MenuButton mb={4} as={Button} rightIcon={<BsChevronDown />}>
        {`Order by: ${
          sortOptions[
            sortOptions.findIndex(
              (sortOrder) => sortOrder.value === selectedSortOrder
            )
          ]?.label
        } `}
      </MenuButton>
      <MenuList>
        {sortOptions.map((sortOption) => (
          <MenuItem
            onClick={() => onSelectedSortOption(sortOption.value)}
            key={sortOption.value}
          >
            {sortOption.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelection;
