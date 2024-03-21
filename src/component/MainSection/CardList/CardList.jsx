import "./CardList.css";
import React, { useState, useEffect } from "react";
import { elapsedTime } from "../../../utils/utils";
import { fetchData } from "./fetchData";
import { formatCreatedAt } from "../../../utils/utils";

const CardList = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setLinks(data);
    });
  }, []);

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
          <div
            className="cardImg"
            style={{ backgroundImage: `url(${link.imageSource})` }}
          ></div>
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
