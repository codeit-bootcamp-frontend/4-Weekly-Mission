import { useState, useEffect } from "react";
import Card from "./Card";
import "./CardList.css";

//props 배열형태, {cards}를 바로 지정함으로써 props.cards 사용을 방지함
function CardList({ cards }) {
  console.log(cards);
  return (
    <ul className="card-list">
      {cards.map(({ id, description, imageSource, createdAt, url }) => (
        <Card
          key={id}
          description={description}
          imageSource={imageSource}
          createdAt={createdAt}
          url={url}
        />
      ))}
    </ul>
  );
}

export default CardList;
