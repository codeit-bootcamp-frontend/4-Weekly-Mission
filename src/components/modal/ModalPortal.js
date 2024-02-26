import ReactDom from "react-dom";

const ModalPortal = ({ children }) => {
  const el = document.getElementById("modal");
  return ReactDom.createPortal(children, el);
};

export default ModalPortal;
