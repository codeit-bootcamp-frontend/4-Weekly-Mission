import "./PageBody.css";

const PageBody = ({ searchBar, cardList }) => {
  return (
    <div className="PageBody-items">
      {searchBar}
      {cardList}
    </div>
  );
};

export default PageBody;
