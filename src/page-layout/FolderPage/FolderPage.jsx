import './FolderPage.css';

export const FolderPage = ({ addLinkSearchBar, searchBar, cardList }) => {
  return (
    <div className="FolderPage">
      {addLinkSearchBar}
      <div className="FolderPage-items">
        {searchBar}
        {cardList}
      </div>
    </div>
  );
};
