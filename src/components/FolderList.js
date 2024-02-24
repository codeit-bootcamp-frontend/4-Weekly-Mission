import { useEffect, useState } from "react";
import { getFetchData } from "../utils/getFetchData";

function FolderListItem({ folder, onClick }) {
  return (
    <div>
      <button className="folderList__Btn" onClick={() => onClick(folder)}>
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
      <FolderListItem
        folder={{ name: "전체", id: null }}
        onClick={handleFolderListItemClick}
      />
      {folders.map((folder) => {
        return (
          <FolderListItem
            key={folder.id}
            folder={folder}
            onClick={handleFolderListItemClick}
          />
        );
      })}
    </div>
  );
}

export default FolderList;
