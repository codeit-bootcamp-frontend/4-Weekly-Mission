import "./Card.css";
import React, { useState, useEffect } from "react";
import { elapsedTime } from "./elapsedTime";

const Card = () => {
  const [linksData, setLinksData] = useState([]);

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/folder")
      .then((response) => response.json())
      .then((data) => {
        setLinksData(data.folder.links);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const formatCreatedAt = (createdAt) => {
    return new Date(createdAt).toISOString().split("T")[0];
  };

  return (
    <div className="cards">
      {linksData.map((link) => (
        <a
          className="card"
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="cardImg" src={link.imageSource} alt={link.title} />
          <div className="content">
            <span className="elapsed-time">{elapsedTime(link.createdAt)}</span>
            <p className="description">{link.description}</p>
            <p className="createdAt">{formatCreatedAt(link.createdAt)}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Card;
