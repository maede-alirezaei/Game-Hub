import { DataType } from "./ListGroup";

type ItemPropType = {
  index: number;
  selected: number;
  onSelected: (index:number) => void;
} & DataType;
function Item({ name, familyName, index, onSelected, selected }: ItemPropType) {
  return (
    <li
      className={selected === index ? "bg-primary" : "bg-secondary"}
      onClick={() => onSelected(index)}
    >
      {name} {familyName}
    </li>
  );
}

export default Item;
