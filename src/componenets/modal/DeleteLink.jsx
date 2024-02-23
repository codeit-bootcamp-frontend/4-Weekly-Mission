import close from "../../images/_close.png";
import "./modal.css";

function DeleteLink({ toggleModal }) {
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
          <div className="modal-form-title">링크 삭제</div>
          <div className="modal-change-format">
            <p className="modal-deleteFolderName">http://www.abc.com</p>
            <button className="modal-deleteFolder-button">삭제하기</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DeleteLink;
