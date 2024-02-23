import React from "react";
import { elapsedTime, formatCreatedAt } from "../../../utils/utils";

const FolderCardList = ({ links }) => {
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
            style={{ backgroundImage: `url(${link.image_source})` }}
          ></div>
          <div className="content">
            <span className="elapsed-time">{elapsedTime(link.created_at)}</span>
            <p className="description">{link.description}</p>
            <p className="createdAt">{formatCreatedAt(link.created_at)}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default FolderCardList;
