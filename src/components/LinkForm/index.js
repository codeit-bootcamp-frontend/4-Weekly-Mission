import React from "react";
import "./index.scss";
import addLink from "../../image/link.svg";

const LinkForm = () => {
  return (
    <div className="link-form-box">
      <form className="link-form-wrapper">
        <img src={addLink} alt="add link" />
        <input
          className="link-input"
          type="text"
          placeholder="링크를 추가해 보세요"
        />
        <button className="add-link-button">추가하기</button>
      </form>
    </div>
  );
};

export default LinkForm;
