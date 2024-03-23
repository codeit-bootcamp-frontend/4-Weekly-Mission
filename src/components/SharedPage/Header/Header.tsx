import styles from "./Header.module.css";

interface Props{
  loadingError: {
    message: string;
  };
  folderInfo?: {
    id: string;
    name: string;
    link: { count: number };
    owner: {
      name: string;
      profileImageSource: string;
    }
  };

}

const Header = ({ loadingError, folderInfo } : Props) => {
  return (
    <>
      <div className={styles["profile-container"]}>
        <div className={styles["profile"]}>
          <img
            className={styles["profile-img"]}
            src={folderInfo?.owner?.profileImageSource}
            alt="프로필이미지"
          />
          <div className={styles["profile-author"]}>
            @{folderInfo?.owner?.name}
          </div>
          <h2 className={styles["profile-title"]}>{folderInfo?.name}</h2>
          {loadingError && <div>{loadingError.message}</div>}
        </div>
      </div>
    </>
  );
};

export default Header;
