import { UserFolderProps } from "@/constants/index.types";
import styles from "./Folder.module.scss";

interface FolderProps {
  folder: UserFolderProps;
  onClick: (folder: UserFolderProps) => void;
}

export default function Folder({ folder, onClick }: FolderProps) {
  return (
    <button className={styles.folder} onClick={() => onClick(folder)}>
      {folder.name}
    </button>
  );
}
