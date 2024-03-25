import React, { forwardRef } from "react";
import "./AddLinkBar.css";

const AddLinkBar = forwardRef((props, ref) => {
  return (
    <div className="input-container">
      <div ref={ref} className={`${props.className}`}>
        <form className="form">
          <div className="input-box">
            <img className="icon" src="images/link.svg" alt="링크 아이콘" />
            <input className="input" type="text" placeholder="링크를 추가해 보세요" />
          </div>
          <div className="buttonContainer">
            <button className="button" type="submit">
              추가하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

export default AddLinkBar;
