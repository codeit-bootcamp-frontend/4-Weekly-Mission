import styles from "./profile.module.css";

function Profile({ email, imgUrl }) {
  return (
    <div className={styles.container}>
      <img src={imgUrl} className={styles.img} alt="프로필 이미지"/>
      <p className={styles.email}>{email}</p>
    </div>
  );
}

export default Profile;
