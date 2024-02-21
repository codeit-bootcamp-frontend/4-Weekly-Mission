import FolderLinks from "../FolderLinks/FolderLinks";
import styles from "./SharedFolder.module.css";
import SearchBar from "../SearchBar/SearchBar";

const SharedFolder = ({ folder }) => {
  const { name, owner, links } = folder;
  return (
    <div className={styles.Folder}>
      <div className={styles.desc}>
        <div className={styles.user}>
          <img
            className={styles.user_img}
            src={owner.profileImageSource}
            alt="폴더 소유자 프로필 사진"
          />
          <span className={styles.user_name}>{owner.name}</span>
        </div>
        <h2 className={styles.title}>{name}</h2>
      </div>
      <div className={styles.items}>
        <SearchBar />
        <FolderLinks links={links} />
      </div>
    </div>
  );
};

export default SharedFolder;
