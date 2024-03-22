import styles from "./profile.module.css";

interface Props {
  email: string;
  imgUrl: string;
}

function Profile({ email, imgUrl }: Props) {
  return (
    <div className={styles.container}>
      <img src={imgUrl} className={styles.img} alt="프로필 이미지" />
      <p className={styles.email}>{email}</p>
    </div>
  );
}

export default Profile;
