import React from "react";
import "./index.scss";
import addLink from "../../image/link.svg";

const LinkForm = () => {
  return (
    <div className="LinkFormBox">
      <form className="LinkFormWrapper">
        <img src={addLink} alt="add link" />
        <input
          className="LinkInput"
          type="text"
          placeholder="링크를 추가해 보세요"
        />
        <button className="AddLinkButton">추가하기</button>{" "}
      </form>
    </div>
  );
};

export default LinkForm;
