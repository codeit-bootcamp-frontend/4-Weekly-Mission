import { UserFolderProps } from "@/constants/index.types";
import styles from "./Folder.module.scss";

interface FolderProps {
  folder: UserFolderProps;
  handleFolderClick: (folder: UserFolderProps) => void;
}

export default function Folder({ folder, handleFolderClick }: FolderProps) {
  return (
    <button className={styles.folder} onClick={() => handleFolderClick(folder)}>
      {folder.name}
    </button>
  );
}
