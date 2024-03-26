import "./Cta.css";
import { ChildrenProp } from "interface/ChildrenProp";

export const Cta = ({ children }: ChildrenProp) => {
  return <div className="cta">{children}</div>;
};
