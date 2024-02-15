import "./PageInfo.css";

export const PageInfo = ({ profileImage, ownerName, pageName }) => {
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
};
