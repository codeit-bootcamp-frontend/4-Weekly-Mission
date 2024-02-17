import React from "react";
import favoriteIcon from "../Assets/image/star.png";
import kebabIcon from "../Assets/image/kebab.png";

export function SharedCard({ cardInfo, key }) {
  const { imageSource, createdAt, description, url } = cardInfo;

  const inputDate = new Date(createdAt);

  const year = inputDate.getFullYear();
  const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
  const day = inputDate.getDate().toString().padStart(2, "0");
  const createdAtDate = `${year}. ${month}. ${day}`;

  return (
    <>
      <main>
        <a href={url} target="_blank">
          <div className="card">
            <div className="cardImgContainer">
              <img
                src={imageSource}
                className="cardImg"
                alt="카드 이미지"
              ></img>
              <div>
                <img
                  src={favoriteIcon}
                  className="favoirte"
                  alt="즐겨찾기"
                ></img>
                <img src={kebabIcon} className="kebab" alt="더보기"></img>
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
