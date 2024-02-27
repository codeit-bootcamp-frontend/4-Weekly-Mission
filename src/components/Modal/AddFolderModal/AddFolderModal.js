import { Modal } from "../Modal";
import "./AddFolderModal.css";

export const AddFolderModal = ({ openModal, handleModalClose, modalRef }) => {
  return (
    <Modal
      openModal={openModal}
      handleModalClose={handleModalClose}
      modalRef={modalRef}
    >
      <div className="addFolderModal">
        <div className="addFolderModal-top">폴더 추가</div>

        <input
          className="addFolderModal-input"
          type="text"
          placeholder="내용 입력"
        />

        <button className="editFolderNameModal-button">추가하기</button>
      </div>
    </Modal>
  );
};
