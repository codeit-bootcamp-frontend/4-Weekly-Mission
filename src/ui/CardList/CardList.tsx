import { ReactNode } from "react";
import "./CardList.css";

interface CardListProp {
  children: ReactNode;
}

export const CardList = ({ children }: CardListProp) => {
  return <div className="CardList">{children}</div>;
};
