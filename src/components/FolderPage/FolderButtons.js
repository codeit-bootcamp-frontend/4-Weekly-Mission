import "./FolderButtons.css";

const FolderButtons = ({ folderList, handleFolderClick }) => (
  <>
    <button className="folderButton" onClick={() => handleFolderClick()}>
      전체
    </button>
    {folderList.map((folder) => (
      <div key={folder.id}>
        <button
          className="folderButton"
          onClick={() => handleFolderClick(folder.id)}
        >
          {folder.name}
        </button>
      </div>
    ))}
  </>
);

export default FolderButtons;
