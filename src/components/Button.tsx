import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

function Button({ children }: Prop) {
  return <Button>{children}</Button>;
}

export default Button;
