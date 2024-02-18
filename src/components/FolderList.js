import { useEffect, useState } from "react";
import { getFetchData } from "../utils/getFetchData";

function FolderListItem({ folder }) {
  return (
    <div>
      <button className="folderList__Btn">{folder.name}</button>
    </div>
  );
}

function FolderList() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const getFolderList = async () => {
      try {
        const result = await getFetchData(`/api/users/1/folders`);
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
        return <FolderListItem key={folders.id} folder={folder} />;
      })}
    </div>
  );
}

export default FolderList;
