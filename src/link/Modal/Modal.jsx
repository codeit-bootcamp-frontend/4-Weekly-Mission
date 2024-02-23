import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import styled from "styled-components";

const Modal = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalBox>
      <ModalContent>
        <ModalText onClick={() => setShowModal(true)}>삭제하기</ModalText>
        {showModal && <DeleteModal onClose={() => setShowModal(false)} />}
        <ModalText>폴더에 추가</ModalText>
        <ModalText className="closeButton" onClick={onClose}>
          ❌
        </ModalText>
      </ModalContent>
    </ModalBox>
  );
};

const ModalBox = styled.div`
  background-color: rgba(255, 255, 255);
  top: 20px;
  right: 0;
  color: black;
  position: absolute;
  box-shadow: 0px 2px 8px 0px #3332361a;
  border-radius: 5px;
`;

const ModalContent = styled.div`
  width: 100px;
  height: 60px;
`;

const ModalText = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  &:hover {
    background: #e7effb;
    color: #6d6afe;
  }
`;

export default Modal;
