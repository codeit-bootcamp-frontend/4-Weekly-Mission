import styles from "./FolderButton.module.css";

function FolderButton({ idx, folder, onClick, isClicked, changeClickedId }) {
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
