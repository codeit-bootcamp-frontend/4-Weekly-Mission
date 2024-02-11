import { Fragment } from "react";
import "./SharePage.css";

const SharePage = ({ folderInfo, searchBar }) => {
  return (
    <Fragment>
      <div className="sharePage">
        {folderInfo}
        <div className="sharePage-content">{searchBar}</div>
      </div>
    </Fragment>
  );
};

export default SharePage;
