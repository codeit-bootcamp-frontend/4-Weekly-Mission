import { useEffect, useState } from "react";
import { getUserFolders } from "../../api/getUserFolders";
import FolderLists from "./FolderLists";

function FolderList() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    async function getFolderData() {
      const x = await getUserFolders();
      setFolders(x.data);
    }
    getFolderData();
  }, []);

  return (
    <div className="folderHandle">
      {!folders ? (
        <div className="nonfolder">
          <span>저장된 데이터가 없습니다.</span>
        </div>
      ) : (
        <>
          <FolderLists folders={folders} />
        </>
      )}
    </div>
  );
}

export default FolderList;
