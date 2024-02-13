import "./CardList.css";
import React, { useState, useEffect } from "react";
import { elapsedTime } from "./elapsedTime";
import { fetchData } from "./fetchData";

const CardList = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setLinks(data);
    });
  }, []);

  const formatCreatedAt = (createdAt) => {
    return new Date(createdAt).toISOString().split("T")[0];
  };

  return (
    <div className="card-list">
      {links.map((link) => (
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

export default CardList;
