import "./EditLink.css";

export const EditLink = ({ currentCategory, handleEditClick }) => {
  const isCurrentAll = currentCategory === "전체";
  return (
    <div className="EditLink-wrapper">
      <div className="current-category">{currentCategory}</div>
      {!isCurrentAll && (
        <div className="EditLinks">
          <button
            className="edit-button"
            onClick={handleEditClick}
            id="shareFolder"
          >
            <img src="images/share-icon.svg" alt="share icon" />
            공유하기
          </button>
          <button
            className="edit-button"
            onClick={handleEditClick}
            id="changeFolderName"
          >
            <img src="images/pen-icon.svg" alt="rename icon" />
            이름 변경
          </button>
          <button
            className="edit-button"
            onClick={handleEditClick}
            id="deleteFolder"
          >
            <img src="images/trash-icon.svg" alt="delete icon" />
            삭제
          </button>
        </div>
      )}
    </div>
  );
};
