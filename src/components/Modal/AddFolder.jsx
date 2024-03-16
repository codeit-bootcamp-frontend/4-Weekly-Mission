import React, { useState } from "react";
import Modal from "./Modal";

//링크 추가하기부분에 넣을 폴더 추가 모달
const AddFolder = ({ openModal }) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Modal isOpen={showModal} onClose={closeModal}>
      <h2 className="modal-title">폴더 추가</h2>
      <input placeholder="내용 입력" />
      <button className="modal-button">추가하기</button>
    </Modal>
  );
};

export default AddFolder;
