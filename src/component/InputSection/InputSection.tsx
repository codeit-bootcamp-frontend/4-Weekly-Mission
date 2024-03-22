import { useState } from "react";
import { InputSectionProps } from "../../interfaces/folder.interface";
import linkImg from "../../images/link.svg";
import ModalAdd from "../Modal/ModalAdd";
import "./InputSection.css";

const InputSection = ({ folderData }: InputSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent): void => {
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
        <ModalAdd folderData={folderData} closeModal={closeModal} />
      )}
    </div>
  );
};

export default InputSection;
