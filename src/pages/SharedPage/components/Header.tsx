import styles from "./header.module.css";

interface Props {
  fileImg: string;
  ownerName: string;
  folderName: string;
}

function Header({ fileImg, ownerName, folderName }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img className={styles.img} src={fileImg} alt="프로필 이미지"/>
        <div className={styles.name}>{ownerName}</div>
        <div className={styles.folder}>{folderName}</div>
      </div>
    </div>
  );
}

export default Header;
