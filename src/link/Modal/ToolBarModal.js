import React from "react";
import styled from "styled-components";

const ToolBarModal = ({ children, onClose }) => {
  return (
    <ModalBack>
      <ModalBox>
        <Button onClick={onClose}>❌</Button>
        <div>{children}</div>
      </ModalBox>
    </ModalBack>
  );
};

const ModalBack = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
const ModalBox = styled.div`
  position: fixed;
  width: 360px;
  background-color: white;
  border-radius: 20px;
  border: none;
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export default ToolBarModal;
