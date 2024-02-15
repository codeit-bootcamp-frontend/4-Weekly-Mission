import React from "react";
import "../Styles/Card.css";

export function Card({ cardInfo, key }) {
  const { imageSource, createdAt, description, url } = cardInfo;
  const inputDate = new Date(createdAt);

  const year = inputDate.getFullYear();
  const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
  const day = inputDate.getDate().toString().padStart(2, "0");
  const createdAtDate = `${year}. ${month}. ${day}`;

  const getCreatedFrom = () => {
    const now = new Date();
    const timeDifference = now - inputDate;

    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30 * 12));

    if (minutes < 2) {
      return "1 minute ago";
    } else if (minutes <= 59) {
      return `${minutes} minutes ago`;
    } else if (hours < 1) {
      return "1 hour ago";
    } else if (hours <= 23) {
      return `${hours} hours ago`;
    } else if (days < 1) {
      return "1 day ago";
    } else if (days <= 30) {
      return `${days} days ago`;
    } else if (months < 1) {
      return "1 month ago";
    } else if (months <= 11) {
      return `${months} months ago`;
    } else if (years < 1) {
      return "1 year ago";
    } else {
      const remainingMonths = months % 12;
      return `${Math.floor(years)} years ago`;
    }
  };

  return (
    <>
      <main>
        <a href={url}>
          <div className="card">
            <div className="cardImgContainer">
              <img
                src={imageSource}
                className="cardImg"
                alt="카드 이미지"
              ></img>
            </div>
            <div className="cardContents">
              <p className="createdFrom">{getCreatedFrom(createdAt)}</p>
              <p className="description">{description}</p>
              <p className="createdAt">{createdAtDate}</p>
            </div>
          </div>
        </a>
      </main>
    </>
  );
}
