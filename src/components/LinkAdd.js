import "./LinkAdd.css";
import linkIcon from "../assets/link.svg";

export default function LinkAdd() {
  return (
    <div className="LinkAdd">
      <div className="LinkAddBar-Frame">
        <div className="LinkAddBar">
          <div className="LinkAddBar-Element">
            <img id="linkIcon" src={linkIcon} alt="링크 아이콘" />
            <input
              type="text"
              id="inputText"
              placeholder="링크를 검색해보세요."
            />
          </div>
          <button id="addBtn">추가하기</button>
        </div>
      </div>
    </div>
  );
}
