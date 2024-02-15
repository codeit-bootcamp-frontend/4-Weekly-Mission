import "./SharePage.css";

const SharePage = ({ folderInfo, searchBar, cardList }) => {
  return (
    <div className="sharePage">
      {folderInfo}
      <div className="sharePage-content">
        {searchBar}
        {cardList}
      </div>
    </div>
  );
};

export default SharePage;
