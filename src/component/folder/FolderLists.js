import { useEffect, useState } from "react";
import Add from "../../image/add.svg";
import { getUserLinks } from "../../api/getUserFolders";
import FolderLink from "./FolderLink";

function FolderLists({ folders }) {
  const [folder, setFolder] = useState(null);
  const [links, setLinks] = useState([]);

  const handleFolder = (e) => {
    setFolder(e.target.value);
    console.log(e.target.value);
  };

  const handleAddFolder = (e) => {
    console.log("폴더 추가");
  };

  useEffect(() => {
    async function getUserLinksData() {
      const x = await getUserLinks(folder);
      setLinks(x.data);
    }
    getUserLinksData();
  }, [folder]);

  return (
    <>
      <div className="folderSetting">
        <div className="folderList">
          <button
            className="folderButton"
            key={null}
            value={null}
            onClick={handleFolder}
          >
            전체
          </button>
          {folders &&
            folders.map((folder) => (
              <button
                className="folderButton"
                key={folder.id}
                value={folder.id}
                onClick={handleFolder}
              >
                {folder.name}
              </button>
            ))}
        </div>
        <button className="folderAdd" onClick={handleAddFolder}>
          폴더추가
          <img src={Add} />
        </button>
      </div>

      <div className="List">
        <FolderLink links={links} />
      </div>
    </>
  );
}
export default FolderLists;
