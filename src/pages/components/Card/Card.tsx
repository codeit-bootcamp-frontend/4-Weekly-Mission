import "./Card.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onMouseOver: () => void;
  onMouseLeave: () => void;
}

export const Card = ({ children, onMouseOver, onMouseLeave }: Props) => {
  return (
    <div className="Card" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
};
