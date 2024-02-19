import { SharedPageContainer, SharedPageItems } from "./SharedPageCss";

export const SharedPage = ({ folderInfo, searchBar, cardList, folderList }) => {
  return (
    <SharedPageContainer>
      {folderInfo}
      <SharedPageItems>
        {searchBar}
        {folderList}
        {cardList}
      </SharedPageItems>
    </SharedPageContainer>
  );
};