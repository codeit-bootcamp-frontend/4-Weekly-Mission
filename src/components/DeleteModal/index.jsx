import Modal from "components/Modal";
import { forwardRef } from "react";

const DeleteModal = forwardRef(({ openModal, handleModalClose }, ref) => {
  return (
    <Modal modalRef={ref} openModal={openModal}>
      이건 삭제 모달 입니다
      <button onClick={handleModalClose}>X</button>
    </Modal>
  );
});

export default DeleteModal;
