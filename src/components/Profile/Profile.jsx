import styles from "./Profile.module.css";

const Profile = ({ profile }) => {
  const { email, image_source } = profile;

  return (
    <div className={styles.Profile}>
      <img className={styles.image} src={image_source} alt="프로필 사진" />
      <span className={styles.email}>{email}</span>
    </div>
  );
};

export default Profile;
