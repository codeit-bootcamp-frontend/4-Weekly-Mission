import { useState } from "react";
import "./ModalAdd.css";
import closeBtn from "../../images/close.svg";

const ModalAdd = ({ folderNameData, closeModal }) => {
  const [isClick, setIsClick] = useState(null);

  const handleCloseModal = () => {
    closeModal(false);
  };

  const handleClick = (id) => {
    setIsClick(id);
  };

  return (
    <>
      <div className="modal-bg"></div>
      <div className="modal-box">
        <button className="modal-close-btn" onClick={handleCloseModal}>
          <img src={closeBtn} alt="" />
        </button>
        <div className="modal-items">
          <div className="modal-title">
            <h2>폴더에 추가</h2>
            <p>링크 주소</p>
          </div>
          <div className="modal-content">
            <div className="modal-folder-list">
              {folderNameData.map((data) => (
                <button
                  key={data.id}
                  onClick={() => {
                    handleClick(data.id);
                  }}
                  className={`folder-list-btn ${
                    isClick === data.id ? "btn-click" : ""
                  }`}
                >
                  <span className="folder-list-name">{data.name}</span>
                  <span className="folder-list-count">
                    {data.link.count}개 링크
                  </span>
                </button>
              ))}
            </div>
            <button className="modal-add-btn">추가하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAdd;
