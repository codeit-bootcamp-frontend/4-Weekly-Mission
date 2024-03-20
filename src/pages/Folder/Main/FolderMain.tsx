import { useEffect, useState } from "react";
import SearchLink from "../../../components/common/Input/SearchLink/SearchLink";
import EditToolbar from "./Toolbar/Edit/EditToolbar";
import SortToolbar from "./Toolbar/Sort/SortToolbar";
import AddFolder from "../../../components/common/Button/ActionButton";
import FolderCard from "./Card/FolderCard";
import { BASED_URL } from "../../../constnats/constant";
import { updatedDate, updatedDuration } from "../../../utils/createdAt";
import { Link, Folder } from "../../../constnats/types";
import * as S from "./FolderMainStyle";

interface Props {
  onChange: (folderList: Folder[]) => void;
}

const FolderMain = ({ onChange }: Props) => {
  const [folder, setFolder] = useState<Folder>({ id: null, name: "전체" });
  const [cardData, setCardData] = useState<Link[]>([]);
  const [folderList, setFolderList] = useState<Folder[]>([]);
  const [showToolbar, setShowToolbar] = useState<boolean>(false);

  const handleFolderChange = (folder: Folder, folderList: Folder[]) => {
    setFolder(folder);
    setFolderList(folderList);
    onChange(folderList);
    setShowToolbar(folder.name !== "전체");
  };

  console.log(folderList);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `${BASED_URL}/users/1/links`;
        if (folder.id !== null) {
          url = `${BASED_URL}/users/1/links?folderId=${folder.id}`;
        }
        const response = await fetch(url);
        const responseData = await response.json();
        const folderData = responseData.data.map((link: Link) => ({
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
        {showToolbar && <EditToolbar folderName={folder.name} />}
      </S.Box>
      {cardData.length === 0 ? (
        <S.NoneLink>저장된 링크가 없습니다.</S.NoneLink>
      ) : (
        <S.Grid>
          <FolderCard cardData={cardData} folderList={folderList} />
        </S.Grid>
      )}
    </S.Container>
  );
};

export default FolderMain;
