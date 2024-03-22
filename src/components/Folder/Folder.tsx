import React, { useState, useEffect } from "react";
import { useGetFolderById } from "../../hooks/useGetFolder.tsx";
import SearchBar from "../common/SearchBar/SearchBar.tsx";
import FolderList from "./FolderList/FolderList.tsx";
import AllFolderCard from "./FolderCard/AllFolderCard.tsx";
import FolderCard from "./FolderCard/FolderCard.tsx";
import useFolderLinks from "../../hooks/useFolderLinks.tsx";
import renderButton from "../../utils/renderButtons.tsx";
import SelectedOption from "./SelectedOption/SelectedOption.tsx";
import * as S from "./FolderStyled.tsx";

interface Data {
  data: any;
}
function Folder() {
  const { data }: Data = useGetFolderById();
  const dataArray = data?.data;

  const [activeButton, setActiveButton] = useState("전체");
  const [selectedFolder, setSelectedFolder] = useState("");

  useEffect(() => {
    if (selectedFolder === "" && dataArray?.length > 0) {
      setSelectedFolder("전체");
    }
  }, [selectedFolder, dataArray]);

  const folderLinks = useFolderLinks(selectedFolder, dataArray);

  const handleButtonClick = (name: string) => {
    setActiveButton(name);
    setSelectedFolder(name);
  };

  const renderedButtons = renderButton({
    dataArray,
    activeButton,
    handleButtonClick,
  });

  return (
    <S.Folder>
      <S.FolderItems>
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
          <S.None>저장된 링크가 없습니다.</S.None>
        )}
      </S.FolderItems>
    </S.Folder>
  );
}

export default Folder;
