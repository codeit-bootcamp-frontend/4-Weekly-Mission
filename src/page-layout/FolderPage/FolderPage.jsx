import "./FolderPage.css";

const FolderPage = ({ folderInfo, searchBar, AddBar, cardList }) => {
  return (
    <div className="FolderPage">
      {folderInfo}
      <div className="FolderPage-items">
        {AddBar}
        {searchBar}
        {cardList}
      </div>
    </div>
  );
};

export default FolderPage;
