import styles from "./FolderButton.module.css";

function FolderButton({ idx, folder, onClick, isClicked, changeClickedIdx }) {
  const handleClick = () => {
    onClick(folder);
    changeClickedIdx(idx);
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
