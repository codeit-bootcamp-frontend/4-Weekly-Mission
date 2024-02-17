import LiWrapper from "./LiWrapper";

const FolderList = ({ list, onClick }) => {
  const handleClick = (e) => onClick(e);

  return (
    <ul>
      {list.length > 0 ? (
        <LiWrapper>
          <li onClick={handleClick}>전체</li>
          {list.map((item) => (
            <li key={item.id} onClick={handleClick}>
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
