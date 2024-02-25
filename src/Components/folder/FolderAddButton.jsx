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
`;

const Name = styled.p`
  color: #6d6afe;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.3px;
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
