import React, { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";
import Button from "../Button";
import * as Icons from "../Icons";

const Background = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const ModalContainer = styled.div`
  width: 360px;
  padding: 32px 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  border-radius: 15px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);

  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 15px;
`;

interface Props {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function Modal({ children, onClick }: Props) {
  return (
    <Background>
      <ModalContainer>
        <CloseButton variant="icon" onClick={onClick}>
          <Icons.Close />
        </CloseButton>
        {children}
      </ModalContainer>
    </Background>
  );
}

export default Modal;
