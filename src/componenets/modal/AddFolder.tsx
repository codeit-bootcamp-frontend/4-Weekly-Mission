import { SyntheticEvent } from "react";
import close from "../../images/_close.png";

type AddFolderType = {
  toggleModal: (id: number) => void;
};

function AddFolder({ toggleModal }: AddFolderType) {
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
          <div className="modal-form-title">폴더 추가</div>
          <div className="modal-change-format">
            <input placeholder="내용 입력" className="modal-change-input" />
            <button className="modal-change-button">추가하기</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddFolder;
