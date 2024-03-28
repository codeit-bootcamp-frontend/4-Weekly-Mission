import React, { useState } from "react";
import styled from "styled-components";
import useModal from "../../hooks/useModal";
import ModalContainer from "../../components/sharing/modal/Modal";
import * as Modal from "../../components/sharing/modal/ModalContents";
import { useFolder } from "../../contexts/FolderContext";
import Button from "../sharing/Button";
import * as Icons from "../sharing/Icons";
import ModalButton from "../sharing/modal/ModalButton";
import SocialIcons from "../sharing/modal/SocialIcons";

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  @media (min-width: 375px) and (max-width: 767px) {
    justify-content: left;
  }
`;

const ActionIcon = styled(Button)`
  display: flex;
  gap: 4px;
  align-items: center;

  color: var(--color-gray4);
`;

const Actions = () => {
  const { openModal, handleModalOpen, handleModalClose } = useModal();
  const { currentFolder } = useFolder();
  const [action, setAction] = useState("");

  return (
    <>
      <IconsContainer>
        <ActionIcon
          variant="icon"
          onClick={() => {
            handleModalOpen();
            setAction("share");
          }}
        >
          <Icons.Share /> 공유
        </ActionIcon>
        <ActionIcon
          variant="icon"
          onClick={() => {
            handleModalOpen();
            setAction("changeName");
          }}
        >
          <Icons.Edit /> 이름 변경
        </ActionIcon>
        <ActionIcon
          variant="icon"
          onClick={() => {
            handleModalOpen();
            setAction("delete");
          }}
        >
          <Icons.Delete /> 삭제
        </ActionIcon>
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
              <ModalButton buttonStyle="blue">변경하기</ModalButton>
            </>
          ) : action === "delete" ? (
            <>
              <Modal.Title>폴더 삭제</Modal.Title>
              <Modal.SubTitle>{currentFolder.name}</Modal.SubTitle>
              <ModalButton buttonStyle="red">삭제하기</ModalButton>
            </>
          ) : null}
        </ModalContainer>
      )}
    </>
  );
};

export default Actions;
