import React, { useState } from "react";
import Popover from "../popover/Popover";
import TextButton from "./TextButton";
import useModal from "../../../hooks/useModal";
import ModalContainer, * as Modal from "../ui-modal/Modal";
import ModalFolderList from "../ui-modal/ModalFolderList";
import styled from "styled-components";

const Kebob = styled.button`
  background: url("/icons/kebab_icon.svg");
  width: 21px;
  cursor: pointer;
  border: none;
`;
const KebobButton = ({ linkUrl }) => {
  const { openModal, handleModalOpen, handleModalClose } = useModal();
  const [openPopover, setOpenPopover] = useState(false);
  const [action, setAction] = useState("");
  const handleButton = (e) => {
    e.preventDefault();
    if (openPopover === false) setOpenPopover(true);
    else setOpenPopover(false);
  };

  return (
    <>
      <Kebob onClick={handleButton} />
      <Popover isOpen={openPopover}>
        <TextButton
          onClick={() => {
            handleModalOpen();
            setAction("deleteLink");
          }}
        >
          삭제하기
        </TextButton>
        <TextButton
          onClick={(e) => {
            e.preventDefault();
            handleModalOpen();
            setAction("addToFolder");
          }}
        >
          폴더에 추가
        </TextButton>
      </Popover>

      {openModal && (
        <ModalContainer onClick={handleModalClose}>
          {action === "deleteLink" ? (
            <>
              <Modal.Title>링크 삭제</Modal.Title>
              <Modal.SubTitle>{linkUrl}</Modal.SubTitle>
              <Modal.RedButton
                onClick={() => {
                  handleModalClose();
                  setOpenPopover(false);
                }}
              >
                삭제하기
              </Modal.RedButton>
            </>
          ) : action === "addToFolder" ? (
            <>
              <Modal.Title>폴더에 추가</Modal.Title>
              <Modal.SubTitle>{linkUrl}</Modal.SubTitle>
              <ModalFolderList />
              <Modal.BlueButton
                onClick={() => {
                  handleModalClose();
                  setOpenPopover(false);
                }}
              >
                추가하기
              </Modal.BlueButton>
            </>
          ) : null}
        </ModalContainer>
      )}
    </>
  );
};

export default KebobButton;
