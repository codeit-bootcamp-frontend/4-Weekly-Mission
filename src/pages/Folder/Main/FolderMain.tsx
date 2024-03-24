import { useState, useEffect } from "react";
import SearchInput from "./Input/FolderSearchInput";
import AddFolder from "pages/Folder/Main/ActionButton/ActionButton";
import EditToolbar from "./Toolbar/Edit/EditToolbar";
import SortToolbar from "./Toolbar/Sort/SortToolbar";
import FolderCard from "./Card/FolderCard";
import { updatedDate, updatedDuration } from "utils/createdAt";
import { FOLDER_CARD_DATA_API_URL } from "constants/url";
import { FolderList, Folder } from "constants/types";
import * as S from "./FolderMainStyle";

interface Props {
  folderList: FolderList[];
}

const FolderMain = ({ folderList }: Props) => {
  const [folder, setFolder] = useState<FolderList>({ id: null, name: "전체" });
  const [cardData, setCardData] = useState<Folder[]>([]);
  const [searchFilter, setSearchFilter] = useState<Folder[]>(cardData);

  const handleFolderChange = (folder: FolderList) => {
    setFolder(folder);
  };

  useEffect(() => {
    const folderCardData = async () => {
      try {
        let url =
          folder.id === null
            ? FOLDER_CARD_DATA_API_URL
            : `${FOLDER_CARD_DATA_API_URL}?folderId=${folder.id}`;
        const response = await fetch(url);
        const responseData = await response.json();
        const folderCard = responseData.data.map((cardDataList: Folder) => ({
          ...cardDataList,
          time: updatedDuration(cardDataList.created_at),
          date: updatedDate(cardDataList.created_at),
        }));
        setCardData(folderCard);
        console.log(responseData);
        console.log(folderCard);
      } catch (error) {
        console.error("Error");
      }
    };
    folderCardData();
  }, [folder]);

  return (
    <S.Container>
      <SearchInput cardData={cardData} setSearchFilter={setSearchFilter} />
      <S.Box>
        <SortToolbar folderList={folderList} onChange={handleFolderChange} />
        <AddFolder />
      </S.Box>
      <S.Box>
        <S.Title>{folder.name}</S.Title>
        {folder.name !== "전체" && (
          <EditToolbar folderName={folder.name ?? ""} folderId={folder.id} />
        )}
      </S.Box>
      {folder.link?.count === 0 ? (
        <S.NoneLink>저장된 링크가 없습니다.</S.NoneLink>
      ) : (
        <S.Grid>
          <FolderCard cardData={searchFilter} folderList={folderList} />
        </S.Grid>
      )}
    </S.Container>
  );
};

export default FolderMain;
