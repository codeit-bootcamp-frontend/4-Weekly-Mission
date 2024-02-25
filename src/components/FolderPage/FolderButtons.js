import "./FolderButtons.css";

const FolderButtons = ({
  folderList,
  handleFolderClick,
  currentFolderName,
}) => (
  <>
    <button className="folderButton" onClick={() => handleFolderClick()}>
      전체
    </button>
    {folderList.map((folder) => (
      <button
        key={folder.id}
        className={
          currentFolderName === folder.name
            ? "folderButton selected"
            : "folderButton"
        }
        onClick={() => handleFolderClick(folder.id)}
      >
        {folder.name}
      </button>
    ))}
  </>
);

export default FolderButtons;
