import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import "../css/CardList.css";

function CardList(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        setCards(response.data.folder.links);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.id}
          description={card.description}
          imageSource={card.imageSource}
          createdAt={card.createdAt}
          url={card.url}
        />
      ))}
    </div>
  );
}

export default CardList;
