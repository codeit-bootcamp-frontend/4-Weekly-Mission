import { Ul } from "./style";

const FolderList = ({ folders, onClick, selectedFolder, isLoading }) => {
  const handleClick = (e) => onClick(e);

  return (
    <Ul>
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
    </Ul>
  );
};

export default FolderList;
