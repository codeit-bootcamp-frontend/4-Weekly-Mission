import './FolderPage.css';

export const FolderPage = ({ searchBar, cardList }) => {
  return (
    <div className="FolderPage">
      {}
      <div className="FolderPage-items">
        {searchBar}
        {cardList}
      </div>
    </div>
  );
};
