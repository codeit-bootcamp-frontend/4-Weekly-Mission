import React from "react";
import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";
import { useModal } from "../../hooks/useModal";
import ModalContainer from "../common/Modal/Modal";
import * as Modal from "../common/Modal/Modal";

const AddButton = styled.div`
  display: flex;
  gap: 4px;
  width: 20%;
  justify-content: flex-end;
  cursor: pointer;
  color: var(--primary-color);
  @media (max-width: 767px) {
    width: 127px;
    position: fixed;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 101px;
    z-index: 10;
    cursor: pointer;
    padding: 8px 24px;
    border-radius: 20px;
    border: 1px solid var(--Linkbrary-white, #fff);
    background: var(--Linkbrary-primary-color, #6d6afe);
  }
`;

const Name = styled.p`
  color: #6d6afe;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.3px;
  @media (max-width: 767px) {
    color: white;
    text-align: center;
  }
`;

const iconStyle = {
  color: "#6d6afe",
};

function FolderAddButton() {
  const { openModal, handleModalOpen, handleModalClose } = useModal();
  return (
    <>
      {openModal && (
        <ModalContainer onClick={handleModalClose}>
          <Modal.Title>폴더추가</Modal.Title>
          <Modal.Input placeholder="내용 입력"></Modal.Input>
          <Modal.BlueButton>추가하기</Modal.BlueButton>
        </ModalContainer>
      )}
      <AddButton onClick={handleModalOpen}>
        <Name>폴더추가</Name>
        <IoMdAdd style={iconStyle} />
      </AddButton>
    </>
  );
}

export default FolderAddButton;
