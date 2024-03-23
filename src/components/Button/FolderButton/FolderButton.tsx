import { MouseEvent, ReactNode } from "react";
import styles from "./folderButton.module.css";

interface Props {
  children: ReactNode;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  ischecked: boolean;
}

function FolderButton({ children, onClick, ischecked }: Props) {
  return (
    <button
      className={`${styles.btn} ${ischecked ? styles.checked : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default FolderButton;
