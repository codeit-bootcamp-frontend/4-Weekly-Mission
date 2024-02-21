import "./FolderHeader.css";

export const FolderHeader = () => {
  return (
    <div className="folderHeader">
      <div className="folderHeader-link">
        <div className="folderHeader-link-icon"></div>
        <input
          type="link"
          className="folderHeader-link-input"
          placeholder="링크를 추가해보세요."
        />
        <button className="folderHeader-link-button">추가하기</button>
      </div>
    </div>
  );
};
