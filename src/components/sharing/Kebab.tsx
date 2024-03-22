import React, { useState } from "react";
import Popover from "../sharing/Popover";
import useModal from "../../hooks/useModal";
import ModalContainer from "../sharing/modal/Modal";
import * as Modal from "../sharing/modal/ModalContents";
import Button from "./Button";
import * as Icons from "../sharing/Icons";
import ModalButton from "./modal/ModalButton";
import ModalFolderList from "./modal/ModalFolderList";

interface Props {
  linkUrl: string;
}

const Kebab = ({ linkUrl }: Props) => {
  const { openModal, handleModalOpen, handleModalClose } = useModal();
  const [openPopover, setOpenPopover] = useState(false);
  const [action, setAction] = useState("");

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!openPopover) setOpenPopover(true);
    else setOpenPopover(false);
  };

  return (
    <>
      <Button variant="icon" onClick={handleButton}>
        <Icons.Kebab />
      </Button>

      <Popover isOpen={openPopover}>
        <Button
          variant="text"
          onClick={() => {
            handleModalOpen();
            setAction("deleteLink");
          }}
        >
          삭제하기
        </Button>
        <Button
          variant="text"
          onClick={(e) => {
            e.preventDefault();
            handleModalOpen();
            setAction("addToFolder");
          }}
        >
          폴더에 추가
        </Button>
      </Popover>

      {openModal && (
        <ModalContainer onClick={handleModalClose}>
          {action === "deleteLink" ? (
            <>
              <Modal.Title>링크 삭제</Modal.Title>
              <Modal.SubTitle>{linkUrl}</Modal.SubTitle>
              <ModalButton
                buttonStyle="red"
                onClick={() => {
                  handleModalClose();
                  setOpenPopover(false);
                }}
              >
                삭제하기
              </ModalButton>
            </>
          ) : action === "addToFolder" ? (
            <>
              <Modal.Title>폴더에 추가</Modal.Title>
              <Modal.SubTitle>{linkUrl}</Modal.SubTitle>
              <ModalFolderList />
              <ModalButton
                buttonStyle="blue"
                onClick={() => {
                  handleModalClose();
                  setOpenPopover(false);
                }}
              >
                추가하기
              </ModalButton>
            </>
          ) : null}
        </ModalContainer>
      )}
    </>
  );
};

export default Kebab;
