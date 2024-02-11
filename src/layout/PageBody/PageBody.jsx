import "./PageBody.css";

export const PageBody = ({ PageInfo, searchBar, cardList }) => {
  return (
    <div className="PageBody">
      {PageInfo}
      <div className="PageBody-items">
        {searchBar}
        {cardList}
      </div>
    </div>
  );
};
