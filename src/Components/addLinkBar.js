import "./AddLinkBar.css";
import linkIcon from "../../assets/linkIcon.svg";
import ModalAddFolder from "../Modal/ModalAddFolder";
import { useState } from "react";

const AddLink = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="addLinkContainer">
      <form className="addLinkForm">
        <label htmlFor="linkInput" className="hiddenLabel">
          링크를 추가해보세요.
        </label>
        <img src={linkIcon} alt="link icon" />
        <input
          type="text"
          id="linkInput"
          placeholder="링크를 추가해 보세요."
          className="addLinkInput"
        />
        <button onClick={handleOpenModal}>추가하기</button>
        {showModal && (
          <ModalAddFolder
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
        )}
      </form>
    </div>
  );
};

export default AddLink;
