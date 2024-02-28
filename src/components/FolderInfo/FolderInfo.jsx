import "./FolderInfo.css";

const FolderInfo = ({ profileImage, ownerName, folderName }) => {
  return (
    <div className="FolderInfo">
      <img className="FolderInfoProfile" src={profileImage} alt="프로필 이미지" />
      <span className="FolderInfoOwner">{ownerName}</span>
      <h2 className="FolderInfoFolder">{folderName}</h2>
    </div>
  );
};

export default FolderInfo;
