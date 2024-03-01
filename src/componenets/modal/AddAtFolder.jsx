import close from "../../images/_close.png";

function AddAtFolder({ toggleModal }) {
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
          <div className="modal-form-title">폴더에 추가</div>
          <div className="modal-change-format">
            <button className="modal-change-button">추가하기</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddAtFolder;
