import React from "react";
import "./css/Card.css";
import { formatDate, formatDateAgo } from "../../utils/DateUtils";

function Card({
  id,
  createdAt,
  description,
  imageSource = null,
  title,
  url,
}) {
  const cardDate = formatDate(createdAt);
  const cardCreatedAt = formatDateAgo(createdAt);
  return (
    <div key={id} className="card_container">
      <div className="card_iamgeBox">
        {imageSource ? (
          <img
            className="card_iamgeBox-image"
            src={imageSource}
            alt="card_Image"
          />
        ) : (
          <img
            className="card_iamgeBox-image"
            src="/Images/default.png"
            alt="card_Image"
          />
        )}
      </div>
      <div className="card_content">
        <p className="card_date">{cardDate}</p>
        <p className="card_description">{description}</p>
        <p className="card_createdAt">{cardCreatedAt}</p>
      </div>
    </div>
  );
}

export default Card;
