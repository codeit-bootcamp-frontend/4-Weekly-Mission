import React from "react";
import ModalContainer from "./ModalContainer";

interface ModalEditProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalEdit = ({ isOpen, onClose }: ModalEditProps) => {
  const editFolder = (
    <>
      <h2 className="modalTitle">폴더 이름 변경</h2>
      <input className="modalInput" placeholder="내용 입력"></input>
      <button className="modelAddBtn">변경하기</button>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} children={editFolder} />
  );
};

export default ModalEdit;
