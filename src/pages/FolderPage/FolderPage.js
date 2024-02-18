import "./FolderPage.css";

const FolderPage = ({ folderHeader, searchBar }) => {
  return (
    <div className="folderPage">
      {folderHeader}
      <div className="folderPage-content">
        {searchBar}
        <div className="folderPage-noLink">저장된 링크가 없습니다</div>
      </div>
    </div>
  );
};

export default FolderPage;
