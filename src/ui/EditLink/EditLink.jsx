import "./EditLink.css";

export const EditLink = ({ currentCategory }) => {
  const isCurrentAll = currentCategory === "전체";
  return (
    <div className="EditLink-wrapper">
      <div className="current-category">{currentCategory}</div>
      {!isCurrentAll && (
        <div className="EditLinks">
          <button className="edit-button">
            <img src="images/share-icon.svg" alt="share icon" />
            공유하기
          </button>
          <button className="edit-button">
            <img src="images/share-icon.svg" alt="rename icon" />
            이름 변경
          </button>
          <button className="edit-button">
            <img src="images/share-icon.svg" alt="delete icon" />
            삭제
          </button>
        </div>
      )}
    </div>
  );
};
