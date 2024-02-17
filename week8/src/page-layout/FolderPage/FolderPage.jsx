import "./FolderPage.css";

export const FolderPage = ({
  addLink,
  searchBar,
  cardList,
  classification,
}) => {
  return (
    <div className="FolderPage">
      {addLink}
      <div className="FolderPage-items">
        {searchBar}
        {classification}
        {cardList}
      </div>
    </div>
  );
};
