import styles from "./Profile.module.css";
import { useFetch } from "../../hooks/useFetch";

const folderUrl = "https://bootcamp-api.codeit.kr/api/sample/folder";

function Profile() {
  const { data: folderData } = useFetch(folderUrl);

  return (
    <div className={styles.profile_wrapper}>
      <div className={styles.profile_inside_wrapper}>
        <div className={styles.profile_name_wrapper}>
          <img
            className={styles.profile_avatar_image}
            src={folderData?.folder.owner.profileImageSource}
            alt="profile_avatar_image"
          />
          <div className={styles.profile_name}>
            {folderData?.folder.owner.name}
          </div>
        </div>
        <p className={styles.folder_name}>{folderData?.folder.name}</p>
      </div>
    </div>
  );
}

export default Profile;
