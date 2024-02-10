import React from "react";
import "./CardList.css";

const Card = () => {
  return (
    <div className="Card">
      <a target="_blank">
        <div className="Card-img-warpper">
          <img className="Card-img" alt="카드 이미지" />
        </div>
        <div className="Card-content-wrapper">
          <p></p>
          <p className="description"></p>
          <p></p>
        </div>
      </a>
    </div>
  );
};

const CardList = () => {
  return (
    <ul className="CardList">
      <Card />
    </ul>
  );
};

export default CardList;
