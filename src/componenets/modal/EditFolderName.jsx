import close from "../../images/_close.png";

function EditFolderName({ toggleModal }) {
  return (
    <div className="modal">
      <form className="modal-form">
        <div className="modal-form-content">
          <img
            onClick={toggleModal}
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
