import { useState, useEffect } from "react";
import { useGetFolderById } from "../../hooks/useGetFolder";
import SearchBar from "../common/SearchBar/SearchBar";
import "./Folder.css";

import FolderList from "./FolderList";
import AllFolderCard from "./FolderCard/AllFolderCard";
import FolderCard from "./FolderCard/FolderCard";
import useFolderLinks from "../../hooks/useFolderLinks";
import renderButton from "../../utils/renderButtons";
import SelectedOption from "./SelectedOption/SelectedOption";

function Folder() {
  const { data } = useGetFolderById();
  const dataArray = data?.data;

  const [activeButton, setActiveButton] = useState("전체");
  const [selectedFolder, setSelectedFolder] = useState("");

  useEffect(() => {
    if (selectedFolder === "" && dataArray?.length > 0) {
      setSelectedFolder("전체");
    }
  }, [selectedFolder, dataArray]);

  const folderLinks = useFolderLinks(selectedFolder, dataArray);

  const handleButtonClick = (name) => {
    setActiveButton(name);
    setSelectedFolder(name);
  };

  const renderedButtons = renderButton({
    dataArray,
    activeButton,
    handleButtonClick,
  });

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
        ) : folderLinks.length > 0 ? (
          <FolderCard folderLinks={folderLinks} />
        ) : (
          <h2 className="FolderCard-none">저장된 링크가 없습니다.</h2>
        )}
      </div>
    </div>
  );
}

export default Folder;
