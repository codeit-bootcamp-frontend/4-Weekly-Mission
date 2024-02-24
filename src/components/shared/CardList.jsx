import React from "react";
import defaultCardImg from "../../assets/image/default_card_img.jpg";
import { formatDate, formatTimeAgo } from "../../utils/dateUtils";
import duck from "../../assets/image/duck.gif";
import "./CardList.css";

const Card = ({ item }) => {
  const { url, imageSource, description, createdAt } = item;
  return (
    <div className="Card">
      <a href={url} target="_blank" rel="noreferrer">
        <div className="Card-img-warpper">
          <img
            className="Card-img"
            src={imageSource ? imageSource : defaultCardImg}
            alt="카드 이미지"
          />
        </div>
        <div className="Card-content-wrapper">
          <p>{formatTimeAgo(createdAt)}</p>
          <p className="description">{description}</p>
          <p>{formatDate(createdAt)}</p>
        </div>
      </a>
    </div>
  );
};

const CardList = ({ items, folderLoadingError }) => {
  return (
    <ul className="CardList">
      {folderLoadingError ? (
        <li className="duck">
          <img src={duck} />
        </li>
      ) : (
        items.map((item) => {
          return (
            <li key={item.id}>
              <Card item={item} />
            </li>
          );
        })
      )}
    </ul>
  );
};

export default CardList;
