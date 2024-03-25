import React from "react";
import "../Styles/FolderCard.css";
import { LinkData } from "../API/FolderPageApi";
import star from "../Assets/image/star.svg";

interface FolderCardProps {
  cardInfo: LinkData;
}

export function FolderCard({ cardInfo }: FolderCardProps) {
  const { imageSource, createdAt, description, url } = cardInfo;

  const inputDate = new Date(createdAt);

  const year = inputDate.getFullYear();
  const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
  const day = inputDate.getDate().toString().padStart(2, "0");
  const createdAtDate = `${year}. ${month}. ${day}`;

  const getCreatedFrom = (createdAt: string): string => {
    const now = new Date();
    const timeDifference = now.getTime() - new Date(createdAt).getTime();

    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30 * 12));

    if (minutes < 2) {
      return "1 minute ago";
    }
    if (minutes <= 59) {
      return `${minutes} minutes ago`;
    }
    if (hours < 1) {
      return "1 hour ago";
    }
    if (hours <= 23) {
      return `${hours} hours ago`;
    }
    if (days < 1) {
      return "1 day ago";
    }
    if (days <= 30) {
      return `${days} days ago`;
    }
    if (months < 1) {
      return "1 month ago";
    }
    if (months <= 11) {
      return `${months} months ago`;
    }
    if (years < 1) {
      return "1 year ago";
    }
    const remainingMonths = months % 12;
    return `${Math.floor(years)} years ago`;
  };

  const src = imageSource ? imageSource : "/src/Assets/image/defaultImg.svg";
  const alt = imageSource ? "카드이미지" : "기본이미지";

  return (
    <>
      <main>
        <a href={url} target="_blank">
          <div className="folderCard">
            <div className="cardImgContainer">
              <img src={src} className="cardImg" alt={alt}></img>
              <div>
                <img src={star} className="favoriteImg" alt="즐겨찾기"></img>
                <img
                  src="/src/Assets/image/kebab.png"
                  className="kebabImg"
                  alt="더보기"
                ></img>
              </div>
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
