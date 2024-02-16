import useFolderList from "../hooks/useFolderList.js";
import "./FolderList.css";
import CardList from "../components/CardList";
import { getFolderLinks } from "../api";
import { useState, useEffect } from "react";

const FolderList = () => {
  const folderList = useFolderList();
  const [items, setItems] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);

  const handleLoad = async (folderId) => {
    if (folderId !== null) {
      const folder = folderList.find((folder) => folder.id === folderId);

      if (folder && folder.link && folder.link.count > 0) {
        const { data } = await getFolderLinks(folderId);
        setItems(data);
      } else {
        setItems([]);
      }
    } else {
      const { data } = await getFolderLinks();
      setItems(data);
    }
  };

  const handleFolderClick = (folderId) => {
    setSelectedFolder(folderId);
  };

  useEffect(() => {
    handleLoad(selectedFolder);
  }, [selectedFolder, folderList]);

  return (
    <div>
      <div className="folderList">
        <button
          className="folderButton"
          onClick={() => handleFolderClick(null)}
        >
          전체
        </button>
        {folderList.map((folder) => (
          <div key={folder.id}>
            <button
              className="folderButton"
              onClick={() => handleFolderClick(folder.id)}
            >
              {folder.name}
            </button>
          </div>
        ))}
      </div>
      {items.length > 0 ? (
        <CardList items={items} />
      ) : (
        <p className="noLink">저장된 링크가 없습니다.</p>
      )}
    </div>
  );
};

export default FolderList;
