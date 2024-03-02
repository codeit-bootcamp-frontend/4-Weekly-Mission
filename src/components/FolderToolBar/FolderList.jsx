import FolderAddButton from "./FolderAddButton";
import FolderButton from "./FolderButton";
import styles from "./FolderList.module.css";

const FolderList = ({ onFolderClick, folders, selectedFolder }) => {
  return (
    <div className={styles.FolderList}>
      <ul className={styles.folder_buttons}>
        <FolderButton
          onClick={() => onFolderClick("ALL")}
          isSelected={"ALL" === selectedFolder}
        >
          전체
        </FolderButton>
        {folders?.map(({ id, name }) => (
          <FolderButton
            key={id}
            onClick={() => onFolderClick(id)}
            isSelected={id === selectedFolder}
          >
            {name}
          </FolderButton>
        ))}
      </ul>
      <FolderAddButton className={styles.button_add} />
    </div>
  );
};

export default FolderList;
