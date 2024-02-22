import "./modal.css";
import AddFolder from "./AddFolder";
import EditFolderName from "./EditFolderName";

function Modal({ isModalOpen, toggleModal, Id }) {
  return (
    <>
      {!isModalOpen && Id === 1 && <AddFolder toggleModal={toggleModal} />}
      {!isModalOpen && Id === 2 && <EditFolderName toggleModal={toggleModal} />}
    </>
  );
}

export default Modal;
