import "./FolderInfo.css";

const FolderInfo = ({ profile }) => {
  const { name: ownerName, profileImageSource } = profile?.owner || {};
  const { name: folderName } = profile || {};
  return (
    <div className="folderInfo">
      <img
        className="folderInfo-profile"
        src={profileImageSource}
        alt="폴더 소유자의 프로필 이미지"
      />
      <span className="folderInfo-owenrName">{ownerName}</span>
      <span className="folderInfo-folderName">{folderName}</span>
    </div>
  );
};

export default FolderInfo;
