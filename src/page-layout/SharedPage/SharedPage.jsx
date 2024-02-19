import ActionButtons from "ui/ActionButtons/ActionButtons";
import "./SharedPage.css";

export const SharedPage = ({
  folderInfo,
  searchBar,
  folderButtons,
  cardList,
}) => {
  return (
    <div className="SharedPage">
      {folderInfo}
      <div className="SharedPage-items">
        {searchBar}
        {folderButtons}
        {cardList}
      </div>
    </div>
  );
};
