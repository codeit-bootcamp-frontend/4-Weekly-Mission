import linkIcon from "../Assets/image/link.png";
import "../Styles/FolderHeader.css";

export function FolderHeader() {
  return (
    <>
      <form>
        <div className="linkInputContainer">
          <div className="link">
            <input
              className="linkInput"
              placeholder="링크를 추가해 보세요"
            ></input>
            <div className="linkIcon">
              <img src={linkIcon} className="linkImg" alt="링크 아이콘"></img>
            </div>
            <button className="linkAddBtn">추가하기</button>
          </div>
        </div>
      </form>
    </>
  );
}
