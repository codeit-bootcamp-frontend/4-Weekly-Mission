import { useEffect, useState } from "react";
import { getFetchData } from "../utils/getFetchData";

function FolderListItem({ folder, onClick }) {
  const handleClick = () => {
    onClick({ folder });
  };

  return (
    <div>
      <button className="folderList__Btn" onClick={handleClick}>
        {folder.name}
      </button>
    </div>
  );
}

function FolderList({ handleFolderListItemClick }) {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const getFolderList = async () => {
      try {
        const result = await getFetchData(`/api/users/11/folders`);
        setFolders(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    getFolderList();
  }, []);

  return (
    <div className="folderList">
      {folders.map((folder) => {
        return (
          <FolderListItem
            key={folders.id}
            folder={folder}
            onClick={handleFolderListItemClick}
          />
        );
      })}
    </div>
  );
}

export default FolderList;
