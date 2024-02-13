import { Fragment } from "react";
import "./Card.css";

const Card = ({ children, onMouseOver, onMouseLeave }) => {
  return (
    <Fragment>
      <div
        className="card"
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default Card;
