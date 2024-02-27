import { useState } from "react";
import { useGetFolderById } from "../../../hooks/useGetFolder";
import "./LinkBar.css";
import ModalAdd from "../Modal/ModalAdd/ModalAdd";

function LinkBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const { data } = useGetFolderById();
  const dataArray = data?.data;

  return (
    <div className="LinkBar">
      <div className="LinkBar-item">
        <img
          src="./images/link.svg"
          alt="링크 아이콘"
          className="LinkBar-icon"
        />
        <input
          className="LinkBar-input"
          type="text"
          placeholder="링크를 추가해 보세요"
        />
        <button className="LinkBar-button" onClick={handleOpenModal}>
          추가하기
        </button>
        {isModalOpen && (
          <ModalAdd setIsModalOpen={setIsModalOpen} dataArray={dataArray} />
        )}
      </div>
    </div>
  );
}

export default LinkBar;
