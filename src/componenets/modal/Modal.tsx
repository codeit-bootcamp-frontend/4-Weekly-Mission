import "./modal.css";
import AddFolder from "./AddFolder";
import EditFolderName from "./EditFolderName";
import DeleteFolder from "./DeleteFolder";
import DeleteLink from "./DeleteLink";
import SharedFolder from "./SharedFolder";
import AddAtFolder from "./AddAtFolder";

type ModalProps = {
  folderName: string;
  isModalOpen: boolean;
  toggleModal: (id: number) => void;
  Id: number;
  data: {
    id: number;
    created_at: string;
    updated_at: null;
    url: string;
    title: string;
    description: string;
    image_source: string;
    folder_id: number;
  };
};

function Modal({ folderName, isModalOpen, toggleModal, Id, data }: ModalProps) {
  return (
    <>
      {!isModalOpen && Id === 1 && <AddFolder toggleModal={toggleModal} />}
      {!isModalOpen && Id === 2 && <EditFolderName toggleModal={toggleModal} />}
      {!isModalOpen && Id === 3 && (
        <DeleteFolder folderName={folderName} toggleModal={toggleModal} />
      )}
      {!isModalOpen && Id === 4 && (
        <DeleteLink data={data} toggleModal={toggleModal} />
      )}
      {!isModalOpen && Id === 5 && <SharedFolder toggleModal={toggleModal} />}
      {!isModalOpen && Id === 6 && <AddAtFolder toggleModal={toggleModal} />}
    </>
  );
}

export default Modal;
