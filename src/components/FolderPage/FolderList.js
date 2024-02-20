import useFolderList from "../../hooks/useFolderList.js";
import "./FolderList.css";
import CardList from "../CardList.js";
import { getFolderLinks, fetchFolderLinks } from "../../api.js";
import { useState, useEffect } from "react";
import UtilIcons from "./UtilIcons.js";
import add from "../../assets/add.svg";
import FolderButtons from "./FolderButtons";

const FolderList = () => {
  const folderList = useFolderList();
  const [links, setLinks] = useState([]);
  const [selectedFolderName, setSelectedFolderName] = useState("");

  const handleLoadAllLinksData = async () => {
    const { data } = await getFolderLinks();
    setLinks(data);
  };

  useEffect(() => {
    handleLoadAllLinksData();
  }, []);

  const handleFolderClick = async (folderId) => {
    if (!folderId) {
      handleLoadAllLinksData();
      setSelectedFolderName("");
    } else {
      setSelectedFolderName(
        folderList.find((folder) => folder.id === folderId)?.name
      );
      try {
        const { links } = await fetchFolderLinks(folderId);
        setLinks(links);
      } catch (error) {
        setLinks([]);
      }
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
        {selectedFolderName && selectedFolderName.length > 0 && <UtilIcons />}
      </div>
      {links ? (
        <CardList items={links} />
      ) : (
        <p className="noLink">저장된 링크가 없습니다.</p>
      )}
    </div>
  );
};

export default FolderList;
