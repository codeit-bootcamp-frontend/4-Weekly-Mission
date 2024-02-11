import { Fragment } from "react";
import "./SharePage.css";

const SharePage = ({ folderInfo, searchBar, cardList }) => {
  return (
    <Fragment>
      <div className="sharePage">
        {folderInfo}
        <div className="sharePage-content">
          {searchBar}
          {cardList}
        </div>
      </div>
    </Fragment>
  );
};

export default SharePage;
