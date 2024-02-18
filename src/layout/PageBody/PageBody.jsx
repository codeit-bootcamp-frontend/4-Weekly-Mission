import "./PageBody.css";
import { useLocation } from "react-router-dom";

export const PageBody = ({ pageInfo, addLink, searchBar, cardList }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  if (currentPath === "/shared") {
    return (
      <div className="PageBody">
        {pageInfo}
        <div className="PageBody-items">
          {searchBar}
          {cardList}
        </div>
      </div>
    );
  } else if (currentPath === "/folder") {
    return (
      <div className="PageBody">
        {addLink}
        <div className="PageBody-items">
          {searchBar}
          {cardList}
        </div>
      </div>
    );
  }
};
