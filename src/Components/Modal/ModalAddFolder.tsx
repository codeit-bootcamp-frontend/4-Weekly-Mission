import ModalContainer from "./ModalContainer";
import React from "react";

interface ModalAddFolderProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAddFolder = ({ isOpen, onClose }: ModalAddFolderProps) => {
  const addFolder = (
    <>
      <h2 className="modalTitle">폴더 추가</h2>
      <input className="modalInput" placeholder="내용 입력" />
      <button className="modelAddBtn">추가하기</button>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      {addFolder}
    </ModalContainer>
  );
};

export default ModalAddFolder;
