import { LINK_IMAGE } from "./constant";
import "./AddLink.css";

const AddLink = () => {
  return (
    <div className="AddLink">
      <div className="AddLink-items">
        <input className="AddLink-input" placeholder="링크를 추가하세요" />
        <img className="AddLink-icon" src={LINK_IMAGE} alt="링크 아이콘" />
        <button className="AddLink-button">추가하기</button>
      </div>
    </div>
  );
};

export default AddLink;
