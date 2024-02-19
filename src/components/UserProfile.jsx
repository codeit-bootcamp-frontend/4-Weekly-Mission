// import "./css/Header.css";
import styles from "./UserProfile.module.css";

function UserProfile({ folderData }) {
  const owner = folderData && folderData.owner;
  const profileImageSource = owner && owner.profileImageSource;
  const profileName = owner && owner.name;
  return (
    <div className={styles.container}>
      {profileImageSource && (
        <img className={styles.img} src={profileImageSource} alt="" />
      )}
      {profileName && <div className={styles.name}>{profileName}</div>}
      <div className={styles.folderName}>{folderData.name}</div>
    </div>
  );
}

export default UserProfile;
