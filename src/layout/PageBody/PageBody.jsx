import "./PageBody.css";

export const PageBody = ({ pageInfo, searchBar, cardList }) => {
  return (
    <div className="PageBody">
      {pageInfo}
      <div className="PageBody-items">
        {searchBar}
        {cardList}
      </div>
    </div>
  );
};
