import "./FolderOptionMenu.css";

export const FolderOptionMenu = () => {
  return (
    <div className="folderOption-options">
      <div className="folderOption-option">
        <div className="shareIcon"></div>
        <button>공유</button>
      </div>
      <div className="folderOption-option">
        <div className="nameChangeIcon"></div>
        <button>이름 변경</button>
      </div>
      <div className="folderOption-option">
        <div className="deleteIcon"></div>
        <button>삭제</button>
      </div>
    </div>
  );
};
