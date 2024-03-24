import styles from "./UserProfile.module.css";
//types
import { FolderData } from "../types/commonTypes";

function UserProfile({ folderData }: { folderData: FolderData | {} }) {
  const owner = folderData && (folderData as FolderData).owner;
  const profileImageSource = owner && owner.profileImageSource;
  const profileName = owner && owner.name;
  return (
    <div className={styles.container}>
      {profileImageSource && (
        <img className={styles.img} src={profileImageSource} alt="" />
      )}
      {profileName && <div className={styles.name}>{profileName}</div>}
      <div className={styles.folderName}>{(folderData as FolderData).name}</div>
    </div>
  );
}

export default UserProfile;
