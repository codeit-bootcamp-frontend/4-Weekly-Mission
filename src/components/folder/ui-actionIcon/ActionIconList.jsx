import React, { useState } from "react";
import styled from "styled-components";
import ActionIcon from "./ActionIcon";
import useModal from "../../../hooks/useModal";
import ModalContainer, * as Modal from "../../sharing/ui-modal/Modal";
import SocialIcons from "../../sharing/ui-modal/SocialIcons";
import { useFolder } from "../../../contexts/FolderContext";

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  @media (min-width: 375px) and (max-width: 767px) {
    justify-content: left;
  }
`;
const ActionIconList = () => {
  const { openModal, handleModalOpen, handleModalClose } = useModal();
  const { currentFolder } = useFolder();
  const [action, setAction] = useState("");

  return (
    <>
      <IconsContainer>
        <ActionIcon
          imageSrc="/icons/share_icon.svg"
          iconTitle="공유"
          onClick={() => {
            handleModalOpen();
            setAction("share");
          }}
        />
        <ActionIcon
          imageSrc="/icons/pen_icon.svg"
          iconTitle="이름 변경"
          onClick={() => {
            handleModalOpen();
            setAction("changeName");
          }}
        />
        <ActionIcon
          imageSrc="/icons/delete_icon.svg"
          iconTitle="삭제"
          onClick={() => {
            handleModalOpen();
            setAction("delete");
          }}
        />
      </IconsContainer>
      {openModal && (
        <ModalContainer onClick={handleModalClose}>
          {action === "share" ? (
            <>
              <Modal.Title>폴더 공유</Modal.Title>
              <Modal.SubTitle>{currentFolder.name}</Modal.SubTitle>
              <SocialIcons />
            </>
          ) : action === "changeName" ? (
            <>
              <Modal.Title>폴더 이름 변경</Modal.Title>
              <Modal.Input defaultValue={currentFolder.name} />
              <Modal.BlueButton>변경하기</Modal.BlueButton>
            </>
          ) : action === "delete" ? (
            <>
              <Modal.Title>폴더 삭제</Modal.Title>
              <Modal.SubTitle>{currentFolder.name}</Modal.SubTitle>
              <Modal.RedButton>삭제하기</Modal.RedButton>
            </>
          ) : null}
        </ModalContainer>
      )}
    </>
  );
};

export default ActionIconList;
