import React from "react";
import ModalContainer from "./ModalContainer";

interface ModalDeleteFolder {
  isOpen: boolean;
  onClose: () => void;
  currentMenu: string;
}

const ModalDeleteFolder = ({
  isOpen,
  onClose,
  currentMenu,
}: ModalDeleteFolder) => {
  const deleteFolder = (
    <>
      <h2 className="modalTitle">폴더 삭제</h2>
      <p>{currentMenu}</p>
      <button className="modelDelBtn">삭제하기</button>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} children={deleteFolder} />
  );
};

export default ModalDeleteFolder;
