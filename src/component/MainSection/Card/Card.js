import "./Card.css";
import React, { useState, useEffect } from "react";
import { elapsedTime } from "./elapsedTime";

const FolderNameSection = () => {
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
    <div className="Cards">
      {linksData.map((link) => (
        <a
          className="Card"
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="CardImg" src={link.imageSource} alt={link.title} />
          <div className="Content">
            <span className="Elapsed-time">{elapsedTime(link.createdAt)}</span>
            <p className="Description">{link.description}</p>
            <p className="CreatedAt">{formatCreatedAt(link.createdAt)}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default FolderNameSection;
