import { SyntheticEvent } from "react";
import close from "../../images/_close.png";

type EditFolderNameType = {
  toggleModal: (id: number) => void;
};

function EditFolderName({ toggleModal }: EditFolderNameType) {
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
          <div className="modal-form-title">폴더 이름 변경</div>
          <div className="modal-change-format">
            <input placeholder="내용 입력" className="modal-change-input" />
            <button className="modal-change-button">변경하기</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditFolderName;
