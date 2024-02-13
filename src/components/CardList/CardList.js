import { Fragment } from "react";
import "./CardList.css";

const CardList = ({ children }) => {
  return (
    <Fragment>
      <div className="cardList">{children}</div>
    </Fragment>
  );
};

export default CardList;
