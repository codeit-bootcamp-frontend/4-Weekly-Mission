import React, { useState } from "react";
import "./index.scss";
import addLink from "../../image/link.svg";
import AddFolder from "../Modal/AddFolder";

const LinkForm = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="link-form-box">
      <form className="link-form-wrapper">
        <img src={addLink} alt="add link" />
        <input
          className="link-input"
          type="text"
          placeholder="링크를 추가해 보세요"
        />
        <button type="button" className="add-link-button" onClick={openModal}>
          추가하기
        </button>
        <AddFolder />
      </form>
    </div>
  );
};

export default LinkForm;
