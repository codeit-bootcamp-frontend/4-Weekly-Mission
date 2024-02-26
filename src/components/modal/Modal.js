import React from "react";
import styled from "styled-components";
import "./modal.css";

const Modal = ({ onClose, title, data, hasBtn, btnTitle, hasInput }) => {
  return (
    <Background>
      <Content>
        <h1 className="modalTitle">{title}</h1>
        {hasInput ? <input /> : <p className="modalTargetData">{data}</p>}
        {hasBtn ? <button className="modalDeleteBtn">{btnTitle}</button> : ""}
        <img
          className="close"
          src="https://weekly-mission-week9.vercel.app/images/close.svg"
          alt="close"
          onClick={onClose}
        />
      </Content>
    </Background>
  );
};

export default Modal;

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
  z-index: 3;
`;

const Content = styled.div`
  width: 360px;
  height: 239px;
  flex-shrink: 0;
  margin-top: 70px;
  position: relative;
  overflow: scroll;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);
  display: inline-flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  box-sizing: border-box;
`;
