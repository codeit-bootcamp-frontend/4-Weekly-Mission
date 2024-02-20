import "./FolderOptionMenu.css";

const FolderOptionMenu = () => {
  return (
    <div className="folderOption-options">
      <div className="folderOption-option">
        <div className="shareIcon"></div>
        <span>공유</span>
      </div>
      <div className="folderOption-option">
        <div className="nameChangeIcon"></div>
        <span>이름 변경</span>
      </div>
      <div className="folderOption-option">
        <div className="deleteIcon"></div>
        <span>삭제</span>
      </div>
    </div>
  );
};

export default FolderOptionMenu;
