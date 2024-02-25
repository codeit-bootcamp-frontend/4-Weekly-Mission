import React, { useState } from "react";
import styled from "styled-components";
import { useFolder } from "../../context/FolderContext";
import { useModal } from "../../hooks/useModal";
import ModalContainer from "../common/Modal/Modal";
import * as Modal from "../common/Modal/Modal";
import SocialIcons from "../common/Modal/SocialIcons";

const OptionList = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 767px) {
    margin-top: 12px;
  }
`;

const Option = styled.div`
  display: flex;
  gap: 4px;
  color: var(--Linkbrary-gray60, #9fa6b2);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

function FolderOption() {
  const { folderFilter } = useFolder();
  const { openModal, handleModalOpen, handleModalClose } = useModal();

  const [option, setOption] = useState("");
  console.log(option);

  return folderFilter.name === "전체" ? (
    ""
  ) : (
    <>
      {option === "삭제" && openModal && (
        <ModalContainer onClick={handleModalClose}>
          <Modal.Title>폴더 삭제</Modal.Title>
          <Modal.SubTitle>{folderFilter.name}</Modal.SubTitle>
          <Modal.RedButton>삭제하기</Modal.RedButton>
        </ModalContainer>
      )}
      {option === "공유" && openModal && (
        <ModalContainer onClick={handleModalClose}>
          <Modal.Title>폴더 삭제</Modal.Title>
          <Modal.SubTitle>{folderFilter.name}</Modal.SubTitle>
          <SocialIcons />
        </ModalContainer>
      )}
      <OptionList>
        <Option
          onClick={() => {
            setOption("공유");
            handleModalOpen();
          }}
        >
          <img src="/Icons/share.svg" alt="공유" />
          <p>공유</p>
        </Option>
        <Option>
          <img src="/Icons/pen.svg" alt="이름 변경" />
          <p>이름 변경</p>
        </Option>
        <Option
          onClick={() => {
            setOption("삭제");
            handleModalOpen();
          }}
        >
          <img src="/Icons/delete.svg" alt="삭제" />
          <p>삭제</p>
        </Option>
      </OptionList>
    </>
  );
}

export default FolderOption;
