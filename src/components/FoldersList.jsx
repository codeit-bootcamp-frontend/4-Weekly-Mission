import "./styles/FoldersList.css";

export default function FoldersList({
  folders,
  selectedFolder,
  setSelectedFolder,
}) {
  return (
    <div className="folders-list">
      <div className="folders">
        <div
          className={`folder ${selectedFolder === null ? "selected" : ""}`}
          onClick={() => {
            setSelectedFolder(null);
          }}
        >
          전체
        </div>
        {folders.map((folder) => (
          <div
            key={folder.id}
            className={`folder ${
              selectedFolder === folder.id ? "selected" : ""
            }`}
            onClick={() => {
              setSelectedFolder(folder.id);
            }}
          >
            {folder.name}
          </div>
        ))}
      </div>
      <div className="add-folder">
        <span>폴더 추가</span> <img src="images/plus.svg" alt="plus" />
      </div>
    </div>
  );
}
