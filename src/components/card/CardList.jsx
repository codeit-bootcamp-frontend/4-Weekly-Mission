import { useState, useEffect } from "react";
import Card from "./Card";
import "./CardList.css";

//props 배열형태, {cards}를 바로 지정함으로써 props.cards 사용을 방지함
function CardList({ cards }) {
  // const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   const fetchCards = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://bootcamp-api.codeit.kr/api/sample/folder"
  //       );
  //       if (response.ok) {
  //         const data = await response.json();
  //         setCards(data.folder.links);
  //       } else {
  //         throw new Error("Failed to fetch cards");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching cards:", error);
  //     }
  //   };

  //   fetchCards();
  // }, []);

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
