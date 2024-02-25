import { useState } from "react";
import linkImg from "../../images/link.svg";
import ModalAdd from "../Modal/ModalAdd";
import "./InputSection.css";

const InputSection = ({ folderNameData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="input-section">
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="input-box">
          <img src={linkImg} alt="" />
          <input className="input" placeholder="링크를 추가해보세요" />
        </div>
        <button className="link-button" type="submit">
          <div className="cta">추가하기</div>
        </button>
      </form>
      {isModalOpen && (
        <ModalAdd folderNameData={folderNameData} closeModal={closeModal} />
      )}
    </div>
  );
};

export default InputSection;
