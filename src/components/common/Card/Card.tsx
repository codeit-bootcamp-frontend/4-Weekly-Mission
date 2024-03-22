import React, { ReactNode } from "react";
import "./Card.css";

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return <div className="Card">{children}</div>;
}

export default Card;
