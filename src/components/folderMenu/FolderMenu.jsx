import "./FolderMenu.css";
import folderAddButton from "../../assets/folder-add-icon.png";

function FolderMenu({
  folders,
  getCardsInfo,
  setFolderId,
  setFolderName,
  setIsWholeFolderSelect,
}) {
  const handleWholeFolderClick = () => {
    getCardsInfo();
    setFolderName("");
    setIsWholeFolderSelect(true);
  };

  const handleFolderClick = (folderId, folderName) => {
    setFolderId(folderId);
    setFolderName(folderName);
    setIsWholeFolderSelect(false);
  };

  return (
    <div className="FolderMenu">
      <div className="container">
        <div className="folder_container">
          <button
            className="folder_selection_button"
            onClick={handleWholeFolderClick}
          >
            전체
          </button>
          {folders.map((folder) => (
            <button
              className="folder_selection_button"
              key={folder.id}
              onClick={() => handleFolderClick(folder.id, folder.name)}
            >
              {folder.name}
            </button>
          ))}
        </div>
        <button className="folder_add_button">
          <span>폴더 추가</span>
          <img
            className="folder_add_image"
            src={folderAddButton}
            alt="add button"
          />
        </button>
      </div>
    </div>
  );
}

export default FolderMenu;
