import { ReactNode } from "react";
import "./CardList.css";

interface Props {
  children: ReactNode;
}

export const CardList = ({ children }: Props) => {
  return <div className="cardList">{children}</div>;
};
