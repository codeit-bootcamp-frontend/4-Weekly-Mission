import "./FolderOption.css";

const FolderOption = ({ folderName }) => {
  return (
    <div className="folderOption">
      <div className="folderOption-folderName">{folderName}</div>
      {folderName === "전체" ? (
        <></>
      ) : (
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
      )}
    </div>
  );
};

export default FolderOption;
