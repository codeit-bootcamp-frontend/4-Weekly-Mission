import { useState } from "react";
import "./ModalAdd.css";
import closeBtn from "../../images/close.svg";

const ModalAdd = ({
  folderNameData,
  closeModal,
  modalTitle,
  modalButtonName,
}) => {
  const [isButtonClick, setIsButtonClick] = useState(null);

  const handleClick = (id) => {
    setIsButtonClick(id);
  };

  return (
    <>
      <div className="modal-bg" />
      <div className="modal-box">
        <button
          className="modal-close-btn"
          onClick={() => {
            closeModal();
          }}
        >
          <img src={closeBtn} alt="" />
        </button>
        <div className="modal-items">
          <div className="modal-title">
            <h2>{modalTitle}</h2>
            <p>링크 주소</p>
          </div>
          <div className="modal-content">
            <div className="modal-folder-list">
              {folderNameData?.map((data) => (
                <button
                  key={data.id}
                  onClick={() => {
                    handleClick(data.id);
                  }}
                  className={`folder-list-btn ${
                    isButtonClick === data.id ? "btn-click" : ""
                  }`}
                >
                  <span className="folder-list-name">{data.name}</span>
                  <span className="folder-list-count">
                    {data.link.count}개 링크
                  </span>
                </button>
              ))}
            </div>
            <button className="modal-add-btn">{modalButtonName}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAdd;
