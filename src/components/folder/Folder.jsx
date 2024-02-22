import FolderContainer from "./FolderContainer";
import SearchLinkInput from "./SearchLinkInput";

import MainContainer from "./MainContainer";

import AddLink from "./addLink/AddLink";
import FolderMain from "./folderMain/FolderMain";

function Folder() {
  return (
    <>
      <FolderContainer>
        <AddLink />
        <MainContainer>
          <SearchLinkInput type="text" placeholder="링크를 검색해 보세요" />
          <FolderMain />
        </MainContainer>
      </FolderContainer>
    </>
  );
}
export default Folder;
