import { ReactNode } from "react";
import "./CardWrapper.css";

interface Props {
  children: ReactNode;
  onMouseOver: () => void;
  onMouseLeave: () => void;
}

export const CardWrapper = ({ children, onMouseOver, onMouseLeave }: Props) => {
  return (
    <div className="card" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
};
