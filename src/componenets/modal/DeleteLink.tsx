import { SyntheticEvent } from "react";
import close from "../../images/_close.png";
import "./modal.css";

type DeleteLinkrType = {
  toggleModal: (id: number) => void;
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

function DeleteLink({ toggleModal, data }: DeleteLinkrType) {
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
          <div className="modal-form-title">링크 삭제</div>
          <div className="modal-change-format">
            <p className="modal-deleteFolderName">{data.url}</p>
            <button className="modal-deleteFolder-button">삭제하기</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DeleteLink;
