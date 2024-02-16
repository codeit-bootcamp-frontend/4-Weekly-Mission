import "./FolderBar.css";

export default function FolderBar({ folderName, userName, imgSrc }) {
  return (
    <div className="FolderBar">
      <div className="user">
        <img id="folderImg" src={imgSrc} alt="폴더 이미지"></img>
        <span id="userName">@{userName}</span>
        <span id="folderName">{folderName}</span>
      </div>
    </div>
  );
}
