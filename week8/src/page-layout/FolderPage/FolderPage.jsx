import "./FolderPage.css";

export const FolderPage = ({
  folderInfo,
  searchBar,
  cardList,
  classification,
}) => {
  return (
    <div className="FolderPage">
      {folderInfo}
      <div className="FolderPage-items">
        {searchBar}
        {classification}
        {cardList}
      </div>
    </div>
  );
};
