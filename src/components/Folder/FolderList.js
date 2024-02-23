function FolderList({ activeButton, handleButtonClick, renderedButtons }) {
  return (
    <div className="Folder-lists-container">
      <div className="Folder-lists">
        <button
          className={activeButton === "전체" ? "active" : ""}
          onClick={() => handleButtonClick("전체")}
        >
          전체
        </button>
        {renderedButtons}
      </div>
      <div className="Folder-add">
        <span className="Folder-add-text">폴더 추가</span>
        <img
          className="Folder-add-image"
          src="images/add.svg"
          alt="폴더 추가 이미지"
        />
      </div>
    </div>
  );
}

export default FolderList;
