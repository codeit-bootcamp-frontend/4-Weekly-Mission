// import "./css/Header.css";
import style from "./UserProfile.module.css";

function UserProfile({ folderData }) {
  const owner = folderData && folderData.owner;
  const profileImageSource = owner && owner.profileImageSource;
  const profileName = owner && owner.name;
  return (
    <div className={style.container}>
      {profileImageSource && (
        <img className={style.img} src={profileImageSource} alt="" />
      )}
      {profileName && <div className={style.name}>{profileName}</div>}
      <div className={style.folderName}>{folderData.name}</div>
    </div>
  );
}

export default UserProfile;
