import React from "react";
import { formatDate, getTimeAgo } from "./utils";

const Card = ({ id, title, imageUrl, createdAt, link }) => {
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <div>
        <span>{getTimeAgo(createdAt)}</span>
        <p>{link}</p>
        <span>{formatDate(createdAt)}</span>
      </div>
    </div>
  );
};

export default Card;
