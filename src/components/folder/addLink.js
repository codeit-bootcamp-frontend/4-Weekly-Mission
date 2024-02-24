import { useFolder } from "../../hooks/useFolder";
import LINK_LOGO from "../../assets/image/link.svg";
import "./folderInfo.css";
import "./addLink.css";
export const AddLink = () => {
  return (
    <div className="infoContainer">
      <div className="linkFlexBox">
        <div className="linkAddInputBox">
          <div className="linkAddInputFlexBox">
            <img src={LINK_LOGO} />
            <input placeholder="링크를 추가해보세요" />
          </div>
          <button className="addButton">추가하기</button>
        </div>
      </div>
    </div>
  );
};
