import styles from "./Profile.module.css";

function Profile({ user }) {
  const { email, image_source } = user.data[0];

  return (
    <div className={styles.profile_container}>
      <img
        src={image_source}
        alt={image_source}
        className={styles.profile_img}
      />
      <p className={styles.profile_txt}>{email}</p>
    </div>
  );
}

export default Profile;
