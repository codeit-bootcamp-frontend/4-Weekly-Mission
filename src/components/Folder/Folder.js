import { useState, useEffect } from "react";
import { useGetFolderById } from "../../hooks/useGetFolder";
import SearchBar from "../SearchBar/SearchBar";
import "./Folder.css";
import SelectedOption from "../SelectedOption/SelectedOption";
import FolderList from "./FolderList";
import AllFolderCard from "../FolderCard/AllFolderCard";
import FolderCard from "../FolderCard/FolderCard";

function Folder() {
  const { data } = useGetFolderById();
  const dataArray = data?.data;

  const [activeButton, setActiveButton] = useState("전체");
  const [selectedFolder, setSelectedFolder] = useState("");
  const [folderLinks, setFolderLinks] = useState([]);

  useEffect(() => {
    if (selectedFolder === "" && dataArray && dataArray.length > 0) {
      setSelectedFolder("전체");
    }
  }, [selectedFolder, dataArray]);

  useEffect(() => {
    if (selectedFolder && dataArray) {
      const folderId = dataArray.find(
        (item) => item.name === selectedFolder
      )?.id;
      if (folderId) {
        fetch(
          `https://bootcamp-api.codeit.kr/api/users/4/links?folderId=${folderId}`
        )
          .then((response) => response.json())
          .then((data) => {
            setFolderLinks(data.data);
          })
          .catch((error) => {
            console.error("Error fetching folder links:", error);
          });
      }
    }
  }, [selectedFolder, dataArray]);

  const handleButtonClick = (name) => {
    setActiveButton(name);
    setSelectedFolder(name);
  };

  let renderedButtons;

  if (dataArray && Array.isArray(dataArray)) {
    renderedButtons = dataArray.map((item) => (
      <button
        key={item.id}
        className={activeButton === item.name ? "active" : ""}
        onClick={() => handleButtonClick(item.name)}
      >
        {item.name}
      </button>
    ));
  }

  return (
    <div className="Folder">
      <div className="Folder-items">
        <SearchBar />
        <FolderList
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
          renderedButtons={renderedButtons}
        />
        {selectedFolder && (
          <SelectedOption
            selectedFolder={selectedFolder}
            activeButton={activeButton}
          />
        )}
        {selectedFolder === "전체" ? (
          <AllFolderCard />
        ) : (
          <FolderCard folderLinks={folderLinks} />
        )}
      </div>
    </div>
  );
}

export default Folder;
