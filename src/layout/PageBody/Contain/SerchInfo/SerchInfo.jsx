import "./SerchInfo.css";
import { LoginButton } from "../../../Nav/Contain/LoginButton";
import { LINK_IMAGE } from "./constant";

export const SerchInfo = () => {
  return (
    <div className="SerchInfo">
      <div className="SerchInfo-container">
        <img
          src={LINK_IMAGE}
          alt="검색창의 링크 아이콘"
          className="SerchInfo-icon"
        />
        <input
          className="SerchInfo-input"
          type="search"
          placeholder="링크를 추가해 보세요."
        />
        <LoginButton>
          <span className="SerchInfo-button">추가하기</span>
        </LoginButton>
      </div>
    </div>
  );
};
