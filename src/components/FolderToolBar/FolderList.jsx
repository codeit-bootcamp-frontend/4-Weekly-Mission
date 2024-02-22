import FolderAddButton from "./FolderAddButton";
import styles from "./FolderList.module.css";

const FolderList = ({ onFolderClick, folders }) => {
  return (
    <div className={styles.FolderList}>
      <ul className={styles.folder_buttons}>
        <button onClick={() => onFolderClick("ALL")}>전체</button>
        {folders?.map(({ id, name }) => (
          <button key={id} onClick={() => onFolderClick(id)}>
            {name}
          </button>
        ))}
      </ul>
      <FolderAddButton className={styles.button_add} />
    </div>
  );
};

export default FolderList;
