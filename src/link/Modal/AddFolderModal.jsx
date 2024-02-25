import React from "react";
import styled from "styled-components";

const AddFolderModal = ({ onClose }) => {
  return (
    <ModalBack>
      <ModalBox>
        <Button onClick={onClose}>❌</Button>
        <div>
          <ModalName>폴더 추가</ModalName>
          <ModalInput placeholder="내용 입력" />
          <BlueButton>추가하기</BlueButton>
        </div>
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
  height: 238px;
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
const ModalName = styled.div`
  margin: 35px 0 25px 0;
  color: black;
  font-size: 20px;
  font-weight: 700;
`;
const ModalInput = styled.input`
  width: 280px;
  height: 60px;
  margin-bottom: 15px;
  padding: 18px 15px;
  border-radius: 8px;
  border: 1px solid #ccd5e3;
  font-size: 16px;
  font-weight: 400;
`;
const BlueButton = styled.button`
  width: 280px;
  height: 50px;
  padding: 16px 20px;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  background: linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%);
`;

export default AddFolderModal;
