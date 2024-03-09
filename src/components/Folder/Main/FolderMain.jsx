import { useEffect, useState } from "react";
import SearchLink from "../../common/Input/SearchLink/SearchLink";
import EditToolbar from "../../common/Toolbar/Edit/EditToolbar";
import SortToolbar from "../../common/Toolbar/Sort/SortToolbar";
import AddFolder from "../../common/ActionButton/ActionButton";
import FolderCard from "../../common/Card/FolderCard";
import { BASED_URL } from "../../../constnats/constant";
import { updatedDate, updatedDuration } from "../../../utils/createdAt";
import * as S from "./FolderMainStyle";

const FolderMain = () => {
  const [folder, setFolder] = useState({ id: null, name: "전체" });
  const [cardData, setCardData] = useState([]);

  const handleFolderChange = (folder) => {
    setFolder(folder);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `${BASED_URL}/users/1/links`;
        if (folder.id !== null) {
          url = `${BASED_URL}/users/1/links?folderId=${folder.id}`;
        }
        const response = await fetch(url);
        const responseData = await response.json();
        const folderData = responseData.data.map((link) => ({
          ...link,
          time: updatedDuration(link.created_at),
          date: updatedDate(link.created_at),
        }));
        setCardData(folderData);
        console.log(folderData);
      } catch (error) {
        console.error("Error");
      }
    };
    fetchData();
  }, [folder]);

  return (
    <S.Container>
      <SearchLink />
      <S.Box>
        <SortToolbar onChange={handleFolderChange} />
        <AddFolder />
      </S.Box>
      <S.Box>
        <S.Title>{folder.name}</S.Title>
        <EditToolbar />
      </S.Box>
      {cardData.length === 0 ? (
        <S.NoneLink>저장된 링크가 없습니다.</S.NoneLink>
      ) : (
        <S.Grid>
          <FolderCard cardData={cardData} />
        </S.Grid>
      )}
    </S.Container>
  );
};

export default FolderMain;
