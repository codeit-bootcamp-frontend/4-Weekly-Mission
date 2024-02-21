import "./Card.css";
import defaultCardImg from "../../assets/images/defaultCardImg.svg";
import { getTimeDiff, formatDate } from "../../utils/calculateDate";
import emptyStarImg from "../../assets/images/emptyStar.png";
import fullStarImg from "../../assets/images/fullStar.png";
import kebabImg from "../../assets/images/kebab.png";
import addImg from "../../assets/images/addWhite.png";
import { useState } from "react";
import Button from "./Button";

function Card({ link, isMobile }) {
  const [star, setStar] = useState(emptyStarImg);

  const cardImgStyle = {
    borderRadius: "13px 13px 0 0",
    backgroundImage: `url(${
      link.imageSource ? link.imageSource : defaultCardImg
    }`,
  };

  const handleCardClick = () => {
    window.open(link.url, "_blank");
  };

  const handleStarClick = (e) => {
    e.stopPropagation();
    star === emptyStarImg ? setStar(fullStarImg) : setStar(emptyStarImg);
  };

  return (
    <div className="Card" onClick={handleCardClick}>
      <div className="Card-img" style={cardImgStyle}>
        <img className="Card-star" src={star} onClick={handleStarClick} />
      </div>
      <div className="Card-information flex-col">
        <p className="Card-diffDate">{getTimeDiff(link.createdAt)}</p>
        <p className="Card-description">{link.description}</p>
        <p className="Card-postDate">{formatDate(link.createdAt)}</p>
        <img className="Card-kebab" src={kebabImg} />
      </div>
      <Button className="Card-Button">
        폴더 추가
        <img className="Card-addImg" src={addImg} alt="add" />
      </Button>
    </div>
  );
}

export default Card;
