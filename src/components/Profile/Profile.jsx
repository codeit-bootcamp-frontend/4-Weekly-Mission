import styles from "./Profile.module.scss";

export default function Profile({ fetchData }) {
  const {
    name: folderName,
    owner: { name: userName, profileImageSource },
  } = fetchData;

  return (
    <section className={styles.ProfileBox}>
      <article className={styles.ProfileInfos}>
        <img
          className={styles.profileImg}
          src={profileImageSource}
          alt="user profile image"
        />
        <p className={styles.profileName}>{userName}</p>
        <span className={styles.folderName}>{folderName}</span>
      </article>
    </section>
  );
}
