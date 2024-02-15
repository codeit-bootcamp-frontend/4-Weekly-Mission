import "./SharedPage.css";

function SharedPage({ folderInfo, searchBar, cardList }) {
  return (
    <div className="SharedPage">
      {folderInfo}
      <div className="SharedPage-items">
        {searchBar}
        {cardList}
      </div>
    </div>
  );
}

export default SharedPage;
