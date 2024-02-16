import React from "react";
import defaultCardImg from "../../assets/image/default_card_img.jpg";
import "./CardList.css";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`;
}

const Card = ({ item }) => {
  const { url, imageSource, description, createdAt } = item;
  return (
    <div className="Card">
      <a href={url} target="_blank">
        <div className="Card-img-warpper">
          <img
            className="Card-img"
            src={imageSource ? imageSource : defaultCardImg}
            alt="카드 이미지"
          />
        </div>
        <div className="Card-content-wrapper">
          <p>10 minutes ago</p>
          <p className="description">{description}</p>
          <p>{formatDate(createdAt)}</p>
        </div>
      </a>
    </div>
  );
};

const CardList = ({ items }) => {
  return (
    <ul className="CardList">
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Card item={item} />
          </li>
        );
      })}
    </ul>
  );
};
export default CardList;
