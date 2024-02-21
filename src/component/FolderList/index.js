import { Ul } from "./style";

const FolderList = ({ folders, onClick, selectedFolder }) => {
  const handleClick = (e) => onClick(e);

  return (
    <Ul>
      {folders.length > 0 ? (
        <>
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
        </>
      ) : (
        <span>저장된 링크가 없습니다.</span>
      )}
    </Ul>
  );
};

export default FolderList;
