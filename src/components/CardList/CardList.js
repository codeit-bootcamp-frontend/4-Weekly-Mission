import { Fragment } from "react";
import Card from "../Card/Card";
import "./CardList.css";

const CardList = ({ items }) => {
  return (
    <Fragment>
      <div className="cardList">
        {items.map((item) => (
          <div key={item.id} className="card">
            <Card item={item} />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default CardList;
