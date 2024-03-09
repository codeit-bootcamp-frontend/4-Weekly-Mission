import SearchLink from "../../common/Input/SearchLink/SearchLink";
import EditToolbar from "../../common/Toolbar/Edit/EditToolbar";
import SortToolbar from "../../common/Toolbar/Sort/SortToolbar";
import AddFolder from "../../common/ActionButton/ActionButton";
// import FolderCard from "../../common/Card/Card";

import * as S from "./FolderMainStyle";

const FolderMain = () => {
  return (
    <S.Container>
      <SearchLink />
      <S.Box>
        <SortToolbar />
        <AddFolder />
      </S.Box>
      <S.Box>
        <S.Title>ss</S.Title>
        <EditToolbar />
      </S.Box>
      {/* <S.Grid>
        <FolderCard />
      </S.Grid> */}
    </S.Container>
  );
};

export default FolderMain;
