import shareIcon from "../images/sharewindow.svg";
import changeIcon from "../images/change.svg";
import deleteIcon from "../images/delete.svg";
import "../styles/handleFolder.css";

export function HandleFolder() {
  return (
    <>
      <div className="handle">
        <div className="icon">
          <img src={shareIcon} alt="공유 아이콘" />
          공유
        </div>
        <div className="icon">
          <img src={changeIcon} alt="이름변경 아이콘" />
          이름 변경
        </div>
        <div className="icon">
          <img src={deleteIcon} alt="삭제 아이콘" />
          삭제
        </div>
      </div>
    </>
  );
}
