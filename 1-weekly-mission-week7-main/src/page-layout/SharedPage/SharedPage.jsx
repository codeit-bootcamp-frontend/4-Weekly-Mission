import "./SharedPage.css";

export const SharedPage = ({
  folderInfo,
  searchBar,
  cardList,
  cardButtons,
}) => {
  return (
    <div className="SharedPage">
      {folderInfo}
      <div className="SharedPage-items">
        {searchBar}
        {cardButtons}
        {cardList}
      </div>
    </div>
  );
};
