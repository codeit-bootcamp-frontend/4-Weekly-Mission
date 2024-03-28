import { SyntheticEvent } from "react";
import close from "../../images/_close.png";
import "./modal.css";

type DeleteFolderType = {
  toggleModal: (id: number) => void;
  folderName: string;
};

function DeleteFolder({ folderName, toggleModal }: DeleteFolderType) {
  function handleImageClick(event: SyntheticEvent) {
    event.preventDefault();
    toggleModal(7);
  }

  return (
    <div className="modal">
      <form className="modal-form">
        <div className="modal-form-content">
          <img
            onClick={handleImageClick}
            className="modal-form-img"
            src={close}
            alt="닫기"
          />
          <div className="modal-form-title">폴더 삭제</div>
          <div className="modal-change-format">
            <p className="modal-deleteFolderName">{folderName}</p>
            <button className="modal-deleteFolder-button">삭제하기</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DeleteFolder;
