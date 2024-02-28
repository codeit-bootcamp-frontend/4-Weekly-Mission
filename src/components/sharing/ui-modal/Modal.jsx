import React from "react";
import styled from "styled-components";

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

export const Title = styled.h1`
  color: var(--Linkbrary-gray100, #373740);
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

const CloseButton = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 280px;
  padding: 18px 15px 18px 15px;
  border-radius: 8px;
  border: 1px solid var(--color-gray3);
  box-sizing: border-box;
`;

export const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: var(--color-gray4);
`;

export const BlueButton = styled.button`
  width: 280px;
  padding: 16px 20px;
  border-radius: 8px;
  border: none;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  color: var(--Grey-Light, #f5f5f5);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export const RedButton = styled(BlueButton)`
  background: var(--Linkbrary-red, #ff5b56);
`;

function Modal({ children, onClick }) {
  return (
    <Background>
      <ModalContainer>
        <CloseButton src="/icons/close_icon.svg" onClick={onClick} />
        {children}
      </ModalContainer>
    </Background>
  );
}

export default Modal;
