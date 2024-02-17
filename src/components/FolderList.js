import useFolderList from "../hooks/useFolderList.js";
import "./FolderList.css";
import CardList from "../components/CardList";
import { getFolderLinks } from "../api";
import { useState, useEffect } from "react";
import penIcon from "../assets/pen.svg";
import shareIcon from "../assets/share.svg";
import deleteIcon from "../assets/delete.svg";
import add from "../assets/add.svg";

const FolderList = () => {
  const folderList = useFolderList();
  const [items, setItems] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [selectedFolderName, setSelectedFolderName] = useState(null);

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
    setSelectedFolderName(
      folderList.find((folder) => folder.id === folderId)?.name
    );
  };

  useEffect(() => {
    handleLoad(selectedFolder);
  }, [selectedFolder, folderList]);

  return (
    <div className="wrapper">
      <div className="folderListWrapper">
        <div className="folderList">
          <button
            className="folderButton"
            onClick={() => handleFolderClick([null])}
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
        <p>
          폴더 추가
          <img src={add} alt="add icon" />
        </p>
      </div>
      <div className="selectedFolderName">
        {selectedFolderName}
        {selectedFolderName !== null && (
          <div className="utilContainer">
            <div>
              <img src={shareIcon} alt="공유 아이콘" />
              공유
            </div>
            <div>
              <img src={penIcon} alt="이름변경 아이콘" />
              이름 변경
            </div>
            <div>
              <img src={deleteIcon} alt="삭제 아이콘" />
              삭제
            </div>
          </div>
        )}
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
