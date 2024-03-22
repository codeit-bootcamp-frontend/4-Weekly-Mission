import { ReactNode } from "react";
import ReactDom from "react-dom";

const ModalPortal = ({ children }: { children: ReactNode }) => {
  const el = document.getElementById("modal-root") as Element;
  return ReactDom.createPortal(children, el);
};

export default ModalPortal;
