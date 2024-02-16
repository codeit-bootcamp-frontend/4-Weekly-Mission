import useFolderList from "../hooks/useFolderList.js";
import "./FolderList.css";

const FolderList = () => {
  const folderList = useFolderList();

  return (
    <div className="folderList">
      <button className="folderButton">전체</button>
      {folderList.map((folder) => (
        <div key={folder.id}>
          <button className="folderButton">{folder.name}</button>
        </div>
      ))}
    </div>
  );
};

export default FolderList;
