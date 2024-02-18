import { SharedPageContainer, SharedPageItems } from "./SharedPageCss";

export const SharedPage = ({ folderInfo, searchBar, cardList }) => {
  return (
    <SharedPageContainer>
      {folderInfo}
      <SharedPageItems>
        {searchBar}
        {cardList}
      </SharedPageItems>
    </SharedPageContainer>
  );
};