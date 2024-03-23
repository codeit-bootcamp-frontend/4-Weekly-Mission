import styles from "./Folder.module.scss";

export default function Folder({ folder, onClick }) {
  return (
    <button className={styles.folder} onClick={() => onClick(folder)}>
      {folder.name}
    </button>
  );
}
