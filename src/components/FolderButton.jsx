import style from "./FolderButton.module.css";

function FolderButton({ folder, onClick, isClicked, setIsClicked }) {
  const handleClick = () => {
    onClick(folder);
    setIsClicked();
  };
  const folderName = folder.name;
  return (
    <span
      className={isClicked ? style.clicked : style.container}
      onClick={handleClick}
    >
      {folderName}
    </span>
  );
}

export default FolderButton;
