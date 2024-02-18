import "./Card.css";
import getElapsedTime from "../../util/getElapsedTime";
import { useRef, useState } from "react";
import LinkbraryLogo from "../../asset/images/logo.svg";

const Card = ({ createdAt, description, imageSource }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const elapsedTime = getElapsedTime(createdAt);

  const cardRef = useRef();

  const handleMouseOver = () => {
    setIsMouseOver(true);
    cardRef.current.classList.add("hover");
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
    cardRef.current.classList.remove("hover");
  };

  return (
    <div
      className="Card"
      ref={cardRef}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="Card__thumb-box">
        {imageSource ? (
          <img
            className="Card__thumb"
            src={imageSource}
            alt="링크 미리보기 이미지"
          />
        ) : (
          <div className="Card__noImage">
            <img src={LinkbraryLogo} alt="링크 미리보기 이미지 없음" />
          </div>
        )}
      </div>
      <div className="Card__desc">
        <span className="Card__desc-elapsedTime">{elapsedTime}</span>
        <p className="Card__desc-text">{description}</p>
        <span className="Card__desc-createdAt">{createdAt.split("T", 1)}</span>
      </div>
    </div>
  );
};

export default Card;
