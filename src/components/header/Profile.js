import { useEffect, useState } from "react";
import styles from "./Profile.module.css";
function Profile() {
  const [userfolderName, setUserFolderName] = useState("");
  const [userProfileImageSource, setUserProfileImageSource] = useState("");
  const [folderOwnerName, setFolderOwnerName] = useState("");
  useEffect(() => {
    async function fetchUserFolderData() {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/sample/folder"
      );
      const userFolderData = await response.json();
      setUserFolderName(userFolderData.folder.name);
      setUserProfileImageSource(userFolderData.folder.owner.profileImageSource);
      setFolderOwnerName(userFolderData.folder.owner.name);
    }
    fetchUserFolderData();
  }, []);

  return (
    <div className={styles.profile_wrapper}>
      <div className={styles.profile_inside_wrapper}>
        <div className={styles.profile_name_wrapper}>
          <img
            className={styles.profile_avatar_image}
            src={userProfileImageSource}
          />
          <div className={styles.profile_name}>{folderOwnerName}</div>
        </div>
        <p className={styles.folder_name}>{userfolderName}</p>
      </div>
    </div>
  );
}

export default Profile;
