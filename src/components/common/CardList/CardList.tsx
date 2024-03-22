import React, { ReactNode } from "react";
import "./CardList.css";

interface CardListProps {
  children: ReactNode;
}

function CardList({ children }: CardListProps) {
  return <div className="CardList">{children}</div>;
}

export default CardList;
