import "./AddLinkBar.css";
import { ADD_ICON } from "./constans";

export function AddLinkBar() {
  return (
    <div className="add-link">
      <div className="add-link-bar">
        <div className="add-link-icon-input">
          <img
            className="add-link-icon"
            src={ADD_ICON}
            alt="링크 추가하기 아이콘"
          />
          <input
            className="add-link-input"
            type="text"
            placeholder="링크를 추가해 보세요"
          ></input>
        </div>
        <button className="add-link-button"> 추가하기 </button>
      </div>
    </div>
  );
}
