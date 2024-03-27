import { FolderData } from "@/constants/index.types";
import styles from "./Profile.module.scss";

interface ProfileProps {
  fetchData?: FolderData;
}

export default function Profile({ fetchData }: ProfileProps) {
  return (
    <section className={styles.ProfileBox}>
      <article className={styles.ProfileInfos}>
        <img
          className={styles.profileImg}
          src={fetchData?.owner.profileImageSource}
          alt="user profile image"
        />
        <p className={styles.profileName}>{fetchData?.owner.name}</p>
        <span className={styles.folderName}>{fetchData?.name}</span>
      </article>
    </section>
  );
}
