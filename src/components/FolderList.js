import { useEffect, useState } from "react";
import { getFetchData } from "../utils/getFetchData";

function FolderListItem({ folder, onClick }) {
  const handleClick = () => {
    onClick(folder.id);
  };

  return (
    <div>
      <button className="folderList__Btn" onClick={handleClick}>
        {folder.name}
      </button>
    </div>
  );
}

function FolderList() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const getFolderList = async () => {
      try {
        const result = await getFetchData(`/api/users/4/folders`);
        setFolders(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    getFolderList();
  }, []);

  const handleFolderListItemClick = (folderId) => {
    console.log(folderId);
  };

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
