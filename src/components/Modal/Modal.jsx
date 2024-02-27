import React from "react";
import styled from "styled-components";

const Modal = ({ handleOpenModal, isModalOpen, color }) => {
  if (!isModalOpen) return null;

  return (
    console.log(color),
    (
      <S.ModalOverlay onClick={handleOpenModal}>
        <S.ModalContent onClick={(e) => e.stopPropagation()}>
          {" "}
          {/* Prevents modal close when clicking inside the modal */}
          <p>폴더 이름 변경</p>
          <S.Input type="text" />
          <S.CloseButton onClick={handleOpenModal}>수정하기</S.CloseButton>
        </S.ModalContent>
      </S.ModalOverlay>
    )
  );
};

export default Modal;

const S = {
  Input: styled.input`
    width: 280px;
    height: 40px;
    padding: 10px;
    border: 1px solid #333;
    border-radius: 5px;
  `,
  CloseButton: styled.button`
    background: #333; /* Dark background for the button */
    width: 280px;
    height: auto;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    border-radius: 8px;
    background: ${({ modalColor }) => modalColor || "blue"};
  `,
  ModalContent: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    background: white;
    padding: 40px 32px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  `,
  ModalOverlay: styled.div`
    position: fixed; /* Positioning relative to the viewport */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Ensure it's above other content */
  `,
};
