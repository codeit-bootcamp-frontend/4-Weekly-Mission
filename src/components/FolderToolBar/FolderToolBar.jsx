import { useGetFolderList } from "../../hooks/useGetFolderList";
import styles from "./FolderToolBar.module.scss";
import FolderEditBar from "./FolderEditBar";
import FolderList from "./FolderList";

const FolderToolBar = ({ onFolderClick, selectedFolder }) => {
  const { data: folders } = useGetFolderList();
  const folderName =
    "ALL" === selectedFolder
      ? "전체"
      : folders?.find(({ id }) => id === selectedFolder)?.name;

  return (
    <div className={styles.container}>
      <FolderList
        onFolderClick={onFolderClick}
        folders={folders}
        selectedFolder={selectedFolder}
      />
      <FolderEditBar folderName={folderName} />
    </div>
  );
};

export default FolderToolBar;
