import Item from "./Item";
import { useState } from "react";

export interface DataType {
  name: string;
  familyName: string;
}

const data: DataType[] = [
  { name: "Maedeh", familyName: "Alirezaei" },
  { name: "Majdeh", familyName: "Alirezaei" },
];

function ListGroup() {
  const [selected, setSelected] = useState<number>(-1);

  return (
    <ul>
      {data.map((item, index) => (
        <Item
          key={`${item.name + index}`}
          index={index}
          selected={selected}
          onSelected={(index)=> setSelected(index)}
          name={item.name}
          familyName={item.familyName}
        />
      ))}
    </ul>
  );
}

export default ListGroup;
