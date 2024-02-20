import LiWrapper from "./LiWrapper";

const FolderList = ({ folders, onClick, selectedFolder }) => {
  const handleClick = (e) => onClick(e);

  return (
    <ul>
      {folders.length > 0 ? (
        <LiWrapper>
          {folders.map((item) => (
            <li
              key={item.id}
              id={item.id}
              onClick={handleClick}
              className={`${selectedFolder.id === item.id ? "selected" : ""}`}
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
