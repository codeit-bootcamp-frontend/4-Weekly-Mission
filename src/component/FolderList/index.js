import LiWrapper from "./LiWrapper";

const FolderList = ({ list, onClick, selectedFolderId, selectedFolder }) => {
  const handleClick = (e) => onClick(e);

  return (
    <ul>
      {list.length > 0 ? (
        <LiWrapper>
          <li
            onClick={handleClick}
            className={selectedFolder === "전체" ? "selected" : ""}
          >
            전체
          </li>
          {list.map((item) => (
            <li
              key={item.id}
              onClick={handleClick}
              className={`${selectedFolderId === item.id ? "selected" : ""}`}
            >
              {item.name}
            </li>
          ))}
        </LiWrapper>
      ) : (
        <span>저장된 링크가 없습니다.</span>
      )}
    </ul>
  );
};

export default FolderList;
