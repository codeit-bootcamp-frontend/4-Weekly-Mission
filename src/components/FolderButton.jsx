import styles from "./FolderButton.module.css";

function FolderButton({ folder, onClick, isClicked, setClickedIdx }) {
  const handleClick = () => {
    onClick(folder);
    setClickedIdx();
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
