import "./PageBody.css";

export const PageBody = ({ folderInfo, searchBar, cardList }) => {
  return (
    <div className="PageBody">
      {folderInfo}
      <div className="PageBody-items">
        {searchBar}
        {cardList}
      </div>
    </div>
  );
};
