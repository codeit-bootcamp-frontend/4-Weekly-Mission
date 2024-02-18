import "./SharedPage.css";

export const SharedPage = ({
  folderInfo,
  searchBar,
  cardList,
  guideButton,
}) => {
  return (
    <div className="SharedPage">
      {folderInfo}
      <div className="SharedPage-items">
        {searchBar}
        {guideButton}
        {cardList}
      </div>
    </div>
  );
};
