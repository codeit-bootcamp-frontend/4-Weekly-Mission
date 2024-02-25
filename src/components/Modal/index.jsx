import { Fragment, useState, createContext, useContext } from "react";
import { createPortal } from "react-dom";
const ModalContext = createContext();

const Modal = ({ children }) => {
  const [onClose, setOnClose] = useState(true);

  const show = () => setOnClose(false);
  const hide = () => setOnClose(true);

  return (
    <ModalContext.Provider value={(show, hide)}>
      {!onClose && createPortal(<div>{children}</div>, document.body)}
    </ModalContext.Provider>
  );
};

const Title = ({ children }) => {
  <h1>{children}</h1>;
};

const Description = ({ children }) => {
  <p>{children}</p>;
};

const Body = ({ children }) => {
  <div>
    {children.map((item, index) => (
      <Fragment key={index}>{item}</Fragment>
    ))}
  </div>;
};

const Toggle = ({ children }) => {
  const { show } = useContext(ModalContext);
  return <button onClick={show}>{children}</button>;
};
const Button = ({ children }) => {
  const { hide } = useContext(ModalContext);
  return <button onClick={hide}>{children}</button>;
};

Modal.Title = Title;
Modal.Description = Description;
Modal.Body = Body;
Modal.Button = Button;
Modal.Toggle = Toggle;

export default Modal;
