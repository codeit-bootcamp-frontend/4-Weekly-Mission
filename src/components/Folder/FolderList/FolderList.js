import FolderAdd from "../FolderAdd/FolderAdd";
import "./FolderList.css";

const FolderList = ({ folderList, onSelectFolderList, selectId }) => {
  const handleClickFolderList = (e) => {
    let folderId;

    if (e.target.id === "null") {
      folderId = null;
    } else {
      folderId = parseInt(e.target.id);
    }
    onSelectFolderList({ name: e.target.textContent, id: folderId });
  };

  return (
    <div className="folderList">
      <div className="folderList-content">
        <span
          className={`folderList-button ${!selectId ? "selected" : ""}`}
          onClick={handleClickFolderList}
          id={null}
        >
          전체
        </span>
        {folderList?.map((item) => (
          <span
            className={`folderList-button ${
              selectId === item.id ? "selected" : ""
            }`}
            key={item.id}
            id={item.id}
            onClick={handleClickFolderList}
          >
            {item.name}
          </span>
        ))}
      </div>

      <FolderAdd />
    </div>
  );
};

export default FolderList;
