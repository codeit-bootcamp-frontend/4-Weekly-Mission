import { ReactNode } from "react";
import "./CategoryButton.css";

interface Props {
  children: ReactNode;
}

const CategoryButton = ({ children }: Props) => {
  return <button className="CategoryButton">{children}</button>;
};

export default CategoryButton;
