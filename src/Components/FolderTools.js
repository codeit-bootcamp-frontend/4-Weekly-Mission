import shareIcon from "../Assets/image/share.png";
import penIcon from "../Assets/image/pen.png";
import deleteIcon from "../Assets/image/delete.png";
import "../Styles/FolderTools.css";

function FolderTools() {
  return (
    <>
      <div className="tools">
        <div className="icon">
          <img src={shareIcon} alt="공유 아이콘" />
          공유
        </div>
        <div className="icon">
          <img src={penIcon} alt="이름변경 아이콘" />
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

export default FolderTools;
