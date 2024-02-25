/** @jsxImportSource @emotion/react */
import { useState, useContext, createContext, Fragment } from "react";
import { background, modal } from "./styles";

const ModalContext = createContext();

const Modal = ({ children, isOpen, hide }) => {
  return (
    <ModalContext.Provider value={{ hide }}>
      {isOpen && (
        <div css={background}>
          <LayOut>{children}</LayOut>
        </div>
      )}
    </ModalContext.Provider>
  );
};

const LayOut = ({ children }) => {
  return <div css={modal}>{children}</div>;
};

const CloseButton = ({ children }) => {
  const { hide } = useContext(ModalContext);
  return <button onClick={hide}>{children}</button>;
};

const Title = ({ children }) => {
  <h1>{children}</h1>;
};

const Description = ({ children }) => {
  <p>{children}</p>;
};

const Header = ({ Title, Description }) => {
  <div>
    {Title}
    {Description}
  </div>;
};

const Body = ({ children }) => {
  <div>
    {children?.map((child, index) => (
      <Fragment key={index}>{child}</Fragment>
    ))}
  </div>;
};

const Button = ({ children, onClick }) => {
  const { hide } = useContext(ModalContext);

  const handleClick = async () => {
    if (!onClick) return;
    const result = await onClick();
    if (!result?.success) {
      alert(result?.message ? result.message : "작업에 실패하였습니다.");
      return;
    }
    hide();
  };

  return <>{children && <button onClick={handleClick}>{children}</button>}</>;
};

Modal.Title = Title;
Modal.Description = Description;
Modal.Header = Header;
Modal.Body = Body;
Modal.Button = Button;
Modal.CloseButton = CloseButton;

export default Modal;
