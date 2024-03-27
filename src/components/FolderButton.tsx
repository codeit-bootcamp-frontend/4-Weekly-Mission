import styles from "./FolderButton.module.css";
//type
import { FolderList } from "../types/commonTypes";

interface Props {
  folder: FolderList;
  onClick: (folder: FolderList) => void;
  isClicked: boolean;
  changeClickedId: () => void;
}

function FolderButton({ folder, onClick, isClicked, changeClickedId }: Props) {
  const handleClick = () => {
    onClick(folder);
    changeClickedId();
  };
  const folderName = folder.name;
  return (
    <span
      className={isClicked ? styles.clicked : styles.container}
      onClick={handleClick}
    >
      {folderName}
    </span>
  );
}

export default FolderButton;
