import React, { useState } from "react";
import { getFromTime } from "../utils/getFromTime";
import favoriteIcon from "../images/favorite.svg";
import kebabIcon from "../images/kebab.svg";
import "../styles/folderCard.css";
import { CardKebab } from "./CardKebab";

const defaultImage = `https://www.shutterstock.com/image-vector/default-image-icon-vector-missing-600nw-2079504220.jpg`;
export function FolderCard({ cardInfo }) {
  const { image_source, created_at, description, url } = cardInfo;

  const [kebabToggle, setKebabToggle] = useState(false);

  //createdAtDate
  const date = new Date(created_at).toLocaleString();
  const createdAtDate = date
    .split("")
    .slice(0, date.indexOf("오") - 2)
    .join("");

  const src = image_source ? image_source : defaultImage;
  const alt = image_source ? "카드이미지" : "기본이미지";

  const handleClickKebab = (e) => {
    e.preventDefault();
    setKebabToggle(kebabToggle ? false : true);
  };

  return (
    <>
      <a href={url}>
        <div className="card">
          <div className="cardImgSource">
            <img src={src} alt={alt} className="cardImg"></img>
            <div>
              <img
                src={favoriteIcon}
                alt="favorite icon"
                className="favorite"
              ></img>
              <button onClick={handleClickKebab}>
                <img src={kebabIcon} alt="kebab icon" className="kebab"></img>
              </button>
              {kebabToggle && <CardKebab url={url} />}
            </div>
          </div>
          <div className="cardContent">
            <p className="createdFrom">{getFromTime(created_at)}</p>
            <p className="description">{description}</p>
            <p className="createdAt">{createdAtDate}</p>
          </div>
        </div>
      </a>
    </>
  );
}
