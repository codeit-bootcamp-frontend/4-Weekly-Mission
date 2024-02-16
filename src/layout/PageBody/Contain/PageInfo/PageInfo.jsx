import "./PageInfo.css";
import { useLocation } from "react-router-dom";
import { LINK_IMAGE } from "./constant";
import { LoginButton } from "../../../Nav/Contain/LoginButton";

export const PageInfo = ({ profileImage, ownerName, pageName }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  if (currentPath === "/shared") {
    return (
      <div className="PageInfo">
        <img
          className="PageInfo-profile"
          src={profileImage}
          alt="폴더 프로필 이미지"
        />
        <span className="PageInfo-owner">{ownerName}</span>
        <h2 className="PageInfo-folder">{pageName}</h2>
      </div>
    );
  } else if (currentPath === "/folder") {
    return (
      <div className="PageInfo-SearchBar">
        <div className="PageInfo-SearchBar-container">
          <input
            className="PageInfo-SearchBar-input"
            type="search"
            placeholder="링크를 추가해 보세요."
          />
          <img
            src={LINK_IMAGE}
            alt="검색창인 것을 알려주는 돋보기 아이콘"
            className="PageInfo-SearchBar-icon"
          />
          <LoginButton className="PageInfo-SearchBar-button">
            <span>검색</span>
          </LoginButton>
        </div>
      </div>
    );
  }
};
