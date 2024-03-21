import { useState } from "react";
import SearchLink from "components/common/Input/SearchLink/SearchLink";
import AddFolder from "components/common/Button/ActionButton";
import EditToolbar from "./Toolbar/Edit/EditToolbar";
import SortToolbar from "./Toolbar/Sort/SortToolbar";
import FolderCard from "./Card/FolderCard";
import { FolderList, Folder } from "constnats/types";
import * as S from "./FolderMainStyle";

interface Props {
  cardData: Folder[];
  folderList: FolderList[];
}

const FolderMain = ({ cardData, folderList }: Props) => {
  const [folder, setFolder] = useState<FolderList>({ id: null, name: "전체" });
  const [showToolbar, setShowToolbar] = useState<boolean>(false);

  const handleFolderChange = (folder: FolderList) => {
    setFolder(folder);
    setShowToolbar(folder.name !== "전체");
  };

  return (
    <S.Container>
      <SearchLink />
      <S.Box>
        <SortToolbar folderList={folderList} onChange={handleFolderChange} />
        <AddFolder />
      </S.Box>
      <S.Box>
        <S.Title>{folder.name}</S.Title>
        {showToolbar && <EditToolbar folderName={folder.name} />}
      </S.Box>
      {folderList.length === 0 ? (
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
