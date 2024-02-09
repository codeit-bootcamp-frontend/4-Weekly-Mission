import "./SharedHeaderContent.css";
import userAvatar from "../assets/images/user-avatar.png";

function SharedHeaderContent() {
  return (
    <div className="header-content">
      <div className="header-content-container">
        <div className="shared-user flex-col">
          <img className="shared-user-avatar" src={userAvatar}></img>
          <p className="shared-user-name">@코드잇</p>
        </div>
        <p className="shared-folder-name text-center">⭐️ 즐겨찾기</p>
      </div>
    </div>
  );
}

export default SharedHeaderContent;
