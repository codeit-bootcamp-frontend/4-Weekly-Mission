import penIcon from "../assets/pen.svg";
import shareIcon from "../assets/share.svg";
import deleteIcon from "../assets/delete.svg";
import "./UtilIcons.css";

const UtilIcons = () => {
  return (
    <div className="utilContainer">
      <div>
        <img src={shareIcon} alt="공유 아이콘" />
        공유
      </div>
      <div>
        <img src={penIcon} alt="이름변경 아이콘" />
        이름 변경
      </div>
      <div>
        <img src={deleteIcon} alt="삭제 아이콘" />
        삭제
      </div>
    </div>
  );
};

export default UtilIcons;
