import { ReactNode } from "react";
import reactDom from "react-dom";

const ModalPortal = ({ children }: { children: ReactNode }) => {
  const el = document.getElementById("modal"); // 독립 공간
  if (el) {
    return reactDom.createPortal(children, el);
  } else {
    throw new Error("Modal portal container를 찾지 못했습니다.");
  }
};

export default ModalPortal;
