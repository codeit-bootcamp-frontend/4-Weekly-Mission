import React, { useState } from "react";
import "./ModalAdd.css";

interface Data {
  id: number;
  name: string;
  link: {
    count: number;
  };
}

interface ModalAddProps {
  dataArray: Data[];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalAdd = ({ dataArray, setIsModalOpen }: ModalAddProps) => {
  const [isClick, setIsClick] = useState<number | null>(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = (id: number) => {
    setIsClick(id);
  };

  return (
    <>
      <div className="modal-bg">
        <div className="modal-box">
          <button className="modal-close-btn" onClick={handleCloseModal}>
            <img src="images/close.svg" alt="" />
          </button>
          <div className="modal-items">
            <div className="modal-title">
              <h2>폴더에 추가</h2>
              <p>링크 주소</p>
            </div>
            <div className="modal-content">
              <div className="modal-folder-list">
                {dataArray.map((data) => (
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
      </div>
    </>
  );
};

export default ModalAdd;
