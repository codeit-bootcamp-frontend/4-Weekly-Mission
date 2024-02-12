import "./MainFolderPage.css";

const MainFolderPage = ({ folderInfo, searchBar, cardInventory }) => {
  return (
    <div className="MainFolderPage">
      {folderInfo}
        <div className="MainFolderPageItems">
            {searchBar}
            {cardInventory}
        </div>
    </div>
  );
};

export default MainFolderPage;