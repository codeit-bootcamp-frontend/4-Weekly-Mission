import "./Info.css";

export const FolderInfo = ({ profileImage, ownerName, folderName }) => {
  return (
    <div className="FolderInfo">
      <img className="FolderInfo-profile" src={profileImage} alt="사용자의 프로필 이미지" />
      <span className="FolderInfo-owner">{ownerName}</span>
      <h2 className="FolderInfo-folder">{folderName}</h2>
    </div>
  );
};