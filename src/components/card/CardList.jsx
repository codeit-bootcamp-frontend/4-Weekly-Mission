import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import "./CardList.css";

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
