import { getFormattedDate, getTimeAgo } from "../util/date.js";
import noImage from "../images/noImage.svg";
import kebab from "../images/kebab.svg";
import emptyStar from "../images/emptyStar.svg";
import "./Card.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { UserContext } from "./FolderDetail.jsx";

export default function Card({ data }) {
  const [showPopover, setShowPopover] = useState(false);

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  function handleImgError(e) {
    e.target.src = noImage;
  }

  const value = React.useContext(UserContext);

  return (
    <div className="cardBox">
      <Link
        to={data.url}
        target="_blank"
        rel="noopener noreferrer"
        className="cardImgBox"
      >
        <img
          className="cardImg"
          src={data.image_source || noImage}
          alt="카드썸네일"
          onError={handleImgError}
        />
      </Link>
      <img className="cardStar" src={emptyStar} alt="빈 별" />
      <div className="cardData">
        <div className="cardTimeAgo">
          <p>{getTimeAgo(data.created_at)}</p>
          <div className="kebab-popover">
            <img onClick={togglePopover} src={kebab} alt="케밥" />
            {showPopover && (
              <div className="popover">
                <div className="popover-delete" onClick={() => value(4)}>
                  삭제하기
                </div>
                <div className="popover-folder-add">폴더에 추가</div>
              </div>
            )}
          </div>
        </div>
        <div className="cardInfo">{data.description || "No Description"}</div>
        <div className="cardCreatedAt">{getFormattedDate(data.created_at)}</div>
      </div>
    </div>
  );
}
