import "./FolderPage.css";

export const FolderPage = ({ addLink, searchBar, content }) => {
  return (
    <div className="FolderPage">
      {addLink}
      <div className="FolderPage-items">
        {searchBar}
        {content}
      </div>
    </div>
  );
};
