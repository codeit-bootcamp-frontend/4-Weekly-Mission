import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const ErrorMessageModal = ({ message, onClose }) => {
  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <p>{message}</p>
        <ModalCloseButton onClick={onClose}>닫기</ModalCloseButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default ErrorMessageModal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  width: 25rem;
  display: flex;
  padding: 2rem 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  border-radius: 0.9375rem;
  border: 1px solid var(--Stroke-light, #dee2e6);
  background: var(---Gray-White, #fff);
  z-index: 1000;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const ModalCloseButton = styled(Button)`
  padding: 1rem 1.25rem;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 0.5rem;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
`;
