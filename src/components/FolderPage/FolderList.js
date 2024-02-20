import useFolderList from "../../hooks/useFolderList.js";
import "./FolderList.css";
import CardList from "../CardList.js";
import { getFolderLinks } from "../../api.js";
import { useState, useEffect } from "react";
import UtilIcons from "./UtilIcons.js";
import add from "../../assets/add.svg";
import FolderButtons from "./FolderButtons";

const FolderList = () => {
  const folderList = useFolderList();
  const [items, setItems] = useState([]);
  const [selectedFolderName, setSelectedFolderName] = useState("");

  const handleLoadMockData = async () => {
    const { data } = await getFolderLinks();
    setItems(data);
  };

  useEffect(() => {
    handleLoadMockData();
  }, []);

  const handleFolderClick = (folderId) => {
    if (!folderId) {
      handleLoadMockData();
      setSelectedFolderName([]);
    } else {
      setSelectedFolderName(
        folderList.find((folder) => folder.id === folderId)?.name
      );
      // assume JSON provides necessary data in folder.links
      setItems(folderList.find((folder) => folder.id === folderId)?.links);
    }
  };

  return (
    <div className="wrapper">
      <div className="folderListWrapper">
        <div className="folderList">
          <FolderButtons
            folderList={folderList}
            handleFolderClick={handleFolderClick}
          />
        </div>
        <button className="addFolderButton">
          폴더 추가
          <img src={add} alt="add icon" />
        </button>
      </div>
      <div className="selectedFolderName">
        {selectedFolderName}
        {selectedFolderName.length > 0 && <UtilIcons />}
      </div>
      {items ? (
        <CardList items={items} />
      ) : (
        <p className="noLink">저장된 링크가 없습니다.</p>
      )}
    </div>
  );
};

export default FolderList;
