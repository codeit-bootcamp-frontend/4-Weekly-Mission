import "./CardList.css";
import { ChildrenProp } from "interface/ChildrenProp";

export const CardList = ({ children }: ChildrenProp) => {
  return <div className="CardList">{children}</div>;
};
