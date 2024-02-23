import "./modal.css";
import AddFolder from "./AddFolder";
import EditFolderName from "./EditFolderName";
import DeleteFolder from "./DeleteFolder";
import DeleteLink from "./DeleteLink";
import SharedFolder from "./SharedFolder";

function Modal({ folderName, isModalOpen, toggleModal, Id }) {
  return (
    <>
      {!isModalOpen && Id === 1 && <AddFolder toggleModal={toggleModal} />}
      {!isModalOpen && Id === 2 && <EditFolderName toggleModal={toggleModal} />}
      {!isModalOpen && Id === 3 && (
        <DeleteFolder folderName={folderName} toggleModal={toggleModal} />
      )}
      {!isModalOpen && Id === 4 && <DeleteLink toggleModal={toggleModal} />}
      {!isModalOpen && Id === 5 && <SharedFolder toggleModal={toggleModal} />}
    </>
  );
}

export default Modal;
