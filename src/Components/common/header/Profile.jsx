import styles from "./Profile.module.css";

function Profile({ user }) {
  const { email, profileImageSource } = user;

  return (
    <div className={styles.profile_container}>
      <img
        src={profileImageSource}
        alt={profileImageSource}
        className={styles.profile_img}
      />

      <p className={styles.profile_txt}>{email}</p>
    </div>
  );
}

export default Profile;
