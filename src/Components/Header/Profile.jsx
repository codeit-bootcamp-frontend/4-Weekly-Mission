import styles from "./css/Profile.module.css";

function Profile({ email, profileImageSource }) {
  return (
    <div className={styles.profile_container}>
      {profileImageSource ? (
        <img
          src={profileImageSource}
          alt={profileImageSource}
          className={styles.profile_img}
        />
      ) : (
        <img
          src="Icons/user_icon.png"
          alt="default_icon"
          className={styles.profile_img}
        />
      )}

      <p className={styles.profile_txt}>{email}</p>
    </div>
  );
}

export default Profile;
