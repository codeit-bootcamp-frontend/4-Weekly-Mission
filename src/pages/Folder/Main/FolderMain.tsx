import { useState } from "react";
import SearchLink from "components/common/Input/SearchLink/SearchLink";
import AddFolder from "pages/Folder/Main/ActionButton/ActionButton";
import EditToolbar from "./Toolbar/Edit/EditToolbar";
import SortToolbar from "./Toolbar/Sort/SortToolbar";
import FolderCard from "./Card/FolderCard";
import { FolderList, Folder } from "constnats/types";
import * as S from "./FolderMainStyle";

interface Props {
  cardData: Folder[];
  folderList: FolderList[];
  onChange: (folder: FolderList) => void;
}

const FolderMain = ({ cardData, folderList, onChange }: Props) => {
  const [folder, setFolder] = useState<FolderList>({ id: null, name: "전체" });
  const [showToolbar, setShowToolbar] = useState<boolean>(false);

  const handleFolderChange = (folder: FolderList) => {
    setFolder(folder);
    setShowToolbar(folder.name !== "전체");
    onChange(folder);
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
      {folder.link?.count === 0 ? (
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
