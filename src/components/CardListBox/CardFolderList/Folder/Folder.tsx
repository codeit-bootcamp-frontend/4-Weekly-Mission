import { ObjectFolder } from "@/constants/index.types";
import styles from "./Folder.module.scss";

interface FolderProps {
  folder: ObjectFolder;
  onFolderClick: (folder: ObjectFolder) => void;
}

export default function Folder({ folder, onFolderClick }: FolderProps) {
  return (
    <button className={styles.folder} onClick={() => onFolderClick(folder)}>
      {folder.name}
    </button>
  );
}
