import "./Header.css";

function Header({ folderData }) {
  return (
    <div className="Header">
      <div className="headerProfileBox">
        <img
          className="headerProfileImg"
          src={folderData.profileImg}
          alt="프로필 이미지"
        />
        <p className="profileName">@{folderData.profileName}</p>
      </div>
      <h1 className="folderName">{folderData.folderName}</h1>
    </div>
  );
}

export default Header;
